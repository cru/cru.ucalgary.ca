import React from 'react'
import Styled from 'styled-components'
import { Spring } from 'react-spring/renderprops'
import hexagonPattern from '../images/svg-backgrounds/cru-hex.svg'

const CRUHexPattern = () => {
  return (
    <>
      <Spring
        from={{ transform: 'translate3d(-50px,-50px,-50px)', opacity: 0 }}
        to={{ transform: 'translate3d(0,0,0)', opacity: 1 }}
      >
        {props => (
          <div style={props}>
            <Background />
          </div>
        )}
      </Spring>
    </>
  )
}

export default CRUHexPattern

const Background = Styled.div`
    background-image:url(${hexagonPattern});
    background-repeat: no-repeat;
    background-size: cover;
    height:800px;
    width:100%;    
    text-align:center;
    @media only screen and (max-width: ${props =>
      props.theme.tabletBreakPoint}){
        background-image:url(${hexagonPattern});
        background-repeat: no-repeat;
        background-position: 35px 100px; 
        height:900px;
        width:100%;
        margin-top:50px;
        margin-bottom:50px;
     }
`
