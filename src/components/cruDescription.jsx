import React from 'react'
import Styled from 'styled-components'
import Padding from '../containers/padding'

const CRUDescription = () => {
  return (
    <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
      <Padding>
        <Title>Better Data Better Research</Title>
        <Body>
          The <b>Clinical Research Unit</b> (CRU) is a core research support centre of the
          Cumming School of Medicine (CSM).
        </Body>
      </Padding>
    </div>
  )
}

export default CRUDescription

const Title = Styled.h1`
    text-align:left;
    max-width:390px;
    font-size:70px;
    background-color:white;
    line-height:70px;
    @media only screen and (max-width: ${(props) => props.theme.tabletBreakPoint}){
      font-size: 60px;
      line-height:60px;
      max-width:350px;

  }
`

const Body = Styled.h4`
    max-width:430px;
    text-align: left;
    background-color:white;
    font-family: futura-pt, sans-serif;
    font-size: 24px;
    font-weight: 500;
    margin-top:-20px;

    @media only screen and (max-width: ${(props) => props.theme.tabletBreakPoint}){
      font-size: 24px;
      max-width:400px;

  }
`
