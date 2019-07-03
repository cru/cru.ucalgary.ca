import React from 'react'
import Layout from '../containers/layout'
import Padding from '../containers/padding'

const PeoplePage = () => {
  return (
    <Layout page="people" group="about">
      <div style={{ height: 75 }} />
      <Padding>
        <h2>People</h2>
      </Padding>
    </Layout>
  )
}

export default PeoplePage
