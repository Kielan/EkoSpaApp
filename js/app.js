"use strict";
var chunk = require('lodash-node/modern/array/chunk');
var memoize = require('lodash-node/modern/function/memoize');


var app = angular.module('sampleApp', [
    'sampleApp.controllers',
    'sampleApp.filters',
    'sampleApp.directives',
    'sampleApp.services'
]);

app.filter('chunk', function() {
  return memoize(chunk);
});

app.config(["$routeProvider", function ($routeProvider) {
  $routeProvider
    .when("/about", {controller: "AboutCtrl", templateUrl: "partials/about.html"})
    .when("/", {controller: "HomeCtrl", templateUrl: "partials/home.html"})
    .otherwise({redirectTo: "/"})
}])
