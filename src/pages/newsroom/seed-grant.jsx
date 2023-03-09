import React from 'react'

import Layout from '../../containers/layout'
import Padding from '../../containers/padding'
import CruFragment from '../../components/crufragment'

const SEEDGrantPage = () => {
  return (
    <Layout title='SEED Grant' page='seed-grant' group='newsroom'>
      <div style={{ height: 60 }} />
      <Padding>
        <h1>The Clinical Research Fund SEED Grant Competition is now open!</h1>
        <h5 className='text-muted' style={{ marginTop: 0 }}>
          UPDATE: applications are now closed
        </h5>
        <div style={{ height: 55 }} />
        <p>
          The Cumming School of Medicine (CSM) and Alberta Health Services (AHS) Clinical
          Research Fund is now open for seed applications.
        </p>
        <p className='text-center'>
          <h4>
            <a
              className='external-link-disabled'
              href='https://apply-clinicalresearchfund.smapply.io/?mkt_tok=MTYxLU9MTi05OTAAAAGH8lf7Vdz7ZANaZIU31whmKmQJJvOnBkTWXKcWVJd7sZCFYPqzaoi9_6hgTGJ_5d_cV8nAZ3O76-ful_5ewkB0'
            >
              Apply by December 15, 2022
            </a>
          </h4>
        </p>
        <p>
          Proposals may include requests for up to a maximum of $25,000 cash. An
          additional $25,000 may be requested for work done by the Clinical Research Unit
          [CRU] or Heritage Medical Research Clinic [HMRC], which will be provided as
          credits rather than cash.
        </p>
        <p>
          <b>
            <a
              className='external-link'
              href='https://researchcalgary.atlassian.net/servicedesk/customer/portal/7/group/27'
            >
              Contact us
            </a>{' '}
            to get an estimate for services to include in the grant application! The fund
            application deadline is 11:59 pm on Dec 15, 2022.
          </b>
        </p>
        <p>
          This opportunity will support the Eyes High strategic vision of leadership in
          high impact clinical research at UC and promote the objectives of AHS strategy
          for research innovation and analytics.
        </p>
        <p>Key goals for this fund:</p>
        <ul>
          <li>To increase the number of high impact, UC-led clinical research studies</li>
          <li>
            To increase UC success in attracting Tri-Council funding for clinical studies
          </li>
          <li>To improve the Alberta health system and the health of Albertans</li>
        </ul>
        <p>
          While the Clinical Research Fund is open to all clinical research projects,
          priority will be given to applications proposing health services or population
          health research aimed at one of the following:
        </p>
        <ul>
          <li>
            improving health outcomes among Indigenous Peoples, in keeping with Indigenous
            values and traditions
          </li>
          <li>
            reducing harms and or saving lives related to the opioid overdose crisis
            Proposals with a focus on Indigenous health outcomes should follow the TCPS 2
            - Chapter 9 Research Involving the First Nations, Inuit and Métis Peoples of
            Canada guidelines, and should align with the relevant sections from one or
            more of the following documents:
          </li>
          <li>Ii’ taa’poh’to’p</li>
          <li>Truth and Reconciliation Commission Report</li>
          <li>United Nations Declaration on the Rights of Indigenous peoples</li>
          <li>Alberta Health Services: Roadmap to Health</li>
          <li>
            Principles respecting the Government of Canada’s Relationship with Indigenous
            peoples
          </li>
          <li>
            CIHR's 2021-2031 Strategic Plan Proposals with a focus on the opioid overdose
            crisis should align with Provincial and Federal public health strategies.
          </li>
        </ul>
        <p>
          To apply applicants, need to submit an online application through the{' '}
          <a
            className='external-link-disabled'
            href='https://apply-clinicalresearchfund.smapply.io/?mkt_tok=MTYxLU9MTi05OTAAAAGH8lf7VXaj4gD7ESVjYf53P9Zi2iUk3nM5ABrgqnUSbGVUDVtf_Ql25yI9D6aszbWS5SMBx8Dlg3NG8YMM4TpQ'
          >
            online portal
          </a>
        </p>
        <ul>
          <li>
            fill out the application form and include the following supporting documents
          </li>
          <li>CV of Principal Applicant</li>
          <li>Project Summary</li>
          <li>Budget Justifications</li>
        </ul>
        <p>
          Once the application process is completed - applications will be reviewed and a
          notice of acceptance or rejection will be forwarded to the applicant. For more
          information -{' '}
          <a
            className='external-link'
            href='https://cumming.ucalgary.ca/research/cccr/how-we-help/clinical-research-fund?mkt_tok=MTYxLU9MTi05OTAAAAGH8lf7VVl9N2yiXNS5pNnaiNfTV-b5PY1sAAv2195rfBAu6GFkS64tzMiHvK8ZiP-8KVd_ePWqfDoblkIlqgsg'
          >
            Visit the Clinical Research Fund Website for more details
          </a>
        </p>
        <div style={{ height: 200 }} />
      </Padding>
      <CruFragment />
      <div style={{ height: '100px' }} />
    </Layout>
  )
}

export default SEEDGrantPage
