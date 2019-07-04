import React from 'react'
import Layout from '../containers/layout'
import NavBar from '../components/navbar'
import Padding from '../containers/padding'

const PeoplePage = () => {
  return (
    <Layout title="People">
      <NavBar page="people" group="about" />
      <div style={{ height: 75 }} />
      <Padding>
        <h2>People</h2>
      </Padding>
      <div style={{ height: '100vh' }} />
    </Layout>
  )
}

export default PeoplePage
