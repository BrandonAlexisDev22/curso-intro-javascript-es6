try {
    // Code that may throw an error
    let result = 10 / 0;
    console.log("Result:", result);
} catch (error) {
    // Handle the error
    console.error("An error occurred:", error.message);
} finally {
    // Code that will always execute
    console.log("Execution completed.");
}