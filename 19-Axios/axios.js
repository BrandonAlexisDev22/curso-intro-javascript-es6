const axios = require('axios');

// Import Axios

// Example: GET request
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log('Data:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Example: POST request
axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1
    })
    .then(response => {
        console.log('Post Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });