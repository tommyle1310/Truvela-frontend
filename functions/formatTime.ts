export function areTimestampsOnSameDate(timestamp1: number, timestamp2: number) {
    // Convert timestamps to Date objects and set them to midnight (00:00:00)
    const date1 = new Date(timestamp1 * 1000);
    const date2 = new Date(timestamp2 * 1000);

    // Set both dates to midnight (00:00:00)
    date1.setHours(0, 0, 0, 0);
    date2.setHours(0, 0, 0, 0);

    // Extract year, month, and date for both
    const year1 = date1.getUTCFullYear();
    const month1 = date1.getUTCMonth(); // 0-based
    const day1 = date1.getUTCDate();

    const year2 = date2.getUTCFullYear();
    const month2 = date2.getUTCMonth(); // 0-based
    const day2 = date2.getUTCDate();

    console.log(date1); // Log for debugging
    console.log(date2); // Log for debugging

    // Compare the extracted values
    return year1 === year2 && month1 === month2 && day1 === day2;
}
