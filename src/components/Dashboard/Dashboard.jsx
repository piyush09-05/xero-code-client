import "./Dashboard.css"
import Sidebar from "../Sidebar/Sidebar";
import SearchBar from "../Searchbar/Searchbar";
import Main from "../Main/Main";

import { useState } from "react";

const Dashboard  = () => {
    const[showDashboard, setShowDashboard] = useState(false);

    const handleSidebarItemClick  =() => {
        setShowDashboard(!showDashboard);
    }

    return(
        <div>
            <div className="SidebarContainer">
            <Sidebar onItemClick={handleSidebarItemClick} />
            </div>
            <div className="SearchbarContainer">
                <SearchBar />
            </div>
            <div>
            {showDashboard && <Main/>}
            </div>
        </div>
    )
}
export default Dashboard;