import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import SEO from '../components/seo'
import MaxWidth from './maxwidth'
import Footer from '../components/footer'

import '../helpers/fontawesomeimports'
import '../styles/main.scss'

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/theme.scss')

const Layout = ({ title, children }) => {
  return (
    <>
      <SEO title={title} />
      <ThemeProvider theme={theme}>
        <MaxWidth>
          {children}
          <Footer />
        </MaxWidth>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
