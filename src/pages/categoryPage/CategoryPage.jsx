import React from 'react'
import Category from '../category/Category'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'

import "../../App.css"

export default function CategoryPage() {
    return (
        <div className="app">
          <Topbar/>
            <div className="container">
              <Sidebar/>
              <Category/>
            </div>
          </div>
      )
}
