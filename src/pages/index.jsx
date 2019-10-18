import React from 'react'
import Styled from 'styled-components'
import Layout from '../containers/layout'
import CRUHexPattern from '../components/cruHexPattern'
import CRUDescription from '../components/cruDescription'
import EmailFAB from '../components/emailfab'
import NavBar from '../components/navbar'
import CollabBanner from '../components/collabbanner'
import ServiceList from '../components/serviceList'

const IndexPage = () => {
  return (
    <Layout>
      <NavBar />
      <Spacing />
      <CRUDescription style={{ marginBottom: '-410px' }} />
      <CRUHexPattern />
      <ServiceList />
      <div style={{ height: '100px' }} />
      <CollabBanner />
      <div style={{ height: '30px' }} />
      <EmailFAB />
    </Layout>
  )
}

export default IndexPage

const Spacing = Styled.div`
  height: 20vh;
  @media only screen and (max-width: ${props => props.theme.tabletBreakPoint}){
    height: 10vh;
  }

`
