import React from 'react'

import Layout from '../../containers/layout'
import Padding from '../../containers/padding'
import CruFragment from '../../components/crufragment'

const SeasonalClosurePage = () => {
  return (
    <Layout title='REDCap 6&7 Decommissioned' page='redcap-decommission' group='newsroom'>
      <div style={{ height: 60 }} />
      <Padding>
        <h1>REDCap 6 & 7 Decommissioned</h1>
        <div style={{ height: 55 }} />
        <p>
          The Clinical Research Unit (CRU) has decommissioned REDCap versions 6 and 7 as
          per December 31st, 2022.
        </p>
        <p>
          The CRU has completed the migrating of projects from the older versions of
          REDCap to the validated newer instance of REDCap:{' '}
          <a
            href='https://redcap.cru.ucalgary.ca'
            target='_blank'
            rel='noopener noreferrer'
            className='external-link'
          >
            https://redcap.cru.ucalgary.ca
          </a>
          . Projects will no longer be accessible. We recommend updating bookmarks to the
          new location.
        </p>
        <p>
          If you had projects on REDCap 6 or 7 and your migration was not performed,
          please{' '}
          <a
            href='https://researchcalgary.atlassian.net/servicedesk/customer/portal/7'
            target='_blank'
            rel='noopener noreferrer'
            className='external-link'
          >
            contact us
          </a>{' '}
          if you have questions or need support. We are retaining a backup of unmigrated
          REDCap 6 and 7 projects up to December 2023 at which point all data will be
          deleted and cannot be retrieved.
        </p>
        <div style={{ height: 200 }} />
      </Padding>
      <CruFragment />
      <div style={{ height: '100px' }} />
    </Layout>
  )
}

export default SeasonalClosurePage
