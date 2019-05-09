import "../styles/main.scss"

import React from "react"

import { ThemeProvider } from "styled-components"

import MaxWidth from "../components/maxwidth"
import NavBar from "../components/navbar"
import EmailFAB from "../components/emailfab"
import Footer from "../components/footer"
import ConstructionBanner from "../components/constructionbanner"

import { library, config } from "@fortawesome/fontawesome-svg-core"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope"

library.add(faCaretDown, faExternalLinkAlt, faEnvelope)

config.autoAddCss = false

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/vars.scss')

const Root = () => {
  return (
    <>
      <MaxWidth>
        <NavBar />
        <ConstructionBanner />
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
