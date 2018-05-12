//---------------Requirements----------------//

const express = require('express');
const pg = require('pg');
const router = express.Router();
const pool = require('../modules/database')

//---------------GET, POST, DELETE from Movie Controller----------------//

router.get('/', (req,res)=>{
    pool.query(`SELECT "m"."name",
                        "m"."id",
                        "m"."director",
                        "m"."release_date",
                        "m"."run_time",
                        "m"."image_path",
                        "g"."name" as "genre_name"
                    FROM "movies" as "m" JOIN "genres" as "g"
                    ON "m"."genre_id" = "g"."id";`)
        .then((results)=>{
            res.send(results.rows);
        })
        .catch((error)=>{
            console.log('error with SQL SELECT on get ', error);
            res.sendStatus(500);
        });
}); //end GET

router.post('/', (req, res)=>{
    const movie = req.body;
    pool.query(`INSERT INTO "movies" ("name", "director",  "release_date", "run_time", "genre_id", "image_path")
    VALUES ($1, $2, $3, $4, $5, $6);`, [movie.name, movie.director, movie.release_date, movie.run_time, movie.genre_id, movie.image_path])
        .then((results)=>{
            console.log(results);
            
            res.send(results.rows);
        })
        .catch((error)=>{
            console.log(error);
            
            res.sendStatus(500);
        })
}); //end POST

router.delete('/', (req, res) => {
    const movieId = req.query.id;
    pool.query('DELETE FROM "movies" WHERE "id" = $1;', [movieId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error on server delete', error);
            res.sendStatus(500);
        });
}); //end DELETE

module.exports = router;