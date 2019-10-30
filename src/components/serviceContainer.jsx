import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'

const ServiceContainer = ({ title, description, image }) => {
  return (
    <>
      <div>
        <Content>
          <div style={{ height: '35px' }} />
          <img style={{ height: '68px' }} src={image} alt="" />
          <h5 style={{ maxWidth: 150 }}>{title}</h5>
          <p>{description}</p>
        </Content>
      </div>
    </>
  )
}

ServiceContainer.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
}

export default ServiceContainer

const Content = Styled.div`
    text-align:left;
    max-width:270px;
    p{
      font-family: futura-pt, sans-serif;
      font-size: 18px;
    }
    @media only screen and (max-width: ${props =>
      props.theme.mobileBreakPoint}){
      max-width:auto;
    }
`
