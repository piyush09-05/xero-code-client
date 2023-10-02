import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Signup from './components/SignUp/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';

import LoginTwo from './components/LoginTwo/LoginTwo';
import LoginThree from './components/LoginThree/LoginThree';



import './App.css';

function App() {
 
  return (

    // <LoginThree />
    <Router>
      <Routes>
        <Route path="/" element={<Signup /> } />
        <Route path="/login" element={<Login /> } />
        <Route path="/dashboard/:username/:email/" element={<Dashboard />} /> {/* Route to the Dashboard component */}
        <Route path = "/select/:username/:email" element= {<LoginTwo/>} />
        <Route path = "/selecttwo/:username/:email" element = {<LoginThree/>} />
      </Routes>
    </Router>
  );
}

export default App;
