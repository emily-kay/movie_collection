//---------------MOVIE CONTROLLER----------------//

app.controller('MovieController', ['AddMovieService', '$http', function(AddMovieService, $http){ //['$http', function($http){
    console.log('MovieController works');
    var self = this;

    self.postMovie = AddMovieService.postMovie;
}]);//end MovieController