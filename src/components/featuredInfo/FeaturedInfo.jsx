import React from 'react'
import "./feacturedInfo.css"

import {ArrowDownward,ArrowUpward} from "@material-ui/icons"

export default function FeaturedInfo(props) {
    return (
        <div className='featuredItem'>
            <span className='featuredTitle'>{props.title}</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>{"$"} {props.amount}</span>
                <br/>
                <span className='featuredMoneyRate'>{props.rate}
                    { props.trend === "down" ? <ArrowDownward className='featuredIcon negative'/> : <ArrowUpward className='featuredIcon positive'/>}
                </span>
            </div>
            <span className='featuredSub'>{props.description}</span>
        </div>
    )
}
