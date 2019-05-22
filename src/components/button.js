import React, { Component } from "react"
import Styled from "styled-components"

class Button extends Component {
  render() {
    return (
      <>
        <DefaultButton style={this.props.style} onClick={this.props.onClick}>
          {this.props.children}
        </DefaultButton>
      </>
    )
  }
}
export default Button

const DefaultButton = Styled.button`
    height: 38px;
    width: 100px;
    background-color:transparent;
    border: 1px solid lightGrey;
    border-radius:50px;
    cursor:pointer;
    transition: box-shadow ${props => props.theme.boxShadowTrans};
    font-size:14.5px;
    text-transform:uppercase;
    color:${props => props.theme.fontPrimColor};

    :hover {
      border: 1px solid grey;
    }

    :active{
      box-shadow:none;
    }
`
