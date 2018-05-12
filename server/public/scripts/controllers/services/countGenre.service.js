app.service('CountGenreService', ['$http', function($http){
    console.log('CountGenreService works');
    var self = this;
    self.countAllGenres = {
        details: []
    };

    self.countGenres = function(){
        $http({
        method: 'GET',
        url: '/count',
    })
    .then(function(response){
        console.log(response);
        
        self.countAllGenres.details = response.data;
    })
    .catch(function(error){
        console.log('No homes for you ', error)
    })}; //end GET

}]);//end CountGenreService