'use strict';

 
angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl',
    title: 'home'
  });
}])

.controller('homeCtrl', [function() {

}]);
