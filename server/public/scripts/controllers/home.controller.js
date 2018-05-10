//---------------HOME CONTROLLER----------------//

app.controller('HomeController', ['$http', function($http){
    console.log('HomeController works');
    var self = this;
    self.message = "A Place to Keep All Your Favorite Films"
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
        console.log('No homes for you ', error)
    })}; //end GET

    self.getAllMovies();
}]);//end HomeController