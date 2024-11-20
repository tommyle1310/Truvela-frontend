import { TherapistLevel } from "@/types/service";
import { Service } from "./table";


// identify who can do which level
let levels: TherapistLevel[]
export function canPerformService(therapistLevel: TherapistLevel, service: Service): boolean {
    return levels.indexOf(therapistLevel) >= levels.indexOf(service.minLevel);
}