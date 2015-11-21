var app = angular.module("myapp",["ngRoute"]);

app.config(function($routeProvider,$locationProvider){
	$routeProvider
	.when("/", {
		templateUrl: "views/main.html",
		controller: "MainController"
	})
	.when("/about", {
		templateUrl: "views/about.html"
	})
	.otherwise({redirectTo:"/about"});
});