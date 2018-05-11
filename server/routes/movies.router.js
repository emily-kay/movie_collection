//---------------Requirements----------------//

const express = require('express');
const pg = require('pg');
const router = express.Router();
const pool = require('../modules/database')

//---------------GET and POST from Movie Controller----------------//

router.get('/', (req,res)=>{
    pool.query(`SELECT * FROM "movies";`)
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
    pool.query(`INSERT INTO "movies" ("name", "director",  "release_date", "run_time")
    VALUES ($1, $2, $3, $4);`, [movie.name, movie.director, movie.release_date, movie.run_time])
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