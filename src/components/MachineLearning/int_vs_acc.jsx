import React, { Fragment } from 'react'
import Styled from 'styled-components'
import CruFragment from '../crufragment'
import machine_learning5 from '../../images/machine_learning5.png'

const InterpretabilityVsAccuracy = () => {
  return (
    <Fragment>
      <Content>
        <div>
          <p style={{ marginTop: 0 }}>
            There is a tradeoff between the predictive accuracy of a model and how easy
            the model is to interpret. For example, linear regression is a simple model
            with a few parameters which is easy to interpret. However, it may not have
            sufficient predictive power for particular use cases. On the other hand,
            models like neural networks with millions of parameters will often highly
            perform for prediction. However, these complex models do not always make
            business sense and it would be hard to explain to clients how models made
            decisions.
          </p>
          <p>
            It is important to deliver a project to a business client and build confidence
            in the algorithmic approaches. There are different ways to increase the
            understandability of machine learning results for a client user. One of them
            is to explain how different inputs affect the model's performance.
          </p>
          <Img src={machine_learning5} />
        </div>
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
    display: block;
    width: 80%;
    height: auto;
    margin-top: 3rem;
    margin-bottom: 3rem;
    margin-left: auto;
    margin-right: auto;
`
