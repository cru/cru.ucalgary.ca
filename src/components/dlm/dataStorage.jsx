import React, { Fragment } from 'react'
import Styled from 'styled-components'

import CruFragment from '../crufragment'

const DataStorage = () => {
  return (
    <Fragment>
      <Content>
        <p style={{ marginTop: 0 }}>
          The CRU uses a variety of data storage services, including perimeter networks
          and double screened subnetworks, and logical and physical separation of data and
          application access. In order to determine the best storage location for a
          client’s data, we classify the data according to the University of Calgary’s{' '}
          <a
            href='https://www.ucalgary.ca/legal-services/sites/default/files/teams/1/Standards-Legal-Information-Security-Classification-Standard.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            security policies and data classification levels
          </a>
          . Based on this classification, we will consult with the client to create an
          active data storage plan.
        </p>
        Our active data storage plans are policy driven and include the following
        considerations:
        <ul>
          <li>
            Where requested, cloud computing platforms or managed research compute
            services can be leveraged or embedded in data pipelines.
          </li>
          <li>
            If data is highly confidential (e.g., participant or patient identifiable),
            greater precautions are taken, and an agreement will be established with the
            client to ensure that a secured data storage and computing platform is used.
          </li>
          <li>
            Sensitive data can be VPN disclosed and platform access is regularly scanned
            for leaks and holes.
          </li>
          <li>
            Data access and access permission is administratively managed, logged,
            trailed, and often automatically revoked upon inactivity. This process is
            policy driven.
          </li>
          <li>
            Requests for changes to data elements and variables in any project follows a
            rigorous process of clarification of implication of the changes to the
            investigator, written confirmation and authorization by the principal
            investigator or project owner, and tracking of any changes.
          </li>
          <li>
            Upgrades to data management platforms are compliance and ethics approved. The
            CRU separates development, user acceptance, and production data with separated
            authorization and authentication.
          </li>
        </ul>
        <p>
          We can also help support the client in establishing the most suitable strategies
          for data ownership, permissions, and sharing. The designated data
          custodian/principal investigator will be able to control and permit access and
          use of all data. Restrictions can be enforced to ensure security when
          interacting with and sharing the project data, whether the latter is raw,
          processed, or derived. We can also help to create a plan to share the data with
          the client’s collaborators (internal/external) and team members, in a manner
          that always prioritizes security and data protection.
        </p>
      </Content>
      <CruFragment />
    </Fragment>
  )
}
export default DataStorage

const Content = Styled.div`
    padding-left: 2rem;
    padding-bottom: 2rem;
`
