import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
// import moment from 'moment'

import MobileMenu from './mobilemenu'
import NavBarLinks from './navbarlinks'
import NavBarDropDown from './navbardropdown'
import ImgButton from './imgbutton'
import Hamburger from './hamburger'
import uofcImg from '../images/partners/uc-horz-rgb.png'
import cruImg from '../images/cru_logo.png'
import Alert from './alert'

const NavBar = ({ activePage, activeGroup }) => {
  const [navbarpage, setNavbarpage] = useState(false)
  // const [showAlert, setShowAlert] = useState(false)

  // useEffect(() => {
  //   const startDate = moment('2022-01-01')
  //   const endDate = moment('2023-01-01')

  //   setShowAlert(moment().isBetween(startDate, endDate, 'days'))
  // }, [])

  return (
    <>
      <Alert />
      <Bar navbarpage={navbarpage}>
        <MenuContainer>
          <MobileSpacing />
          <Hamburger
            onClick={navbarpage ? () => setNavbarpage(false) : () => setNavbarpage(true)}
            toggle={navbarpage}
          />
        </MenuContainer>
        <MenuContainerOpposite>
          <LinkSpacing />
        </MenuContainerOpposite>
        <ImgButton to='/'>
          <img src={cruImg} style={{ height: '36px' }} alt='CRU' />
        </ImgButton>
        <LinkSpacing />
        <LinkContainer>
          <NavBarLinks page='/people' text='People' active={activePage === 'people'} />
        </LinkContainer>
        <LinkSpacing />
        <LinkContainer>
          <NavBarLinks
            page='/partners'
            text='Partners'
            active={activePage === 'partners'}
          />
        </LinkContainer>
        <LinkSpacing />
        <LinkContainer>
          <NavBarLinks
            page='/publications'
            text='Publications'
            active={activePage === 'publications'}
          />
        </LinkContainer>
        <LinkSpacing />
        <LinkContainer>
          <NavBarDropDown
            text='Newsroom'
            pages={[
              { page: 'announcements', text: 'Announcements' },
              { page: 'redcap-validation', text: 'REDCap Validation!' },
            ]}
            group='newsroom'
            selectedPage={['announcements', 'redcap-validation'].find(
              (el) => el === activePage
            )}
            active={activeGroup === 'newsroom'}
          />
        </LinkContainer>
        <LinkSpacing />
        <LinkContainer>
          <NavBarDropDown
            text='Resources'
            pages={[
              { page: 'data-lifecycle-management', text: 'Data Lifecycle Management' },
              { page: 'machine-learning', text: 'Machine Learning' },
              { page: 'policy-documents', text: 'Policy Documents' },
              { page: 'project-validation-guide', text: 'Project Validation Guide' },
              { page: 'downloads', text: 'Downloads' },
            ]}
            group='resources'
            selectedPage={[
              'data-lifecycle-management',
              'machine-learning',
              'policy-documents',
              'project-validation-guide',
              'downloads',
            ].find((el) => el === activePage)}
            active={activeGroup === 'resources'}
          />
        </LinkContainer>
        <LinkSpacing />
        <LinkContainer>
          <NavBarDropDown
            text='Services and Pricing'
            pages={[
              { page: 'edc-services', text: 'Electronic Data Capture Services' },
              { page: 'custom-platforms', text: 'Custom Research Platforms' },
              {
                page: 'methods-analytics-services',
                text: 'Methods and Analytics Services',
              },
              { page: 'dataxplor', text: '*NEW* DataXplor Platform' },
            ]}
            group='services-and-pricing'
            selectedPage={[
              'edc-services',
              'custom-platforms',
              'methods-analytics-services',
              'dataxplor',
            ].find((el) => el === activePage)}
            active={activeGroup === 'services-and-pricing'}
          />
        </LinkContainer>
        <LinkSpacing />
        <LinkContainer>
          <NavBarLinks
            page='/about-us'
            text='About Us'
            active={activePage === 'about-us'}
          />
        </LinkContainer>
        <RightAlign>
          <ImgButton href='https://www.ucalgary.ca/'>
            <img src={uofcImg} style={{ height: '28px' }} alt='UofC' />
          </ImgButton>
        </RightAlign>
        <MobileSpacing />
        <LinkSpacing />
      </Bar>
      <MobileMenu navbarpage={navbarpage} />
    </>
  )
}

NavBar.propTypes = {
  page: PropTypes.string,
  group: PropTypes.string,
}
export default NavBar

/* Styles */

const Bar = Styled.div`
  flex-wrap: wrap;

  z-index:100;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.navBarPrimary};
  outline: 1px solid ${(props) =>
    props.navbarpage ? 'white' : props.theme.navBarAccent};
  width: 100%;
  height: 76px;
  margin: 0;
  padding: 0;
  top:0;
  position: -webkit-sticky;
  position: sticky;
  transition: box-shadow ${(props) => props.theme.boxShadowTrans};

  :hover {
    outline: 0;
    box-shadow: ${(props) => (props.navbarpage ? '0' : props.theme.boxShadow)};
  }

  .menu-button-times-icon {
    color: ${(props) => props.theme.navBarTimesColor};
  }
  
  .menu-button-bars-icon {
    color: ${(props) => props.theme.navBarBarsColor};
  }

  @media only screen and (min-width: ${(props) => props.theme.tabletBreakPoint}){
      outline: 1px solid ${(props) => props.theme.navBarAccent};
      :hover{
        box-shadow: ${(props) => props.theme.boxShadow};
      }
    }
`

const LinkSpacing = Styled.div`
  width:25px;
  height:10px;
  @media only screen and (max-width: ${(props) => props.theme.tabletBreakPoint}){
    display:none;
  }

`
const MenuContainer = Styled.div`
  display:flex;
    @media only screen and (min-width: ${(props) => props.theme.tabletBreakPoint}){
      display:none;
  }
`
const MenuContainerOpposite = Styled.div`
  display:flex;
    @media only screen and (max-width: ${(props) => props.theme.tabletBreakPoint}){
      display:none;
  }
`

const LinkContainer = Styled.div`
  @media only screen and (max-width: ${(props) => props.theme.tabletBreakPoint}){
    display:none;
  }
`
const MobileSpacing = Styled.div`
      @media only screen and (max-width: ${(props) => props.theme.tabletBreakPoint}){
        width:20px;
  }

`

const RightAlign = Styled.div`
    margin-left: auto;
`
