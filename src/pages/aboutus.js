import React from "react"
import styled from "styled-components"
import NavBar from "../components/navbar"

const AboutUs = () => (
  <div>
    <NavBar about="selected" subSelected="aboutus" />
    <p />
    <h1>About Us</h1>
    <Test />
  </div>
)
export default AboutUs

const Test = styled.div`
  height: 150vh;
`
