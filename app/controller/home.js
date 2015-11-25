app.controller("HomeController",function($rootScope,$scope,$window,$location){
	$scope.name = JSON.parse(localStorage.getItem("user")).first +" "+ JSON.parse(localStorage.getItem("user")).last;

	$scope.logout = function(){
		localStorage.removeItem("user");
		$location.path("/");		
	}	
});