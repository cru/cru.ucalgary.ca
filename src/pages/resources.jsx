import React from 'react'
import Layout from '../containers/layout'
import NavBar from '../components/navbar'
import Padding from '../containers/padding'

const ResourcesPage = () => {
  return (
    <Layout title="resources">
      <NavBar page="resources" />
      <div style={{ height: 75 }} />
      <Padding>
        <h2>resources</h2>
      </Padding>
      <div style={{ height: '100vh' }} />
    </Layout>
  )
}

export default ResourcesPage
