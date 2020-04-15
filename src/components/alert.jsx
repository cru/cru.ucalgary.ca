import React, { Fragment, useState } from 'react'
import Styled from 'styled-components'
import ReactModal from 'react-modal'
import Modal from 'react-modal'
import { AlertTriangle, XCircle } from 'react-feather'

Modal.setAppElement('body')

const Alert = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <Fragment>
      <AlertHeader onClick={openModal}>
        <AlertTriangle
          size={40}
        />
        <span style={{textAlign: 'center'}}><h4 >COVID-19 UPDATE</h4>Click here for more info</span>
      </AlertHeader>
      <ReactModal
        style={{
          overlay: { backgroundColor: 'rgba(33, 33, 33, 0.85)' },
          content: {
            maxWidth: 1100,
            maxHeight: 650,
            width: '70%',
            margin: 'auto',
          },
        }}
        isOpen={showModal}
        shouldCloseOnEsc={true}
        shouldReturnFocusAfterClose={true}
        closeTimeoutMS={200}
        onRequestClose={closeModal}
      >
        <XCircle
          size={32}
          onClick={closeModal}
          style={{ cursor: 'pointer', float: 'right' }}
        />
        <h2 style={{ display: 'inline' }}>COVID-19 Message</h2>
        <AlertMessage>
          <p>Dear Researcher,</p>
          <p>We are OPEN for business and adjusting to the current conditions of COVID-19.</p>
          <p>Amidst all of the uncertainties, we want to communicate how the CRU can support your needs during this time, and manage expectations accordingly.</p>
          <p><u>We continue to offer support services in the areas outlined below, as well as other areas. Please reach out to the suggested contact so we can provide the necessary support.</u></p>
          <br/>
          <table>
            <tr>
              <th>PROJECT TYPE</th>
              <th>CONTACT FOR SERVICES</th>
            </tr>
            <tr>
              <td>General Inquiry</td>
              <td>cru@ucalgary.ca (CRU Service/ Helpdesk)</td>
            </tr>
            <tr>
              <td>REDCap Projects - Self Serve</td>
              <td>cru@ucalgary.ca (CRU Service/ Helpdesk)</td>
            </tr>
            <tr>
              <td>REDCap Projects - CRU Supported</td>
              <td>cru@ucalgary.ca (CRU Service/ Helpdesk)</td>
            </tr>
            <tr>
              <td>Clinical Trials</td>
              <td>ashley.ure@ucalgary.ca (Manager, Project Services)</td>
            </tr>
            <tr>
              <td>Custom Projects</td>
              <td>ashley.ure@ucalgary.ca (Manager, Project Services)</td>
            </tr>
            <tr>
              <td>Methods and Analytics</td>
              <td>ashley.ure@ucalgary.ca (Manager, Project Services)</td>
            </tr>
            <tr>
              <td>Project Management Services</td>
              <td>ashley.ure@ucalgary.ca (Manager, Project Services)</td>
            </tr>
          </table>
          <br/>
          <p>In line with public health recommendations to socially isolate, our team is working remotely and will hold all meetings via teleconference or ZOOM.</p>
          <p>Our entire team remains committed to serving your projects. We are priority managing and pivoting daily based on need, and we appreciate your patience in advance.</p>
          <p>If you have any questions or concerns on current projects, please reach out to your Project Manager directly. As mentioned above, if you have new project requests, please reach out to the appropriate contacts and we will align you with the appropriate team to support your needs.</p>
          <p>We are in this together.</p>
          <p>Lori</p>
          <i>
            Lori Campbell<br/>
            Director of Operations, Clinical Research Unit<br/>
            Cumming School of Medicine, University of Calgary<br/>
          </i>
        </AlertMessage>
      </ReactModal>
    </Fragment>
  )
}

export default Alert


const AlertHeader = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 1rem;
    padding: 1rem;
    width: 50%;
    color: #EF6C00;
    cursor: pointer;
    box-shadow: ${props => props.theme.boxShadow};

    h4{
      margin: 0;
      margin-left: 1rem;
      color: #EF6C00;
    }
`
const AlertMessage = Styled.div`
  p{
    font-family: futura-pt, sans-serif;
    font-size: 19px;
  }
`