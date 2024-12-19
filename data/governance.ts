import { Permission, RoleItem } from "@/types/governance";

export const permissions: Permission[] = [
    { id: "1", name: "manage_users", description: "Ability to add, edit, or remove users" },
    { id: "2", name: "view_reports", description: "Access to view financial and operational reports" },
    { id: "3", name: "manage_inventory", description: "Ability to manage stock and inventory items" },
    { id: "4", name: "manage_services", description: "Ability to add, edit, or remove services" },
    { id: "5", name: "manage_roles", description: "Ability to manage roles and permissions" },
];

export const roleItems: RoleItem[] = [
    {
        id: "role_admin",
        name: "Admin",
        description: "Full access to all resources and actions",
        permissions: [...permissions], // Admin gets all permissions
    },
    {
        id: "role_manager",
        name: "Manager",
        description: "Manages daily operations and reports",
        permissions: permissions.filter((perm) =>
            ["view_reports", "manage_inventory", "manage_services"].includes(perm.name)
        ),
    },
    {
        id: "role_staff",
        name: "Staff",
        description: "Limited access for daily tasks and customer service",
        permissions: permissions.filter((perm) => ["view_reports"].includes(perm.name)),
    },
];
