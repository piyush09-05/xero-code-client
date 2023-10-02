import "./Steps.css"
import awslogo from "./aws.png"
import gcplogo from "./gcplogo.png"

import githublogo from "./github.png"
import gitlablogo from "./gitlab 2.png"
import bitbucketlogo from "./bitbucket.png"

import mogodblogo from "./mongodb 3.png"
import redislogo from "./redis 2.png"
import postgresslogo from "./Postgresql_elephant 3.png"



const Steps = (props) => {

    const clickHandler = () => {
        props.handleIncrement();
    }
    return (
        <div className="step-comp-container">
          <h3>Step 1</h3>
          Connect to Cloud
          <div className="cloudOptions">
          <a  onClick = {clickHandler} className="google-button">
           <img  src={awslogo} alt="Google Logo" className="logo" />
              AWS
          </a>
         <a onClick = {clickHandler} className="github-button">
          <img src={gcplogo} alt="GitHub Logo" className="logo" />
            GCP
          </a>
         
          </div>

          <h3>Step 2</h3>
          Connect to Source Code
          <div className="sourcecodeOptions">
          <a  onClick = {clickHandler} className="google-button">
           <img src={githublogo} alt="Google Logo" className="logo" />
              Github
          </a>
         <a onClick = {clickHandler} className="github-button">
          <img src={gitlablogo} alt="GitHub Logo" className="logo" />
            Gitlab
          </a>
          <a  onClick = {clickHandler} className="google-button">
           <img src={bitbucketlogo} alt="Google Logo" className="logo" />
              Bit Bucket
          </a>
         
          </div>

          <h3>Step 3</h3>
          Connect to Data Source
          <div className="DataSourceOptions">
          <a  onClick = {clickHandler} className="google-button">
           <img src={mogodblogo} alt="Google Logo" className="logo" />
             MongoDB
          </a>
         <a onClick = {clickHandler} className="github-button">
          <img src={redislogo} alt="GitHub Logo" className="logo" />
             Redis
          </a>
          <a  onClick = {clickHandler} className="google-button">
           <img src={postgresslogo} alt="Google Logo" className="logo" />
              PostgreSQL
          </a>
         
          </div>
        </div>
    )
}
export default Steps