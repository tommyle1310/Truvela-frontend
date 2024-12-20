interface Slot {
    start: number;
    duration: number;
    id?: string;
    therapy: { image?: string, name: string };
    therapist: string;
    client: string;
    note?: {
        coordinator?: string;
        client?: string;
    };
}

interface Room {
    name: string;
    slots: Slot[];
}

export type TimelineProps = { data: Room[] | undefined }

export const dataBookings: Array<{ timestamp: number; rooms: Room[] }> = [
    {
        timestamp: 1732813200,
        rooms: [
            {
                name: 'BED 1',
                slots: [
                    {
                        start: 0,
                        duration: 2,
                        therapy: { name: 'Healer', image: 'https://github.com/shadcn.png' },
                        therapist: 'Tommy Teo',
                        client: 'Client A',
                        note: {
                            coordinator: 'Coordinator A',
                            client: 'Notes about Client A',
                        },
                    },
                    {
                        start: 5,
                        duration: 1,
                        therapy: { name: 'Relax', image: 'https://github.com/shadcn.png' },
                        therapist: 'Tommy Teo',
                        client: 'Client B',
                        note: {
                            coordinator: 'Coordinator B',
                        },
                    },
                ],
            },
            {
                name: 'BED 2',
                slots: [
                    {
                        start: 0,
                        duration: 2.5,
                        therapy: { image: 'https://github.com/shadcn.png', name: 'Crystal Healing' },
                        therapist: 'Tommy Teo',
                        client: 'Client C',
                    },
                    {
                        start: 3,
                        duration: 2,
                        therapy: { image: 'https://github.com/shadcn.png', name: 'Stretch' },
                        therapist: 'Tommy Teo',
                        client: 'Client D',
                        note: {
                            client: 'Prefers warm room',
                        },
                    },
                    {
                        start: 6,
                        duration: 2,
                        therapy: { image: 'https://github.com/shadcn.png', name: 'Relax' },
                        therapist: 'Tommy Teo',
                        client: 'Client E',
                    },
                ],
            },
            {
                name: 'BED 3',
                slots: [
                    {
                        start: 2,
                        duration: 1.5,
                        therapy: { image: 'https://github.com/shadcn.png', name: 'Bloom' },
                        therapist: 'Tommy Teo',
                        client: 'Client F',
                    },
                    {
                        start: 4,
                        duration: 0.5,
                        therapy: { image: 'https://github.com/shadcn.png', name: 'Facial Massage' },
                        therapist: 'Tommy Teo',
                        client: 'Client G',
                    },
                ],
            },
            {
                name: 'BED 4',
                slots: [
                    {
                        start: 3,
                        duration: 1.5,
                        therapy: { image: 'https://github.com/shadcn.png', name: 'Deep Tissue' },
                        therapist: 'Tommy Teo',
                        client: 'Client H',
                        note: {
                            coordinator: 'Coordinator H',
                        },
                    },
                    {
                        start: 6,
                        duration: 2,
                        therapy: { image: 'https://github.com/shadcn.png', name: 'Relax' },
                        therapist: 'Tommy Teo',
                        client: 'Client I',
                    },
                ],
            },
            {
                name: 'SEAT 1',
                slots: [],
            },
            {
                name: 'SEAT 2',
                slots: [
                    {
                        start: 5,
                        duration: 1.5,
                        therapy: { image: 'https://github.com/shadcn.png', name: 'Healer' },
                        therapist: 'Tommy Teo',
                        client: 'Client J',
                    },
                    {
                        start: 10,
                        duration: 2,
                        therapy: { image: 'https://github.com/shadcn.png', name: 'Healer' },
                        therapist: 'Tommy Teo',
                        client: 'Client K',
                        note: {
                            client: 'Requires extra support',
                        },
                    },
                ]
            }
        ],
    },
];

export const bookingDataRooms = [
    {
        id: 'ROOM_1',
        name: 'BED 1',
    },
    {
        id: 'ROOM_2',
        name: 'BED 2',
    },
    {
        id: 'ROOM_3',
        name: 'BED 3',
    },
    {
        id: 'ROOM_4',
        name: 'BED 4',
    },
    {
        id: 'ROOM_5',
        name: 'BED 5',
    },
    {
        id: 'ROOM_6',
        name: 'BED 6',
    },
    {
        id: 'ROOM_7',
        name: 'SEAT 1',
    },
    {
        id: 'ROOM_8',
        name: 'SEAT 2',
    },
]
