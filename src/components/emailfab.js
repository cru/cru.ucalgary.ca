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
          <ButtonContainer toggle={this.state.toggle}>
            <Link
              to={this.state.toggle && "form"}
              spy={true}
              smooth={true}
              offset={-150}
              duration={400}
            >
              <Button toggle={this.state.toggle}>
                <FontAwesomeIcon
                  style={{ display: this.state.toggle ? "block" : "none" }}
                  icon="envelope"
                />
                <EmailForm
                  style={{ display: this.state.toggle ? "none" : "flex" }}
                />
              </Button>
            </Link>
          </ButtonContainer>
          <div id="form" />
        </ScrollTrigger>
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
    bottom: 0;
    width:100%;
    max-width: ${props => props.theme.pageMaxWidth};
    position: ${props => (props.toggle ? "fixed" : "static")};
    height: ${props => (props.toggle ? "auto" : "400px")};
`

const Button = Styled.div`
    float:right;

    cursor: ${props => (props.toggle ? "pointer" : "default")};
    margin: ${props => (props.toggle ? "40px" : "0")};
    height: ${props => (props.toggle ? "56px" : "400px")};
    width: ${props => (props.toggle ? "56px" : "100%")};
    border-radius: ${props => (props.toggle ? "50%" : "0%")};
    background-color:${props => props.theme.brandPrimColor};
    box-shadow:${props =>
      props.toggle ? props.theme.boxShadowAccent : "none"};
    font-size:18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    transition: all 0.3s linear;      
    overflow:hidden;

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
