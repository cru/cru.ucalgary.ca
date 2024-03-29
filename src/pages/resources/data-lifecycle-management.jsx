import React, { useState } from 'react'
import { ChevronDown, ChevronRight, ExternalLink } from 'react-feather'
import { Collapse } from 'reactstrap'
import Styled from 'styled-components'

import Layout from '../../containers/layout'
import Padding from '../../containers/padding'
import CruFragment from '../../components/crufragment'
import ProjectIntake from '../../components/dlm/projectIntake'
import DataCollection from '../../components/dlm/dataCollection'
import DataStorage from '../../components/dlm/dataStorage'
import DataAnalysis from '../../components/dlm/dataAnalysis'
import DataBackup from '../../components/dlm/dataBackup'
import Closeout from '../../components/dlm/closeout'
import dlm from '../../images/dlm.jpg'

const DataLifecycleManagementPage = () => {
  const [showOne, toggleOne] = useState(false)
  const [showTwo, toggleTwo] = useState(false)
  const [showThree, toggleThree] = useState(false)
  const [showFour, toggleFour] = useState(false)
  const [showFive, toggleFive] = useState(false)
  const [showSix, toggleSix] = useState(false)

  return (
    <Layout
      title='Data Lifecycle Management'
      page='data-lifecycle-management'
      group='resources'
    >
      <div style={{ height: 60 }} />
      <Padding>
        <h1>Data Lifecycle Management</h1>
        <h5 className='text-muted' style={{ marginTop: 0 }}>
          The Clinical Research Unit (CRU) utilizes a standardized and repeatable
          policy-driven approach to manage your research data through its lifecycle within
          our organization. The Data Lifecycle Management (DLM) strategy summarizes the
          specific data management practices that ensure appropriate handling of data at
          all stages of the project.
        </h5>
        <div style={{ height: 55 }} />
        <p>
          Our approach ensures a secure, semi-automated, and client-friendly data
          management infrastructure. We can service your needs along the full continuum of
          data management, including intake, project staging, data collection, data
          management, provisioning and data analysis. Our services extend all the way
          through data archival and dissemination, and leverage policies and best
          practices from the academic domain and beyond.
        </p>
        <div>
          <h3 className='mt-5'>Platforms and Services Offered by the CRU:</h3>
          <p>
            We offer a suite of client-friendly services, backed by a team dedicated to
            support the setup and delivery of health research projects of any type.
          </p>
          <div>
            Services:
            <ul>
              <li>Facilitated and managed access to electronic data capture platforms</li>
              <li>
                Provisioning of self-managed research tools for academic data collection
                projects
              </li>
              <li>
                Creation and deployment of software to support delivery of novel research
                workflows
              </li>
              <li>Specialized project management around clinical studies and trials</li>
              <li>Analysis and biostatistics support to study methodology</li>
              <li>Service desk for support</li>
            </ul>
          </div>
          <div>
            Platforms:
            <ul>
              <li>
                REDCap: An on-academic-premise web-based application that provides a
                highly secure environment for building and managing online surveys for
                data collection.{' '}
              </li>
              <li>
                REDCap Cloud: A certified cloud-based platform, with an equivalent level
                of data security and collection methodologies as web-based platforms.
              </li>
              <li>
                DFDiscover (DataFax): Offers remote data entry capacity that supports fax
                functionality in addition to electronic data collection.
              </li>
              <li>
                Custom Software: In addition to these electronic data capture (EDC)
                platforms, the CRU distinguishes itself by being able to build creative
                and custom solutions to facilitate novel research workflows. This takes
                the form of custom research management and collection elements where both
                client-focused and research-focused user interfaces are co-developed, and
                electronic data capture (EDC) interactions can be established.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className='mt-5'>Data Lifecycle Management through Stages</h3>
          <Img src={dlm} />
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
              1) Project Intake
            </h5>
            <Collapse isOpen={showOne}>
              <ProjectIntake />
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
              2) Data Setup & Collection
            </h5>
            <Collapse isOpen={showTwo}>
              <DataCollection />
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
              3) Data Storing & Handling
            </h5>
            <Collapse isOpen={showThree}>
              <DataStorage />
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
              4) Data Analysis
            </h5>
            <Collapse isOpen={showFour}>
              <DataAnalysis />
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
              5) Data Backup & Archive
            </h5>
            <Collapse isOpen={showFive}>
              <DataBackup />
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
              6) Project Close-out & Data Purging
            </h5>
            <Collapse isOpen={showSix}>
              <Closeout />
            </Collapse>
          </div>
        </div>
        <div>
          <h3 className='mt-5'>Policies</h3>
          <ul>
            <li>
              <a
                href='https://www.ucalgary.ca/legal-services/university-policies-procedures/privacy-policy'
                target='_blank'
                rel='noopener noreferrer'
                className='external-link'
              >
                <p>
                  UofC Privacy Policy <ExternalLink size={12} />
                </p>
              </a>
            </li>
            <li>
              <a
                href='https://www.ucalgary.ca/legal-services/university-policies-procedures/acceptable-use-electronic-resources-and-information-policy'
                target='_blank'
                rel='noopener noreferrer'
                className='external-link'
              >
                <p>
                  Acceptable Use of Electronic Resources and Information Policy{' '}
                  <ExternalLink size={12} />
                </p>
              </a>
            </li>
            <li>
              <a
                href='https://www.ucalgary.ca/legal-services/university-policies-procedures/information-asset-management-policy'
                target='_blank'
                rel='noopener noreferrer'
                className='external-link'
              >
                <p>
                  Information Asset Management Policy <ExternalLink size={12} />
                </p>
              </a>
            </li>
            <li>
              <a
                href='https://www.ucalgary.ca/legal-services/university-policies-procedures/health-information-management-policy'
                target='_blank'
                rel='noopener noreferrer'
                className='external-link'
              >
                <p>
                  Health Information Management Policy <ExternalLink size={12} />
                </p>
              </a>
            </li>
            <li>
              <a
                href='https://www.ucalgary.ca/legal-services/university-policies-procedures/storage-inactive-clinical-research-records-policy'
                target='_blank'
                rel='noopener noreferrer'
                className='external-link'
              >
                <p>
                  Storage of Inactive Clinical Research Records Policy{' '}
                  <ExternalLink size={12} />
                </p>
              </a>
            </li>
            <li>
              <a
                href='https://www.ucalgary.ca/legal-services/access-information-privacy/operating-standards-guidelines-forms'
                target='_blank'
                rel='noopener noreferrer'
                className='external-link'
              >
                <p>
                  UofC Operating Standards, Guidelines & Forms <ExternalLink size={12} />
                </p>
              </a>
            </li>
          </ul>
        </div>
      </Padding>
      <div style={{ height: '100px' }} />
      <CruFragment />
      <div style={{ height: '100px' }} />
    </Layout>
  )
}

const Img = Styled.img`
    display: block;
    object-fit: contain;  
    width: 60%;
    max-width: 300px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 50px;
`

export default DataLifecycleManagementPage
