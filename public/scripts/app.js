'use strict';

$('.recipeInfo').on('click' , recipeInformation);

function recipeInformation (event) {
  event.preventDefault();

  let requestedRecipe = $('.recipeID').val();
  let url = `https://api.spoonacular.com/recipes/${requestedRecipe}/information?apiKey=${process.env.FOOD_API}&includeNutrition=true`

  const ajaxSettings = {
    method: 'get',
    dataType: 'json',
    data: {
      recipe: ingredients,
      recipe: instructions,
      recipe: price,
    },
  };

  $.ajax('url', ajaxSettings)
    .then( recipe => {
    renderRecipeInfo(recipe);
  });

};

function renderRecipeInfo(data) {
  let template = $('#recipeInfo-template').html();
  let container = $('.recipeDetails');
  container.html( Mustache.render(template, data) );
}