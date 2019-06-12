import React, { Component } from "react"
import Styled from "styled-components"
import Padding from "../containers/padding"
import BackgroundImage from "../images/svg-backgrounds/blue-crop-bottom.svg"

class IntroHero extends Component {
  render() {
    return (
      <>
        <Container>
          <Padding>
            <Title>Better Data, Better Reserach</Title>
            <Body>
              The <span style = {{color:"white", fontWeight:"700"}}>Clinical Research Unit</span> (CRU) is a core support centre of the
              Cumming School of Medicine (CSM). The mandate of the CRU is to
              support university researchers and their collegues in the delivery
              of world class clinical research data, methods and analytics
              support services.
            </Body>
          </Padding>
        </Container>
      </>
    )
  }
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
    max-width:500px;
    margin:0 auto;
    padding-top:20vh;
    color: ${props => props.theme.fontPrimColor};
`

const Body = Styled.p`
    max-width: 600px;
    margin: 0 auto;
    padding-top:6vh;
`
