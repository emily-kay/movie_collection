//---------------HOME CONTROLLER----------------//

app.controller('HomeController', ['GetMovieService', '$http', function(GetMovieService, $http){
    console.log('HomeController works');
    var self = this;

    self.allMovies = GetMovieService.allMovies;
}]);//end HomeController