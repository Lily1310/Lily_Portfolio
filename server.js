const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Serve index.html when accessing "/"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});
