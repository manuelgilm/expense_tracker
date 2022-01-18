import React from 'react'
import "./user.css"
import { useContext } from 'react'
import { userContext } from '../../userContext'

export default function User() {
    const {user, setUser} = useContext(userContext)
    return (
        <div className='user'>
            <h1>
                User Page  {user.username}
            </h1>
            
        </div>
    )
}
