import React from 'react'
import ToolsBox from './ToolsBox'

// Import all tool images
import google from '../img/google-cloud.svg'
import aws from '../img/aws.svg'
import azure from '../img/azure.svg'
import kubernetes from '../img/kubernetes.svg'
import istio from '../img/istio.svg'
import helm from '../img/helm.svg'
import flux from '../img/flux.svg'
import argo from '../img/argo.svg'
import jenkins from '../img/jenkins.svg'
import terraform from '../img/terraform.svg'
import spinnaker from '../img/spinnaker.svg'
import envoy from '../img/envoy.svg'
import knative from '../img/knative.svg'
import fluentd from '../img/fluentd.svg'
import linkerd from '../img/linkerd.svg'
import jaeger from '../img/jaeger.svg'
import kiali from '../img/kiali.svg'
import docker from '../img/docker.svg'
import buildpacks from '../img/buildpacks.svg'
import gradle from '../img/gradle-enterprise.svg'
import containerd from '../img/containerd.svg'
import skaffold from '../img/skaffold.svg'
import kaniko from '../img/kaniko.svg'

interface Tool {
  image: string
  altText: string
  category: 'cloud' | 'kubernetes' | 'ci-cd' | 'monitoring' | 'security' | 'languages'
}

interface ToolsCategory {
  title: string
  tools: Tool[]
}

interface ToolsGridProps {
  className?: string
}

const toolsData: ToolsCategory[] = [
  {
    title: 'Cloud Platforms',
    tools: [
      { image: google, altText: 'Google Cloud Platform', category: 'cloud' },
      { image: aws, altText: 'Amazon Web Services', category: 'cloud' },
      { image: azure, altText: 'Microsoft Azure', category: 'cloud' },
    ]
  },
  {
    title: 'Container Orchestration & GitOps',
    tools: [
      { image: kubernetes, altText: 'Kubernetes', category: 'kubernetes' },
      { image: helm, altText: 'Helm', category: 'kubernetes' },
      { image: flux, altText: 'Flux CD', category: 'kubernetes' },
      { image: argo, altText: 'Argo CD', category: 'kubernetes' },
      { image: knative, altText: 'Knative', category: 'kubernetes' },
    ]
  },
  {
    title: 'CI/CD & Infrastructure',
    tools: [
      { image: jenkins, altText: 'Jenkins', category: 'ci-cd' },
      { image: terraform, altText: 'Terraform', category: 'ci-cd' },
      { image: spinnaker, altText: 'Spinnaker', category: 'ci-cd' },
      { image: skaffold, altText: 'Skaffold', category: 'ci-cd' },
    ]
  },
  {
    title: 'Service Mesh & Observability',
    tools: [
      { image: istio, altText: 'Istio', category: 'monitoring' },
      { image: linkerd, altText: 'Linkerd', category: 'monitoring' },
      { image: envoy, altText: 'Envoy Proxy', category: 'monitoring' },
      { image: jaeger, altText: 'Jaeger', category: 'monitoring' },
      { image: kiali, altText: 'Kiali', category: 'monitoring' },
      { image: fluentd, altText: 'Fluentd', category: 'monitoring' },
    ]
  },
  {
    title: 'Container Build & Runtime',
    tools: [
      { image: docker, altText: 'Docker', category: 'languages' },
      { image: containerd, altText: 'containerd', category: 'languages' },
      { image: buildpacks, altText: 'Cloud Native Buildpacks', category: 'languages' },
      { image: kaniko, altText: 'Kaniko', category: 'languages' },
      { image: gradle, altText: 'Gradle Enterprise', category: 'languages' },
    ]
  }
]

const ToolsGrid: React.FC<ToolsGridProps> = ({ className = '' }) => {
  return (
    <div className={`space-y-12 ${className}`}>
      {toolsData.map((category) => (
        <div key={category.title} className="animate-on-scroll">
          <h3 className="text-2xl font-semibold text-center mb-8 text-slate-900 dark:text-slate-100">
            {category.title}
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {category.tools.map((tool) => (
              <ToolsBox
                key={tool.altText}
                image={tool.image}
                altText={tool.altText}
                className="w-[140px]"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ToolsGrid
