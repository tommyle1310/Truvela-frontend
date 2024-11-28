import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ReportItem } from "@/types/report"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from "next/image"
import { url } from "inspector"
import { format } from "date-fns"


export function ReportDetailModal({ data }: { data: ReportItem }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">View Details</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-3">
                        <span>{data.senderName}</span>
                        <span className={`text-sm ${data.status === "Resolved" ? 'text-lavender-success-600' : (data.status === "Pending" ? 'text-lavender-danger-600' : 'text-lavender-primary-600')}`}>{data.status}</span>
                    </DialogTitle>
                    <DialogDescription className="flex items-center gap-3 justify-between">
                        <div className="flex items-center gap-3">
                            {data.senderRole}
                            <span className={`p-1 rounded-sm ${data.priority === "High" ? 'bg-lavender-danger-700 text-white' : (data.priority === "Low" ? 'bg-lavender-warning-700 text-white' : 'bg-lavender-info-700 text-white')}`}>
                                {data.priority}
                            </span>
                        </div>
                        {format(data.dateTime, "HH:mm - dd/MM/yyyy")}
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <p>{data.content}</p>
                    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
                        <div className="flex w-max space-x-4 p-4">
                            {data.attachments && data.attachments.map((item, index) => (
                                <figure key={index} className="shrink-0">
                                    <div className="overflow-hidden rounded-md">
                                        <div className="aspect-square w-20 bg-center bg-cover"
                                            style={{ backgroundImage: `url(${item})` }}></div>
                                    </div>
                                </figure>
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>

                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
