import React, { Fragment, useState, useEffect } from 'react'
import Styled from 'styled-components'
import ReactModal from 'react-modal'
import Modal from 'react-modal'
import { AlertTriangle, XCircle } from 'react-feather'
import moment from 'moment'

Modal.setAppElement('body')

const Alert = () => {
  const [showModal, setShowModal] = useState(false)
  const [showSeasonalMessage, setShowSeasonalMessage] = useState(false)

  useEffect(() => {
    const startDate = moment('2021-12-15')
    const endDate = moment('2022-01-04')

    setShowSeasonalMessage(moment().isBetween(startDate, endDate, 'days'))
  }, [])

  return (
    <Fragment>
      <AlertHeader onClick={() => setShowModal(true)}>
        {showSeasonalMessage ? (
          <Fragment>
            <span style={{ fontSize: 32 }}>{'\u{1F384}'}</span>
            <div style={{ textAlign: 'center' }}>
              <h5>Seasonal Closure 2021</h5>
              <small>Click here for more info</small>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <AlertTriangle size={32} />
            <div style={{ textAlign: 'center' }}>
              <h5>COVID-19 NOTICE</h5>
              <small>Click here for more info</small>
            </div>
          </Fragment>
        )}
      </AlertHeader>
      <ReactModal
        style={{
          overlay: { backgroundColor: 'rgba(33, 33, 33, 0.85)' },
          content: {
            maxWidth: 1000,
            maxHeight: 550,
            width: '80%',
            height: 'auto',
            margin: 'auto',
          },
        }}
        isOpen={showModal}
        shouldCloseOnEsc={true}
        shouldReturnFocusAfterClose={true}
        closeTimeoutMS={200}
        onRequestClose={() => setShowModal(false)}
      >
        <XCircle
          size={32}
          onClick={() => setShowModal(false)}
          style={{ cursor: 'pointer', float: 'right' }}
        />
        {showSeasonalMessage ? (
          <Fragment>
            <h2 style={{ display: 'inline' }}>Seasonal Closure 2021</h2>
            <AlertMessage>
              <p>Dear researchers and collaborators,</p>
              <p>
                The University of Calgary and CRU will be closed December 23rd, 2021 to
                January 2nd, 2022 (inclusive). After a year that has at times felt
                isolating, we hope you also take some time to rest, recharge, and spend
                time with loved ones. We look forward to continuing our work together in
                the new year.{' '}
              </p>
              <p>
                If you require <b>urgent</b> support during this time, please email us at
                cru@ucalgary.ca with <b>"URGENT"</b> in the subject line. Our team will be
                monitoring sporadically for time-sensitive requests and response times may
                take up to 5 business days. Thank you in advance for your patience and
                understanding.
              </p>
              <p>Happy holidays! </p>
              <p>Tracy</p>
              <i>
                Tracy Wang
                <br />
                Director, Clinical Research Unit
                <br />
                Cumming School of Medicine, University of Calgary
                <br />
              </i>
            </AlertMessage>
          </Fragment>
        ) : (
          <Fragment>
            <h2 style={{ display: 'inline' }}>COVID-19 Notice</h2>
            <AlertMessage>
              <p>
                {' '}
                The CRU is working remotely. If you are looking for support, please reach
                out to your designated Project Manager directly, via our service desk, or
                email at cru@ucalgary.ca. Thank you for your understanding.
              </p>
              <p>Tracy</p>
              <i>
                Tracy Wang
                <br />
                Director, Clinical Research Unit
                <br />
                Cumming School of Medicine, University of Calgary
                <br />
              </i>
            </AlertMessage>
          </Fragment>
        )}
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
    padding: 0.5rem;    
    color: #EF6C00;
    cursor: pointer;

    h5 {
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

  table{
    width: 95%;
  }
`
