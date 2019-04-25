import React, { Component } from "react"
import Styled from "styled-components"

class Input extends Component {
  render() {
    const { placeholder } = this.props
    return (
      <>
        <Field placeholder={placeholder} />
      </>
    )
  }
}
export default Input

const Field = Styled.input`
    border-radius:3px;
    border: 1px solid black;
    height:28px;
    padding:5px;
    transition: all 0.2s linear;
    font-size:14px;
    width:100%;
    background-color: rgba(255, 255, 255, 0.4);

    :focus {
        box-shadow: ${props => props.theme.boxShadowAccent};
        border: 1px solid grey;

    }
`
