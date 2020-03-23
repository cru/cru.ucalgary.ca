import React from 'react'
import Styled from 'styled-components'
import Layout from '../containers/layout'
import CRUHexPattern from '../components/cruHexPattern'
import CRUDescription from '../components/cruDescription'
import ParterBanner from '../components/partnerbanner'
import ServiceList from '../components/serviceList'

const IndexPage = () => {
  return (
    <Layout>
      <Spacing />
      <CRUDescription />
      <CRUHexPattern />
      <div style={{ height: '50px' }} />
      <ServiceList />
      <div style={{ height: '180px' }} />
      <div style={{ height: '10px' }} />
      <ParterBanner />
      <div style={{ height: '60px' }} />
    </Layout>
  )
}

export default IndexPage

const Spacing = Styled.div`
  height: 5vh;
  @media only screen and (max-width: ${props => props.theme.tabletBreakPoint}){
    height: 3vh;
  }

`
