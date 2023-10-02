import React from 'react';
import './Sidebar.css'; // Create a CSS file for styling
import logoImage from "../SignUp/xero-logo.png"



function Sidebar({onItemClick}) {
  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>

      {/* Sidebar items */}
      <div className="sidebar-items">
        <div className="sidebar-item" onClick={onItemClick}>
        <i className="icon fa fa-user"></i>
          <p>XeroCodee</p>
        </div>
        <div className="sidebar-item">
          <i className="icon fa fa-user"></i>
          <p>Builder Center</p>
        </div>
        <div className="sidebar-item">
          <i className="icon fa fa-envelope"></i>
          <p>Service Board</p>
        </div>
        <div className="sidebar-item">
          <i className="icon fa fa-home"></i>
         <p>Clusters</p>
        </div>
        <div className="sidebar-item">
          <i className="icon fa fa-user"></i>
          <p>Databases</p>
        </div>
        <div className="sidebar-item">
          <i className="icon fa fa-envelope"></i>
          <p>Environment</p>
        </div>
        <div className="sidebar-item">
          <i className="icon fa fa-home"></i>
          <p>Workflow</p>
        </div>
        <div className="sidebar-item">
          <i className="icon fa fa-user"></i>
          <p>Monitoring</p>
        </div>
        <div className="sidebar-item">
          <i className="icon fa fa-envelope"></i>
          <p>Security</p>
        </div>
        <div className="sidebar-item">
          <i className="icon fa fa-home"></i>
          <p>Web Hooks</p>
        </div>
        <div className="sidebar-item">
          <i className="icon fa fa-user"></i>
          <p>Log Error</p>
        </div>
      
        {/* Add more sidebar items with icons */}
      </div>
    </div>
  );
}

export default Sidebar;
