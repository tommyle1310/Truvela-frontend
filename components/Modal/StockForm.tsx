'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IServiceModalProps, ServicePlaceholder, servicesModal } from "@/data/Modal/service"
import RequirePermission from "./RequirePermission"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Service } from "@/types/service"
import { useEffect, useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { ServiceCategories } from "@/data/service"
import { addOns, productCategories, stockItems } from "@/data/stock"
import { stockModalData } from "@/data/Modal/stock"
import { ScrollArea } from "../ui/scroll-area"
import { Checkbox } from "../ui/checkbox"
import { spaLocations } from "@/data/spa"
import { providerLinks } from "@/data/randomStuff"
import InputControl from "./InputControl"




export function StockForm() {
    const buildDropdownValue = (type: | 'usageRate') => {
        switch (type) {

            case 'usageRate':
                return ['HIGH', 'LOW', 'MEDIUM']

        }
    };
    const buildMultiSelectValue = (type: 'category' | 'spaAvailable' | 'providerLinks') => {
        switch (type) {
            case 'spaAvailable':
                return spaLocations.map(item => ({
                    id: item.id,
                    mainTitle: item.name,
                    subTitle: item.id, // Ensure this matches the expected structure
                }));
            case 'providerLinks':
                return providerLinks.map(item => ({
                    id: item.id,
                    mainTitle: item.name,
                    subTitle: item.link, // Ensure this matches the expected structure
                }));
            case 'category':
                return productCategories.map(item => ({
                    id: item.id,
                    mainTitle: item.name,
                    subTitle: item.id
                }))
            default:
                return [];
        }
    };



    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button className="">Add</Button>
            </DialogTrigger>
            <DialogContent className="max-w-screen-md  z-[100] overflow-visible">
                <DialogHeader>
                    <DialogTitle>Add Product</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4 py-4 ">
                    <InputControl disabled label='Product ID' placeholder="PRO_1" value={stockModalData.id} />
                    <InputControl disabled label='Product Name' placeholder="Lavender Oil" value={stockModalData.name} />
                    <InputControl disabled label='Category' placeholder="Skincare" isMultiSelectList multiSelectValue={buildMultiSelectValue("category")} />
                    <div className="flex items-center gap-4 col-span-3 ">
                        <InputControl disabled label='Stock in' placeholder="31" value={stockModalData.stockIn} />
                        <InputControl disabled label='Cost Price' placeholder="30" value={stockModalData.costPrice} />
                        <InputControl disabled label='Selling Price' placeholder="31" value={stockModalData.sellingPrice} />
                        <InputControl disabled label='Count Unit' placeholder="Kilogram" value={stockModalData.countUnit} />
                        <InputControl disabled label='Minimun availability' placeholder="31" value={stockModalData.limitQuantityInStock} />
                    </div>
                    <InputControl disabled label='Expire after' placeholder="30 days" value={stockModalData.expireAfter} />
                    <InputControl disabled label='Usage Rate' placeholder="HIGH" value={stockModalData.usageRate} isDropdown dropdownValue={buildDropdownValue('usageRate')} />
                    <InputControl disabled label='Available Spa' placeholder="Sunset Spa" isMultiSelectList multiSelectValue={buildMultiSelectValue('spaAvailable')} />
                    {/* <InputControl isSkipped /> */}
                    <InputControl disabled label='Image' placeholder="Image for this Service" isImage value={stockModalData.avatar} />
                    <div className="col-span-2 grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <InputControl disabled label='Provider Links' placeholder="https://fb/phucle1310" isMultiSelectList multiSelectValue={buildMultiSelectValue('providerLinks')} />
                        </div>
                        <InputControl disabled label='Short description' placeholder="Lavender Oil" value={stockModalData.shortDescription} />
                        <InputControl disabled label='Detailed description' placeholder="Lavender Oil" value={stockModalData.detailedDescription} />

                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
