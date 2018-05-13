//---------------MOVIE CONTROLLER----------------//

app.controller('MovieController', ['AddMovieService', 'GetGenreService', 'LastMovieService', 'PosterService', '$http', function(AddMovieService, GetGenreService, LastMovieService, PosterService, $http){
    console.log('MovieController works');
    var self = this;
    self.message = "Add a Movie to your Collection";

    self.allGenres = GetGenreService.allGenres;
    self.getPoster = PosterService.getPoster
    self.lastMovies = LastMovieService.lastMovies;
    self.postMovie = AddMovieService.postMovie;
}]);//end MovieController