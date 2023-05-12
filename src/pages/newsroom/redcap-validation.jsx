import React, { useState } from 'react'
import { ChevronDown, ChevronRight } from 'react-feather'
import { Collapse } from 'reactstrap'

import { Link } from 'gatsby'
import Layout from '../../containers/layout'
import Padding from '../../containers/padding'
import CruFragment from '../../components/crufragment'

function RedcapValidationPage() {
  const [showOne, toggleOne] = useState(false)
  const [showTwo, toggleTwo] = useState(false)
  const [showThree, toggleThree] = useState(false)
  const [showFour, toggleFour] = useState(false)
  const [showFive, toggleFive] = useState(false)
  const [showSix, toggleSix] = useState(false)
  const [showSeven, toggleSeven] = useState(false)
  const [showEight, toggleEight] = useState(false)

  return (
    <Layout title='REDCap Validation!' page='redcap-validation' group='newsroom'>
      <div style={{ height: 60 }} />
      <Padding>
        <h1>Validated REDCap is now available at Cumming School of Medicine (CRU)!</h1>
        <div style={{ height: 55 }} />
        <div className='alert alert-warning'>
          Due to a critical security vulnerability notice received from Vanderbilt
          University, the CRU has completed an emergency upgrade to REDCap 13.1.28 <br />
          <br />
          <b>REDCap 13.1.28 Validation Materials (Coming Soon)!</b>
        </div>
        <div style={{ height: 20 }} />
        <p>
          We are excited to announce that the CRU has completed the validation of its
          REDCap 12.4.31 instance.{' '}
          <b>
            This REDCap instance meets Health Canada/ICH GCP requirements to run phase 3
            and regulatory clinical trials.
          </b>
        </p>
        <p>
          This marks the start of a largescale REDCap Revitalization initiative at the
          CRU. We have listened to your feedback and recommendations and will be evolving
          our REDCap services to better meet your needs. Examples include offering newer
          REDCap versions with additional features, enhanced support services to help
          study teams learn the REDCap tool, and a more transparent fee structure for
          easier budgeting. We will share additional information in the coming months,
          including a launch-date of our Revitalized REDCap services. For additional
          information, please see the attached frequently asked questions.
        </p>
        <p>
          We are happy to assist you with your electronic data capture needs. Please feel
          free to initiate a project request at our{' '}
          <a
            href='https://researchcalgary.atlassian.net/servicedesk/customer/portal/7'
            target='_blank'
            rel='noopener noreferrer'
            className='external-link'
          >
            service desk
          </a>{' '}
          or by emailing us at{' '}
          <a href='mailto:cru@ucalgary.ca' className='external-link'>
            cru@ucalgary.ca
          </a>
          . We look forward to continuing our collaborations.
        </p>
        <div className='mt-5'>
          <h3>Frequently Asked Questions (FAQs)</h3>
          <div>
            <h5
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                marginTop: 0,
              }}
              id='one'
              onClick={() => toggleOne(!showOne)}
            >
              {showOne ? (
                <ChevronDown size={24} className='mr-2' />
              ) : (
                <ChevronRight size={24} className='mr-2' />
              )}
              What does “validated” mean?
            </h5>
            <Collapse isOpen={showOne}>
              <ul>
                <li>
                  Health Canada and ICH GCP outline requirements for electronic data
                  capture for regulatory trials, such as clinical trials.
                </li>
                <li>
                  The CRU has thoroughly tested our REDCap platform and developed
                  processes to ensure the instance sufficiently meets these requirements.
                  <ul>
                    <li>
                      Our approach to validation was to use test scripts and draft
                      supplementary standard operating procedures.
                    </li>
                  </ul>
                </li>
                <li>
                  Note: Study teams are responsible for ensuring validation at the project
                  level by testing and validating that the project setup functions as
                  expected. The CRU has prepared guides to help study teams with project
                  validation.
                </li>
              </ul>
            </Collapse>
          </div>
          <div>
            <h5
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                marginTop: 0,
              }}
              id='two'
              onClick={() => toggleTwo(!showTwo)}
            >
              {showTwo ? (
                <ChevronDown size={24} className='mr-2' />
              ) : (
                <ChevronRight size={24} className='mr-2' />
              )}
              What are the benefits of a validated REDCap instance?
            </h5>
            <Collapse isOpen={showTwo}>
              <ul>
                <li>
                  REDCap is an easy-to-use EDC platform. It is widely used and many
                  researchers and study teams are already familiar with it. There is a
                  significant international community of REDCap users, which creates a
                  vast support network for continuous improvement of our REDCap service.
                </li>
                <li>
                  Other validated EDC tools (e.g., REDCap Cloud, DataFax) can be
                  challenging to use and to set up databases. REDCap services are also
                  offered at significantly lower cost than these other validated EDC
                  tools.
                </li>
              </ul>
            </Collapse>
          </div>
          <div>
            <h5
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                marginTop: 0,
              }}
              id='three'
              onClick={() => toggleThree(!showThree)}
            >
              {showThree ? (
                <ChevronDown size={24} className='mr-2' />
              ) : (
                <ChevronRight size={24} className='mr-2' />
              )}
              What will this cost?
            </h5>
            <Collapse isOpen={showThree}>
              <ul>
                <li>
                  The CRU is developing a new pricing structure that will provide more
                  support for all project types and greater flexibility based on project
                  and researcher needs. Additional details to come as part of REDCap
                  Revitalization.
                  <ul>
                    <li>
                      Exact project development costs will continue to be estimated from
                      intake meetings and consultations.
                    </li>
                  </ul>
                </li>
                <li>
                  The CRU operates on a cost-recovery model. Annual maintenance fees help
                  us recover overhead for maintaining the REDCap platform, such as system
                  administration, backups, and supplementary license fees.
                  <ul>
                    <li>
                      The fee for the validated instance will incorporate additional work
                      required to achieve and maintain validation.
                    </li>
                  </ul>
                </li>
              </ul>
            </Collapse>
          </div>
          <div>
            <h5
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                marginTop: 0,
              }}
              id='four'
              onClick={() => toggleFour(!showFour)}
            >
              {showFour ? (
                <ChevronDown size={24} className='mr-2' />
              ) : (
                <ChevronRight size={24} className='mr-2' />
              )}
              My project is currently on REDCap 7. Can I move it to REDCap 10?
            </h5>
            <Collapse isOpen={showFour}>
              <ul>
                <li>
                  The CRU is doing a phased rollout of REDCap 10. As part of REDCap
                  Revitalization, we will be migrating all projects to REDCap 10.
                </li>
                <li>
                  Migration to REDCap 10 is mandatory. We will be decommissioning the
                  REDCap 6 and 7 instances.
                </li>
                <li>
                  The phased approach enables us to migrate projects free of charge. Thank
                  you in advance for your understanding.
                </li>
                <li>
                  Projects will be emailed with migration details and timelines.
                  Migrations are estimated to start in March 2022.
                </li>
                <li>
                  Migration will not affect project data. Project data will remain secure
                  and there is no data loss in the migration process.
                </li>
                <li>
                  If you no longer use your REDCap project and would like to close it,
                  please contact us at{' '}
                  <a href='mailto:cru@ucalgary.ca' className='external-link'>
                    cru@ucalgary.ca
                  </a>
                </li>
              </ul>
            </Collapse>
          </div>
          <div>
            <h5
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                marginTop: 0,
              }}
              id='five'
              onClick={() => toggleFive(!showFive)}
            >
              {showFive ? (
                <ChevronDown size={24} className='mr-2' />
              ) : (
                <ChevronRight size={24} className='mr-2' />
              )}
              Can I start a new project on REDCap 10?
            </h5>
            <Collapse isOpen={showFive}>
              <ul>
                <li>
                  If you are running a clinical trial, yes – you can start a new project
                  on REDCap 10. Please contact us at{' '}
                  <a href='mailto:cru@ucalgary.ca' className='external-link'>
                    cru@ucalgary.ca
                  </a>{' '}
                  or via our{' '}
                  <a
                    href='https://researchcalgary.atlassian.net/servicedesk/customer/portal/7'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='external-link'
                  >
                    service desk
                  </a>{' '}
                  to initiate your project.
                </li>
                <li>
                  If you are starting a new CRU-supported project (i.e., the CRU is
                  supporting project build and configuration), it will be built in REDCap
                  10.
                </li>
                <li>
                  Otherwise, new projects will start in REDCap 7 until the REDCap 10
                  instance is officially launched for all project types, at which point it
                  will be migrated to REDCap 10.
                  <ul>
                    <li>
                      If you believe you have unique needs that require REDCap 10 before
                      the official launch, please contact us.
                    </li>
                  </ul>
                </li>
              </ul>
            </Collapse>
          </div>
          <div>
            <h5
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                marginTop: 0,
              }}
              id='six'
              onClick={() => toggleSix(!showSix)}
            >
              {showSix ? (
                <ChevronDown size={24} className='mr-2' />
              ) : (
                <ChevronRight size={24} className='mr-2' />
              )}
              What will happen as part of REDCap Revitalization?
            </h5>
            <Collapse isOpen={showSix}>
              <ul>
                <li>
                  Some of the initiatives and new services included in REDCap
                  Revitalization are:
                  <ul>
                    <li>Validated REDCap instance to support regulatory trials</li>
                    <li>A single unified instance requiring only one log-in</li>
                    <li>
                      A new support structure, including training courses and drop-in
                      hours for quick consultations
                    </li>
                    <li>
                      A new pricing model that’s more transparent and inclusive to help
                      with budgeting and grant applications
                    </li>
                  </ul>
                </li>
              </ul>
            </Collapse>
          </div>
          <div>
            <h5
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                marginTop: 0,
              }}
              id='seven'
              onClick={() => toggleSeven(!showSeven)}
            >
              {showSeven ? (
                <ChevronDown size={24} className='mr-2' />
              ) : (
                <ChevronRight size={24} className='mr-2' />
              )}
              Why is the CRU changing so much?
            </h5>
            <Collapse isOpen={showSeven}>
              <ul>
                <li>
                  Research needs and technical solutions have evolved over time. Based on
                  researcher feedback and input, we are changing to better meet those
                  needs.
                  <ul>
                    <li>
                      The focus of the CRU is to offer high quality data and research
                      support services in a financially sustainable manner. Our{' '}
                      <Link to='/about-us'>website</Link> provides additional information
                      on our renewed strategic vision.
                    </li>
                  </ul>
                </li>
                <li>
                  As shared by many across the university, the CRU is facing increased
                  financial pressure. We are taking this as an opportunity to find
                  efficiencies and improve the services we offer.
                </li>
                <li>
                  Want to help us on our journey? We will be putting out a call for
                  members to join an advisory board. Stay tuned for more details!
                </li>
              </ul>
            </Collapse>
          </div>
          <div>
            <h5
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                marginTop: 0,
              }}
              id='eight'
              onClick={() => toggleEight(!showEight)}
            >
              {showEight ? (
                <ChevronDown size={24} className='mr-2' />
              ) : (
                <ChevronRight size={24} className='mr-2' />
              )}
              It sounds like the CRU is doing lots! How can I stay up to date on what the
              CRU is doing?
            </h5>
            <Collapse isOpen={showEight}>
              <ul>
                <li>
                  We’ll be posting updates and announcements on our{' '}
                  <Link to='newsroom/announcements'>website</Link>
                </li>
                <li>
                  Want to help us on our journey? We will be putting out a call for
                  members to join an advisory board. Stay tuned for more details!
                </li>
              </ul>
            </Collapse>
          </div>
        </div>
        <div className='mt-5'>
          <i>
            REDCap validation was supported in part by the{' '}
            <a
              href='https://absporu.ca/'
              target='_blank'
              rel='noopener noreferrer'
              className='external-link'
            >
              Alberta SPOR SUPPORT Unit
            </a>
            , which is committed to building capacity in patient-oriented research by
            sharing expertise with students and new researchers.
          </i>
        </div>
        <div style={{ height: 200 }} />
      </Padding>
      <CruFragment />
      <div style={{ height: '100px' }} />
    </Layout>
  )
}

export default RedcapValidationPage
