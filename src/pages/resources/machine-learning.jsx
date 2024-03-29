import React, { useState } from 'react'
import { ChevronDown, ChevronRight } from 'react-feather'
import { Collapse } from 'reactstrap'

import Layout from '../../containers/layout'
import Padding from '../../containers/padding'
import CruFragment from '../../components/crufragment'
import Intro from '../../components/machineLearning/intro'
import StepByStep from '../../components/machineLearning/stepByStep'
import Algorithms from '../../components/machineLearning/algorithms'
import Tools from '../../components/machineLearning/tools'
import InMedicine from '../../components/machineLearning/inMedicine'
import Summary from '../../components/machineLearning/summary'
import InterpretabilityVsAccuracy from '../../components/machineLearning/int_vs_acc'

const MachineLearningPage = () => {
  const [showOne, toggleOne] = useState(false)
  const [showTwo, toggleTwo] = useState(false)
  const [showThree, toggleThree] = useState(false)
  const [showFour, toggleFour] = useState(false)
  const [showFive, toggleFive] = useState(false)
  const [showSix, toggleSix] = useState(false)
  const [showSeven, toggleSeven] = useState(false)

  return (
    <Layout
      title='Machine Learning in Medicine'
      page='machine-learning'
      group='resources'
    >
      <div style={{ minHeight: '100vh' }}>
        <div style={{ height: 60 }} />
        <Padding>
          <h1 style={{ marginBottom: 0 }}>Machine Learning in Medicine</h1>
          <h5 className='text-muted' style={{ marginTop: 0 }}>
            The Clinical Research Unit provides a blue print for using machine learning in
            medicine
          </h5>
          <i>
            Method & Analytics Team - by Zara Aminolroaya, under supervision of Cord
            Lethebe
          </i>
          <div style={{ height: 55 }} />
          <p>
            The applications of machine learning (ML) to address medical field problems
            and the healthcare industry are increasing day by day. The Clinical Research
            Unit has provided the following article, which explains the difference between
            machine learning and statistics, steps to use machine learning, and different
            applications of machine learning in the medical field.
          </p>
          <div className='mt-5'>
            <div>
              <h5
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: 0,
                }}
                id='one'
                onClick={() => toggleOne(!showOne)}
              >
                {showOne ? (
                  <ChevronDown size={24} className='mr-2' />
                ) : (
                  <ChevronRight size={24} className='mr-2' />
                )}
                Intro - Machine Learning vs. Statistics
              </h5>
              <Collapse isOpen={showOne}>
                <Intro />
              </Collapse>
            </div>
            <div>
              <h5
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: 0,
                }}
                id='two'
                onClick={() => toggleTwo(!showTwo)}
              >
                {showTwo ? (
                  <ChevronDown size={24} className='mr-2' />
                ) : (
                  <ChevronRight size={24} className='mr-2' />
                )}
                Machine Learning Step by Step
              </h5>
              <Collapse isOpen={showTwo}>
                <StepByStep />
              </Collapse>
            </div>
            <div>
              <h5
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: 0,
                }}
                id='three'
                onClick={() => toggleThree(!showThree)}
              >
                {showThree ? (
                  <ChevronDown size={24} className='mr-2' />
                ) : (
                  <ChevronRight size={24} className='mr-2' />
                )}
                ML Algorithms
              </h5>
              <Collapse isOpen={showThree}>
                <Algorithms />
              </Collapse>
            </div>
            <div>
              <h5
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: 0,
                }}
                id='four'
                onClick={() => toggleFour(!showFour)}
              >
                {showFour ? (
                  <ChevronDown size={24} className='mr-2' />
                ) : (
                  <ChevronRight size={24} className='mr-2' />
                )}
                Tools
              </h5>
              <Collapse isOpen={showFour}>
                <Tools />
              </Collapse>
            </div>
            <div>
              <h5
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: 0,
                }}
                id='four'
                onClick={() => toggleFive(!showFive)}
              >
                {showFive ? (
                  <ChevronDown size={24} className='mr-2' />
                ) : (
                  <ChevronRight size={24} className='mr-2' />
                )}
                Interpretability Vs. Accuracy
              </h5>
              <Collapse isOpen={showFive}>
                <InterpretabilityVsAccuracy />
              </Collapse>
            </div>
            <div>
              <h5
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: 0,
                }}
                id='five'
                onClick={() => toggleSix(!showSix)}
              >
                {showSix ? (
                  <ChevronDown size={24} className='mr-2' />
                ) : (
                  <ChevronRight size={24} className='mr-2' />
                )}
                Machine Learning in Medicine
              </h5>
              <Collapse isOpen={showSix}>
                <InMedicine />
              </Collapse>
            </div>
            <div>
              <h5
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: 0,
                }}
                id='six'
                onClick={() => toggleSeven(!showSeven)}
              >
                {showSeven ? (
                  <ChevronDown size={24} className='mr-2' />
                ) : (
                  <ChevronRight size={24} className='mr-2' />
                )}
                Summary
              </h5>
              <Collapse isOpen={showSeven}>
                <Summary />
              </Collapse>
            </div>
          </div>
          <div style={{ height: 200 }} />
        </Padding>
      </div>
      <CruFragment />
      <div style={{ height: '100px' }} />
    </Layout>
  )
}

export default MachineLearningPage
