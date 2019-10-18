import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import Padding from '../containers/padding'

const CRUDescription = ({ style }) => {
  return (
    <div style={style}>
      <Padding>
        <Title>Better Data, Better Research</Title>
        <div style={{ height: '40px' }} />
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
    margin: 0 auto;
    text-align:center;
    max-width:500px;
    margin:0 auto;
    font-size:55px;
    background-color:white;
    @media only screen and (max-width: ${props =>
      props.theme.tabletBreakPoint}){
      font-size: 45px;
      max-width:400px;
  }
`

const Body = Styled.h4`
    margin: 0 auto;
    max-width:600px;
    text-align: center;
    background-color:white;

    @media only screen and (max-width: ${props =>
      props.theme.tabletBreakPoint}){
      font-size: 20px;
      max-width:400px;
  }
`
