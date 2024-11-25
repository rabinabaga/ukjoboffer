interface ProcessedData {
    name: string;
    count: number;
}

interface InputData {
    count: number;
    day: string;
}

export const subtractDays = (date: string, days: number) => {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    // Format the date as YYYY-MM-DD
    const year = result.getFullYear();
    const month = String(result.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(result.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};

export const getTodaysFullDate = () => {
    const today = new Date();

    const year = today.getFullYear(); // Get the year
    const month = today.getMonth() + 1; // Get the month (months are zero-based, so add 1)
    const date = today.getDate();
    const fullDate = `${year}-${month}-${date}`;
    return fullDate;
};

export const getDataFormatForChart = (input: InputData[] | undefined) => {
    // Define types for the input data and the result

    if (input) {
        // Function to get the day name from a date string
        const getDayNameFromDate = (dateStr: string): string => {
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const date = new Date(dateStr);
            return daysOfWeek[date.getDay()];
        };

        const rotateDays = (daysOfWeek: string[], day: string) => {
            const index = daysOfWeek.indexOf(day);

            if (index === -1) {
                throw new Error('Day not found in the array.');
            }

            // Rotate the array
            const rotatedDays = [...daysOfWeek.slice(index), ...daysOfWeek.slice(0, index)];
            return rotatedDays;
        };
        // List of all days of the week in the desired order
        const daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        const firstDayDateOfCurrentWeek = subtractDays(getTodaysFullDate(), 6);
        const rotated = rotateDays(daysOfWeek, getDayNameFromDate(firstDayDateOfCurrentWeek));

        // Create a map for storing counts by date and type
        const countMap: Record<string, number> = {};

        // Process the input data
        input?.forEach((item) => {
            const dayName = getDayNameFromDate(item.day);
            if (!countMap[dayName]) {
                countMap[dayName] = 0;
            }
            countMap[dayName] += item.count;
        });

        // Create the final data array and sort by day of the week
        const dataInitial: ProcessedData[] = rotated.map((day) => ({
            name: day,
            count: countMap[day] || 0
        }));

        // No need to sort as daysOfWeek already specifies the order
        return dataInitial;
    } else {
        return [];
    }
};
