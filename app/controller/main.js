app.controller("MainController",function($scope,$http){
	$scope.name = "Gerald";
	var onUserComplete = function(response){
		$scope.user = response.data;
		//alert($scope.user);
	}

	var onError = function(reason){
		$scope.error = "Error fetching the data. ";
	}

	$http.post("http://localhost/practice/insert.php",{names:20}).then(onUserComplete, onError);
});