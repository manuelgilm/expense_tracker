import "./sidebar.css";
import {Person, TrendingUpOutlined , Home, Create, Money, InfoSharp, AlarmAdd, TimelineSharp} from '@material-ui/icons';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
          <Link to="/dashboard">
            <li className="sidebarListItem active">
              <Home className="sidebarIcon" />
              Home
            </li>
          </Link>
          <Link to="/analytics">
            <li className="sidebarListItem">
              <TrendingUpOutlined  className="sidebarIcon" />
              Analytics
            </li>
          </Link>
            <Link to="/user">
              <li className="sidebarListItem">
                <Person className="sidebarIcon" />
                User
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Expense Register</h3>
          <ul className="sidebarList">
            <Link to="/category">
                <li className="sidebarListItem">
                  <Create className="sidebarIcon" />
                  Category
                </li>
            </Link>
              <li className="sidebarListItem">
                <Money className="sidebarIcon" />
                Expenses
              </li>
            <li className="sidebarListItem">
              <InfoSharp className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Financial Tools </h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <AlarmAdd className="sidebarIcon" />
              Thresholding Alarm
            </li>
            <li className="sidebarListItem">
              <TimelineSharp className="sidebarIcon" />
              Expense Forecast
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar