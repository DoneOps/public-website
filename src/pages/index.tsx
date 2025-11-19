import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Button from '../components/Button'
import Contact from '../components/contact'
import FeatureCard from '../components/FeatureCard'
import Layout from '../components/layout/Layout'
import ToolsGrid from '../components/ToolsGrid'
import CloudBox from '../components/CloudBox'
import featureData from '../data/features-data'
import HeroImage from '../svg/HeroImage'
import { Seo } from '../components/Seo'
import aws from '../img/aws.svg'
import google from '../img/google-cloud.svg'
import azure from '../img/azure.svg'

interface CloudBoxProps {
  image: string
  altText: string
}

const IndexPage: React.FC = () => (
  <Layout>
    <section className='pt-20 md:pt-40 pb-20'>
      <div className='container mx-auto px-8 lg:flex'>
        <div className='text-center lg:text-left lg:w-1/2'>
          <h1 className='text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-slate-900 dark:text-slate-100 animate-fade-in'>
            We design, build, secure, and maintain infrastructure so your devs don't
            have to.
          </h1>
          <p className='text-xl lg:text-2xl mt-6 font-light text-slate-600 dark:text-slate-300'>
            Let them make features, not servers
          </p>
          <p className='mt-8 md:mt-12'>
            <Button size='lg'>
              <AnchorLink href='#contactus'>
                <a className='text-white'>Contact Us</a>
              </AnchorLink>
            </Button>
          </p>
          <p className='mt-4 text-slate-600 dark:text-slate-400'>
            Your partners in the journey to sustainable DevOps
          </p>
        </div>
        <div className='lg:w-1/2'>
          <HeroImage />
        </div>
      </div>
    </section>
    <section id='features' className='py-20 lg:py-32 bg-slate-50 dark:bg-slate-800/50'>
      <div className='container mx-auto text-center px-8'>
        <h2 className='text-3xl lg:text-5xl font-semibold mb-16 text-slate-900 dark:text-slate-100 animate-slide-up'>Why DoneOps?</h2>
        <div className='flex flex-row flex-wrap'>
          {featureData.map((featureSection) => (
            <div
              key={featureSection.sectionTitle}
              className='flex-auto px-3 lg:w-1/2 md:w-full sm:w-full xs:w-full'
            >
              <FeatureCard featureSection={featureSection} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id='toolkit' className='py-20 lg:py-32 bg-white dark:bg-slate-900'>
      <div className='container mx-auto text-center px-8'>
        <h2 className='text-3xl lg:text-5xl font-semibold mb-16 text-slate-900 dark:text-slate-100 animate-slide-up'>Our Capabilities</h2>
        <ToolsGrid />
      </div>
    </section>
    {/* <section id="yourteam" className="py-20 lg:py-32">
      <div className="container mx-auto text-center px-8">
        <h2 className="text-3xl lg:text-5xl font-semibold mb-16">Meet Your Team</h2>
        <div className="flex flex-row flex-wrap">
          {teamData.map((teamMember) => (
            <div
              key={teamMember.teamMemberName}
              className="flex-auto px-3 lg:w-1/2 md:w-full sm:w-full xs:w-full"
            >
              <TeamCard teamMember={teamMember} />
            </div>
          ))}
        </div>
      </div>
    </section> */}
    <section
      id='contactus'
      className='py-20 lg:py-32 bg-slate-50 dark:bg-slate-800/50'
    >
      <div className='container mx-auto px-8 text-center animate-on-scroll'>
        <h3 className='text-3xl lg:text-5xl font-semibold mb-16 text-slate-900 dark:text-slate-100'>Ready to be done?</h3>
        <Contact />
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => <Seo />
