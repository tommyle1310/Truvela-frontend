'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const sidebarItems = [
    { id: 1, title: 'Dashboard', linkHref: '/' },
    { id: 2, title: 'Bookings', linkHref: '/bookings' },
    { id: 3, title: 'Client Management', linkHref: '/clients' },
    { id: 4, title: 'Staff Management', linkHref: '/staff' },
    { id: 5, title: 'Service Management', linkHref: '/services' },
    { id: 6, title: 'Revenue & Financials', linkHref: '/financials' },
    { id: 7, title: 'Inventory & Products', linkHref: '/inventory' },
    { id: 8, title: 'Tasks & To-Do List', linkHref: '/tasks' },
    { id: 9, title: 'Reports & Analytics', linkHref: '/reports' },
    { id: 10, title: 'Notifications & Alerts', linkHref: '/notifications' },
    { id: 11, title: 'Settings', linkHref: '/settings' },
    { id: 12, title: 'Log Out', linkHref: '/logout' }
];

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-col items-center border bg-white">
            {sidebarItems.map((item) => (
                <Link

                    key={item.id}
                    href={item.linkHref}
                    className={`flex w-full p-2 gap-1 hover:duration-200 hover:bg-lavender-primary-100 cursor-pointer items-center ${pathname === item.linkHref ? 'bg-lavender-primary-200 font-bold' : ''
                        }`}
                >
                    {item.title}
                </Link>
            ))}
        </div>
    );
};

export default Sidebar;
