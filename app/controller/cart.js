app.controller("CartController",function($rootScope,$scope,$window,$location,$route){
	$scope.viewCart = function(){
		
	}
	$scope.items = JSON.parse(localStorage.getItem("product"));
	$scope.clearCart = function(){
		localStorage.removeItem("product");
		$route.reload();
	}

	$scope.checkOut = function(){
		var myjson = JSON.parse(localStorage.getItem("product"));

		$.ajax({
            url: 'http://iligtas.ph/smartd/checkout.php',
            type: 'post',
            dataType: 'json',
            success: function (data) {
            	alert("success");
            },
            data: myjson
        });	
	}
});