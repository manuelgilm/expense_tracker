import React from 'react'
import CategoryTag from './CategoryTag'
import "./widget.css"

export default function TableItem(props) {
    return (
        <tr className="widgetTr">
            <td className="widgetDescription">{props.description}</td>
            <td className="widgetDate">{props.date}</td>
            <td className="widgetAmount">{props.amount}</td>
            <td className="widgetStatus">
                <CategoryTag tag={props.categoryName} bgColor={props.color} />
            </td>
      </tr>
    )
}
