// Math Examples
console.log("Math.PI:", Math.PI); // Value of PI
console.log("Math.E:", Math.E); // Euler's number
console.log("Math.sqrt(16):", Math.sqrt(16)); // Square root
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // Power
console.log("Math.abs(-10):", Math.abs(-10)); // Absolute value
console.log("Math.ceil(4.2):", Math.ceil(4.2)); // Round up
console.log("Math.round(4.5):", Math.round(4.5)); // Round to n
console.log("Math.floor(4.8):", Math.floor(4.8)); // Round downearest
console.log("Math.max(1, 5, 3):", Math.max(1, 5, 3)); // Maximum value
console.log("Math.min(1, 5, 3):", Math.min(1, 5, 3)); // Minimum value
console.log("Math.random():", Math.random()); // Random number between 0 and 1
console.log("Math.trunc(4.9):", Math.trunc(4.9)); // Integer part of a number

// Date Examples
const now = new Date();
console.log("Current Date and Time:", now); // Current date and time
console.log("Year:", now.getFullYear()); // Current year
console.log("Month (0-based):", now.getMonth()); // Current month (0-based)
console.log("Date:", now.getDate()); // Current day of the month
console.log("Day of the Week (0-Sunday):", now.getDay()); // Day of the week
console.log("Hours:", now.getHours()); // Current hour
console.log("Minutes:", now.getMinutes()); // Current minutes
console.log("Seconds:", now.getSeconds()); // Current seconds
console.log("Milliseconds:", now.getMilliseconds()); // Current milliseconds

// Creating a specific date
const specificDate = new Date(2023, 0, 1); // January 1, 2023
console.log("Specific Date:", specificDate);

// Date arithmetic
const tomorrow = new Date();
tomorrow.setDate(now.getDate() + 1);
console.log("Tomorrow's Date:", tomorrow);

const lastWeek = new Date();
lastWeek.setDate(now.getDate() - 7);
console.log("Last Week's Date:", lastWeek);

// Formatting date
console.log("ISO String:", now.toISOString());
console.log("Locale String:", now.toLocaleString());
console.log("Locale Date String:", now.toLocaleDateString());
console.log("Locale Time String:", now.toLocaleTimeString());