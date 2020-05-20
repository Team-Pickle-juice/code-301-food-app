'use strict';

$('.recipeInfo').on('click' , recipeInformation);
$('.hideInfoButton').on('click' , hideRecipeInformation)

function recipeInformation (event) {
  event.preventDefault();
  let API = '8402ed04afmsh1e160bbbe297485p1e66e3jsn207dc4e5b10a';
  // let requestedRecipe = $(':nth-child(4)', this).val();
  let requestedRecipe = $(this).prev().val();
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
    renderRecipeInfo(recipe, $(this).parent());
    $(this).closest('.recipeForm').find('.recipeInfo').hide();
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
  container.append( Mustache.render(template, view) );
  container.parent().find('.hideInfoButton').show();
}

//View Recipe Information Section
function hideRecipeInformation(e) {
  e.preventDefault();
  $(this).parent().prev().find('ul').remove();
  $(this).hide();
  $(this).parent().prev().find('button').show();
}

function hideRecipeInformation(e) {
  e.preventDefault();
  $(this).parent().prev().find('ul').remove();
  $(this).hide();
  $(this).parent().prev().find('button').show();
}

//Delete Profile Section
$('.deleteProfile').on('click', confirmDelete);
$('.cancel-delete').on('click', cancelDelete);

function confirmDelete(){
  $(this).hide();
  $(this).next().show();
}

function cancelDelete() {
  $('.deleteProfile').show();
  $(this).parent().hide();
}

// Update Recipe Section
$('.showDetails').on('click', showDetails);
$('.updateRecipe').on('click', showUpdateForm);
$('.cancel-update').on('click', hideUpdateForm);

function showDetails() {
  $(this).hide();
  $(this).next().show();
}

function showUpdateForm() {
  $(this).hide();
  $(this).next().show();
}

function hideUpdateForm() {
  $('.updateRecipe').show();
  $(this).parent().hide();
}

$('.deleteProfileForm').hide();
$('.updateRecipeForm').hide();
$('.hideInfoButton').hide();

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function navBarFunc() {
  var x = document.getElementById("navLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}