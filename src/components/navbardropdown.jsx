import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBarLinks from './navbarlinks'

const NavBarDropDown = ({ group, selectedPage, text, page }) => {
  const pages = page.map(pageName => (
    <li key={pageName.toString()}>
      <NavBarLinks
        page={`/${pageName}`}
        text={pageName}
        group={selectedPage === pageName && selectedPage}
        style={{ fontSize: '18.5px' }}
      />
      <div style={{ height: 9 }} />
    </li>
  ))

  return (
    <Container>
      <LinkText className={group && 'selected'}>
        {text}
        <span> </span>
        <FontAwesomeIcon style={{ fontSize: '14px' }} icon="caret-down" />
      </LinkText>
      <Menu className="navbardropdown-menu">
        <ul style={{ paddingLeft: 22, paddingRight: 22 }}>{pages}</ul>
      </Menu>
    </Container>
  )
}

NavBarDropDown.propTypes = {
  group: PropTypes.node.isRequired,
  selectedPage: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
  page: PropTypes.node.isRequired,
}

export default NavBarDropDown

const Container = Styled.div`
  position: relative;

  :hover .navbardropdown-menu {
    display:flex;
  }
`

const LinkText = Styled.a`
  font-family: futura-pt, sans-serif;
  font-size: 19.5px;
  font-weight: 400;
  letter-spacing:0.2px;
  position: relative;
  display: inline-block;
  cursor:default;
`

const Menu = Styled.div`
  display:none;
  flex-direction:column;
  position: absolute;
  z-index:99;
  padding-top:10px;
  width:200px;
  background-color: ${props => props.theme.navBarPrimary};
  outline: 1.5px solid ${props => props.theme.navBarAccent}; 
  box-shadow: ${props => props.theme.boxShadow};
  li {
    list-style-type: none;
  }
`
