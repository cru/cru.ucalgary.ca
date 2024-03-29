import React from 'react'

import Layout from '../containers/layout'
import Padding from '../containers/padding'
import PublicationsList from '../components/publicationslist'
import CruFragment from '../components/crufragment'

const PublicationsPage = () => (
  <Layout title='Publications' page='publications'>
    <Padding>
      <div style={{ height: 60 }} />
      <h1>Publications</h1>
      <div style={{ height: 55 }} />
    </Padding>
    <PublicationsList />
    <div style={{ height: '100px' }} />
    <CruFragment />
    <div style={{ height: '100px' }} />
  </Layout>
)
export default PublicationsPage
