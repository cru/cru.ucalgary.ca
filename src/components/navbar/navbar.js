import React from "react"
import Styled from "styled-components"

import NavbarLogo from "./navbarlogo"
import NavBarLinks from "./navbarlinks"

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
  </Container>
)
export default NavBar

/* Styles */
const Container = Styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 68px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  outline: 1px solid #D8D8D8;
 
  :hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.13);
    outline: 1px white;
  }
  animation: shadowStart 0.1s;
`
