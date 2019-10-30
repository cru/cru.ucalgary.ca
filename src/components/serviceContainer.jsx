import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'

const ServiceContainer = ({ title, description, image }) => {
  return (
    <>
      <Container>
        <Content>
          <div style={{ height: '35px' }} />
          <img style={{ height: '60px' }} src={image} alt="" />
          <h4>{title}</h4>
          <p>{description}</p>
        </Content>
      </Container>
    </>
  )
}

ServiceContainer.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
}

export default ServiceContainer

const Container = Styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    width:330px;
    height:450px;
    margin: 0 auto;
`

const Content = Styled.div`
    text-align:center;
    padding-top:20px;
    max-width:220px;
    margin:0 auto;
    p{
      font-family: futura-pt, sans-serif;
      font-size: 17.5px;
    }
`
