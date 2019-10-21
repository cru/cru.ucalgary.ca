import React from 'react'
import Styled from 'styled-components'
import Layout from '../containers/layout'
import NavBar from '../components/navbar'
import Padding from '../containers/padding'

const DownloadsPage = () => (
  <Layout title="Downloads">
    <NavBar page="downloads" group="resources" />
    <div style={{ minHeight: '100vh' }}>
      <div style={{ height: 100 }} />
      <Padding>
        <h1>Downloads</h1>
        <p style={{ maxWidth: 600 }}>
          <b>IMPORTANT</b>
          <span> </span>
          You may need administrative privileges to download and install
          software. If you are on a managed computer, please contact your local
          IT administrator.
        </p>
        <div style={{ height: 10 }} />

        <h3>DFdiscover</h3>
        <h5>DFexplore 5.1.4</h5>

        <div style={{ height: 10 }} />

        <DownloadTable>
          <tr style={{ backgroundColor: '#d8d8d8' }}>
            <td>Windows 8.1, Windows 10</td>
            <td>
              <a href="./downloads/DFexplore5.1.4.msi" download>
                DFexplore5.1.4.msi
              </a>
            </td>
          </tr>
          <tr style={{ backgroundColor: 'white' }}>
            <td>macOS 10.12 (Sierra) and newer</td>
            <td>
              <a href="./downloads/DFexplore5.1.4.pkg" download>
                DFexplore5.1.4.pkg
              </a>
            </td>
          </tr>
          <tr style={{ backgroundColor: '#d8d8d8' }}>
            <td>CRU User Guide</td>
            <td>
              <a href="./downloads/DFexplore5.1.4.pkg" download>
                cru_user_guide.pdf
              </a>
            </td>
          </tr>
          <tr style={{ backgroundColor: 'white' }}>
            <td>DFnet User Guide</td>
            <td>
              <a href="./downloads/DFexplore5.1.4.pkg" download>
                dfnet_user_guide.pdf
              </a>
            </td>
          </tr>
        </DownloadTable>

        <h5>iDataFax 2016</h5>

        <div style={{ height: 10 }} />

        <DownloadTable>
          <tr style={{ backgroundColor: '#d8d8d8' }}>
            <td>Windows 8.1, Windows 10</td>
            <td>
              <a href="./downloads/DFexplore5.1.4.msi" download>
                iDataFax_2016.msi
              </a>
            </td>
          </tr>
          <tr style={{ backgroundColor: 'white' }}>
            <td>macOS 10.12 (Sierra) and newer</td>
            <td>
              <a href="./downloads/DFexplore5.1.4.pkg" download>
                iDataFax_2016.pkg
              </a>
            </td>
          </tr>
          <tr style={{ backgroundColor: '#d8d8d8' }}>
            <td>CRU User Guide</td>
            <td>
              <a href="./downloads/DFexplore5.1.4.pkg" download>
                cru_user_guide.pdf
              </a>
            </td>
          </tr>
          <tr style={{ backgroundColor: 'white' }}>
            <td>DFnet User Guide</td>
            <td>
              <a href="./downloads/DFexplore5.1.4.pkg" download>
                dfnet_user_guide.pdf
              </a>
            </td>
          </tr>
        </DownloadTable>

        <div style={{ height: 200 }} />
      </Padding>
    </div>
  </Layout>
)

export default DownloadsPage

const DownloadTable = Styled.table`
  width: 100%;
  td { 
    padding: 5px;
}
`
