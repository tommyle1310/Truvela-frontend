export type ReportItem = {
    id: string; // Unique identifier for the report
    priority: 'High' | 'Medium' | 'Low'; // Priority level of the report
    status: 'Pending' | 'Resolved' | 'Escalated'; // Added 'Escalated' for additional status handling
    senderId: User['id']; // ID of the person who submitted the report
    senderName: User['name']; // ID of the person who submitted the report
    senderRole?: 'Client' | 'Staff' | 'Admin'; // Optional: Identify the sender's role
    content: string; // The actual content or description of the report
    dateTime: Date; // Date and time when the report was submitted
    note?: string; // Optional notes added by the admin or handler
    reportType?: 'Complaint' | 'Feedback' | 'Incident'; // Optional: Type of the report
    attachments?: string[]; // Optional: Array of file paths or URLs for attachments
    resolvedById?: string; // Optional: ID of the staff/admin who resolved the report
    resolutionDateTime?: Date; // Optional: Date and time when the report was resolved
    location?: string; // Optional: Location where the issue occurred (if applicable)
};

export type User = {
    id: string,
    name: string,
    role: string
}
