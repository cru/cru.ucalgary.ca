import React, { Fragment } from 'react'
import Styled from 'styled-components'
import CruFragment from '../crufragment'
import PublicationLink from '../publicationlink'

const Tools = () => {
  return (
    <Fragment>
      <Content>
        Some machine learning and data mining tools that require minimal experience
        include:
        <ul>
          <li>
            <PublicationLink
              title='Orange'
              url='https://orange.biolab.si/'
              style={{ padding: 0 }}
            />
          </li>
          <li>
            <PublicationLink
              title='WEKA'
              url='https://www.cs.waikato.ac.nz/ml/weka/'
              style={{ padding: 0 }}
            />
          </li>
          <li>
            <PublicationLink
              title='KNIME'
              url='https://www.knime.com/'
              style={{ padding: 0 }}
            />
          </li>
          <li>
            <PublicationLink
              title='RapidMiner'
              url='https://rapidminer.com/'
              style={{ padding: 0 }}
            />
          </li>
        </ul>
        <br />
        For working with more powerful tools as below, some data mining and programming
        experience is required:
        <ul>
          <li>
            <PublicationLink
              title='scikit-learn'
              url='https://scikit-learn.org/stable/'
              style={{ padding: 0 }}
            />
          </li>
          <li>
            <PublicationLink
              title='TensorFlow'
              url='https://www.tensorflow.org/'
              style={{ padding: 0 }}
            />
          </li>
          <li>
            <PublicationLink
              title='PyTorch'
              url='https://pytorch.org/'
              style={{ padding: 0 }}
            />
          </li>
          <li>
            <PublicationLink
              title='Keras'
              url='https://keras.io/'
              style={{ padding: 0 }}
            />
          </li>
          <li>
            <PublicationLink
              title='Apache Mahout'
              url='https://mahout.apache.org/'
              style={{ padding: 0 }}
            />
          </li>
          <li>
            <PublicationLink
              title='Accord.NET'
              url='http://accord-framework.net/'
              style={{ padding: 0 }}
            />
          </li>
          <li>
            <PublicationLink
              title='Shogun'
              url='https://www.shogun-toolbox.org/'
              style={{ padding: 0 }}
            />
          </li>
          <li>
            <PublicationLink
              title='Colab'
              url='https://colab.research.google.com/notebooks/intro.ipynb'
              style={{ padding: 0 }}
            />
          </li>
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
