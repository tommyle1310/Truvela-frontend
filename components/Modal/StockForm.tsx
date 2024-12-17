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
    isSkipped?: boolean,
    isMultiSelectList?: boolean,
    multiSelectValue?: {
        mainTitle: string,
        id: string,
        subTitle: string
    }[]
}

const InputControl = ({ placeholder, disabled, isImage, label, isHidden, isSkipped, value, defaultValue, isDropdown, dropdownValue, isMultiSelectList, multiSelectValue }: IInputControl) => {
    const [open, setOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState(value || ""); // Initialize with `value` if provided.
    const [multiSelectData, setMultiSelectData] = useState<{
        mainTitle: string,
        id: string,
        subTitle: string
    }[]>()
    if (isSkipped)
        return <div></div>
    useEffect(() => {
        if (!isDropdown && isMultiSelectList && multiSelectValue && multiSelectValue && multiSelectValue.length) {
            setMultiSelectData(multiSelectValue)
        }
    }, [multiSelectValue])

    console.log('chekc heourheorheourer', multiSelectData?.map(item => item))
    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor="name">{label}</Label>
            {!isDropdown ? (
                isMultiSelectList ?
                    <Popover>

                        <PopoverTrigger asChild>
                            <Button variant="outline">List {label}</Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                            <ScrollArea className="h-[200px] ">
                                <div className="flex flex-col gap-1">
                                    {multiSelectData?.map((item) => (
                                        <div key={item.id} className=" py-1 px-2 rounded-sm hv hover:bg-slate-200 text-slate-600 flex items-center justify-between gap-3">
                                            <Label htmlFor={item.id} className="flex-grow flex justify-between items-center">
                                                <h5>{item.mainTitle}</h5>
                                                <strong className="font-thin text-sm">{item.subTitle}</strong>
                                            </Label>
                                            <Checkbox id={item.id} />
                                        </div>

                                    ))}
                                </div>
                            </ScrollArea>
                        </PopoverContent>
                    </Popover>
                    :
                    (!isHidden ? (
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
                    ))
            ) : (
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[200px] justify-between"
                        >
                            {selectedValue
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
    const buildDropdownValue = (type: 'category' | 'usageRate') => {
        switch (type) {
            case 'category':
                return stockModalData[type]?.map(a => {
                    return productCategories.find(b => {
                        return a.id === b.id;
                    });
                });
            case 'usageRate':
                return ['HIGH', 'LOW', 'MEDIUM']

        }
    };
    const buildMultiSelectValue = (type: 'spaAvailable' | 'providerLinks') => {
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
                    subTitle: item.link.slice(-20), // Ensure this matches the expected structure
                }));
            default:
                return [];
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
                    <InputControl disabled label='Available Spa' placeholder="Sunset Spa" isMultiSelectList multiSelectValue={buildMultiSelectValue('spaAvailable')} />
                    <InputControl disabled label='Stock in' placeholder="31" value={stockModalData.stockIn} />
                    <InputControl disabled label='Minimun availability' placeholder="31" value={stockModalData.limitQuantityInStock} />
                    <InputControl disabled label='Provider Links' placeholder="https://fb/phucle1310" isMultiSelectList multiSelectValue={buildMultiSelectValue('providerLinks')} />
                    <InputControl disabled label='Usage Rate' placeholder="HIGH" value={stockModalData.usageRate} isDropdown dropdownValue={buildDropdownValue('usageRate')} />
                    <InputControl disabled label='Image' placeholder="Image for this Service" isImage value={stockModalData.avatar} />

                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
