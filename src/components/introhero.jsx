import React from 'react'
import Styled from 'styled-components'
import Padding from '../containers/padding'
import BackgroundImage from '../images/svg-backgrounds/blue-crop-bottom.svg'
// import cruHashImage from '../images/cru-hash.png'

const IntroHero = () => {
  return (
    <>
      <Container>
        <Padding />
      </Container>
    </>
  )
}

export default IntroHero

const Container = Styled.div`
    background-image:url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: 155vh, 100%;
    height:100vh;
    width:100%;    
    text-align:center;
`

// const Title = Styled.h1`
//     max-width:600px;
//     margin:0 auto;
//     padding-top:20vh;
//     color: ${props => props.theme.fontPrimColor};
//     font-size:38px;
// `

// const BodyContainer = Styled.div`
//     display:flex;
//     justify-content: center; /* center items vertically, in this case */
//     margin: 0 auto;
//     padding-top:6vh;
// `

// const Logo = Styled.img`
//     height:120px;
// `

// const Body = Styled.p`
//     max-width: 400px;
//     padding-left:10px;
//     text-align:left;
// `
