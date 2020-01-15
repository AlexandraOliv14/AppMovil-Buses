(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-recorrido-combinacion-page-recorrido-combinacion-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page-recorrido-combinacion/page-recorrido-combinacion.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-recorrido-combinacion/page-recorrido-combinacion.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n    <ion-icon name=\"bus\"></ion-icon>\n    Recorrido</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card>\n  <ion-card-header>\n  Aun en desarrollo\n</ion-card-header>\n</ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page-recorrido-combinacion/page-recorrido-combinacion-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/page-recorrido-combinacion/page-recorrido-combinacion-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: PageRecorridoCombinacionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRecorridoCombinacionPageRoutingModule", function() { return PageRecorridoCombinacionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_recorrido_combinacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-recorrido-combinacion.page */ "./src/app/page-recorrido-combinacion/page-recorrido-combinacion.page.ts");




var routes = [
    {
        path: '',
        component: _page_recorrido_combinacion_page__WEBPACK_IMPORTED_MODULE_3__["PageRecorridoCombinacionPage"]
    }
];
var PageRecorridoCombinacionPageRoutingModule = /** @class */ (function () {
    function PageRecorridoCombinacionPageRoutingModule() {
    }
    PageRecorridoCombinacionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PageRecorridoCombinacionPageRoutingModule);
    return PageRecorridoCombinacionPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/page-recorrido-combinacion/page-recorrido-combinacion.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/page-recorrido-combinacion/page-recorrido-combinacion.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PageRecorridoCombinacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRecorridoCombinacionPageModule", function() { return PageRecorridoCombinacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_recorrido_combinacion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-recorrido-combinacion-routing.module */ "./src/app/page-recorrido-combinacion/page-recorrido-combinacion-routing.module.ts");
/* harmony import */ var _page_recorrido_combinacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-recorrido-combinacion.page */ "./src/app/page-recorrido-combinacion/page-recorrido-combinacion.page.ts");







var PageRecorridoCombinacionPageModule = /** @class */ (function () {
    function PageRecorridoCombinacionPageModule() {
    }
    PageRecorridoCombinacionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _page_recorrido_combinacion_routing_module__WEBPACK_IMPORTED_MODULE_5__["PageRecorridoCombinacionPageRoutingModule"]
            ],
            declarations: [_page_recorrido_combinacion_page__WEBPACK_IMPORTED_MODULE_6__["PageRecorridoCombinacionPage"]]
        })
    ], PageRecorridoCombinacionPageModule);
    return PageRecorridoCombinacionPageModule;
}());



/***/ }),

/***/ "./src/app/page-recorrido-combinacion/page-recorrido-combinacion.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/page-recorrido-combinacion/page-recorrido-combinacion.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtcmVjb3JyaWRvLWNvbWJpbmFjaW9uL3BhZ2UtcmVjb3JyaWRvLWNvbWJpbmFjaW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/page-recorrido-combinacion/page-recorrido-combinacion.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/page-recorrido-combinacion/page-recorrido-combinacion.page.ts ***!
  \*******************************************************************************/
/*! exports provided: PageRecorridoCombinacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRecorridoCombinacionPage", function() { return PageRecorridoCombinacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageRecorridoCombinacionPage = /** @class */ (function () {
    function PageRecorridoCombinacionPage() {
    }
    PageRecorridoCombinacionPage.prototype.ngOnInit = function () {
    };
    PageRecorridoCombinacionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-recorrido-combinacion',
            template: __webpack_require__(/*! raw-loader!./page-recorrido-combinacion.page.html */ "./node_modules/raw-loader/index.js!./src/app/page-recorrido-combinacion/page-recorrido-combinacion.page.html"),
            styles: [__webpack_require__(/*! ./page-recorrido-combinacion.page.scss */ "./src/app/page-recorrido-combinacion/page-recorrido-combinacion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageRecorridoCombinacionPage);
    return PageRecorridoCombinacionPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-recorrido-combinacion-page-recorrido-combinacion-module-es5.js.map