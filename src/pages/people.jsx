import React from 'react'
import { ThemeProvider } from 'styled-components'

import '../styles/main.scss'
import SEO from '../components/seo'
import NavBar from '../components/navbar'
import MaxWidth from '../containers/maxwidth'
import Padding from '../containers/padding'
import Footer from '../components/footer'

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/theme.scss')

const People = () => {
  return (
    <>
      <SEO title="People" />
      <ThemeProvider theme={theme}>
        <MaxWidth>
          <NavBar page="people" group="about" />
          <div style={{ height: 75 }} />
          <Padding>
            <h2>People</h2>
          </Padding>

          <Footer />
        </MaxWidth>
      </ThemeProvider>
    </>
  )
}

export default People
