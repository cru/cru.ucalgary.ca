import React from 'react'
import Styled from 'styled-components'
import Layout from '../containers/layout'
import Padding from '../containers/padding'
import CruFragment from '../components/crufragment'

const MachineLearningPage = () => (
  <Layout title="Machine Learning in Medicine" page="machine-learning" group="resources" >
    <div style={{ minHeight: '100vh' }}>
      <div style={{ height: 60 }} />
      <Padding>
        <h1 style={{ marginBottom: 0 }}>Machine Learning in Medicine</h1>
        <h5 className='text-muted' style={{ marginTop: 0 }}>The Clinical Research Unit provides a blue print for using machine learning in medicine</h5>
        <i>Method & Analytics Team - by Zara Aminolroaya, under supervision of Cord Lethebe</i>
        <div style={{ height: 55 }} />
        <p>
          Machine learning and statistical learning are nearly related in many aspects but considering different perspectives on the same problem:
        </p>
        <p>
          <b>Statistics: </b>Statistics is defined as the study of collection, analysis, interpretation, presentation and organization of data.
        </p>
        <p>
          <b>Machine Learning: </b>Machine learning gives computers the ability to learn with being programmed in an explicit manner.
        </p>
        <div style={{ height: 200 }} />
      </Padding>
    </div>
    <CruFragment />
    <div style={{ height: '100px' }} />
  </Layout>
)

export default MachineLearningPage
