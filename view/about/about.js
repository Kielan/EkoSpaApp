'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/about', {
    templateUrl: 'about/about.html',
    controller: 'aboutCtrl',
    title: 'about'
  });
}])

.controller('aboutCtrl', [function() {

}]);
