import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Padding from '../containers/padding'

const CRUDescription = ({ style }) => {
  return (
    <div style={style}>
      <Padding>
        <Title>Better Data, Better Research</Title>
        <div style={{ height: '380px' }} />
        <Body>
          The Clinical Research Unit (CRU) is a core support centre of the
          Cumming School of Medicine (CSM).
        </Body>
      </Padding>
    </div>
  )
}

CRUDescription.propTypes = {
  style: PropTypes.node.isRequired,
}

export default CRUDescription

const Title = Styled.h1`
    text-align:left;
    max-width:500px;
    font-size:70px;
    background-color:white;
    @media only screen and (max-width: ${props =>
      props.theme.tabletBreakPoint}){
      font-size: 37px;
      max-width:400px;
  }
`

const Body = Styled.h4`
    margin: 0 auto;
    max-width:500px;
    text-align: center;
    background-color:white;
    font-family: futura-pt, sans-serif;
    font-size: 24px;
    font-weight: 500;

    @media only screen and (max-width: ${props =>
      props.theme.tabletBreakPoint}){
      font-size: 20px;
      max-width:400px;
  }
`
