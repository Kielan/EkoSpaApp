'use strict';

var ctrls = angular.module('sampleApp.controllers', []);

ctrls.controller('AppCtrl', function ($scope, $http) {
	$scope.date = new Date();

});
ctrls.controller('HomeCtrl', function ($scope, $http, ) {
	$scope.tagline = "this is an awesome HOME tagline";
	$scope.title = "HOME";
    $scope.

});

ctrls.controller('AboutCtrl', function ($scope, $http, Kenbasket) {
	$scope.tagline = "this is an awesome ABOUT tagline";
    $scope.title = "ABOUT";
    $scope.newKen = {};
    $scope.kenBasket = kenBasket;
});
