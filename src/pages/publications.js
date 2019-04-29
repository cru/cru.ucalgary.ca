import React from "react"
import { ThemeProvider } from "styled-components"
import NavBar from "../components/navbar"
import EmailFAB from "../components/emailfab"
import MaxWidth from "../components/maxwidth"
import Footer from "../components/footer"

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/vars.scss')

const PublicationsPage = () => (
  <ThemeProvider theme={theme}>
    <MaxWidth>
      <NavBar publications="publications" />
      <div style={{ padding: 40 }}>
        <h2>Publications</h2>
        <p>list of publications</p>

        <div style={{ height: 3000 }} />
      </div>
      <EmailFAB />
      <Footer />
    </MaxWidth>
  </ThemeProvider>
)
export default PublicationsPage
