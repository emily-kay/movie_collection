//---------------MOVIE CONTROLLER----------------//

app.controller('MovieController', ['AddMovieService', 'GetGenreService', 'LastMovieService', '$http', function(AddMovieService, GetGenreService, LastMovieService, $http){
    console.log('MovieController works');
    var self = this;

    self.postMovie = AddMovieService.postMovie;
    self.lastMovies = LastMovieService.lastMovies;
    self.allGenres = GetGenreService.allGenres;
}]);//end MovieController