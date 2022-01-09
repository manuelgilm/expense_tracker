import React from 'react'
import "./home.css"

import FeaturedInfoContainer from '../../components/featuredInfo/FeaturedInfoContainer'
import Chart from '../../components/chart/Chart'
import {data} from "./dummyData"
console.log(data)

export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfoContainer />
            <Chart data={data}/>
        </div>
    )
}
