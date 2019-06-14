import React from 'react'
import Styled from 'styled-components'

const ConstructionBanner = () => {
  return (
    <>
      <Banner>
        <p>
          <span role="img" aria-label="Construction warning">
            🚧 👷🏽‍&nbsp;
          </span>
          This page is currently under construction&nbsp;&nbsp;&nbsp;&nbsp;
          <span role="img" aria-label="Construction warning">
            🚧
          </span>
        </p>
      </Banner>
    </>
  )
}
export default ConstructionBanner

const Banner = Styled.div`
    width: 100%;
    height:24px;
    bottom:0;
    position:fixed;
    max-width: ${props => props.theme.pageMaxWidth};
    background-color:white;
    text-align:center;
    outline: 3px solid ${props => props.theme.brandSecondColor};
    margin:2px;
    p{
        padding-top:3px;
        margin: 0 auto;
        color:black;
        font-size:15px;
        font-weight:700;
    }
`
