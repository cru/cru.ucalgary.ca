import React from 'react'
import Styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../../containers/layout'
import Padding from '../../containers/padding'
import CruFragment from '../../components/crufragment'

const AnnouncementsPage = () => {
  return (
    <Layout title='Announcements' page='announcements' group='newsroom'>
      <div style={{ height: 60 }} />
      <Padding>
        <h1>Announcements</h1>
        <div style={{ height: 55 }} />
        <Group>
          <h6 className='text-muted' style={{ marginTop: 0 }}>
            2024
          </h6>
          <ul>
            <li>
              {/* <Link to='/newsroom/redcap-upgrade'>Announcing Validated RC 13.7.29</Link> */}
              <Link to='/newsroom/redcap-upgrade'>RC Upgrade Advisory</Link>
            </li>
          </ul>
        </Group>
        <Group>
          <h6 className='text-muted' style={{ marginTop: 0 }}>
            2023
          </h6>
          <ul>
            <li>
              <Link to='/newsroom/seasonal-closure-2023'>Seasonal Closure 2023</Link>
            </li>
            <li>
              <Link to='/services-and-pricing/dataxplor'>Launching: DataXplor!</Link>
            </li>
          </ul>
        </Group>
        <Group>
          <h6 className='text-muted' style={{ marginTop: 0 }}>
            2022
          </h6>
          <ul>
            <li>
              <Link to='/newsroom/redcap-decommission'>REDCap 6 & 7 Decommissioned</Link>
            </li>
            <li>
              <Link to='/newsroom/seed-grant'>
                The Clinical Research Fund SEED Grant Competition is now open! Up to
                $25,000 in credits available for CRU support services.
              </Link>
            </li>
            <li>
              <Link to='/newsroom/redcap-validation'>REDCap Validation!</Link>
            </li>
            <li>
              <Link to='/newsroom/covid-19'>COVID-19 Notice</Link>
            </li>
          </ul>
        </Group>

        <div style={{ height: 200 }} />
      </Padding>
      <CruFragment />
      <div style={{ height: '100px' }} />
    </Layout>
  )
}

export default AnnouncementsPage

const Group = Styled.div`
    padding-bottom: 16px;
`
