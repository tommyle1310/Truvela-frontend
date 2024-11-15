import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export interface IDashboardCardProps {
    id: string;
    icon: React.ComponentProps<typeof FontAwesomeIcon>['icon']; // Icon for the FontAwesomeIcon
    title: string; // Title of the card
    description: string,
    isTrendUp?: boolean,
    trendMetric: string,
    mainValue: string | number
    className?: string; // Additional class names passed to the card component

}