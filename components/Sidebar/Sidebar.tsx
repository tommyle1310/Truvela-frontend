'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';

type SideBarItem = {
    id: number,
    title: string,
    linkHref?: string,
    isPopover?: boolean,
    dataPopover?: { id: number, title: string, linkHref: string }[]
}

const sidebarItems: SideBarItem[] = [
    { id: 1, title: 'Dashboard', linkHref: '/' },
    { id: 2, title: 'Bookings', linkHref: '/bookings' },
    {
        id: 3, title: 'Manager', isPopover: true, dataPopover: [
            { id: 4, title: 'Client Management', linkHref: '/clients' },
            { id: 5, title: 'Staff Management', linkHref: '/staff' },
            { id: 6, title: 'Service Management', linkHref: '/services' },
            { id: 7, title: 'Receipt Management', linkHref: '/receipts' }
        ]
    },

    { id: 8, title: 'Revenue & Financials', linkHref: '/financials' },
    { id: 9, title: 'Inventory & Products', linkHref: '/inventory' },
    { id: 10, title: 'Tasks & To-Do List', linkHref: '/tasks' },
    { id: 11, title: 'Reports & Analytics', linkHref: '/reports' },
    { id: 12, title: 'Notifications & Alerts', linkHref: '/notifications' },
    { id: 13, title: 'Settings', linkHref: '/settings' },
    { id: 14, title: 'Log Out', linkHref: '/logout' }
];

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-col items-center border bg-white">
            {sidebarItems.map((item, index) => {
                if (item.isPopover) {
                    return (
                        <Popover key={Math.random() * 134712353252}>
                            <PopoverTrigger className='text-left w-full p-2 bg-lavender-info-100 text-lavender-info-800'><div>Manager</div></PopoverTrigger>
                            <PopoverContent className="w-42">
                                <div className="flex flex-col gap-2">
                                    {[{ id: 3, title: 'Client Management', linkHref: '/clients' },
                                    { id: 4, title: 'Staff Management', linkHref: '/staff' },
                                    { id: 5, title: 'Service Management', linkHref: '/services' },].map(item => (
                                        <Link key={item.id} href={item.linkHref} className={`flex w-full p-2 gap-1 hover:duration-200 hover:bg-lavender-primary-100 cursor-pointer items-center ${pathname === item.linkHref ? 'bg-lavender-primary-200 font-bold' : ''
                                            }`}>{item.title}</Link>
                                    ))}
                                </div>
                            </PopoverContent>
                        </Popover>
                    )
                }
                return (
                    <Link

                        key={item.id}
                        href={item.linkHref ?? ''}
                        className={`flex w-full p-2 gap-1 hover:duration-200 hover:bg-lavender-primary-100 cursor-pointer items-center ${pathname === item.linkHref ? 'bg-lavender-primary-200 font-bold' : ''
                            }`}
                    >
                        {item.title}
                    </Link>
                )
            })}

        </div>
    );
};

export default Sidebar;
