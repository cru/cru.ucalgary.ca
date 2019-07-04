import React from 'react'
import Layout from '../containers/layout'
import IntroHero from '../components/introhero'
import EmailFAB from '../components/emailfab'
import NavBar from '../components/navbar'

const IndexPage = () => {
  return (
    <Layout>
      <NavBar />
      <IntroHero />
      <div style={{ height: '50vh', backgroundColor: 'white' }} />
      <div style={{ height: '50vh', backgroundColor: 'white' }} />
      <EmailFAB />
    </Layout>
  )
}

export default IndexPage
