import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom"
import UserDashboard from "./pages/dashboard/UserDashboard";
import SignIn from "./pages/login/SignIn";
import SignUp from "./pages/login/SignUp"
import UserPage from "./pages/userPage/UserPage";
import AnalyticsPage from "./pages/analyticsPage/AnalyticsPage";
import CategoryPage from "./pages/categoryPage/CategoryPage";

function App() {

  return (
    <React.StrictMode>
    <Router>      
      <Routes>
          <Route path="/" element={<SignIn />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/dashboard" element={<UserDashboard />}/>
          <Route path="/user" element={<UserPage />}/>
          <Route path="/category" element={<CategoryPage />}/>
          <Route path="/analytics" element={<AnalyticsPage />}/>
      </Routes>
    </Router>
    </React.StrictMode>
  );
}

export default App;
