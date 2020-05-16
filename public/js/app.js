'use strict';

$('.recipeForm').on('click' , recipeInformation);

function recipeInformation (event) {
  event.preventDefault();

  let API = 'abe8476cfcd04213ba99d65723e8028d';

  let requestedRecipe = $('.recipeID').val();
  let url = `https://api.spoonacular.com/recipes/${requestedRecipe}/information?apiKey=${API}&includeNutrition=true`;

  const ajaxSettings = {
    method: 'get',
    dataType: 'json',
    // data: {
    //   recipe: extendedIngredients,
    //   recipeOne: instructions,
    //   recipe3Two: pricePerServing
    // },
  };

  $.ajax(url, ajaxSettings)
    .then( recipe => {
      console.log(recipe);
      
      renderRecipeInfo(recipe);

    });

}


function renderRecipeInfo(data) {
  let template = $('#recipeInfo-template').html();
  let container = $('.recipeDetails');
  // let price = data.pricePerServing;
  console.log('Price is:' + data.pricePerServing);
  container.html( Mustache.render(template, data.price) );
}
