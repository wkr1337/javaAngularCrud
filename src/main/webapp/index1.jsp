<html ng-app="myApp">
	<head>
		<title>My App</title>
	    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
		       <script type="text/javascript" src="js/script.js"></script>
		
	</head>
<body>
   <div ng-controller="myCtrl">
   
   ============================================================<br>
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
    
    <br>
    
    
    =====================================================<br>
    Brand Name:<input type="text" ng-model="brandName"><br>
   	<button ng-click="getBrandByName()">Get models by brand name</button>
    <br>
    
    
    		  	<div ng-if="editNumber">
    		  	<input type="text" ng-model="editModelName" ng-value="currentModel.name">
		  		<input type="number" ng-model="editModelBrandId" ng-value="currentModel.brand_id"><br>
    		  	<button ng-click="editModel1(currentModel.id)">Edit this model</button>
    		  	</div>
    =========================================<br>
		<div ng-repeat="model in models track by $index">
    		Model id= {{model.id}}<br>
		  	Model name= {{model.name}}<br>    
		  	
		  	
    	<button ng-click="deleteModel(model.id)">Delete model</button>
		<button ng-click="editModel(model.id)">Edit model</button>
   		
		</div>
   <br>
   click(id)  to  make input field visible
   
   =====================================================<br>
   <br>
   
   <div ng-if="addAddField">
	Model Name: <input type="text" ng-model="newModel"><br>
	Belongs to brand id: <input type="number" ng-model="newModelBrandId"><br>
  	<button ng-click="addModel(newModel, newModelBrandId)">Add model</button>
   </div>
   <button ng-if="!addAddField" ng-click="addField()">Add model</button>
   
   
   
   
   
   
   </div>
   
   
   
   
   
   
   
   
   
   </body>

</html>
   