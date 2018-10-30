'use strict';

const express = require('express');
const superagent = require('superagent');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', searchBar);

app.get('*', (request, response) => response.status(404).send('you are lost'));

app.listen(PORT, () => console.log(`App is up on PORT: ${PORT}`));

function searchBar(request, response) {
  response.render('pages/index');
}
