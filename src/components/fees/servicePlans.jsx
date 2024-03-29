import React, { Fragment, useState } from 'react'
import Styled from 'styled-components'
import { Check, X } from 'react-feather'
import { Row, Col, Popover, PopoverBody } from 'reactstrap'

const ServicePlans = () => {
  const [showHint, setShowHint] = useState('')

  return (
    <Fragment>
      <div className='fee-hero secondary-background'>
        <h2 style={{ color: '#fff' }}>EDC Service Plans</h2>
        <Row>
          <Col sm={{ size: 10, offset: 1 }}>
            <div className='section-double floating' style={{ marginTop: '25px' }}>
              <Row className='text-center'>
                <Col sm='6'>
                  <h3>Basic</h3>
                </Col>
                <Col sm='6'>
                  <h3>
                    $350<small style={{ fontSize: '18px' }}>/year</small>
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
              <hr className='secondary-background' />
              <Row className='text-center'>
                <Col sm='6'>
                  <h3>CCTT</h3>
                </Col>
                <Col sm='6'>
                  <h3>
                    $2,200<small style={{ fontSize: '18px' }}>/year</small>
                  </h3>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      <FeeContainer>
        <Table>
          <tr>
            <th>Service</th>
            <th>
              Basic
              <br />
              <span className='text-muted'>
                $350<SubText>/year</SubText>
              </span>
            </th>
            <th>
              Plus
              <br />
              <span className='text-muted'>
                $650<SubText>/year</SubText>
              </span>
            </th>
            <th>
              Premium
              <br />
              <span className='text-muted'>
                $1,000<SubText>/year</SubText>
              </span>
            </th>
            <th>
              CCTT
              <br />
              <span className='text-muted'>
                $2,200<SubText>/year</SubText>
              </span>
            </th>
          </tr>
          <tr>
            <td
              id='standardSupport'
              onMouseEnter={() => setShowHint('standardSupport')}
              onMouseLeave={() => setShowHint('')}
            >
              Standard support
            </td>
            <td>
              <Check color='#47a67c' />
            </td>
            <td>
              <Check color='#47a67c' />
            </td>
            <td>
              <Check color='#47a67c' />
            </td>
            <td>
              <Check color='#47a67c' />
            </td>
          </tr>
          <tr>
            <td
              id='backups'
              onMouseEnter={() => setShowHint('backups')}
              onMouseLeave={() => setShowHint('')}
            >
              Daily backups
            </td>
            <td>
              <Check color='#47a67c' />
            </td>
            <td>
              <Check color='#47a67c' />
            </td>
            <td>
              <Check color='#47a67c' />
            </td>
            <td>
              <Check color='#47a67c' />
            </td>
          </tr>
          <tr>
            <td
              id='maintenance'
              onMouseEnter={() => setShowHint('maintenance')}
              onMouseLeave={() => setShowHint('')}
            >
              System maintenance
            </td>
            <td>
              <Check color='#47a67c' />
            </td>
            <td>
              <Check color='#47a67c' />
            </td>
            <td>
              <Check color='#47a67c' />
            </td>
            <td>
              <Check color='#47a67c' />
            </td>
          </tr>
          <tr>
            <td
              id='updates'
              onMouseEnter={() => setShowHint('updates')}
              onMouseLeave={() => setShowHint('')}
            >
              Regular platform updates
            </td>
            <td>
              <Check color='#47a67c' />
            </td>
            <td>
              <Check color='#47a67c' />
            </td>
            <td>
              <Check color='#47a67c' />
            </td>
            <td>
              <Check color='#47a67c' />
            </td>
          </tr>
          <tr>
            <td
              id='manager'
              onMouseEnter={() => setShowHint('manager')}
              onMouseLeave={() => setShowHint('')}
            >
              Dedicated CRU project manager
            </td>
            <td>
              <X />
            </td>
            <td>
              <Check color='#47a67c' />
            </td>
            <td>
              <Check color='#47a67c' />
            </td>
            <td>
              <Check color='#47a67c' />
            </td>
          </tr>
          <tr>
            <td
              id='audit'
              onMouseEnter={() => setShowHint('audit')}
              onMouseLeave={() => setShowHint('')}
            >
              Guaranteed response times for audit support
            </td>
            <td>
              <X />
            </td>
            <td>
              <X />
            </td>
            <td>
              <X />
            </td>
            <td>
              <Check color='#47a67c' />
            </td>
          </tr>
          <tr>
            <td
              id='transferGuidance'
              onMouseEnter={() => setShowHint('transferGuidance')}
              onMouseLeave={() => setShowHint('')}
            >
              Data transfer guidance
            </td>
            <td>
              <X />
            </td>
            <td>
              <X />
            </td>
            <td>
              <X />
            </td>
            <td>
              <Check color='#47a67c' />
            </td>
          </tr>
          <tr>
            <td
              id='ccaddon'
              onMouseEnter={() => setShowHint('ccaddon')}
              onMouseLeave={() => setShowHint('')}
            >
              Clinical Trial add-on
            </td>
            <td>
              +$500 <SubText>/year</SubText>
            </td>
            <td>
              +$500 <SubText>/year</SubText>
            </td>
            <td>
              +$500 <SubText>/year</SubText>
            </td>
            <td>
              <Check color='#47a67c' />
            </td>
          </tr>
          <tr>
            <td
              id='registryaddon'
              onMouseEnter={() => setShowHint('registryaddon')}
              onMouseLeave={() => setShowHint('')}
            >
              Registry add-on
            </td>
            <td>
              +$500 <SubText>/year</SubText>
            </td>
            <td>
              +$500 <SubText>/year</SubText>
            </td>
            <td>
              +$500 <SubText>/year</SubText>
            </td>
            <td>
              <Check color='#47a67c' />
            </td>
          </tr>
          <tr>
            <td
              id='advancedSupport'
              onMouseEnter={() => setShowHint('advancedSupport')}
              onMouseLeave={() => setShowHint('')}
            >
              Advanced support
            </td>
            <td>
              Up to <b>2</b> <SubText>hours/year</SubText>
            </td>
            <td>
              Up to <b>5</b> <SubText>hours/year</SubText>
            </td>
            <td>
              Up to <b>10</b> <SubText>hours/year</SubText>
            </td>
            <td>
              Up to <b>10</b> <SubText>hours/year</SubText>
            </td>
          </tr>
          <tr>
            <td
              id='additionalSupport'
              onMouseEnter={() => setShowHint('additionalSupport')}
              onMouseLeave={() => setShowHint('')}
            >
              Additional support
            </td>
            <td>
              $150 <SubText>/hour</SubText>
            </td>
            <td>
              $150 <SubText>/hour</SubText>
            </td>
            <td>
              $150 <SubText>/hour</SubText>
            </td>
            <td>
              $150 <SubText>/hour</SubText>
            </td>
          </tr>
          <tr>
            <td
              id='response'
              onMouseEnter={() => setShowHint('response')}
              onMouseLeave={() => setShowHint('')}
            >
              Response times
            </td>
            <td>
              Basic
              <br />
              <SubText className='text-muted'>first come, first serve</SubText>
            </td>
            <td>
              Intermediate
              <br />
              <SubText className='text-muted'>within 2-3 business days</SubText>
            </td>
            <td>
              Priority
              <br />
              <SubText className='text-muted'>within 1 business day</SubText>
            </td>
            <td>
              Priority
              <br />
              <SubText className='text-muted'>within 1 business day</SubText>
            </td>
          </tr>
          <tr className='secondary'>
            <td
              id='discount'
              onMouseEnter={() => setShowHint('discount')}
              onMouseLeave={() => setShowHint('')}
            >
              Loyalty discount
            </td>
            <td>
              <b>15%</b>
              <br />
              <SubText className='text-muted'>3+ REDCap projects</SubText>
            </td>
            <td>
              <b>15%</b>
              <br />
              <SubText className='text-muted'>3+ REDCap projects</SubText>
            </td>
            <td>
              <b>15%</b>
              <br />
              <SubText className='text-muted'>3+ REDCap projects</SubText>
            </td>
            <td>
              <b>15%</b>
              <br />
              <SubText className='text-muted'>3+ REDCap projects</SubText>
            </td>
          </tr>
        </Table>
      </FeeContainer>
      <Popover target='standardSupport' isOpen={showHint === 'standardSupport'}>
        <PopoverBody style={{ fontSize: '14px' }}>
          Standard support services include:
          <ul>
            <li>Account creation/re-activation</li>
            <li>Password resets</li>
            <li>Project permission changes</li>
            <li>Issuing of API tokens</li>
          </ul>
        </PopoverBody>
      </Popover>
      <Popover target='backups' isOpen={showHint === 'backups'}>
        <PopoverBody style={{ fontSize: '14px' }}>
          REDCap data is backed up daily to <b>minimize data loss</b> in the unlikely case
          of system interruptions.
        </PopoverBody>
      </Popover>
      <Popover target='maintenance' isOpen={showHint === 'maintenance'}>
        <PopoverBody style={{ fontSize: '14px' }}>
          Ongoing system maintenance includes infrastructure design, monitoring, patching,
          and security reviews.
          <br />
          The CRU also supports supplementary services, like <b>Twilio</b> to make voice
          calls and send SMS text messages for surveys and Alerts and Notifications.
        </PopoverBody>
      </Popover>
      <Popover target='updates' isOpen={showHint === 'updates'}>
        <PopoverBody style={{ fontSize: '14px' }}>
          Platform updates ensure newer modern REDCap features are available to UCalgary
          researchers.
        </PopoverBody>
      </Popover>
      <Popover target='manager' isOpen={showHint === 'manager'}>
        <PopoverBody style={{ fontSize: '14px' }}>
          Your project needs will be serviced by a dedicated point of contact who better
          understands your project and how it functions.
        </PopoverBody>
      </Popover>
      <Popover target='ccaddon' isOpen={showHint === 'ccaddon'}>
        <PopoverBody style={{ fontSize: '14px' }}>
          Clinical trials that do not require the same rigour as regulated trials, but
          benefit from enhanced support. <br />
          Includes:
          <ul>
            <li>
              Reports describing the validation of REDCap and platform security measures{' '}
            </li>
            <li>
              Best practice guidance documents to empower the research team, including for
              project-level validation, project security, and maintaining data integrity
            </li>
            <li>
              Training support for REDCap, including a training course and user manual{' '}
            </li>
            <li>Discounted access to our DataXplor tools!</li>
            <li>And much more! Contact us for more information.</li>
          </ul>
        </PopoverBody>
      </Popover>
      <Popover target='registryaddon' isOpen={showHint === 'registryaddon'}>
        <PopoverBody style={{ fontSize: '14px' }}>
          Registries often store identifiable health data over extended periods of time.
          The Registry Add-On provides enhanced privacy and security measures and extra
          storage for large participant populations. <br />
          Includes:
          <ul>
            <li>
              Reports describing the validation of REDCap and platform security measures{' '}
            </li>
            <li>
              Best practice guidance documents to empower the research team, including for
              project-level validation, project security, and maintaining data integrity
            </li>
            <li>
              Training support for REDCap, including a training course and user manual{' '}
            </li>
            <li>Discounted access to our DataXplor tools!</li>
            <li>And much more! Contact us for more information.</li>
          </ul>
        </PopoverBody>
      </Popover>
      <Popover target='advancedSupport' isOpen={showHint === 'advancedSupport'}>
        <PopoverBody style={{ fontSize: '14px' }}>
          “Advanced support” encapsulates all specialized support requests. <br />
          Includes:
          <ul>
            <li>Consultation on how to implement a specific feature or module</li>
            <li>
              Consultation on overall project setup and design (e.g., instruments, arms)
            </li>
            <li>Writing custom branching logic for a specific project</li>
            <li>Exploring REDCap’s capabilities to meet a specific workflow need</li>
            <li>Configuring and setting up an eConsent module</li>
            <li>Letters of support for grant applications</li>
            <li>And much more! Contact us for more information.</li>
          </ul>
        </PopoverBody>
      </Popover>
      <Popover target='additionalSupport' isOpen={showHint === 'additionalSupport'}>
        <PopoverBody style={{ fontSize: '14px' }}>
          Additional support beyond the included allocation is available on an hourly
          basis.
        </PopoverBody>
      </Popover>
      <Popover target='response' isOpen={showHint === 'response'}>
        <PopoverBody style={{ fontSize: '14px' }}>
          Service level indicates time for a CRU team member to acknowledge your request
          and action it with the relevant team member. <br />
          Support requests from Premium tier projects will take priority for resolution,
          followed by Intermediate then Basic. We do our best to resolve all requests in a
          timely manner.
        </PopoverBody>
      </Popover>
      <Popover target='discount' isOpen={showHint === 'discount'}>
        <PopoverBody style={{ fontSize: '14px' }}>
          For researchers with 3 or more REDCap projects, a 15% discount is applied to
          your total platform maintenance fees!
        </PopoverBody>
      </Popover>
    </Fragment>
  )
}
export default ServicePlans

const Table = Styled.div`
  border: none;
  border-collapse: collapse;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  th,
  td {
      width: 200px;
      font-size: 14px;
      padding: 15px;
      text-align: center;
      border: none;
      border-collapse: collapse;
  }

  td+td {
      border-left: 1px solid ${(props) => props.theme.brandSecondColor};
  }
`
const SubText = Styled.small`
  font-size: 12px;
`

const FeeContainer = Styled.div`
  margin-top: 300px;
  overflow-x: auto;

  @media only screen and (max-width: ${(props) => props.theme.mobileBreakPoint}){
    margin-top: 400px;
}
`
