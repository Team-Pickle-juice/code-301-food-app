'use strict';

$('.recipeForm').on('click' , recipeInformation);
$('.hideInfoButton').on('click' , hideRecipeInformation)

function recipeInformation (event) {
  event.preventDefault();
  let API = '8402ed04afmsh1e160bbbe297485p1e66e3jsn207dc4e5b10a';
  let requestedRecipe = $(':nth-child(4)', this).val();
  let url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${requestedRecipe}/information`;
  let ajaxSettings = {
    async: true,
    crossDomain: true,
    method: 'get',
    dataType: 'json',
    headers: {
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'x-rapidapi-key': API,
    }
  };
  $.ajax(url, ajaxSettings)
  .then( recipe => {
    console.log(recipe);
    renderRecipeInfo(recipe, $(this).prev());
    $(this).children('.recipeInfo').hide();
  });
}

function renderRecipeInfo(data, container) {
  let template = $('#recipeInfo-template').html();
  let ingredientList = data.extendedIngredients.map( item => item.original);
  let view = {
    price: `$${(data.pricePerServing/100).toFixed(2)}`,
    instructions: data.instructions,
    ingredients: ingredientList,
    servings: data.servings,
  }
  container.html( Mustache.render(template, view) );
  $('.hideInfoButton').show();
}


function hideRecipeInformation(e) {
  e.preventDefault();
  $('ul').hide();
  $('.hideInfoButton').hide();
  $('.recipeInfo').show();
}

$('.hideInfoButton').hide();