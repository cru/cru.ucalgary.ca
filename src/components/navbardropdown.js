import React from "react"
import Styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
library.add(faCaretDown)

const NavBarDropDown = props => (
  <Container>
    <LinkText className={props.selected && "selected"}>
      {props.text} <FontAwesomeIcon icon="caret-down" />
    </LinkText>
    <Menu className="navbardropdown-menu">
      <ul style={{ paddingLeft: 25 }}>
        <li>
          <Link to="/people">
            <MenuLink
              className={(props.selected && "selected") || "unSelected"}
            >
              People
            </MenuLink>
          </Link>
        </li>
      </ul>
    </Menu>
  </Container>
)

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
  margin-top:-10px;
  position: fixed;
  width: 120px;
  outline: 1px solid #D8D8D8;
  background-color:white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.13);
`

const MenuLink = Styled.div`
  font-size: 14.5px;
  font-weight: 400;
  padding-bottom:5px;
  position: relative;
  display: inline-block;
  text-transform: uppercase;
`
