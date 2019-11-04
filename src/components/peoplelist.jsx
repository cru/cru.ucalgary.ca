import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Person from './person'
// import PropTypes from 'prop-types'

const getPeopleList = data => {
  const everyone = []
  data.allPeopleJson.edges.forEach(item =>
    everyone.push(
      <Person
        name={item.node.name}
        comment={item.node.comments}
        fixed={item.node.image.src.childImageSharp.fixed}
      />
    )
  )
  return everyone
}

const PeopleList = () => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query peopleQuery {
            allPeopleJson {
              edges {
                node {
                  name
                  comments
                  image {
                    src {
                      childImageSharp {
                        fixed(width: 125, height: 125) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => <>{getPeopleList(data)}</>}
      />
    </>
  )
}

export default PeopleList
