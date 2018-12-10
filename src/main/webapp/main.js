(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.host = "http://localhost:8081/quintorrest/webapi/";
    }
    ApiService.prototype.getBrands = function () {
        return this.http.get(this.host + "brands");
    };
    ApiService.prototype.getModels = function (brandid) {
        return this.http.get(this.host + "models/brands/" + brandid);
    };
    ApiService.prototype.getBrandByName = function (brandName) {
        return this.http.get(this.host + "brands/brand/brandname/" + brandName);
    };
    ApiService.prototype.editModel = function (m) {
        return this.http.patch(this.host + 'models/model', m);
    };
    ApiService.prototype.deleteModel = function (m) {
        return this.http.delete(this.host + 'models/model/' + m.id);
    };
    ApiService.prototype.saveModel = function (m) {
        return this.http.post(this.host + 'models/model', m);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchModels {\r\n    position: absolute;\r\n    left: 5%;\r\n}\r\n\r\n.add-wrapper {\r\n    position: absolute;\r\n    right: 10%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztDQUNaOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaE1vZGVscyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1JTtcclxufVxyXG5cclxuLmFkZC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n<div class=\"searchModels\">\n    <label for=\"searchModels\">Car brand</label><br>\n    <input name=\"searchModels\"type='text' [(ngModel)]='currentBrandName' required/><br> \n    <button (click)='searchModels()'>Find models</button><br>\n\n\n</div>\n<button (click)=\"showAllBrands = true\">Show all the car brands</button>\n  <div *ngIf=\"showAllBrands\" class='car-brand-list'>\n      <div class='item-wrapper' *ngFor='let brand of CarBrands'>\n        {{brand.name}}\n      </div>\n    </div>\n\n  <div class='car-model-list'>\n    <div class='item-wrapper' *ngFor='let carmodel of CurrentCarModels'>\n      <app-car-model-item [model]='carmodel' (onDeleted)='onModelDeleted(carmodel)'></app-car-model-item>\n    </div>\n  </div>\n\n  <div class=\"add-wrapper\">\n  <div *ngIf='addMode'>\n      <label for=\"model-name-input\">Model name </label>\n\n    <input name=\"model-name-input\" type='text' [(ngModel)]='model.name' required/><br> \n    \n    <label for=\"model-brandid-input\">Model brand </label>\n\n    <select name=\"model-brandid-input\" class=\"form-control\" id=\"brandIdSelect\" required [(ngModel)]='model.brand_id'>\n      <option *ngFor=\"let brand of CarBrands\" [value]=\"brand.id\">{{brand.name}}</option>\n    </select>\n\n\n    <button (click)='save()'>Save</button><br>\n\n  </div>\n<div *ngIf='!addMode'>\n  <button (click)='addModelInput()'>Add a new model</button><br>\n\n</div>\n</div>\n{{message}}\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _models_CarModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/CarModel */ "./src/app/models/CarModel.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(api) {
        this.api = api;
        this.CarBrands = [];
        this.CurrentCarModels = [];
        this.currentCarBrand = null;
        this.title = 'quintor-rest-frontend';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getBrands().subscribe(function (data) {
            _this.CarBrands = data;
        });
        this.model = new _models_CarModel__WEBPACK_IMPORTED_MODULE_3__["CarModel"]();
    };
    AppComponent.prototype.onModelDeleted = function (m) {
        for (var i = 0; i < this.CurrentCarModels.length; i++) {
            if (this.CurrentCarModels[i].id == m.id) {
                this.CurrentCarModels.splice(i, 1);
                break;
            }
        }
    };
    AppComponent.prototype.addModelInput = function () {
        this.addMode = true;
    };
    AppComponent.prototype.save = function () {
        var _this = this;
        if (this.model.brand_id && this.model.name) {
            this.api.saveModel(this.model).subscribe(function (data) {
                _this.model = data;
                // console.log("model added", this.model);
                if (_this.model.brand_id == _this.currentCarBrand.id) {
                    _this.CurrentCarModels.push(_this.model);
                    _this.model = new _models_CarModel__WEBPACK_IMPORTED_MODULE_3__["CarModel"]();
                }
            });
            this.message = "";
            this.addMode = false;
        }
        else {
            this.message = "model name and brand are required!";
        }
    };
    AppComponent.prototype.searchModels = function () {
        var _this = this;
        if (this.currentBrandName) {
            // console.log(this.currentBrandName);
            this.api.getBrandByName(this.currentBrandName).subscribe(function (data) {
                if (data) {
                    _this.currentCarBrand = data;
                    _this.api.getModels(_this.currentCarBrand.id).subscribe(function (models) {
                        if (models.length > 0) {
                            // console.log(models);
                            _this.CurrentCarModels = models;
                            _this.message = "";
                        }
                        else {
                            _this.message = "Brand '" + _this.currentBrandName + "' has no models yet";
                            _this.CurrentCarModels = [];
                        }
                    });
                }
                else {
                    _this.message = "Brand '" + _this.currentBrandName + "' not found";
                    _this.CurrentCarModels = [];
                }
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('model'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_CarModel__WEBPACK_IMPORTED_MODULE_3__["CarModel"])
    ], AppComponent.prototype, "model", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _car_model_item_car_model_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./car-model-item/car-model-item.component */ "./src/app/car-model-item/car-model-item.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _car_model_item_car_model_item_component__WEBPACK_IMPORTED_MODULE_5__["CarModelItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/car-model-item/car-model-item.component.css":
/*!*************************************************************!*\
  !*** ./src/app/car-model-item/car-model-item.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhci1tb2RlbC1pdGVtL2Nhci1tb2RlbC1pdGVtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/car-model-item/car-model-item.component.html":
/*!**************************************************************!*\
  !*** ./src/app/car-model-item/car-model-item.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='!editMode'>\n  {{model.name}} <button (click)='onEdit()'>Edit</button> <button (click)='onDelete()'>Delete</button>\n</div>\n<div *ngIf='editMode'>\n  <input type='text' [(ngModel)]='model.name' /> <button (click)='save()'>Save</button>\n</div>"

/***/ }),

/***/ "./src/app/car-model-item/car-model-item.component.ts":
/*!************************************************************!*\
  !*** ./src/app/car-model-item/car-model-item.component.ts ***!
  \************************************************************/
/*! exports provided: CarModelItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarModelItemComponent", function() { return CarModelItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_CarModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/CarModel */ "./src/app/models/CarModel.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");





var CarModelItemComponent = /** @class */ (function () {
    function CarModelItemComponent(api) {
        this.api = api;
        this.onDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CarModelItemComponent.prototype.ngOnInit = function () {
    };
    CarModelItemComponent.prototype.onEdit = function () {
        this.editMode = true;
    };
    CarModelItemComponent.prototype.onDelete = function () {
        this.api.deleteModel(this.model).subscribe(function () {
            // console.log("deleted model", this.model);
        });
        this.onDeleted.emit(this.model);
    };
    CarModelItemComponent.prototype.save = function () {
        this.api.editModel(this.model).subscribe(function () {
            // console.log("updated model", this.model);
        });
        this.editMode = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('model'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_CarModel__WEBPACK_IMPORTED_MODULE_2__["CarModel"])
    ], CarModelItemComponent.prototype, "model", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('onDeleted'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CarModelItemComponent.prototype, "onDeleted", void 0);
    CarModelItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-car-model-item',
            template: __webpack_require__(/*! ./car-model-item.component.html */ "./src/app/car-model-item/car-model-item.component.html"),
            styles: [__webpack_require__(/*! ./car-model-item.component.css */ "./src/app/car-model-item/car-model-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], CarModelItemComponent);
    return CarModelItemComponent;
}());



/***/ }),

/***/ "./src/app/models/CarModel.ts":
/*!************************************!*\
  !*** ./src/app/models/CarModel.ts ***!
  \************************************/
/*! exports provided: CarModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarModel", function() { return CarModel; });
var CarModel = /** @class */ (function () {
    function CarModel() {
    }
    return CarModel;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\henk\Documents\quintorFrontend\quintor-rest-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map