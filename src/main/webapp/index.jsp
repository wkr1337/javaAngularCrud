<html ng-app="myApp">
	<head>
		<title>My App</title>
	    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
		
	</head>
<body>
    <h2>Jersey RESTful Web Application!</h2>
    <p><a href="webapi/myresource">Jersey resource</a>

<div ng-controller="myCtrl">
	<button ng-click="getAllBrands()">Get all brands</button>
    <table cellpadding="1" cellspacing="2" border="1">
    	<tr>
    		<th>Id</th>
    		<th>Name</th>
    	</tr>
    	<tr ng-repeat="brand in allBrands">
    		<td>{{brand.id}}</td>
    		<td>{{brand.name}}</td>
    	</tr>
    
    </table>
    
    
    Brand Id: <input type="number" ng-model="brandId"><br>
   	<button ng-click="getBrand()">Get brand by id</button>
   	<br>
    Brand = {{brandById}}<br><br>
    
    Brand Name:<input type="text" ng-model="brandName"><br>
   	<button ng-click="getBrandByName()">Get brand by name</button>
    <br>
    getBrandByName = {{brandByName}}
    <br>
    <br>
    <div ng-if="editNew">
  		<input type="text" ng-model="editModelName" ng-value="modelname"><br>
  		<input type="number" ng-model="editModelBrandId" ng-value=modelbrand_id><br>
	  		
	  	</div>
    <div ng-repeat="model in models track by $index">
    <span id="currentModel">
    	Model id= {{model.id}}<br>
	  	Model name= {{model.name}}<br>
	  	
 	<button ng-click="deleteModel(model.id)">Delete model</button>
	<button ng-click="changeEditBool(model.id)">changeEditBool</button>
 	
	<button ng-click="addEditModelInput(model.id)">Edit</button>
	  	
	  	
    </span>
    	


 	</div>
    	<span ng-bind-html="newModelInput">
    	</span>
  	 	<button ng-click="addNewModelInput()">Add new model input</button>
    	
    	<br><br>
    	Model Name: <input type="text" ng-model="newModel"><br>
		Belongs to brand id: <input type="number" ng-model="newModelBrandId"><br>
   		<button ng-click="addModel(newModel, newModelBrandId)">Add model</button>
    
</div>
    <script type="text/javascript">
    	var myApp = angular.module('myApp', []);
    	myApp.controller('myCtrl', function($scope, $http, $sce, $httpParamSerializer) {
    		$scope.spanElem = [];
    		$scope.allBrands;
    		$scope.getAllBrands = function() {
	    		$http.get('http://localhost:8080/quintorrest/webapi/brands')
	    		.success(function(response){
	    			
	    			$scope.allBrands = response;
	    			console.log(response.brands);
	    			return response;
	    		});
    		}
    		
    		$scope.getBrand = function() {
    			$http.get('http://localhost:8080/quintorrest/webapi/brands/brand/' + $scope.brandId)
	    		.success(function(response){
    			
    			$scope.brandById = response;
	    		});
    		}
    		
    		$scope.getBrandByName = function() {
    			$http.get('http://localhost:8080/quintorrest/webapi/brands/brand/getname/' + $scope.brandName)
	    		.success(function(response){
    			
    			$scope.brandByName = response;
    			$scope.brandId = response.id;
    			console.log("hiter");
    			$scope.getModels();
	    		});
    		}
    		
    		$scope.getModels = function() {
    			console.log($scope.brandId);
    			$http.get('http://localhost:8080/quintorrest/webapi/models/brands/' + $scope.brandId)
	    		.success(function(response){
    			
    			$scope.models = response;
	    		});
    		}
    		
    		$scope.deleteModel = function(id) {
    			$http.delete('http://localhost:8080/quintorrest/webapi/models/model/' + id)
	    		.success(function(response){
    			console.log("model" + id + " deleted");
    			$scope.models = $scope.getModels();
	    		});
    		}
    		$scope.addNewModelInput = function() {
    			//var html = '<form><input type="text" ng-model="newModelName">';
    			//html += '<select ng-module="newModelBrandIdSelect">';
    			//var allBrands = $scope.getAllBrands();
    			//console.log(allBrands);
    			//for (var i = 0; i < allBrands.length; i++) {
				//	html += '<option value="' + allBrands[i] + '">';

				//}
    			var html = 'Name your new model: <input type="text" ng-model="newModel"><br>';
    			html += 'Belongs to brand id: <input type="number" ng-model="newModelBrandId"><br>';
    			html += '<button ng-click="addModule(newModel, newModelBrandId)">Add model</button>';
    			$scope.newModelInput = $sce.trustAsHtml(html);
    		}
    		$scope.editNew = false;
    		$scope.changeEditBool = function(id) {
    			$scope.editNew = true;
    			var currentModel = $scope.models.find(item => item.id === id);
    			$scope.modelname = currentModel.name;
    			$scope.modelbrand_id = currentModel.brand_id;
    			$scope.editNewId = id;
    		}
    		$scope.addEditModelInput = function(id) {
    			var currentModel = $scope.models.find(item => item.id === id);
    			console.log($scope.models.find(item => item.id === id));
    			var html = 'Edit Name: <input type="text" ng-model="editModelName' + currentModel.id + '" value="'+ currentModel.name +'"><br>';
    			html += 'Edit Brand category: <input type="number" ng-model="editModelBrandId' + currentModel.id + '" value="'+ currentModel.brand_id +'"><br>';
    			html += '<button ng-click="editModel('+ id +', editModelName'+ id +', newModelBrandId' + id + ')">Edit model</button>';
    			$scope.newModelInput = $sce.trustAsHtml(html);
    		}
    		
    		$scope.editModel = function(id, newName, newBrandId) {
    			var dataObj = {
   					"id" : id,
       				"name" : newName,
       				"brand_id" : newBrandId
       			};
    			console.log(dataObj);
    		}
    		
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
    		
    	//	<div *ngIf="editNumber === model.id">
		//  	Edit Number == {{editNumber === model.id}}
		//  		<input type="text" ng-model="editModelName" ng-value="model.name">
		//  		<input type="number" ng-model="editModelBrandId" ng-value="model.brand_id"><br>
  		//    	<button ng-click="editModel1(model.id)">Edit this model</button>
		//  		
		//  	</div>
    	});
    
    </script>
</body>

</html>
