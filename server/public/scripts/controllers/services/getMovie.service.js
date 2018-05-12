//---------------Gets all movies in DB----------------//

app.service('GetMovieService', ['$http', function($http){
    console.log('GetMovieService works');
    var self = this;
    self.allMovies = {
        details: []
    };

    self.getAllMovies = function(){
        $http({
        method: 'GET',
        url: '/movies',
    })
    .then(function(response){
        self.allMovies.details = response.data;
    })
    .catch(function(error){
        console.log('Problem on GetMovieService GET ', error)
    })}; //end GET

    self.getAllMovies();
}]);//end GetMovieService