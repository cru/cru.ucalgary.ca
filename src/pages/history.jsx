import React from 'react'
import Layout from '../containers/layout'
import NavBar from '../components/navbar'
import Padding from '../containers/padding'

const History = () => {
  return (
    <Layout title="History">
      <NavBar page="history" group="about" />
      <div style={{ height: 75 }} />
      <Padding>
        <h2>History</h2>
      </Padding>
      <div style={{ height: '100vh' }} />
    </Layout>
  )
}

export default History
