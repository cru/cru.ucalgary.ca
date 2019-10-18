import React from 'react'
import { Download } from 'react-feather'
import Layout from '../containers/layout'
import NavBar from '../components/navbar'
import Padding from '../containers/padding'
import Button from '../components/button'

const DownloadsPage = () => (
  <Layout title="Resources">
    <NavBar page="downloads" group="resources" />
    <div style={{ minHeight: '100vh' }}>
      <div style={{ height: 100 }} />
      <Padding>
        <h1>Downloads</h1>
        <div style={{ height: 50 }} />

        <div style={{ maxWidth: 600 }}>
          <h3>DFdiscover</h3>
          <h5>DFexplore 5.1.4</h5>
          <p>
            <b>IMPORTANT</b>
            <span> </span>
            You may need administrative privileges to download and install
            software. If you are on a managed computer, please contact your
            local IT administrator.
          </p>
          <div style={{ height: 10 }} />

          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div
              style={{
                textAlign: 'center',
                paddingRight: '12px',
                paddingBottom: '12px',
              }}
            >
              <a href="" download>
                <Button style={{ width: '200px' }}>
                  CRU User Guide
                  <span> </span>
                  <Download style={{ height: '16px' }} />
                </Button>
              </a>
            </div>

            <div
              style={{
                textAlign: 'center',
                paddingRight: '12px',
                paddingBottom: '12px',
              }}
            >
              <a href="" download>
                <Button style={{ width: '200px' }}>
                  DFnet User Guide
                  <span> </span>
                  <Download style={{ height: '16px' }} />
                </Button>
              </a>
            </div>

            <div
              style={{
                maxWidth: 195,
                paddingRight: '12px',
                paddingBottom: '0px',
              }}
            >
              <a href="./downloads/DFexplore5.1.4.pkg" download>
                <Button style={{ width: '195px', marginBottom: '-6px' }}>
                  DFexplore for Mac
                  <span> </span>
                  <Download style={{ height: '16px' }} />
                </Button>
              </a>
              <p style={{ fontSize: '11px', paddingLeft: '18px' }}>
                macOS 10.12 (Sierra) and newer
              </p>
            </div>

            <div
              style={{
                paddingRight: '12px',
                paddingBottom: '12px',
              }}
            >
              <a href="./downloads/DFexplore5.1.4.msi" download>
                <Button style={{ width: '225px', marginBottom: '-6px' }}>
                  DFexplore for Windows
                  <span> </span>
                  <Download style={{ height: '16px' }} />
                </Button>
              </a>
              <p style={{ fontSize: '11px', paddingLeft: '18px' }}>
                Windows 8.1, Windows 10
              </p>
            </div>
          </div>
        </div>
      </Padding>
    </div>
  </Layout>
)

export default DownloadsPage
