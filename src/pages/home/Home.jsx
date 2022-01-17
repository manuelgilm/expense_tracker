import React from 'react'
import "./home.css"

import FeaturedInfoContainer from '../../components/featuredInfo/FeaturedInfoContainer'
import Chart from '../../components/chart/Chart'
import Widget from '../../components/widget/Widget'

import {data} from "./dummyData"
import {useLocation} from 'react-router-dom';

export default function Home() {
    const location = useLocation();
    const user = location.state
    return (
        <div className='home'>
            <FeaturedInfoContainer />
            <Chart data={data}/>
            <Widget/>
        </div>
    )
}
