import { AddOns, ProductCategory, Stock, StockCategory, StockLocation, TreatmentProduct } from "@/types/stock";

// Sample Treatment Products
export const treatmentProducts: TreatmentProduct[] = [
    {
        id: "tp001",
        name: "Lavender Massage Oil",
        price: 25,
        img: {
            url: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/lavender-oil.jpg",
            key: "lavender_oil",
        },
        description: "Relaxing lavender oil for stress relief and aromatherapy.",
    },
    {
        id: "tp002",
        name: "Aloe Vera Gel",
        price: 15,
        img: {
            url: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/aloe-vera.jpg",
            key: "aloe_vera_gel",
        },
        description: "Soothing gel for skin hydration and treatment.",
    },
];

// Sample Add-Ons
export const addOns: AddOns[] = [
    {
        id: "addon001",
        name: "Hot Stones",
        price: 10,
        img: {
            url: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/hot-stones.jpg",
            key: "hot_stones",
        },
        description: "Enhance your massage with heated basalt stones.",
    },
    {
        id: "addon002",
        name: "Aromatherapy Scents",
        price: 5,
        img: {
            url: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/aromatherapy.jpg",
            key: "aromatherapy_scents",
        },
        description: "Custom aromatherapy scents for a personalized experience.",
    },
];

// Sample Stock Locations
export const stockLocations: StockLocation[] = [
    {
        id: "sl001",
        name: "Storage Room A",
        avatar: {
            url: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/storage-room.jpg",
            key: "storage_room_a",
        },
        description: "Primary storage for massage oils and lotions.",
    },
    {
        id: "sl002",
        name: "Cabinet B",
        avatar: {
            url: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/cabinet.jpg",
            key: "cabinet_b",
        },
        description: "Dedicated space for facial treatment products.",
    },
];

// Sample Stock Items
export const stockItems: Stock[] = [
    {
        id: "stock001",
        name: "Coconut Massage Oil",
        category: StockCategory.MASSAGE_OILS_AND_LOTIONS,
        price: 30,
        quantity: 20,
        description: "All-natural coconut oil for deep-tissue massages.",
        avatar: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/coconut-oil.jpg",
        stockLocation: stockLocations[0],
        usageRate: "High",
        expireAfter: 30,
    },
    {
        id: "stock002",
        name: "Collagen Face Mask",
        category: StockCategory.FACIAL_TREATMENTS,
        price: 50,
        quantity: 15,
        description: "Hydrating face mask for anti-aging treatment.",
        avatar: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/collagen-mask.jpg",
        stockLocation: stockLocations[1],
        usageRate: "Medium",
        expireAfter: 15,
    },
    {
        id: "stock003",
        name: "Peppermint Essential Oil",
        category: StockCategory.AROMATHERAPY,
        price: 20,
        quantity: 10,
        description: "Refreshing peppermint oil for aromatherapy.",
        avatar: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/peppermint-oil.jpg",
        stockLocation: stockLocations[0],
        usageRate: "Low",
        expireAfter: 30,
    },
];

export const productCategories: ProductCategory[] = [
    {
        id: 'PC_1',
        name: 'Wellness',
        description: 'Products related to overall wellness, including body care, supplements, and fitness.',
        isActive: true,
        createdAt: 1672873100000, // Timestamp for creation date
        updatedAt: 1672873100000, // Timestamp for last update
    },
    {
        id: 'PC_2',
        name: 'Beauty',
        description: 'Beauty products such as skincare, makeup, and grooming essentials.',
        isActive: true,
        createdAt: 1672873200000, // Timestamp for creation date
        updatedAt: 1672873200000, // Timestamp for last update
    },
    {
        id: 'PC_3',
        name: 'Spa Accessories',
        description: 'Specialized products for spa treatments including oils, towels, and relaxation tools.',
        isActive: false,
        createdAt: 1672873300000, // Timestamp for creation date
        updatedAt: 1672873300000, // Timestamp for last update
    }
];
