const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Define the file path for storing notes data
const notesDataFilePath = path.join(__dirname, '..', 'db', 'notes.json');

// Read notes from the JSON file
const readNotesFromFile = () => {
  try {
    const data = fs.readFileSync(notesDataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Write notes to the JSON file
const writeNotesToFile = (notes) => {
  fs.writeFileSync(notesDataFilePath, JSON.stringify(notes), 'utf8');
};

// API Route to get all notes
router.get('/notes', (req, res) => {
  const notes = readNotesFromFile();
  res.json(notes);
});

// API Route to save a new note
router.post('/notes', (req, res) => {
  const newNote = req.body;
  const notes = readNotesFromFile();
  newNote.id = notes.length + 1;
  notes.push(newNote);
  writeNotesToFile(notes);
  res.json(newNote);
});

// API Route to delete a note by ID
router.delete('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id);
  const notes = readNotesFromFile();
  const updatedNotes = notes.filter((note) => note.id !== noteId);
  writeNotesToFile(updatedNotes);
  res.sendStatus(200);
});

module.exports = router;
