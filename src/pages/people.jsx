import React from 'react'
import Layout from '../containers/layout'
import Padding from '../containers/padding'
import CruFragment from '../components/crufragment'
import PeopleList from '../components/peoplelist'

const PeoplePage = () => {
  return (
    <Layout title='People' page='people'>
      <div style={{ height: 60 }} />
      <Padding>
        <h1>People</h1>
        <div style={{ height: 55 }} />
        <PeopleList />
      </Padding>

      <div style={{ height: '100px' }} />
      <CruFragment />
      <div style={{ height: '100px' }} />
    </Layout>
  )
}

export default PeoplePage
