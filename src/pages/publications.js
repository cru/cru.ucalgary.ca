import React from "react"
import { Helmet } from "react-helmet"

import "../data/fontawesomeimports"
import { ThemeProvider } from "styled-components"

import NavBar from "../components/navbar"
import EmailFAB from "../components/emailfab"
import MaxWidth from "../components/maxwidth"
import Footer from "../components/footer"
import PublicationsList from "../components/PublicationsList"

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/theme.scss')

const PublicationsPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Clinical Research Unit - Publications</title>
      <link href="https://cru-prototype.researchcalgary.ca/publications" />
    </Helmet>
    <ThemeProvider theme={theme}>
      <MaxWidth>
        <NavBar publications="publications" />
        <div style={{ padding: 40 }}>
          <h2>Publications</h2>
          <PublicationsList />
          <div style={{ height: 200 }} />
        </div>
        <EmailFAB />
        <Footer />
      </MaxWidth>
    </ThemeProvider>
  </>
)
export default PublicationsPage
