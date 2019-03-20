import React from "react"
import styled from "styled-components"

/*import { Link } from "gatsby"*/

import NavBar from "../components/navbar"
import "../styles/main.scss"

const People = () => (
  <div>
    <NavBar people="people" />
    <Test />
  </div>
)

const Test = styled.div`
  height: 150vh;
`

export default People
