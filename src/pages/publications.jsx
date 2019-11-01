import React from 'react'

import Layout from '../containers/layout'
import NavBar from '../components/navbar'
import EmailFAB from '../components/emailfab'
import Padding from '../containers/padding'
import PublicationsList from '../components/publicationslist'
import CruFragment from '../components/crufragment'

const PublicationsPage = () => (
  <Layout title="Publications">
    <NavBar page="publications" />
    <Padding>
      <div style={{ height: 100 }} />
      <h1>Publications</h1>
      <div style={{ height: 50 }} />
    </Padding>
    <PublicationsList />
    <div style={{ height: '100px' }} />
    <CruFragment />
    <div style={{ height: '100px' }} />
    <EmailFAB />
  </Layout>
)
export default PublicationsPage
