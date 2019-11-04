import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Styled from 'styled-components'

const Person = ({ name, comment, fixed }) => {
  return (
    <Container>
      <Img fixed={fixed} />
      <h5>{name}</h5>
      <p>{comment}</p>
    </Container>
  )
}
Person.propTypes = {
  name: PropTypes.node.isRequired,
  comment: PropTypes.node.isRequired,
  fixed: PropTypes.node.isRequired,
}

export default Person

const Container = Styled.div`
    max-width:152px;
    flex:1;
    padding-bottom:40px;
    padding-right:30px;

    h5{
      margin-top:10px;
    }
    p{
      margin-top:-30px;
    }
`
