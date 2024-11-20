import { AddOns, TreatmentProduct } from "./stock";
import { TherapistLevel } from "./therapist";

export type ServiceCategory =
    {
        id: string,
        name: string,
        description: string,
        avatar: { url: string, key: string }
    }


export type Service = {
    id: string;
    name: string;
    avatar?: string;
    price?: number;
    duration?: number;
    suitableFor?: string
    addOns?: AddOns[];
    restrictions?: string;
    minLevel?: TherapistLevel;
    treatmentProduct?: TreatmentProduct[];
    ageLimit?: number;
    category?: ServiceCategory[]
};


