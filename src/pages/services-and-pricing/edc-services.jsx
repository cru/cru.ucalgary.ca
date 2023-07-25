import React, { useState } from 'react'
import Styled from 'styled-components'
import { ChevronDown, ChevronRight, ChevronsDown } from 'react-feather'
import { Collapse } from 'reactstrap'

import Layout from '../../containers/layout'
import Padding from '../../containers/padding'
import CruFragment from '../../components/crufragment'
import ServicePlans from '../../components/fees/servicePlans'
import { Link } from 'gatsby'


const EDCServicesPage = () => {
  const [showCollapse, setShowCollapse] = useState('')

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
            <li><b>Registry Add-On:</b> Enhanced security and support services ensure high data quality standards that are essential for longitudinal data.</li>
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
            <h2 style={{textAlign: 'center', marginTop: '64px'}}>DataXplor add-ons</h2>
            <DXAddOns>
              <AddOn >
                <Link to={'/newsroom/dataxplor'}>
                <h3>DataViz &rarr;</h3>
                <p className='text-muted'>Easily create custom visualizations of your REDCap data in real-time.</p>
                </Link>
                
              </AddOn>
              <AddOn >
              <Link to={'/newsroom/dataxplor'}>
                <h3>DataLytics &rarr;</h3>
                <p className='text-muted'>A real-time monitoring tool that provides a comprehensive view of your research study.</p>
                </Link>
              </AddOn>
            </DXAddOns>

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
              If my project is a regulated clinical trial, am I required to subscribe to the CCTT?
            </b>
            <Collapse isOpen={showCollapse === '1'}>
              <p>Yes, regulated clinical trials are required to subscribe to the CCTT. This ensures all regulatory requirements are met and we can best support in case of an audit.</p>
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
              If my project is a clinical trial or registry, am I required to subscribe to the add-ons?
            </b>
            <Collapse isOpen={showCollapse === '2'}>
              <p>Yes, as these add-ons provide additional privacy and security measures and supporting documentation tailored to these project types.</p>
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
              If my project is not a clinical trial or registry, can I subscribe to the CCTT or add-ons?
            </b>
            <Collapse isOpen={showCollapse === '3'}>
              <p>Yes, absolutely! Any project looking for additional privacy and security measures are welcome to subscribe to the CCTT or add-ons. Please indicate on your intake survey submission or let us know at <a href='mailto:cru.finance@ucalgary.ca'>cru.finance@ucalgary.ca</a>

</p>
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
              id='four'
              onClick={() => setShowCollapse(showCollapse === '4' ? '' : '4')}
            >
              {showCollapse === '4' ? (
                <ChevronDown size={24} className='mr-2' />
              ) : (
                <ChevronRight size={24} className='mr-2' />
              )}
              If I don’t need REDCap for a full year, can I get a discount?
            </b>
            <Collapse isOpen={showCollapse === '4'}>
              <p>In some cases, annual maintenance fees can be pro-rated for less than a year. Please reach out to us at <a href='mailto:cru.finance@ucalgary.ca'>cru.finance@ucalgary.ca</a> to discuss further.</p>
            </Collapse>
          </div>
        </FAQ>
      </Padding>
      <div style={{ height: '100px' }} />
      <CruFragment />
      <div style={{ height: '100px' }} />
    </Layout>
  )
}

export default EDCServicesPage

const DXAddOns = Styled.div`
display: flex;
justify-content: center;
`

const AddOn = Styled.div `
text-align: left;
width: 400px;
margin: 16px;
padding: 16px;
 border-radius: ${(props) => props.theme.borderRadius};
 background-color: ${(props) => props.theme.navBarAccent};
 cursor: pointer;
 transition: all ease 150ms;

 :hover {
  scale: 1.1;
}

a:hover {
  text-decoration: none;
  color: inherit;
}
`
const FAQ = Styled.div `
text-align: left;
margin: 16px;
padding: 16px;
`