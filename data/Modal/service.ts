import { ServiceCategory } from "@/types/service"
import { ServiceLocation } from "../serviceLocation"
import { AddOns, Stock } from "@/types/stock"

export interface IServiceModalProps {
    id: string
    name: string
    duration: number
    requiredLocation: ServiceLocation['id'][]
    price: number
    category: ServiceCategory['id'][]
    avatar?: {
        url: string,
        key: string
    }
    benefits?: string
    restrictions?: string
    ageLimit: number
    minLevel?: 'Senior',
    productUsed: Stock['id'][],
    addOns: AddOns['id'][]
}


export const servicesModal: IServiceModalProps = {
    id: "service_1",
    name: "Relaxing Aromatherapy Massage",
    duration: 60,
    requiredLocation: ["mapping_1"], // IDs from ServiceLocation
    price: 120,
    category: ["category_1"], // IDs from ServiceCategory
    avatar: {
        url: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-on-a-street.jpg",
        key: "relaxing_massage_avatar",
    },
    benefits: "Promotes relaxation, reduces stress, and improves circulation.",
    restrictions: "Not suitable for individuals allergic to essential oils.",
    ageLimit: 16,
    minLevel: "Senior",
    productUsed: ["stock001", "stock002"], // IDs from Stock
    addOns: ["addon001"], // IDs from AddOns
}
