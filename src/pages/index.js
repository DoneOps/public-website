import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import TeamCard from '../components/TeamCard'
import LabelText from '../components/LabelText'
import Layout from '../components/layout/Layout'
import SplitSection from '../components/SplitSection'
import StatsBox from '../components/StatsBox'
import teamData from '../data/team-data'
import HeroImage from '../svg/HeroImage'
import SvgCharts from '../svg/SvgCharts'

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Your DevOps? Done!
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Your partners in the journey to sustainable DevOps
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Contact Us</Button>
          </p>
          <p className="mt-4 text-gray-600">Placeholder for main entry text</p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service One</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Two</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Three</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <section id="yourteam" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="text-3xl lg:text-5xl font-semibold text-center">Meet Your Team</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {teamData.map(teamMember => (
            <div key={teamMember.teamMemberName} className="flex-1 px-3">
              <TeamCard teamMember={teamMember} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to be done?</h3>
      <p className="mt-8 text-xl font-light">Contact form goes here</p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
)
