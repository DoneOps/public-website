import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Button from '../components/Button'
// import Card from '../components/Card'
import Contact from '../components/contact'
import TeamCard from '../components/teamMemberCard'
import FeatureCard from '../components/FeatureCard'
// import LabelText from '../components/LabelText'
import Layout from '../components/layout/Layout'
// import SplitSection from '../components/SplitSection'
// import StatsBox from '../components/StatsBox'
import featureData from '../data/features-data'
import teamData from '../data/team-data'
import HeroImage from '../svg/HeroImage'
// import SvgCharts from '../svg/SvgCharts'

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            We design, build, and maintain infrastructure so your devs don't have to.
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
          Let them make features, not servers
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">
              <AnchorLink href="#contactus">
                <a style={{ color: 'white' }}>Contact Us</a>
              </AnchorLink>
            </Button>
          </p>
          <p className="mt-4 text-gray-600">
          Your partners in the journey to sustainable DevOps
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Why DoneOps?</h2>
        <div className="flex flex-row flex-wrap">
          {featureData.map((featureSection) => (
            <div
              key={featureSection.sectionTitle}
              className="flex-auto px-3 lg:w-1/2 md:w-full sm:w-full xs:w-full"
            >
              <FeatureCard featureSection={featureSection} />
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* <section id="yourteam" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Meet Your Team</h2>
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
      id="contactus"
      className="container mx-auto my-20 py-20 bg-gray-200 rounded-lg text-center"
    >
      <h3 className="text-5xl font-semibold">Ready to be done?</h3>
      <Contact />
    </section>
  </Layout>
)
