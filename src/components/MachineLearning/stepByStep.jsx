import React, { Fragment } from 'react'
import Styled from 'styled-components'
import CruFragment from '../crufragment'
import machine_learning1 from '../../images/machine_learning1.jpg'
import machine_learning2 from '../../images/machine_learning2.jpg'
import machine_learning3 from '../../images/machine_learning3.png'
import machine_learning4 from '../../images/machine_learning4.png'
import machine_learning5 from '../../images/machine_learning5.png'


const StepByStep = () => {
  return (
    <Fragment>
      <Content>
        <div>
          <p>
            When using machine learning for addressing a problem, it is important to become familiar with different areas in ML. Each area includes different topics:
        </p>
          <Img src={machine_learning1} />
          <p>
            Now, let's look at one of the road maps to apply machine learning for addressing a specific problem. Choosing a suitable machine learning algorithm for the problem depends on different factors, such as the nature of the data, computational time, etc.
        </p>
          <Img src={machine_learning2} />
          <p>
            The following sections discuss important concepts relating to different steps for choosing machine learning algorithms.
        </p>
        </div>
        <div>
          <h4 >Supervised Learning vs. Unsupervised Learning</h4>
          <h5>Supervised Learning</h5>
          <p>
            In supervised learning, a labeled dataset is ready for training. In fact, it is known what the outcome should look like.
          </p>
          <p>
            Supervised Learning problems are broadly categorized as regression and classification problems.
          </p>
          <h6 className='text-muted'>Regression Problem</h6>
          <p>
            In a regression problem, results are predicted within a continuous output, meaning that we are trying to map input variables to some continuous function. The metrics that are commonly minimized/maximized in the model fit stage for regression problems are the Mean Squared Error (MSE), Mean Absolute Error (MAE), R<sup>2</sup>, etc.
          </p>
          <p>
            Most popular regression algorithms are:
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
          <h6 className='text-muted'>Classification Problem</h6>
          <p>
            In a classification problem, input variables are into discrete categories. A classification model attempts to draw some conclusions from observed values. Given one or more inputs, a classification model will try to predict the value of one or more outcomes. The metrics that are commonly minimized/maximized in classification problems are the misclassification rate, Area Under the Receiver Operating Characteristic curve (AUROC or AUC), F1-score, sensitivity, specificity, etc.
          </p>
          <p>
            There are two types of classification analysis: <br />
            <ol>
              <li>Binomial Classification</li>
              <li>Multiclass Classification</li>
            </ol>
          </p>
          <b className='text-muted'>Binomial Classification</b>
          <p>
            Binary or binomial classification is the task of classifying the elements of a given set into two groups
          <br />
          Popular algorithms: Lasso Logistic Regression, Decision trees, Random Forest, Bayesian networks, Support vector machines, Neural networks
        </p>
          <b className='text-muted'>Multiclass Classification</b>
          <p>
            Multiclass classification is a classification task with more than two classes.
          <br />
          Popular algorithms: Multinomial logit, Decision trees, Random Forest, Bayesian networks, Support vector machines, Neural networks, Nearest neighbor
        </p>
          <p>
            The following image shows the difference between classification and regression:
         </p>
          <Img src={machine_learning3} />
        </div>
        <div>
          <h5>Unsupervised Learning</h5>
          <p>
            Unsupervised learning is a type of machine learning algorithm used to draw inferences from datasets consisting of input data without labeled responses. The most common unsupervised learning method is cluster analysis, which is used for exploratory data analysis to find hidden patterns or grouping in data. Also, dimension reduction is considered as unsupervised learning, in which the variables of data are reduced based on the relationships between datasets.
          </p>
          <h6 className='text-muted'>Clustering Algorithms</h6>
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
          <p>
            The below image shows the difference between hierarchical and non-hierarchical clusterings.
          </p>
          <Img src={machine_learning4} />
          <h6 className='text-muted'>Dimensional Reduction</h6>
          <p>
            Some variables (features) are redundant or irrelevant according to the prediction. With the dimension reduction, the true relationship between features and the outcome can be identified.
          </p>
        </div>
        <div>
          <h4 >Interpretability vs. Accuracy</h4>
          <p>
            There is a tradeoff between the predictive accuracy of a model and how easy the model is to interpret. For example, linear regression is a simple model with a few parameters which is easy to interpret. However, it may not have sufficient predictive power for particular use cases. On the other hand, models like neural networks with millions of parameters will often highly perform for prediction. However, these complex models do not always make business sense and it would be hard to explain to clients how models made decisions.
        </p>
          <p>
            It is important to deliver a project to a business client and build confidence in the algorithmic approaches. There are different ways to increase the understandability of machine learning results for a client user. One of them is to explain how different inputs affect the model's performance.
        </p>
          <Img src={machine_learning5} />
        </div>
      </Content>
      <CruFragment />
    </Fragment>
  )
}
export default StepByStep


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