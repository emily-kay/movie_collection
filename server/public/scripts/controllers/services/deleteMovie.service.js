//---------------Deletes a movie from DB----------------//

app.service('DeleteMovieService',  ['GetMovieService', '$http', function(GetMovieService, $http){
    console.log('DeleteMovieService works');
    var self = this;
    self.getAllMovies = GetMovieService.getAllMovies;
    
    self.deleteMovie = function(movieId) {
        console.log(movieId);
        
        $http({
            method: 'DELETE',
            url: `/movies`,
            params: movieId,
        }).then((response) => {
            self.getAllMovies();
        }).catch((error) => {
            console.log('Problem on DeleteMovieService DELETE ', error);
        });
    }
}]);//end DeleteMovieService