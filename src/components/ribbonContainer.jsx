import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Ribbon from '../images/svg-backgrounds/service-ribbon.svg'

const RibbonContainer = ({ title, description, icon }) => {
  return (
    <>
      <Container>
        <Content>
          <div style={{ height: '10px' }} />
          <FontAwesomeIcon
            style={{ fontSize: '25px', color: 'grey' }}
            icon={icon}
          />
          <h4>{title}</h4>
          <p>{description}</p>
        </Content>
      </Container>
    </>
  )
}

RibbonContainer.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
}

export default RibbonContainer

const Container = Styled.div`
    background-image:url(${Ribbon});
    background-repeat: no-repeat;
    background-size: cover;
    width:330px;
    height:445px;
    margin: 0 auto;
`

const Content = Styled.div`
    text-align:center;
    padding-top:40px;
    max-width:200px;
    margin:0 auto;
`
