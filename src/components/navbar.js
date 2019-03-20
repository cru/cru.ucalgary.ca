import React from "react"
import Styled from "styled-components"

import NavbarLogo from "./navbarlogo.js"
import NavBarLinks from "./navbarlinks.js"
import NavbarDropDown from "./navbardropdown.js"


const NavBar = props => (
  <Container>
    <NavbarLogo />
    <NavBarLinks page="/about" text="about" selected={props.about} />
    <NavBarLinks page="/services" text="services" selected={props.services} />
    <NavBarLinks
      page="/technologies"
      text="technologies"
      selected={props.technologies}
    />
    <NavbarDropDown text="people" selected = {props.people} />

  </Container>
)
export default NavBar

/* Styles */
const Container = Styled.div`
  background-color: white;
  outline: 1px solid #D8D8D8;
  width: 100%;
  height: 68px;
  margin: 0;
  padding: 0;
  top: 0;
  position: -webkit-sticky;
  position: sticky;
  display: flex;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    outline: 0px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.13);
  }
`
