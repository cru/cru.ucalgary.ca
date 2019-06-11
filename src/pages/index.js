import React from "react"

import { ThemeProvider } from "styled-components"
import "../styles/main.scss"
import "../data/fontawesomeimports"

import SEO from "../components/seo"
import MaxWidth from "../components/maxwidth"
import NavBar from "../components/navbar"
import EmailFAB from "../components/emailfab"
import Footer from "../components/footer"
import StudyManagerBanner from "../components/studymanagerbanner"

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/theme.scss')

const Root = () => {
  return (
    <>
      <SEO />
      <MaxWidth>
        <NavBar />
        <div style={{ height: 500, padding: 40 }}>
          <h3>
            The Clinical Research Unit (CRU) is a core support centre of the
            Cumming School of Medicine (CSM). The mandate of the CRU is to
            support university researchers and their collegues in the delivery
            of world class clinical research data, methods and analytics support
            services.
          </h3>
        </div>
        <div style={{ height: 500 }} />
        <StudyManagerBanner />
        <div style={{ height: "100vh" }} />
        <EmailFAB />
        <Footer />
      </MaxWidth>
    </>
  )
}

const IndexPage = () => (
  <>
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  </>
)
export default IndexPage
