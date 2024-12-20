import { Service, ServiceCategory } from "@/types/service";
import { Staff } from "@/types/staff";
import { AddOns, Stock, StockCategory, TreatmentProduct } from "@/types/stock";
import { TherapistLevel } from "@/types/therapist";

export const staffTable: Staff[] = [
    {
        id: "m5gr84i9",
        avatar: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-portrait.jpg",
        monthlyPoints: 100,
        name: "Staff 1",
        role: "Admin",
        status: "Active",
        email: "ken99@yahoo.com",
    },
    {
        id: "3u1reuv4",
        avatar: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-portrait.jpg",
        monthlyPoints: 95,
        name: "Staff 2",
        role: "Admin",
        status: "Inactive",
        email: "Abe45@gmail.com",
    },
    {
        id: "derv1ws0",
        avatar: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-portrait.jpg",
        monthlyPoints: 80,
        name: "Staff 3",
        role: "Manager",
        status: "Inactive",
        email: "Monserrat44@gmail.com",
    },
    {
        id: "5kma53ae",
        avatar: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-portrait.jpg",
        monthlyPoints: 120,
        name: "Staff 4",
        role: "Admin",
        status: "Active",
        email: "Silas22@gmail.com",
    },
    {
        id: "bhqecj4p",
        avatar: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-portrait.jpg",
        monthlyPoints: 50,
        name: "Staff 5",
        role: "Support",
        status: "Inactive",
        email: "carmella@hotmail.com",
    },
];



export const serviceTable: Service[] = [
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
            id: '1',
            name: 'Relax',
            avatar: { url: 'https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-on-a-street.jpg', key: 'key_avt' },
            description: 'Relaxing massage helps you feel relax and refresh',
            createdAt: 1672873100000, // Timestamp for creation date
            updatedAt: 1672873100000,
        }],
    },

];

export const stockTable: Stock[] = [
    {
        id: "st-001",
        name: "Hydrating Facial Cleanser",
        category: StockCategory.SKIN_CARE,
        price: 25.0,
        quantity: 50,
        description: "A gentle facial cleanser suitable for all skin types.",
        avatar: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-on-a-street.jpg",
        stockLocation: {
            id: "loc-001",
            name: "Floor 1 Cabinet A",
            avatar: {
                url: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-on-a-street.jpg",
                key: "cabinet-a",
            },
        },
        usageRate: "High",
        expireAfter: 30,
    },
    {
        id: "st-002",
        name: "Lavender Massage Oil",
        category: StockCategory.MASSAGE_OILS_AND_LOTIONS,
        price: 15.0,
        quantity: 100,
        description: "A soothing lavender-infused massage oil for relaxation.",
        avatar: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-on-a-street.jpg",
        stockLocation: {
            id: "loc-002",
            name: "Floor 2 Storage Room",
            avatar: {
                url: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-on-a-street.jpg",
                key: "storage-room",
            },
        },
        usageRate: "Medium",
        expireAfter: 60
    },
    {
        id: "st-003",
        name: "Moisturizing Shampoo",
        category: StockCategory.HAIR_CARE,
        price: 12.5,
        quantity: 75,
        description: "Sulfate-free shampoo that hydrates and nourishes hair.",
        avatar: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-on-a-street.jpg",
        stockLocation: {
            id: "loc-003",
            name: "Floor 1 Cabinet B",
            avatar: {
                url: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-on-a-street.jpg",
                key: "cabinet-b",
            },
        },
        usageRate: "Low",
        expireAfter: 90
    },
]


