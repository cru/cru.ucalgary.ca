import React, { Component } from "react"
import Styled from "styled-components"
import NavbarLogo from "./navbarlogo.js"
import NavbarUofC from "./navbaruofc"
import NavBarLinks from "./navbarlinks.js"
import NavbarDropDown from "./navbardropdown.js"

class NavBar extends Component {
  render() {
    const { about, subSelected, services } = this.props
    return (
      <Container>
        <LinkSpace />
        <div style={{ marginTop: 5 }}>
          <NavbarLogo />
        </div>

        <LinkSpace />
        <NavbarDropDown
          page={["aboutus", "people"]}
          text="about"
          selected={about}
          subSelected={subSelected}
        />
        <LinkSpace />
        <NavBarLinks page="/services" text="services" selected={services} />

        <ImgLinkContainer>
          <NavbarUofC />
        </ImgLinkContainer>
      </Container>
    )
  }
}

export default NavBar

/* Styles */
const Container = Styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  outline: 1px solid #D8D8D8;
  width: 100%;
  height: 80px;
  margin: 0;
  padding: 0;
  top:0;
  position: -webkit-sticky;
  position: sticky;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    outline: 0px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.13);
  }
`
const LinkSpace = Styled.div`
  width:33px;
`
const ImgLinkContainer = Styled.div`
    margin-left: auto;
    margin-right:30px;
`
