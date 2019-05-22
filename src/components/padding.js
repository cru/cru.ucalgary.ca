import React, { Component } from "react"
import Styled from "styled-components"

class Padding extends Component {
  render() {
    return <Container>{this.props.children}</Container>
  }
}
export default Padding

const Container = Styled.div`
    padding-left: ${props => props.theme.pageDesktopPadding};
    padding-right: ${props => props.theme.pageDesktopPadding};

    @media only screen and (max-width: ${props =>
      props.theme.tabletBreakPoint}){
      padding-left: ${props => props.theme.pageMobilePadding};
      padding-right: ${props => props.theme.pageMobilePadding};
    }
`
