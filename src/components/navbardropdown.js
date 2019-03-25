import React, { Component } from "react"
import Styled from "styled-components"
import NavBarLinks from "./navbarlinks"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

library.add(faCaretDown)

class NavBarDropDown extends Component {
  render() {
    const { selected, subSelected, text } = this.props
    const routes = this.props.page

    const pages = routes.map(routes => (
      <li key={routes.toString()}>
        <NavBarLinks
          page={"/" + routes}
          text={routes}
          selected={subSelected === routes && selected}
        />
        <div style={{ height: 5 }} />
      </li>
    ))

    return (
      <Container>
        <LinkText className={selected && "selected"}>
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
  display: inline-block;

:hover .navbardropdown-menu {
  display:flex;
}
`

const LinkText = Styled.a`
  font-size: 14.5px;
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
  background-color: ${props => props.theme.navBarPrimary};
  outline: 1.5px solid ${props => props.theme.navBarAccent}; 
  box-shadow: ${props => props.theme.boxShadow};
  li {
    list-style-type: none;
  }
`
