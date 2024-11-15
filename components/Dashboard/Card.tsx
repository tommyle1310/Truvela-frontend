import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowTrendDown, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { IDashboardCardProps } from "@/types/dashboard"



type CardProps = React.ComponentProps<typeof Card>

export function DashboardCard({ className, description, icon, id, mainValue, title, trendMetric, isTrendUp, ...props }: CardProps & IDashboardCardProps) {
    return (
        <Card className={cn("w-full", className)} {...props}>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full items-center flex justify-center bg-lavender-info-200">
                        <FontAwesomeIcon icon={icon} size="sm" color="#5388DB" />
                    </div>
                    {title}
                </CardTitle>
                <CardDescription className="leading-4">{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center gap-4">
                <h5 className="text-lg font-bold text-lavender-primary-600">{mainValue}</h5>
                {isTrendUp ?

                    <div className="px-3 py-1 rounded-full items-center text-xs gap-1 text-lavender-success-700 font-bold flex justify-center bg-lavender-success-200">
                        <FontAwesomeIcon icon={faArrowTrendUp} size="xs" color="#4CAF50" />
                        <span>{trendMetric}</span>
                    </div> :
                    <div className="px-3 py-1 rounded-full items-center text-xs gap-1 text-lavender-danger-700 font-bold flex justify-center bg-lavender-danger-200">
                        <FontAwesomeIcon icon={faArrowTrendDown} size="xs" color="#B74957" />
                        <span>{trendMetric}</span>
                    </div>
                }
            </CardContent>
            {/* <CardFooter>
                <Button className="w-full">
                    <Check /> Mark all as read
                </Button>
            </CardFooter> */}
        </Card>
    )
}
