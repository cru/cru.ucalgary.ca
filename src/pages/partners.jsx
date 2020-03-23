import React from 'react'
import Layout from '../containers/layout'
import Padding from '../containers/padding'
import CruFragment from '../components/crufragment'
import PartnerList from '../components/partnerlist'

const PartnersPage = () => {
  return (
    <Layout title="Partners" page="partners">
      <div style={{ height: 60 }} />
      <Padding>
        <h1>Partners</h1>
        <div style={{ height: 55 }} />
        <PartnerList />
      </Padding>

      <div style={{ height: '100px' }} />
      <CruFragment />
      <div style={{ height: '100px' }} />
    </Layout>
  )
}

export default PartnersPage
