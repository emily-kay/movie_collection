//---------------GENRE CONTROLLER----------------//

app.controller('GenreController', ['GetGenreService', 'AddGenreService', '$http', function(GetGenreService, AddGenreService, $http){
    console.log('GenreController works');
    var self = this;
    self.message = "Possible Genres";

    self.postGenre = AddGenreService.postGenre;
    self.allGenres = GetGenreService.allGenres;
}]);//end GenreController