"use strict";

var app = angular.module('sampleApp', [
    'sampleApp.controllers',
    'sampleApp.filters',
    'sampleApp.directives',
    'sampleApp.services',
    'flow'
]);


app.config(["$routeProvider", function ($routeProvider) {
  $routeProvider
    .when("/about", {controller: "AboutCtrl", templateUrl: "partials/about.html"})
    .when("/", {controller: "HomeCtrl", templateUrl: "partials/home.html"})
	.otherwise({redirectTo: "/"})
}])

app.config(['flowFactoryProvider', function (flowFactoryProvider) {
  flowFactoryProvider.defaults = {
    target: 'upload.php',
    permanentErrors: [404, 500, 501],
    maxChunkRetries: 1,
    chunkRetryInterval: 5000,
    simultaneousUploads: 4,
    singleFile: true
  };
  flowFactoryProvider.on('catchAll', function (event) {
    console.log('catchAll', arguments);
  });
  // Can be used with different implementations of Flow.js
  // flowFactoryProvider.factory = fustyFlowFactory;
}]);
