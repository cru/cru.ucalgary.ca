import React, { Fragment } from 'react'
import Styled from 'styled-components'
import CruFragment from '../crufragment'

const Research = () => {
  return (
    <Fragment>
      <Content>
        <div>
          <h5 className='text-muted' style={{ marginTop: 0 }}>Diagnostic</h5>
          <p>
            Medical diagnosis is the process of determining which disease or condition explains a person's symptoms and signs. Machine learning is being used to diagnose cancer, pneumonia, and other diseases, and it is more accurate and faster at diagnosis than real doctors. Diagnostic problems can be solved by classification methods.
          </p>
          <h5 className='text-muted'>Prediction</h5>
          <p>
            Predictive analytics is the process of learning from historical data in order to make predictions about the future (or any unknown). For health care, predictive analytics will enable the best decisions to be made. Prediction problems can be solved by classification methods.
          </p>
          <h5 className='text-muted'>Frequency</h5>
          <p>
            Frequency is used for epidemiological measurements to describe the occurence of disease. Frequency problems can be solved by regression methods.
          </p>
          <h5 className='text-muted'>Association</h5>
          <p>
            Association is a statistical relationship between two or more events, characteristics or other variables - e.g., an association between exposure to X and a health effect, Y - which may not imply cause and effect. Association problems can be solved by regression methods.
          </p>
          <h5 className='text-muted'>Finding Similar Groups</h5>
          <p>
            Clustering can be used for finding similar groups of different elements and it is the process of analyzing, examining relationships in, and organizing theoretically the current knowledge in a field of study in order to add to an existing knowledge base and generate further questions for research. Clustering methods can be used for finding similar groups.
          </p>
        </div>
      </Content>
      <CruFragment />
    </Fragment>
  )
}
export default Research


const Content = Styled.div`
    padding-left: 2rem;
    padding-bottom: 2rem;
`
