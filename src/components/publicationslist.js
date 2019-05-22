import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"

import PublicationLink from "./publicationlink"
import Padding from "./padding"
import Button from "./button"

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

    return (
      <>
        <Padding>
          <Button
            style={{
              margin: 5,
              backgroundColor: this.state.allbutton && "#d90006",
              borderColor: this.state.allbutton && "transparent",
              color: this.state.allbutton && "white",
            }}
            onClick={miscCLick}
          >
            All
          </Button>
          <Button
            style={{
              width: 180,
              margin: 5,
              backgroundColor: this.state.mlbutton && "#d90006",
              borderColor: this.state.mlbutton && "transparent",
              color: this.state.mlbutton && "white",
            }}
            onClick={machineLearningClick}
          >
            Machine Learning
          </Button>
          <Button
            style={{
              width: 130,
              margin: 5,
              backgroundColor: this.state.dpbutton && "#d90006",
              borderColor: this.state.dpbutton && "transparent",
              color: this.state.dpbutton && "white",
            }}
            onClick={depressionClick}
          >
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
