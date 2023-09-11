const express = require('express');
const fs = require("fs");
const path = require('path');
const api = require('./db/db');



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.route("/api/routes")
    .get((req, res) => res.json(api))
    .post((req, res) => {
        const jsonFilePath = path.join(__dirname, "/db/db.json'");
        const newNote = req.body;
        const highestiD = Math.max(...api.map(note => note.id), 0);
        newNote.id = highestiD + 1;
        api.push(newNote);
        fs.writeFileSync(jsonFilePath, JSON.stringify(api));
    });

app.delete("/api/notes/:id", (req, res) => {
        const jsonFilePath = path.join(__dirname, "/db/db.json'");
        const idToDelete = parseInt(req.params.id);
        const indexToDelete = api.findIndex(note => note.id === idToDelete);
        if ( indexToDelete !== -1){
            api.splice(indexToDelete, 1);
            fs.writeFileSync(jsonFilePath, JSON.stringify(api));
        }
        res.json(api);
})

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
