import React from 'react'
import Styled from 'styled-components'
import { Spring } from 'react-spring/renderprops'
import hexagonPattern from '../images/svg-backgrounds/cru-hex.svg'

const CRUHexPattern = () => {
  return (
    <>
      <Spring
        from={{ transform: 'translate3d(-50px,-50px,0)', opacity: 0 }}
        to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
      >
        {props => (
          <div style={props}>
            <Container />
          </div>
        )}
      </Spring>
    </>
  )
}

export default CRUHexPattern

const Container = Styled.div`
    background-image:url(${hexagonPattern});
    background-repeat: no-repeat;
    background-size: cover;
    height:2000px;
    width:100%;    
    text-align:center;
    @media only screen and (max-width: ${props =>
      props.theme.tabletBreakPoint}){
        background-image:url(${hexagonPattern});
        background-repeat: no-repeat;
        background-position: 0px 150px;
        margin-left:27px;
        height:2200px;
        width:100%;    
     }
`
