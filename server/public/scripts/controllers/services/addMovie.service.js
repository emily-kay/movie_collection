app.service('AddMovieService', ['$http', function($http){
    console.log('AddMovieService works');
    var self = this;
    self.message = "Add a new film!"

    self.postMovie = function(newMovie){
        $http({
        method: 'POST',
        url: '/movies',
        data: newMovie,
    })
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log('No movie for you ', error)
    })}; //end POST
}]);//end AddMovieService