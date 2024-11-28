import { ReportItem } from "@/types/report";

export const reportList: ReportItem[] = [
    {
        id: "1",
        priority: "High",
        senderName: 'Client 1',
        status: "Pending",
        senderId: "C123",
        senderRole: "Client",
        content: "The massage chair in room 5 is broken.",
        dateTime: new Date("2024-11-18T10:30:00"),
        note: "Client reported it early in the morning.",
        reportType: "Complaint",
        attachments: [
            "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-on-a-street.jpg",
            "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-on-a-street.jpg",
            "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-on-a-street.jpg",
            "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-on-a-street.jpg",
            "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-on-a-street.jpg",
            "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-on-a-street.jpg",
            "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-on-a-street.jpg",
            "https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-on-a-street.jpg",
        ],
        location: "Room 5",
    },
    {
        id: "2",
        priority: "Medium",
        senderName: 'Staff 1',
        status: "Resolved",
        senderId: "S456",
        senderRole: "Staff",
        content: "Feedback on the new aromatherapy oils. Clients seem to love it.",
        dateTime: new Date("2024-11-17T15:00:00"),
        note: "Positive feedback noted by staff.",
        reportType: "Feedback",
        resolvedById: "A789",
        resolutionDateTime: new Date("2024-11-17T16:00:00"),
    },
    {
        id: "3",
        priority: "Low",
        status: "Escalated",
        senderName: 'Client 2',
        senderId: "C789",
        senderRole: "Client",
        content: "Staff member was late for my appointment.",
        dateTime: new Date("2024-11-16T12:45:00"),
        note: "Escalated to management for review.",
        reportType: "Incident",
        attachments: ["https://res.cloudinary.com/dlavqnrlx/image/upload/v1719802009/samples/man-on-a-street.jpg"],
        location: "Reception",
    },
];
