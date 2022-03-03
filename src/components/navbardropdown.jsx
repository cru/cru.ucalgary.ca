import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavBarLinks from './navbarlinks'

const NavBarDropDown = ({ text, pages, group, selectedPage, active }) => {
  const subPages = pages.map((subPage) => (
    <li key={subPage.page.toString()}>
      <NavBarLinks
        page={`/${group}/${subPage.page}`}
        text={subPage.text}
        active={selectedPage === subPage.page}
        style={{ fontSize: '19.5px' }}
      />
      <div style={{ height: 9 }} />
    </li>
  ))

  return (
    <Container>
      <LinkText className={active && 'selected'}>
        {text}
        <FontAwesomeIcon style={{ fontSize: '14px' }} icon='caret-down' />
      </LinkText>
      <Menu className='navbardropdown-menu'>
        <ul style={{ paddingLeft: 22, paddingRight: 22 }}>{subPages}</ul>
      </Menu>
    </Container>
  )
}

NavBarDropDown.propTypes = {
  group: PropTypes.string.isRequired,
  selectedPage: PropTypes.string,
  text: PropTypes.string.isRequired,
  pages: PropTypes.array.isRequired,
}

export default NavBarDropDown

const Container = Styled.div`
  position: relative;

  :hover .navbardropdown-menu {
    display:flex;
  }
`

const LinkText = Styled.span`
  font-family: futura-pt, sans-serif;
  font-size: 20.5px;
  font-weight: 400;
  letter-spacing:0.2px;
  position: relative;
  display: inline-block;
  cursor: pointer;
`

const Menu = Styled.div`
  display:none;
  flex-direction:column;
  position: absolute;
  z-index:99;
  padding-top:10px;
  width:275px;
  background-color: ${(props) => props.theme.navBarPrimary};
  outline: 1.5px solid ${(props) => props.theme.navBarAccent}; 
  box-shadow: ${(props) => props.theme.boxShadow};
  li {
    list-style-type: none;
  }
`
