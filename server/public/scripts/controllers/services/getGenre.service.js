app.service('GetGenreService', ['CountGenreService', '$http', function(CountGenreService, $http){
    console.log('GetGenreService works');
    var self = this;
    self.countGenres = CountGenreService.countGenres;
    self.allGenres = {
        details: []
    };

    self.getAllGenres = function(){
        $http({
        method: 'GET',
        url: '/genres',
    })
    .then(function(response){
        self.allGenres.details = response.data;
        self.countGenres();
    })
    .catch(function(error){
        console.log('No homes for you ', error)
    })}; //end GET

    self.getAllGenres();
}]);//end GetGenreService