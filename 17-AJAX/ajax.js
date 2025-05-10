// Example of an AJAX request using XMLHttpRequest

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Configure it: GET-request for a URL
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

// Set up a function to handle the response
xhr.onload = function () {
    if (xhr.status === 200) {
        // Parse and log the response
        const data = JSON.parse(xhr.responseText);
        console.log('Response Data:', data);
    } else {
        console.error('Error:', xhr.status, xhr.statusText);
        // Fallback: Provide default data
        const fallbackData = [{ id: 1, title: 'Fallback Post', body: 'This is fallback content.' }];
        console.log('Fallback Data:', fallbackData);
    }
};

// Handle network errors
xhr.onerror = function () {
    console.error('Request failed');
};

// Send the request
xhr.send();