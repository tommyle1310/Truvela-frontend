'use client'
import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { START_HOUR, TOTAL_SLOTS } from '@/lib/constants';


interface Slot {
    start: number;
    duration: number;
    therapy: string;
    therapist: string
}

interface Room {
    name: string;
    slots: Slot[];
}

interface TimelineProps {
    data: Room[];
}

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
            {data.map((room, index) => (
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
                                <div
                                    key={idx}
                                    className={`absolute top-0 bottom-0 ${bgColor} rounded-md p-1`}
                                    style={{ left: `${(slot.start * 100) / 13}%`, width: `${slot.duration * 100 / 13}%` }}
                                >
                                    <div className="absolute -top-3 -right-5 px-1 flex flex-col text-sm rounded-sm font-semibold bg-white border border-lavender-primary-500 text-lavender-primary-500">{`${slot.duration * 60}m`}</div>
                                    <p className='font-semibold'>{slot.therapy}</p>
                                    <p className='text-xs'>{slot.therapist}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}

        </div>
    );
};

const data: Room[] = [
    {
        name: 'BED 1',
        slots: [
            { start: 0, duration: 2, therapist: 'Tommy Teo ', therapy: 'Healer' }, // 10:00 to 12:00
            { start: 5, duration: 1, therapist: 'Tommy Teo ', therapy: 'Relax' }   // 15:00 to 16:00
        ]
    },
    {
        name: 'BED 2',
        slots: [
            { start: 0, duration: 2.5, therapist: 'Tommy Teo ', therapy: 'Crystal Healing' }, // 10:00 to 11:30
            { start: 3, duration: 2, therapist: 'Tommy Teo ', therapy: 'Stretch' },   // 13:00 to 15:00
            { start: 6, duration: 2, therapist: 'Tommy Teo ', therapy: 'Relax' }   // 13:00 to 15:00
        ]
    },
    {
        name: 'BED 3',
        slots: [
            { start: 2, duration: 1.5, therapist: 'Tommy Teo ', therapy: 'Bloom' }, // 12:00 to 13:30
            { start: 4, duration: 0.5, therapist: 'Tommy Teo ', therapy: 'Facial Massage' }   // 14:00 to 16:00
        ]
    },
    {
        name: 'BED 4',
        slots: [
            { start: 3, duration: 1.5, therapist: 'Tommy Teo ', therapy: 'Deep Tissue' }, // 13:00 to 14:30
            { start: 6, duration: 2, therapist: 'Tommy Teo ', therapy: 'Relax' }   // 17:00 to 19:00
        ]
    },
    {
        name: 'SEAT 1',
        slots: []
    },
    {
        name: 'SEAT 2',
        slots: [
            { start: 5, duration: 1.5, therapist: 'Tommy Teo ', therapy: 'Healer' }, // 15:00 to 16:30
            { start: 10, duration: 2, therapist: 'Tommy Teo ', therapy: 'Healer' }   // 19:00 to 21:00
        ]
    },
    // Additional room data here
];

const Home: NextPage = () => (
    <div>
        <h1 className="text-xl font-bold mb-4">Room Management Timeline</h1>
        <Timeline data={data} />
    </div>
);

export default Home;
