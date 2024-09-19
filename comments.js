// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample data
let comments = [
  { id: 1, text: 'This is a comment' },
  { id: 2, text: 'This is another comment' },
];

// Routes
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = {
    id: comments.length + 1,
    text: req.body.text,
  };
  comments.push(newComment);
  res.status(201).json(newComment);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});