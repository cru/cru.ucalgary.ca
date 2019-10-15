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
        <Space />
        <Row>
          <h3>Email CRU</h3>
          <label htmlFor="name">
            Name
            <Space />
            <Input id="name" />
          </label>
        </Row>
        <Row>
          <label htmlFor="email">
            Email
            <Space />
            <Input id="email" />
          </label>
        </Row>
        <Row>
          <label htmlFor="message">
            Message
            <Space />
            <TextArea id="message" />
          </label>
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
  max-width:650px;
  color: ${props => props.theme.fontPrimColor};
  font-size:15px;
`
const Space = Styled.div`
  height: 10px;
`
