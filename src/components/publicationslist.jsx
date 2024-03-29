import React, { useState } from 'react'
import { Filter } from 'react-feather'

import Padding from '../containers/padding'
import Button from './button'
import PublicationQuery from './publicationquery'

const PublicationsList = () => {
  const [activeList, setActiveList] = useState('all')

  const filterSelected = () => {
    return '4px solid rgb(232, 56, 56, 0.6)'
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
            onClick={() => setActiveList('all')}
          >
            All
          </Button>
          <Button
            style={{
              width: 185,
              margin: 5,
              border: activeList === 'machineLearning' && filterSelected(),
            }}
            onClick={() => setActiveList('machineLearning')}
          >
            Machine Learning
            <Filter className='ml-2' size={15} color='grey' />
          </Button>
          <Button
            style={{
              width: 135,
              margin: 5,
              border: activeList === 'depression' && filterSelected(),
            }}
            onClick={() => setActiveList('depression')}
          >
            Depression
            <Filter className='ml-2' size={15} color='grey' />
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

export default PublicationsList
