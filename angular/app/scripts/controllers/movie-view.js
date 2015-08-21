'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('MovieViewCtrl', function ($scope, $rootScope, $routeParams, $http) {
    $scope.movie = {};
    $http.get($rootScope.baseUrl + 'movie/' + $routeParams.id).success(function(result) {
    	$scope.movie = result[0];
    });
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
