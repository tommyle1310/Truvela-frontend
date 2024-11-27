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
import { faCopy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
                <TabsList className="grid w-full grid-cols-3 ">
                    <TabsTrigger value="Client">Client</TabsTrigger>
                    <TabsTrigger value="Staff">Staff</TabsTrigger>
                    <TabsTrigger value="Others">Others</TabsTrigger>
                </TabsList>
                <TabsContent value="Client" className="grid grid-cols-4 gap-3">
                    {reportList.map(item => {
                        return (
                            <Card className="text-sm">
                                <CardHeader className="p-2">
                                    <div className="flex items-center justify-between">
                                        <CardTitle>Client A</CardTitle>
                                        <div className="flex items-center gap-1 text-sm">
                                            <p className="">ID: <span className=" font-bold">{item.id}</span></p>
                                            <Button className="p-2" variant={'outline'} onClick={() => navigator.clipboard.writeText('abcd')}                            >
                                                <FontAwesomeIcon icon={faCopy} size="sm" />
                                            </Button>
                                        </div>
                                    </div>
                                    <CardDescription>{item.senderRole}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2 p-2 text-xs">
                                    <p>Date submitted: <span className="text-lavender-primary-600 font-bold">11:47AM - 21/11 </span></p>
                                </CardContent>
                                <CardFooter className="p-2">
                                    <ReportDetailModal data={item} />
                                </CardFooter>
                            </Card>
                        )
                    })}
                </TabsContent>
                <TabsContent value="Staff">
                    <Card>
                        <CardHeader>
                            <CardTitle>Password</CardTitle>
                            <CardDescription>
                                Change your password here. After saving, you'll be logged out.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="current">Current password</Label>
                                <Input id="current" type="password" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">New password</Label>
                                <Input id="new" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save password</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="Others">
                    <Card>
                        <CardHeader>
                            <CardTitle>Password</CardTitle>
                            <CardDescription>
                                Change your password here. After saving, you'll be logged out.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="current">Current password</Label>
                                <Input id="current" type="password" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">New password</Label>
                                <Input id="new" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save password</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}


export default Page