'use client'
import { DatePicker } from "@/components/DatePicker"
import { ReportDetailModal } from "@/components/Modal/ReportDetail"
import { Select } from "@/components/Select"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { reportList } from "@/data/reports"
import { ReportItem } from "@/types/report"
import { faCopy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { format } from "date-fns"

export const TabContentRender = ({ value, data }: { value: string, data: ReportItem[] }) => {
    return (
        <TabsContent value={value} className="grid grid-cols-4 gap-3">
            {data.map(data => {
                if (data.senderRole === value)
                    return (
                        <Card className={`text-sm ${data.priority === 'High' ? 'border-lavender-danger-300' : (data.priority === 'Low' ? 'border-lavender-success-300' : 'border-lavender-info-300')} border-2`}>
                            <CardHeader className="p-2">
                                <div className="flex items-center justify-between">
                                    <CardTitle>{data.senderName}</CardTitle>
                                    <div className="flex items-center gap-1 text-sm">
                                        <p className="">ID: <span className=" font-bold">{data.id}</span></p>
                                        <Button className="p-2" variant={'outline'} onClick={() => navigator.clipboard.writeText(data.id)}                            >
                                            <FontAwesomeIcon icon={faCopy} size="sm" fill="#8C6EB8" />
                                        </Button>
                                    </div>
                                </div>
                                <CardDescription>{data.senderRole}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2 p-2 text-xs">
                                <p>Date: <span className="text-lavender-primary-600 font-bold">{format(data.dateTime, "HH:mm - dd/MM/yyyy")}</span></p>
                            </CardContent>
                            <CardFooter className="p-2">
                                <ReportDetailModal data={data} />
                            </CardFooter>
                        </Card>
                    )
            })}
        </TabsContent>
    )
}

const Page = () => {
    return (
        <div className="p-4 flex flex-col gap-4 w-full">
            <div className="flex items-center gap-3 justify-between">
                <h3 className="text-lavender-primary-600 text-xl font-bold">Report Lists</h3>
                <DatePicker />
            </div>
            <div className="self-end">
                <Select />
            </div>
            <Tabs defaultValue="Client" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-lavender-primary-200">
                    <TabsTrigger value="Client">Client</TabsTrigger>
                    <TabsTrigger value="Staff">Staff</TabsTrigger>
                    <TabsTrigger value="Others">Others</TabsTrigger>
                </TabsList>

                <TabContentRender value='Client' data={reportList} />
                <TabContentRender value='Staff' data={reportList} />
                <TabContentRender value='Others' data={reportList} />
            </Tabs>
        </div>
    )
}


export default Page