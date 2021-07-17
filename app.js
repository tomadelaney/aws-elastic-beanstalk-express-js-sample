const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Greetings From Recently Edited Version 2 - Tom At AWS!!!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
