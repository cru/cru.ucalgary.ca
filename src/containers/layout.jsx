import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import SEO from '../components/seo'
import MaxWidth from './maxwidth'
import Footer from '../components/footer'
import EmailFAB from '../components/emailfab'
import NavBar from '../components/navbar'
import Alert from '../components/alert'

import '../styles/bootstrap.css'
import '../styles/main.scss'
import '../styles/modal.css'

const theme = {
  //Nav Bar attributes
  navBarPrimary: 'white',
  navBarAccent: '#d8d8d8',
  imgButtonIcon: 'grey',
  navBarTimesColor: 'white',
  navBarBarsColor: 'black',

  //Colors
  fontPrimColor: 'rgb(32, 32, 32)',
  fontSecColor: '#d8d8d8',
  fontMutedColor: 'rgba(32, 32, 32, 0.5)',

  brandPrimColor: '#8dc7fd',
  brandPrimAccent: '#8dc7fd',
  brandSecondColor: '#e97175',

  //Misc
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.13)',
  boxShadowAccent: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
  boxShadowTrans: '0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
  borderRadius: '5px',
  pageMaxWidth: '1200px',
  pageMobilePadding: '25px',
  pageDesktopPadding: '140px',

  // Media Queries
  mobileBreakPoint: '600px',
  navbarBreakPoint: '650px',
  tabletBreakPoint: '900px',
  desktopBreakPoint: 'pageMaxWidth',
}

const Layout = ({ title, page, group, children }) => {
  return (
    <>
      <SEO title={title} />
      <ThemeProvider theme={theme}>
        <MaxWidth>
          <NavBar activePage={page} activeGroup={group} />
          <main>{children}</main>
          <EmailFAB />
          <footer>
            <Footer />
          </footer>
        </MaxWidth>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  page: PropTypes.string,
  group: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
