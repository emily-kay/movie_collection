//---------------Requirements----------------//

const express = require('express');
const pg = require('pg');
const router = express.Router();
const pool = require('../modules/database')

//---------------GET from LastMovieService----------------//

router.get('/', (req,res)=>{
    pool.query(`SELECT * FROM "movies"
        ORDER BY "movies"."id" DESC
        LIMIT 1;`)
        .then((results)=>{
            res.send(results.rows);
        })
        .catch((error)=>{
            console.log('error with SQL SELECT on get ', error);
            res.sendStatus(500);
        });
}); //end GET

module.exports = router;