import React, { Component } from "react"
import Styled from "styled-components"
// eslint-disable-next-line
import ScrollTrigger from "react-scroll-trigger"
import { Link } from "react-scroll"
import EmailForm from "./emailform"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class EmailFAB extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: true,
    }
  }

  render() {
    const onEnterViewport = () => {
      this.setState({
        toggle: false,
      })
    }

    const onExitViewport = () => {
      this.setState({
        toggle: true,
      })
    }

    return (
      <>
        <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
          <div
            style={{
              backgroundColor: "transparent",
              height: 600,
              marginBottom: "-800px",
            }}
          />
        </ScrollTrigger>
        <ButtonContainer toggle={this.state.toggle}>
          <Link
            to={this.state.toggle ? "form" : "none"}
            spy={true}
            smooth={true}
            offset={-50}
            duration={400}
          >
            <Button toggle={this.state.toggle}>
              <FontAwesomeIcon
                style={{ display: this.state.toggle ? "block" : "none" }}
                icon="envelope"
              />
              <Text style={{ display: this.state.toggle ? "block" : "none" }}>
                <span>&nbsp;&nbsp;</span>Email Us
              </Text>

              <EmailForm
                style={{ display: this.state.toggle ? "none" : "flex" }}
              />
            </Button>
          </Link>
        </ButtonContainer>
        <div id="form" />
        <PlaceHolderContainer
          style={{ display: this.state.toggle ? "block" : "none" }}
        />
      </>
    )
  }
}
export default EmailFAB

const PlaceHolderContainer = Styled.div`
    height:800px;
    width:100%;
    background-color:transparent;
`

const ButtonContainer = Styled.div`
    pointer-events: none;
    bottom: 0;
    width:100%;
    max-width: ${props => props.theme.pageMaxWidth};
    position: ${props => (props.toggle ? "fixed" : "static")};
    height: ${props => (props.toggle ? "auto" : "600px")};
`

const Button = Styled.div`
    pointer-events: auto;
    float:right;
    font-size:18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.fontPrimColor};
    transition: all 0.3s linear;      
    overflow:hidden;

    -webkit-user-select: ${props => (props.toggle ? "none" : "auto")};
    -moz-user-select: ${props => (props.toggle ? "none" : "auto")};
    -ms-user-select: ${props => (props.toggle ? "none" : "auto")};
    user-select: ${props => (props.toggle ? "none" : "auto")};

    cursor: ${props => (props.toggle ? "pointer" : "default")};
    margin-bottom: ${props => (props.toggle ? "30px" : "0")};
    margin-right: ${props => (props.toggle ? "17px" : "0")};
    height: ${props => (props.toggle ? "56px" : "600px")};
    width: ${props => (props.toggle ? "120px" : "100%")};
    border-radius: ${props => (props.toggle ? "50px" : "0%")};
    background-color:  ${props => props.theme.brandPrimColor};
    box-shadow:${props =>
      props.toggle ? props.theme.boxShadowAccent : "none"};

    :hover {
        box-shadow:  ${props =>
          props.toggle ? props.theme.boxShadow : "none"};
        background-color: ${props =>
          props.toggle ? props.theme.brandPrimAccent : "none"};
    }
    
    :active {
        box-shadow:none;
    }

`

const Text = Styled.p`
    font-size:16.5px;
    color:  ${props => props.theme.fontPrimColor};
`
