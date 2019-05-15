import React, { Component } from "react"
import Styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class PublicationLink extends Component {
  render() {
    const { url, title, authors, year, publisher } = this.props
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
          <Information>
            <Title href={url} target="_blank">
              {title}
              {icon()}
            </Title>
            <Authors>{authors}</Authors>
            <Publisher>{publisher}</Publisher>
            <MobileYear>{year}</MobileYear>
          </Information>
          <DesktopYear>{year}</DesktopYear>
        </Container>
      </>
    )
  }
}

export default PublicationLink

const Container = Styled.div`
    display:flex;
    padding-top:20px;
    padding-bottom:20px;

`

const Information = Styled.div`
    display:block;
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
      color: ${props => props.theme.brandSecondColor};
    }
    :active {
      color:#1A0DAB;
    }
`

const MobileYear = Styled.p`
    font-size:14px;
    font-weight:700;
    @media only screen and (min-width: ${props =>
      props.theme.tabletBreakPoint}){
      display:none;
    }
`


const DesktopYear = Styled.p`
    margin-left: auto;
    font-size:14px;
    font-weight:700;
    @media only screen and (max-width: ${props =>
      props.theme.tabletBreakPoint}){
      display:none;
    }
`


const Authors = Styled.p`
    font-size:13px;
`
