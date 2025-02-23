const express = require('express');
const createError = require('http-errors');
const path = require('path');
const app = express();

app.use(express.json()); 
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  next(createError(404, `Unknown resource ${req.method} ${req.originalUrl}`));
});


app.use((error, req, res, next) => {
  console.error(error);
  res.status(error.status || 500).json({ error: error.message || 'Unknown Server Error!' });
});

module.exports = app;