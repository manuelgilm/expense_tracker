import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import UserDashboard from "./pages/dashboard/UserDashboard";
import SignIn from "./pages/login/SignIn";
import SignUp from "./pages/login/SignUp"

function App() {
  return (
    <React.StrictMode>
    <Router>      
      <Routes>
          <Route path="/" element={<SignIn />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/dashboard" element={<UserDashboard />}/>
      </Routes>
    </Router>
    </React.StrictMode>
  );
}

export default App;
