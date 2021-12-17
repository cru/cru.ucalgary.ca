import React, { Fragment } from 'react'
import Styled from 'styled-components'

import CruFragment from '../crufragment'

const Closeout = () => {
  return (
    <Fragment>
      <Content>
        <p style={{ marginTop: 0 }}>
          Project close-out procedures will be performed prior to database locking in
          order to verify the integrity and completion of the database. These procedures
          involve a series of controlled checks including, but not limited to, checking
          that all CRFs have been entered, manual reviews have been completed, the project
          data are consistent with specifications in the project dictionary, and other
          processes. At project completion, we provide your data in a formal sign off,
          according to Standard Operating Procedures for the CRU. If requested, project
          data will be snapshotted and encrypted for up to one year after project closure.
        </p>
        <p>
          Data purging will be conducted according to current established best practices
          and in agreement with governance and compliance requirements arranged with the
          client during Intake (Stage 1). Data purging consists of deleting every copy of
          the data item from the client’s platform, swiping archives, overwriting or
          destroying storage location and sweeping audit trails. The purging process is
          done in accordance with CRU and academic policies and regulations to ensure all
          data is properly removed, and all traces of the client’s data are completely
          deleted from our servers.
        </p>
      </Content>
      <CruFragment />
    </Fragment>
  )
}
export default Closeout

const Content = Styled.div`
    padding-left: 2rem;
    padding-bottom: 2rem;
`
