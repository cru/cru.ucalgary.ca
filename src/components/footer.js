import React, { Component } from "react"
import { Link } from "gatsby"
import Styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Footer extends Component {
  render() {
    const icon = () => {
      return (
        <>
          &nbsp;&nbsp;
          <FontAwesomeIcon className="linkStyleIcon" icon="external-link-alt" />
        </>
      )
    }

    return (
      <Container>
        {/* ***************** Site Map Links  ***************** */}
        <Column>
          <Content>
            <Title>Explore</Title>

            <Link style={{ textDecoration: "none" }} to="/services">
              <LinkStyle>Services</LinkStyle>
            </Link>
            <Spacing />
            <Link style={{ textDecoration: "none" }} to="/about_us">
              <LinkStyle>About Us</LinkStyle>
            </Link>
            <Spacing />
            <Link style={{ textDecoration: "none" }} to="/people">
              <LinkStyle>People</LinkStyle>
            </Link>
            <Spacing />
            <Link style={{ textDecoration: "none" }} to="/publications">
              <LinkStyle>Publications</LinkStyle>
            </Link>
          </Content>
        </Column>

        {/* ***************** External Links  ***************** */}
        <Column>
          <Content>
            <Title>Discover</Title>
            <LinkStyle href="/">Careers{icon()}</LinkStyle>
            <Spacing />
            <LinkStyle href="/">University of Calgary{icon()}</LinkStyle>
            <Spacing />
            <LinkStyle href="/">Cumming School of Medicine{icon()}</LinkStyle>
            <Spacing />
            <LinkStyle href="/">Alberta Health Services{icon()}</LinkStyle>
          </Content>
        </Column>

        {/* ***************** Address  ***************** */}
        <Column>
          <Content>
            <Title>Contact</Title>
            <Address>
              Health Sciences Centre <br />
              3330 Hospital Drive NW <br />
              Calgary, AB T2N 4N1 <br />
              <br />
              Tel: 1(403)-210-3845 <br />
              Fax: 1(403)-210-7820 <br />
              Email: cru@ucalgary.ca
            </Address>
          </Content>
        </Column>
      </Container>
    )
  }
}
export default Footer

const Container = Styled.div`
    width:100%;
    background-color: #0a0a0a;
    display: flex;
    flex-direction:row;

    @media only screen and (max-width: ${props =>
      props.theme.mobileBreakPoint}){
        display: block;
      }
`

const Column = Styled.div`
    flex:1;
    display:flex;
    padding-top:30px;
    padding-bottom:40px;
`

const Content = Styled.div`
  display: inline-block;
  margin: 0 auto;
  font-size:15px;
  @media only screen and (max-width: ${props =>
      props.theme.mobileBreakPoint}){
        margin:0;
        padding-left:25px;
  }
`

const Spacing = Styled.div`
  height:12px;
`

const LinkStyle = Styled.a`
  color: ${props => props.theme.fontSecColor};
  text-decoration:none;
  cursor:pointer;
  :hover {
    color: ${props => props.theme.brandPrimColor};
  }

  .linkStyleIcon{
    font-size:11px;
    color:grey;
  }
`

const Title = Styled.p`
   color:grey;
   font-weight:700;
   cursor:default;
`

const Address = Styled.p`
    font-size:14px;
    font-weight:400;
    color:grey;
`

// Site Map
// Relevat Links
// Address
