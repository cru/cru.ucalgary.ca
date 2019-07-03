import React from 'react'

import Layout from '../containers/layout'
import EmailFAB from '../components/emailfab'
import Padding from '../containers/padding'
import PublicationsList from '../components/publicationslist'

const PublicationsPage = () => (
  <Layout page="publications">
    <div style={{ height: 75 }} />
    <Padding>
      <h2>Publications</h2>
    </Padding>
    <div style={{ height: 20 }} />

    <PublicationsList />
    <div style={{ height: 300 }} />
    <EmailFAB />
  </Layout>
)
export default PublicationsPage
