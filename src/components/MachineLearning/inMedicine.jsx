import React, { Fragment, useState } from 'react'
import Styled from 'styled-components'

import CruFragment from '../crufragment'
import machine_learning6 from '../../images/machine_learning6.png'
import machine_learning7 from '../../images/machine_learning7.png'
import machine_learning8 from '../../images/machine_learning8.png'
import ImageModal from './imageModal'

const InMedicine = () => {
  const [showModal, toggleModal] = useState({
    visible: false,
    source: null,
  })

  return (
    <Fragment>
      <ImageModal
        visible={showModal.visible}
        source={showModal.source}
        closeModal={() => {
          toggleModal({ visible: false, source: null })
        }}
      />
      <Content>
        <div>
          <h4 style={{ marginTop: 0 }}>Research Purpose</h4>
          <p>
            There are different research purposes in the medicine field, and machine
            learning proposes different techniques to solve problems in each area:
          </p>
          <h5 className='text-muted'>Diagnostic</h5>
          <p>
            Medical diagnosis is the process of determining which disease or condition
            explains a person's symptoms and signs. Machine learning is being used to
            diagnose cancer, pneumonia, and other diseases, and with enough reliable
            datasets, it is often more accurate and faster at diagnosis than real doctors.
            Diagnostic problems can be solved by classification methods. For example, the
            below image shows the high algorithm performance on detecting the lung cancer
          </p>
          <Img
            src={machine_learning6}
            onClick={() => toggleModal({ visible: true, source: machine_learning6 })}
          />
          <h5 className='text-muted'>Prediction</h5>
          <p>
            Predictive analytics is the process of learning from historical data in order
            to make predictions about the future (or any unknown). For health care,
            predictive analytics will enable the best decisions to be made. Prediction
            problems can be solved by classification or regression methods.
          </p>
          <h5 className='text-muted'>Frequency</h5>
          <p>
            Frequency is used for epidemiological measurements to describe the occurrence
            of disease. Frequency problems can be solved by regression methods.
          </p>
          <h5 className='text-muted'>Association</h5>
          <p>
            Association is a statistical relationship between two or more events,
            characteristics or other variables - e.g., an association between exposure to
            X and a health effect, Y - which may not imply cause and effect. Association
            problems can be solved by regression methods.
          </p>
          <h5 className='text-muted'>Finding Similar Groups</h5>
          <p>
            Clustering can be used for finding similar groups of different elements and it
            is the process of analyzing, examining relationships in, and organizing
            theoretically the current knowledge in a field of study in order to add to an
            existing knowledge base and generate further questions for research.
            Clustering methods can be used for finding similar groups. For example, the
            below image shows the heatmap analysis of microarray data showing hierarchical
            clustering of differentially expressed genes.
          </p>
          <Img src={machine_learning7} />
        </div>
        <div>
          <h4>Health Data Types</h4>
          <p>
            The number of digitized health and wellness data increases day by day, which
            makes the opportunity for analyzing data through data science and machine
            learning methods. For data analysis, due to the complexity of the human
            condition, the data related to a patient would often be retrieved and
            integrated from multiple sources and should be analyzed from different
            aspects. Combining data from various resources, such as hospitals, clinics,
            etc., contributes to earning valuable knowledge. With the increase of the data
            size, some big data approaches should be considered in conjunction with
            machine learning algorithms to solve a problem.
          </p>
          <p>
            In the following, there is an organization of data types relating to different
            health and wellness sources.
          </p>
          <Img
            src={machine_learning8}
            onClick={() => toggleModal({ visible: true, source: machine_learning8 })}
          />
        </div>
      </Content>
      <CruFragment />
    </Fragment>
  )
}
export default InMedicine

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
    cursor: pointer;
`
