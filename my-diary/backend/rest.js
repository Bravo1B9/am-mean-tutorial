const express = require('express');

const app = express();

const diaryEntries = [
  { id: 1, date:"March 4th", entry: "Entry 1" },
  { id: 2, date:"March 5th", entry: "Entry 2" },
  { id: 3, date:"March 6th", entry: "Entry 3" },
];

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*', );
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept', );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use('/diary-entries', (req, res, next) => {
  res.json({ 'diaryEntries': diaryEntries });
});

module.exports = app;
