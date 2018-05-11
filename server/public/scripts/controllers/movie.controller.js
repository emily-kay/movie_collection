//---------------MOVIE CONTROLLER----------------//

app.controller('MovieController', ['AddMovieService', 'GetMovieService', '$http', function(AddMovieService, GetMovieService, $http){
    console.log('MovieController works');
    var self = this;

    self.postMovie = AddMovieService.postMovie;
    self.allMovies = GetMovieService.allMovies;
}]);//end MovieController