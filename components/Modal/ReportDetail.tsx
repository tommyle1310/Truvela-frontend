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

export function ReportDetailModal({ data }: { data: ReportItem }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">View Details</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{data.senderName}</DialogTitle>
                    <DialogDescription className="flex items-center">
                        {data.senderRole}
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <p>{data.content}</p>
                    {data.attachments && data.attachments.map((attachment, index) => (
                        <div
                            key={index}
                            className="aspect-square w-20 bg-red-300 bg-cover bg-center rounded-md"
                            style={{ backgroundImage: `url(${attachment})` }}
                        >
                            {/* Optionally add an overlay or caption */}
                        </div>
                    ))}

                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
