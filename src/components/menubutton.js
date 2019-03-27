import React, { Component } from "react"
import Styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class MenuButton extends Component {
  render() {
    const { onClick, icon, toggle, color } = this.props
    return (
      <Container onClick={onClick} style = {{display:toggle, color:color}}>
        <FontAwesomeIcon icon={icon} />
      </Container>
    )
  }
}

export default MenuButton

const Container = Styled.button`
  z-index:6;
  font-size: 24px;
  padding-left:8px;
  padding-right:8px;
  padding-top:3px;
  padding-bottom:3px;
  border-radius: ${props => props.theme.borderRadius};
  background-color:transparent;
  border: none;
  transition: all ${props => props.theme.boxShadowTrans};

  cursor:pointer;

  :hover {
    box-shadow: ${props => props.theme.boxShadow};
  }
  :active {
    box-shadow:none;
  }
`
