import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
export default function Chart(props) {
    return (
        <div className='chart'>
            <h3 className='chartTitle'>Expenses</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={props.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="expense" stroke="#f79171" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
