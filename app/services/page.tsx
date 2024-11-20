"use client";

import { SearchBar } from "@/components/SearchBar";
import { GenericTable } from "@/components/Table/GenericTable";
import { Badge } from "@/components/ui/badge";
import { serviceTable } from "@/data/table";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Service } from "@/types/service";

// Define columns for the Service table
const columns: ColumnDef<Service>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
            <div className="flex items-center space-x-2">
                <img
                    src={row.original.avatar}
                    alt={row.original.name}
                    className="h-8 w-8 rounded-full"
                />
                <div className="flex flex-col">
                    <span className="font-bold text-lavender-primary-700">
                        {row.original.name}
                    </span>
                </div>
            </div>
        ),
    },
    {
        accessorKey: "id",
        header: "Service ID",
        cell: ({ row }) => <span>{row.getValue("id")}</span>,
    },
    {
        accessorKey: "category",
        header: "Category",
        cell: ({ row }) => <span>{row.original.category.join(", ")}</span>,
    },
    {
        accessorKey: "duration",
        header: "Duration",
        cell: ({ row }) => (
            <Badge
                className={` ${row.getValue("duration") as number >= 60
                    ? "bg-lavender-warning-300 text-lavender-warning-800"
                    : "bg-lavender-info-300 text-lavender-info-800"
                    }`}
            >
                {row.getValue("duration")}'
            </Badge>
        ),
    },
    {
        accessorKey: "addOns",
        header: "Add-ons",
        cell: ({ row }) => (
            <span>
                {row.original.addOns.map((addOn) => addOn.name).join(", ")}
            </span>
        ),
    },
    {
        accessorKey: "restrictions",
        header: "Restrictions",
        cell: ({ row }) => <span>{row.getValue("restrictions")}</span>,
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const service = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(service.id)}
                        >
                            Copy Service ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Edit Details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

const Page = () => {
    return (
        <div className="p-4 flex flex-col gap-4">
            <SearchBar />
            <div className="flex items-center gap-2">
                <div className="text-lg font-bold">Services</div>
                <Badge className="bg-lavender-success-300 text-lavender-success-800">
                    {serviceTable.length}
                </Badge>
            </div>
            <GenericTable<Service> data={serviceTable} columns={columns} />
        </div>
    );
};

export default Page;
