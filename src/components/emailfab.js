import React, { Component } from "react"
import Styled from "styled-components"
import "../styles/email.scss"

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
          <ButtonContainer className={!this.state.toggle && "mailButton"}>
            <Link
              to={this.state.button}
              spy={true}
              smooth={true}
              offset={-150}
              duration={400}
            >
              <Button className={!this.state.toggle && "mailButton-expand"}>
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
    position: fixed;
    bottom: 0;
    width:100%;
    max-width: ${props => props.theme.pageMaxWidth};
`

const Button = Styled.div`
    float:right;
    cursor:pointer;
    margin:40px;
    height:56px;
    width:56px;
    border-radius:50%;
    background-color:${props => props.theme.brandPrimColor};
    font-size:18px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: none;
    color:white;
    /* This transition might be too laggy on old hardware */
    transition: all 0.3s linear; 
     
    box-shadow:${props => props.theme.boxShadowAccent};
    overflow:hidden;

    :hover {
        box-shadow: ${props => props.theme.boxShadow};
        background-color:${props => props.theme.brandPrimAccent};
    }
    
    :active {
        box-shadow:none;
    }
`
