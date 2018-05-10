//---------------MOVIE CONTROLLER----------------//

app.controller('MovieController', ['$http', function($http){
    console.log('MovieController works');
    var self = this;
    self.message = "Add a new film!"
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
}]);//end MovieController