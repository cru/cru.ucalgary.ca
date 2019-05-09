import React, { Component } from "react"
import Styled from "styled-components"

class Button extends Component {
  render() {
    return (
      <>
        <DefaultButton>{this.props.children}</DefaultButton>
      </>
    )
  }
}
export default Button

const DefaultButton = Styled.button`
    height: 38px;
    width: 100px;
    background-color:transparent;
    border: 1px solid black;
    border-radius:4px;
    cursor:pointer;
    transition: box-shadow ${props => props.theme.boxShadowTrans};
    font-size:14.5px;
    text-transform:uppercase;
    color:black;

    :hover {
      box-shadow: ${props => props.theme.boxShadow};
    }

    :active{
      box-shadow:none;
    }
`
