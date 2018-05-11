//---------------Requirements----------------//

const express = require('express');
const pg = require('pg');
const router = express.Router();
const pool = require('../modules/database')

//---------------GET and POST from Movie Controller----------------//

router.get('/', (req,res)=>{
    pool.query(`SELECT * FROM "genres"
                ORDER BY "genres"."name" ASC;`)
        .then((results)=>{
            res.send(results.rows);
        })
        .catch((error)=>{
            console.log('error with SQL SELECT on get ', error);
            res.sendStatus(500);
        });
}); //end GET

router.post('/', (req, res)=>{
    const genre = req.body;
    pool.query(`INSERT INTO "genres" ("name")
                VALUES ($1);`, [genre.name])
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