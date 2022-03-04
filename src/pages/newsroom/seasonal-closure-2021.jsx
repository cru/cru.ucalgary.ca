import React from 'react'

import Layout from '../../containers/layout'
import Padding from '../../containers/padding'
import CruFragment from '../../components/crufragment'

const SeasonalClosurePage = () => {
  return (
    <Layout title='Seasonal Closure 2021' page='seasonal-closure-2021' group='newsroom'>
      <div style={{ height: 60 }} />
      <Padding>
        <h1>{'\u{1F384}'} Seasonal Closure 2021</h1>
        <div style={{ height: 55 }} />
        <p>Dear researchers and collaborators,</p>
        <p>
          The University of Calgary and CRU will be closed December 23rd, 2021 to January
          2nd, 2022 (inclusive). After a year that has at times felt isolating, we hope
          you also take some time to rest, recharge, and spend time with loved ones. We
          look forward to continuing our work together in the new year.{' '}
        </p>
        <p>
          If you require <b>urgent</b> support during this time, please email us at
          <a href='mailto:cru@ucalgary.ca' className='external-link'>
            cru@ucalgary.ca
          </a>{' '}
          with <b>"URGENT"</b> in the subject line. Our team will be monitoring
          sporadically for time-sensitive requests and response times may take up to 5
          business days. Thank you in advance for your patience and understanding.
        </p>
        <p>Happy holidays! </p>
        <div style={{ height: 200 }} />
      </Padding>
      <CruFragment />
      <div style={{ height: '100px' }} />
    </Layout>
  )
}

export default SeasonalClosurePage
