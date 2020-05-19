# Final 301 Project

## Team Name
Team Pickle Juice

## Team Members

- Adam Owada
- Bhagirath Bhatt
- Brendon Hampton
- Chuck Li
- Richard Whitehead

## Project Idea
 
### Food and Budgeting App
 
-	As the user I want to create a profile with my name, daily calorie intake, and food allergies.
-	As a user, I want to view different meal options based on my profile information

	Stretch goals
-	As a user, I want to be able to add ingredients to my pantry
-	As the user I want to know an estimated budget for ingredients I need to buy for a meal.
-	Allow users to prepare a meal with what they have in their pantry.

# Navigation
[Wireframes](##Wireframes)



## Wireframes

![Home Page](img/wireframes/homepage.png)

![About US](img/wireframes/aboutus.png)

![Login Page](img/wireframes/loginpage.png)

---------------------------------------------

## 5/11/2020

### ToDo's

#### Project Manager
	-Brendon

Create Index.ejs -Bhagirath Bhatt

Create Server.js - Chuck Li

Create CSS files, Pages folder for EJS, Partials folders - Richard Whitehead

Create Data folder with Schema.sql, Wireframe images

----------------------------------------------

## 5/12/2020

### Project Manager
- Rich Whitehead

#### Priorities of Work

Create profile.ejs and register.ejs file in pages folder - Brendon and Adam

Create profile results in the database to allow users to add, update and delete profiles - Bhagirath and Chuck

----------------------------------------------
## 5/13/2020

### Project Manager
- Bhagirath Bhatt

Fix the user profile bug and get it to render. 

Render profile after registering a new user, the login button is not checking through database, verifying the user has been added and displaying all the users on a profiles page.

Check the if statement for inside the login function on server.js.
	- Check routes inside server.js.
	- Check routes inside index.ejs
	- Call appropriate help if 15 minutes has passed
	- Create Form
Create a CSS folder add displayed image to index.ejs in mobile view per mobile wireframe diagram.

Adam and Richard – pair programming working on API keys.

Create ejs page for searching recipes

Add form wit GET to search through the API spoonacular
Worked on search recipes profile

Today's Challenges

An accidental merge of master to DEVbranch

Consequently created other issues leading to lost time, espacially for Brendon and Chuck
Wins!
Successfully resolved the issues anf moved ahead.
Achieved MVP!!!

----------------------------------------------
## 5/14/2020

### Project Manager
- Adam

Frontend Team
Rich and Chuck

Backend Team
Brendon and Bhagirath

Tasks Completed
Backend
updated schema.sql to include meal_plan table with: request.body.username, request.body.recipe_id, request.body.img_url, request.body.ingredients, request.body.instructions, request.body.price
expanded Recipe constructor to include image and recipe_id
created '/add-recipe' route
created addRecipe function to insert recipe into meal_plan table
created '/saved-meals' route
created savedMealsHandler to return saved meals
Frontend
updated search-results.ejs page to display images
updated search-results.ejs page to include "View Recipe Information" button
created mustache templating for ingredients, cooking instructions, and price information
added jQuery event handler on "View Recipe Information" button
created recipeInformation callback function that uses $.ajax to make an API call on selected recipe that returns price information
created renderRecipeInfo function to render mustache template with price information
Tasks to Do Tomorrow
Backend
update savedMealsHandler to only return recipes based on username
update registerUser function to handle multiple allergies, and the possibility of no allergies
update queryStringParams in the recipeSearch function so that the api call returns recipes that do not include allergies in the user’s profile
Frontend
fix partials, make sure ejs pages include the partials
partials: js -> scripts
add "Add to My Meal Plan" button to search-results.ejs page
update search-results.ejs so that "Add to My Meal Plan" button sends username and recipe_id to backend
expand renderRecipeInfo function to return more ingredients and instructions
add logic for recipes that have a link for instructions
create saved-meals.ejs that displays user's saved recipes
add jQuery on register.ejs to allow for multiple allergies
----------------------------------------------
## 5/15/2020

### Project Manager
- Adam

Frontend Team
Rich and Chuck

Backend Team
Brendon and Bhagirath

Tasks Completed
Backend
updated registerUser function to include allergy choices in user profile
updated recipeSearch function to exclude allergies saved in profile
Frontend
updated register.ejs to include 4 allergy choices with the ability to expand this list
updated partials and 'include' sections on ejs pages
progress on mustache (ran out of api requests)
Tasks to Do Tomorrow
complete mustache templating for "View Recipe Information" button
expand profile.ejs to display user's saved recipes for 1 day
CRUD for saved recipes
add basic css styling
----------------------------------------------
## 5/16/2020

### Project Manager
- Chuck

## Tasks for the Day

server.js / registerUser | Adam/Brendon

Fix JOIN issue to to render recipes for users that only have 1 allergy
app.js / renderRecipeInfo

Include 'Servings' to the additional information for each recipe (Make sure to add this in the header to be rendered using Mustache" | Bhagirath/Richard
head.ejs

Modify the script for Mustache template text from'Price' to "Price Per Serving"
Add Servings to Mustache template
server.js / handleDelete

Delete Profile button needs to also delete meals stored in the meal_plan table for the user. | Adam/Brendon
search-results.ejs

Add 'Save to Meal Plan' button - that calls addRecipe Function
profile.ejs

Saved meals need to be displayed in the profile.ejs page
Add an 'Update Profile' button - This will allow the user to update his/her name, calories, and allegies
For Each displayed meal:
Add an 'Update Meal' button - User can update ingredients, instructions, recipe name, etc.
Add a 'Delete Meal' button - Will delete selected Meal from meal_plan table
search-results.ejs

Add 'Hide' functionality for additional information displayed per recipe. | Brendon/Bhagirath

### Database name
	- food_app
### table name
	- profiles


### Database name
	- food_app
### table name
	- profiles



