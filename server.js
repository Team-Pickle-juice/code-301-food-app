'use strict'

require('dotenv').config();

const express = require('express');
const superagent = require('superagent');
const pg = require('pg')
const cors = require('cors');
const methodOverride = require('method-override');

const app = express();
const PORT = process.env.PORT || 3000;
const client = new pg.Client(process.env.DATABASE_URL);

// Brings in EJS 
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
// Allows delete and put methods
app.use(methodOverride('_method'));

app.use(express.static('./public'));


//ROUTES ---- PLEASE ADD ALL ROUTES IN THIS SECTION ----
app.get('/', handleHomepage);
app.post('profile', handleProfilePage);


function handleHomepage( request, response ) {
  response.status(200).render('pages/index');
}

function handleProfilePage( request, response ) {
  response.status(200).send('This will be the Profile Page');
}

// 404 Error
app.use('*', (request, response) => {
  console.log(request);
  response.status(404).send(`Can't find ${request.Url.path}`);
});

app.use( (err,req,response,next) => {
  response.status(500).render('500', {err});
});

//Startup Server
function startServer() {
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
}

//connection the client to the DB
client.connect()
  .then( () => {
    startServer(PORT);
  })
  .catch(err => console.error(err));