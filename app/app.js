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
		.when("/cart", {
			templateUrl: "views/cart.html"
		})
		.when("/grocer" , {
			templateUrl: "views/grocer.html"
		})
		.when("/login", {
			templateUrl: "views/login.html",
			controller: "LoginController"
		})
		.otherwise({redirectTo:"/about"});
	});