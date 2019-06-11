import React, { Component } from "react"
import Styled from "styled-components"
import Padding from "./padding"

class IntroHero extends Component {
  render() {
    return (
      <>
        <Container>
          <Padding>
            <Title>better data, better reserach</Title>
            <Body>
              The Clinical Research Unit (CRU) is a core support centre of the
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
    height:100vh;
    width:100%;    
    text-align:center;
    border: 2px dotted white;
`

const Title = Styled.h1`
    max-width:500px;
    margin:0 auto;
    padding-top:20vh;
`

const Body = Styled.p`
    max-width: 600px;
    margin: 0 auto;
    padding-top:6vh;
`
