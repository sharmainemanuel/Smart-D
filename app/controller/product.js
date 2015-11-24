app.controller("ProductController",function($scope,$http,$window,$rootScope,$routeParams){
	var filt = $routeParams.categ;
	var onUserComplete = function(response){
		$scope.products = response.data;
	}

	var onError = function(reason){
		$scope.error = "Error fetching the data. ";
	}

	$http({method: "post",
    	url: "http://192.168.11.119/practice/view_products.php",
    	data: {"category":filt},
    	headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then(onUserComplete);
});