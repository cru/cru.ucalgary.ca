import React from 'react'
import Styled from 'styled-components'
import Padding from '../containers/padding'
import BackgroundImage from '../images/svg-backgrounds/blue-crop-bottom.svg'
import cruHashImage from '../images/cru-hash.png'

const IntroHero = () => {
  return (
    <>
      <Container>
        <Padding>
          <Title>Better Data, Better Reserach</Title>

          <BodyContainer>
            <Logo src={cruHashImage} />
            <Body>
              The
              <span> </span>
              <span style={{ color: 'red', fontWeight: '700' }}>
                Clinical Research Unit
              </span>
              <span> </span>
              (CRU) is a core support centre of the Cumming School of Medicine
              (CSM). The mandate of the CRU is to support university researchers
              and their collegues in the delivery of world class clinical
              research data, methods and analytics support services.
            </Body>
          </BodyContainer>
        </Padding>
      </Container>
    </>
  )
}

export default IntroHero

const Container = Styled.div`
    background-image:url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: 155vh, 100%;
    height:100vh;
    width:100%;    
    text-align:center;
`

const Title = Styled.h1`
    max-width:600px;
    margin:0 auto;
    padding-top:20vh;
    color: ${props => props.theme.fontPrimColor};
    font-size:38px;
`

const BodyContainer = Styled.div`
    display:flex;
    justify-content: center; /* center items vertically, in this case */
    margin: 0 auto;
    padding-top:6vh;
`

const Logo = Styled.img`
    height:120px;
`

const Body = Styled.p`
    max-width: 400px;
    padding-left:10px;
    text-align:left;
`
