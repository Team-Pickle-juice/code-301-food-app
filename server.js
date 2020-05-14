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
app.post('/username', handleLoginPage);
app.delete('/delete/:id', handleDelete);
app.post('/register-user', registerUser);
app.get('/register', loadRegisterPage);
app.get('/recipe-search', recipeSearch);


function recipeSearch(request, response) {
  const searchWord = request.query.searchWord.toLowerCase(); //we need to coordinate this varible with the frontend team
  const calories = request.query.maxCalories; // coordinate this varible with the frontend team
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.FOOD_API}`;
  const queryStringParams = {
    query: searchWord,
    maxCalories: calories,
  };
  superagent.get(url)
    .query(queryStringParams)
    .then(data => {

    })
}
function handleHomepage(request, response ) {
  response.status(200).render('pages/index');
}

function handleLoginPage(request, response ) {
  let SQL = 'SELECT * FROM profiles WHERE username = $1';
  let VALUES = [request.body.username];

  client.query(SQL, VALUES)
    .then( results => {
      if (results.rows.rowCount === 0) {
        response.status(200).render('pages/nouser');
      } else {
        console.log('ok');
        response.status(200).render('pages/profile', {profile:results.rows[0]});
      }
    })
    .catch(error => {
      throw new Error(error.message);
    });
}


function handleDelete( request, response) {
  let SQL = 'DELETE FROM profiles WHERE id = $1';
  let VALUES = [request.params.id];
  client.query(SQL, VALUES)
    .then(results => {
      response.status(200).redirect('/');
    });
}


function registerUser(request, response) {
  let SQL = `
    INSERT INTO profiles (username, calories, allergies) 
    VALUES ($1, $2, $3)`;
  let VALUES = [
    request.body.username,
    request.body.calories,
    request.body.allergies
  ];
  client.query(SQL, VALUES)
    .then(results => {
      response.status(200).redirect('/');
    });
}

function loadRegisterPage(request,response) {
  response.status(200).render('pages/register');
}

// 404 Error
app.use('*', (request, response) => {
  // console.log(request);
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
  .catch(err => console.error(err.message));
