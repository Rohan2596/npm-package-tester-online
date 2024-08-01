import { currentDateTime, add, subtract, formatter, isAfter, isBefore, isSameDay } from 'nativx';

console.log("Current DateTime:", currentDateTime());
console.log("Date after 10 hours:", add(new Date(), { hours: 10 }));
console.log("Current Day of the Month:", new Date().getDate());

// Adding Time to Dates
const addedTimeExample1 = add(new Date(), { hours: 5, minutes: 30 });
console.log("Date after 5 hours and 30 minutes:", addedTimeExample1);

const specificDateExample = new Date('2023-01-01');
const addedTimeExample2 = add(specificDateExample, { days: 10 });
console.log("Date after 10 days:", addedTimeExample2);

const addedTimeExample3 = add(new Date(), { years: 2, months: 3 });
console.log("Date after 2 years and 3 months:", addedTimeExample3);

const addedTimeExample4 = add(new Date(), { seconds: 45 });
console.log("Date after 45 seconds:", addedTimeExample4);

const addedTimeExample5 = add(new Date(), { days: 5, hours: 4, minutes: 30, seconds: 15 });
console.log("Date after 5 days, 4 hours, 30 minutes, and 15 seconds:", addedTimeExample5);

const invalidDateExample = "invalid date";
const addedTimeExample6 = add(invalidDateExample, { hours: 1 });
console.log("Invalid Date Example:", addedTimeExample6); // Should log an error and return null

const defaultAddExample = add(undefined, { days: 1 });
console.log("Date after adding 1 day to current date:", defaultAddExample); // Adds one day to the current date

const noParametersExample = add(new Date());
console.log("Date with no parameters added:", noParametersExample); // Returns the current date as no parameters are added

const addedMonthsExample = add(new Date(), { months: 6 });
console.log("Date after 6 months:", addedMonthsExample);

const addedDaysExample = add(new Date(), { days: 365 });
console.log("Date after 365 days:", addedDaysExample);

// Subtracting Time from Dates
const subtractedTimeExample1 = subtract(new Date(), { hours: 5, minutes: 30 });
console.log("Date after subtracting 5 hours and 30 minutes:", subtractedTimeExample1);

const subtractedTimeExample2 = subtract(specificDateExample, { days: 10 });
console.log("Date after subtracting 10 days:", subtractedTimeExample2);

const subtractedTimeExample3 = subtract(new Date(), { years: 2, months: 3 });
console.log("Date after subtracting 2 years and 3 months:", subtractedTimeExample3);

const subtractedTimeExample4 = subtract(new Date(), { seconds: 45 });
console.log("Date after subtracting 45 seconds:", subtractedTimeExample4);

const subtractedTimeExample5 = subtract(new Date(), { days: 5, hours: 4, minutes: 30, seconds: 15 });
console.log("Date after subtracting 5 days, 4 hours, 30 minutes, and 15 seconds:", subtractedTimeExample5);

const subtractedInvalidDateExample = subtract(invalidDateExample, { hours: 1 });
console.log("Invalid Date Subtract Example:", subtractedInvalidDateExample); // Should log an error and return null

const defaultSubtractExample = subtract(undefined, { days: 1 });
console.log("Date after subtracting 1 day from current date:", defaultSubtractExample); // Subtracts one day from the current date

const subtractedMonthsExample = subtract(new Date(), { months: 6 });
console.log("Date after subtracting 6 months:", subtractedMonthsExample);

const subtractedDaysExample = subtract(new Date(), { days: 365 });
console.log("Date after subtracting 365 days:", subtractedDaysExample);

console.log("-------------------- Date Formatter ---------------------");

// Formatting Dates
const formatDateExample1 = new Date('2023-07-28T10:15:30');
console.log("Formatted Date (YYYY-MM-DD):", formatter(formatDateExample1, 'YYYY-MM-DD'));

const formatDateExample2 = new Date('2023-07-28T10:15:30');
console.log("Formatted Date (YYYY-MM-DD HH:mm:ss):", formatter(formatDateExample2, 'YYYY-MM-DD HH:mm:ss'));

const formatDateExample3 = new Date('2023-07-28T15:45:00');
console.log("Formatted Date (YYYY-MM-DD hh:mm:ss am/pm):", formatter(formatDateExample3, 'YYYY-MM-DD hh:mm:ss am/pm'));

const formatDateExample4 = new Date('2023-07-28T10:15:30Z');
console.log("Formatted Date with UTC (YYYY-MM-DD HH:mm:ss):", formatter(formatDateExample4, 'YYYY-MM-DD HH:mm:ss', true));

const formatDateExample5 = new Date('2023-07-28T10:15:30');
console.log("Formatted Date (DD/MM/YYYY):", formatter(formatDateExample5, 'DD/MM/YYYY'));

const formatDateExample6 = new Date('2023-07-28T23:59:59');
console.log("Formatted Date (MM-DD-YYYY HH:mm:ss am/pm):", formatter(formatDateExample6, 'MM-DD-YYYY HH:mm:ss am/pm'));

try {
    const invalidFormatExample = "invalid date";
    console.log(formatter(invalidFormatExample, 'YYYY-MM-DD'));
} catch (error) {
    console.error("Invalid Date Format Error:", error.message); // Output: "Invalid date provided"
}

const formatDateExample7 = new Date('2023-07-28');
console.log("Formatted Date (DD-MM-YYYY):", formatter(formatDateExample7, 'DD-MM-YYYY'));

const formatDateExample8 = new Date('2023-07-28T10:15:30');
console.log("Formatted Date (HH:mm):", formatter(formatDateExample8, 'HH:mm'));

console.log("-------------------- Date Comparison ---------------------");

// Comparing Dates
const compareDateExample1 = '2024-07-28T10:15:30';
const compareDateExample2 = '2024-07-30';

console.log("Is the first date before the second date?", isBefore(compareDateExample1, compareDateExample2)); // true
console.log("Is the first date after the second date?", isAfter(compareDateExample1, compareDateExample2)); // false
console.log("Are both dates on the same day?", isSameDay(compareDateExample1, compareDateExample2)); // false

const initialComparisonDate = new Date('2024-07-29');
const dateAfter5Days = add(initialComparisonDate, { days: 5 });
const dateAfter7Days = add(initialComparisonDate, { days: 7 });

console.log("Is the date after 5 days before the date after 7 days?", isBefore(dateAfter5Days, dateAfter7Days)); // true

const utcDateExample1 = new Date('2024-07-29T12:00:00Z'); // UTC
const utcDateExample2 = new Date('2024-07-29T12:00:00-07:00'); // UTC-7

console.log("Is the first UTC date before the second UTC date?", isBefore(utcDateExample1, utcDateExample2)); // false, because the first date is later in UTC
console.log("Are both UTC dates on the same day?", isSameDay(utcDateExample1, utcDateExample2)); // true, same day but different times

const currentSystemDate = new Date();
const futureSystemDate = add(currentSystemDate, { days: 1 });
const pastSystemDate = subtract(currentSystemDate, { days: 1 });

console.log("Is the current date before the future date?", isBefore(currentSystemDate, futureSystemDate)); // true
console.log("Is the past date after the current date?", isAfter(pastSystemDate, currentSystemDate)); // false
console.log("Is the current date the same as itself?", isSameDay(currentSystemDate, currentSystemDate)); // true
