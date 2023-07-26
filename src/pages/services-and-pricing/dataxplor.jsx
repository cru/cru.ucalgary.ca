import React from 'react'

import Layout from '../../containers/layout'
import Padding from '../../containers/padding'
import CruFragment from '../../components/crufragment'

const DataXplorPage = () => {
  return (
    <Layout title='DataXplor Released' page='dataxplor' group='services-and-pricing'>
      <div style={{ height: 60 }} />
      <Padding>
        <h1>Launching: DataXplor!</h1>
        <div style={{ height: 55 }} />
        <p>
          DataXplor is a custom platform developed by the CRU that offers a suite of data
          tools to help you better understand and improve your data.
        </p>
        <p>
          It can be challenging to understand and analyze datasets to draw meaningful
          insights. Our powerful and easy-to-use tools empower you to interact with,
          visualize, and interpret your data.
        </p>
        <b>What value does DataXplor unlock for you?</b>
        <ul>
          <li>
            Save Time: Our tools streamline your data analysis workflow, automating manual
            tasks and allowing you to focus on the core analysis and interpretation. Spend
            less time on data management and more time on groundbreaking research.
          </li>
          <li>
            Reliable Insights: Our tools are built on robust algorithms and statistical
            methodologies, ensuring the accuracy and reliability of your research
            findings. Trust in your data and make confident decisions based on solid
            evidence.
          </li>
          <li>
            Enhanced Collaboration: Collaborate seamlessly with your research team. Our
            tools facilitate data sharing, version control, and real-time collaboration,
            enabling you to work together efficiently and harness the collective knowledge
            and expertise of your team.
          </li>
        </ul>
        <p>
          <a
            href='https://redcap.cru.ucalgary.ca/surveys/?s=7L49EPE94D'
            target='_blank'
            rel='noopener noreferrer'
            className='external-link'
          >
            Get DataXplor today!
          </a>{' '}
          We offer affordable and flexible pricing plans to accommodate even the most
          limited research budgets. Bundle our tools to save even more.
        </p>
        <div>
          <h3>DataViz</h3>
          <p>Easily create custom visualizations of your REDCap data in real-time.</p>
          <p>
            Explore your data, uncover hidden insights, and present your findings with
            impact. With our intuitive interface and powerful features, you'll have the
            flexibility to tell your research story in a visually compelling way.
          </p>
        </div>
        <div>
          <h3>DataLytics</h3>
          <p>
            A real-time monitoring tool that provides a comprehensive view of your
            research study. Track key metrics such as enrollment status, demographics, and
            study progress at a glance. With our dashboard, you can identify outliers and
            patterns, allowing you to make informed decisions and drive your research
            forward.
          </p>
          <p>
            Our flexible tool can be customized to track and present the data of greatest
            interest. Our experienced expert biostatistician is available for consultation
            to advise, analyze, and synthesize your data.
          </p>
        </div>
        <div style={{ height: 200 }} />
      </Padding>
      <CruFragment />
      <div style={{ height: '100px' }} />
    </Layout>
  )
}

export default DataXplorPage
