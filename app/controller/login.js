app.controller("LoginController",function($rootScope,$scope,$window,$location,$http){
	$scope.submit = function(){
		var user = $scope.username;
		var pass = $scope.password;
		$http.post("http://iligtas.ph/smartd/login.php",{username:user,password:pass}).then(onUserComplete, onError);
	};
	var onUserComplete = function(response){
		$scope.user = response.data;
		alert($scope.user);
	}
	var onError = function(reason){
		$scope.error = "Error fetching the data. ";
		alert($scope.error);
	}
});