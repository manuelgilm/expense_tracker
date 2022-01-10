import React from 'react'
import "./widget.css"
export default function CategoryTag(props) {
    return (
        <div style={{"background-color":props.bgColor}} className='widgetButton'>
            <span className='categoryText'>{props.tag}</span>
        </div>
    )
}
