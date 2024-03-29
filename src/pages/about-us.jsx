import React from 'react'
import { Clock } from 'react-feather'

import Layout from '../containers/layout'
import Padding from '../containers/padding'
import CruFragment from '../components/crufragment'

const AboutUsPage = () => {
  return (
    <Layout title='About Us' page='about-us'>
      <div style={{ height: 60 }} />
      <Padding>
        <h1>About Us</h1>
        <div style={{ height: 55 }} />
        <Clock size={72} color='#e97175' />
        <h3 style={{ marginBottom: 0 }}>Coming Soon!</h3>
        <h6 className='text-muted' style={{ marginTop: 0 }}>
          Stay tuned. We will be updating this page with more information.
        </h6>
      </Padding>

      <div style={{ height: '100px' }} />
      <CruFragment />
      <div style={{ height: '100px' }} />
    </Layout>
  )
}

export default AboutUsPage
