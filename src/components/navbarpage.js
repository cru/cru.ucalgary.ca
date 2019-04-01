import React, { Component } from "react"
import Styled from "styled-components"

class NavBarPage extends Component {
  render() {
    const { toggle } = this.props

    const getToggle = () => {
      if (toggle === "0") {
        return "translate3d(-150vw, 0, 0)"
      } else {
        return "translate3d(0, -16px, 0)"
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
    z-index:0;
    position:fixed;
    background-color:#141414;
    height:100vh;
    width:100vw;
    transform: translate3d(-150vw, 0, 0);
    transition: transform 0.2s linear;
    transform-style: flat;
    `
