import React, { Fragment } from 'react'
import Styled from 'styled-components'
import CruFragment from '../crufragment'

const SupervisedUnsupervised = () => {
  return (
    <Fragment>
      <Content>
        <div>
          <h4 style={{ marginTop: 0 }}>Supervised Learning</h4>
          <p>
            In supervised learning, we are given a data set (training data) and already know what our correct outcome should look like, having the idea that there is a relationship between the input and the output.
          </p>
          <p>
            Supervised Learning problems are broadly categorized as either a <b>Regression Problem</b> or a <b>Classification Problem</b>
          </p>
          <h5 className='text-muted'>Regression Problem</h5>
          <p>
            In a regression problem, results are predicted within a continuous output, meaning that we are trying to map input variables to some continuous function.
          </p>
          <h5 className='text-muted'>Classification Problem</h5>
          <p>
            In a regression problem, input variables are into discrete categories. A classification model attempts to draw some conclusion from observed values. Given one or more inputs a classification model will try to predict the value of one or more outcomes.
          </p>
          <p>
            There are two types of classification analysis: <br />
            <ol>
              <li>Binomial Classification</li>
              <li>Multiclass Classification</li>
            </ol>
          </p>
          <h5 className='text-muted'>Binomial Classification</h5>
          <p>
            Binary or binomial classification is the task of classifying the elements of a given set into two groups
          <br />
          Popular algorithms: Lasso, Logistic Regression, Decision trees, Bayesian networks, Support vector machines, Neural networks
        </p>
          <h5 className='text-muted'>Multiclass Classification</h5>
          <p>
            Multiclass classification is a classification task with more than two classes.
          <br />
          Popular algorithms: Logistic Regression, Decision trees, Bayesian networks, Support vector machines, Neural networks, Nearest neighbor
        </p>
          <h5 className='text-muted'>Regression Algorithms</h5>
          <p>
            Most popular regressions are: <br />
            <ul>
              <li>Linear Regression</li>
              <li>Logistic Regression</li>
              <li>Polynomial Regression</li>
              <li>Stepwise Regression</li>
              <li>Ridge Regression</li>
              <li>Lasso Regression</li>
              <li>ElasticNet Regression</li>
            </ul>
          </p>
        </div>
        <div>
          <h4>Unsupervised Learning</h4>
          <p>
            Unsupervised learning is a type of machine learning algorithm used to draw inferences from datasets consisting of input data without labeled responses. The most common unsupervised learning method is cluster analysis, which is used for exploratory data analysis to find hidden patterns or grouping in data.
          </p>
          <h5 className='text-muted'>Clustering Algorithms</h5>
          <p>
            Most popular clustering algorithms are: <br />
            <ul>
              <li>Partitioning methods</li>
              <li>Hierarchical clustering</li>
              <li>Fuzzy clustering</li>
              <li>Density-based clustering</li>
              <li>Model-based clustering</li>
            </ul>
          </p>
        </div>
      </Content>
      <CruFragment />
    </Fragment>
  )
}
export default SupervisedUnsupervised


const Content = Styled.div`
    padding-left: 2rem;
    padding-bottom: 2rem;
`
