import React, { Component } from "react"
import Styled from "styled-components"
// eslint-disable-next-line
import ScrollTrigger from "react-scroll-trigger"
import { Link } from "react-scroll"

import "../styles/mailbutton.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class MailButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      button: "1",
      containerClassName: "",
      buttonClassName: "",
      iconClassName: "",
    }
  }

  render() {
    const toggleState = x => {
      if (x) {
        this.setState({
          button: "0",
          containerClassName: "mailButton",
          buttonClassName: "mailButton-expand",
          iconClassName: "mailButton-expand-icon",
          placeHolder: "placeHolder",
        })
      } else {
        this.setState({
          button: "1",
          containerClassName: "",
          buttonClassName: "",
          iconClassName: "",
          placeHolder: "",
        })
      }
    }

    const onEnterViewport = () => {
      toggleState(true)
    }

    const onExitViewport = () => {
      toggleState(false)
    }

    return (
      <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
        <ButtonContainer className={this.state.containerClassName}>
          <Link to="test" spy={true} smooth={true} offset={-400} duration={400}>
            <Button className={this.state.buttonClassName}>
              <FontAwesomeIcon
                className={this.state.iconClassName}
                icon="envelope"
              />
            </Button>
          </Link>
        </ButtonContainer>
        <PlaceHolderContainer className={this.state.placeHolder} />
        <div id="test" />
      </ScrollTrigger>
    )
  }
}
export default MailButton

const PlaceHolderContainer = Styled.div`
    height:200px;
    width:100%;
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
    transition: all 0.5s ease-out;
    box-shadow:${props => props.theme.boxShadowAccent};

    :hover {
        box-shadow: ${props => props.theme.boxShadow};
        background-color:${props => props.theme.brandPrimAccent};
    }
    
    :active {
        box-shadow:none;
    }
`
