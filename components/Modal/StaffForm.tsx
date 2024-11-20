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
import { StaffModal } from "@/data/Modal/staff"
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
import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface IInputControl {
    placeholder: string,
    disabled: boolean,
    isImage?: boolean,
    isDropdown?: boolean,
    dropdownValue?: { id: string, name: string }[],
    isHidden?: boolean,
    label: string,
    value?: number | string,
    defaultValue?: string | number
}

const InputControl = ({ placeholder, disabled, isImage, label, isHidden, value, defaultValue, isDropdown, dropdownValue }: IInputControl) => {
    const [open, setOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState(value || ""); // Initialize with `value` if provided.

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
                                    : dropdownValue?.find((item) => item.name === selectedValue)?.name
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
                                    {dropdownValue?.map((item) =>
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


export function StaffForm() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button >Add</Button>
            </DialogTrigger>
            <DialogContent className="max-w-screen-md">
                <DialogHeader>
                    <DialogTitle>Add Staff</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4 py-4">
                    <InputControl disabled label='Name' placeholder="Staff Name" value={StaffModal.name} />
                    <InputControl disabled label='Email' placeholder="Staff Email" value={StaffModal.email} />
                    <InputControl disabled label='Role' placeholder="Staff Role" value={StaffModal.role.name} />
                    <InputControl disabled label='Is Full Time?' placeholder="Is Full Time?" value={StaffModal.isFullTime ? 'Full-time' : 'Part-time'} />
                    <InputControl disabled isDropdown label='Gender' placeholder="Gender" dropdownValue={[{ id: 'Male', name: 'Male' }, { id: 'Female', name: 'Female' }, { id: 'Others', name: 'Others' }]} />
                    <InputControl disabled label='Date of Birth' placeholder="Date of Birth" value={`${StaffModal.dateOfBirth}`} />
                    <InputControl disabled label='Avatar' isImage placeholder="Avatar" value={StaffModal.avatar?.url} />
                    <InputControl disabled isHidden label='Salary' placeholder="Salary" value={StaffModal.salary} />
                    <InputControl disabled isDropdown label='Job Capabilities' placeholder="Job Capabilities" dropdownValue={StaffModal?.capabilities} />
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
