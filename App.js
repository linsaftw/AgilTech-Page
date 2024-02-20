const express = require('express');
const path = require('path');
const fs = require('fs').promises; // Importing fs module to check if file exists
const app = express();

// Array of random names
const names = [
    'Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack',
    'Kate', 'Liam', 'Mia', 'Noah', 'Olivia', 'Peter', 'Quinn', 'Rachel', 'Samuel', 'Tina',
    'Victor', 'Wendy', 'Xander', 'Yasmine', 'Zachary', 'Aaron', 'Bella', 'Caleb', 'Diana',
    'Ethan', 'Fiona', 'Gavin', 'Hannah', 'Isaac', 'Jasmine', 'Kai', 'Luna', 'Matthew', 'Nora',
    'Oscar', 'Penelope', 'Quincy', 'Riley', 'Sophia', 'Tristan', 'Uma', 'Vincent', 'Willow',
    'Xavier', 'Yara', 'Zoe', 'Adam', 'Beth', 'Cameron', 'Daisy', 'Evan', 'Faith', 'George',
    'Heather', 'Ian', 'Jade', 'Kyle', 'Lily', 'Mason', 'Natalie', 'Olive', 'Patrick', 'Quinn',
    'Rebecca', 'Seth', 'Tessa', 'Uriel', 'Violet', 'Wyatt', 'Xena', 'Yvonne', 'Zara',
    'Aidan', 'Brooke', 'Cole', 'Daphne', 'Elijah', 'Felicity', 'Gabe', 'Holly', 'Isaiah', 'Joy'
  ];

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the path for views directory
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to assign a random name based on user agent
app.use((req, res, next) => {
  // Extract the user-agent header from the request
  const userAgent = req.headers['user-agent'];

  // Generate a hash from the user-agent
  const hash = crypto.createHash('md5').update(userAgent).digest('hex');

  // Convert the hash to a number and use it to select a random name from the list
  const index = parseInt(hash, 16) % names.length;
  const randomName = names[index];

  // Assign the random name to a property in the request object
  req.randomName = randomName;

  // Continue to the next middleware
  next();
});

// Define route to dynamically render EJS templates based on the entered path
app.get('*', async (req, res) => {
    const enteredPath = req.path.slice(1); // Remove the leading slash from the path
    const filePath = path.join(__dirname, 'views', `${enteredPath}.ejs`);

    console.log(`IP: ${req.ip}, Name: ${req.randomName}, Entered Path: ${enteredPath}`);

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
