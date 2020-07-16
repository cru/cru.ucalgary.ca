import React, { Fragment } from 'react'
import Styled from 'styled-components'

import CruFragment from '../crufragment'
import intVsAcc from '../../images/int_vs_acc.png'


const InterpretabilityVsAccuracy = () => {
  return (
    <Fragment>
      <Content>
        <Img src={intVsAcc}/>
      </Content>
      <CruFragment />
    </Fragment>
  )
}
export default InterpretabilityVsAccuracy


const Content = Styled.div`
    padding-left: 2rem;
    padding-bottom: 2rem;
`

const Img = Styled.img`
    width: 100%;
    height: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
`