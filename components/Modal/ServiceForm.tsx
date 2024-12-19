'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ServicePlaceholder, servicesModal } from "@/data/Modal/service"
import { ServiceCategories } from "@/data/service"
import { addOns, stockItems } from "@/data/stock"
import InputControl from "./InputControl"





export function ServiceForm() {
    const buildDropdownValue = (type: 'category' | 'addOns' | 'productUsed' | 'requiredLocation') => {
        switch (type) {
            case 'category':
                return servicesModal[type].map(itemId => ServiceCategories.find(item => item.id === itemId)).filter(Boolean); // Filter out any undefined values if a category is not found
            case 'addOns':
                return servicesModal[type].map(itemId => addOns.find(item => item.id === itemId)).filter(Boolean); // Filter out any undefined values if a category is not found
            case 'productUsed':
                return servicesModal[type].map(itemId => stockItems.find(item => item.id === itemId)).filter(Boolean); // Filter out any undefined values if a category is not found
        }
    };
    const buildMultiSelectValue = (type: 'category' | 'productUsed' | 'addOns') => {
        switch (type) {
            case 'category':
                return ServiceCategories.map(item => ({
                    id: item.id,
                    mainTitle: item.name,
                    subTitle: item.id, // Ensure this matches the expected structure
                }));
            case 'productUsed':
                return stockItems.map(item => ({
                    id: item.id,
                    mainTitle: item.name,
                    subTitle: item.id, // Ensure this matches the expected structure
                }));
            case 'addOns':
                return addOns.map(item => ({
                    id: item.id,
                    mainTitle: item.name,
                    subTitle: item.id
                }))
            default:
                return [];
        }
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button >Add</Button>
                </DialogTrigger>
                <DialogContent className="max-w-screen-md">
                    <DialogHeader>
                        <DialogTitle>Add Service</DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-3 gap-4 py-4">
                        <InputControl disabled label='Service ID' placeholder="Service ID" value={servicesModal.id} />
                        <InputControl disabled label='Name' placeholder="Service Name" value={servicesModal.name} />
                        <InputControl disabled label='Duration' placeholder="Service duration" value={servicesModal.duration} />
                        <InputControl disabled label='Price' placeholder="Service Price" value={servicesModal.price} />
                        <InputControl disabled label='Age Limit' placeholder="Age Limit" value={servicesModal.ageLimit} />
                        <InputControl disabled label='Level Requirement' placeholder="Therapist level must above this level" value={servicesModal.minLevel} />
                        <InputControl disabled label='Client Health Restriction' placeholder="Eg. Pregnancy" value={servicesModal.restrictions} />
                        <InputControl disabled label='Benefits' placeholder="Service Benefits" value={servicesModal.benefits} />
                        <InputControl disabled label='Category' placeholder="Service Category" multiSelectValue={buildMultiSelectValue('category')} />
                        <InputControl disabled label='Image' placeholder="Image for this Service" isImage value={servicesModal.avatar?.url} />
                        <div className="grid-cols-2 grid gap-4 col-span-2">
                            <InputControl disabled label='Product Used' placeholder="Products that are used for this service" multiSelectValue={buildMultiSelectValue('productUsed')} />
                            <InputControl disabled label='Add Ons' placeholder="Add Ons that are used for this service" multiSelectValue={buildMultiSelectValue('addOns')} />
                            <InputControl disabled label='Short Description' placeholder={ServicePlaceholder.short} value={servicesModal.name} />
                            <InputControl disabled label='Detailed Description' placeholder={ServicePlaceholder.detailed} value={servicesModal.name} />

                        </div>
                        <InputControl isSkipped />
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
