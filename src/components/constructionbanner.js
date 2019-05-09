import React, { Component } from "react"
import Styled from "styled-components"

class ConstructionBanner extends Component {
  render() {
    return (
      <>
        <Banner>
          <p>
            🚧&nbsp;&nbsp;👷🏽‍&nbsp;&nbsp;&nbsp;This website is currently under
            construction&nbsp;&nbsp;&nbsp;&nbsp;🚧
          </p>
        </Banner>
      </>
    )
  }
}

export default ConstructionBanner

const Banner = Styled.div`

    position: fixed;
    bottom:0;
    width: 100%;
    height:25px;
    max-width: ${props => props.theme.pageMaxWidth};
    background-color:#F7C906;
    text-align:center;
    outline: 2px dotted black;
    p{
        margin: 0 auto;
        color:black;
        font-size:14.5px;
    }

`
