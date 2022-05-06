import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Trail, animated } from '@react-spring/web'
import Styled from 'styled-components'

import Partner from './partner'

const getPartnersList = (data) => {
  const everyone = []
  data.allPartnersJson.edges.forEach((item) =>
    everyone.push(
      <PartnerContainer key={item.node.href}>
        <Partner
          href={item.node.href}
          image={item.node.image.src.childImageSharp.gatsbyImageData}
        />
      </PartnerContainer>
    )
  )
  return (
    <Trail
      native
      items={everyone}
      from={{ transform: 'translate3d(0,-50px,0)', opacity: 0 }}
      to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
      keys={(item) => item.key}
    >
      {(item) => (props) => <animated.div style={props}>{item}</animated.div>}
    </Trail>
  )
}

const getThirdPartyPartnersList = (data) => {
  const everyone = []
  data.allThirdpartypartnersJson.edges.forEach((item) =>
    everyone.push(
      <>
        <PartnerLink rel='noopener noreferrer' target='_blank' href={item.node.href}>
          {item.node.name}
        </PartnerLink>
        <br />
        <div style={{ height: 10 }} />
      </>
    )
  )
  return everyone
}

const PartnerList = () => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query partnersGridQuery {
            allPartnersJson {
              edges {
                node {
                  href
                  image {
                    src {
                      childImageSharp {
                        gatsbyImageData(
                          layout: FIXED
                          width: 140
                          formats: [AUTO, WEBP, AVIF]
                          placeholder: BLURRED
                        )
                      }
                    }
                  }
                }
              }
            }
            allThirdpartypartnersJson {
              edges {
                node {
                  name
                  href
                }
              }
            }
          }
        `}
        render={(data) => (
          <>
            {/* Visual grid of partners  */}
            <Grid>{getPartnersList(data)}</Grid>
            <div style={{ height: 50 }} />
            <h4>Other Collaborators</h4>
            {getThirdPartyPartnersList(data)}
          </>
        )}
      />
    </>
  )
}

export default PartnerList

const Grid = Styled.div`
    display:flex;
    flex-wrap: wrap;
`
const PartnerContainer = Styled.div`
    max-width:250px;
    margin-bottom:50px;
    margin-right:25px;
`

const PartnerLink = Styled.a`
  text-decoration:none;
  :hover {text-decoration:underline;}
  }
`
