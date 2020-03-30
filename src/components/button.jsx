import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const Button = ({ style, onClick, children, type }) => {
  return (
    <>
      <DefaultButton
        style={style}
        onClick={onClick}
        type={type}
      >
        {children}
      </DefaultButton>
    </>
  )
}

Button.propTypes = {
  style: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
}

export default Button

const DefaultButton = Styled.button`
    height: 38px;
    width: 100px;
    background-color:white;
    border: 1px solid lightGrey;
    border-radius:50px;
    cursor:pointer;
    outline:none;
    transition: box-shadow ${props => props.theme.boxShadowTrans};
    color:${props => props.theme.fontPrimColor};

    font-family: futura-pt, sans-serif;
    font-size:17px;
    letter-spacing:0.2px;

    :hover {
      border: 1px solid grey;
    }

    :active{
      box-shadow:none;
      transform: translateY(2.5px);
    }
`
