import React from 'react'
import Styled from 'styled-components'

const CRUDescription = () => {
  return (
    <>
      <Container>
        The Clinical Research Unit (CRU) is a core support centre of the Cumming
        School of Medicine (CSM).
      </Container>
    </>
  )
}

export default CRUDescription

const Container = Styled.h4`
    margin: 0 auto;
    max-width:600px;
    text-align: center;
    background-color:white;
`
