'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('MoviesCtrl', function ($scope, $rootScope, $http) {
    $rootScope.activeNav = 'movies';
    $scope.movies = [];
    $http.get($rootScope.baseUrl + 'movie').success(function(result) {
    	$scope.movies = result;
    });
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
