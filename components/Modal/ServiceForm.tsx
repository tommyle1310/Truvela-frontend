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
import { IServiceModalProps, servicesModal } from "@/data/Modal/service"
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
import { addOns, stockItems } from "@/data/stock"

interface IInputControl {
    placeholder?: string,
    disabled?: boolean,
    isImage?: boolean,
    isDropdown?: boolean,
    dropdownValue?: any,
    isHidden?: boolean,
    label?: string,
    value?: number | string,
    defaultValue?: string | number
    isSkipped?: boolean
}

const InputControl = ({ placeholder, disabled, isImage, label, isHidden, isSkipped, value, defaultValue, isDropdown, dropdownValue }: IInputControl) => {
    const [open, setOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState(value || ""); // Initialize with `value` if provided.

    if (isSkipped)
        return <div></div>
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor="name">{label}</Label>
            {!isDropdown ? (
                !isHidden ? (
                    !isImage ? (
                        <Input
                            placeholder={placeholder}
                            disabled={disabled}
                            id={label}
                            value={value}
                            defaultValue={defaultValue}
                        />
                    ) : (
                        <img
                            src={value as string}
                            alt={label}
                            width={80}
                            height={80}
                            className="aspect-square w-8/12 shadow-md border rounded-md"
                        />
                    )
                ) : (
                    <RequirePermission />
                )
            ) : (
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[200px] justify-between"
                        >
                            {selectedValue // Use `selectedValue` here.
                                ? typeof dropdownValue?.[0] === "string"
                                    ? selectedValue
                                    : dropdownValue?.find((item: any) => item.name === selectedValue)?.name
                                : `Select ${label}...`}
                            <ChevronsUpDown className="opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                        <Command>
                            <CommandInput placeholder={`Search ${label}...`} />
                            <CommandList>
                                <CommandEmpty>No {label} found.</CommandEmpty>
                                <CommandGroup>
                                    {dropdownValue?.map((item: any) =>
                                        typeof item === "string" ? (
                                            <CommandItem
                                                key={item}
                                                value={item}
                                                onSelect={(currentValue) => {
                                                    setSelectedValue(currentValue);
                                                    setOpen(false); // Close the dropdown on selection.
                                                }}
                                            >
                                                {item}
                                                <Check
                                                    className={cn(
                                                        "ml-auto",
                                                        selectedValue === item
                                                            ? "opacity-100"
                                                            : "opacity-0"
                                                    )}
                                                />
                                            </CommandItem>
                                        ) : (
                                            <CommandItem
                                                key={item.id}
                                                value={item.name}
                                                onSelect={(currentValue) => {
                                                    setSelectedValue(currentValue);
                                                    setOpen(false); // Close the dropdown on selection.
                                                }}
                                            >
                                                {item.name}
                                                <Check
                                                    className={cn(
                                                        "ml-auto",
                                                        selectedValue === item.name
                                                            ? "opacity-100"
                                                            : "opacity-0"
                                                    )}
                                                />
                                            </CommandItem>
                                        )
                                    )}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            )}
        </div>
    );
}



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

    return (
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
                    <InputControl disabled label='Category' placeholder="Service Category" isDropdown dropdownValue={buildDropdownValue('category')} />
                    <InputControl disabled label='Image' placeholder="Image for this Service" isImage value={servicesModal.avatar?.url} />
                    <InputControl disabled label='Product Used' placeholder="Products that are used for this service" isDropdown dropdownValue={buildDropdownValue("productUsed")} />
                    <InputControl disabled label='Add Ons' placeholder="Add Ons that are used for this service" isDropdown dropdownValue={buildDropdownValue("addOns")} />
                    <InputControl isSkipped />
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
