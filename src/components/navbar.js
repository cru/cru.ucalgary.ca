import React from "react"
import styled from "styled-components"
import logo from "../images/cru-hash.png"

const NavBar = () => (
  <Container>
    <Links_img src={logo} />
    <Links>ABOUT</Links>
    <Links>SERVICES</Links>
    <Links>TECHNOLOGIES</Links>
  </Container>
)
export default NavBar

/* Styles */
const Container = styled.div`
  background-color: white;
  display: flex;
  width: 100vw;
  margin: 0;
  padding: 0;
  height: 70px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  :hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`

const Links_img = styled.img`
  width: 45px;
  height: 45px;
  margin: 13px;
  margin-left: 20px;
  margin-right: 20px;
  img:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
`

const Links = styled.a`
  margin: 27px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 14.5px;
  font-weight: 400;
  :hover {
      text-decoration:underline;
  }
`
