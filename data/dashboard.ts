import { IDashboardCardProps } from "@/types/dashboard";
import { faCalendarCheck, faCubesStacked, faMoneyBill, faMoneyBills, faRankingStar, faReceipt } from "@fortawesome/free-solid-svg-icons";

export const dashboardCardItem: IDashboardCardProps[] = [
    {
        id: 'Dashboard-1',
        icon: faMoneyBill,
        title: 'Total Revenue',
        description: "Total income generated from all sales and services.",
        isTrendUp: true,
        trendMetric: '1%',
        mainValue: '$3,212,333'
    },
    {
        id: 'Dashboard-2',
        icon: faMoneyBills,
        title: 'Net Revenue',
        description: "Revenue after all expenses and deductions are accounted for.",
        isTrendUp: true,
        trendMetric: '20%',
        mainValue: '$2,212,333'
    },
    {
        id: 'Dashboard-3',
        icon: faReceipt,
        title: 'Total Invoices',
        description: "Total number of invoices generated within the period.",
        isTrendUp: false,
        trendMetric: '5%',
        mainValue: '33'
    },
    {
        id: 'Dashboard-4',
        icon: faCalendarCheck,
        title: 'Total Reservations',
        description: "Total number of reservations made within the period.",
        isTrendUp: true,
        trendMetric: '9%',
        mainValue: 9
    },
    {
        id: 'Dashboard-5',
        icon: faRankingStar,
        title: 'Top Service',
        description: "Most popular service based on client bookings.",
        isTrendUp: true,
        trendMetric: '20%',
        mainValue: 'Healer'
    },
    {
        id: 'Dashboard-6',
        icon: faCubesStacked,
        title: 'Stock Availability',
        description: "Items available in inventory for immediate use.",
        isTrendUp: false,
        trendMetric: '30%',
        mainValue: '21%'
    },
]