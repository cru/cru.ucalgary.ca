import React from "react"
import { ThemeProvider } from "styled-components"
import NavBar from "../components/navbar"
import MailButton from "../components/mailbutton"
import MaxWidth from "../components/maxwidth"


const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/vars.scss')

const PeoplePage = () => (
  <ThemeProvider theme={theme}>
    <MaxWidth>
      <MailButton />
      <NavBar about="selected" subSelected="people" />
      <div>
        <h1>People</h1>
        <div style={{ height: 3000 }} />
      </div>
    </MaxWidth>
  </ThemeProvider>
)
export default PeoplePage
