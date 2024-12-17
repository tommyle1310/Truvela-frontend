import { SpaLocation } from "@/types/spa"
import { ProductCategory } from "@/types/stock"

export interface IStockModalProps {
    id: string
    name: string
    avatar?: string,
    shortDescription: string
    detailedDescription: string
    costPrice: number
    sellingPrice: number
    isActive: boolean
    countUnit: string
    quantityInStock: number
    limitQuantityInStock: number
    usageRate: 'LOW' | 'MEDIUM' | 'HIGH'
    category?: ProductCategory[]
    providerLinks?: string[]
    stockIn: number
    expireAfter?: number | string
    spaAvailable?: SpaLocation[]
}

export const stockModalData: IStockModalProps = {
    id: 'PRO_1',
    name: 'Aromatherapy Candle',
    avatar: 'https://github.com/shadcn.png',
    shortDescription: 'A soothing candle for relaxation',
    detailedDescription: 'This aromatherapy candle is made from natural ingredients, offering a calming and pleasant fragrance to enhance your relaxation experience. Perfect for use in spas or at home.',
    costPrice: 15.00,
    sellingPrice: 30.00,
    isActive: true,
    countUnit: 'pieces',
    quantityInStock: 100,
    limitQuantityInStock: 500,
    usageRate: 'MEDIUM',
    category: [{
        id: 'PC_1',
        name: 'Spa Products',
        description: 'All products used in spa treatments and services',
        isActive: true,
        createdAt: 1672872800000, // Timestamp for creation date
        updatedAt: 1672872800000, // Timestamp for last update
    }],
    providerLinks: ['https://provider1.com', 'https://provider2.com'],
    stockIn: 50,
    expireAfter: 30, // 1 hour in seconds
    spaAvailable: [{
        id: 'LOC_1',
        name: 'Sunset Spa',
        address: '123 Sunset Blvd, Downtown City, ABC',
        spaManager: 'John Doe',
        createdAt: 1672872800000, // Timestamp for creation date
        updatedAt: 1672872800000, // Timestamp for last update
    }],
};
