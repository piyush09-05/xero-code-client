import { useState } from "react";
import xeroLogo from "../SignUp/xero-logo.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom"; 

const LoginThree = () => {

    const navigate = useNavigate();

    const{username,email} = useParams();

    const [deploymentOption,setDeployementOption] = useState({
        emailid:email,
        deploymentOption:"self hosting"
    })

    const selectDeploymentHandler =async (e) =>{
        const newDeploymentOption = {
            emailid: email,
            deploymentOption: e.target.innerHTML
          };
        
          setDeployementOption(newDeploymentOption);
        
          const url = 'http://localhost:9000/add-deployment';
        
          // Make the POST request using Axios
          await axios.post(url, newDeploymentOption)
            .then((response) => {
              // console.log('POST request successful');
              // console.log(response.data);
              navigate(`/dashboard/${username}/${email}`);
            })
            .catch((error) => {
              console.error('Error making POST request:', error);
            });
    }
    return (
        <div className="logintwocontainer">

            <div className="logo-container">
                <img src={xeroLogo} alt="" />
                <p>Choose from the following deployment options:</p>
            </div>

            <div className="button-container">
               <div className="button-div">
                  <button onClick = {selectDeploymentHandler} className="styled-button">Self hosting</button>
                </div>
              <div className="button-div">
                 <button onClick = {selectDeploymentHandler} className="styled-button">XeroCode Hosting</button>
               </div>
             
            </div>
        </div>
    )
}
export default LoginThree;