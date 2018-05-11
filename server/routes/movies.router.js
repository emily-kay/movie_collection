//---------------Requirements----------------//

const express = require('express');
const pg = require('pg');
const router = express.Router();
const pool = require('../modules/database')

//---------------GET and POST from Movie Controller----------------//

// router.get('/', (req,res)=>{
//     pool.query(`SELECT * FROM "movies" FULL OUTER JOIN "genres"
//                 ON "movies"."genre_id" = "genres"."id";`)
//         .then((results)=>{
//             res.send(results.rows);
//         })
//         .catch((error)=>{
//             console.log('error with SQL SELECT on get ', error);
//             res.sendStatus(500);
//         });
// }); //end GET

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
    pool.query(`INSERT INTO "movies" ("name", "director",  "release_date", "run_time", "genre_id")
    VALUES ($1, $2, $3, $4, $5);`, [movie.name, movie.director, movie.release_date, movie.run_time, movie.genre_id])
        .then((results)=>{
            console.log(results);
            
            res.send(results.rows);
        })
        .catch((error)=>{
            console.log(error);
            
            res.sendStatus(500);
        })
}); //end POST

module.exports = router;