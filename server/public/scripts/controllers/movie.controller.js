//---------------MOVIE CONTROLLER----------------//

app.controller('MovieController', ['AddMovieService', 'LastMovieService', '$http', function(AddMovieService, LastMovieService, $http){
    console.log('MovieController works');
    var self = this;

    self.postMovie = AddMovieService.postMovie;
    self.lastMovies = LastMovieService.lastMovies;
}]);//end MovieController