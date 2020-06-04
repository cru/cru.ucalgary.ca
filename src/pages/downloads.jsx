import React from 'react'
import Styled from 'styled-components'
import Layout from '../containers/layout'
import Padding from '../containers/padding'
import CruFragment from '../components/crufragment'

const DownloadsPage = () => (
  <Layout title="Downloads" page="downloads" group="resources" >
    <div style={{ minHeight: '100vh' }}>
      <div style={{ height: 60 }} />
      <Padding>
        <h1>Downloads</h1>
        <div style={{ height: 55 }} />
        <p style={{ maxWidth: 450 }}>
          <b>IMPORTANT</b>
          <span> </span>
          You may need administrative privileges to download and install
          software. If you are on a managed computer, please contact your local
          IT administrator.
        </p>
        <div style={{ height: 10 }} />

        <h3>DFdiscover</h3>

        <h5>DFexplore 5.1.4</h5>
        <DownloadTable>
          <tr style={{ backgroundColor: '#e3f2ff' }}>
            <td>Windows 8.1/10</td>
            <td>
              <a href="/dfexplore_5_1_4/DFexplore5_1_4.msi" download>
                DFexplore5.1.4.msi
              </a>
            </td>
          </tr>
          <tr style={{ backgroundColor: 'white' }}>
            <td>macOS 10.12 (Sierra) and newer</td>
            <td>
              <a href="/dfexplore_5_1_4/DFexplore5_1_4.pkg" download>
                DFexplore5.1.4.pkg
              </a>
            </td>
          </tr>
          <tr style={{ backgroundColor: '#e3f2ff' }}>
            <td>CRU User Guide</td>
            <td>coming soon</td>
          </tr>
          <tr style={{ backgroundColor: 'white' }}>
            <td>DFnet User Guide</td>
            <td>
              <a
                href="/dfexplore_5_1_4/DFnet_user_guide_5_1_4.pdf"
                download
              >
                DFnet_user_guide_5.1.4.pdf
              </a>
            </td>
          </tr>
        </DownloadTable>
        <div style={{ height: 25 }} />

        <h5>iDataFax 2016</h5>
        <DownloadTable>
          <tr style={{ backgroundColor: '#e3f2ff' }}>
            <td>Windows 7/8/10</td>
            <td>
              <a
                href="/datafax_2016_0_0/iDataFax2016_0_0.msi"
                download
              >
                iDataFax2016.msi
              </a>
            </td>
          </tr>
          <tr style={{ backgroundColor: 'white' }}>
            <td>OS X 10.8 (Mountain Lion) and newer</td>
            <td>
              <a
                href="/datafax_2016_0_0/iDataFax2016_0_0.pkg"
                download
              >
                iDataFax2016.pkg
              </a>
            </td>
          </tr>
          <tr style={{ backgroundColor: '#e3f2ff' }}>
            <td>CRU User Guide</td>
            <td>
              <a
                href="/datafax_2016_0_0/cru_user_guide_2016_0_0.pdf"
                download
              >
                cru_user_guide_2016.pdf
              </a>
            </td>
          </tr>
          <tr style={{ backgroundColor: 'white' }}>
            <td>DFnet User Guide</td>
            <td>
              <a
                href="/datafax_2016_0_0/dfnet_user_guide_2016_0_0.pdf"
                download
              >
                dfnet_user_guide_2016.pdf
              </a>
            </td>
          </tr>
        </DownloadTable>

        <div style={{ height: 200 }} />
      </Padding>
    </div>
    <CruFragment />
    <div style={{ height: '100px' }} />
  </Layout>
)

export default DownloadsPage

const DownloadTable = Styled.table`
  width: 100%;
  td { 
    padding: 5px;
    margin: 0;
    width:50%;
}
`
