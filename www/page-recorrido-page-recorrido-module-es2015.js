(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-recorrido-page-recorrido-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page-recorrido/page-recorrido.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-recorrido/page-recorrido.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title >\n      <ion-icon name=\"bus\"></ion-icon>\n      Recorrido</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      Camine al paradero: {{paradero_subida}}\n  </ion-card-header>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Tome el bus: {{bus}}\n  </ion-card-header>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Bajese en el paradero: {{paradero_bajada}}\n  </ion-card-header>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page-recorrido/page-recorrido-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/page-recorrido/page-recorrido-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: PageRecorridoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRecorridoPageRoutingModule", function() { return PageRecorridoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page_recorrido_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-recorrido.page */ "./src/app/page-recorrido/page-recorrido.page.ts");




const routes = [
    {
        path: '',
        component: _page_recorrido_page__WEBPACK_IMPORTED_MODULE_3__["PageRecorridoPage"]
    }
];
let PageRecorridoPageRoutingModule = class PageRecorridoPageRoutingModule {
};
PageRecorridoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PageRecorridoPageRoutingModule);



/***/ }),

/***/ "./src/app/page-recorrido/page-recorrido.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/page-recorrido/page-recorrido.module.ts ***!
  \*********************************************************/
/*! exports provided: PageRecorridoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRecorridoPageModule", function() { return PageRecorridoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_recorrido_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-recorrido-routing.module */ "./src/app/page-recorrido/page-recorrido-routing.module.ts");
/* harmony import */ var _page_recorrido_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-recorrido.page */ "./src/app/page-recorrido/page-recorrido.page.ts");







let PageRecorridoPageModule = class PageRecorridoPageModule {
};
PageRecorridoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _page_recorrido_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageRecorridoPageRoutingModule"]
        ],
        declarations: [_page_recorrido_page__WEBPACK_IMPORTED_MODULE_6__["PageRecorridoPage"]]
    })
], PageRecorridoPageModule);



/***/ }),

/***/ "./src/app/page-recorrido/page-recorrido.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/page-recorrido/page-recorrido.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtcmVjb3JyaWRvL3BhZ2UtcmVjb3JyaWRvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/page-recorrido/page-recorrido.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/page-recorrido/page-recorrido.page.ts ***!
  \*******************************************************/
/*! exports provided: PageRecorridoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRecorridoPage", function() { return PageRecorridoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");



//import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
//import { Geolocation } from '@ionic-native/geolocation/ngx';
//import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';


let PageRecorridoPage = class PageRecorridoPage {
    constructor(geolocation, router, storage) {
        this.geolocation = geolocation;
        this.router = router;
        this.storage = storage;
        //public recorrido_uno: Recorrido;
        this.bus = 'no se encontro bus';
        this.paradero_subida = 'no se encontro paradero';
        this.paradero_bajada = 'no se encontro paradero';
    }
    //      alert('Se ocupara la direccion del gps')
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.recorrido_final = yield this.storage.get('recorrido_final');
            //    console.log(this.recorrido_final);
            this.bus = this.recorrido_final.bus;
            //    console.log(this.bus);
            this.paradero_subida = this.recorrido_final.dir[0];
            //   console.log(this.paradero_subida)
            this.paradero_bajada = this.recorrido_final.dir[1];
            //   console.log(this.paradero_bajada)
            //  console.log(this.recorrido_final)
        });
    }
};
PageRecorridoPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
PageRecorridoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-recorrido',
        template: __webpack_require__(/*! raw-loader!./page-recorrido.page.html */ "./node_modules/raw-loader/index.js!./src/app/page-recorrido/page-recorrido.page.html"),
        styles: [__webpack_require__(/*! ./page-recorrido.page.scss */ "./src/app/page-recorrido/page-recorrido.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
], PageRecorridoPage);



/***/ })

}]);
//# sourceMappingURL=page-recorrido-page-recorrido-module-es2015.js.map