'use strict';

require('dotenv').config();

const express = require('express');
const superagent = require('superagent');
const pg = require('pg');
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
app.get('/username', handleLoginPage);
app.delete('/delete/:id', handleDelete);



function handleHomepage( request, response ) {
  response.status(200).render('pages/index');
}

function handleLoginPage( request, response ) {
  let SQL = 'SELECT * FROM food_app WHERE username = $1';
  let VALUES = [request.query.username];

  client.query(SQL, VALUES)
    .then( results => {
      if (results.rows === 0) {
        response.status(200).render('pages/nouser', {username:request.query.username});
      } else {
        response.status(200).render('pages/profile', {profiles:results.rows[0]});
      }
    })
    .catch(error => {
      throw new Error(error.message);
    });
}


function handleDelete( request, response) {
  let SQL = 'DELETE FROM food_app WHERE id = $1';
  let VALUES = [request.params.id];
  client.query(SQL, VALUES)
    .then(results => {
      response.status(200).redirect('/');
    });
}


// 404 Error
app.use('*', (request, response) => {
  console.log(request);
  response.status(404).send(`Can't find ${request.Url.path}`);
});

app.use( (err,req,response,next) => {
  response.status(500).render('pages/500', {err});
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
