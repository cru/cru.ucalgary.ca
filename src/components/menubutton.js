import React from "react"
import Styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MenuButton = () => (
  <Container>
    <FontAwesomeIcon icon="bars" />
  </Container>
)
export default MenuButton

const Container = Styled.button`
  color: ${props => props.theme.fontPrimColor};
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
