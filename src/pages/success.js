import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout/Layout'
import Card from '../components/Card'

const Success = (props) => (
  <Layout>
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">
          Thank you for contacting us!
        </h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">
                Someone will be in touch shortly. If you did not successfully
                pass the reCAPTCHA, we did not get your message.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Success
