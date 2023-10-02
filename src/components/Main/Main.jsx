import React from 'react';
import './Main.css';
import Dh from '../DashboardHeader/Dh';
import Steps from '../Steps/Steps';
import { useState } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';

function Main() {
  const [progress, setProgress] = useState(0);

  const handleIncrement = () => {
    setProgress((prevProgress) => {
      const newProgress = prevProgress + 40;
      return newProgress <= 100 ? newProgress : 100;
    });
  };

  return (
    <div className="dashboard">
       <div className='headerContainer'>
        <Dh />
       </div>

       <div className='bodyContainer'>
        < Steps  handleIncrement = {handleIncrement}/>
         <div className='ProgressContainer'>
          <h3>Progress</h3>
            <ProgressBar percentage= {progress}/>
           
         </div>
      </div>
    
    </div>
  );
}

export default Main;