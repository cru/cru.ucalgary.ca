import React, { Component } from "react"
import Styled from "styled-components"
import Padding from "../containers/padding"
import BackgroundImage from "../images/svg-backgrounds/green-crop-top.svg"

class StudyManagerBanner extends Component {
  render() {
    return (
      <>
        <Container>
          <Padding>
            <Title>
              Study Manager{" "}
              <span style={{ fontSize: "29px" }} role="img">
                🧪
              </span>
            </Title>
            <Body>
              Ex aliqua eiusmod reprehenderit eu excepteur sint elit ad labore
              sit. Adipisicing incididunt anim eiusmod excepteur dolore dolor
              nostrud nostrud minim eu quis laborum magna. Nulla reprehenderit
              veniam Lorem et nulla id et consequat velit cillum commodo.
              Voluptate labore nisi velit laboris consectetur cillum cillum
              cillum. Non veniam ex officia cillum. Fugiat veniam sunt
              adipisicing velit deserunt non et amet nulla velit consequat anim
              reprehenderit.
            </Body>
          </Padding>
        </Container>
      </>
    )
  }
}

export default StudyManagerBanner

const Container = Styled.div`
    height:80vh;
    width:100%;
    background-image:url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: 155vh, 200vh;
    text-align:center;
    border: 2px dotted white;
`

const Title = Styled.h2`
    margin: 0 auto;
    color:black;
    padding-top:26vh;
    font-size:30px;
`

const Body = Styled.p`
    padding-top:80px;
    color:black;
    max-width:600px;
    margin: 0 auto;
    font-size:17px;
    font-weight:500;
`
