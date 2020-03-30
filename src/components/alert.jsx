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
          <p>To our collaborators and clients,</p>
          <p>In light of COVID-19, I wanted to reach out to continue to be transparent in our communication and keep you updated on recent developments. The safety of both our team and you – our clients – is paramount. We are also committed to ensuring that we continue to provide the services that support your projects.</p>
          <p>In line with public health recommendations to socially isolate and especially because many of our clients are physicians/clinicians who work closely with affected or vulnerable populations, our team will be working remotely starting Monday March 16th. This primarily means that meetings will be held via phone or teleconference and no team members will be working on-site. While we have made the necessary arrangements to support this, there may be disruptions or delays to our normal functioning and we appreciate your patience as we work through this together.</p>
          <p>We will continue to carefully monitor the situation and ensure we have the right plans and resources in place as things evolve. As we are part of the University of Calgary community, we would be impacted by operational decisions made at the university level. Should there be updates, we will send notice to our research collaborators so that you can communicate and prepare accordingly (e.g., for critical or time-sensitive studies). </p>
          <p>We are taking these measures in our collective best interests. Our entire team remains committed to serving our projects. If you have any questions or concerns, please reach out to your project manager. </p>
          <p>Thank you for your continued support,</p>
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