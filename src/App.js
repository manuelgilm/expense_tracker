import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./index.css"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Financial Tracker  </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
        <Routes>
          <Route exact path='/' component={SignIn} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
        </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
