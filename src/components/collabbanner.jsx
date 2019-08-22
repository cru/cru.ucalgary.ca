import React from 'react'

// import PropTypes from 'prop-types'
import Styled from 'styled-components'

const CollabBanner = () => {
  return (
    <>
      <Header>
        <h2>Collaborators</h2>
      </Header>
      <Container>
        <div />
      </Container>
    </>
  )
}

CollabBanner.propTypes = {}

export default CollabBanner

const Header = Styled.div`
  align-content:center;
  text-align: center;
`

const Container = Styled.div`
    height:150px;
    outline:2px solid lightgrey;
`
