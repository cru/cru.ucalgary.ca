import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'

const CRUDescription = ({ style }) => {
  return (
    <>
      <Container style={style}>
        <Title>Better Data, Better Research</Title>
        <div style={{ height: '40px' }} />
        The Clinical Research Unit (CRU) is a core support centre of the Cumming
        School of Medicine (CSM).
      </Container>
    </>
  )
}

CRUDescription.propTypes = {
  style: PropTypes.node.isRequired,
}

export default CRUDescription

const Container = Styled.h4`
    margin: 0 auto;
    max-width:600px;
    text-align: center;
    background-color:white;
`
const Title = Styled.h1`
    margin: 0 auto;
    max-width:500px;
    padding-top:20vh;
    font-size:55px;
    background-color:white;
`
