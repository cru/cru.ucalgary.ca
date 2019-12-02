import React, { useState } from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import MobileMenu from './mobilemenu'
import NavBarLinks from './navbarlinks'
import NavBarDropDown from './navbardropdown'
import ImgButton from './imgbutton'
import Hamburger from './hamburger'
import uofcImg from '../images/partners/uc-horz-rgb.png'
import cruImg from '../images/cru_logo.png'

const NavBar = ({ page, group }) => {
  const [navbarpage, setNavbarpage] = useState(false)

  return (
    <>
      <Bar navbarpage={navbarpage}>
        <MenuContainer>
          <div style={{ width: '20px' }} />
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
          <img src={cruImg} style={{ height: '36px' }} alt="CRU" />
        </ImgButton>
        {/* <LinkSpacing />
        <LinkContainer>
          <NavBarLinks
            page="/people"
            text="People"
            group={page === 'people' && 'people'}
          />
        </LinkContainer> */}
        <LinkSpacing />
        <LinkContainer>
          <NavBarLinks
            page="/partners"
            text="Partners"
            group={page === 'partners' && 'partners'}
          />
        </LinkContainer>
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
            selectedPage={page === 'downloads' && 'Downloads'}
          />
        </LinkContainer>
        <RightAlign>
          <ImgButton icon="external-link-alt" href="https://www.ucalgary.ca/">
            <img src={uofcImg} style={{ height: '28px' }} alt="UofC" />
          </ImgButton>
        </RightAlign>
        <LinkSpacing />
      </Bar>
      <MobileMenu navbarpage={navbarpage} />
    </>
  )
}

NavBar.propTypes = {
  page: PropTypes.node.isRequired,
  group: PropTypes.node.isRequired,
}
export default NavBar

/* Styles */

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
    display:none;
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
