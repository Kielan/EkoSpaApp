'use strict';

var ctrls = angular.module('sampleApp.controllers', []);

ctrls.controller('AppCtrl', function ($scope, $http) {
	$scope.date = new Date();

});
ctrls.controller('HomeCtrl', function ($scope, $http) {
	$scope.tagline = "this is an awesome HOME tagline";
	$scope.title = "HOME";
	$scope.developer = {
    name: 'Paige',
    handle: 'paigetech'
	};
    var kendamas = [
	{
	    "img": "kendamas/k1.jpg",
	    "size": "275px",
	    "tags": "#kcs #wood #plain #smiley #face #light #more #tags #kendama"
	    
	},
	{
	    "img": "kendamas/k2.jpg",
	    "size": "275px",
	    "tags": "#cracked #kaleb #purple #awesome #kendama"
	},
	{
	    "img": "kendamas/k3.jpg",
	    "size": "275px",
	    "tags": "#burnt #stripe #kcs #kendama #nice #pro"
	},
	{
	    "img": "kendamas/k4.jpg",
	    "size": "275px",
	    "tags": "#cracked  #green #blue  #teal #balsa #bahama  #kendama #spike"
	},
	{
	    "img": "kendamas/k5.jpg",
	    "size": "275px",
	    "tags": "#camoflauge #blue #hand #painted #ako #kendama #camo #black #blackstring"
	},
	{
	    "img": "kendamas/k6.jpg",
	    "size": "275px",
	    "tags": "#wild #sweets #kendama #blue #black #coating #old"
	}	    
    ];
    function chunk(arr, size) {
	var newArr = [];
	for (var i=0; i<arr.length; i+=size) {
	    newArr.push(arr.slice(i, i+size));
	}
	return newArr;
    }

    $scope.chunkedData = chunk(kendamas, 3);
});

ctrls.controller('AboutCtrl', function ($scope, $http) {
	$scope.tagline = "this is an awesome ABOUT tagline";
	$scope.title = "ABOUT";
});
