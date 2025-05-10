// Example of using Promises in JavaScript

// A function that returns a promise
function fetchData(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error: Failed to fetch data.");
            }
        }, 2000); // Simulate a 2-second delay
    });
}

// Using the promise
fetchData(true)
    .then((result) => {
        console.log(result); // Logs: Data fetched successfully!
    })
    .catch((error) => {
        console.error(error); // Logs: Error: Failed to fetch data.
    })
    .finally(() => {
        console.log("Operation complete."); // Always runs
    });