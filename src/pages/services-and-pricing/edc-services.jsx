import React from 'react'
import Styled from 'styled-components'
import { ChevronsDown } from 'react-feather'

import Layout from '../../containers/layout'
import Padding from '../../containers/padding'
import CruFragment from '../../components/crufragment'
import ServicePlans from '../../components/fees/servicePlans'

const EDCServicesPage = () => {
  return (
    <Layout title='Electronic Data Capture Services' page='edc-services'>
      <div style={{ height: 60 }} />
      <Padding>
        <h1>Electronic Data Capture Services</h1>
        <div style={{ height: 55 }} />
        <p>
          The CRU provides access and capacity building tools in the areas of data
          capture, databases, and data management. We are the University of Calgary’s
          provider of <b>REDCap access</b> and value-add services, including database
          builds, setup and configuration, and implementation of advanced features.
        </p>
        <p>
          <h3 className='mt-5'>
            Interested in{' '}
            <a
              href='https://redcap.cru.ucalgary.ca/surveys/?s=7L49EPE94D'
              target='_blank'
              rel='noopener noreferrer'
              className='external-link'
            >
              starting a REDCap project
            </a>{' '}
            with us? We support two project types:
          </h3>
          <ol>
            <li>
              <u>Self-service projects:</u> Research teams experienced in REDCap can
              complete the build and setup themselves. The CRU provides users with access
              to REDCap and maintains the REDCap platform, such as updates/patches, data
              backups, and system administration.
            </li>
            <li>
              <u>CRU supported projects:</u> We have specialized expertise in REDCap
              database development and are happy to complete an end-to-end project build
              for research studies. This is ideal for research teams who are new to
              REDCap, studies that need advanced or complex features, or who want a
              convenient full service option.
            </li>
          </ol>
        </p>
        <p>
          <b>Large research groups or institutes</b> can enter into a partnership model
          with the CRU for more cost-effective and holistic support services.{' '}
          <a
            href='https://researchcalgary.atlassian.net/servicedesk/customer/portal/7'
            target='_blank'
            rel='noopener noreferrer'
            className='external-link'
          >
            Contact us
          </a>{' '}
          to discuss further!
        </p>
        <h3 className='mt-5'>Pricing</h3>
        <p>
          All REDCap projects pay platform maintenance fees to help us cost recover the
          overhead to maintain our REDCap system. CRU development and setup support fees
          for supported projects are determined on a project-by-project basis.
        </p>
        <h5 className='mt-3'>CRU Development and Setup Support Fees</h5>

        <p>
          Fees for CRU support are determined on a project-by-project basis. CRU support
          includes services such as database setup, development, and custom add-ons.
          Please complete our{' '}
          <a
            href='https://redcap.cru.ucalgary.ca/surveys/?s=7L49EPE94D'
            target='_blank'
            rel='noopener noreferrer'
            className='external-link'
          >
            intake survey
          </a>{' '}
          and our team will reach out to set up a consultation.
        </p>
        <h5 className='mt-3'>Platform Maintenance Fees</h5>
            <p>
            The CRU offers a variety of service tiers to meet the unique needs of different projects.
            </p>
            <p>
              The <b>Compliant Clinical Trial Tier (CCTT)</b> is designed for the specific requirements of Health Canada and FDA regulated clinical trials.
            </p>
            <p>
            <b>Regular REDCap project</b> fees apply to all other project types and include consultation hours for advanced support. Add-ons are available for enhanced support services:
            </p>
            <ul>
              <li><b>Clinical Trial Add-On:</b> Enhanced support for all other clinical trials, but at less rigour and lower cost than the CCTT.</li>
            <li><b>Registry Add-On:</b> In addition to the enhanced security and support services, registries get up to XX of storage</li>
            </ul>
        <div className='text-center mt-5'>
          <h5>See below for the full breakdown of service plans</h5>
          <ChevronsDown size={48} />
          <br />
          <br />
        </div>
        <ServicePlans />
        <p style={{ marginTop: '50px', textAlign: 'center' }}>
              <b>
                <i>
                  *The fee for archived projects is $200/year. No support hours are
                  provided.
                </i>
              </b>
            </p>
      </Padding>
      <div style={{ height: '100px' }} />
      <CruFragment />
      <div style={{ height: '100px' }} />
    </Layout>
  )
}

export default EDCServicesPage

const Divider = Styled.hr`
  background: linear-gradient(to right, rgb(32, 32, 32) 32.3%, ${(props) =>
    props.theme.brandSecondColor} 32.3%, ${(props) =>
  props.theme.brandSecondColor} 67.7%, ${(props) => props.theme.brandPrimColor} 67.7%);
`
const OverviewHeader = Styled.div`
  background: linear-gradient(to right, #fff 33.3%, ${(props) =>
    props.theme.brandSecondColor} 32.3%, ${(props) =>
  props.theme.brandSecondColor} 67.7%, ${(props) => props.theme.brandPrimColor} 67.7%);
  padding: 8px;
`
