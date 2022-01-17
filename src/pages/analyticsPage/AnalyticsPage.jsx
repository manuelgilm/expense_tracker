import React from 'react'
import Analytics from '../analytics/Analytics'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'

import "../../App.css"

export default function AnalyticsPage() {
    return (
        <div className="app">
          <Topbar/>
            <div className="container">
              <Sidebar/>
              <Analytics/>
            </div>
          </div>
      )
}
