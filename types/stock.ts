export type TreatmentProduct = {
    id: string;
    name: string;
    price: number;
    img: { url: string, key: string }; // URL for the image
    description?: string; // Optional field for additional details
};

export type AddOns = {
    id: string;
    name: string;
    price: number;
    img: { url: string, key: string }; // URL for the image
    description?: string; // Optional field for additional details
};

// Enum for Stock Categories
export enum StockCategory {
    SKIN_CARE = "Skin Care",
    MASSAGE_OILS_AND_LOTIONS = "Massage Oils and Lotions",
    HAIR_CARE = "Hair Care",
    NAIL_CARE = "Nail Care",
    BODY_CARE = "Body Care",
    AROMATHERAPY = "Aromatherapy and Relaxation",
    WAXING_SUPPLIES = "Waxing and Hair Removal Supplies",
    FACIAL_TREATMENTS = "Facial Treatment Supplies",
    TOOLS_AND_EQUIPMENT = "Tools and Equipment",
    MAKEUP = "Makeup",
    NAIL_SPA_EQUIPMENT = "Nail Spa Equipment",
    CONSUMABLES = "Consumables",
    SPECIALIZED_TREATMENTS = "Specialized Spa Treatments",
    WELLNESS_AND_FITNESS = "Wellness and Fitness",
    CLEANING_AND_HYGIENE = "Cleaning and Hygiene",
    UNIFORMS_AND_ACCESSORIES = "Uniforms and Accessories",
    RETAIL_PRODUCTS = "Retail Products",
    SUPPLEMENTS_AND_HERBAL_PRODUCTS = "Supplements and Herbal Products",
}

// Interface for Stock Location
export interface StockLocation {
    id: string;
    name: string;
    avatar?: { url: string; key: string };
    description?: string
}

// Interface for Stock Items
export interface Stock {
    id: string;
    name: string;
    category: StockCategory;
    price: number;
    quantity: number;
    description?: string; // Optional field
    avatar?: string;    // Optional field for product image
    stockLocation: StockLocation;
    usageRate: string;    // e.g., "High", "Medium", "Low"
    expireAfter?: number;    // Optional field for expiration date
}


export interface ProductCategory {
    id: string,
    name: string,
    description: string,
    isActive: boolean,
    createdAt: number,
    updatedAt: number
}