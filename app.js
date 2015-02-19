'use strict';

//! app
angular.module('myApp', ['ngRoute', 'myApp.home', 'myApp.about'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
}])

.config(function($locationProvider){

  // Removes the # in urls
  $locationProvider.html5Mode(true);
});
