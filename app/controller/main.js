app.controller("MainController",function($rootScope,$scope,$window,$location){
	$rootScope.last ="Austira";
	$rootScope.go = function(path){
		$location.path(path);
	}
	$rootScope.back = function(){
		$window.history.back();
	}
});