import React from "react"

import "../data/fontawesomeimports"
import { ThemeProvider } from "styled-components"

import SEO from "../components/seo"
import NavBar from "../components/navbar"
import EmailFAB from "../components/emailfab"
import MaxWidth from "../components/maxwidth"
import Padding from "../components/padding"
import Footer from "../components/footer"
import PublicationsList from "../components/publicationslist"

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/theme.scss')

const PublicationsPage = () => (
  <>
    <SEO title="Publications" />
    <ThemeProvider theme={theme}>
      <MaxWidth>
        <NavBar publications="publications" />
        <Padding>
          <h2>Publications</h2>
        </Padding>

        <PublicationsList />
        <div style={{ height: 200 }} />
        <EmailFAB />
        <Footer />
      </MaxWidth>
    </ThemeProvider>
  </>
)
export default PublicationsPage
