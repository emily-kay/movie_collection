//---------------Pulls in API for posters----------------//

app.service('PosterService', ['$http', function($http){
    console.log('PosterService is loaded')
    var self = this;
    var poster = {details: {}};

    self.getPoster= function(){
        var baseUrl = 'https://image.tmdb.org/t/p/w500';
       
        $http({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',
        params: {
            api_key: 'dbde078620dc32525aca7b469df28fd3',
            query: newMovie.name,
        }
    })
    .then(function(response){
        console.log(response.data);
        self.poster.details = response.data
    })
    .catch(function(error){
        console.log('Problem on PosterService GET ', error)
    })};
}]) // end PosterService