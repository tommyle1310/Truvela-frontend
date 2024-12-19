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
import { spaTags } from "@/data/Modal/spa"




export function SpaForm() {
    const buildDropdownValue = (type: | 'usageRate') => {
        switch (type) {

            case 'usageRate':
                return ['HIGH', 'LOW', 'MEDIUM']

        }
    };
    const buildMultiSelectValue = (type: 'servicesOffer' | 'spaAvailable' | 'providerLinks') => {
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
            case 'servicesOffer':
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
                    <DialogTitle>Add Brand</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4 py-4 ">
                    <InputControl label='BRAND ID' placeholder="PRO_1" value={stockModalData.id} />
                    <InputControl label='Brand Name' placeholder="Sunset Spa" value={stockModalData.name} />
                    <InputControl label='Address' placeholder="83 Le Van Bua" value={stockModalData.name} />
                    <InputControl label='Spa Type' placeholder="Medical Spa" value={stockModalData.name} />
                    <InputControl label='Spa Manager' placeholder="Nguyen Van Chris" value={stockModalData.name} />
                    <InputControl label='Max Capacity' placeholder="30 people" value={stockModalData.name} />
                    <InputControl label='Operating Hours' placeholder="Monday: 10 AM - 10 PM" isMultiSelectList multiSelectValue={buildMultiSelectValue("servicesOffer")} />
                    <InputControl label='Tags' placeholder="Top Performer" isMultiSelectList multiSelectValue={spaTags.map(item => ({ id: item.id, mainTitle: item.name }))} />
                    <InputControl label='Services Offer' placeholder="Facial" isMultiSelectList multiSelectValue={buildMultiSelectValue("servicesOffer")} />
                    <InputControl label='Image' placeholder="Image for this Service" isImage value={stockModalData.avatar} />
                    <div className="col-span-2 grid grid-cols-3 gap-4">
                        <InputControl label='Image Gallery' isImageGallery imageGallery={['https://github.com/shadcn.png', 'https://github.com/shadcn.png', 'https://github.com/shadcn.png']} value={stockModalData.detailedDescription} />

                        <div className="col-span-2 grid grid-cols-1">
                            <InputControl isHidden label='Exact Location' placeholder="" value={stockModalData.shortDescription} />
                            <InputControl label='Description' placeholder="Lavender Oil" value={stockModalData.detailedDescription} />
                            <InputControl isSkipped />
                        </div>

                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
