app.controller("ViewProduct", function($rootScope,$scope,$http,$location,$routeParams){
	var pid = $routeParams.idproduct;
	var max = 1;
	var profile = "";
	$scope.qty = 1;
	$scope.minus = function(){
		if($scope.qty==0){
			return;
		}
		$scope.qty -= 1;
	};
	$scope.add = function(){
		if($scope.qty==max){
			return;
		}
		$scope.qty += 1;	
	}

	var getItems = function(){
		var prod = JSON.parse(localStorage.getItem("product")) || [] ;
		return prod;
	}

	var subtract = function(strprofile){
		strprofile[0].pqty = $scope.qty;
		strprofile[0].pprice = $scope.qty * strprofile[0].pprice;
		strprofile[0].customerid = JSON.parse(localStorage.getItem("user")).userid;
		var mystr = JSON.stringify(strprofile);
		return JSON.parse(mystr.substring(1,mystr.length-1));
	}

	$scope.addToCart = function(){
		if(typeof(Storage) !== "undefined") {
	    // Code for localStorage/sessionStorage.
	    	if(checkDuplicate(profile[0].productid)){
	    		var items = getItems();
	    		var replace = subtract(profile); 
			    items.push(replace);
			    localStorage.setItem("product",JSON.stringify(items));
	    	}
	    	else{
	    		alert("may kapareha");
	    	}

		}
		else {
		    // Sorry! No Web Storage support..
		}
	}

	var deleteItem = function(){
		var json = getItems();
		for (i=0;i<json.length;i++){
			if (json[i].productid == '3') json.splice(i,1);
		}
		
		localStorage.setItem("product",JSON.stringify(json));
	}

	var checkDuplicate = function(id){
		var hasDuplicate = false;
		var json = getItems();
		for (i=0;i<json.length;i++){
			if (json[i].productid == id){
				return false;
			}
		}

		return true;	
	}


	var onUserComplete = function(response){
		$scope.product = response.data;
		profile = $scope.product;
		max = $scope.product[0].pqty;
	}

	var onError = function(reason){
		$scope.error = "Error fetching the data. ";
	}

	$http({method: "post",
    	url: "http://iligtas.ph/smartd/view_product.php",
    	data: {"productid":pid},
    	headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then(onUserComplete);

});