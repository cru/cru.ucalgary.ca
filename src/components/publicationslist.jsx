import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PublicationLink from './publicationlink'
import Padding from '../containers/padding'
import Button from './button'

class PublicationsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      machineLearning: true,
      depression: true,
      misc: true,
      mlbutton: false,
      dpbutton: false,
      allbutton: true,
    }
  }

  render() {
    const {
      machineLearning,
      depression,
      misc,
      mlbutton,
      dpbutton,
      allbutton,
    } = this.state

    const getCondition = group => {
      switch (group) {
        case 'machineLearning':
          return (machineLearning && 'block') || 'none'
        case 'depression':
          return (depression && 'block') || 'none'
        default:
          return (misc && 'block') || 'none'
      }
    }

    const getPublicationsList = data => {
      const publicationsArray = []
      data.allPublicationsJson.edges.forEach(item =>
        publicationsArray.push(
          <PublicationLink
            key={item.node.title}
            title={item.node.title}
            authors={item.node.authors}
            publisher={item.node.publisher}
            year={item.node.year}
            url={item.node.url}
            style={{
              display: getCondition(item.node.group),
            }}
          />
        )
      )
      return publicationsArray
    }

    const machineLearningClick = () => {
      this.setState({
        machineLearning: true,
        depression: false,
        misc: false,
        mlbutton: true,
        dpbutton: false,
        allbutton: false,
      })
    }
    const depressionClick = () => {
      this.setState({
        machineLearning: false,
        depression: true,
        misc: false,
        mlbutton: false,
        dpbutton: true,
        allbutton: false,
      })
    }
    const miscCLick = () => {
      this.setState({
        machineLearning: true,
        depression: true,
        misc: true,
        mlbutton: false,
        dpbutton: false,
        allbutton: true,
      })
    }

    const icon = () => {
      return (
        <>
          &nbsp;
          <FontAwesomeIcon style={{ fontSize: 12 }} icon="filter" />
        </>
      )
    }

    const filterSelected = () => {
      return '3px dotted red'
    }

    return (
      <>
        <Padding>
          <Button
            style={{
              margin: 5,
              width: 80,
              border: allbutton && filterSelected(),
            }}
            onClick={miscCLick}
          >
            All
          </Button>
          <Button
            style={{
              width: 185,
              margin: 5,
              border: mlbutton && filterSelected(),
            }}
            onClick={machineLearningClick}
          >
            Machine Learning
            {icon()}
          </Button>
          <Button
            style={{
              width: 135,
              margin: 5,
              border: dpbutton && filterSelected(),
            }}
            onClick={depressionClick}
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
        </Padding>
      </>
    )
  }
}

export default PublicationsList
