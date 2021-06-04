import React, { Fragment } from 'react'
import Styled from 'styled-components'

const Message = () => {
  return (
    <Fragment>
      <h4 style={{ textAlign: 'center' }}>{`Availability Message`}</h4>
      <MessageBody>
        <p>Dear partners and researchers,</p>
        <p>
          Please be advised that from <b>June 14th - 25th</b> (inclusive) the CRU will be
          undertaking a team wide organizational initiative that will result in{' '}
          <b>limited availability</b> to respond to non-urgent requests and emails during
          this time. Urgent requests will continue to be addressed. If you have an URGENT
          request, please indicate “URGENT” in the subject line of your request. Timelines
          for response or resolution may be up to 8 business days, subject to team
          availability.
        </p>
        <p>
          If possible, please send any project and/or support requests as soon as possible
          to allow us to minimize the effect of this period of limited availability. Thank
          you in advance for your understanding.
        </p>
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
