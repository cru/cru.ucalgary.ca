import React, { Component } from "react"
import Styled from "styled-components"

class ConstructionBanner extends Component {
  render() {
    return (
      <>
        <Banner>
          <p>
            🚧 👷🏽‍ This website is currently under
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
    height:24px;
    max-width: ${props => props.theme.pageMaxWidth};
    background-color:#D3202E;
    text-align:center;
    outline: 2px dotted black;
    margin:2px;
    p{
        padding-top:3px;
        margin: 0 auto;
        color:white;
        font-size:14px;
        font-weight:700;
    }

`
