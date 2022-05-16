import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import Styled from 'styled-components'

const Partner = ({ href, image }) => {
  return (
    <Container>
      <a href={href} rel='noopener noreferrer' target='_blank'>
        <GatsbyImage image={image} />
        {/* <h5>{name}</h5> */}
      </a>
    </Container>
  )
}
Partner.propTypes = {
  href: PropTypes.node.isRequired,
  fixed: PropTypes.object.isRequired,
}

export default Partner

const Container = Styled.div`
  display: flex;
  overflow:hidden;
  padding-left:15px;
  padding-right:15px;
  border-radius: ${(props) => props.theme.borderRadius};
  height:80px;
  align-items: center;
  transition: all ${(props) => props.theme.boxShadowTrans};


  :hover{
    box-shadow: ${(props) => props.theme.boxShadow};
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
