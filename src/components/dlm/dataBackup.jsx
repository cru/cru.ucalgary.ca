import React, { Fragment } from 'react'
import Styled from 'styled-components'

import CruFragment from '../crufragment'

const DataBackup = () => {
  return (
    <Fragment>
      <Content>
        <p style={{ marginTop: 0 }}>
          We apply industry standard data backups and redundancy. Data backups can be
          specified and completed according to the client’s needs. This includes how and
          when the backups are performed, and where the backups are stored. Periodic
          backups can be executed at the client’s preference, whether full, differential
          or incremental, and restrictions can be put in place to control who has access
          to this data.
        </p>
        <p>
          Once the data sets or databases have been locked and frozen, and the final
          (Clinical) Study Report has been signed, the study data is considered archived.
          From this point, we will proceed according to the client’s request to archive
          study data for a limited period of time. Long-term storage is the responsibility
          of the client.
        </p>
        <p>
          We recommend that clients create a self-managed long-term data storage plan and
          extended data archival plan. We will work with the client to ensure the data
          archival plan is appropriate in terms of file formats, indexing, timely
          retrieval, and re-usability.
        </p>
      </Content>
      <CruFragment />
    </Fragment>
  )
}
export default DataBackup

const Content = Styled.div`
    padding-left: 2rem;
    padding-bottom: 2rem;
`
