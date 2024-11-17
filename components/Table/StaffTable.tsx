"use client";

import * as React from "react";
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";

const data: Staff[] = [
    {
        id: "m5gr84i9",
        avatar: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-portrait.jpg",
        monthlyPoints: 100,
        name: "Staff 1",
        role: "Admin",
        status: "Active",
        email: "ken99@yahoo.com",
    },
    {
        id: "3u1reuv4",
        avatar: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-portrait.jpg",
        monthlyPoints: 95,
        name: "Staff 2",
        role: "Admin",
        status: "Inactive",
        email: "Abe45@gmail.com",
    },
    {
        id: "derv1ws0",
        avatar: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-portrait.jpg",
        monthlyPoints: 80,
        name: "Staff 3",
        role: "Manager",
        status: "Inactive",
        email: "Monserrat44@gmail.com",
    },
    {
        id: "5kma53ae",
        avatar: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-portrait.jpg",
        monthlyPoints: 120,
        name: "Staff 4",
        role: "Admin",
        status: "Active",
        email: "Silas22@gmail.com",
    },
    {
        id: "bhqecj4p",
        avatar: "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-portrait.jpg",
        monthlyPoints: 50,
        name: "Staff 5",
        role: "Support",
        status: "Inactive",
        email: "carmella@hotmail.com",
    },
];

export type Staff = {
    id: string;
    name: string;
    avatar: string;
    role: string;
    monthlyPoints: number;
    status: "Active" | "Inactive"
    email: string;
};

export const columns: ColumnDef<Staff>[] = [
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
                    <span className="font-bold text-lavender-primary-700">{row.original.name}</span>
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
            <Badge className={` ${row.getValue('monthlyPoints') >= 90 ? 'bg-lavender-success-300 text-lavender-success-800' : 'bg-lavender-danger-300 text-lavender-danger-800'}`}>
                <span>{row.getValue("monthlyPoints")}</span>
            </Badge>
        )
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            <Badge className={`${row.getValue('status') === 'Active' ? 'bg-lavender-success-300 text-lavender-success-800' : 'bg-lavender-danger-300 text-lavender-danger-800'}`}>

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
                        <DropdownMenuItem>Edit Details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

export function StaffTable() {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                <Input
                    placeholder="Filter emails..."
                    value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("email")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) => column.toggleVisibility(!!value)}
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                );
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}
