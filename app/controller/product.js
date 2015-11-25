app.controller("ProductController",function($scope,$http,$window,$rootScope,$routeParams){
	
	var filt = $routeParams.categ;
	var onUserComplete = function(response){
		$scope.products = response.data;
		$(".big").removeClass("active");
	}

	var onError = function(reason){
		$scope.error = "Error fetching the data. ";
	}
	$(".big").addClass("active");
	$http({method: "post",
    	url: "http://iligtas.ph/smartd/view_products.php",
    	data: {"category":filt},
    	headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then(onUserComplete);
	/*$http({method: "post",
    	url: "http://localhost/practice/view_products.php",
    	data: {"category":filt},
    	headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then(onUserComplete);*/
});