import React from 'react'
import './Statistic.css'

export default function Statistic() {
    return (
        <div className='ContainerStatics'>

            <div className="subStatisticElement">
                <span className='value'> 10+ </span>
                <span className='label'> Years on the market</span>

            </div>
            <div className="subStatisticElement">
                <span className='value'> 100+ </span>
                <span className='label'> Years on the market</span>

            </div>
            <div className="subStatisticElement">
                <span className='value'> 50K+</span>
                <span className='label'> Years on the market</span>
            </div>
            <div className="subStatisticElement">
                <span className='value'> 45+ </span>
                <span className='label'> Years on the market</span>
            </div>


        </div>
    )
}
