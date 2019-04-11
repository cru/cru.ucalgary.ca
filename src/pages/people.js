import React from "react"
import { ThemeProvider } from "styled-components"
import NavBar from "../components/navbar"
import EmailFAB from "../components/emailfab"
import MaxWidth from "../components/maxwidth"

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/vars.scss')

const PeoplePage = () => (
  <ThemeProvider theme={theme}>
    <MaxWidth>
      <NavBar about="selected" subSelected="people" />
      <div style={{ padding: 40 }}>
        <h4>People</h4>
        <p>
          Reprehenderit duis consectetur et eu tempor sint magna culpa aliquip.
          Qui quis adipisicing occaecat quis minim. Duis ut eiusmod id
          consectetur sint ipsum. Proident id sit dolore ipsum incididunt dolor
          adipisicing ut veniam eiusmod ipsum ea. Dolor consequat veniam
          voluptate ea cupidatat. Sit culpa quis laboris do amet ipsum Lorem
          pariatur commodo ullamco laboris.
        </p>
        <div style={{ height: 3000 }} />
      </div>
      <EmailFAB />
    </MaxWidth>
  </ThemeProvider>
)
export default PeoplePage
