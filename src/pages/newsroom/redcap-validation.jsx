import React, { useState } from 'react'
import { ChevronDown, ChevronRight } from 'react-feather'
import { Collapse } from 'reactstrap'

import { Link } from 'gatsby'
import Layout from '../../containers/layout'
import Padding from '../../containers/padding'
import CruFragment from '../../components/crufragment'
import styled from 'styled-components'

function RedcapValidationPage() {
  const [showCollapse, setShowCollapse] = useState('')

  return (
    <Layout title='REDCap Validation!' page='redcap-validation' group='newsroom'>
      <div style={{ height: 60 }} />
      <Padding>
        <h1>Validated REDCap is now available at Cumming School of Medicine (CRU)!</h1>
        <div style={{ height: 55 }} />
        <p>
          We are excited to announce that the CRU has completed the validation of its
          REDCap 13.7 instance.{' '}
          <b>
            This{' '}
            <a
              href='https://redcap.cru.ucalgary.ca/'
              target='_blank'
              rel='noopener noreferrer'
              className='external-link'
            >
              REDCap
            </a>{' '}
            instance meets Health Canada/ICH GCP requirements to run phase 3 and
            regulatory clinical trials.
          </b>
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
          We are delighted to support you with your electronic data capture requirements.
          If you are considering starting a new REDCap project, please complete our{' '}
          <a
            href='https://redcap.cru.ucalgary.ca/surveys/?s=7L49EPE94D'
            target='_blank'
            rel='noopener noreferrer'
            className='external-link'
          >
            intake survey
          </a>
          .
        </p>
        <p>
          For additional information, please explore our{' '}
          <a
            href='https://researchcalgary.atlassian.net/wiki/spaces/CCTSTRED'
            target='_blank'
            rel='noopener noreferrer'
            className='external-link'
          >
            REDCap Resource Centre
          </a>{' '}
          and check the attached frequently asked questions. For inquiries or concerns,
          please reach out to us at{' '}
          <a href='mailto:cru@ucalgary.ca' className='external-link'>
            cru@ucalgary.ca
          </a>
          . We look forward to continuing our collaborations.
        </p>
        <FAQ className='mt-5'>
          <h2>Frequently Asked Questions</h2>
          <div>
            <b
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                marginTop: 0,
              }}
              id='one'
              onClick={() => setShowCollapse(showCollapse === '1' ? '' : '1')}
            >
              {showCollapse === '1' ? (
                <ChevronDown size={24} className='mr-2' />
              ) : (
                <ChevronRight size={24} className='mr-2' />
              )}
              What does “validated” mean?
            </b>
            <Collapse isOpen={showCollapse === '1'}>
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
            <b
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                marginTop: 0,
              }}
              id='two'
              onClick={() => setShowCollapse(showCollapse === '2' ? '' : '2')}
            >
              {showCollapse === '2' ? (
                <ChevronDown size={24} className='mr-2' />
              ) : (
                <ChevronRight size={24} className='mr-2' />
              )}
              What are the benefits of a validated REDCap instance?
            </b>
            <Collapse isOpen={showCollapse === '2'}>
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
            <b
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                marginTop: 0,
              }}
              id='three'
              onClick={() => setShowCollapse(showCollapse === '3' ? '' : '3')}
            >
              {showCollapse === '31' ? (
                <ChevronDown size={24} className='mr-2' />
              ) : (
                <ChevronRight size={24} className='mr-2' />
              )}
              What will this cost?
            </b>
            <Collapse isOpen={showCollapse === '3'}>
              <ul>
                <li>
                  The CRU has developed a new (
                  <Link to='https://cru.ucalgary.ca/services-and-pricing/edc-services/'>
                    pricing and support structure
                  </Link>
                  ) that provides tailored support for all project types and greater
                  flexibility based on project and researcher needs.
                  <ul>
                    <li>
                      Exact development costs for CRU supported REDCap project builds will
                      continue to be estimated from intake meetings and consultations.
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
            <b
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                marginTop: 0,
              }}
              id='five'
              onClick={() => setShowCollapse(showCollapse === '5' ? '' : '5')}
            >
              {showCollapse === '5' ? (
                <ChevronDown size={24} className='mr-2' />
              ) : (
                <ChevronRight size={24} className='mr-2' />
              )}
              How do I open a new project on the CRU’s validated REDCap platform?
            </b>
            <Collapse isOpen={showCollapse === '5'}>
              <ul>
                <li>
                  To request the creation of new REDCap user accounts, the creation of a
                  new REDCap project, CRU support to build your REDCap project, and a
                  variety of other tools offered by the CRU, please complete an{' '}
                  <a
                    href='https://redcap.cru.ucalgary.ca/surveys/?s=7L49EPE94D'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='external-link'
                  >
                    intake survey
                  </a>
                  . A member of our team will then address your request as soon as
                  possible.
                </li>
              </ul>
            </Collapse>
          </div>
          <div>
            <b
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                marginTop: 0,
              }}
              id='six'
              onClick={() => setShowCollapse(showCollapse === '6' ? '' : '6')}
            >
              {showCollapse === '6' ? (
                <ChevronDown size={24} className='mr-2' />
              ) : (
                <ChevronRight size={24} className='mr-2' />
              )}
              What will happen as part of REDCap Revitalization?
            </b>
            <Collapse isOpen={showCollapse === '6'}>
              <ul>
                <li>
                  Some of the initiatives and new services included in REDCap
                  Revitalization are:
                  <ul>
                    <li>Validated REDCap instance to support regulatory trials</li>
                    <li>A single unified instance requiring only one log-in</li>
                    <li>
                      A new support structure, including updated and detailed
                      documentation, REDCap training, and updated methods for accessing
                      CRU support
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
            <b
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                marginTop: 0,
              }}
              id='seven'
              onClick={() => setShowCollapse(showCollapse === '7' ? '' : '7')}
            >
              {showCollapse === '7' ? (
                <ChevronDown size={24} className='mr-2' />
              ) : (
                <ChevronRight size={24} className='mr-2' />
              )}
              Why is the CRU changing so much?
            </b>
            <Collapse isOpen={showCollapse === '7'}>
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
            <b
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                marginTop: 0,
              }}
              id='eight'
              onClick={() => setShowCollapse(showCollapse === '8' ? '' : '8')}
            >
              {showCollapse === '8' ? (
                <ChevronDown size={24} className='mr-2' />
              ) : (
                <ChevronRight size={24} className='mr-2' />
              )}
              It sounds like the CRU is doing lots! How can I stay up to date on what the
              CRU is doing?
            </b>
            <Collapse isOpen={showCollapse === '8'}>
              <ul>
                <li>
                  We’ll be posting updates and announcements on our website, as well as
                  sending important CRU updates to all users via email.
                </li>
                <li>
                  Want to help us on our journey? We will be putting out a call for
                  members to join an advisory board. Stay tuned for more details!
                </li>
              </ul>
            </Collapse>
          </div>
        </FAQ>
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

const FAQ = styled.div`
  text-align: left;
  margin: 16px;
  padding: 16px;
`
