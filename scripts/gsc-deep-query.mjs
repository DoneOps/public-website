// Google Search Console — advanced analytics and optimization insights for doneops.com
// Requires: gcloud auth application-default login --scopes=https://www.googleapis.com/auth/webmasters.readonly
import { google } from 'googleapis';

try {
  const auth = new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });

  const searchconsole = google.searchconsole({ version: 'v1', auth });
  const siteUrl = 'sc-domain:doneops.com';
  const endDate = new Date().toISOString().slice(0, 10);
  const startDate = new Date(Date.now() - 28 * 86400000).toISOString().slice(0, 10);

  console.log(`Date range: ${startDate} to ${endDate}\n`);

  // 1. Device breakdown
  console.log('=== Traffic by Device ===');
  const devices = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: { startDate, endDate, dimensions: ['device'], type: 'web' },
  });
  if (!devices.data.rows) {
    console.warn('  WARNING: No device data returned.');
  } else {
    for (const row of devices.data.rows) {
      console.log(`  ${row.keys[0]}: clicks=${row.clicks} impressions=${row.impressions} ctr=${(row.ctr * 100).toFixed(1)}% pos=${row.position.toFixed(1)}`);
    }
  }

  // 2. Country breakdown
  console.log('\n=== Traffic by Country ===');
  const countries = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: { startDate, endDate, dimensions: ['country'], rowLimit: 10, type: 'web' },
  });
  if (!countries.data.rows) {
    console.warn('  WARNING: No country data returned.');
  } else {
    for (const row of countries.data.rows) {
      console.log(`  ${row.keys[0]}: clicks=${row.clicks} impressions=${row.impressions} ctr=${(row.ctr * 100).toFixed(1)}% pos=${row.position.toFixed(1)}`);
    }
  }

  // 3. Pages with high impressions but low CTR (opportunities)
  console.log('\n=== High Impressions, Low CTR (title/meta optimization opportunities) ===');
  const opportunities = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: { startDate, endDate, dimensions: ['page'], rowLimit: 50, type: 'web' },
  });
  const oppRows = (opportunities.data.rows || [])
    .filter(r => r.impressions >= 20 && r.ctr < 0.05)
    .sort((a, b) => b.impressions - a.impressions);
  if (oppRows.length === 0) {
    console.log('  No pages with high impressions and low CTR found.');
  } else {
    for (const row of oppRows) {
      console.log(`  ${row.keys[0]}`);
      console.log(`    impressions=${row.impressions} clicks=${row.clicks} ctr=${(row.ctr * 100).toFixed(1)}% pos=${row.position.toFixed(1)}`);
    }
  }

  // 4. Queries where position is 5-20 (page 1-2 edge, push potential)
  console.log('\n=== Queries on the Cusp (position 5-20, worth optimizing) ===');
  const cusp = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: { startDate, endDate, dimensions: ['query'], rowLimit: 100, type: 'web' },
  });
  const cuspRows = (cusp.data.rows || [])
    .filter(r => r.position >= 5 && r.position <= 20 && r.impressions >= 5)
    .sort((a, b) => a.position - b.position);
  if (cuspRows.length === 0) {
    console.log('  No cusp queries found.');
  } else {
    for (const row of cuspRows) {
      console.log(`  "${row.keys[0]}" — pos=${row.position.toFixed(1)} impressions=${row.impressions} clicks=${row.clicks}`);
    }
  }

  // 5. Query + page combos (what pages rank for what)
  console.log('\n=== Top Query + Page Combos ===');
  const combos = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: { startDate, endDate, dimensions: ['query', 'page'], rowLimit: 30, type: 'web' },
  });
  if (!combos.data.rows) {
    console.warn('  WARNING: No query+page combo data returned.');
  } else {
    for (const row of combos.data.rows) {
      console.log(`  "${row.keys[0]}" → ${row.keys[1]}`);
      console.log(`    clicks=${row.clicks} impressions=${row.impressions} pos=${row.position.toFixed(1)}`);
    }
  }

  // 6. URL inspection for key pages
  console.log('\n=== Index Coverage (key pages) ===');
  const keyPages = [
    'https://doneops.com/',
    'https://doneops.com/blog/',
    'https://doneops.com/case-studies/',
    'https://doneops.com/blog/flux-graduation/',
    'https://doneops.com/blog/our-path-to-doneops/',
    'https://doneops.com/case-studies/cloudmigration/',
    'https://doneops.com/case-studies/security/',
    'https://doneops.com/case-studies/infrastructure/',
  ];
  for (const url of keyPages) {
    try {
      const result = await searchconsole.urlInspection.index.inspect({
        requestBody: { inspectionUrl: url, siteUrl },
      });
      const r = result.data.inspectionResult;
      const status = r.indexStatusResult?.coverageState || 'unknown';
      const crawled = r.indexStatusResult?.lastCrawlTime || 'never';
      const verdict = r.indexStatusResult?.verdict || 'unknown';
      console.log(`  ${url}`);
      console.log(`    verdict=${verdict} status="${status}" lastCrawl=${crawled}`);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      const status = e.code || e.status;
      if (status === 401 || status === 403) {
        console.error(`  ERROR: Authentication/permission failure — ${msg}`);
        console.error('  Aborting URL inspection. Check credentials and permissions.');
        break;
      }
      console.error(`  ${url} — inspection failed: ${msg}`);
    }
  }
} catch (e) {
  if (e.message?.includes('Could not load the default credentials')) {
    console.error('ERROR: Google credentials not found.');
    console.error('Run: gcloud auth application-default login --scopes=https://www.googleapis.com/auth/webmasters.readonly');
  } else {
    console.error(`GSC deep query failed: ${e.message}`);
  }
  process.exit(1);
}
