console.log('client.js connected');

var app = angular.module('MovieApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as vm',
    })
    .when('/movies', {
        templateUrl: 'views/movie.html',
        controller: 'MovieController as vm',
    })
    .when ('/genre', {
        templateUrl: 'views/genre.html',
        controller: 'GenreController as vm',
    })
    .otherwise({
        redirectTo: '/'
    });
});