import React from 'react'
import Layout from '../containers/layout'
import NavBar from '../components/navbar'
import Padding from '../containers/padding'
import Button from '../components/button'

const ResourcesPage = () => (
  <Layout title="Resources">
    <NavBar page="resources" />
    <div style={{ minHeight: '100vh' }}>
      <div style={{ height: 100 }} />
      <Padding>
        <h1>Resources</h1>
        <div style={{ height: 50 }} />
        <h3>DFdiscover</h3>
        <h5>DFexplore 5.1.4 Download</h5>
        <p style={{ maxWidth: 600 }}>
          <b>IMPORTANT</b>
          <span> </span>
          You may need administrative privileges to download and install
          software. If you are on a managed computer, please contact your local
          IT administrator.
        </p>
        <div style={{ height: 10 }} />

        <div style={{ display: 'flex' }}>
          <div style={{ maxWidth: 175, textAlign: 'center' }}>
            <a href="./downloads/DFexplore5.1.4.pkg" download>
              <Button style={{ width: '175px' }}>Download for Mac</Button>
            </a>
            <p style={{ fontSize: '11px' }}>macOS 10.12 (Sierra) and newer</p>
          </div>

          <div style={{ width: 10 }} />

          <div style={{ textAlign: 'center' }}>
            <a href="./downloads/DFexplore5.1.4.msi" download>
              <Button style={{ width: '220px' }}>Download for Windows</Button>
            </a>
            <p style={{ fontSize: '11px' }}>Windows 8.1, Windows 10</p>
          </div>
        </div>
      </Padding>
    </div>
  </Layout>
)

export default ResourcesPage
