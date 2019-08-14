import React, { Component } from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import NavBarLinks from './navbarlinks'
import NavBarDropDown from './navbardropdown'
import NavBarPage from './navbarpage'
import ImgButton from './imgbutton'
import Hamburger from './hamburger'
import uofcImg from '../images/uc-horz-rgb.png'
import cruImg from '../images/cru_logo.png'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarpage: false,
      hamburger: false,
    }
  }

  render() {
    const { page, group } = this.props
    const { navbarpage, hamburger } = this.state
    const NavBarPageOn = () => {
      this.setState({
        navbarpage: true,
        hamburger: true,
      })
    }
    const NavBarPageOff = () => {
      this.setState({
        navbarpage: false,
        hamburger: false,
      })
    }

    return (
      <>
        <Bar>
          <MenuContainer>
            <LinkSpacing />
            <Hamburger
              onClick={hamburger ? NavBarPageOff : NavBarPageOn}
              toggle={hamburger}
            />
            <NavBarPage toggle={navbarpage}>
              <>
                <div
                  style={{
                    zoom: '120%',
                    width: '80vw',
                    paddingLeft: '60px',
                  }}
                >
                  <NavBarLinks
                    page="/publications"
                    text="publications"
                    group={page === 'publications' && 'publications'}
                  />
                </div>
              </>
            </NavBarPage>
          </MenuContainer>
          <MenuContainerOpposite>
            <LinkSpacing />
          </MenuContainerOpposite>
          <ImgButton to="/">
            <img src={cruImg} style={{ height: '25px' }} alt="cru logo" />
          </ImgButton>
          <LinkSpacing />
          <LinkContainer>
            <NavBarDropDown
              text="About"
              page={['History', 'Services', 'Team']}
              group={group === 'about'}
              selectedPage={
                (page === 'history' && 'history') || (page === 'team' && 'team')
              }
            />
          </LinkContainer>
          <LinkSpacing />
          <LinkContainer>
            <NavBarDropDown
              text="Portfolio"
              page={['Custom-Projects', 'Clinical-Trials', 'Testimonials']}
              group={group === 'portfolio'}
              selectedPage=""
            />
          </LinkContainer>
          <LinkSpacing />
          <LinkContainer>
            <NavBarLinks
              page="/client-favorites"
              text="Client Favorites"
              group={page === 'client-favorites' && 'client-favorites'}
            />
          </LinkContainer>
          <LinkSpacing />
          <LinkContainer>
            <NavBarDropDown
              text="Support"
              page={['Workflow', 'Resources']}
              group={group === 'support'}
              selectedPage=""
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
          <RightAlign>
            <ImgButton icon="external-link-alt" href="https://www.ucalgary.ca/">
              <img src={uofcImg} style={{ height: '25px' }} alt="uofc logo" />
            </ImgButton>
          </RightAlign>
          <LinkSpacing />
        </Bar>
      </>
    )
  }
}

NavBar.propTypes = {
  page: PropTypes.node.isRequired,
  group: PropTypes.node.isRequired,
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
  height: 76px;
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
