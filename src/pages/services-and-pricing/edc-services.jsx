import React, { useState } from 'react'
import { Row, Col, ButtonGroup, Button, TabContent, TabPane } from 'reactstrap'
import Styled from 'styled-components'
import { ChevronsDown } from 'react-feather'

import Layout from '../../containers/layout'
import Padding from '../../containers/padding'
import CruFragment from '../../components/crufragment'
import RegularFees from '../../components/fees/regularFees'
// import ClinicalTrialFees from '../../components/fees/clinicalTrialFees'

const EDCServicesPage = () => {
  const [activeTab, setActiveTab] = useState('regular')

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
        <Row>
          <Col md='6'>
            <p>
              The CRU supports two types of REDCap projects: <b>Regular</b> and{' '}
              <b>Clinical Trials</b>.
            </p>
            <p>
              <b>Clinical Trials</b> can now be hosted on the CRU's REDCap. The CRU
              provides a suite of tailored services to meet Health Canada requirements
              (details to come).
            </p>
            <p>
              A <b>Regular REDCap project</b> is suitable for just about all other
              electronic data capture needs (like eConsent) and study types. Not sure if
              REDCap will meet your needs?{' '}
              <a
                href='https://researchcalgary.atlassian.net/servicedesk/customer/portal/7'
                target='_blank'
                rel='noopener noreferrer'
                className='external-link'
              >
                Contact us
              </a>
              , we’d love to help!
            </p>
            <p>
              <b>
                <i>
                  *The fee for archived projects is $200/year. No support hours are
                  provided.
                </i>
              </b>
            </p>
          </Col>
          <Col md='6'>
            <OverviewHeader>
              <Row className='text-center'>
                <Col xs={{ size: 4, offset: 4 }}>
                  <h6 style={{ margin: 0, color: '#fff' }}>Regular Project</h6>
                </Col>
                <Col xs='4'>
                  <h6 style={{ margin: 0, color: '#fff' }}>Clinical Trial</h6>
                </Col>
              </Row>
            </OverviewHeader>
            <div className='section-triple'>
              <Row className='text-center'>
                <Col xs='4'>
                  <span>Basic</span>
                </Col>
                <Col xs='4'>
                  <span>
                    $300<small style={{ fontSize: '12px' }}>/year</small>
                  </span>
                </Col>
                <Col xs='4'>
                  {/* <span>
                    $1,000<small style={{ fontSize: '12px' }}>/year</small>
                  </span> */}
                  <small>Coming soon!</small>
                </Col>
              </Row>
              <Divider />
              <Row className='text-center'>
                <Col xs='4'>
                  <span>Plus</span>
                </Col>
                <Col xs='4'>
                  <span>
                    $650<small style={{ fontSize: '12px' }}>/year</small>
                  </span>
                </Col>
                <Col xs='4'>
                  {/* <span>
                    $1,500<small style={{ fontSize: '12px' }}>/year</small>
                  </span> */}
                  <small>Coming soon!</small>
                </Col>
              </Row>
              <Divider />
              <Row className='text-center'>
                <Col xs='4'>
                  <span>Premium</span>
                </Col>
                <Col xs='4'>
                  <span>
                    $1,000<small style={{ fontSize: '12px' }}>/year</small>
                  </span>
                </Col>
                <Col xs='4'>
                  {/* <span>
                    $2,000<small style={{ fontSize: '12px' }}>/year</small>
                  </span> */}
                  <small>Coming soon!</small>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <div className='text-center mt-5'>
          <h3>See below for the full breakdown of service plans</h3>
          <br />
          <ChevronsDown size={48} />
          <br />
          <br />
          <br />
          {/* <ButtonGroup>
            <Button
              color={activeTab === 'regular' ? 'secondary' : 'light'}
              onClick={() => setActiveTab('regular')}
            >
              Regular
            </Button>
            <Button
              color={activeTab === 'clinical' ? 'secondary' : 'light'}
              onClick={() => setActiveTab('clinical')}
            >
              Clinical Trial
            </Button>
          </ButtonGroup> */}
        </div>
        <TabContent activeTab={activeTab} style={{ marginTop: '25px' }}>
          <TabPane tabId='regular'>
            <RegularFees />
          </TabPane>
          {/* <TabPane tabId='clinical'>
            <ClinicalTrialFees />
          </TabPane> */}
        </TabContent>
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
