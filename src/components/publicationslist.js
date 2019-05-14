import React from "react"
import { StaticQuery, graphql } from "gatsby"

import PublicationLink from "./publicationlink"

const PublicationsList = () => (
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
            }
          }
        }
      }
    `}
    render={data => <>{getPublicationsList(data)}</>}
  />
)

export default PublicationsList

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
      />
    )
  )
  return publicationsArray
}
