import React, { Component } from "react"
import Styled from "styled-components"

import NavBarLinks from "./navbarlinks.js"
import NavBarDropDown from "./navbardropdown.js"
import NavBarPage from "./navbarpage.js"
import ImgButton from "./imgbutton"
import Hamburger from "./hamburger"

import uofcImg from "../images/uc-horz-rgb.png"
import cruImg from "../images/cru_logo.png"

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileMenu: "0",
      mobileHamburger: "",
    }
  }

  render() {
    const { about, subSelected, services } = this.props

    const toggleNavBarPage = () => {
      if (this.state.mobileMenu === "0") {
        this.setState({
          mobileMenu: "1",
          mobileHamburger: "hamburger-active",
        })
      } else {
        this.setState({
          mobileMenu: "0",
          mobileHamburger: "",
        })
      }
    }

    return (
      <>
        <Bar>
          <MenuContainer>
            <LinkSpacing />
            <Hamburger
              onClick={toggleNavBarPage}
              toggle={this.state.mobileHamburger}
            />
            <NavBarPage toggle={this.state.mobileMenu} />
          </MenuContainer>
          <MenuContainerOpposite>
            <LinkSpacing />
          </MenuContainerOpposite>

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
        </Bar>
      </>
    )
  }
}

export default NavBar

/* Styles */

const Bar = Styled.div`
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

  .menu-button-times-icon {
    color: ${props => props.theme.navBarTimesColor};
  }
  
  .menu-button-bars-icon {
    color: ${props => props.theme.navBarBarsColor};
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
const MenuContainerOpposite = Styled.div`
  display:flex;
    @media only screen and (max-width: ${props =>
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
