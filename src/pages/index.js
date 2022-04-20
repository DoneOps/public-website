import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Button from '../components/Button'
import Contact from '../components/contact'
import FeatureCard from '../components/FeatureCard'
import Layout from '../components/layout/Layout'
import ToolsBox from '../components/ToolsBox'
import CloudBox from '../components/CloudBox'
import featureData from '../data/features-data'
import HeroImage from '../svg/HeroImage'
import kubernetes from '../img/kubernetes.svg'
import terraform from '../img/terraform.svg'
import istio from '../img/istio.svg'
import flux from '../img/flux.svg'
import spinnaker from '../img/argo.svg'
import argo from '../img/spinnaker.svg'
import helm from '../img/helm.svg'
import envoy from '../img/envoy.svg'
import knative from '../img/knative.svg'
import jenkins from '../img/jenkins.svg'
import linkerd from '../img/linkerd.svg'
import fluentd from '../img/fluentd.svg'
import jaeger from '../img/jaeger.svg'
import kiali from '../img/kiali.svg'
import skaffold from '../img/skaffold.svg'
import kaniko from '../img/kaniko.svg'
import docker from '../img/docker.svg'
import buildpacks from '../img/buildpacks.svg'
import gradle from '../img/gradle-enterprise.svg'
import containerd from '../img/containerd.svg'
import aws from '../img/aws.svg'
import google from '../img/google-cloud.svg'
import azure from '../img/azure.svg'

const Named = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            We design, build, secure, and maintain infrastructure so your devs don't
            have to.
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Let's them make features, not servers
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
    <section id="toolkit" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Our Capabilities</h2>
        {/* <LabelText className="text-gray-600">Our Capabilities:</LabelText> */}
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <CloudBox image={google} altText="Google Cloud Platform" />
          </div>
          <div className="w-full sm:w-1/3">
            <CloudBox image={aws} altText="Amazon Web Services" />
          </div>
          <div className="w-full sm:w-1/3">
            <CloudBox image={azure} altText="Microsoft Azure" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/5">
            <ToolsBox image={kubernetes} altText="kubernetes" />
          </div>
          <div className="w-full sm:w-1/5">
            <ToolsBox image={terraform} altText="terraform" />
          </div>
          <div className="w-full sm:w-1/5">
            <ToolsBox image={istio} altText="istio" />
          </div>
          <div className="w-full sm:w-1/5">
            <ToolsBox image={helm} altText="helm" />
          </div>
          <div className="w-full sm:w-1/5">
            <ToolsBox image={flux} altText="flux" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/5">
            <ToolsBox image={spinnaker} altText="spinnaker" />
          </div>
          <div className="w-full sm:w-1/5">
            <ToolsBox image={argo} altText="argo" />
          </div>
          <div className="w-full sm:w-1/5">
            <ToolsBox image={jenkins} altText="jenkins" />
          </div>
          <div className="w-full sm:w-1/5">
            <ToolsBox image={envoy} altText="envoy" />
          </div>
          <div className="w-full sm:w-1/5">
            <ToolsBox image={knative} altText="knative" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/5">
            <ToolsBox image={fluentd} altText="fluentd" />
          </div>
          <div className="w-full sm:w-1/5">
            <ToolsBox image={linkerd} altText="linkerd" />
          </div>
          <div className="w-full sm:w-1/5">
            <ToolsBox image={skaffold} altText="skaffold" />
          </div>
          <div className="w-full sm:w-1/5">
            <ToolsBox image={jaeger} altText="jaeger" />
          </div>
          <div className="w-full sm:w-1/5">
            <ToolsBox image={kiali} altText="kiali" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/5">
            <ToolsBox image={kaniko} altText="kaniko" />
          </div>
          <div className="w-full sm:w-1/5">
            <ToolsBox image={docker} altText="docker" />
          </div>
          <div className="w-full sm:w-1/5">
            <ToolsBox image={buildpacks} altText="buildpacks" />
          </div>
          <div className="w-full sm:w-1/5">
            <ToolsBox image={gradle} altText="gradle" />
          </div>
          <div className="w-full sm:w-1/5">
            <ToolsBox image={containerd} altText="containerd" />
          </div>
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
export default Named
