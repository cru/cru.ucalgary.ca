import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { Link } from 'gatsby'

const removeUnderscores = x => x.replace(/_/g, ' ')

const NavBarLinks = ({ page, category, text, style }) => {
  return (
    <Link to={page} style={{ textDecoration: 'none', pointerEvents: 'none' }}>
      <LinkText
        className={(category && 'selected') || 'unSelected'}
        style={style}
      >
        {removeUnderscores(text)}
      </LinkText>
    </Link>
  )
}

NavBarLinks.propTypes = {
  page: PropTypes.node.isRequired,
  category: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
  style: PropTypes.node.isRequired,
}

export default NavBarLinks

const LinkText = Styled.div`
    pointer-events:all;   
    font-size: ${props => props.theme.navBarFontSize};
    font-weight: 400;
    position: relative;
    display: inline-block;
    text-transform: uppercase;
`
