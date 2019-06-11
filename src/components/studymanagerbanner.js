import React, { Component } from "react"
import Styled from "styled-components"

class StudyManagerBanner extends Component {
  render() {
    return (
      <>
        <Container>
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
            cillum. Non veniam ex officia cillum. Fugiat veniam sunt adipisicing
            velit deserunt non et amet nulla velit consequat anim reprehenderit.
          </Body>
        </Container>
      </>
    )
  }
}

export default StudyManagerBanner

const Container = Styled.div`
    height:80vh;
    width:100%;
    background: #FC5C7D;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, ${props =>
      props.theme.studyManagerBackgroundPrime}, ${props =>
  props.theme.studyManagerBackgroundSec});  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, ${props =>
      props.theme.studyManagerBackgroundPrime},  ${props =>
  props.theme
    .studyManagerBackgroundSec}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    text-align:center;
    border: 2px dotted white;
`

const Title = Styled.h1`
    margin: 0 auto;
    color:white;
    padding-top:18vh;
`

const Body = Styled.p`
    padding-top:80px;
    color:white;
    max-width:600px;
    margin: 0 auto;
    font-size:17px;
`
