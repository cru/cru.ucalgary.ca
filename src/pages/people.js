import React from "react"
import styled from "styled-components"
import NavBar from "../components/navbar"

const People = () => (
  <div>
    <NavBar about="selected" subSelected="people" />
    <h1>People</h1>
    <Test />
  </div>
)

const Test = styled.div`
  height: 150vh;
`

export default People
