import React, { Fragment } from 'react'
import Styled from 'styled-components'
import ReactModal from 'react-modal'
import Modal from 'react-modal'
import { XCircle } from 'react-feather'

Modal.setAppElement('body')

const ImageModal = props => {
  return (
    <Fragment>
      <ReactModal
        style={{
          overlay: { backgroundColor: 'rgba(33, 33, 33, 0.85)' },
          content: {
            maxWidth: 1500,
            width: '80%',
            margin: 'auto',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            border: 'none',
          },
        }}
        isOpen={props.visible}
        shouldCloseOnEsc={true}
        shouldReturnFocusAfterClose={true}
        closeTimeoutMS={200}
        onRequestClose={props.closeModal}
      >
        <XCircle
          size={40}
          onClick={props.closeModal}
          style={{ cursor: 'pointer', color: '#ffffff', float: 'right' }}
        />
        <Img alt='image' src={props.source} />
      </ReactModal>
    </Fragment>
  )
}

export default ImageModal

const Img = Styled.img`
    display: block;
    object-fit: contain;
    width: 100%;
    height: auto;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
`
