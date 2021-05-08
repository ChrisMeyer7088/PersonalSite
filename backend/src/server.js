const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const favicon = require('serve-favicon');

const app = express();
app.use(favicon(path.join(__dirname,'assets','favicon.ico')));
app.use(morgan(':method :url :status :response-time ms'));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const server = app.listen(parseInt(process.env.PORT || 3030, 10));

app.get('/', (req, res) => res.render('frontend', {
  FRONTEND_ASSET_PATH: process.env.FRONTEND_ASSET_PATH,
}));

app.get('/resume', (req, res) => {
  res.download(path.join(__dirname,'assets','resume.pdf'))
})

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});
