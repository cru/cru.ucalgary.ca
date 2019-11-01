import React from 'react'
import Styled from 'styled-components'
import Fragment from '../images/svg-backgrounds/cru-fragment.svg'

const CruFragment = () => {
  return (
    <>
      <Container>
        <Image />
      </Container>
    </>
  )
}

CruFragment.propTypes = {}
export default CruFragment

const Image = Styled.div`
    text-align:center;
    align-content:center;
    background-image:url(${Fragment});
    background-repeat: no-repeat;
    height:100px;
    width:200px;   
    margin: 0 auto;
`

const Container = Styled.div`


`
