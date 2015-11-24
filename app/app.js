var app = angular.module("myapp",["ngRoute"]);

	app.config(function($routeProvider,$locationProvider){
		$routeProvider
		.when("/", {
			templateUrl: "views/home.html",
			controller: "HomeController"
		})
		.when("/shops" , {
			templateUrl: "views/shops.html",
			controller: "ShopController"
		})
		.when("/about", {
			templateUrl: "views/about.html",
			controller: "AboutController"
		})
		.when("/carts", {
			templateUrl: "views/cart.html",
			controller: "CartController"
		})
		.when("/category/:shopping", {
			templateUrl: "views/category.html",
			controller: "CategoryController"
		})
		.when("/product/:categ", {
			templateUrl: "views/product.html",
			controller: "ProductController"
		})
		.when("/login", {
			templateUrl: "views/login.html",
			controller: "LoginController"
		})
		.when("/viewproduct/:idproduct", {
			templateUrl: "views/viewproduct.html",
			controller: "ViewProduct"
		});
		//.otherwise({redirectTo:"/about"});
	});