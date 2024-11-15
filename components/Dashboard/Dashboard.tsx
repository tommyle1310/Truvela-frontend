'use client'
import React from 'react'
import { DashboardCard } from './Card'
import { dashboardCardItem } from '@/data/dashboard'
import { ChartBar } from '../Visualization/BarChart'
import { ChartHorizontalBar } from '../Visualization/HorizontalBarChart'
import { ChartPie } from '../Visualization/PieChart'

const CURRENT_HOUR = new Date().getHours()
const LOGGED_IN_NAME = 'Tommy Teo'



const Dashboard = () => {
    return (
        <div className="p-4 flex flex-col gap-5">

            <h3 className='text-lg font-bold'>
                Good {CURRENT_HOUR >= 17 ? 'Evening' : 'Morning'}, {LOGGED_IN_NAME} 🙌
            </h3>
            <div className="grid grid-cols-3 gap-5">
                {dashboardCardItem?.map(item => (
                    <DashboardCard
                        description={item.description}
                        icon={item.icon} id={item.id}
                        mainValue={item.mainValue}
                        title={item.title}
                        trendMetric={item.trendMetric}
                        isTrendUp={item.isTrendUp}
                    />
                ))}
            </div>
            <div className="grid grid-cols-2 gap-5">
                <ChartBar />
                <ChartHorizontalBar />
                <ChartPie />
            </div>
        </div>
    )
}

export default Dashboard
