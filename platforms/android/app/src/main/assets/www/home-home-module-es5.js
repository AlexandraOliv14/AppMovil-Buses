(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Direcciones\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Ingresar direccion de partida</ion-card-title>\n    <ion-input [(ngModel)] =\"direccion_salida\" placeholder=\"Mi ubicación\">\n      <ion-icon name=\"pin\"></ion-icon>\n    </ion-input>\n  </ion-card-header>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Ingresar direccion de llegada</ion-card-title>\n    <ion-input [(ngModel)]=\"direccion_llegada\" placeholder=\"Ingresar direccion\">\n    <ion-icon name=\"pin\"></ion-icon>\n  </ion-input>\n</ion-card-header>\n</ion-card><ion-item>\n  <ion-button slot=\"start\" shape=\"round\" color=\"tertiary\" (click) =\"buttonClick()\" >\n    BUSCAR RUTA</ion-button>\n</ion-item>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FsZS9Fc2NyaXRvcmlvL0ludGVudG9Db3Jkb3ZhL2FuZ3VsYXItaW9uaWMvQXBwTW92aWwtQnVzZXMvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_recorrido_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/recorrido.service */ "./src/app/services/recorrido.service.ts");




//import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
//import { Geolocation } from '@ionic-native/geolocation/ngx';
//import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';




var HomePage = /** @class */ (function () {
    //  public data: any[];
    //public dato: any;
    //  type: SearchType = SearchType.all;
    function HomePage(geolocation, router, storage, http, recorrido, loadingCtrl) {
        this.geolocation = geolocation;
        this.router = router;
        this.storage = storage;
        this.http = http;
        this.recorrido = recorrido;
        this.loadingCtrl = loadingCtrl;
        this.direccion_salida = '';
        this.direccion_llegada = '';
    }
    HomePage.prototype.buttonClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        //quita espacios
                        this.direccion_salida = this.direccion_salida.trim();
                        this.direccion_llegada = this.direccion_llegada.trim();
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Buscando recorridos..',
                            })];
                    case 1:
                        loading = _c.sent();
                        this.storage.set('direccion_salida', this.direccion_salida);
                        if (!(this.direccion_llegada.length == 0)) return [3 /*break*/, 2];
                        alert('campo de direccion de llegada vacio');
                        return [3 /*break*/, 15];
                    case 2:
                        if (!(this.direccion_salida.length == 0)) return [3 /*break*/, 5];
                        alert('Se ocupara la direccion del gps');
                        //consulta con cordenadas
                        return [4 /*yield*/, loading.present()];
                    case 3:
                        //consulta con cordenadas
                        _c.sent();
                        _a = this;
                        return [4 /*yield*/, this.recorrido.getRecorridoCor(this.latitud_salida, this.longitud_salida, this.direccion_llegada)];
                    case 4:
                        _a.recorrido_final = _c.sent();
                        return [3 /*break*/, 8];
                    case 5: 
                    //consulta con direcciones
                    return [4 /*yield*/, loading.present()];
                    case 6:
                        //consulta con direcciones
                        _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.recorrido.getRecorridoDir(this.direccion_salida, this.direccion_llegada)];
                    case 7:
                        _b.recorrido_final = _c.sent();
                        _c.label = 8;
                    case 8: return [4 /*yield*/, this.storage.set('recorrido_final', this.recorrido_final)];
                    case 9:
                        _c.sent();
                        if (!(this.recorrido_final.bus == 'cero')) return [3 /*break*/, 12];
                        //consulta con arreglo
                        return [4 /*yield*/, loading.present()];
                    case 10:
                        //consulta con arreglo
                        _c.sent();
                        return [4 /*yield*/, loading.dismiss()];
                    case 11:
                        _c.sent();
                        this.router.navigate(['/page-recorrido-combinacion']);
                        return [3 /*break*/, 15];
                    case 12: return [4 /*yield*/, loading.present()];
                    case 13:
                        _c.sent();
                        return [4 /*yield*/, loading.dismiss()];
                    case 14:
                        _c.sent();
                        this.router.navigate(['/page-recorrido']);
                        _c.label = 15;
                    case 15:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        //encontrar locacion del dispositivo
        this.geolocation.getCurrentPosition({ timeout: 7000 }).then(function (position) {
            _this.latitud_salida = position.coords.latitude;
            //  console.log(this.latitud_salida);
            _this.longitud_salida = position.coords.longitude;
            //  console.log(this.longitud_salida);
        }).catch(function (error) {
            console.log('Error encontrando la gps', error);
        });
    };
    ;
    HomePage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Buscando recorridos..',
                            duration: 5000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, loading];
                }
            });
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: src_app_services_recorrido_service__WEBPACK_IMPORTED_MODULE_7__["RecorridoService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            src_app_services_recorrido_service__WEBPACK_IMPORTED_MODULE_7__["RecorridoService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], HomePage);
    return HomePage;
}());

//npm install @ionic/angular@4.0.0-beta.7


/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map