import React, { Fragment } from 'react'
import Styled from 'styled-components'

import CruFragment from '../crufragment'

const DataAnalysis = () => {
  return (
    <Fragment>
      <Content>
        If requested, the CRU can provide the following additional support for clinical
        trials and observational studies:
        <ul>
          <li>
            Consultation with clients about their research project to help create
            statistical analysis plans and documentation for funding applications.
          </li>
          <li>Statistical analysis for health research projects.</li>
          <li>
            Professional writing of the methods and results sections of manuscripts.
          </li>
          <li>
            Assessment and implementation of a large variety of randomization strategies
            for Randomized Controlled Trials (RCTs) across a variety of platforms.
          </li>
          <li>
            Sample size calculations, managing and shaping your analysis plan, data
            cleaning and preparation, and final analyses.
          </li>
          <li>
            By leveraging UCIT tools, we have the capacity to perform large-scale
            analytics projects from administrative, EMR, sensor data, and more. Whether it
            concerns public data or subject and person sensitive information, the academic
            infrastructure used for transporting, analyzing, storing, and disseminating
            your data have been architected and approved to handle data at all levels of
            confidentiality. When analyses are performed on high performance nodes and
            hosted instances within the university’s computation network, data stays on
            the premises and never travels beyond the security perimeters. Data and
            generated (meta) data gets wiped after specific project purposes have been
            fulfilled.
          </li>
        </ul>
      </Content>
      <CruFragment />
    </Fragment>
  )
}
export default DataAnalysis

const Content = Styled.div`
    padding-left: 2rem;
    padding-bottom: 2rem;
`
