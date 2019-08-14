import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { Link } from 'gatsby'

const removeDashes = x => x.replace(/-/g, ' ')

const NavBarLinks = ({ page, group, text, style }) => {
  return (
    <Link to={page} style={{ textDecoration: 'none', pointerEvents: 'none' }}>
      <LinkText className={(group && 'selected') || 'unSelected'} style={style}>
        {removeDashes(text)}
      </LinkText>
    </Link>
  )
}

NavBarLinks.propTypes = {
  page: PropTypes.node.isRequired,
  group: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
  style: PropTypes.node.isRequired,
}

export default NavBarLinks

const LinkText = Styled.div`
    pointer-events:all;   

    letter-spacing:0.2px;
    position: relative;
    display: inline-block;

    font-family: futura-pt, sans-serif;
    font-size: 19.5px;
    font-weight: 400;
`
