import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons'

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>EXPENSE TRACKER</span>
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'>
                        <NotificationsNone/>
                        <span className='topIconBagde'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Language/>
                        <span className='topIconBagde'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Settings/>
                        <span className='topIconBagde'></span>
                    </div>
                    <img src="https://pixy.org/src/480/4800346.jpg" alt="image" className='topAvatar'/>
                </div>
            </div>
        </div>
    )
}
