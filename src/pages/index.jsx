import React from 'react'
import Layout from '../containers/layout'
import IntroHero from '../components/introhero'
import EmailFAB from '../components/emailfab'
import NavBar from '../components/navbar'
import CollabBanner from '../components/collabbanner'
import ServiceList from '../components/serviceList'

const IndexPage = () => {
  return (
    <Layout>
      <NavBar />
      <IntroHero />
      <ServiceList style={{ marginTop: '-720px' }} />
      <div style={{ height: '100px' }} />

      <CollabBanner />
      <div style={{ height: '30px' }} />

      <EmailFAB />
    </Layout>
  )
}

export default IndexPage
