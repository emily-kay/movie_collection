//---------------HOME CONTROLLER----------------//

app.controller('HomeController', ['DeleteMovieService', 'GetMovieService', 'PosterService', '$http', function(DeleteMovieService, GetMovieService, PosterService, $http){
    console.log('HomeController works');
    var self = this;
    self.message = "Collection";

    self.allMovies = GetMovieService.allMovies;
    self.deleteMovie = DeleteMovieService.deleteMovie;
    self.getPoster = PosterService.getPoster
}]);//end HomeController