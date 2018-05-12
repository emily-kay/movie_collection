//---------------HOME CONTROLLER----------------//

app.controller('HomeController', ['DeleteMovieService', 'GetMovieService', '$http', function(DeleteMovieService, GetMovieService, $http){
    console.log('HomeController works');
    var self = this;

    self.allMovies = GetMovieService.allMovies;
    self.deleteMovie = DeleteMovieService.deleteMovie;
}]);//end HomeController