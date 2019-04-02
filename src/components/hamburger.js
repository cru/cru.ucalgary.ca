import React, { Component } from "react"
import Styled from "styled-components"

class Hamburger extends Component {
  render() {
    const { onClick, toggle } = this.props
    return (
      <Container onClick={onClick}>
        <Contents className={toggle} />
      </Container>
    )
  }
}

export default Hamburger

const Container = Styled.button`
    z-index:100;
    height:30px;
    width:30px;
    border: none;
    background-color:transparent;
    cursor:pointer;
    border-radius: ${props => props.theme.borderRadius};
    padding:18px;
    padding-top:15px;

    :hover {
        box-shadow: ${props => props.theme.boxShadow};
    }
    :active {
        box-shadow: none;
    }
`

const Contents = Styled.span`
    border-radius:1.5px;
    height:4px;
    width:22px;
    margin-left:-11px;
    background-color: ${props => props.theme.fontPrimColor};;
    display: block;
    content: '';
    position:relative;
    transition: all 0.2s linear;
    

    :before {
      border-radius:1.5px;
      height:4px;
      width:22px;
      background-color: ${props => props.theme.fontPrimColor};;
      display: block;
      content: '';
      position:relative;
      top:-8px;
    }

    :after {
        border-radius:1.5px;
        height:4px;
        width:22px;
        background-color: ${props => props.theme.fontPrimColor};;
        display: block;
        content: '';
        position:relative;
        bottom:-4px;
    }

`
