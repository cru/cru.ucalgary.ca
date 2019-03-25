import React, { Component } from "react"
import Styled, { ThemeProvider } from "styled-components"
import NavbarLogo from "./navbarlogo.js"
import NavbarUofC from "./navbaruofc"
import NavBarLinks from "./navbarlinks.js"
import NavbarDropDown from "./navbardropdown.js"
import theme from "./theme"


class NavBar extends Component {
  render() {
    const { about, subSelected, services } = this.props
    return (
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    )
  }
}

export default NavBar

/* Styles */
const Container = Styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.navBarPrimary};
  outline: 1px solid ${props => props.theme.navBarAccent};
  width: 100%;
  height: 80px;
  margin: 0;
  padding: 0;
  top:0;
  position: -webkit-sticky;
  position: sticky;
  transition: all ${props => props.theme.boxShadowTrans};

  :hover {
    outline: 0;
    box-shadow: ${props => props.theme.boxShadow};
  }
`
const LinkSpace = Styled.div`
  width:33px;
`
const ImgLinkContainer = Styled.div`
    margin-left: auto;
    margin-right:30px;
`
