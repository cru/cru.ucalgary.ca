import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Styled from 'styled-components'

const Person = ({ name, title, fixed, comment, color }) => {
  return (
    <Container>
      <Img fixed={fixed} />
      <h5>{name}</h5>
      <p>{title}</p>
      <Overlay color={color}>
        <div style={{ height: 15 }} />
        <span>{comment}</span>
      </Overlay>
    </Container>
  )
}
Person.propTypes = {
  name: PropTypes.node.isRequired,
  comment: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  color: PropTypes.node.isRequired,
  fixed: PropTypes.node.isRequired,
}

export default Person

const Container = Styled.div`
    overflow:hidden;
    h5{
      margin-top:10px;
    }
    p{
      margin-top:-30px;
      font-size:14.5px;
    }
`

const Overlay = Styled.span`
  position:absolute;
  top:0;
  background-color:transparent;
  height:166px;
  width:166px;
  margin-left:10px;
  margin-top:5px;

  text-align:center;
  color: transparent;
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.5s;

  :hover {
    background-color:${props => props.color};
    color:white;
    font-weight:700;
  }

`
