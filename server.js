const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid'); // Import the v4 function from uuid

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets (HTML, CSS, JS)
app.use('/NoteTaker/public', express.static(path.join(__dirname, 'public')));

// Route to serve the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to serve the notes page
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// API route to retrieve notes
app.get('/api/notes', (req, res) => {
  const notes = getNotes();
  res.json(notes);
});

// API route to save a new note
app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4(); // Generate a unique ID

  const notes = getNotes();
  notes.push(newNote);

  saveNotes(notes);

  res.json(newNote);
});

// API route to delete a note
app.delete('/api/notes/:id', (req, res) => {
  const idToDelete = req.params.id;
  const notes = getNotes();
  const filteredNotes = notes.filter((note) => note.id !== idToDelete);

  saveNotes(filteredNotes);

  res.json({ message: 'Note deleted' });
});

// Function to read notes from the JSON file
const getNotes = () => {
  const data = fs.readFileSync(path.join(__dirname, 'db', 'db.json'), 'utf8');
  return JSON.parse(data) || [];
};

// Function to save notes to the JSON file
const saveNotes = (notes) => {
  fs.writeFileSync(path.join(__dirname, 'db', 'db.json'), JSON.stringify(notes));
};

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
