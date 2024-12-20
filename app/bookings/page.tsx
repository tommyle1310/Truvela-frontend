'use client'
import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { START_HOUR, TOTAL_SLOTS } from '@/lib/constants';
import { bookingDataRooms, dataBookings, TimelineProps } from '@/data/bookings';
import { StaffForm } from '@/components/Modal/StaffForm';
import { HoverCardBooking } from '@/components/HoverCard/booking';
import { DatePicker } from '@/components/DatePicker';
import { areTimestampsOnSameDate } from '@/functions/formatTime';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';




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
            {data ? data.map((room, index) => (
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
            )) : (<div className='flex items-center'>
                <div className="w-24 font-bold flex flex-col bg-white">
                    {bookingDataRooms.map(item => (
                        <div key={item.id} className='h-14 text-end mr-4'>{item.name}</div>
                    ))}
                </div>
                <div className=' bg-[#ead7ce]  flex-grow flex flex-col items-center p-6'>
                    <div
                        className="w-full aspect-video mt-10 mb-8"
                        style={{
                            backgroundImage: `url('https://res.cloudinary.com/dlavqnrlx/image/upload/v1733450667/qqwqpgzhtmymkjmvv0vy.jpg')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    ></div>
                    <h3 className=' text-xl font-bold text-lavender-info-600'>No Bookings on this day.</h3>
                </div>
            </div>)
            }

        </div>
    );
};



const Bookings: NextPage = () => {
    const [selectedDate, setSelectedDate] = useState<number>(Math.floor(new Date().getTime() / 1000));

    return (
        <div className='p-4 flex flex-col gap-4'>
            <div className="flex items-center justify-between">
                <h3 className="text-lavender-primary-600 text-xl font-bold">Bookings</h3>
                <DatePicker selectedDate={selectedDate} setPropSelectedDate={setSelectedDate} />
            </div>
            <Tabs defaultValue="Scheduled" className="w-full">
                <TabsList className=" w-full bg-lavender-primary-200">
                    <TabsTrigger className='w-full' value="Scheduled">Scheduled Appointments</TabsTrigger>
                    <TabsTrigger className='w-full relative flex items-center gap-2' value="Pending">
                        Pending Appointment
                        <div className=" w-6 h-6 center bg-lavender-danger-200 rounded-full text-lavender-danger-700 font-semibold border border-lavender-danger-800 text-sm" >
                            {3}
                        </div>
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="Scheduled">
                    <Timeline data={dataBookings && dataBookings.find(item => {
                        return areTimestampsOnSameDate(selectedDate, item.timestamp)
                    })?.rooms} />
                </TabsContent>
                <TabsContent className='w-full' value="Pending">
                    <div className="w-full grid grid-cols-2 gap-4">
                        <Card className={` border-2`}>
                            <CardHeader className="p-2 border-b border-lavender-warning-600 items-center flex flex-row gap-2">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="p-2 flex-grow">
                                    <CardTitle className='flex justify-between'>
                                        <span>John Doe</span>
                                        <span className='text-lavender-danger-600 '>30-12-2024</span>
                                    </CardTitle>
                                    <CardDescription className='text-sm'>
                                        Therapist: <span className='text-lavender-success-600 font-bold'>No.122</span>
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-2 p-2 text-sm">
                                <p>Time of arrival: <span className="text-lavender-info-600 font-bold">10 AM - 11 AM</span>  | <span className='text-lavender-danger-600 font-bold'>30-12-2024</span></p>
                                <p>Service: <span className="text-lavender-primary-600 text-md font-bold">Doggy</span></p>
                            </CardContent>
                            <CardFooter className="p-2 flex justify-end">
                                <Button>Confirm</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>

        </div>
    );
}

export default Bookings;
