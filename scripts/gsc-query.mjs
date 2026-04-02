// Google Search Console — basic analytics for doneops.com
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

  // List all properties first
  console.log('=== Your Search Console Properties ===');
  const sites = await searchconsole.sites.list();
  console.log(sites.data.siteEntry?.map(s => `  ${s.siteUrl} (${s.permissionLevel})`).join('\n') || '  No properties found');

  // Query top pages
  console.log('\n=== Top Pages (last 28 days) ===');
  const pages = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate,
      endDate,
      dimensions: ['page'],
      rowLimit: 20,
      type: 'web',
    },
  });
  if (!pages.data.rows) {
    console.warn('  WARNING: No page data returned. Check API permissions for', siteUrl);
  } else {
    for (const row of pages.data.rows) {
      console.log(`  ${row.keys[0]}`);
      console.log(`    clicks: ${row.clicks}  impressions: ${row.impressions}  ctr: ${(row.ctr * 100).toFixed(1)}%  position: ${row.position.toFixed(1)}`);
    }
  }

  // Query top search queries
  console.log('\n=== Top Search Queries (last 28 days) ===');
  const queries = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate,
      endDate,
      dimensions: ['query'],
      rowLimit: 20,
      type: 'web',
    },
  });
  if (!queries.data.rows) {
    console.warn('  WARNING: No query data returned. Check API permissions for', siteUrl);
  } else {
    for (const row of queries.data.rows) {
      console.log(`  "${row.keys[0]}"`);
      console.log(`    clicks: ${row.clicks}  impressions: ${row.impressions}  ctr: ${(row.ctr * 100).toFixed(1)}%  position: ${row.position.toFixed(1)}`);
    }
  }
} catch (e) {
  if (e.message?.includes('Could not load the default credentials')) {
    console.error('ERROR: Google credentials not found.');
    console.error('Run: gcloud auth application-default login --scopes=https://www.googleapis.com/auth/webmasters.readonly');
  } else {
    console.error(`GSC query failed: ${e.message}`);
  }
  process.exit(1);
}
