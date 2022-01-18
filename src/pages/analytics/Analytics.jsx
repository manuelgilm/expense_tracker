import React from 'react'
import "./analytics.css"
import { useContext } from 'react'
import { userContext } from '../../userContext'

export default function Analytics() {
    const {user, setUserContext} = useContext(userContext)
    return (
        <div className='analytics'>
            
            <h1>
                {user.username} Analytics page {user.email}
            </h1>
                
        </div>
    )
}
