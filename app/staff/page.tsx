"use client";

import { SearchBar } from "@/components/SearchBar";
import { GenericTable } from "@/components/Table/GenericTable";
import { Badge } from "@/components/ui/badge";
import { staffTable } from "@/data/table";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Staff } from "@/types/staff";
import { StaffForm } from "@/components/Modal/StaffForm";

const columns: ColumnDef<Staff>[] = [
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
                    <span className="text-xs font-thin">{row.original.email}</span>
                </div>
            </div>
        ),
    },
    {
        accessorKey: "role",
        header: "Role",
        cell: ({ row }) => <span>{row.getValue("role")}</span>,
    },
    {
        accessorKey: "id",
        header: "Staff ID",
        cell: ({ row }) => <span>{row.getValue("id")}</span>,
    },
    {
        accessorKey: "monthlyPoints",
        header: "Monthly Points",
        cell: ({ row }) => (
            <Badge
                className={` ${(row.getValue("monthlyPoints") as number) >= 90
                    ? "bg-lavender-success-300 text-lavender-success-800"
                    : "bg-lavender-danger-300 text-lavender-danger-800"
                    }`}
            >
                <span>{row.getValue("monthlyPoints")}</span>
            </Badge>
        ),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            <Badge
                className={`${row.getValue("status") === "Active"
                    ? "bg-lavender-success-300 text-lavender-success-800"
                    : "bg-lavender-danger-300 text-lavender-danger-800"
                    }`}
            >
                <span className={`capitalize text-${row.getValue("status")}`}>
                    {row.getValue("status")}
                </span>
            </Badge>
        ),
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const staff = row.original;

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
                            onClick={() => navigator.clipboard.writeText(staff.id)}
                        >
                            Copy Staff ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <StaffForm />
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

                        <div className="text-lg font-bold">Staffs</div>
                        <Badge className="bg-lavender-success-300 text-lavender-success-800">
                            {staffTable.length}
                        </Badge>
                    </div>
                    <StaffForm />
                </div>
            </div>
            <GenericTable<Staff> data={staffTable} columns={columns} />
        </div>
    );
};

export default Page;
