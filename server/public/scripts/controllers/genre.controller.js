//---------------GENRE CONTROLLER----------------//

app.controller('GenreController', ['GetGenreService', '$http', function(GetGenreService, $http){
    console.log('GenreController works');
    var self = this;
    self.message = "Possible Genres"

    self.allGenres = GetGenreService.allGenres
}]);//end GenreController