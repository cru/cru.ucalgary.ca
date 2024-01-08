import React from 'react'

import Layout from '../../containers/layout'
import Padding from '../../containers/padding'
import CruFragment from '../../components/crufragment'

const RCUpgradePage = () => {
  return (
    <Layout title='REDCap Upgrade' page='redcap-upgrade' group='newsroom'>
      <div style={{ height: 60 }} />
      <Padding>
        <h1>REDCap Upgrade Advisory</h1>
        <div style={{ height: 55 }} />
        <p>
          Please be advised that a planned upgrade for REDCap from version 13.1.37 to
          13.7.29 is scheduled on{' '}
          <strong>Wednesday 10 January 2024, between 8:00 PM and11:00 PM MST</strong>.
        </p>
        <p>
          We anticipate temporary interruptions in REDCap accessibility during this
          period. We recommend saving your work and logging out before the upgrade begins
          to avoid any potential data loss.
        </p>
        {/* <h1>Announcing Validated RC 13.7.29</h1>
        <div style={{ height: 55 }} />
         <p>
          We are excited to announce the successful upgrade and validation of REDCap to
          version 13.7.29 by CRU. This instance of REDCap adheres to the requirements set
          by Health Canada/ICH GCP for conducting phase 3 and regulatory clinical trials.
        </p>
        <p>
          The upgrade introduces exciting features and enhancements to elevate the user
          experience:
        </p>
        <ul>
          <li>
            New MyCap mobile app: Specifically designed to enhance participant engagement
            and retention, especially in projects with regular participant contact, such
            as daily or weekly surveys.
          </li>
          <li>
            Multi-language support: Facilitates effortless language switching in
            instruments, benefiting both data entry personnel and survey respondents.
          </li>
          <li>
            New data export options: Seamless integration with Tableau for enhanced data
            analysis.
          </li>
          <li>
            New inline preview option for uploaded images and PDF files (instead of only
            seeing the filename in an upload field and downloading to view it, the
            uploaded image/file can be displayed in RC)
          </li>
          <li>
            New embed option for files sent via text and email. These file/image
            attachments are stored in the new "Miscellaneous File Attachments" folder in
            the File Repository.
          </li>
        </ul>
        <p>
          If you are considering starting a new REDCap project, please complete our intake
          survey.
        </p> */}
        <p>
          For inquiries or concerns, please reach out to us at{' '}
          <a href='mailto:cru@ucalgary.ca'>cru@ucalgary.ca</a>.
        </p>
        <div style={{ height: 200 }} />
      </Padding>
      <CruFragment />
      <div style={{ height: '100px' }} />
    </Layout>
  )
}

export default RCUpgradePage
