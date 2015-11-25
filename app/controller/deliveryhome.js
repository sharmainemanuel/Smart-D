app.controller("DeliveryhomeController",function($rootScope,$scope,$window,$location,$http,$route){
	var onUserComplete = function(response){
		$scope.delivers = response.data;
	}

	var onError = function(reason){
		$scope.error = "Error fetching the data. ";
	}

	$http({method: "post",
		url: "http://iligtas.ph/smartd/order.php",
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then(onUserComplete);	

    $scope.setDeliver = function(id){
    	$.post( 'http://iligtas.ph/smartd/setdeliver.php',{ purchase: id }, function( data, status) {
	      //$( "#id01" ).html( data[0].Name );
	      $route.reload();
	    });
    }

    $scope.logout = function(){
		localStorage.removeItem("delivery");
		$location.path("/");		
	}	

});