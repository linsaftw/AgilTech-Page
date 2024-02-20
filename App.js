const express = require('express');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs').promises; // Importing fs module to check if file exists
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the path for views directory
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define route to dynamically render EJS templates based on the entered path
app.get('*', async (req, res) => {
    const enteredPath = req.path.slice(1); // Remove the leading slash from the path
    const filePath = path.join(__dirname, 'views', `${enteredPath}.ejs`);

    console.log(`IP: ${req.ip}, Entered Path: /${enteredPath}`);

    try {
        // Check if the requested EJS file exists
        await fs.access(filePath);
        // Render the corresponding EJS template
        res.render(enteredPath);
    } catch (error) {
        // If the file doesn't exist, render the index.ejs file
        res.render('index');
    }
});

// Start the server
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
