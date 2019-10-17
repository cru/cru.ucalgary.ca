import React from 'react'
import Layout from '../containers/layout'
import CRUHexPattern from '../components/cruHexPattern'
import EmailFAB from '../components/emailfab'
import NavBar from '../components/navbar'
import CollabBanner from '../components/collabbanner'
import ServiceList from '../components/serviceList'

const IndexPage = () => {
  return (
    <Layout>
      <NavBar />
      <CRUHexPattern />
      <ServiceList style={{ marginTop: '-1240px' }} />
      <div style={{ height: '100px' }} />
      <CollabBanner />
      <div style={{ height: '30px' }} />

      <EmailFAB />
    </Layout>
  )
}

export default IndexPage
