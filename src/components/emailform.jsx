import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Input from './input'
import TextArea from './textarea'
import Button from './button'

const EmailForm = ({ style }) => {
  return (
    <>
      <Form style={style}>
        <Row>
          <h2>Get in Touch</h2>
          <br />
          <label htmlFor="name">
            name
            <Space />
            <Input id="name" />
          </label>
        </Row>
        <Row>
          <label htmlFor="email">
            email
            <Space />
            <Input id="email" />
          </label>
        </Row>
        <Row>
          <label htmlFor="message">
            message
            <Space />
            <TextArea id="message" />
          </label>
        </Row>
        <Row
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            marginRight: '0',
          }}
        >
          <Button style={{ border: '1px solid black' }}>Send</Button>
        </Row>
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
  width: 100vw;
  padding: ${props => props.theme.pageMobilePadding};
  h2 {
    font-size:25px;
  }
`
const Row = Styled.div`
  padding:13px;
  margin-right:13px;
  margin-left:0px;
  width:97.5%;
  max-width:650px;
  color: ${props => props.theme.fontPrimColor};
  font-size:15px;
`
const Space = Styled.div`
  height: 5px;
`
