const fs = require('fs').promises;
const path = require('path');

// Function to read a file asynchronously using promises
async function readFileAsync(filepath) {
    try {
        const data = await fs.readFile(filepath, 'utf8');
        return data;
    } catch (err) {
        throw err;
    }
}

// Function to aggregate data from multiple files using async/await
async function aggregateDataAsync(filepaths) {
    let aggregateData = '';

    for (const filepath of filepaths) {
        try {
            const data = await readFileAsync(filepath);
            aggregateData += data;
        } catch (err) {
            throw err;
        }
    }

    return aggregateData;
}

// Example usage:
const filepaths = [path.join(__dirname, 'file1.txt'), path.join(__dirname, 'file2.txt')];
aggregateDataAsync(filepaths)
    .then(result => {
        console.log('Aggregated Data:', result);
    })
    .catch(err => {
        console.error('Error:', err);
    });
