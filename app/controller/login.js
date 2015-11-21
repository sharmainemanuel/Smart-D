
app.controller("LoginController",function($scope,$http,$window){
	$scope.submit = function(){
		var user = $scope.username;
		var pass = $scope.password;
		$http.post("http://localhost/smart/login.php",{username:user,password:pass}).then(onUserComplete, onError);
	};
	var onUserComplete = function(response){
		$scope.user = response.data;
		alert($scope.user);
	}
	var onError = function(reason){
		$scope.error = "Error fetching the data. ";
	}
});