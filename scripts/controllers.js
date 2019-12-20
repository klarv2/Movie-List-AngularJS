'use strict';

/* Controllers */

var dgMovieAppControllers = angular.module("dgMovieAppControllers", []);

dgMovieAppControllers.controller('MovieController', function($scope, getMovies){
    getMovies.getAllMovies().then(function(res){
        $scope.movies=[];
        $.each((res.data.Search), function(i, field){
            let movieID = '';
            movieID= field.imdbID;
            getMovies.getEachMovies(movieID).then(function(res){
                let movie = res.data
                $scope.movies.push(movie)
            
            });
        });   
    });

    $scope.searchYear= function(n, a, d){
        $(d).removeClass('active');
        $(a).addClass('active');
        getMovies.getAllMovies().then(function(res){
            $scope.movies=[];
            $.each((res.data.Search), function(i, field){
                let movieID = '';
                movieID= field.imdbID;
                getMovies.getEachMovies(movieID).then(function(res){
                    let movie = res.data
                    let movies =[]
                    movies.push(movie)
                    $.each(movies, function(i, field2){
                        let year = field2.Year
                        if(year.startsWith(n)){
                            $scope.movies.push(field2);
                        }
                    })
                })
            })
        })

    }

});

