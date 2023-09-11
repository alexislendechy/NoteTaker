const express = require('express');
const fs = require("fs");
const path = require('path');
const api = require('./db/db.json');



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.route("/api/routes")
    .get((req, res) => res.json(api))
    .post((req, res) => {
        
    })



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
