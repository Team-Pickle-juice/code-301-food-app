DROP TABLE IF EXISTS profiles;

CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    calories NUMERIC(6, 0),
    allergies VARCHAR(8000),
    ingredients VARCHAR(8000),
    quantaties VARCHAR(8000)
)