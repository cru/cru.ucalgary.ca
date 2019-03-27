import React, { Component } from "react"
import Styled from "styled-components"

import NavBarLinks from "./navbarlinks.js"
import NavBarDropDown from "./navbardropdown.js"
import NavBarPage from "./navbarpage.js"
import MenuButton from "./menubutton"
import ImgButton from "./imgbutton"

import uofcImg from "../images/uc-horz-rgb.png"
import cruImg from "../images/cru_logo.png"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
library.add(faCaretDown)
library.add(faBars)
library.add(faTimes)
library.add(faExternalLinkAlt)

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileMenu: "none",
      mobileMenuButtonBars: "block",
      mobileMenuButtonTimes: "none",
    }
  }

  render() {
    const { about, subSelected, services } = this.props

    const toggleNavBarPage = () => {
      if (this.state.mobileMenu === "none") {
        this.setState({ mobileMenu: "block", mobileMenuButtonBars: "none", mobileMenuButtonTimes: "block" })
      } else {
        this.setState({ mobileMenu: "none", mobileMenuButtonBars: "block", mobileMenuButtonTimes: "none" })
      }
    }

    return (
      <Container>
        <MenuContainer>
          <LinkSpacing />
          <MenuButton onClick={toggleNavBarPage} icon="bars" toggle= {this.state.mobileMenuButtonBars} color="black"/>
          <MenuButton onClick={toggleNavBarPage} icon="times" toggle= {this.state.mobileMenuButtonTimes} color="white"/>
          <NavBarPage toggle={this.state.mobileMenu} />
        </MenuContainer>

        <LinkSpacing />

        <ImgButton logo={cruImg} to="/" />

        <LinkSpacing />

        <LinkContainer>
          <NavBarDropDown
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
          <ImgButton
            logo={uofcImg}
            icon="external-link-alt"
            href="https://www.ucalgary.ca/"
          />
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
