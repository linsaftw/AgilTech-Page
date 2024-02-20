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

// Function to generate a hash from the IP address
function hashCode(ipAddress) {
  var hash = 0, i, chr;
  if (ipAddress.length === 0) return hash;
  for (i = 0; i < ipAddress.length; i++) {
    chr = ipAddress.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

function getRandomName(ipAddress) {
  // Generate a hash from the IP address
  const hash = hashCode(ipAddress);

  // Map the hash to an index in the names array
  const index = Math.abs(hash) % names.length;

  // Assign the name associated with the index to the request object
  return names[index];
}

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

    console.log(`IP: ${req.ip}, Name: ${getRandomName(req.ip)}, Entered Path: ${enteredPath}`);

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
