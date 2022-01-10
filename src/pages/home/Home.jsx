import React from 'react'
import "./home.css"

import FeaturedInfoContainer from '../../components/featuredInfo/FeaturedInfoContainer'
import Chart from '../../components/chart/Chart'
import Widget from '../../components/widget/Widget'

import {data} from "./dummyData"

export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfoContainer />
            <Chart data={data}/>
            <Widget/>
        </div>
    )
}
