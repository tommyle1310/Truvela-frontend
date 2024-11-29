import { useEffect, useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker() {
    const [rawSelectedDate, setRawSelectedDate] = useState<Date | null>(null)
    const [selectedDate, setselectedDate] = useState<number | null>(null)
    useEffect(() => {
        if (rawSelectedDate)
            setselectedDate(Math.floor(rawSelectedDate.getTime() / 1000))
    }, [rawSelectedDate])
    return (
        <div className="space-y-8">
            <div className="flex flex-col">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !rawSelectedDate && "text-muted-foreground"
                            )}
                        >
                            {rawSelectedDate ? (
                                format(rawSelectedDate, "PPP")
                            ) : (
                                <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={rawSelectedDate}
                            onSelect={setRawSelectedDate}
                            disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}
