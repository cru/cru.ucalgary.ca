import React from 'react'

import Layout from '../../containers/layout'
import Padding from '../../containers/padding'
import CruFragment from '../../components/crufragment'
import { Link } from 'gatsby'

const AnnouncementsPage = () => {
  return (
    <Layout title='Announcements' page='announcements' group='newsroom'>
      <div style={{ height: 60 }} />
      <Padding>
        <h1>Announcements</h1>
        <div style={{ height: 55 }} />
        <h6 className='text-muted' style={{ marginTop: 0 }}>
          March 2022
        </h6>
        <ul>
          <li>
            <Link to='/newsroom/redcap-validation'>REDCap Validation!</Link>
          </li>
        </ul>
        <div style={{ height: 200 }} />
      </Padding>
      <CruFragment />
      <div style={{ height: '100px' }} />
    </Layout>
  )
}

export default AnnouncementsPage
