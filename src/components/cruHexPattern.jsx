import React from 'react'
import Styled from 'styled-components'
import { Spring, animated } from '@react-spring/web'

import hexagonPattern from '../images/svg-backgrounds/cru-hex.png'
import newAgeLogo from '../images/svg-backgrounds/new_age_logo.png'

const CRUHexPattern = () => {
  return (
    <div style={{ display: 'inline-block' }}>
      <Spring
        native
        from={{ transform: 'translate3d(-50px,50px,50px)', opacity: 0 }}
        to={{ transform: 'translate3d(0,0,0)', opacity: 1 }}
      >
        {(props) => (
          <animated.div style={props}>
            <HexPattern />
          </animated.div>
        )}
      </Spring>
    </div>
  )
}

export default CRUHexPattern

const HexPattern = Styled.div`
    content: url(${hexagonPattern});
    object-fit: cover;   

    @media only screen and (max-width: ${(props) => props.theme.tabletBreakPoint}){
        content:url(${newAgeLogo});
        object-fit: contain;
        width: 80%;
        margin: auto;
        margin-top: 2rem;
     }
`
