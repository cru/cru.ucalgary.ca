import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { Link } from 'gatsby'

const removeDashes = (x) => x.replace(/-/g, ' ')

const NavBarLinks = ({ page, active, text, style }) => {
  return (
    <Link
      to={page}
      style={{ color: 'rgb(32, 32, 32)', textDecoration: 'none', pointerEvents: 'none' }}
    >
      <LinkText className={(active && 'selected') || 'unSelected'} style={style}>
        {removeDashes(text)}
      </LinkText>
    </Link>
  )
}

NavBarLinks.propTypes = {
  page: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
}

export default NavBarLinks

const LinkText = Styled.div`
    pointer-events:all;   

    letter-spacing:0.2px;
    position: relative;
    display: inline-block;

    font-family: futura-pt, sans-serif;
    font-size: 20.5px;
    font-weight: 400;
`
