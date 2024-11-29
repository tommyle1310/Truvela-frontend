'use client'
import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { START_HOUR, TOTAL_SLOTS } from '@/lib/constants';
import { dataBookings, TimelineProps } from '@/data/bookings';
import { StaffForm } from '@/components/Modal/StaffForm';
import { HoverCardBooking } from '@/components/HoverCard/booking';
import { DatePicker } from '@/components/DatePicker';




const Timeline: React.FC<TimelineProps> = ({ data }) => {
    const hours = Array.from({ length: TOTAL_SLOTS + 1 }, (_, i) => i); // [0, 1, ..., 12]
    const [currentTimeLeft, setCurrentTimeLeft] = useState(0);

    useEffect(() => {
        const updateCurrentTimeLeft = () => {
            const now = new Date();
            const hour = now.getHours();
            const minute = now.getMinutes();

            // Define the starting hour (10 AM) and the total slots (12 hours, from 10:00 to 22:00)
            const startHour = START_HOUR;
            const totalSlots = TOTAL_SLOTS + 1;
            const slotWidth = 1 / totalSlots;

            // Calculate the hour index relative to 10 AM
            const hourIndex = hour - startHour;

            // If the hour is within our tracked range, calculate the percentageLeft
            if (hourIndex >= 0 && hourIndex < totalSlots) {
                console.log(hourIndex * slotWidth)
                const basePercentage = hourIndex * slotWidth; // Base percentage for the start of the hour slot
                const minuteFraction = minute / 60; // Fractional percentage within the hour
                const percentageLeft = basePercentage + minuteFraction * slotWidth;

                setCurrentTimeLeft((percentageLeft * 100));
            }
        };

        updateCurrentTimeLeft();
        const interval = setInterval(updateCurrentTimeLeft, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="relative overflow-x-auto whitespace-nowrap ">
            <div className="flex relative ml-24 bg-gray-200 rounded-md overflow-hidden">
                {hours.map(hour => (
                    <div key={hour} className="w-1/12 py-1 text-center border-l border-l-lavender-info-500">
                        {hour + 10}:00
                    </div>
                ))}
                <div
                    className="absolute top-0 bottom-0 bg-[#A265E9] w-1 z-10"
                    style={{ left: `${Math.min(currentTimeLeft, 99.9)}%` }} // Ensure it stays before 22:00
                ></div>

            </div>
            {data[0].rooms.map((room, index) => (
                <div key={index} className="flex items-center my-2">
                    <div className="w-24 font-bold text-center bg-white">{room.name}</div>
                    <div className="relative flex-grow h-14  ">
                        {room.slots.map((slot, idx) => {
                            const slotStart = 10 + slot.start;
                            const slotEnd = slotStart + slot.duration;
                            const now = new Date();
                            const currentHour = now.getHours() + now.getMinutes() / 60;

                            let bgColor = 'bg-blue-500'; // Default color for slot

                            if (currentHour > slotEnd) {
                                bgColor = 'bg-[#C7F29D] border-lavender-success-700 shadow-lavender-success-900 border-2'; // Past items
                            } else if (currentHour >= slotStart && currentHour <= slotEnd) {
                                bgColor = 'bg-[#BF93F3] border-lavender-primary-700 shadow-lavender-primary-900 border-2'; // Current items
                            } else if (currentHour < slotStart) {
                                bgColor = 'bg-[#F9986E] border-lavender-danger-700 shadow-lavender-danger-900 border-2'; // Future items
                            }

                            return (
                                <HoverCardBooking bgColor={bgColor} idx={idx} slot={slot} key={idx} />
                            );
                        })}
                    </div>
                </div>
            ))}

        </div>
    );
};



const Bookings: NextPage = () => (
    <div className='p-4 flex flex-col gap-4'>
        <div className="flex items-center justify-between">
            <h3 className="text-lavender-primary-600 text-xl font-bold">Bookings</h3>
            <DatePicker />
        </div>
        <Timeline data={dataBookings} />
    </div>
);

export default Bookings;
