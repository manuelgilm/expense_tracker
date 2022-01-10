import React from 'react'
import CategoryTag from './CategoryTag';
import TableTop from './TableTop';
import TableItem from './TableItem';
import {latestTransactions} from "../../pages/home/dummyData"

import "./widget.css"

function createTableItem(props){
    return (<TableItem 
        description={props.description}
        date={props.date}
        amount={props.amount}
        categoryName={props.categoryName}
        color = {props.color}
    />  )
}

export default function Widget() {
    return (
        <div className="widget">
        <h3 className="widgetTitle">Latest transactions</h3>
        <table className="widgetTable">
            <TableTop/>
            {latestTransactions.map(createTableItem)}
        </table>
      </div>
    )
}
