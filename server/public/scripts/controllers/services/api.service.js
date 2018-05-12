//---------------Pulls in API for posters----------------//

app.service('PosterService', ['AddMovieService', '$http', function(AddMovieService, $http){
    console.log('PosterService is loaded')
    var self = this;
    self.postMovie = AddMovieService.postMovie;
    self.poster = '';

    self.getPoster= function(newMovie){
        var baseUrl = 'https://image.tmdb.org/t/p/w500';
       
        $http({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {
            api_key: 'dbde078620dc32525aca7b469df28fd3',
            query: newMovie.name,
        }
    })
    .then(function(response){
        console.log(response.data);
        self.poster = baseUrl + response.data.results[0].poster_path;
        console.log(self.poster);
        newMovie.image_path = self.poster;
        console.log(newMovie);
        
        self.postMovie(newMovie);
    })
    .catch(function(error){
        console.log('Problem on PosterService GET ', error)
        alert('Oops! We can\'t seem to find that movie in our database')
    })};
}]) // end PosterService