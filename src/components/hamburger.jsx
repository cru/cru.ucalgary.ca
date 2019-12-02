import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const Hamburger = ({ onClick, toggle }) => {
  return (
    <Container onClick={onClick}>
      <Contents toggle={toggle} />
    </Container>
  )
}

Hamburger.propTypes = {
  onClick: PropTypes.node.isRequired,
  toggle: PropTypes.node.isRequired,
}

export default Hamburger

const Container = Styled.button`
    outline:none;
    z-index:100;
    height:30px;
    width:30px;
    border: none;
    background-color: transparent;
    cursor:pointer;
    border-radius: ${props => props.theme.borderRadius};
    padding:18px;
    padding-top:15px;

    :hover {
        box-shadow: ${props => props.theme.boxShadow};
    }
    :active {
        box-shadow: none;
    }
`

const Contents = Styled.span`
    border-radius:2px;
    height:4px;
    width:23px;
    margin-left:-11px;
    background-color: ${props =>
      props.toggle ? 'transparent' : props.theme.fontPrimColor};
    display: block;
    content: '';
    position:relative;
    transition: all 0.2s linear;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    :before {
      border-radius:2px;
      height:4px;
      width:23px;
      background-color: ${props => props.theme.fontPrimColor};;
      display: block;
      content: '';
      position:relative;
      top: ${props => (props.toggle ? '0' : '-8px')};
      transform: ${props => (props.toggle ? 'rotate(45deg)' : '')};
    }

    :after {
      border-radius:2px;
      height:4px;
      width:23px;
      background-color: ${props => props.theme.fontPrimColor};;
      display: block;
      content: '';
      position:relative;
      bottom:-4px;
      margin-top: ${props => (props.toggle ? '-4px' : '')};
      top: ${props => (props.toggle ? '0' : '')};
      transform: ${props => (props.toggle ? 'rotate(-45deg)' : '')};

    }

`
