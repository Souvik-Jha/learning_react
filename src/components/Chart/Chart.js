import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css'

const Chart = (props) => {
    const DataPointValue = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...DataPointValue)

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    lebal={dataPoint.label}
                />
            )
            )}
        </div>
    )
}

export default Chart