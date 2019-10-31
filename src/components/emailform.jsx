import React from 'react'

import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Input from './input'
import TextArea from './textarea'
import Button from './button'

const EmailForm = ({ style }) => {
  return (
    <>
      <Form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
        style={style}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <Space />
        <h4>Email CRU</h4>
        <Row>
          <Input name="name" type="text" placeholder="name" />
        </Row>
        <Space />
        <Row>
          <Input name="email" type="email" placeholder="email" />
        </Row>
        <Space />
        <Row>
          <TextArea name="message" placeholder="Message" />
        </Row>
        <Space />

        <Row
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            marginRight: '0',
          }}
        >
          <Button
            type="submit"
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
  style: PropTypes.node.isRequired,
}

export default EmailForm

const Form = Styled.form`
  display:Flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
  width: 100%;
  padding: ${props => props.theme.pageMobilePadding};
`
const Row = Styled.div`
  padding:13px;
  margin-right:13px;
  margin-left:0px;
  width:97.5%;
  max-width:600px;
  color: ${props => props.theme.fontPrimColor};
  font-size:15px;
`
const Space = Styled.div`
  height: 10px;
`
