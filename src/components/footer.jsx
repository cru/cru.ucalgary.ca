import React from 'react'
import { Link } from 'gatsby'
import Styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import choppedSVG from '../images/svg-backgrounds/chopped-asset.svg'

const Footer = () => {
  const externalLinkIcon = name => {
    return (
      <>
        &nbsp;&nbsp;
        <FontAwesomeIcon className="linkStyleIcon" icon={name} />
      </>
    )
  }

  const contactIcon = name => {
    return (
      <>
        <FontAwesomeIcon className="contactStyleIcon" icon={name} />
        &nbsp;&nbsp;
      </>
    )
  }

  return (
    <>
      <Container>
        {/* ***************** Site Map Links  ***************** */}
        <Column>
          <Content>
            <Title>Explore</Title>

            {/* <Link style={{ textDecoration: "none" }} to="/services">
              <LinkStyle>Services</LinkStyle>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/about_us">
              <LinkStyle>About Us</LinkStyle>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/people">
              <LinkStyle>People</LinkStyle>
            </Link> */}
            <Link style={{ textDecoration: 'none' }} to="/publications">
              <LinkStyle>Publications</LinkStyle>
            </Link>
          </Content>
        </Column>

        {/* ***************** External Links  ***************** */}
        <Column>
          <Content>
            <Title>Discover</Title>
            <a
              href="https://careers.ucalgary.ca/jobs/search?utf8=%3F&q=cru&c_keywords=cru#results"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkStyle>
                Careers
                {externalLinkIcon('external-link-alt')}
              </LinkStyle>
            </a>
            <a
              href="https://cumming.ucalgary.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkStyle>
                Cumming School of Medicine
                {externalLinkIcon('external-link-alt')}
              </LinkStyle>
            </a>
            <a
              href="https://www.ucalgary.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkStyle>
                University of Calgary
                {externalLinkIcon('external-link-alt')}
              </LinkStyle>
            </a>
            <a
              href="https://www.albertahealthservices.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkStyle>
                Alberta Health Services
                {externalLinkIcon('external-link-alt')}
              </LinkStyle>
            </a>
          </Content>
        </Column>

        {/* ***************** Address  ***************** */}
        <Column>
          <Content>
            <Title>Contact</Title>
            <Address>
              Health Sciences Centre
              <br />
              3330 Hospital Drive NW
              <br />
              Calgary, AB T2N 4N1
              <br />
            </Address>
            <Address>
              {contactIcon('phone')}
              1-403-210-3845
              <br />
              {contactIcon('envelope')}
              cru@ucalgary.ca
            </Address>
          </Content>
        </Column>
      </Container>
      <Strip />
      <Greeting>
        <p>
          Handmade
          <span> </span>
          <span> </span>
          <span role="img" aria-label="Hand Waving">
            👋
          </span>
          <span> </span>
          <span> </span>
          by CRU
        </p>
        <p style={{ color: 'grey', fontSize: '13px' }}>Copyright © 2019</p>
      </Greeting>
    </>
  )
}
export default Footer

const Container = Styled.div`
    width:100%;
    background-color: #212121;
    display: flex;
    flex-direction:row;
    margin-bottom:-2px;

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
  @media only screen and (max-width: ${props => props.theme.mobileBreakPoint}){
        margin:0;
        margin-bottom:-40px;
        padding-left: ${props => props.theme.pageMobilePadding};
        padding-right: ${props => props.theme.pageMobilePadding};
  }
`
const Strip = Styled.div`
   background-image:url(${choppedSVG});
    background-position: top;
    background-repeat: repeat-x;

    height:30px;
`

const LinkStyle = Styled.p`
  color: ${props => props.theme.fontSecColor};
  text-decoration:none;
  cursor:pointer;
  :hover {
    color: red;
  }

  .linkStyleIcon{
    font-size:11px;
    color:grey;
  }
  .contactStyleIcon{
    color:grey;
    font-size:7px;
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
    line-height:22px;
`

const Greeting = Styled.div`
text-align:center;
    p{
      font-size:14px;
    }
`