import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBarLinks from './navbarlinks'

const NavBarDropDown = ({ category, subCategory, text, page }) => {
  const pages = page.map(pageName => (
    <li key={pageName.toString()}>
      <NavBarLinks
        page={`/${pageName}`}
        text={pageName}
        category={subCategory === pageName && category}
      />
      <div style={{ height: 9 }} />
    </li>
  ))

  return (
    <Container>
      <LinkText className={category && 'selected'}>
        {text}
        <span> </span>
        <FontAwesomeIcon icon="caret-down" />
      </LinkText>
      <Menu className="navbardropdown-menu">
        <ul style={{ paddingLeft: 22, paddingRight: 22 }}>{pages}</ul>
      </Menu>
    </Container>
  )
}

NavBarDropDown.propTypes = {
  category: PropTypes.node.isRequired,
  subCategory: PropTypes.node.isRequired,
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
  font-size: ${props => props.theme.navBarFontSize};
  font-weight: 400;
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  cursor:default;
`

const Menu = Styled.div`
  display:none;
  flex-direction:column;
  position: absolute;
  z-index:-1;
  padding-top:8px;
  width:170px;
  background-color: ${props => props.theme.navBarPrimary};
  outline: 1.5px solid ${props => props.theme.navBarAccent}; 
  box-shadow: ${props => props.theme.boxShadow};
  li {
    list-style-type: none;
  }
`
