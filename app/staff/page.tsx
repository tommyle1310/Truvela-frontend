'use client'
import { SearchBar } from '@/components/SearchBar'
import { StaffTable } from '@/components/Table/StaffTable'
import { Badge } from '@/components/ui/badge'
import React from 'react'

const page = () => {
    return (
        <div className='p-4 flex flex-col gap-4'>
            <SearchBar />
            <div className="flex items-center gap-2">
                <div className='text-lg font-bold'>Staffs</div>
                <Badge className='bg-lavender-success-300 text-lavender-success-800'>100</Badge>
            </div>
            <StaffTable />
        </div>
    )
}

export default page
