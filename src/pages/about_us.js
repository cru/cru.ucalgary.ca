import React from "react"
import { ThemeProvider } from "styled-components"
import NavBar from "../components/navbar"

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/vars.scss')

const AboutUsPage = () => (
  <ThemeProvider theme={theme}>
    <div>
      <NavBar about="selected" subSelected="about_us" />
      <p />
      <h1>About Us</h1>
      <div style={{ height: 3000 }} />
    </div>
  </ThemeProvider>
)
export default AboutUsPage
