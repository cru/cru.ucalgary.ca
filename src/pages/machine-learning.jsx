import React from 'react'
import { ChevronDown, ChevronRight } from 'react-feather'

import Layout from '../containers/layout'
import Padding from '../containers/padding'
import CruFragment from '../components/crufragment'
import { Collapse } from 'reactstrap'

class MachineLearningPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showOne: false,
      showTwo: false,
      showThree: false,
      showFour: false,
      showFive: false,
      showSix: false,
      showSeven: false
    }

    this.toggleCollapse = this.toggleCollapse.bind(this)
  }

  toggleCollapse(event) {
    const { id } = event.target;
    const { showOne, showTwo, showThree, showFour, showFive, showSix, showSeven } = this.state;

    switch (id) {
      case "one":
        this.setState({
          showOne: !showOne,
        });
        break;
      case "two":
        this.setState({
          showTwo: !showTwo,
        });
        break;
      case "three":
        this.setState({
          showThree: !showThree,
        });
        break;
      case "four":
        this.setState({
          showFour: !showFour,
        });
        break;
      case "five":
        this.setState({
          showFive: !showFive,
        });
        break;
      case "six":
        this.setState({
          showSix: !showSix,
        });
        break;
      case "seven":
        this.setState({
          showSeven: !showSeven,
        });
        break;
      default:
        break;
    }
  }

  render() {
    const { showOne, showTwo, showThree, showFour, showFive, showSix, showSeven } = this.state

    return (
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
            <div className='mt-5'>
              <div >
                <h4 style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} id="one" onClick={this.toggleCollapse}>
                  {showOne ? <ChevronDown size={24} className="mr-2" /> : <ChevronRight size={24} className="mr-2" />}
                Intro - Machine Learning vs. Statistics
                </h4>
                <Collapse isOpen={showOne}>
                  <p>HELLO LOOK AT MEEEEEE</p>
                </Collapse>
              </div>
              <div>
                <h4 style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} id="two" onClick={this.toggleCollapse}>
                  {showTwo ? <ChevronDown size={24} className="mr-2" /> : <ChevronRight size={24} className="mr-2" />}
                Supervised Learning vs. Unsupervised Learning
                </h4>
                <Collapse isOpen={showTwo}>
                  <p>HELLO LOOK AT MEEEEEE</p>
                </Collapse>
              </div>
              <div >
                <h4 style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} id="three" onClick={this.toggleCollapse}>
                  {showThree ? <ChevronDown size={24} className="mr-2" /> : <ChevronRight size={24} className="mr-2" />}
                Research Purpose
                </h4>
                <Collapse isOpen={showThree}>
                  <p>HELLO LOOK AT MEEEEEE</p>
                </Collapse>
              </div>
              <div >
                <h4 style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} id="four" onClick={this.toggleCollapse}>
                  {showFour ? <ChevronDown size={24} className="mr-2" /> : <ChevronRight size={24} className="mr-2" />}
                ML Algorithms
                </h4>
                <Collapse isOpen={showFour}>
                  <p>HELLO LOOK AT MEEEEEE</p>
                </Collapse>
              </div>
              <div >
                <h4 style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} id="five" onClick={this.toggleCollapse}>
                  {showFive ? <ChevronDown size={24} className="mr-2" /> : <ChevronRight size={24} className="mr-2" />}
                Tools
                </h4>
                <Collapse isOpen={showFive}>
                  <p>HELLO LOOK AT MEEEEEE</p>
                </Collapse>
              </div>
              <div >
                <h4 style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} id="six" onClick={this.toggleCollapse}>
                  {showSix ? <ChevronDown size={24} className="mr-2" /> : <ChevronRight size={24} className="mr-2" />}
                Health Data Types
                </h4>
                <Collapse isOpen={showSix}>
                  <p>HELLO LOOK AT MEEEEEE</p>
                </Collapse>
              </div>
              <div >
                <h4 style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} id="seven" onClick={this.toggleCollapse}>
                  {showSeven ? <ChevronDown size={24} className="mr-2" /> : <ChevronRight size={24} className="mr-2" />}
                Interpretability vs. Accuracy
                </h4>
                <Collapse isOpen={showSeven}>
                  <p>HELLO LOOK AT MEEEEEE</p>
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
}

export default MachineLearningPage
