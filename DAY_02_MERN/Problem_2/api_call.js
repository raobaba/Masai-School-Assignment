const axios = require('axios');

// Function to make an API call using async/await
async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Example usage:
fetchData()
    .then(data => {
        console.log('API Response:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
