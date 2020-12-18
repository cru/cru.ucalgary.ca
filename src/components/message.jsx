import React, { Fragment } from 'react'
import Styled from 'styled-components'


const Message = () => {
  return (
    <Fragment>
      <h4 style={{ textAlign: 'center' }}>{`${'\u{1F384}'} Holiday Message ${'\u{1F384}'}`}</h4>
      <MessageBody>
        <p>Dear partners and researchers,</p>
        <p>The University of Calgary and Clinical Research Unit are closed from December 23rd, 2020 to January 3rd, 2021 (inclusive). We will be regularly monitoring our service desks and support email accounts for any urgent issues. We will aim to resolve issues in 2-3 business days and appreciate your patience over the holiday period.</p>
        <p>On behalf of the entire CRU team, we wish you and your loved ones a safe and joyous holiday season.</p>
        <p>- The Clinical Research Unit</p>
      </MessageBody>
    </Fragment>
  )
}

export default Message


const MessageBody = Styled.div`
    margin: auto;
    margin-top: 1rem;
    width: 80%;
    max-width: 900px;

    p{
      font-family: futura-pt, sans-serif;
      font-size: 19px;
    }
`
