import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const Person = ({ name, comment, fixed }) => {
  return (
    <>
      <Img fixed={fixed} />
      <h5>{name}</h5>
      <p>{comment}</p>
    </>
  )
}
Person.propTypes = {
  name: PropTypes.node.isRequired,
  comment: PropTypes.node.isRequired,
  fixed: PropTypes.node.isRequired,
}

export default Person
