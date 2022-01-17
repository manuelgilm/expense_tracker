import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import User from '../user/User'
import Topbar from '../../components/topbar/Topbar'
import "../../App.css"

export default function UserPage() {
    return (
        <div className='app'>
          <Topbar/>
          <div className="container">
            <Sidebar/>
            <User/>
          </div>
        </div>
    )
}
