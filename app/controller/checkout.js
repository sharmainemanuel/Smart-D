app.controller("CheckoutController",function($rootScope,$scope,$location){
	$scope.checkout = function(){
		var addres = $scope.addres;
		var myjson = localStorage.getItem("product");

		for (i=0;i<myjson.length;i++){
			myjson[i].myaddress = "sdfdsfdsfds";
		}

		/*$.post( 'http://iligtas.ph/smartd/json_cart.php',{ mycart: myjson }, function( data, status) {
	      //$( "#id01" ).html( data[0].Name );
	      localStorage.removeItem("product");
	      $('#modal1').openModal();
	    });*/

	}

	$scope.goToHome = function(){
		$location.path("/");
		$('#modal1').closeModal();
	}
});