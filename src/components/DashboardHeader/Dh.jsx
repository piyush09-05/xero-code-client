
import { useState } from "react";
import "./Dh.css"
import { useParams } from "react-router-dom";
 const Dh = () => {

    const [isDeveloperMode, setIsDeveloperMode] = useState(false);
    const {username} = useParams();

  const handleToggle = () => {
    setIsDeveloperMode(!isDeveloperMode);
  };

    return(
        <div className="dh_container">
        <div className="headingContainer">
            <h1>Hello {username}!</h1>
            <p>Welcome to XeroCodee System</p>
        </div>
        <div className="toggleContainer">
      <button className = "toggle-button" onClick={handleToggle}>
        {isDeveloperMode ? 'Production Mode' : 'Test Mode'}
      </button>
    </div>
        </div>
    )
}
export default Dh;