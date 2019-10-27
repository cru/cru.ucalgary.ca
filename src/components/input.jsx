import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const Input = ({ placeholder, name, type, style, value, onChange }) => {
  return (
    <>
      <Field
        placeholder={placeholder}
        name={name}
        type={type}
        style={style}
        value={value}
        onChange={onChange}
        required
      />
    </>
  )
}

Input.propTypes = {
  placeholder: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired,
  style: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  onChange: PropTypes.node.isRequired,
}

export default Input

const Field = Styled.input`
    border-radius:3px;
    border: 2px solid white;
    height:25px;
    padding:5px;
    transition: all 0.2s linear;
    font-size:14px;
    width:100%;
    background-color: white;

    :focus {
        box-shadow: ${props => props.theme.boxShadowAccent};
        border: 2px solid ${props => props.theme.fontPrimColor};
        outline: none;
    }

`
