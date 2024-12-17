"use client";

import { SearchBar } from "@/components/SearchBar";
import { GenericTable } from "@/components/Table/GenericTable";
import { Badge } from "@/components/ui/badge";
import { stockTable } from "@/data/table"; // Assume stockTable is imported here
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
import { Stock } from "@/types/stock";
import { StockForm } from "@/components/Modal/StockForm";

const columns: ColumnDef<Stock>[] = [
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
                    src={row.original.avatar || ""}
                    alt={row.original.name}
                    className="h-8 w-8 rounded-full"
                />
                <span className="font-bold leading-4 text-lavender-primary-700">
                    {row.original.name}
                </span>
            </div>
        ),
    },
    {
        accessorKey: "category",
        header: "Category",
        cell: ({ row }) => <span>{row.getValue("category")}</span>,
    },
    {
        accessorKey: "quantity",
        header: "Quantity",
        cell: ({ row }) => (
            <Badge
                className={`${(row.getValue("quantity") as number) > 50
                    ? "bg-lavender-success-300 text-lavender-success-800"
                    : "bg-lavender-danger-300 text-lavender-danger-800"
                    }`}
            >
                <span>{row.getValue("quantity")}</span>
            </Badge>
        ),
    },
    {
        accessorKey: "stockLocation.name",
        header: "Location",
        cell: ({ row }) => <span>{row.original.stockLocation.name}</span>,
    },
    {
        accessorKey: "usageRate",
        header: "Usage Rate",
        cell: ({ row }) => (
            <Badge
                className={`${row.getValue("usageRate") === "High"
                    ? "bg-lavender-warning-300 text-lavender-warning-800"
                    : row.getValue("usageRate") === "Medium"
                        ? "bg-lavender-info-300 text-lavender-info-800"
                        : "bg-lavender-muted-300 text-lavender-muted-800"
                    }`}
            >
                <span>{row.getValue("usageRate")}</span>
            </Badge>
        ),
    },
    {
        accessorKey: "expireAfter",
        header: "Expire after",
        cell: ({ row }) => (
            <span>
                {row.getValue("expireAfter")
                    ? (row.getValue("expireAfter") as string)
                    : "N/A"}
            </span>
        ),
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const stock = row.original;

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
                            onClick={() => navigator.clipboard.writeText(stock.id)}
                        >
                            Copy Stock ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Edit Stock</DropdownMenuItem>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
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
                <div className="flex items-center justify-between w-full">
                    <div className="items-center flex gap-2">
                        <div className="text-lg font-bold">Stocks</div>
                        <Badge className="bg-lavender-success-300 text-lavender-success-800">
                            {stockTable.length}
                        </Badge>
                    </div>
                    <StockForm />
                </div>
            </div>
            <GenericTable<Stock> data={stockTable} columns={columns} />
        </div>
    );
};

export default Page;
