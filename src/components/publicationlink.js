import React, { Component } from "react"
import Styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class PublicationLink extends Component {
  render() {
    const { url, title, authors, number, year, publisher } = this.props
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
        <Container>
          <Number>{number}</Number>
          <Information>
            <Title href={url} target="_blank">
              {title}
              {icon()}
            </Title>

            <Authors>{authors}</Authors>
            <Publisher>{publisher}</Publisher>
          </Information>
          <Year>{year}</Year>
        </Container>
      </>
    )
  }
}

export default PublicationLink

const Container = Styled.div`
    display:flex;
    padding:20px;
`

const Information = Styled.div`
    display:block;
    padding-left:50px;
    max-width:550px;
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
      color:red;
    }
    :active {
      color:blue;

    }
`
const Number = Styled.p`
    font-size:14px;
    width:6px;
`
const Year = Styled.p`
    margin-left: auto;
    font-size:14px;
`

const Authors = Styled.p`
    font-size:13px;
`
