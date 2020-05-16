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
      console.log(recipe.extendedIngredients);
      renderRecipeInfo(recipe);
    });

}


function renderRecipeInfo(data) {
  let template = $('#recipeInfo-template').html();
  let container = $('.recipeDetails');
  // let reee = {
  //   price: data.pricePerServing
  // };
  let price = data.pricePerServing;
  console.log('This is the object:' + price);
  container.html( Mustache.render(template, price) );
}
