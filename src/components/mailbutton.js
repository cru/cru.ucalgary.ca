import React, { Component } from "react"
import Styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class MailButton extends Component {
  render() {
    return (
        <Container>
          <Button>
            <FontAwesomeIcon icon="envelope" />
          </Button>
        </Container>
    )
  }
}
export default MailButton

const Container = Styled.div`
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
    background-color:${props => props.theme.brandRedOpac};
    font-size:18px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: none;
    color:white;
    transition: all ${props => props.theme.boxShadowTrans};
    box-shadow:${props => props.theme.boxShadowAccent};

    :hover {
        height:58px;
        width:58px;
        box-shadow: ${props => props.theme.boxShadow};
        background-color:${props => props.theme.brandBlueOpac};
    }
    
    :active {
        box-shadow:none;
    }
`
