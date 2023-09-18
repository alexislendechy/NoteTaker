# NoteTaker

[![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit/)


NoteTaker is a web application that allows users to create, save, view, and delete notes. It uses an Express.js backend to manage note data and a simple user interface for taking and managing notes. With Note Taker, you can keep your important thoughts, ideas, and reminders organized and easily accessible.

![Note Taker Screenshot](/NoteTaker/Screenshot.png)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create and save new notes with titles and text.
- View a list of existing notes.
- Click on a note in the list to view its details.
- Delete unwanted notes.
- Simple and intuitive user interface.
- Data persistence using a JSON file.

## Installation

To run Note Taker on your local machine, follow these steps:

1. Clone this repository to your local system:

   ```bash
   git clone https://github.com/alexislendechy/NoteTaker

2. Navigate to the project directory:
    
    ```bash
   cd note-taker

3. Install the required dependencies using npm:
   
    ```bash
   npm install

## Usage

1. Start the application by running:

   ```bash
   npm start

2. Open your web browser and go to http://localhost:3000 to access the homepage.


3. Click on the "Get Started" button to navigate to the notes page.

4. On the notes page, you can:

5. Create a new note by entering a title and text, then click the "Save" icon.
View existing notes by clicking on them in the left-hand column.
Delete a note by clicking the trash icon next to it.
Create a new note by clicking the "Write" icon.
Your notes are saved and retrieved from the server's JSON file.

## API Endpoints

GET /api/notes: Retrieve a list of all notes.

POST /api/notes: Create a new note.

DELETE /api/notes/:id: Delete a note by its unique ID.

## Contributing
Contributions to Note Taker are welcome! If you have any ideas, bug reports, or feature requests, please open an issue or submit a pull request on GitHub.




