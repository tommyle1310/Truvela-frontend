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
    addOns: ["ADDON_1"], // IDs from AddOns
}


export const ServicePlaceholder = {
    short: 'Leaf is a soothing head, shoulder, and neck massage designed to relieve tension, reduce stress, and promote relaxation. Perfect for those seeking relief from everyday muscle tightness and discomfort.',
    detailed: 'Leaf is a therapeutic head, shoulder, and neck massage technique designed to alleviate the tension that often builds up in these areas due to stress, poor posture, or long hours at a desk. This type of massage targets the upper body muscles, using gentle yet effective pressure to release knots, improve circulation, and relax the surrounding tissues. Regular sessions can help reduce the frequency and intensity of headaches, improve mobility, and relieve muscle stiffness. The process involves a combination of kneading, circular motions, and gentle stretches to ease tightness and promote overall relaxation. Ideal for individuals who experience frequent neck and shoulder discomfort, Leaf massage is also beneficial for those dealing with stress-related issues, providing both physical and mental relief. With its calming effect, this technique helps to reset the body and mind, making it an excellent option for improving well-being and comfort.'
}