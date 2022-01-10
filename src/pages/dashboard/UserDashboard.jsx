import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Home from "../home/Home";

import "../../App.css"

function UserDashboard() {
  return (
    <div className="app">
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Home/>
      </div>
    </div>
  )
}

export default UserDashboard;