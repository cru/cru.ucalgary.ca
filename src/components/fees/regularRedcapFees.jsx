import React, { Fragment } from 'react'
import Styled from 'styled-components'
import { Check, X } from 'react-feather'
import { Row, Col } from 'reactstrap'

const RegularREDCapFees = () => {
  return (
    <Fragment>
      <div className='fee-banner secondary-background'>
        <h2 style={{ color: '#fff' }}>Regular REDCap</h2>
        <Row>
          <Col sm={{ size: 10, offset: 1 }}>
            <div className='section-double floating' style={{ marginTop: '75px' }}>
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
      <Table style={{ marginTop: '250px' }}>
        <tr>
          <th>Service</th>
          <th>
            Basic
            <br />
            <span className='text-muted'>
              $300<SubText>/year</SubText>
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
        </tr>
        <tr>
          <td>Standard support</td>
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
          <td>Advanced support</td>
          <td>
            Up to <b>2</b> <SubText>hours/year</SubText>
          </td>
          <td>
            Up to <b>5</b> <SubText>hours/year</SubText>
          </td>
          <td>
            Up to <b>10</b> <SubText>hours/year</SubText>
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
        <tr className='secondary'>
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
    </Fragment>
  )
}
export default RegularREDCapFees

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
      border-left: 1px solid ${(props) => props.theme.brandSecondColor};
  }
`
const SubText = Styled.small`
  font-size: 12px;
`
