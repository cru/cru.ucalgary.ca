import React from 'react'
import Styled from 'styled-components'
import moment from 'moment'

import Layout from '../containers/layout'
import CRUHexPattern from '../components/cruHexPattern'
import CRUDescription from '../components/cruDescription'
import ParterBanner from '../components/partnerbanner'
import ServiceList from '../components/serviceList'
import Message from '../components/message'
import CruFragment from '../components/crufragment'
import { Fragment } from 'react'

const IndexPage = () => {
  const startDate = moment('2020-12-17')
  const endDate = moment('2021-01-04')


  return (
    <Layout>
      <Spacing />
      {moment().isBetween(startDate, endDate, 'days') &&
        <Fragment>
          <Message />
          <CruFragment />
        </Fragment>
      }
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
