//---------------Pulls in API for posters----------------//

app.service('PosterService', ['$http', function($http){
    console.log('PosterService is loaded')
    var self = this;
    var poster = {details: {}};

    self.getPoster= function(){
        $http({
        method: 'GET',
        url: 'https://image.tmdb.org/t/p/w500/',
        params: {
            api_key: 'dbde078620dc32525aca7b469df28fd3',
            query
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