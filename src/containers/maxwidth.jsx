import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'

const MaxWidth = ({ children }) => {
  return <Container>{children}</Container>
}

MaxWidth.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MaxWidth

const Container = Styled.div`
    max-width: ${(props) => props.theme.pageMaxWidth};
    margin: 0 auto;
`
