export type Permission = {
    id: string; // Unique identifier for the permission
    name: string; // Name of the permission (e.g., "manage_users", "view_reports")
    description?: string; // Optional description of what the permission entails
};

export type RoleItem = {
    id: string; // Unique identifier for the role
    name: string; // Name of the role (e.g., "Admin", "Manager")
    avatar: {
        url: string; // URL for the avatar image
        key: string; // Key for identifying the avatar in storage
    };
    description: string; // Brief description of the role
    permissions: Permission[]; // List of permissions associated with this role
};
