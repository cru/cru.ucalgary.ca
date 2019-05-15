import React, { Component } from "react"
import Styled from "styled-components"

class Padding extends Component {
  render() {
    return <Container>{this.props.children}</Container>
  }
}
export default Padding

const Container = Styled.div`
    padding-left:50px;
    padding-right:50px;

    @media only screen and (max-width: ${props =>
      props.theme.tabletBreakPoint}){
      padding-left:25px;
      padding-right:25px;

    }
`
