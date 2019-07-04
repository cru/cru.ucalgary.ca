import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const Button = ({ style, onClick, children, id }) => {
  return (
    <>
      <DefaultButton style={style} onClick={onClick} id={id}>
        {children}
      </DefaultButton>
    </>
  )
}

Button.propTypes = {
  style: PropTypes.node.isRequired,
  onClick: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired,
}

export default Button

const DefaultButton = Styled.button`
    height: 38px;
    width: 100px;
    background-color:transparent;
    border: 1px solid lightGrey;
    border-radius:50px;
    cursor:pointer;
    outline:none;
    transition: box-shadow ${props => props.theme.boxShadowTrans};
    font-size:13.5px;
    text-transform:uppercase;
    color:${props => props.theme.fontPrimColor};

    :hover {
      border: 1px solid grey;
    }

    :active{
      box-shadow:none;
      transform: translateY(2px);
    }
`
