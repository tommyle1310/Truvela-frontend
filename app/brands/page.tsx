'use client'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { SearchBar } from '@/components/SearchBar'
import { SpaForm } from '@/components/Modal/SpaForm'
import { SpaBrands } from '@/data/spa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faEllipsis } from '@fortawesome/free-solid-svg-icons'


const page = () => {
    return (
        <div className="p-4 flex flex-col gap-4">

            <h1 className='text-xl font-bold text-lavender-primary-700'>My Brands</h1>
            <div className="flex justify-between items-center">
                <SearchBar />
                <SpaForm />
            </div>
            <div className='grid grid-cols-2 gap-4'>
                {SpaBrands.map(item => (
                    <Card key={item.id} className='gap-0 overflow-hidden'>
                        <div className="flex items-center gap-4 p-4">
                            <Image width={100} height={100} src={item.avatar.url} alt='logo spa brand' className="w-full aspect-square basis-4/12 bg-contain bg-no-repeat" style={{ background: `url('https://github.com/shadcn.png')` }}></Image>
                            <div className="flex-grow overflow-hidden flex gap-1 flex-col ">
                                <CardHeader className='p-0 flex-grow '>
                                    <CardTitle>{item.name}</CardTitle>
                                    <CardDescription className='text-sm flex flex-wrap w-full'>{item.address}</CardDescription>
                                </CardHeader>
                                <CardContent className='p-0 flex-grow'>
                                    {/* <p>Card Content</p> */}
                                </CardContent>
                                <CardFooter className='p-0 overflow-hidden w-full'>
                                    <ScrollArea className=" whitespace-nowrap ">
                                        {
                                            item.tag.map((item, index) => (
                                                <div key={index} className="flex items-center gap-1 mb-2">
                                                    <div className={`px-2 py-1  border-2 ${item === 'Top Performer' ? 'text-lavender-success-600 bg-lavender-success-100 border-lavender-success-600' : (item === 'Closing' ? 'text-lavender-danger-600 bg-lavender-danger-100 border-lavender-danger-600' : 'text-lavender-info-600 bg-lavender-info-100 border-lavender-info-600')} text-xs rounded-sm`}>
                                                        {item}
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        <ScrollBar orientation="horizontal" />
                                    </ScrollArea>
                                </CardFooter>
                            </div>
                            <div className="self-start flex justify-end">
                                <FontAwesomeIcon icon={faEllipsis} className='hv rounded-full p-2 center hover:bg-slate-100' />
                            </div>
                        </div>
                    </Card>
                ))}

            </div>
        </div>
    )
}

export default page
