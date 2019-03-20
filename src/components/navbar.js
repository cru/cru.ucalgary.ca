import React from "react"
import { Link } from "gatsby"
import Styled from "styled-components"
import logo from "../images/cru-hash.png"

const NavBar = props => (
  <Container>
    <ContainerImg>
      <Link to="/">
        <LinksImg src={logo} />
      </Link>
    </ContainerImg>

    <LinksText className={(props.about && "selected") || "unSelected"}>
      <Link to="/about" style={{ textDecoration: "none" }}>
        about
      </Link>
    </LinksText>

    <LinksText className={(props.services && "selected") || "unSelected"}>
      <Link to="/services" style={{ textDecoration: "none" }}>
        services
      </Link>
    </LinksText>

    <LinksText className={(props.technologies && "selected") || "unSelected"}>
      <Link to="/technologies" style={{ textDecoration: "none" }}>
        technologies
      </Link>
    </LinksText>
  </Container>
)

export default NavBar

/* Styles */
const Container = Styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 68px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  outline: 1px solid #D8D8D8;
 
  :hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.13);
    outline: 1px white;
  }
  animation: shadowStart 0.1s;
`
const ContainerImg = Styled.div`
  width: 45px;
  height: 45px;
  margin: 13px;
  margin-right: 20px;
  margin-left: 50px;
`

const LinksImg = Styled.img`
  width: 45px;
  height: 45px;

  :hover {
    filter: invert(80%);
  }
`

const LinksText = Styled.a`
  margin: 27px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 14.5px;
  font-weight: 400;
  position: relative;
  display: inline-block;
  text-transform: uppercase;
`
