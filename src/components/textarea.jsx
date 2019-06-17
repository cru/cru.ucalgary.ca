import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

const TextArea = ({ placeholder }) => {
  return (
    <>
      <Field rows="7" placeholder={placeholder} />
    </>
  )
}

TextArea.propTypes = {
  placeholder: PropTypes.node.isRequired,
}
export default TextArea

const Field = Styled.textarea`
    border-radius:3px;
    border: 1px solid black;
    padding:5px;
    transition: all 0.2s linear;
    font-size:14px;
    width:100%;
    background-color: rgba(255, 255, 255, 0.4);
    resize: none;

    :focus {
        box-shadow: ${props => props.theme.boxShadowAccent};
        border: 1px solid grey;

    }
`
