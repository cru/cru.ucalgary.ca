import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Trail, animated } from 'react-spring/renderprops'
import Styled from 'styled-components'
import Person from './person'

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
  return (
    <Trail
      items={everyone}
      from={{ transform: 'translate3d(0,-50px,0)', opacity: 0 }}
      to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
      keys={item => item.key}
    >
      {item => props => <animated.div style={props}>{item}</animated.div>}
    </Trail>
  )
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
                        fixed(width: 150, height: 150) {
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
        render={data => <Grid>{getPeopleList(data)}</Grid>}
      />
    </>
  )
}

export default PeopleList

const Grid = Styled.div`
display:flex;
flex-wrap: wrap;
`
