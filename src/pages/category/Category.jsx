import React from 'react'
import "./category.css"
import { useLocation } from 'react-router-dom';

export default function Category() {
    const location = useLocation();
    const user = location.state
    console.log(user)
    return (
        <div className='category'>
            Category Page
        </div>
    )
}
