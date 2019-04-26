import React from "react"
import { ThemeProvider } from "styled-components"
import NavBar from "../components/navbar"
import MaxWidth from "../components/maxwidth"

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/vars.scss')

const AboutUsPage = () => (
  <ThemeProvider theme={theme}>
    <MaxWidth>
      <div>
        <NavBar about="about" subCategory="about_us" />
        <div style = {{padding:40}}>
          <h4>About Us</h4>
          <p>
            Reprehenderit duis consectetur et eu tempor sint magna culpa
            aliquip. Qui quis adipisicing occaecat quis minim. Duis ut eiusmod
            id consectetur sint ipsum. Proident id sit dolore ipsum incididunt
            dolor adipisicing ut veniam eiusmod ipsum ea. Dolor consequat veniam
            voluptate ea cupidatat. Sit culpa quis laboris do amet ipsum Lorem
            pariatur commodo ullamco laboris.
          </p>
        </div>

        <div style={{ height: 3000 }} />
      </div>
    </MaxWidth>
  </ThemeProvider>
)
export default AboutUsPage
