import React, { useState } from 'react'
import { Link } from 'gatsby'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { ArrowRight } from 'react-feather'
import NavBarLinks from './navbarlinks'
import NavBarDropDown from './navbardropdown'
import ImgButton from './imgbutton'
import Hamburger from './hamburger'
import uofcImg from '../images/collaborators/uc-horz-rgb.png'
import cruImg from '../images/cru_logo.png'

// group is a prop aswell
const NavBar = ({ page, group }) => {
  const [navbarpage, setNavbarpage] = useState(false)

  return (
    <>
      <Bar navbarpage={navbarpage}>
        <MenuContainer>
          <LinkSpacing />
          <Hamburger
            onClick={
              navbarpage
                ? () => setNavbarpage(false)
                : () => setNavbarpage(true)
            }
            toggle={navbarpage}
          />
        </MenuContainer>
        <MenuContainerOpposite>
          <LinkSpacing />
        </MenuContainerOpposite>
        <ImgButton to="/">
          <img src={cruImg} style={{ height: '25px' }} alt="cru logo" />
        </ImgButton>
        <LinkSpacing />

        <LinkContainer>
          <NavBarLinks
            page="/publications"
            text="Publications"
            group={page === 'publications' && 'publications'}
          />
        </LinkContainer>
        <LinkSpacing />
        <LinkContainer>
          <NavBarDropDown
            text="Resources"
            page={['Downloads']}
            group={group === 'resources'}
            selectedPage={page === 'downloads' && 'downloads'}
          />
        </LinkContainer>

        <RightAlign>
          <ImgButton icon="external-link-alt" href="https://www.ucalgary.ca/">
            <img src={uofcImg} style={{ height: '25px' }} alt="uofc logo" />
          </ImgButton>
        </RightAlign>
        <LinkSpacing />
      </Bar>
      <MobilePage navbarpage={navbarpage}>
        <div style={{ height: '70px' }} />
        <Link to="/publications">
          <MobileLink>
            <h5 style={{ color: 'white' }}>
              Publications
              <ArrowRight
                style={{
                  float: 'right',
                  marginTop: '-11px',
                  marginRight: '20px',
                }}
              />
            </h5>
          </MobileLink>
        </Link>
        <Link to="/downloads">
          <MobileLink>
            <h5 style={{ color: 'white' }}>
              Downloads
              <ArrowRight
                style={{
                  float: 'right',
                  marginTop: '-11px',
                  marginRight: '20px',
                }}
              />
            </h5>
          </MobileLink>
        </Link>
      </MobilePage>
    </>
  )
}

NavBar.propTypes = {
  page: PropTypes.node.isRequired,
  group: PropTypes.node.isRequired,
}
export default NavBar

/* Styles */

const MobileLink = Styled.div`
  outline: 4px solid ${props => props.theme.brandPrimColor};
  margin: 28px;
  padding: 2px;
  padding-left:20px;
  color: white;
  h5{
    line-height:0px;
  }
`

const MobilePage = Styled.div`
  margin: 0 auto;
  background-color: #212121;
  overflow:hidden;
  height: ${props => (props.navbarpage ? '320px' : '0px')};
  width:100vw;
  -moz-transition: height 0.5s ease;
  -webkit-transition: height 0.5s ease;
  -o-transition: height 0.5s ease;
  transition: height 0.5s ease;
  position: fixed;
  top: 0; 
  z-index:1;
  @media only screen and (min-width: ${props => props.theme.tabletBreakPoint}){
    display:none;
  }
`

const Bar = Styled.div`
  flex-wrap: wrap;

  z-index:100;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.navBarPrimary};
  outline: 1px solid ${props =>
    props.navbarpage ? 'white' : props.theme.navBarAccent};
  width: 100%;
  height: 76px;
  margin: 0;
  padding: 0;
  top:0;
  position: -webkit-sticky;
  position: sticky;
  transition: box-shadow ${props => props.theme.boxShadowTrans};

  :hover {
    outline: 0;
    box-shadow: ${props => (props.navbarpage ? '0' : props.theme.boxShadow)};
  }

  .menu-button-times-icon {
    color: ${props => props.theme.navBarTimesColor};
  }
  
  .menu-button-bars-icon {
    color: ${props => props.theme.navBarBarsColor};
  }

  @media only screen and (min-width: ${props => props.theme.tabletBreakPoint}){
      outline: 1px solid ${props => props.theme.navBarAccent};
      :hover{
        box-shadow: ${props => props.theme.boxShadow};
      }
    }
`

const LinkSpacing = Styled.div`
  width:25px;
  height:10px;
  @media only screen and (max-width: ${props => props.theme.tabletBreakPoint}){
    width:20px;
  }
`
const MenuContainer = Styled.div`
  display:flex;
    @media only screen and (min-width: ${props =>
      props.theme.tabletBreakPoint}){
    display:none;
  }
`
const MenuContainerOpposite = Styled.div`
  display:flex;
    @media only screen and (max-width: ${props =>
      props.theme.tabletBreakPoint}){
    display:none;
  }
`

const LinkContainer = Styled.div`
  @media only screen and (max-width: ${props => props.theme.tabletBreakPoint}){
    display:none;
  }
`
const RightAlign = Styled.div`
    margin-left: auto;
`
