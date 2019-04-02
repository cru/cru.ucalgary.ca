import React from "react"
import { ThemeProvider } from "styled-components"
import NavBar from "../components/navbar"
import MailButton from "../components/mailbutton"
import MaxWidth from "../components/maxwidth"
import "../styles/main.scss"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

library.add(faCaretDown)
library.add(faExternalLinkAlt)
library.add(faEnvelope)

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/vars.scss')

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <MaxWidth>
      <MailButton />
      <NavBar />
      <div>
        <p style={{ padding: 30 }}>
          Nostrud ut tempor commodo quis Lorem in in in proident enim mollit
          nulla esse. Qui in elit consectetur nulla esse minim ad laborum sit
          consequat cillum. Cupidatat cillum ea eiusmod fugiat. Cillum nulla
          fugiat cillum laboris id excepteur. Fugiat cillum occaecat aute
          commodo voluptate ex ipsum non nisi dolore non. Excepteur incididunt
          excepteur ipsum fugiat do aute sit culpa dolore officia in est
          consectetur irure.
        </p>
        <div style={{ height: 3000 }} />
      </div>
    </MaxWidth>
  </ThemeProvider>
)
export default IndexPage

