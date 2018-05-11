app.service('AddMovieService',  ['$http', 'LastMovieService', function($http, LastMovieService){
    console.log('AddMovieService works');
    var self = this;
    self.getLastMovies = LastMovieService.getLastMovies;
    self.message = "Add a new film!"

    self.postMovie = function(newMovie){
        $http({
        method: 'POST',
        url: '/movies',
        data: newMovie,
    })
    .then(function(response){
        console.log(response);
        self.getLastMovies();
    })
    .catch(function(error){
        console.log('No movie for you ', error)
    })}; //end POST

    self.getLastMovies();
}]);//end AddMovieService