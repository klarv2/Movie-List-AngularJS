'use strict';

/* app */

var dgMovieApp = angular.module("dgMovieApp", [
    'dgMovieAppServices',
    'dgMovieAppControllers'
]);


dgMovieApp.directive('headerApp', function(){
    return{
        templateUrl: 'Views/header.html' 
    }
});

dgMovieApp.directive('movieListApp', function(){
    return{
        templateUrl: 'Views/moviesList.html',
        controller: 'MovieController' 
    }
});




