import React, { Component } from "react"
import Styled from "styled-components"
import Input from "./input"
import TextArea from "./textarea"
import Button from "./button"

class EmailForm extends Component {
  render() {
    const label = name => {
      return (
        <>
          <label>
            {name}
            <label style={{ color: "red" }}>*</label>
          </label>
        </>
      )
    }
    const { style } = this.props
    return (
      <>
        <Form style={style}>
          <Row>
            <h2>Get in Touch</h2>
            <br />
            {label("Name")}
            <Space />
            <Input placeholder="John Doe" />
          </Row>
          <Row>
            {label("Email")}
            <Space />
            <Input placeholder="contact@example.com" />
          </Row>
          <Row>
            {label("Message")}
            <Space />
            <TextArea />
          </Row>
          <Row
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              marginRight: "0",
            }}
          >
            <Button>Send</Button>
          </Row>
        </Form>
      </>
    )
  }
}

export default EmailForm

const Form = Styled.form`
  display:Flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
  padding:30px;
  width: 100vw;
`
const Row = Styled.div`
  padding:13px;
  margin-right:13px;
  margin-left:0px;

  width:100%;
  max-width:600px;
  color:black;
  font-size:15px;
`
const Space = Styled.div`
  height: 5px;
`
