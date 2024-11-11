'use client'
import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';

interface Slot {
  start: number;
  duration: number;
  activity: string;
}

interface Room {
  name: string;
  slots: Slot[];
}

interface TimelineProps {
  data: Room[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const hours = Array.from({ length: 13 }, (_, i) => i); // [0, 1, ..., 12]
  const [currentTimeLeft, setCurrentTimeLeft] = useState(0);

  useEffect(() => {
    const updateCurrentTimeLeft = () => {
      const now = new Date();
      const totalMinutes = (now.getHours() - 10) * 60 + now.getMinutes();
      const percentageLeft = (totalMinutes / (12 * 60)) * 100;
      setCurrentTimeLeft(percentageLeft);
    };

    updateCurrentTimeLeft();
    const interval = setInterval(updateCurrentTimeLeft, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative overflow-x-auto whitespace-nowrap mx-auto max-w-screen-lg">
      <div className="flex p-2 bg-gray-200">
        <div className="w-32"></div>
        {hours.map(hour => (
          <div key={hour} className="w-32 border-l-1 border-green-300">
            {hour + 10}:00
          </div>
        ))}
      </div>
      {data.map((room, index) => (
        <div key={index} className="flex items-center my-2">
          <div className="w-24 font-bold bg-white">{room.name}</div>
          <div className="relative flex-grow h-16 bg-gray-300 min-w-max">
            {room.slots.map((slot, idx) => {
              const slotStart = 10 + slot.start;
              const slotEnd = slotStart + slot.duration;
              const now = new Date();
              const currentHour = now.getHours() + now.getMinutes() / 60;

              let bgColor = 'bg-blue-500'; // Default color for slot

              if (currentHour > slotEnd) {
                bgColor = 'bg-green-300'; // Past items
              } else if (currentHour >= slotStart && currentHour <= slotEnd) {
                bgColor = 'bg-violet-300'; // Current items
              } else if (currentHour < slotStart) {
                bgColor = 'bg-orange-300'; // Future items
              }

              return (
                <div
                  key={idx}
                  className={`absolute top-0 bottom-0 ${bgColor} text-white text-center rounded-md p-1`}
                  style={{ left: `${(slot.start * 100) / 13}%`, width: `${slot.duration * 100 / 13}%` }}
                >
                  {slot.activity}
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <div
        className="absolute top-0 bottom-0 bg-red-500 w-1"
        style={{ left: `${currentTimeLeft}%` }}
      ></div>
    </div>
  );
};

const data: Room[] = [
  {
    name: 'BED 1',
    slots: [
      { start: 0, duration: 2, activity: '120min Therapy' }, // 10:00 to 12:00
      { start: 5, duration: 1, activity: '60min Therapy' }   // 15:00 to 16:00
    ]
  },
  {
    name: 'BED 2',
    slots: [
      { start: 0, duration: 1.5, activity: '90min Massage' }, // 10:00 to 11:30
      { start: 3, duration: 2, activity: '120min Session' }   // 13:00 to 15:00
    ]
  },
  {
    name: 'BED 3',
    slots: [
      { start: 2, duration: 1.5, activity: '90min Massage' }, // 12:00 to 13:30
      { start: 4, duration: 5, activity: '120min Session' }   // 14:00 to 16:00
    ]
  },
  {
    name: 'BED 4',
    slots: [
      { start: 3, duration: 1.5, activity: '90min Massage' }, // 13:00 to 14:30
      { start: 6, duration: 2, activity: '120min Session' }   // 17:00 to 19:00
    ]
  },
  {
    name: 'SEAT 1',
    slots: []
  },
  {
    name: 'SEAT 2',
    slots: [
      { start: 5, duration: 1.5, activity: '90min Massage' }, // 15:00 to 16:30
      { start: 9, duration: 2, activity: '120min Session' }   // 19:00 to 21:00
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
