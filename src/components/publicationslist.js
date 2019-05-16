import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"

import PublicationLink from "./publicationlink"
import Padding from "./padding"
import Button from "./button"

class PublicationsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      machineLearning: false,
      depression: true,
      misc: false,
    }
  }

  render() {
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

    const getCondition = group => {
      switch (group) {
        case "machineLearning":
          return (this.state.machineLearning && "block") || "none"
        case "depression":
          return (this.state.depression && "block") || "none"
        default:
          return (this.state.misc && "block") || "none"
      }
    }

    const machineLearningClick = () => {
      this.setState({
        machineLearning: true,
        depression: false,
        misc: false,
      })
    }
    const depressionClick = () => {
      this.setState({
        machineLearning: false,
        depression: true,
        misc: false,
      })
    }
    const miscCLick = () => {
      this.setState({
        machineLearning: true,
        depression: true,
        misc: true,
      })
    }

    return (
      <>
        <Padding>
          <Button style={{ margin: 5 }} onClick={miscCLick}>
            All
          </Button>
          <Button
            style={{ width: 180, margin: 5 }}
            onClick={machineLearningClick}
          >
            Machine Learning
          </Button>
          <Button style={{ width: 130, margin: 5 }} onClick={depressionClick}>
            Depression
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
