import React from 'react'

import Layout from '../../containers/layout'
import Padding from '../../containers/padding'
import CruFragment from '../../components/crufragment'

const ProjectValidationGuidePage = () => {
  return (
    <Layout
      title='Project Validation Guide'
      page='project-validation-guide'
      group='resources'
    >
      <div style={{ height: 60 }} />
      <Padding>
        <h1>Post Emergency Security Upgrade: Project-Level Validation Guide</h1>
        <div style={{ height: 55 }} />
        <h2>Guide</h2>
        <h5 className='text-muted' style={{ marginTop: 0 }}>
          For the complete guide, please download our{' '}
          <a
            href='/REDCapProjectValidation_GuidanceDocument.pdf'
            download
            className='external-link'
          >
            Project Validation Guidance
          </a>{' '}
          document
        </h5>
        <div style={{ height: 25 }} />
        <h4>Emergency Security Upgrade</h4>
        <p>
          On April 20, 2023, the CRU successfully upgraded REDCap to resolve a critical
          security vulnerability communicated by the REDCap vendor. We thank you for your
          understanding and patience, given the urgent and priority nature of this
          emergency upgrade.
        </p>
        <p>
          This{' '}
          <a
            href='/REDCapProjectValidation_GuidanceDocument.pdf'
            download
            className='external-link'
          >
            document
          </a>{' '}
          can be used by study teams for the purpose of project level validation following
          this emergency upgrade. Project validation by the study team will include and
          ensure that all functional requirements listed in the table below have been
          tested, or deemed not applicable, and are functioning as expected according to
          project and study requirements.
        </p>
        <div style={{ height: 200 }} />
      </Padding>
      <CruFragment />
      <div style={{ height: '100px' }} />
    </Layout>
  )
}

export default ProjectValidationGuidePage
