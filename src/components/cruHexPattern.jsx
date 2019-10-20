import React from 'react'
import Styled from 'styled-components'
import { Spring } from 'react-spring/renderprops'
import hexagonPattern from '../images/svg-backgrounds/cru-hex.svg'
import newAgeLogo from '../images/svg-backgrounds/new_age_logo.svg'

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
        background-image:url(${newAgeLogo});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 400px;
        margin-top:300px;
        margin-bottom:-200px;
     }
`
