import React from "react"
import styled from "styled-components"

/*import { Link } from "gatsby"*/

import NavBar from "../components/navbar"
import "../styles/main.scss"

const AboutUs = () => (
  <div>
    <NavBar about="selected" subSelected="aboutus" />
    <p />
    <Test />
  </div>
)
export default AboutUs

const Test = styled.div`
  height: 150vh;
`
