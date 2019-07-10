import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Filter } from 'react-feather'

import PublicationLink from './publicationlink'
import Padding from '../containers/padding'
import Button from './button'

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

    const getPublicationsList = data => {
      const publicationsArray = []
      data.allPublicationsJson.edges.forEach(item =>
        publicationsArray.push(
          (item.node.group === activeList || activeList === 'all') && (
            <PublicationLink
              key={item.node.title}
              title={item.node.title}
              authors={item.node.authors}
              publisher={item.node.publisher}
              year={item.node.year}
              url={item.node.url}
            />
          )
        )
      )
      return publicationsArray
    }

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
            <StaticQuery
              query={graphql`
                query publicationsQuery {
                  allPublicationsJson {
                    edges {
                      node {
                        title
                        authors
                        publisher
                        year
                        url
                        group
                      }
                    }
                  }
                }
              `}
              render={data => <>{getPublicationsList(data)}</>}
            />
          </div>
        </Padding>
      </>
    )
  }
}

export default PublicationsList
