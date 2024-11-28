import { CalendarDays } from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Separator } from "../ui/separator"

interface IHoverCardBooking {
    idx: number,
    bgColor: string,
    slot: {
        start: number,
        duration: number,
        therapy: { image?: string, name: string },
        therapist: string,
        client: string,
        note?: {
            coordinator?: string,
            client?: string
        }
    }
}

function formatTime(inputTime: number) {
    const toTimeString = (hour: number) => {
        const hours = Math.floor(hour);
        const minutes = (hour % 1) * 60;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
    };

    return `${toTimeString(inputTime + 10)}`
}

export function HoverCardBooking({ idx, slot, bgColor }: IHoverCardBooking) {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <div
                    key={idx}
                    className={`absolute top-0 bottom-0 ${bgColor} rounded-md p-1`}
                    style={{ left: `${(slot.start * 100) / 13}%`, width: `${slot.duration * 100 / 13}%` }}
                >
                    <div className="absolute -top-3 -right-5 px-1 flex flex-col text-sm rounded-sm font-semibold bg-white border border-lavender-primary-500 text-lavender-primary-500">{`${slot.duration * 60}m`}</div>
                    <p className='font-semibold'>{slot.therapy.name}</p>
                    <p className='text-xs'>{slot.therapist}</p>
                </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-full flex flex-col gap-2">
                <div className="flex h-5 items-center space-x-4 text-sm">
                    <div>Client: <span className="text-lg font-bold text-lavender-success-700">{slot.client}</span></div>
                    <Separator orientation="vertical" />
                    <div>Therapist: <span className="text-lg font-bold text-lavender-primary-700">{slot.therapist}</span></div>
                </div>
                <Separator />
                <div className="w-full text-sm flex h-14 gap-3">
                    <div className="flex items-center gap-1">
                        <Avatar>
                            <AvatarImage src={slot.therapy.image} alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <div className="text-lg font-bold text-lavender-primary-600">{slot.therapy.name}</div>
                            <div className=" font-semibold text-lavender-info-600">{slot.duration}</div>
                        </div>
                    </div>
                    <Separator orientation="vertical" />
                    <div className="flex items-center gap-2">
                        <p>Start: <span className="font-semibold text-lavender-info-600">{formatTime(slot.start)}</span></p>
                        <p>End: <span className="font-semibold text-lavender-warning-600">{formatTime(slot.start + slot.duration)}</span></p>
                    </div>
                </div>
                <Separator />
                <div className="w-full text-sm flex h-14 gap-3">
                    <div className="">Tension levels</div>
                    <Separator orientation="vertical" />
                    <div className="flex flex-col">
                        <div className="">Note: </div>
                        <p className="font-bold">{slot.note?.coordinator}</p>
                        <p className="font-bold">{slot.note?.client}</p>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}
