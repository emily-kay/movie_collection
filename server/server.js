// ---------------Typical server stuff---------------- //

const express = require('express'); 
const bodyParser = require('body-parser');
const app = express(); 
const pg = require('pg');
const PORT = process.env.PORT || 5000; 

app.use(express.static('server/public'));
app.use(bodyParser.json());

// ---------------Project specific server stuff---------------- //

const database = require('./modules/database');
const movieRouter = require('./routes/movies.router');
const recentMovieRouter = require('./routes/recentMovie.router');
const genreRouter = require('./routes/genre.router');

app.use('/movies', movieRouter);
app.use('/last', recentMovieRouter);
app.use('/genres', genreRouter);

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});