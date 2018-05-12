//---------------Displays most recent movie added----------------//

app.service('LastMovieService', ['$http', function($http){
    console.log('LastMovieService works');
    var self = this;
    self.lastMovies = {
        details: []
    };

    self.getLastMovies = function(){
        $http({
        method: 'GET',
        url: '/last',
    })
    .then(function(response){
        self.lastMovies.details = response.data;
    })
    .catch(function(error){
        console.log('Problem on LastMovieService GET ', error)
    })}; //end GET

    self.getLastMovies();
}]);//end LastMovieService