import React, { Fragment } from 'react'
import Styled from 'styled-components'
import CruFragment from '../crufragment'

const Tools = () => {
  return (
    <Fragment>
      <Content>
        <p style={{ marginTop: 0 }}>Some machine learning and data mining tools that require minimal experience include:</p>
        <ul>
          <li><a rel="noopener noreferrer" target="_blank" href="https://orange.biolab.si/">Orange</a></li>
          <li><a rel="noopener noreferrer" target="_blank" href="https://www.cs.waikato.ac.nz/ml/weka/">WEKA</a></li>
          <li><a rel="noopener noreferrer" target="_blank" href="https://www.knime.com/">KNIME</a></li>
          <li><a rel="noopener noreferrer" target="_blank" href="https://rapidminer.com/">RapidMiner</a></li>
        </ul>
        <br />
        <p>For working with more powerful tools as below, some data mining and programming experience is required:</p>
        <ul>
          <li><a rel="noopener noreferrer" target="_blank" href="https://scikit-learn.org/stable/">scikit-learn</a></li>
          <li><a rel="noopener noreferrer" target="_blank" href="https://www.tensorflow.org/">TensorFlow</a></li>
          <li><a rel="noopener noreferrer" target="_blank" href="https://pytorch.org/">PyTorch</a></li>
          <li><a rel="noopener noreferrer" target="_blank" href="https://keras.io/">Keras</a></li>
          <li><a rel="noopener noreferrer" target="_blank" href="https://mahout.apache.org/">Apache Mahout</a></li>
          <li><a rel="noopener noreferrer" target="_blank" href="http://accord-framework.net/">Accord.NET</a></li>
          <li><a rel="noopener noreferrer" target="_blank" href="https://www.shogun-toolbox.org/">Shogun</a></li>
          <li><a rel="noopener noreferrer" target="_blank" href="https://colab.research.google.com/notebooks/intro.ipynb">Colab</a></li>
        </ul>
      </Content>
      <CruFragment />
    </Fragment>
  )
}
export default Tools


const Content = Styled.div`
    padding-left: 2rem;
    padding-bottom: 2rem;
`