import { ServiceCategory } from "@/types/service"
import { ServiceLocation } from "../serviceLocation"
import { AddOns, Stock } from "@/types/stock"

export interface IServiceModalProps {
    id: string
    name: string
    duration: number
    requiredLocation: ServiceLocation[]
    price: number
    category: ServiceCategory[]
    avatar?: {
        url: string,
        key: string
    }
    benefits?: string
    restrictions?: string
    ageLimit: number
    minLevel?: 'Senior',
    productUsed: Stock[],
    addOns: AddOns[]
}