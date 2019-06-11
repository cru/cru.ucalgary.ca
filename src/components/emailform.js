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
            <label style={{ color: "black" }} />
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
            <Input />
          </Row>
          <Row>
            {label("Email")}
            <Space />
            <Input />
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
            <Button style={{ border: "1px solid black" }}>Send</Button>
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
