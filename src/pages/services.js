import React from "react"
import { ThemeProvider } from "styled-components"
import NavBar from "../components/navbar"

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/vars.scss')

const ServicesPage = () => (
  <ThemeProvider theme={theme}>
    <div>
      <NavBar services="selected" />
      <div style={{ height: 3000 }} />
    </div>
  </ThemeProvider>
)
export default ServicesPage
