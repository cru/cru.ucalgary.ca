import React from 'react'
import Layout from '../containers/layout'
import CRUHexPattern from '../components/cruHexPattern'
import EmailFAB from '../components/emailfab'
import NavBar from '../components/navbar'
import CollabBanner from '../components/collabbanner'
import ServiceList from '../components/serviceList'
import CRUDescription from '../components/cruDescription'

const IndexPage = () => {
  return (
    <Layout>
      <NavBar />
      <CRUDescription style={{ marginBottom: '-400px' }} />
      <CRUHexPattern />
      <div style={{ height: '300px' }} />
      <ServiceList style={{ marginTop: '-1500px' }} />
      <div style={{ height: '100px' }} />
      <CollabBanner />
      <div style={{ height: '30px' }} />
      <EmailFAB />
    </Layout>
  )
}

export default IndexPage
