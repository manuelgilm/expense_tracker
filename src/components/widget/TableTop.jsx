import React from 'react'
import "./widget.css"

export default function TableTop() {
    return (
        <tr className="widgetTr">
            <th className="widgetTh">Description</th>
            <th className="widgetTh">Date</th>
            <th className="widgetTh">Amount</th>
            <th className="widgetTh">Category</th>
        </tr>
    )
}
