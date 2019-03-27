import React, { Component } from "react"
import Styled from "styled-components"

class NavBarPage extends Component {
  render() {
    const { toggle } = this.props
    return <Container style={{ display: toggle }} />
  }
}
export default NavBarPage

const Container = Styled.div`
    display:none;
    z-index:5;
    position:fixed;
    background-color:black;
    margin-top:-4vh;
    height:103vh;
    width:100vw;
`
