'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faBell, faBoxArchive, faBoxesStacked, faBuildingCircleCheck, faCalendarCheck, faCalendarDays, faChartLine, faChevronDown, faCubesStacked, faFlag, faGear, faMoneyBills, faPeopleGroup, faPercent, faReceipt, faTasks, faUsersGear, IconDefinition } from '@fortawesome/free-solid-svg-icons';

type SideBarItem = {
    id: number,
    title: string,
    linkHref?: string,
    isPopover?: boolean,
    icon?: IconDefinition,
    dataPopover?: { id: number, title: string, linkHref: string, icon?: IconDefinition }[]
}

const sidebarItems: SideBarItem[] = [
    { id: 1, title: 'Dashboard', linkHref: '/', icon: faCubesStacked },
    { id: 2, title: 'Bookings', linkHref: '/bookings', icon: faCalendarCheck },
    {
        id: 3, title: 'Manager', isPopover: true, dataPopover: [
            { id: 3.1, title: 'Client Management', linkHref: '/clients', icon: faUsersGear },
            { id: 3.2, title: 'Staff Management', linkHref: '/staff', icon: faPeopleGroup },
            { id: 3.3, title: 'Service Management', linkHref: '/services', icon: faBoxArchive },
            { id: 3.4, title: 'Receipt Management', linkHref: '/receipts', icon: faReceipt },
            { id: 3.5, title: 'Inventory & Products', linkHref: '/inventory', icon: faBoxesStacked },
            { id: 3.6, title: 'Brands', linkHref: '/brands', icon: faBuildingCircleCheck },

        ]
    },
    { id: 4, title: 'Revenue & Financials', linkHref: '/financials', icon: faMoneyBills },
    { id: 5, title: 'Discounts & Promotions', linkHref: '/discounts_promotions', icon: faPercent },
    { id: 6, title: 'Tasks & To-Do List', linkHref: '/tasks', icon: faTasks },
    { id: 7, title: 'Reports & Analytics', linkHref: '/reports', icon: faFlag },
    { id: 8, title: 'Notifications & Alerts', linkHref: '/notifications', icon: faBell },
    { id: 9, title: 'Settings', linkHref: '/settings', icon: faGear },
    { id: 10, title: 'Log Out', linkHref: '/logout', icon: faArrowRightFromBracket }
];

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-col items-center border bg-gradient-to-br from-slate-700 to-violet-900 text-white px-4 py-2 pt-4 -mt-[2px]">
            {sidebarItems.map((item, index) => {
                if (item.isPopover) {
                    return (
                        <Popover key={Math.random() * 134712353252}>
                            <PopoverTrigger className='text-left w-full p-2 text-lavender-info-200 border-b flex items-center justify-between border-red-100'><div>Manager</div><FontAwesomeIcon className='text-xs' icon={faChevronDown} /></PopoverTrigger>
                            <PopoverContent className="w-full bg-gradient-to-tr from-lavender-primary-700 to-lavender-info-900">
                                <div className="flex flex-col gap-2 text-white">
                                    {sidebarItems[2]?.dataPopover?.map(item => (
                                        <Link key={item.id} href={item.linkHref} className={`flex w-full p-2  gap-1 hover:duration-200 hover:bg-lavender-primary-600 cursor-pointer hover:text-white rounded-sm items-center ${pathname === item.linkHref ? 'bg-lavender-primary-200 text-black font-bold' : ''
                                            }`}>{item.icon && <FontAwesomeIcon icon={item.icon} />} <span>{item.title}</span></Link>
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
                        className={`flex items-center gap-2 w-full p-2 rounded-md hover:duration-200 hover:text-white hover:bg-lavender-primary-700 cursor-pointer ${pathname === item.linkHref ? 'bg-lavender-primary-200 font-bold text-black' : ''
                            }`}
                    >
                        {item.icon && <FontAwesomeIcon icon={item.icon} />}
                        {item.title}
                    </Link>
                )
            })}

        </div>
    );
};

export default Sidebar;
