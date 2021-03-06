//---------------DB CONNECTION ----------------//
const pg = require('pg');
const url = require('url');
const Pool = pg.Pool; 

let config = {};

//--------------PG Connection route-------------//
if(process.env.DATABASE_URL) {
    let params = url.parse(process.env.DATABASE_URL);
    let auth = params.auth.split(':');
  
    config = {
      user: auth[0],
      password: auth[1],
      host: params.hostname,
      port: params.port,
      database: params.pathname.split('/')[1],
      ssl: true, // heroku requires ssl to be true
      max: 10, // max number of clients in the pool
      idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    };
} else {
    //not on heroku
    config = {
        database: 'movie-connection',
    host: 'localhost',
    port: 5432, 
    max: 10, 
    idleTimeoutMillis: 30000,
    }
}

console.log(config);


const pool = new Pool(config);

pool.on('connect', () =>{
    console.log('Postgresql connected');
});
pool.on('error', (error)=>{
    console.log('Error with postgres pool', error);
})
//----------------------end---------------------//

module.exports = pool;