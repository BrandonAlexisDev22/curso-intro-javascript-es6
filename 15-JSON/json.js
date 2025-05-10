// Simulated JSON data (as if it were fetched from a server)
let jsonData = {
    existingKey: "existingValue"
};
// Load JSON data from an external file (example.json)
fetch('/home/user/Escritorio/PROGRAMACION/ES6/15-JSON/example.json')
    .then(response => response.json())
    .then(data => {
        // Merge the loaded data into jsonData
        Object.assign(jsonData, data);
    })
    .catch(error => console.error('Error loading JSON file:', error));
// Manipulate the JSON data
jsonData.newKey = "newValue";

// Convert the JSON object to a string
const updatedJsonString = JSON.stringify(jsonData, null, 2);

// Display the updated JSON (e.g., in the console or on the page)
console.log("Updated JSON:", updatedJsonString);

// If you need to send the updated JSON back to a server, you can use fetch:
fetch('https://example.com/update-json', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: updatedJsonString
})
.then(response => response.json())
.then(data => console.log('Server response:', data))
.catch(error => console.error('Error:', error));
