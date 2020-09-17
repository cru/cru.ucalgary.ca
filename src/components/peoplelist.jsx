import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Trail, animated } from 'react-spring/renderprops'
import Styled from 'styled-components'
import Person from './person'

// Use this tool to collect RGB from people
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool

const getPeopleList = data => {
  const everyone = []
  data.allPeopleJson.edges.forEach(item =>
    everyone.push(
      <PersonContainer key={item.node.name}>
        <Person
          name={item.node.name}
          title={item.node.title}
          comment={item.node.comments}
          fixed={item.node.image.src.childImageSharp.fixed}
          color={item.node.image.color}
        />
      </PersonContainer>
    )
  )
  return (
    <Trail
      native
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
                  title
                  comments
                  image {
                    color
                    src {
                      childImageSharp {
                        fixed(width: 160, height: 160, quality: 100) {
                          ...GatsbyImageSharpFixed_withWebp
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
const PersonContainer = Styled.div`
    max-width:160px;
    margin-bottom:55px;
    margin-right:40px;
`
