var app = angular.module("myapp",["ngRoute"]);

	app.config(function($routeProvider,$locationProvider){
		$routeProvider
		.when("/", {
			templateUrl: "views/login.html",
			controller: "LoginController"
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
		.when("/home", {
			templateUrl: "views/home.html",
			controller: "HomeController"
		})
		.when("/viewproduct/:idproduct", {
			templateUrl: "views/viewproduct.html",
			controller: "ViewProduct"
		})
		.when("/checkout", {
			templateUrl: "views/checkout.html",
			controller: "CheckoutController"
		})
		.when("/wishlist", {
			templateUrl: "views/wishlist.html",
			controller: "WishlistController"
		})
		.when("/deliveryhome", {
			templateUrl: "views/deliveryhome.html",
			controller: "DeliveryhomeController"
		})
		.when("/orders", {
			templateUrl: "views/orders.html",
			controller: "OrdersController"
		})
		.when("/orderlist", {
			templateUrl: "views/orderlist.html",
			controller: "OrderlistController"
		});
		//.otherwise({redirectTo:"/about"});
	});