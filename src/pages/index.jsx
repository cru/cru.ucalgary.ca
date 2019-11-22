import React from 'react'
import Styled from 'styled-components'
import Layout from '../containers/layout'
import CRUHexPattern from '../components/cruHexPattern'
import CRUDescription from '../components/cruDescription'
import CruFragment from '../components/crufragment'
import EmailFAB from '../components/emailfab'
import NavBar from '../components/navbar'
import ParterBanner from '../components/partnerbanner'
import ServiceList from '../components/serviceList'

const IndexPage = () => {
  return (
    <Layout>
      <NavBar />
      <Spacing />
      <CRUDescription style={{ marginBottom: '-680px' }} />
      <CRUHexPattern />
      <div style={{ height: '120px' }} />
      <ServiceList />
      <div style={{ height: '100px' }} />
      <CruFragment />
      <div style={{ height: '100px' }} />
      <ParterBanner />
      <div style={{ height: '60px' }} />
      <EmailFAB />
    </Layout>
  )
}

export default IndexPage

const Spacing = Styled.div`
  height: 8vh;
  @media only screen and (max-width: ${props => props.theme.tabletBreakPoint}){
    height: 3vh;
  }

`
