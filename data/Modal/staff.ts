import { RoleItem } from "@/types/governance";
import { permissions, roleItems } from "../governance";
import { TherapistLevel } from "@/types/therapist";
import { Service } from "@/types/service";
import { StaffRole } from "../staff";

export interface IStaffModalProps {
    id: string
    name: string
    email: string
    role: StaffRole
    isFullTime: boolean
    gender: 'male' | 'female' | 'others'
    avatar?: {
        url: string,
        key: string
    }
    dateOfBirth?: Date
    level?: TherapistLevel
    salary: number
    capabilities?: Service[]
}

export const StaffModal: IStaffModalProps = {
    id: 'staff_1',
    name: 'staff 1',
    email: 'staff@gmail.com',
    avatar: {
        url: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-on-a-street.jpg",
        key: "admin_avatar"
    },
    role: {
        id: "role_admin",
        name: "Admin",
        description: "Full access to all resources and actions",
        permissions: [...permissions], // Admin gets all permissions
    },
    gender: 'male',
    isFullTime: true,
    salary: 30,
    capabilities: [
        {
            id: "svc001",
            avatar: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-on-a-street.jpg",
            name: "Relaxing Massage",
            price: 75,
            duration: 60,
            suitableFor: "Adults",
            addOns: [
                {
                    id: 'MA-12',
                    name: "Hot Stones",
                    price: 10,
                    img: { url: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-on-a-street.jpg", key: '21' }
                }
            ],
            restrictions: "Pregnancy",
            minLevel: "Senior",
            treatmentProduct: [{
                id: 'MA-12',
                name: "Hot Stones",
                price: 10,
                img: { url: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-on-a-street.jpg", key: '21' }
            }],
            ageLimit: 18,
            category: [{
                id: 'SC_1',
                name: 'Massage Therapy',
                description: 'Various types of massages focused on relaxation, pain relief, and overall well-being.',
                avatar: {
                    url: 'https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/massage.jpg',
                    key: 'massage_therapy_avatar',
                },
                createdAt: 1672873100000,
                updatedAt: 1672873100000
            }],

        }
    ]
}