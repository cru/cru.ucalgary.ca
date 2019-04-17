import "../styles/main.scss"

import React from "react"

import { ThemeProvider } from "styled-components"

import MaxWidth from "../components/maxwidth"
import NavBar from "../components/navbar"
import EmailFAB from "../components/emailfab"

import { library, config } from "@fortawesome/fontawesome-svg-core"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

library.add(faCaretDown)
library.add(faExternalLinkAlt)
library.add(faEnvelope)

config.autoAddCss = false


const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/vars.scss')

const Root = () => {
  return (
    <>
      <MaxWidth>
        <NavBar />
        <div style={{ height: 500, padding: 40 }}>
          <p>
            Mollit aliqua ut amet excepteur. Laborum incididunt aliqua labore
            aliquip nostrud ut laborum eiusmod officia. Excepteur amet eu enim
            tempor esse veniam id voluptate culpa mollit aliquip. Ad magna
            commodo culpa laboris dolor ad pariatur aliqua mollit. Duis sit ut
            ad velit cupidatat fugiat ea laborum dolor. Proident qui Lorem
            reprehenderit laborum nostrud nulla ullamco mollit velit Lorem.
            Labore fugiat fugiat veniam do cillum aute. Non nulla deserunt
            aliquip consectetur velit voluptate dolore commodo ad sit ullamco.
            Elit proident anim veniam culpa ullamco nisi elit exercitation. Do
            tempor nisi ad ipsum voluptate reprehenderit laboris ea cupidatat ut
            eu ut veniam aliqua. Tempor veniam ea veniam enim in magna magna.
            Ipsum ut commodo in culpa reprehenderit ea ad. Mollit ea eiusmod ex
            irure Lorem. Enim consectetur laboris pariatur ad anim et ut magna
            nisi pariatur velit mollit exercitation. Laboris esse id sint labore
            qui eiusmod culpa eu eu voluptate do cupidatat deserunt. Dolor nisi
            aute consectetur laborum. Deserunt ad ex commodo proident id fugiat
            enim quis esse voluptate pariatur laborum. Aliquip officia sit in
            sint fugiat deserunt qui ipsum.
          </p>
        </div>
        <div style={{ height: 500 }} />
        <EmailFAB />
        <div style={{ height: 500, backgroundColor: "black" }} />
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
