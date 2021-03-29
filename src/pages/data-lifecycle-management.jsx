import React, { useState } from 'react'
import { ChevronDown, ChevronRight } from 'react-feather'
import { Collapse } from 'reactstrap'

import Layout from '../containers/layout'
import Padding from '../containers/padding'
import CruFragment from '../components/crufragment'

const DataLifecycleManagementPage = () => {
  const [showOne, toggleOne] = useState(false)
  const [showTwo, toggleTwo] = useState(false)
  const [showThree, toggleThree] = useState(false)
  const [showFour, toggleFour] = useState(false)
  const [showFive, toggleFive] = useState(false)
  const [showSix, toggleSix] = useState(false)

  return (
    <Layout title='Data Lifecycle Management' page='data-lifecycle-management'>
      <div style={{ height: 60 }} />
      <Padding>
        <h1>Data Lifecycle Management</h1>
        <div style={{ height: 55 }} />
        <p>
          The Clinical Research Unit (CRU) utilizes a standardized and repeatable
          policy-driven approach to manage your research data through its lifecycle within
          our organization. The Data Lifecycle Management (DLM) strategy summarizes the
          specific data management practices that ensure appropriate handling of data at
          all stages of the project.
        </p>
        <p>
          Our approach ensures a secure, semi-automated, and client-friendly data
          management infrastructure. We can service your needs along the full continuum of
          data management, including intake, project staging, data collection, data
          management, provisioning and data analysis. Our services extend all the way
          through data archival and dissemination, and leverage policies and best
          practices from the academic domain and beyond.
        </p>
        <div>
          <h3>Platforms and Services Offered by the CRU:</h3>
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
          <h3>Data Lifecycle Management through Stages</h3>
          <div>
            <h3
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              id='one'
              onClick={() => toggleOne(!showOne)}
            >
              {showOne ? (
                <ChevronDown size={24} className='mr-2' />
              ) : (
                <ChevronRight size={24} className='mr-2' />
              )}
              1) Project Intake
            </h3>
            <Collapse isOpen={showOne}>
              <p style={{ marginTop: 0 }}>
                The CRU hosts a variety of leading EDC platforms, such as REDCap, REDCap
                Cloud and DFDiscover. This gives researchers a range of choices and
                capabilities when building tools dedicated to data capture, databases, and
                custom data management. We also offer custom software that can be tailored
                to the needs and workflows of a specific project. In order to determine
                which services, platform, software bundles or data management support will
                best suit a client’s needs, we use a stratified and structured intake
                service. Using this decision model and through consultations with the
                client, we are able to determine the best approach to building and
                managing the client’s database.
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
                  We will work with you to understand your data collection needs, and
                  assess the parameters and controls needed to manage your research data.
                  We will then establish an agreement with you to provide clarity and
                  assurance.
                </p>
                Key considerations include:
                <ul>
                  <li>
                    The end date of data collection, and expected total volume of data to
                    be collected and stored
                  </li>
                  <li>How and where the collected data will be stored and backed up</li>
                  <li>Privacy, confidentiality and intellectual property requirements</li>
                  <li>
                    Whether ethics approval has been acquired for the project, and whether
                    data collection/storage is tied to the ethics approval end date with a
                    possibility of renewal
                  </li>
                  <li>
                    Data access considerations, including who has access to the data
                    during the active data collection process, designated data custodians
                    of the project, and contingency plans in case the study team changes{' '}
                  </li>
                  <li>
                    How exported data is to be transferred to the client for analytics,
                    data archival, or data purging{' '}
                  </li>
                </ul>
              </div>
            </Collapse>
          </div>
          <div>
            <h3
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              id='two'
              onClick={() => toggleTwo(!showTwo)}
            >
              {showTwo ? (
                <ChevronDown size={24} className='mr-2' />
              ) : (
                <ChevronRight size={24} className='mr-2' />
              )}
              2) Data Setup & Collection
            </h3>
            <Collapse isOpen={showTwo}>
              <p style={{ marginTop: 0 }}>
                Once a data collection platform has been agreed upon and the intake
                process has been completed, we will work in collaboration with the client
                to design and build the project and data management application services
                according to their standards and requirements. This process can look
                different across the various platforms; however, we adhere to quality
                assurance and testing policies in order to guarantee functional and
                effective data collection and management.
              </p>
              <p>
                To safeguard the data collection process, study data system access will
                only be granted to users who have been centrally (and where necessary
                clinically) approved as having completed study systems training, are in
                possession of all appropriate and valid credentials and certifications,
                and who have a study role that merits each specific access type. Users
                will be granted individual accounts with permissions designed to grant
                access only to functions and data that supports their study role. In
                addition, user access password complexity rules, expiries and other data
                security features are systematically used to ensure suitable data
                accessibility and data security.
              </p>
            </Collapse>
          </div>
          <div>
            <h3
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              id='three'
              onClick={() => toggleThree(!showThree)}
            >
              {showThree ? (
                <ChevronDown size={24} className='mr-2' />
              ) : (
                <ChevronRight size={24} className='mr-2' />
              )}
              3) Data Storing & Handling
            </h3>
            <Collapse isOpen={showThree}>
              <p style={{ marginTop: 0 }}>
                The CRU uses a variety of data storage services, including perimeter
                networks and double screened subnetworks, and logical and physical
                separation of data and application access. In order to determine the best
                storage location for a client’s data, we classify the data according to
                the University of Calgary’s{' '}
                <a
                  href='https://www.ucalgary.ca/legal-services/sites/default/files/teams/1/Standards-Legal-Information-Security-Classification-Standard.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  security policies and data classification levels
                </a>
                . Based on this classification, we will consult with the client to create
                an active data storage plan.
              </p>
              Our active data storage plans are policy driven and include the following
              considerations:
              <ul>
                <li>
                  Where requested, cloud computing platforms or managed research compute
                  services can be leveraged or embedded in data pipelines.
                </li>
                <li>
                  If data is highly confidential (e.g., participant or patient
                  identifiable), greater precautions are taken, and an agreement will be
                  established with the client to ensure that a secured data storage and
                  computing platform is used.
                </li>
                <li>
                  Sensitive data can be VPN disclosed and platform access is regularly
                  scanned for leaks and holes.
                </li>
                <li>
                  Data access and access permission is administratively managed, logged,
                  trailed, and often automatically revoked upon inactivity. This process
                  is policy driven.
                </li>
                <li>
                  Requests for changes to data elements and variables in any project
                  follows a rigorous process of clarification of implication of the
                  changes to the investigator, written confirmation and authorization by
                  the principal investigator or project owner, and tracking of any
                  changes.
                </li>
                <li>
                  Upgrades to data management platforms are compliance and ethics
                  approved. The CRU separates development, user acceptance, and production
                  data with separated authorization and authentication.
                </li>
              </ul>
              <p>
                We can also help support the client in establishing the most suitable
                strategies for data ownership, permissions, and sharing. The designated
                data custodian/principal investigator will be able to control and permit
                access and use of all data. Restrictions can be enforced to ensure
                security when interacting with and sharing the project data, whether the
                latter is raw, processed, or derived. We can also help to create a plan to
                share the data with the client’s collaborators (internal/external) and
                team members, in a manner that always prioritizes security and data
                protection.
              </p>
            </Collapse>
          </div>
          <div>
            <h3
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              id='four'
              onClick={() => toggleFour(!showFour)}
            >
              {showFour ? (
                <ChevronDown size={24} className='mr-2' />
              ) : (
                <ChevronRight size={24} className='mr-2' />
              )}
              4) Data Analysis
            </h3>
            <Collapse isOpen={showFour}>
              If requested, the CRU can provide the following additional support for
              clinical trials and observational studies:
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
                  Assessment and implementation of a large variety of randomization
                  strategies for Randomized Controlled Trials (RCTs) across a variety of
                  platforms.
                </li>
                <li>
                  Sample size calculations, managing and shaping your analysis plan, data
                  cleaning and preparation, and final analyses.
                </li>
                <li>
                  By leveraging UCIT tools, we have the capacity to perform large-scale
                  analytics projects from administrative, EMR, sensor data, and more.
                  Whether it concerns public data or subject and person sensitive
                  information, the academic infrastructure used for transporting,
                  analyzing, storing, and disseminating your data have been architected
                  and approved to handle data at all levels of confidentiality. When
                  analyses are performed on high performance nodes and hosted instances
                  within the university’s computation network, data stays on the premises
                  and never travels beyond the security perimeters. Data and generated
                  (meta) data gets wiped after specific project purposes have been
                  fulfilled.
                </li>
              </ul>
            </Collapse>
          </div>
          <div>
            <h3
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              id='five'
              onClick={() => toggleFive(!showFive)}
            >
              {showFive ? (
                <ChevronDown size={24} className='mr-2' />
              ) : (
                <ChevronRight size={24} className='mr-2' />
              )}
              5) Data Backup & Archive
            </h3>
            <Collapse isOpen={showFive}>
              <p style={{ marginTop: 0 }}>
                We apply industry standard data backups and redundancy. Data backups can
                be specified and completed according to the client’s needs. This includes
                how and when the backups are performed, and where the backups are stored.
                Periodic backups can be executed at the client’s preference, whether full,
                differential or incremental, and restrictions can be put in place to
                control who has access to this data.
              </p>
              <p>
                Once the data sets or databases have been locked and frozen, and the final
                (Clinical) Study Report has been signed, the study data is considered
                archived. From this point, we will proceed according to the client’s
                request to archive study data for a limited period of time. Long-term
                storage is the responsibility of the client.
              </p>
              <p>
                We recommend that clients create a self-managed long-term data storage
                plan and extended data archival plan. We will work with the client to
                ensure the data archival plan is appropriate in terms of file formats,
                indexing, timely retrieval, and re-usability.
              </p>
            </Collapse>
          </div>
          <div>
            <h3
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              id='six'
              onClick={() => toggleSix(!showSix)}
            >
              {showSix ? (
                <ChevronDown size={24} className='mr-2' />
              ) : (
                <ChevronRight size={24} className='mr-2' />
              )}
              6) Project Close-out & Data Purging
            </h3>
            <Collapse isOpen={showSix}>
              <p style={{ marginTop: 0 }}>
                Project close-out procedures will be performed prior to database locking
                in order to verify the integrity and completion of the database. These
                procedures involve a series of controlled checks including, but not
                limited to, checking that all CRFs have been entered, manual reviews have
                been completed, the project data are consistent with specifications in the
                project dictionary, and other processes. At project completion, we provide
                your data in a formal sign off, according to Standard Operating Procedures
                for the CRU. If requested, project data will be snapshotted and encrypted
                for up to one year after project closure.
              </p>
              <p>
                Data purging will be conducted according to current established best
                practices and in agreement with governance and compliance requirements
                arranged with the client during Intake (Stage 1). Data purging consists of
                deleting every copy of the data item from the client’s platform, swiping
                archives, overwriting or destroying storage location and sweeping audit
                trails. The purging process is done in accordance with CRU and academic
                policies and regulations to ensure all data is properly removed, and all
                traces of the client’s data are completely deleted from our servers.
              </p>
            </Collapse>
          </div>
        </div>
      </Padding>
      <div style={{ height: '100px' }} />
      <CruFragment />
      <div style={{ height: '100px' }} />
    </Layout>
  )
}

export default DataLifecycleManagementPage
