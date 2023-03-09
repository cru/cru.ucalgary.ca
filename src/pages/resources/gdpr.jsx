import React from 'react'

import Layout from '../../containers/layout'
import Padding from '../../containers/padding'
import CruFragment from '../../components/crufragment'

const GdprPage = () => {
  return (
    <Layout title='GDPR Policy' page='gdpr' group='resources'>
      <div style={{ height: 60 }} />
      <Padding>
        <h1>Our GDPR Policy</h1>
        <h5 className='text-muted' style={{ marginTop: 0 }}>
          For our complete statement, please download our{' '}
          <a href='/CRU_GDPR_Statement_v2.1.pdf' download className='external-link'>
            GDPR Policy
          </a>{' '}
          document
        </h5>
        <div style={{ height: 55 }} />
        <h3>GDPR Compliance</h3>
        <p>
          The CRU acts both as data controller and processor under GDPR guidelines but is
          only responsible for personal information access requests in its role as a
          controller. We are committed to complying with GDPR guidelines to ensure that
          customer privacy is protected. In addition to meeting GDPR standards, the CRU
          meets the legal and regulatory privacy and protection standards set out by the
          regions in which the CRU operates.
        </p>
        <h3 className='mt-5'>Privacy and Security Measures</h3>
        <p>
          The CRU employs a variety of privacy and security procedures to safeguard and
          secure the personal information we collect. These security measures ensure that
          the existing privacy laws and regulatory standards are met. Security measures
          include, but are not limited to:
        </p>
        <ul>
          <li>
            Data Security: end-to-end encryption using SSL technology with high-grade
            256-bit encryption protects data “in transit” for privacy, integrity and
            authentication. Access control is achieved by the means of authentication and
            authorization. Data at rest is stored in encrypted format using the
            industry-standard AES-256 algorithm. Data is logically segregated from
            application access
          </li>
          <li>
            Security: In-depth security including firewalls and access control lists
            (ACLs); network and host-based intrusion detection; scanners; authentication,
            authorization, and accounting (AAA), and encryption are used as appropriate.
          </li>
          <li>
            Applications Security: Role-based user privileges ensure user only access to
            the appropriate application functionality. Multi-Factor Authentication (MFA)/
            Two-Factor Authentication (2FA). Inactivity automatic access suspension.
          </li>
        </ul>
        <h3 className='mt-5'>Data we Collect</h3>
        <p>
          The CRU collects and processes the data provided by the study team as part of a
          research study, which may include your personal data and data concerning health.
          This data is being collected and processed with your consent.
        </p>
        <h3 className='mt-5'>Why we Collect this Data</h3>
        <p>
          The CRU collects and processes this data for the purposes of delivering services
          in support of clinical research. We will only collect and process the data you
          provide for the purposes discussed by the study team and to ensure compliance
          with regulatory requirements.
        </p>
        <p>
          The CRU will not sell, transfer, or disclose your data to a third party, except
          to contractors performing activities directly related to the purpose for which
          the data was collected, and to comply with regulatory auditing or monitoring
          requirements or as required by law.
        </p>
        <h3 className='mt-5'>How Long we Keep this Data</h3>
        <p>
          The CRU only saves data for as long as it is needed, and as required by
          regulation. When a study team informs us that the study is complete, we will
          store a backup of the collected and processed data. We will delete the backup
          after one year, unless we are required by regulation or law to retain the data
          longer.
        </p>
        <h3 className='mt-5'>
          Actions, Corrections, Objections, and Deletions to Personal Data
        </h3>
        <p>
          You still have rights over what happens with your data being held by the CRU.
        </p>
        <p>Every user has the right to the following:</p>
        <ul>
          <li>
            Access: You have the right to request that the CRU provide copies of your data
            in our possession.
          </li>
          <li>
            Rectification: You have the right to request that the CRU correct any data you
            believe to be inaccurate and complete any data you believe to be incomplete.
          </li>
          <li>
            Erasure: You have the right to request that the CRU erase your data in our
            possession, under certain conditions.
          </li>
          <li>
            Restrict processing: You have the right to request that the CRU restrict the
            processing of your data in our possession, under certain conditions.
          </li>
          <li>
            Object to processing: You have the right to object to the CRU processing your
            data, under certain conditions.
          </li>
          <li>
            Data portability: You have the right to request that the CRU transfer the data
            we have collected to another organization or directly to you, under certain
            conditions.
          </li>
          <li>
            Withdraw consent: You have the right to withdraw your consent for the CRU to
            continue collecting and processing your data. Withdrawing your consent will
            not affect the collecting and processing of your data prior to withdrawal.
          </li>
        </ul>
        <p>
          If you would like to exercise any of these rights, please contact us at our
          email:{' '}
          <a href='mailto:cru@ucalgary.ca' className='external-link'>
            cru@ucalgary.ca
          </a>
          .
        </p>
        <br />
        <h5>
          <i>Restrictions to the Right to be Forgotten</i>
        </h5>
        <p>
          The CRU follows the Good Clinical Practice for clinical research. The guidelines
          on data and record management prohibit the deletion of clinical research data.
          The CRU reserves the right to retain and disclose your data, which may include
          your personal data, as permitted or required by law or regulation, and in
          accordance with these guidelines.
        </p>
        <h3 className='mt-5'>How to Contact Us</h3>
        <p>
          If you would like to speak to us about how GDPR law impacts your personal data
          at the CRU, or have any requests for information about, corrections to, or
          deletion of your data, please send requests to:{' '}
          <a href='mailto:cru@ucalgary.ca' className='external-link'>
            cru@ucalgary.ca
          </a>
        </p>
        <div style={{ height: 200 }} />
      </Padding>
      <CruFragment />
      <div style={{ height: '100px' }} />
    </Layout>
  )
}

export default GdprPage
