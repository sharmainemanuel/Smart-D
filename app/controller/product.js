app.controller("ProductController",function($scope,$http,$window,$rootScope,$routeParams){
	var filt = $routeParams.categ;
	var onUserComplete = function(response){
		$scope.product = response.data;
	}

	var onError = function(reason){
		$scope.error = "Error fetching the data. ";
	}

	$http({method: "post",
    	url: "http://localhost/practice/view_products.php",
    	data: {"category":filt},
    	headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then(onUserComplete);
});