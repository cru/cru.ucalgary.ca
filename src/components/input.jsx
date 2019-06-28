import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const Input = ({ placeholder, id }) => {
  return (
    <>
      <Field id={id} placeholder={placeholder} />
    </>
  )
}

Input.propTypes = {
  id: PropTypes.node.isRequired,
  placeholder: PropTypes.node.isRequired,
}

export default Input

const Field = Styled.input`
    border-radius:3px;
    border: 2px solid grey;
    height:28px;
    padding:5px;
    transition: all 0.2s linear;
    font-size:14px;
    width:100%;
    background-color: rgba(255, 255, 255, 0.4);

    :focus {
        box-shadow: ${props => props.theme.boxShadowAccent};
        border: 2px solid darkblue;
        outline: none;
    }
`
