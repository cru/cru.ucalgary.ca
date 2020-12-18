import React from 'react'
import Layout from '../containers/layout'
import Padding from '../containers/padding'
import CruFragment from '../components/crufragment'

const DataLifecycleManagementPage = () => {
  return (
    <Layout title="Data Lifecycle Management" page="data-lifecycle-management">
      <div style={{ height: 60 }} />
      <Padding>
        <h1>Data Lifecycle Management</h1>
        <div style={{ height: 55 }} />
        {/* **************************
              PUT PAGE CONTENT HERE 
            **************************
        */}
      </Padding>
      <div style={{ height: '100px' }} />
      <CruFragment />
      <div style={{ height: '100px' }} />
    </Layout>
  )
}

export default DataLifecycleManagementPage