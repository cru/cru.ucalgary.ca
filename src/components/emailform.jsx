import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

import Input from './input'
import TextArea from './textarea'
import Button from './button'
import { navigate } from 'gatsby'

const EmailForm = ({ style }) => {
  const [recaptcha, setRecaptcha] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (recaptcha) {
      const form = document.getElementById('contact-form')
      const formData = new FormData(form)

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => navigate('/success'))
        .catch((error) => alert(error))
    }
  }

  return (
    <>
      <Form
        id='contact-form'
        name='contact'
        method='post'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        data-netlify-recaptcha='true'
        action='/success'
        style={style}
      >
        <input type='hidden' name='bot-field' />
        <input type='hidden' name='form-name' value='contact' />
        <Space />
        <Row>
          <h4>Email CRU</h4>
          <Input name='name' type='text' placeholder='name' />
        </Row>
        <Space />
        <Row>
          <Input name='email' type='email' placeholder='email' />
        </Row>
        <Space />
        <Row>
          <TextArea name='message' placeholder='message' />
        </Row>
        <ReCAPTCHA
          sitekey='6Ldh7CQaAAAAAGVMPllaGuTw5WOjrmY9puMSkrmy'
          onChange={() => setRecaptcha(true)}
        />
        <Space />

        <Row
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            marginRight: '0',
          }}
        >
          <Button
            onClick={handleSubmit}
            style={{
              fontSize: '15px',
            }}
          >
            Send
          </Button>
        </Row>
        <Space />
        <Space />
        <Space />
      </Form>
    </>
  )
}

EmailForm.propTypes = {
  style: PropTypes.object.isRequired,
}

export default EmailForm

const Form = Styled.form`
  display:Flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
  width: 100%;
  padding: ${(props) => props.theme.pageMobilePadding};
`
const Row = Styled.div`
  padding:13px;
  margin-right:13px;
  margin-left:0px;
  width:97.5%;
  max-width:600px;
  color: ${(props) => props.theme.fontPrimColor};
  font-size:15px;
`
const Space = Styled.div`
  height: 10px;
`
