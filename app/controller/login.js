app.controller("LoginController",function($rootScope,$scope,$window,$location,$http){
	$scope.submitCustomer = function(){
		var user = $scope.username;
		var pass = $scope.password;
		$http.post("http://iligtas.ph/smartd/login.php",{username:user,password:pass}).then(onUserCompleteUser, onError);
	};

	$scope.submitDelivery = function(){
		var user = $scope.username;
		var pass = $scope.password;
		$http.post("http://iligtas.ph/smartd/login2.php",{username:user,password:pass}).then(onUserCompleteDelivery, onError);
	};

	var onUserCompleteUser = function(response){
		$scope.user = response.data;
		if($scope.user == "false"){
			alert("mali");
		}else{
			localStorage.setItem("user", JSON.stringify($scope.user));
			$location.path("/home");
		}	
	}
	var onUserCompleteDelivery = function(response){
		$scope.user = response.data;
		if($scope.user == "false"){
			alert("mali");
		}else{
			localStorage.setItem("delivery", JSON.stringify($scope.user));
			$location.path("/deliveryhome");
		}	
	}
	var onError = function(reason){
		$scope.error = "Error fetching the data. ";
	}
});