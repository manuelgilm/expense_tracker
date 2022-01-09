import React from 'react'
import "./feacturedInfo.css"

import FeaturedInfo from './FeaturedInfo'

export default function FeaturedInfoContainer() {
    return (
            <div className='featured'>
                <FeaturedInfo title="Total" amount="11.4" rate="-11.4" description="Total Expenses" trend="down"/>
                <br/>
                <FeaturedInfo title="Monthly" amount="8.2" rate="2.4" description="Compared to last month" trend="up"/>
                <br />
                <FeaturedInfo title="Daily" amount="17.89" rate="3.14" description="Compared to last month" trend="down"/>
            </div>
        )
}
