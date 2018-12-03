var myApp = angular.module('myApp', []);
myApp.controller('myCtrl', function($scope, $http, $sce, $httpParamSerializer) {
//	get all brands
	$scope.getAllBrands = function() {
		$http.get('http://localhost:8080/quintorrest/webapi/brands')
		.success(function(response){
			
			$scope.allBrands = response;
			console.log(response.brands);
			return response;
		});
	}
	
	
	
	
//	get brands by name(calls getModels())
	$scope.getBrandByName = function() {
		$http.get('http://localhost:8080/quintorrest/webapi/brands/brand/getname/' + $scope.brandName)
		.success(function(response){
		
		$scope.brandByName = response;
		$scope.brandId = response.id;
		$scope.getModels();
		});
	}
	
	
	
//	get models
	$scope.getModels = function() {
//		console.log($scope.brandId);
		$http.get('http://localhost:8080/quintorrest/webapi/models/brands/' + $scope.brandId)
		.success(function(response){
		$scope.models = response;
		});
	}
	
	
//	Edit
	$scope.editNumber = null;
	
	$scope.editModel = function(id) {
		$scope.currentModel = $scope.models.find(item => item.id === id);

		$scope.editNumber = id;
		$scope.editId = id;
	}
//	$scope.editModelName = null;
//	$scope.editModelBrandId = null;
	$scope.editModel1 = function(id, editModelName) {
		var dataObj = {
			"id" : id,
			"name" : editModelName,
			"brand_id" : $scope.editModelBrandId
		};
		console.log(dataObj);
		
	}
	
	
	
	
//	add field
	$scope.addAddField = null;
	$scope.addField = function () {
		$scope.addAddField = true;
	}
//	Add new model
	$scope.addModel = function(name, brand_id) {
		console.log(name, brand_id);

		if(name && brand_id)
			{
			console.log(name, brand_id);
			var dataObj = {
				"name" : name,
				"brand_id" : brand_id
			};
			$http.post('http://localhost:8080/quintorrest/webapi/models/model/',dataObj);
			}
		
	}
	
	
	
	
	
	
	
//	Delete model by model id
	$scope.deleteModel = function(id) {
		$http.delete('http://localhost:8080/quintorrest/webapi/models/model/' + id)
		.success(function(response){
		console.log("model" + id + " deleted");
//		should change this to update only the affected model
		$scope.models = $scope.getModels();
		});
	}
	
	
});