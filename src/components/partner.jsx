import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Styled from 'styled-components'

const Partner = ({ href, fixed }) => {
  return (
    <Container>
      <a href={href} rel="noopener noreferrer" target="_blank">
        <Img fixed={fixed} />
        {/* <h5>{name}</h5> */}
      </a>
    </Container>
  )
}
Partner.propTypes = {
  href: PropTypes.node.isRequired,
  fixed: PropTypes.node.isRequired,
}

export default Partner

const Container = Styled.div`
  display: flex;
  overflow:hidden;
  padding-left:15px;
  padding-right:15px;
  border-radius: ${props => props.theme.borderRadius};
  height:80px;
  align-items: center;

  :hover{
    box-shadow: ${props => props.theme.boxShadow};
    cursor:pointer;
    outline: none !important;
    background-color:white;
  }
  :active{
    box-shadow:none;
  }

  h5{
    margin-top:10px;
  }
  p{
    margin-top:-30px;
    font-size:14.5px;
  }

`
