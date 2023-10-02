import "./LoginTwo.css"
import xeroLogo from "../SignUp/xero-logo.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const LoginTwo = () =>{

    const navigate = useNavigate();

    const {username,email} = useParams();

    const [userdata, setuserdata] = useState({
        emailid: email,
        profile: ""
      });
      
      const ClickHandler = async (e) => {
        const newUserData = {
          emailid: email,
          profile: e.target.innerHTML
        };
      
        // Set the userdata state with the new data
        setuserdata(newUserData);
      
        const url = 'http://localhost:9000/add-role';
      
        // Make the POST request using Axios with the updated userdata
        await axios.post(url, newUserData)
          .then((response) => {
            console.log('POST request successful');
            console.log(response.data);
            navigate(`/selecttwo/${username}/${email}`);
          })
          .catch((error) => {
            console.error('Error making POST request:', error);
          });
      }
      


    return (
        <div className="logintwocontainer">

            <div className="logo-container">
                <img src={xeroLogo} alt="" />
                <p>Welcome {username}.</p> <p> Choose from following</p>
            </div>

            <div className="button-container">
               <div className="button-div">
                  <button onClick = {ClickHandler} className="styled-button">Developer</button>
                </div>
              <div className="button-div">
                 <button  onClick = {ClickHandler} className="styled-button">Organisation</button>
               </div>
              <div className="button-div">
                  <button onClick = {ClickHandler} className="styled-button">Company</button>
             </div>
            </div>
        </div>
    )
}
export default LoginTwo;