import React from "react"
import styled from "styled-components"

/*import { Link } from "gatsby"*/

import NavBar from "../components/NavBar/navbar"
import "../styles/main.scss"

const Technologies = () => (
  <div>
    <NavBar technologies="selected" />
    <Test />
  </div>
)

const Test = styled.div`
  height: 150vh;
`

export default Technologies
