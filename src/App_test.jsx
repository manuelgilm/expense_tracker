import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar"
import Home from "./pages/home/Home";
import "./App.css"

function App() {
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

export default App;