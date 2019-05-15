import React, { Component } from "react"
import Styled from "styled-components"

class NavBarPage extends Component {
  render() {
    const { toggle } = this.props

    const getToggle = () => {
      if (toggle === false) {
        return "translate3d(-110vw, -15px, 0)"
      } else {
        return "translate3d(-15px, -15px, 0)"
      }
    }

    const css = {
      transform: getToggle(),
    }

    return (
      <Container style={css}>
        <CenterContent>{this.props.children}</CenterContent>
      </Container>
    )
  }
}
export default NavBarPage

const Container = Styled.div`
    position:absolute;
    background-color: ${props => props.theme.navBarPrimary};
    box-shadow: ${props => props.theme.boxShadow};
    height:100vh;
    width:100vw;
    transform: translate3d(-110vw, -10px, 0);
    transition: transform 0s linear;
    transform-style: flat;
    display: flex;
    align-items: center;
`

const CenterContent = Styled.div`
  margin: 0 auto;
  width:98px
`
