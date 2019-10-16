import React from 'react'
import Styled from 'styled-components'
import Padding from '../containers/padding'
import CRUDescription from './cruDescription'
import hexagonPattern from '../images/svg-backgrounds/cru-hex.svg'

const IntroHero = () => {
  return (
    <>
      <Container>
        <Padding>
          <Title>Better Data, Better Research</Title>
          <div style={{ height: '40px' }} />
          <CRUDescription />
        </Padding>
      </Container>
    </>
  )
}

export default IntroHero

const Container = Styled.div`
    background-image:url(${hexagonPattern});
    background-repeat: no-repeat;
    background-size: cover;
    height:2000px;
    width:100%;    
    text-align:center;
    @media only screen and (max-width: ${props =>
      props.theme.tabletBreakPoint}){
        background-image:url(${hexagonPattern});
        background-repeat: no-repeat;
        background-position: 0px 300px; 

        height:2500px;
        width:100%;    
     }
`

const Title = Styled.h1`
    max-width:500px;
    margin:0 auto;
    padding-top:20vh;
    font-size:55px;
    background-color:white;
`
