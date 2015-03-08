'use strict';

var cahApp = angular.module('cahApp', ['ngResource', 'ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl: 'templates/home.html'
		});

		// game related routes
		$routeProvider.when('/game/create', {
			templateUrl: 'templates/creategame.html'
		});
		$routeProvider.when('/game/find', {
			templateUrl: 'templates/findgame.html'
		});

		// set the the default route to home page
		$routeProvider.otherwise({
			redirectTo: '/home'
		});
	})
;