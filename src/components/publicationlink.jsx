import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PublicationLink = ({ url, title, authors, year, publisher, style }) => {
  const icon = () => {
    return (
      <>
        &nbsp;&nbsp;
        <FontAwesomeIcon
          style={{ fontSize: 9 }}
          className="linkStyleIcon"
          icon="external-link-alt"
        />
      </>
    )
  }
  return (
    <>
      <Container style={style}>
        <Information>
          <Title href={url} target="_blank">
            {title}
            {icon()}
          </Title>
          <Authors>{authors}</Authors>
          <Publisher>{publisher}</Publisher>
          <Year>{year}</Year>
        </Information>
      </Container>
    </>
  )
}
PublicationLink.propTypes = {
  url: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  authors: PropTypes.node.isRequired,
  year: PropTypes.node.isRequired,
  publisher: PropTypes.node.isRequired,
  style: PropTypes.node.isRequired,
}

export default PublicationLink

const Container = Styled.div`
    display:flex;
    padding-top:20px;
    padding-bottom:20px;
`

const Information = Styled.div`
    display:block;
    max-width:700px;
`

const Publisher = Styled.p`
    font-size:13px;
    margin-top:-7px;
`

const Title = Styled.a`
    color:#1A0DAB;
    font-size:15px;
    text-decoration:none;
    :hover {
      color: red;
    }
    :active {
      color:#1A0DAB;
    }
`

const Year = Styled.p`
    font-size:14px;
    font-weight:700;
`

const Authors = Styled.p`
    font-size:13px;
`