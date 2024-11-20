import { AddOns, TreatmentProduct } from "./stock";
import { TherapistLevel } from "./therapist";

export type ServiceCategory =
    | 'Massage Therapy'
    | 'Facial Treatments'
    | 'Body Treatments'
    | 'Hair Care'
    | 'Nail Care'
    | 'Aromatherapy'
    | 'Hydrotherapy'
    | 'Wellness & Fitness'
    | 'Spa Packages'
    | 'Specialty Services';


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
    category?: ServiceCategory[];
};


