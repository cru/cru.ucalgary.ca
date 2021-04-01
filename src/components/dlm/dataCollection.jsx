import React, { Fragment } from 'react'
import Styled from 'styled-components'

import CruFragment from '../crufragment'

const DataCollection = () => {
  return (
    <Fragment>
      <Content>
        <p style={{ marginTop: 0 }}>
          Once a data collection platform has been agreed upon and the intake process has
          been completed, we will work in collaboration with the client to design and
          build the project and data management application services according to their
          standards and requirements. This process can look different across the various
          platforms; however, we adhere to quality assurance and testing policies in order
          to guarantee functional and effective data collection and management.
        </p>
        <p>
          To safeguard the data collection process, study data system access will only be
          granted to users who have been centrally (and where necessary clinically)
          approved as having completed study systems training, are in possession of all
          appropriate and valid credentials and certifications, and who have a study role
          that merits each specific access type. Users will be granted individual accounts
          with permissions designed to grant access only to functions and data that
          supports their study role. In addition, user access password complexity rules,
          expiries and other data security features are systematically used to ensure
          suitable data accessibility and data security.
        </p>
      </Content>
      <CruFragment />
    </Fragment>
  )
}
export default DataCollection

const Content = Styled.div`
    padding-left: 2rem;
    padding-bottom: 2rem;
`
