//---------------Counts all the movies in each genre----------------//

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
        console.log('Problem on CountGenreService GET ', error)
    })}; //end GET

}]);//end CountGenreService