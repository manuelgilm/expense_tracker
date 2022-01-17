import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons'
import { useContext } from 'react'
import { userContext } from '../../userContext'


export default function Topbar(props) {
    const {user, setUserContext} = useContext(userContext)
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
                    <img src={props.userImage} alt={user.username} className='topAvatar'/>
                </div>
            </div>
        </div>
    )
}
