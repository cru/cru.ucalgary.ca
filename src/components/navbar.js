import React, { Component } from "react"
import Styled from "styled-components"

import NavBarLinks from "./navbarlinks.js"
import NavBarDropDown from "./navbardropdown.js"
import NavBarPage from "./navbarpage.js"
import NavBarPageTree from "./navbarpagetree"
import ImgButton from "./imgbutton"
import Hamburger from "./hamburger"

import uofcImg from "../images/uc-horz-rgb.png"
import cruImg from "../images/cru_logo.png"

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarpage: false,
      hamburger: false,
    }
  }

  render() {
    const { about, subCategory, services, publications } = this.props

    const toggleNavBarPage = () => {
      if (this.state.navbarpage === false) {
        this.setState({
          navbarpage: true,
          hamburger: true,
        })
      } else {
        this.setState({
          navbarpage: false,
          hamburger: false,
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
              toggle={this.state.hamburger}
            />
            <NavBarPage toggle={this.state.navbarpage}>
              <>
                {/* <NavBarLinks
                  page="/services"
                  text="services"
                  style={{ fontSize: 17 }}
                  category={services}
                /> */}
                <div style={{ height: 6 }} />
                <NavBarLinks
                  page="/publications"
                  text="publications"
                  style={{ fontSize: 17 }}
                  category={publications}
                />
                {/* <NavBarPageTree
                  text="Drop Down"
                  page={["about_us", "people"]}
                  category={about}
                  subCategory={subCategory}
                /> */}
              </>
            </NavBarPage>
          </MenuContainer>
          <MenuContainerOpposite>
            <LinkSpacing />
          </MenuContainerOpposite>

          <ImgButton logo={cruImg} to="/" />

          <LinkSpacing />

          {/* <LinkContainer>
            <NavBarLinks page="/services" text="services" category={services} />
          </LinkContainer>
          <LinkSpacing /> */}

          <LinkContainer>
            <NavBarLinks
              page="/publications"
              text="publications"
              category={publications}
            />
          </LinkContainer>

          <LinkSpacing />

          {/* <LinkContainer>
            <NavBarDropDown
              text="Drop Down"
              page={["about_us", "people"]}
              category={about}
              subCategory={subCategory}
            />
          </LinkContainer> */}

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
  z-index:100;
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
    width:20px;
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
