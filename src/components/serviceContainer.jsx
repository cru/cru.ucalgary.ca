import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'

const ServiceContainer = ({ title, description, image }) => {
  return (
    <>
      <div>
        <Content>
          <div style={{ height: '35px' }} />
          <img style={{ height: '78px' }} src={image} alt="" />
          <h4>{title}</h4>
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
    max-width:280px;
    p{
      text-align:left;
      font-family: futura-pt, sans-serif;
      font-size: 19px;
      margin: 0 auto;
      padding-left:0px;
    }
    h5{
      text-align:left;
      margin: 0 auto;
      padding-top:20px;
    }
    @media only screen and (max-width: ${props =>
      props.theme.mobileBreakPoint}){
      max-width:auto
    }

`
