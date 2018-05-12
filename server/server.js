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
const countRouter = require('./routes/genreCount.router')
const genreRouter = require('./routes/genre.router');
const movieRouter = require('./routes/movies.router');
const recentMovieRouter = require('./routes/recentMovie.router');

app.use('/count', countRouter);
app.use('/genres', genreRouter);
app.use('/last', recentMovieRouter);
app.use('/movies', movieRouter);

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});