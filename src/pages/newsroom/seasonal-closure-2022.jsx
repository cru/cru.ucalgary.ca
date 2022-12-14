import React from 'react'

import Layout from '../../containers/layout'
import Padding from '../../containers/padding'
import CruFragment from '../../components/crufragment'

const SeasonalClosurePage = () => {
  return (
    <Layout title='Seasonal Closure 2022' page='seasonal-closure-2022' group='newsroom'>
      <div style={{ height: 60 }} />
      <Padding>
        <h1>{'\u{1F384}'} Seasonal Closure 2022</h1>
        <div style={{ height: 55 }} />
        <p>
          The University of Calgary and CRU will be{' '}
          <b>closed December 23rd, 2022 to January 1st, 2023</b> (inclusive). Our team
          will be monitoring sporadically for time-sensitive requests and response times
          may take up to 5 business days. Thank you in advance for your patience and
          understanding.
        </p>
        <p>
          If you require <b>urgent</b> support during this time, please enter{' '}
          <b>“URGENT”</b> in the subject or body of your request.
        </p>
        <p>We look forward to continuing our work together in the new year.</p>
        <p>Happy holidays! </p>
        <div style={{ height: 200 }} />
      </Padding>
      <CruFragment />
      <div style={{ height: '100px' }} />
    </Layout>
  )
}

export default SeasonalClosurePage
