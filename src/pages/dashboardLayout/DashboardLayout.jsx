import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'

import "../../App.css"


export default function DashboardLayout(props) {
    return (
        <div className="app">
          <Topbar/>
            <div className="container">
              <Sidebar/>
              {props.component}
            </div>
          </div>
    )
}
