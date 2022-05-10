import React from 'react'
import { Row, Col } from 'reactstrap'

import Layout from '../../containers/layout'
import Padding from '../../containers/padding'
import CruFragment from '../../components/crufragment'
import RegularREDCapFees from '../../components/fees/regularRedcapFees'
import ValidatedREDCapFees from '../../components/fees/validatedRedcapFees'

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
          <h3>
            Interested in{' '}
            <a
              href='#'
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
        <h3>Pricing</h3>
        <p>
          All REDCap projects pay <b>platform maintenance fees</b> to help us cost recover
          the overhead to maintain our REDCap system.{' '}
          <b>CRU development and setup support fees</b> for supported projects are
          determined on a project-by-project basis.
        </p>
        <h4>Platform maintenance fees</h4>
        <div className='fee-banner secondary-background'>
          <h2 style={{ color: '#fff' }}>Regular REDCap</h2>
          <Row>
            <Col sm={{ size: 10, offset: 1 }}>
              <div className='section-float' style={{ marginTop: '75px' }}>
                <Row className='text-center'>
                  <Col sm='6'>
                    <h3>Basic</h3>
                  </Col>
                  <Col sm='6'>
                    <h3>
                      $300<small style={{ fontSize: '18px' }}>/year</small>
                    </h3>
                  </Col>
                </Row>
                <hr className='secondary-background' />
                <Row className='text-center'>
                  <Col sm='6'>
                    <h3>Plus</h3>
                  </Col>
                  <Col sm='6'>
                    <h3>
                      $650<small style={{ fontSize: '18px' }}>/year</small>
                    </h3>
                  </Col>
                </Row>
                <hr className='secondary-background' />
                <Row className='text-center'>
                  <Col sm='6'>
                    <h3>Premium</h3>
                  </Col>
                  <Col sm='6'>
                    <h3>
                      $1,000<small style={{ fontSize: '18px' }}>/year</small>
                    </h3>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: '250px' }}>
          <RegularREDCapFees />
        </div>

        <div className='fee-banner' style={{ marginTop: '150px' }}>
          <h2 style={{ color: '#fff' }}>Validated REDCap</h2>
          <Row>
            <Col sm={{ size: 10, offset: 1 }}>
              <div className='section-float' style={{ marginTop: '75px' }}>
                <Row className='text-center'>
                  <Col sm='6'>
                    <h3>Basic</h3>
                  </Col>
                  <Col sm='6'>
                    <h3>
                      $1,000<small style={{ fontSize: '18px' }}>/year</small>
                    </h3>
                  </Col>
                </Row>
                <hr />
                <Row className='text-center'>
                  <Col sm='6'>
                    <h3>Plus</h3>
                  </Col>
                  <Col sm='6'>
                    <h3>
                      $1,500<small style={{ fontSize: '18px' }}>/year</small>
                    </h3>
                  </Col>
                </Row>
                <hr />
                <Row className='text-center'>
                  <Col sm='6'>
                    <h3>Premium</h3>
                  </Col>
                  <Col sm='6'>
                    <h3>
                      $2,000<small style={{ fontSize: '18px' }}>/year</small>
                    </h3>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ marginTop: '250px' }}>
          <ValidatedREDCapFees />
        </div>
      </Padding>

      <div style={{ height: '100px' }} />
      <CruFragment />
      <div style={{ height: '100px' }} />
    </Layout>
  )
}

export default EDCServicesPage
