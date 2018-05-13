-- Deployed on Heroku with a database attached so you can also look to https://home-video.herokuapp.com/#!/

CREATE TABLE "movies" (
"id" SERIAL PRIMARY KEY, 
"name" VARCHAR(200) NOT NULL, 
"director" VARCHAR(70) NOT NULL,  
"release_date" DATE NOT NULL, 
"run_time" INT NOT NULL,
"image_path" VARCHAR(2083)
"genre_id" INT REFERENCES genres 
);

CREATE TABLE "genres" (
"id" SERIAL PRIMARY KEY,
"genre" VARCHAR (80) NOT NULL,
);

INSERT INTO "movies" ("name", "director",  "release_date", "run_time", "image_path")
VALUES ('The Princess Bride', 'Rob Reiner', '1987-10-09', 98, 'https://images-na.ssl-images-amazon.com/images/I/81opS6GoYiL._RI_SX200_.jpg'),
('How to Steal a Million', 'William Wyler', '1966-07-13', 123,'https://ia.media-imdb.com/images/M/MV5BZDNiYWY5OWEtZWE0My00MDU3LWE0NTgtZjIxNWQ1ZjQ1N2E0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'),
('Only Lovers Left Alive', 'Jim Jarmusch', '2013-10-10', 123,'https://de1imrko8s7v6.cloudfront.net/movies/posters/only-lovers_1399063071.jpg'),
('Moonlight', 'Barry Jenkins', '2016-11-18', 111,'https://www.movieposters4u.com/images/m/MoonlightNL.jpg'),
('Wall-e', 'Andrew Stanton', '2008-06-27', 98,'https://images-na.ssl-images-amazon.com/images/I/51RoZRgIHtL.jpg');

INSERT INTO "genres" ("name")
VALUES ('adventure'), ('action'), ('animation'), ('comedy'), ('drama'), ('horror'), ('thriller'), ('romance'), ('sci-fi');

