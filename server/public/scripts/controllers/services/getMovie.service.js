app.service('GetMovieService', ['PosterService', '$http', function(PosterService, $http){
    console.log('GetMovieService works');
    var self = this;
    self.getPoster = PosterService.getPoster
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
        self.getPoster();
    })
    .catch(function(error){
        console.log('No homes for you ', error)
    })}; //end GET

    self.getAllMovies();
}]);//end GetMovieService