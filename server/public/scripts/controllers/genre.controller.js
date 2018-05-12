//---------------GENRE CONTROLLER----------------//

app.controller('GenreController', ['GetGenreService', 'AddGenreService', 'CountGenreService', '$http', function(GetGenreService, AddGenreService, CountGenreService, $http){
    console.log('GenreController works');
    var self = this;
    self.message = "Possible Genres";

    self.postGenre = AddGenreService.postGenre;
    self.countAllGenres = CountGenreService.countAllGenres;
    self.allGenres = GetGenreService.allGenres;
}]);//end GenreController