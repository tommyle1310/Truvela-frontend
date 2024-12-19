import { ServiceCategory } from "./service"

export type SpaLocation = {
    id: string,
    name: string,
    address: string,
    spaManager: string,
    createdAt: number,
    updatedAt: number,
}

type SpaTag = 'Maintaining' | 'Top Performer' | 'Closing'


export type SpaBrand = {
    id: string,
    name: string,
    address: string,
    spaManager: string,
    createdAt: number,
    updatedAt: number,
    location: {
        lon: number,
        lat: number
    },
    avatar: {
        url: string,
        key: string
    },
    tag: SpaTag[],
    servicesOffer: string[],
    operatingHours: {
        'Monday': string,
        'Tuesday': string,
        'Wednesday': string,
        'Thursday': string,
        'Friday': string,
        'Saturday': string,
        'Sunday': string
    },
    spaType: string,
    capacity: number,
    imageGallery: string[]
}