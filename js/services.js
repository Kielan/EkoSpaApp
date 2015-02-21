'use strict';

var services = angular.module('sampleApp.services', []);

services.factory('sample', function ($http) {
  
  return {
    test: "test services return"
  }
});
