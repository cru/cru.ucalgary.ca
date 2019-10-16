import React from 'react'
import Styled from 'styled-components'
import Padding from '../containers/padding'
import CRUDescription from './cruDescription'
import Balloons from '../images/svg-backgrounds/cru-hex.svg'

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
    background-image:url(${Balloons});
    background-repeat: no-repeat;
    background-size: cover;
    height:2000px;
    width:100%;    
    text-align:center;
`

const Title = Styled.h1`
    max-width:500px;
    margin:0 auto;
    padding-top:20vh;
    font-size:55px;
`
