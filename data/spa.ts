import { SpaLocation, SpaBrand } from "@/types/spa";
import { ServiceCategories } from "./service";

export const spaLocations: SpaLocation[] = [
    {
        id: 'LOC_1',
        name: 'Sunset Spa',
        address: '123 Sunset Blvd, Downtown City, ABC',
        spaManager: 'John Doe',
        createdAt: 1672872800000, // Timestamp for creation date
        updatedAt: 1672872800000, // Timestamp for last update
    },
    {
        id: 'LOC_2',
        name: 'Ocean Breeze Wellness',
        address: '456 Ocean Drive, Beachside, XYZ',
        spaManager: 'Sarah Smith',
        createdAt: 1672872900000, // Timestamp for creation date
        updatedAt: 1672872900000, // Timestamp for last update
    },
    {
        id: 'LOC_3',
        name: 'Mountain Retreat Spa',
        address: '789 Mountain Rd, High Peak, DEF',
        spaManager: 'David Williams',
        createdAt: 1672873000000, // Timestamp for creation date
        updatedAt: 1672873000000, // Timestamp for last update
    }
];


export const SpaBrands: SpaBrand[] = [
    {
        id: 'SPA_1',
        address: '102 Phan Van Teo',
        name: 'Truvela',
        spaManager: 'Tommy Teo',
        avatar: {
            key: 'abcimg12345',
            url: 'https://github.com/shadcn.png'
        },
        capacity: 30,
        createdAt: 1672873000000,
        updatedAt: 1672873000000,
        imageGallery: ['https://github.com/shadcn.png', 'https://github.com/shadcn.png'],
        location: {
            "lat": 37.7749,
            "lon": -122.4194
        },
        operatingHours: {
            "Monday": "9:00 AM - 6:00 PM",
            "Tuesday": "9:00 AM - 6:00 PM",
            "Wednesday": "9:00 AM - 6:00 PM",
            "Thursday": "9:00 AM - 6:00 PM",
            "Friday": "9:00 AM - 6:00 PM",
            "Saturday": "10:00 AM - 4:00 PM",
            "Sunday": "Closed"
        },
        servicesOffer: ServiceCategories.map(item => item.id),
        spaType: 'Medical Spa',
        tag: ['Top Performer']


    },
    {
        id: 'SPA_2',
        address: '102 Erling Hihi',
        name: 'Zenifer Spa',
        spaManager: 'Pai Dure Cey',
        avatar: {
            key: 'abcimg12345',
            url: 'https://github.com/shadcn.png'
        },
        capacity: 30,
        createdAt: 1672873000000,
        updatedAt: 1672873000000,
        imageGallery: ['https://github.com/shadcn.png', 'https://github.com/shadcn.png'],
        location: {
            "lat": 32.7749,
            "lon": -122.4194
        },
        operatingHours: {
            "Monday": "9:00 AM - 6:00 PM",
            "Tuesday": "9:00 AM - 6:00 PM",
            "Wednesday": "9:00 AM - 6:00 PM",
            "Thursday": "9:00 AM - 6:00 PM",
            "Friday": "9:00 AM - 6:00 PM",
            "Saturday": "10:00 AM - 4:00 PM",
            "Sunday": "Closed"
        },
        servicesOffer: ServiceCategories.map(item => item.id),
        spaType: 'Relax Therapy Spa',
        tag: ['Closing']
    },
    {
        id: 'SPA_3',
        address: '38 Cristanel Messialdo',
        name: 'Sunset Spa',
        spaManager: 'Pai Dure Cey',
        avatar: {
            key: 'abcimg12345',
            url: 'https://github.com/shadcn.png'
        },
        capacity: 12,
        createdAt: 1672873000000,
        updatedAt: 1672873000000,
        imageGallery: ['https://github.com/shadcn.png', 'https://github.com/shadcn.png'],
        location: {
            "lat": 32.7749,
            "lon": -122.4194
        },
        operatingHours: {
            "Monday": "10:00 AM - 10:00 PM",
            "Tuesday": "10:00 AM - 10:00 PM",
            "Wednesday": "10:00 AM - 10:00 PM",
            "Thursday": "10:00 AM - 10:00 PM",
            "Friday": "10:00 AM - 10:00 PM",
            "Saturday": "10:00 AM - 10:00 PM",
            "Sunday": "10:00 AM - 10:00 PM"
        },
        servicesOffer: ServiceCategories.map(item => item.id),
        spaType: 'Relax Therapy Spa',
        tag: ['Maintaining']
    },
]
