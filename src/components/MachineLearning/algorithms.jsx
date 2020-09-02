import React, { Fragment, useState } from 'react'
import Styled from 'styled-components'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

import CruFragment from '../crufragment'
import svm1 from '../../images/svm1.png'
import svm2 from '../../images/svm2.png'


const Algorithms = () => {
  const [activeTab, setActiveTab] = useState('1');

  return (
    <Fragment>
      <Content>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={activeTab === '1' && 'active'}
              onClick={() => { setActiveTab('1'); }}
            >
              Polynomial Regression
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === '2' && 'active'}
              onClick={() => { setActiveTab('2'); }}
            >
              Lasso
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === '3' && 'active'}
              onClick={() => { setActiveTab('3'); }}
            >
              K-mean Clustering
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === '4' && 'active'}
              onClick={() => { setActiveTab('4'); }}
            >
              Logistic Regression
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === '5' && 'active'}
              onClick={() => { setActiveTab('5'); }}
            >
              Decision Tree
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === '6' && 'active'}
              onClick={() => { setActiveTab('6'); }}
            >
              Neural Network
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === '7' && 'active'}
              onClick={() => { setActiveTab('7'); }}
            >
              Support Vector Machine
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === '8' && 'active'}
              onClick={() => { setActiveTab('8'); }}
            >
              Bayesian Network
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div>
              <h5 className='text-muted'>Description</h5>
              <p>
                Polynomial regression is a form of regression analysis in which the relationship between the independent variable x and the dependent variable y is modelled as an nth degree polynomial in x.
              </p>
              <h5 className='text-muted'>Data Requirement</h5>
              <p>
                Obervations must be independant
              </p>
              <h5 className='text-muted'>Complexity</h5>
              <p>
                Calling 𝑛 the number of observations and p the number of weights, the overall complexity should be 𝑛^2 𝑝+ 𝑝^3. Execution time of the algorithms is highly related to different factors such as Hardware, optimization, etc. for example, in <a target="_blank" rel="noopener noreferrer" href="https://www.researchgate.net/publication/317286775_Rule_Based_Systems_in_a_Distributed_Environment_Survey/figures?lo=1">Rule Based Systems in a Distributed Environment</a>, they could run the logistic regression algorithms for 100 GB data with 100 machine for less than 70 s.
              </p>
              <h5 className='text-muted'>Interpretability</h5>
              <p>
                Regressions are interpretable. The relationship between x and y is totally observable.
              </p>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div>
              <h5 className='text-muted'>Description</h5>
              <p>
                Lasso (least absolute shrinkage and selection operator; also Lasso or LASSO) is a regression analysis method that performs both variable selection and regularization in order to enhance the prediction accuracy and interpretability of the statistical model it produces.
              </p>
              <h5 className='text-muted'>Data Requirement</h5>
              <p>
                Lasso regression puts constraints on the size of the coefficients associated to each variable. However, this value will depend on the magnitude of each variable. It is therefore necessary to center and reduce, or standardize, the variables.
              </p>
              <h5 className='text-muted'>Complexity</h5>
              <p>
                Let the number of candidate variables (features, columns) be 𝐾 and the sample size (number of observations, rows) be 𝑛. Consider LASSO implemented using LARS algorithm. The computational complexity of LASSO is 𝑘^3+ 𝑘^2 𝑛.
              </p>
              <h5 className='text-muted'>Interpretability</h5>
              <p>
                Interpretability decreases if the target is dependent on lot of features
              </p>
            </div>
          </TabPane>
          <TabPane tabId="3">
            <div>
              <h5 className='text-muted'>Description</h5>
              <p>
                K-means algorithms can be used to subdivide data points of a dataset into clusters based on nearest mean values. To determine the optimal division of your data points into clusters, such that the distance between points in each cluster is minimized,  k-means clustering would be appropriate algorithms. In the term k-means, k denotes the number of clusters in the data.
              </p>
              <h5 className='text-muted'>Data Requirement</h5>
              <p>
                The type of data best suited for K-Means clustering would be numerical data with a relatively lower number of dimensions.
              </p>
              <h5 className='text-muted'>Complexity</h5>
              <p>
                K-mean is NP hard problem. O(kn) for each iteration where k = no. of cluster, n = no. of points. For example based on <a target="_blank" rel="noopener noreferrer" href="https://www.napier.ac.uk/~/media/worktribe/output-1233588/smk-means-an-improved-mini-batch-k-means-algorithm.pdf"> An Improved Mini Batch K-means Algorithm Based on Mapreduce with Big Data</a> the running time for 1 million data is 100 S or for 9 million is about 400 S.
              </p>
              <h5 className='text-muted'>Interpretability</h5>
              <p>
                Groups of data are recognizable after clustering.
              </p>
            </div>
          </TabPane>
          <TabPane tabId="4">
            <div>
              <h5 className='text-muted'>Description</h5>
              <p>
                Logistic regression is the appropriate regression analysis to conduct when the dependent variable is dichotomous (binary).  Like all regression analyses, the logistic regression is a predictive analysis.  Logistic regression is used to describe data and to explain the relationship between one dependent binary variable and one or more nominal, ordinal, interval or ratio-level independent variables.
              </p>
              <h5 className='text-muted'>Data Requirement</h5>
              <p>
                Logistic regression does not require a linear relationship between the dependent and independent variables. Also, the error terms (residuals) do not need to be normally distributed.  Finally, the dependent variable in logistic regression is not measured on an interval or ratio scale.
              </p>
              <h5 className='text-muted'>Complexity</h5>
              <p>
                Complexity of training for logistic regression methods with gradient based optimization: O((f+1)csE), where:
              <ul>
                  <li>f - number of features (+1 because of bias). Multiplication of each feature times it's weight (foperations, +1 for bias). Another f + 1 operations for summing all of them (obtaining prediction). Using gradient method to improve weights counts for the same number of operations, so in total we get 4* (f+1) (two for forward pass, two for backward), which is simply O(f+1).</li>
                  <li>c - number of classes (possible outputs) in your logistic regression. For binary classification it's one, so this term cancels out. Each class has it's corresponding set of weights.</li>
                  <li>s - number of samples in your dataset, this one is quite intuitive I think.</li>
                  <li>E - number of epochs you are willing to run the gradient descent (whole passes through dataset)</li>
                </ul>
                <br />
              Note: this complexity can change based on things like regularization (another c operations), but the idea standing behind it goes like this.
              </p>
              <h5 className='text-muted'>Interpretability</h5>
              <p>
                The formulation of logistic regression in terms of log odds is the fundamental reason why logistic regression coefficients aren't interpretable.  logistic regression isn't completely a black box: The linearity assumption means that you can compare the relative impact of the covariates by their coefficients, (assuming you've appropriately scaled the covariates). And the impact of changing a covariate depends only upon current estimated probability and the magnitude of the change, (in more complex models it can depend on the current values of all of the covariates).
              </p>
            </div>
          </TabPane>
          <TabPane tabId="5">
            <div>
              <h5 className='text-muted'>Description</h5>
              <p>
                A decision tree is a decision support tool that uses a tree-like model of decisions and their possible consequences, including chance event outcomes, resource costs, and utility.
              </p>
              <h5 className='text-muted'>Data Requirement</h5>
              <p>
                Decision trees can handle both categorical and numerical data.
              </p>
              <h5 className='text-muted'>Complexity</h5>
              <p>
                Let 𝑁 = number of training examples, 𝑘= number of features, and 𝑑 = depth of the decision tree. The time complexity for decision trees is in 𝑂(𝑁𝑘𝑑) .
              </p>
              <h5 className='text-muted'>Interpretability</h5>
              <p>
                It is highly interpretable. Different Decisions are observable.
              </p>
            </div>
          </TabPane>
          <TabPane tabId="6">
            <div>
              <h5 className='text-muted'>Description</h5>
              <p>
                A neural network is a series of algorithms that endeavors to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates.
              </p>
              <h5 className='text-muted'>Data Requirement</h5>
              <p>
                Need a large large dataset.
              </p>
              <h5 className='text-muted'>Complexity</h5>
              <p>
                The complexity for learning 𝑚 examples, where each gets repeated 𝑒 times, and where 𝑤 is the number of weights, is (𝑤∗𝑚∗𝑒).
              </p>
              <h5 className='text-muted'>Interpretability</h5>
              <p>
                Neural networks are not considered to be interpretable.
              </p>
            </div>
          </TabPane>
          <TabPane tabId="7">
            <div>
              <h5 className='text-muted'>Description</h5>
              <p>
                A Support Vector Machine (SVM) is a discriminative classifier formally defined by a separating hyperplane. In other words, given labeled training data (supervised learning), the algorithm outputs an optimal hyperplane which categorizes new examples.
              </p>
              <h5 className='text-muted'>Data Requirement</h5>
              <p>
                Data should be numerical.
              </p>
              <h5 className='text-muted'>Complexity</h5>
              <p>
                Linear SVM has prediction complexity 𝑂(𝑑) with 𝑑 is the number of input dimensions since it is just a single inner product. The followings illustrate SVM algorithms runt time based on the number of datasets.
              </p>
              <Img src={svm1} />
              <Img src={svm2} />
              <h5 className='text-muted'>Interpretability</h5>
              <p>
                Linear SVMs are also interpretable as any other linear model, since each input feature has a weight that directly influences the model output. Non-linear SVMs are partially interpretable, as they tell you which training data are relevant for prediction, and which aren't. This is not possible for other methods such as Random Forests or Deep Networks.
              </p>
            </div>
          </TabPane>
          <TabPane tabId="8">
            <div>
              <h5 className='text-muted'>Description</h5>
              <p>
                Bayesian networks are a type of probabilistic graphical model that uses Bayesian inference for probability computations. Bayesian networks aim to model conditional dependence, and therefore causation, by representing conditional dependence by edges in a directed graph. Through these relationships, one can efficiently conduct inference on the random variables in the graph through the use of factors.
              </p>
              <h5 className='text-muted'>Data Requirement</h5>
              <p>
                Data should be categorical.
              </p>
              <h5 className='text-muted'>Complexity</h5>
              <p>
                It is NP hard.
              </p>
              <h5 className='text-muted'>Interpretability</h5>
              <p>
                Bayesian networks are visually interpretable.
              </p>
            </div>
          </TabPane>
        </TabContent>
      </Content>
      <CruFragment />
    </Fragment>
  )
}
export default Algorithms


const Content = Styled.div`
    padding-left: 2rem;
    padding-bottom: 2rem;
`
const Img = Styled.img`
    display: block;
    width: 80%;
    height: auto;
    margin-top: 3rem;
    margin-bottom: 3rem;
    margin-left: auto;
    margin-right: auto;
`