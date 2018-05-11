app.service('AddGenreService',  ['$http', 'GetGenreService', function($http, GetGenreService){
    console.log('AddGenreService works');
    var self = this;
    self.getAllGenres = GetGenreService.getAllGenres;
    self.message = "Add a new film!"

    self.postGenre = function(newGenre){
        $http({
        method: 'POST',
        url: '/genres',
        data: newGenre,
    })
    .then(function(response){
        console.log(response);
        self.getAllGenres();
    })
    .catch(function(error){
        console.log('No movie for you ', error)
    })}; //end POST

    self.getAllGenres();
}]);//end AddGenreService