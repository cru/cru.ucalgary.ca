import React, { Component } from "react"
import Styled from "styled-components"

class PublicationLink extends Component {
  render() {
    const { url, title, authors, number, year } = this.props

    return (
      <>
        <Container>
          <Number>{number}</Number>
          <Information>
            <Title href={url} target="_blank">
              {title}
            </Title>
            <Authors>{authors}</Authors>
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
    max-width:500px;
`

const Title = Styled.a`
    color:blue;
    font-size:15px;
    text-decoration:none;

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
