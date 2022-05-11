import React, { Fragment, useState } from 'react'
import Styled from 'styled-components'
import { Check, X } from 'react-feather'
import { Row, Col, Popover, PopoverBody } from 'reactstrap'

const ValidatedREDCapFees = () => {
  const [showStandardHint, setShowStandardHint] = useState(false)
  const [showAdvancedHint, setShowAdvancedHint] = useState(false)

  return (
    <Fragment>
      <div className='fee-hero'>
        <h2 style={{ color: '#fff' }}>Validated REDCap</h2>
        <Row>
          <Col sm={{ size: 10, offset: 1 }}>
            <div className='section-double floating' style={{ marginTop: '75px' }}>
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
      <Table style={{ marginTop: '225px' }}>
        <tr>
          <th>Service</th>
          <th>
            Basic
            <br />
            <span className='text-muted'>
              $1,000<SubText>/year</SubText>
            </span>
          </th>
          <th>
            Plus
            <br />
            <span className='text-muted'>
              $1,500<SubText>/year</SubText>
            </span>
          </th>
          <th>
            Premium
            <br />
            <span className='text-muted'>
              $2,000<SubText>/year</SubText>
            </span>
          </th>
        </tr>
        <tr className='primary'>
          <td>Validation documents</td>
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
            id='valstandardSupport'
            onMouseEnter={() => setShowStandardHint(true)}
            onMouseLeave={() => setShowStandardHint(false)}
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
        </tr>
        <tr>
          <td>Daily backups</td>
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
          <td>System maintenance</td>
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
          <td>Regular platform updates</td>
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
          <td>Dedicated CRU project manager</td>
          <td>
            <X />
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
            id='valadvancedSupport'
            onMouseEnter={() => setShowAdvancedHint(true)}
            onMouseLeave={() => setShowAdvancedHint(false)}
          >
            Advanced support
          </td>
          <td>
            Up to <b>3</b> <SubText>hours/year</SubText>
          </td>
          <td>
            Up to <b>5</b> <SubText>hours/year</SubText>
          </td>
          <td>
            Up to <b>7</b> <SubText>hours/year</SubText>
          </td>
        </tr>
        <tr>
          <td>Response times</td>
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
        </tr>
        <tr className='primary'>
          <td>Loyalty discount</td>
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
      <Popover target='valstandardSupport' isOpen={showStandardHint}>
        <PopoverBody>
          <ul>
            <li>Account creation/re-activation</li>
            <li>Password resets</li>
            <li>Permission changes</li>
            <li>API tokens</li>
          </ul>
        </PopoverBody>
      </Popover>
      <Popover target='valadvancedSupport' isOpen={showAdvancedHint}>
        <PopoverBody>
          <ul>
            <li>Consultation on how to implement a specific feature or module</li>
            <li>
              Consultation on overall project setup and design (e.g., instruments, arms)
            </li>
            <li>Writing custom branching logic for a specific project</li>
            <li>Exploring REDCap’s capabilities to meet a specific workflow need</li>
            <li>Letters of support for grant applications</li>
            <li>And much more! Contact us for more information.</li>
          </ul>
        </PopoverBody>
      </Popover>
    </Fragment>
  )
}
export default ValidatedREDCapFees

const Table = Styled.div`
  border: none;
  border-collapse: collapse;
  width: 700px;
  margin-left: auto;
  margin-right: auto;

  th,
  td {
      width: 200px;
      padding: 15px;
      text-align: center;
      border: none;
      border-collapse: collapse;
  }

  td+td {
      border-left: 1px solid ${(props) => props.theme.brandPrimColor};
  }
`
const SubText = Styled.small`
  font-size: 12px;
`
