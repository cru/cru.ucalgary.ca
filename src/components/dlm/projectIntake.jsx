import React, { Fragment } from 'react'
import Styled from 'styled-components'

import CruFragment from '../crufragment'

const ProjectIntake = () => {
  return (
    <Fragment>
      <Content>
        <p style={{ marginTop: 0 }}>
          The CRU hosts a variety of leading EDC platforms, such as REDCap, REDCap Cloud
          and DFDiscover. This gives researchers a range of choices and capabilities when
          building tools dedicated to data capture, databases, and custom data management.
          We also offer custom software that can be tailored to the needs and workflows of
          a specific project. In order to determine which services, platform, software
          bundles or data management support will best suit a client’s needs, we use a
          stratified and structured intake service. Using this decision model and through
          consultations with the client, we are able to determine the best approach to
          building and managing the client’s database.
        </p>
        <div>
          During the intake process, we assess and define:
          <ul style={{ columns: 2 }}>
            <li>Trial type and phase</li>
            <li>Study design</li>
            <li>Health Canada applications and REB or ethics verification</li>
            <li>Ethical or legal obligations</li>
            <li>Length and timeline of the study</li>
            <li>Number of case report forms (CRFs)</li>
            <li>Number of sites involved</li>
            <li>Number of end users and participants</li>
            <li>Data edit specifications</li>
            <li>Visit maps</li>
            <li>Intellectual property </li>
            <li>Protocols and workflows</li>
            <li>Source of the data</li>
            <li>File formats required</li>
            <li>International roll-out or data access</li>
            <li>Custom or 3rd party data linkage</li>
            <li>Data reporting and export requests</li>
            <li>Data monitoring needs</li>
            <li>Randomization needs</li>
            <li>Required analytics and needs for methodology support</li>
            <li>Platform selection</li>
            <li>Version control</li>
            <li>Data back-up plans or requirements</li>
            <li>Required training</li>
            <li>Data purging requirements </li>
          </ul>
          <p>
            We will work with you to understand your data collection needs, and assess the
            parameters and controls needed to manage your research data. We will then
            establish an agreement with you to provide clarity and assurance.
          </p>
          Key considerations include:
          <ul>
            <li>
              The end date of data collection, and expected total volume of data to be
              collected and stored
            </li>
            <li>How and where the collected data will be stored and backed up</li>
            <li>Privacy, confidentiality and intellectual property requirements</li>
            <li>
              Whether ethics approval has been acquired for the project, and whether data
              collection/storage is tied to the ethics approval end date with a
              possibility of renewal
            </li>
            <li>
              Data access considerations, including who has access to the data during the
              active data collection process, designated data custodians of the project,
              and contingency plans in case the study team changes{' '}
            </li>
            <li>
              How exported data is to be transferred to the client for analytics, data
              archival, or data purging{' '}
            </li>
          </ul>
        </div>
      </Content>
      <CruFragment />
    </Fragment>
  )
}
export default ProjectIntake

const Content = Styled.div`
    padding-left: 2rem;
    padding-bottom: 2rem;
`
