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
          <ul style={{ paddingLeft: 25 }}>{pages}</ul>
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
  display:block;
}
`

const LinkText = Styled.a`
  margin: 27px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 14.5px;
  font-weight: 400;
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  cursor:default;
`

const Menu = Styled.div`
  display:none;
  margin-left:20px;
  margin-top:-18px;
  position: fixed;
  width: 120px;
  outline: 1px solid #D8D8D8;
  background-color:white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.13);
`
