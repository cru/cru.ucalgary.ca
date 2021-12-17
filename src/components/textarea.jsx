import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const TextArea = ({ placeholder, name, onChange }) => {
  return (
    <>
      <Field
        rows='7'
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        required
      />
    </>
  )
}

TextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.node,
}
export default TextArea

const Field = Styled.textarea`
    border-radius:3px;
    border: 2px solid rgb(252, 252, 252);
    padding:5px;
    transition: all 0.2s linear;
    font-size:14px;
    width:100%;
    background-color: rgb(252, 252, 252);
    resize: none;

    :focus {
        box-shadow: ${(props) => props.theme.boxShadowAccent};
        border: 2px solid ${(props) => props.theme.fontPrimColor};
        outline: none;

    }
    ::placeholder{
      font-family: futura-pt, sans-serif;
      font-style: normal;
      font-size:16px;
      color: grey;

    }
`
