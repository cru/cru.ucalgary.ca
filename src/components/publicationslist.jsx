import React, { Component } from 'react'
import { Filter } from 'react-feather'

import Padding from '../containers/padding'
import Button from './button'
import PublicationQuery from './publicationquery'

class PublicationsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeList: 'all',
    }
  }

  setList(x) {
    this.setState({ activeList: x })
  }

  render() {
    const { activeList } = this.state

    const icon = () => {
      return (
        <>
          <span> </span>
          <Filter style={{ marginBottom: '-3px' }} size={15} color="grey" />
        </>
      )
    }

    const filterSelected = () => {
      return '3px solid rgb(232, 56, 56)'
    }

    return (
      <>
        <Padding>
          <div style={{ minHeight: '90vh' }}>
            <Button
              style={{
                margin: 5,
                width: 80,
                border: activeList === 'all' && filterSelected(),
              }}
              onClick={() => this.setList('all')}
            >
              All
            </Button>
            <Button
              style={{
                width: 185,
                margin: 5,
                border: activeList === 'machineLearning' && filterSelected(),
              }}
              onClick={() => this.setList('machineLearning')}
            >
              Machine Learning
              {icon()}
            </Button>
            <Button
              style={{
                width: 135,
                margin: 5,
                border: activeList === 'depression' && filterSelected(),
              }}
              onClick={() => this.setList('depression')}
            >
              Depression
              {icon()}
            </Button>
            <br />
            <br />
            <br />
            <PublicationQuery group={activeList} key={activeList} />
          </div>
        </Padding>
      </>
    )
  }
}

export default PublicationsList
