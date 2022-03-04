import React from 'react'

import Layout from '../../containers/layout'
import Padding from '../../containers/padding'
import CruFragment from '../../components/crufragment'

const Covid19Page = () => {
  return (
    <Layout title='COVID-19' page='covid-19' group='newsroom'>
      <div style={{ height: 60 }} />
      <Padding>
        <h1>COVID-19 Notice</h1>
        <div style={{ height: 55 }} />
        <p>
          The CRU is working remotely. If you are looking for support, please reach out to
          your designated Project Manager directly, via our{' '}
          <a
            href='https://researchcalgary.atlassian.net/servicedesk/customer/portal/7'
            target='_blank'
            rel='noopener noreferrer'
            className='external-link'
          >
            service desk
          </a>
          , or email at{' '}
          <a href='mailto:cru@ucalgary.ca' className='external-link'>
            cru@ucalgary.ca
          </a>
          .
        </p>
        <p>Thank you for your understanding.</p>
        <div style={{ height: 200 }} />
      </Padding>
      <CruFragment />
      <div style={{ height: '100px' }} />
    </Layout>
  )
}

export default Covid19Page
