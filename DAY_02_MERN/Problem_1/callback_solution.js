const fs = require('fs');
const path = require('path');

// Function to read a file asynchronously
function readFileAsync(filepath, callback) {
    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, data);
    });
}

// Function to aggregate data from multiple files using callbacks
function aggregateDataCallback(filepaths, callback) {
    let aggregateData = '';
    let filesProcessed = 0;

    filepaths.forEach(filepath => {
        readFileAsync(filepath, (err, data) => {
            if (err) {
                callback(err, null);
                return;
            }
            aggregateData += data;
            filesProcessed++;

            if (filesProcessed === filepaths.length) {
                callback(null, aggregateData);
            }
        });
    });
}

// Example usage:
const filepaths = [path.join(__dirname, 'file1.txt'), path.join(__dirname, 'file2.txt')];
aggregateDataCallback(filepaths, (err, result) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Aggregated Data:', result);
});
