app.service('CountGenreService', ['$http', function($http){
    console.log('CountGenreService works');
    var self = this;
    self.allGenres = {
        details: []
    };

    self.countGenres = function(){
        $http({
        method: 'GET',
        url: '/count',
    })
    .then(function(response){
        self.allGenres.details = response.data;
    })
    .catch(function(error){
        console.log('No homes for you ', error)
    })}; //end GET

}]);//end CountGenreService