import React, { Component } from "react"
import Styled from "styled-components"
import NavBarLinks from "./navbarlinks"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class NavBarDropDown extends Component {
  render() {
    const { category, subCategory, text } = this.props
    const routes = this.props.page

    const pages = routes.map(routes => (
      <li key={routes.toString()}>
        <NavBarLinks
          page={"/" + routes}
          text={routes}
          category={subCategory === routes && category}
        />
        <div style={{ height: 5 }} />
      </li>
    ))

    return (
      <Container>
        <LinkText className={category && "selected"}>
          {text} <FontAwesomeIcon icon="caret-down" />
        </LinkText>
        <Menu className="navbardropdown-menu">
          <ul style={{ paddingLeft: 22, paddingRight: 22 }}>{pages}</ul>
        </Menu>
      </Container>
    )
  }
}

export default NavBarDropDown

const Container = Styled.div`
  position: relative;

  :hover .navbardropdown-menu {
    display:flex;
  }
`

const LinkText = Styled.a`
  font-size: ${props => props.theme.navBarFontSize};
  font-weight: 400;
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  cursor:default;
`

const Menu = Styled.div`
  display:none;
  flex-direction:column;
  position: absolute;
  z-index:-1;
  padding-top:8px;
  width:120px;
  background-color: ${props => props.theme.navBarPrimary};
  outline: 1.5px solid ${props => props.theme.navBarAccent}; 
  box-shadow: ${props => props.theme.boxShadow};
  li {
    list-style-type: none;
  }
`
