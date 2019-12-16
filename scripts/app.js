var dgMovieApp = angular.module('dgMovieApp', []);

dgMovieApp.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

dgMovieApp.controller('MovieController', ['$scope', '$http', function($scope, $http){
    
    $http.get("http://www.omdbapi.com/?s=Batman&apikey=242ae804").then(function(res){
        $scope.movies = res.data.Search;
       // console.log($scope.movies)
    });
}]);