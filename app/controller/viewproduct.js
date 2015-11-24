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

	$scope.addToCart = function(){
		if(typeof(Storage) !== "undefined") {
	    // Code for localStorage/sessionStorage.
		    if (localStorage.getItem("product") === null) {
		    	localStorage.setItem("product", constructJSON(profile));
		   	}
		   	else{
		   		var temp = localStorage.getItem("product");
		   		localStorage.setItem("product", appendIt(temp));
			} 
		}
		else {
		    // Sorry! No Web Storage support..
		}
	}

	var deleteItem = function(){
		var json = JSON.parse(localStorage.getItem("product"));
		for (i=0;i<json.length;i++){
			if (json[i].productid == '3') json.splice(i,1);
		}
		
		localStorage.setItem("product",JSON.stringify(json));
	}

	var constructJSON = function(details){
		var newfile = '{"productid":"' +  details[0].productid + '","productname":"' +  details[0].productname + '",';
		newfile += '"ptype":"' +  details[0].ptype + '","pqty":"' +  $scope.qty + '","pprice":"' +  ($scope.qty * details[0].pprice) + '"}';
		return newfile;
	}

	var appendIt = function(xstr){
		var getstr = constructJSON(profile); 
		return "[" + xstr + "," + getstr + "]";
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
    	url: "http://192.168.11.119/practice/view_product.php",
    	data: {"productid":pid},
    	headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).then(onUserComplete);
});