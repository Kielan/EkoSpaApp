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
    $scope.kendamas = [
	{
	    "title": "Wacky Face",
	    "img": "kendamas/k1.jpg",
	    "size": "275px",
	    "tags": "#kcs #wood #plain #smiley #face #light #more #tags #kendama"
	    
	},
	{
	    "title": "Kaleb Purple Cracked",
	    "img": "kendamas/k2.jpg",
	    "size": "275px",
	    "tags": "#cracked #kaleb #purple #awesome #kendama"
	},
	{
	    "title": "Oak Wood",
	    "img": "kendamas/k3.jpg",
	    "size": "275px",
	    "tags": "#burnt #stripe #kcs #kendama #nice #pro"
	},
	{
	    "title": "Trojax Kendama",
	    "img": "kendamas/k4.jpg",
	    "size": "275px",
	    "tags": "#cracked  #green #blue  #teal #balsa #bahama  #kendama #spike"
	},
	{
	    "title": "Vintage Ako Camo",
	    "img": "kendamas/k5.jpg",
	    "size": "275px",
	    "tags": "#camoflauge #blue #hand #painted #ako #kendama #camo #black #blackstring"
	},
	{
	    "title": "Coral Reef",
	    "img": "kendamas/k6.jpg",
	    "size": "275px",
	    "tags": "#wild #sweets #kendama #blue #black #coating #old"
	}	    
    ];

});

ctrls.controller('AboutCtrl', function ($scope, $http) {
	$scope.tagline = "this is an awesome ABOUT tagline";
	$scope.title = "ABOUT";
});
