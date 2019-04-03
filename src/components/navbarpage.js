import React, { Component } from "react"
import Styled from "styled-components"

class NavBarPage extends Component {
  render() {
    const { toggle } = this.props

    const getToggle = () => {
      if (toggle === "0") {
        return "translate3d(-110vw, -10px, 0)"
      } else {
        return "translate3d(-8vw, -10px, 0)"
      }
    }

    const css = {
      transform: getToggle(),
    }

    return <Container style={css} />
  }
}
export default NavBarPage

const Container = Styled.div`
    z-index:99;
    position:absolute;
    background-color: ${props => props.theme.navBarPrimary};
    box-shadow: ${props => props.theme.boxShadow};
    height:100vh;
    width:100vw;
    transform: translate3d(-110vw, -10px, 0);
    transition: transform 0.3s linear;
    transform-style: flat;
    `
