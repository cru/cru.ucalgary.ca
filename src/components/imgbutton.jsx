import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Styled from 'styled-components'

const ImgButton = ({ to, href, children }) => {
  const links = () => {
    if (to) {
      return <Link to={to}>{children}</Link>
    }
    return (
      <a href={href} target='_blank' rel='noopener noreferrer'>
        {children}
      </a>
    )
  }

  return <Container>{links()}</Container>
}

ImgButton.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default ImgButton

const Container = Styled.div`
    display:flex;
    padding:8px;
    padding-bottom:3px;
    transition: all ${(props) => props.theme.boxShadowTrans};
    border-radius: ${(props) => props.theme.borderRadius};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;


    :hover {
      box-shadow: ${(props) => props.theme.boxShadow};
    }
    :active {
      box-shadow: none;

    }
    .icon{
      margin-bottom:7px;
      padding:2px;
      margin-left:3px;
      font-size:13px;
      color: ${(props) => props.theme.imgButtonIcon};
    }
`
