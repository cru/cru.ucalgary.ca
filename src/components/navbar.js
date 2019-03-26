import React, { Component } from "react"
import Styled from "styled-components"
import MenuButton from "./menubutton"
import ImgButton from "./imgbutton"
import NavBarLinks from "./navbarlinks.js"
import NavbarDropDown from "./navbardropdown.js"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import uofcImg from "../images/uc-horz-rgb.png"
import cruImg from "../images/cru_logo.png"

library.add(faLink)
library.add(faCaretDown)
library.add(faBars)

class NavBar extends Component {
  render() {
    const { about, subSelected, services } = this.props
    return (
      <Container>
        <MenuContainer>
          <LinkSpacing />
          <MenuButton />
        </MenuContainer>

        <LinkSpacing />
        <ImgButton logo={cruImg} to = "/"/>

        <LinkSpacing />

        <LinkContainer>
          <NavbarDropDown
            text="Drop Down"
            page={["about_us", "people"]}
            selected={about}
            subSelected={subSelected}
          />
        </LinkContainer>
        <LinkSpacing />

        <LinkContainer>
          <NavBarLinks page="/services" text="services" selected={services} />
        </LinkContainer>

        <RightAlign>
          <ImgButton logo={uofcImg} icon="link" href = "https://www.ucalgary.ca/" />
        </RightAlign>

        <LinkSpacing />
      </Container>
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
  height: 70px;
  margin: 0;
  padding: 0;
  top:0;
  position: -webkit-sticky;
  position: sticky;
  transition: box-shadow ${props => props.theme.boxShadowTrans};

  :hover {
    outline: 0;
    box-shadow: ${props => props.theme.boxShadow};
  }
`

const LinkSpacing = Styled.div`
  width:25px;
  @media only screen and (max-width: ${props => props.theme.navbarBreakPoint}){
    width:13px;
  }
`
const MenuContainer = Styled.div`
  display:flex;
    @media only screen and (min-width: ${props =>
      props.theme.navbarBreakPoint}){
    display:none;
  }
`

const LinkContainer = Styled.div`
  @media only screen and (max-width: ${props => props.theme.navbarBreakPoint}){
    display:none;
  }
`
const RightAlign = Styled.div`
    margin-left: auto;
`
