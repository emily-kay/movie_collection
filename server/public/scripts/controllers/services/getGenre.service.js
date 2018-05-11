app.service('GetGenreService', ['$http', function($http){
    console.log('GetGenreService works');
    var self = this;
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
    })
    .catch(function(error){
        console.log('No homes for you ', error)
    })}; //end GET

    self.getAllGenres();
}]);//end GetGenreService