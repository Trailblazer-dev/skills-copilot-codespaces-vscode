// Create web server
// Create a new web server using the express module. This server will listen on port 3000 and respond with a message when it receives a request.
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the comments page!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});