import React, { useEffect, useState } from 'react'
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
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const startDate = moment('2021-06-03')
    const endDate = moment('2021-06-26')

    setShowMessage(moment().isBetween(startDate, endDate, 'days'))
  }, [])

  return (
    <Layout>
      <Spacing />
      {showMessage && (
        <Fragment>
          <Message />
          <CruFragment />
        </Fragment>
      )}
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
