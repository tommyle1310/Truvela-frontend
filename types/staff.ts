import { SpaLocation } from "./spa";

export type Staff = {
    id: string;
    name: string;
    avatar: string;
    dateOfBirth?: string,
    violationCount?: string,
    workLocation?: SpaLocation,
    isActive?: boolean,
    role: string;
    monthlyPoints: number;
    status: "Active" | "Inactive"
    email: string;
};

