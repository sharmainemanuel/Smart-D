app.controller("CartController",function($rootScope,$scope,$window,$location,$route){
	$scope.viewCart = function(){
		
	}
	$scope.items = JSON.parse(localStorage.getItem("product"));
	$scope.clearCart = function(){
		localStorage.removeItem("product");
		$route.reload();
	}

	$scope.deleteItem = function(id){
		var json = JSON.parse(localStorage.getItem("product"));
		if(json.length==1){localStorage.removeItem("product"); $route.reload(); return;}
		for (i=0;i<json.length;i++){
			if (json[i].productid == id) json.splice(i,1);
		}
		
		localStorage.setItem("product",JSON.stringify(json));
		$route.reload();
	}
});