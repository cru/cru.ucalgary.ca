import React, { Component } from "react"
import Styled from "styled-components"
import Padding from "./padding"
import bannerImage from "../images/pawel-czerwinski-capsol.png"

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
    background-image:url(${bannerImage});
    background-size:cover;
    background-repeat: no-repeat;
    text-align:center;
    border: 2px dotted white;
`

const Title = Styled.h1`
    margin: 0 auto;
    color:black;
    padding-top:18vh;
`

const Body = Styled.p`
    padding-top:80px;
    color:black;
    max-width:600px;
    margin: 0 auto;
    font-size:17px;
    font-weight:700;
`
