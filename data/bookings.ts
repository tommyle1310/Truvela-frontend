interface Slot {
    start: number;
    duration: number;
    id?: string;
    therapy: string;
    therapist: string
}

interface Room {
    name: string;
    slots: Slot[];
}

export interface TimelineProps {
    data: Room[];
}

export const dataBookings: Room[] = [
    {
        name: 'BED 1',
        slots: [
            { id: `booking_${Math.random() * 100000}`, start: 0, duration: 2, therapist: 'Tommy Teo ', therapy: 'Healer' }, // 10:00 to 12:00
            { id: `booking_${Math.random() * 100000}`, start: 5, duration: 1, therapist: 'Tommy Teo ', therapy: 'Relax' }   // 15:00 to 16:00
        ]
    },
    {
        name: 'BED 2',
        slots: [
            { id: `booking_${Math.random() * 100000}`, start: 0, duration: 2.5, therapist: 'Tommy Teo ', therapy: 'Crystal Healing' }, // 10:00 to 11:30
            { id: `booking_${Math.random() * 100000}`, start: 3, duration: 2, therapist: 'Tommy Teo ', therapy: 'Stretch' },   // 13:00 to 15:00
            { id: `booking_${Math.random() * 100000}`, start: 6, duration: 2, therapist: 'Tommy Teo ', therapy: 'Relax' }   // 13:00 to 15:00
        ]
    },
    {
        name: 'BED 3',
        slots: [
            { id: `booking_${Math.random() * 100000}`, start: 2, duration: 1.5, therapist: 'Tommy Teo ', therapy: 'Bloom' }, // 12:00 to 13:30
            { id: `booking_${Math.random() * 100000}`, start: 4, duration: 0.5, therapist: 'Tommy Teo ', therapy: 'Facial Massage' }   // 14:00 to 16:00
        ]
    },
    {
        name: 'BED 4',
        slots: [
            { id: `booking_${Math.random() * 100000}`, start: 3, duration: 1.5, therapist: 'Tommy Teo ', therapy: 'Deep Tissue' }, // 13:00 to 14:30
            { id: `booking_${Math.random() * 100000}`, start: 6, duration: 2, therapist: 'Tommy Teo ', therapy: 'Relax' }   // 17:00 to 19:00
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