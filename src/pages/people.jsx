import React from 'react'
import Layout from '../containers/layout'
import NavBar from '../components/navbar'
import Padding from '../containers/padding'
import EmailFAB from '../components/emailfab'
import CruFragment from '../components/crufragment'
import PeopleList from '../components/peoplelist'

const PeoplePage = () => {
  return (
    <Layout title="People">
      <NavBar page="people" group="about" />
      <div style={{ height: 100 }} />
      <Padding>
        <h1>People</h1>
        <PeopleList />
      </Padding>
      <div style={{ height: '100vh' }} />
      <div style={{ height: '100px' }} />
      <CruFragment />
      <div style={{ height: '100px' }} />
      <EmailFAB />
    </Layout>
  )
}

export default PeoplePage
