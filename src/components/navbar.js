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

    <LinksText className={props.about && "selected"}>
      <Link to="/about" style={{ textDecoration: "none" }}>
        about
      </Link>
    </LinksText>

    <LinksText className={props.services && "selected"}>
      <Link to="/services" style={{ textDecoration: "none" }}>
        services
      </Link>
    </LinksText>

    <LinksText className={props.technologies && "selected"}>
      <Link to="/technologies" style={{ textDecoration: "none" }}>
        technologies
      </Link>
    </LinksText>
  </Container>
)
export default NavBar

/* Functions */

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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  :hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.13);
  }
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

const LinksText = Styled.p`
  margin: 27px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 14.5px;
  font-weight: 400;
  position: relative;
  display: inline-block;
  transition: 10s;
  text-transform: uppercase;
  :hover {
    ::after {
      content: "";
      position: absolute;
      width: 100%;
      background: #c7dafc;
      left: 0;
      margin-top:10px;
      margin-left:1px;
      top: 0;
      bottom: 1;
      height: 0.6em;
      z-index: -1;
      border-radius:4px;
    }

  }
`
