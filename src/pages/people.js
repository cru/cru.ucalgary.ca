import React from "react"
import { ThemeProvider } from "styled-components"
import NavBar from "../components/navbar"

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/vars.scss')

const PeoplePage = () => (
  <ThemeProvider theme={theme}>
    <div>
      <NavBar about="selected" subSelected="people" />
      <h1>People</h1>
      <div style={{ height: 3000 }} />
    </div>
  </ThemeProvider>
)
export default PeoplePage
