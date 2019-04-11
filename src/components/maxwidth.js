import React, { Component } from "react"
import Styled from "styled-components"

class MaxWidth extends Component {
  render() {
    return <Container>{this.props.children}</Container>
  }
}
export default MaxWidth

const Container = Styled.div`
    display:static;
    max-width: ${props => props.theme.pageMaxWidth};
    margin: 0 auto;
`
