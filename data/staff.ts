import { Permission } from "@/types/governance"

export type StaffRole = {
    id: string, name: string, description: string, permissions?: Permission[]
}

export const staffRoles: StaffRole[] = [
    {
        id: 'STF_ROLE_1',
        name: 'Admin',
        description: "Member who's in charge of the app's running.",
    },
    {
        id: 'STF_ROLE_2',
        name: 'Therapist',
        description: "main worker of the company who do the treatment for the patient.",
    },
    {
        id: 'STF_ROLE_3',
        name: 'Marketer',
        description: "Member who broadcasts the company.",
    }
]
