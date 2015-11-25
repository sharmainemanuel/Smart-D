app.controller("OrderlistController",function($rootScope,$scope,$window,$location,$http,$routeParams){
	var onUserComplete = function(response){
		$scope.orders = response.data;
		alert(JSON.stringify($scope.orders));
	}

	var onError = function(reason){
		$scope.error = "Error fetching the data. ";
	}

	$http({method: "post",
		url: "http://iligtas.ph/smartd/order.php",
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then(onUserComplete);
	
});