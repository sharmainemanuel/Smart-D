app.factory("ProductService" , function($http){
	var prod = JSON.parse(localStorage.getItem("product")) || [];

	return{
		add: function(filter){
			$http({method: "post",
		    	url: "http://localhost/practice/view_products.php",
		    	data: {"category":filter},
		    	headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    	});


			var onError = function(reason){
				$scope.error = "Error fetching the data. ";
			}
		}
	}
});