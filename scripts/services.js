'use strict';

/* Services */

var dgMovieAppServices = angular.module('dgMovieAppServices', ['ngResource']);

dgMovieAppServices.factory('getMovies', function($http){
  var factory = {}

  factory.getAllMovies = function(){
      return $http.get("https://www.omdbapi.com/?s=Batman&apikey=242ae804");
  }

  factory.getEachMovies = function(id){
      return $http.get("http://www.omdbapi.com/?i="+id+"&apikey=242ae804");
  }
  
  return factory
})