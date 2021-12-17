/* eslint-disable react/jsx-indent */
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Trail, animated } from 'react-spring/renderprops'
import PublicationLink from './publicationlink'

const getPublicationsList = (data, group) => {
  const publicationsArray = []
  data.allPublicationsJson.edges.forEach(
    (item) =>
      (item.node.group === group || group === 'all') &&
      publicationsArray.push(
        <PublicationLink
          title={item.node.title}
          authors={item.node.authors}
          publisher={item.node.publisher}
          year={item.node.year}
          url={item.node.url}
          key={item.node.url}
        />
      )
  )
  return (
    <Trail
      items={publicationsArray}
      from={{ transform: 'translate3d(0,-50px,0)', opacity: 0 }}
      to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
      keys={(item) => item.key}
    >
      {(item) => (props) => <animated.div style={props}>{item}</animated.div>}
    </Trail>
  )
}

const PublicationQuery = ({ group }) => {
  return (
    <>
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
        render={(data) => <>{getPublicationsList(data, group)}</>}
      />
    </>
  )
}
PublicationQuery.propTypes = {
  group: PropTypes.node.isRequired,
}

export default PublicationQuery
