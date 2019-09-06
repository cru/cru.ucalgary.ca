import React from 'react'

import Layout from '../containers/layout'
import NavBar from '../components/navbar'
import EmailFAB from '../components/emailfab'
import Padding from '../containers/padding'
import PublicationsList from '../components/publicationslist'

const PublicationsPage = () => (
  <Layout title="Publications">
    <NavBar page="publications" />
    <div style={{ height: '20px' }} />
    <div
      style={{
        height: 75,
        width: '100%',
        backgroundColor: 'white',
      }}
    />
    <Padding>
      <h1>Publications</h1>
    </Padding>
    <div style={{ height: 50 }} />

    <PublicationsList />
    <EmailFAB />
  </Layout>
)
export default PublicationsPage
