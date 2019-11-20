import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Trail, animated } from 'react-spring/renderprops'
import Styled from 'styled-components'
import Partner from './Partner'

const getPartnersList = data => {
  const everyone = []
  data.allPartnersJson.edges.forEach(item =>
    everyone.push(
      <PersonContainer>
        <Partner
          href={item.node.href}
          fixed={item.node.image.src.childImageSharp.fixed}
        />
      </PersonContainer>
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

const PartnerList = () => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query partnerQuery {
            allPartnersJson {
              edges {
                node {
                  href
                  image {
                    src {
                      childImageSharp {
                        fixed(width: 140) {
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
        render={data => <Grid>{getPartnersList(data)}</Grid>}
      />
    </>
  )
}

export default PartnerList

const Grid = Styled.div`
    display:flex;
    flex-wrap: wrap;
`
const PersonContainer = Styled.div`
    max-width:250px;
    margin-bottom:50px;
    margin-right:25px;
`
