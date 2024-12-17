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



export function StockForm() {
    const buildDropdownValue = (type: 'category') => {
        switch (type) {
            case 'category':
                return stockModalData[type]?.map(a => {
                    return productCategories.find(b => {
                        return a.id === b.id;
                    });
                });
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button >Add</Button>
            </DialogTrigger>
            <DialogContent className="max-w-screen-md">
                <DialogHeader>
                    <DialogTitle>Add Product</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4 py-4">
                    <InputControl disabled label='Product ID' placeholder="PRO_1" value={stockModalData.id} />
                    <InputControl disabled label='Product Name' placeholder="Lavender Oil" value={stockModalData.name} />
                    <InputControl disabled label='Cost Price' placeholder="30" value={stockModalData.costPrice} />
                    <InputControl disabled label='Selling Price' placeholder="31" value={stockModalData.sellingPrice} />
                    <InputControl disabled label='Count Unit' placeholder="Kilogram" value={stockModalData.countUnit} />
                    <InputControl disabled label='Expire after' placeholder="30 days" value={stockModalData.expireAfter} />
                    <InputControl disabled label='Category' placeholder="Skincare" isDropdown dropdownValue={buildDropdownValue("category")} />
                    <InputControl disabled label='Available Spa' placeholder="Sunset Spa" />
                    <InputControl disabled label='Stock in' placeholder="31" value={stockModalData.stockIn} />
                    <InputControl disabled label='Minimun availability' placeholder="31" value={stockModalData.limitQuantityInStock} />
                    <InputControl disabled label='Provider Links' placeholder="https://fb/phucle1310" />
                    <InputControl disabled label='Usage Rate' placeholder="HIGH" value={stockModalData.usageRate} />
                    <InputControl disabled label='Image' placeholder="Image for this Service" isImage value={stockModalData.avatar} />
                    {/* <div className="grid-cols-2 grid gap-4 col-span-2">
                        <InputControl disabled label='Short Description' placeholder={ServicePlaceholder.short} value={servicesModal.name} />
                        <InputControl disabled label='Detailed Description' placeholder={ServicePlaceholder.detailed} value={servicesModal.name} />
                    </div> */}
                    <InputControl isSkipped />
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
