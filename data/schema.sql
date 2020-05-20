DROP TABLE IF EXISTS profiles;

CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    calories NUMERIC(6, 0),
    allergies VARCHAR(8000),
    ingredients VARCHAR(8000),
    quantaties VARCHAR(8000)
);

DROP TABLE IF EXISTS meal_plan;

CREATE TABLE meal_plan (
    id SERIAL PRIMARY KEY,
    recipename VARCHAR(255),
    username VARCHAR(255),
    recipe_id VARCHAR(255),
    img_url VARCHAR(255),
    ingredients VARCHAR(8000),
    instructions VARCHAR(8000),
    price VARCHAR(255)
)