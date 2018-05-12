//---------------Requirements----------------//

const express = require('express');
const pg = require('pg');
const router = express.Router();
const pool = require('../modules/database')

//---------------GET and POST from Movie Controller----------------//

router.get('/', (req,res)=>{
    pool.query(`SELECT "genres"."name","movies"."genre_id", 
                COUNT("genre_id") FROM "movies"
                JOIN "genres" ON "genres"."id"="movies"."genre_id"
                GROUP BY "genres"."name", "movies"."genre_id";`)
        .then((results)=>{
            res.send(results.rows);
        })
        .catch((error)=>{
            console.log('error with SQL SELECT on get ', error);
            res.sendStatus(500);
        });
}); //end GET


module.exports = router;