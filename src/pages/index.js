import React from "react"
import { ThemeProvider } from "styled-components"
import NavBar from "../components/navbar"
import "../styles/main.scss"

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/vars.scss')

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <div>
      <NavBar />
      <p style= {{padding:30}}>
        Nostrud ut tempor commodo quis Lorem in in in proident enim mollit nulla
        esse. Qui in elit consectetur nulla esse minim ad laborum sit consequat
        cillum. Cupidatat cillum ea eiusmod fugiat. Cillum nulla fugiat cillum
        laboris id excepteur. Fugiat cillum occaecat aute commodo voluptate ex
        ipsum non nisi dolore non. Excepteur incididunt excepteur ipsum fugiat
        do aute sit culpa dolore officia in est consectetur irure.
      </p>
      <div style={{ height: 3000 }} />
    </div>
  </ThemeProvider>
)
export default IndexPage
