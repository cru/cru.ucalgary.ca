import React from 'react'

import Layout from '../containers/layout'
import NavBar from '../components/navbar'
import EmailFAB from '../components/emailfab'
import Padding from '../containers/padding'
import PublicationsList from '../components/publicationslist'

const PublicationsPage = () => (
  <Layout title="Publications">
    <NavBar page="publications" />
    <Padding>
      <div style={{ height: 100 }} />
      <h1>Publications</h1>
      <div style={{ height: 50 }} />
    </Padding>
    <PublicationsList />
    <EmailFAB />
  </Layout>
)
export default PublicationsPage
