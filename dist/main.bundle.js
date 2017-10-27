webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"box\" fxLayout=\"column\">\r\n\t\t<header>\r\n\t\t\t<mat-toolbar color=\"primary\">\r\n\t\t\t\t<button mat-icon-button (click)=\"sidenav.toggle()\">\r\n\t\t\t\t\t<mat-icon *ngIf=\"sidenav.opened\" aria-label=\"Hide menu\">arrow_back</mat-icon>\r\n\t\t\t\t\t<mat-icon *ngIf=\"!sidenav.opened\" aria-label=\"Open menu\">menu</mat-icon>\r\n\t\t\t\t</button>\r\n\t\t\t\t<span class=\"fill-remaining-space\"></span>\r\n\t\t\t\t<a routerLink=\"/\" class=\"logo-text\">üme</a>\r\n\t\t\t\t<mat-icon class=\"logo-icon\">verified_user</mat-icon>\r\n\t\t\t</mat-toolbar>\r\n\t\t</header>\r\n\t\t<div id=\"main\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlex>\r\n\r\n\t\t\t<mat-sidenav-container class=\"ume-sidenav-fab-container\">\r\n\t\t\t\t<mat-sidenav #sidenav mode=\"side\" opened=\"false\">\r\n\t\t\t\t\t<!-- <button mat-mini-fab class=\"ume-fab\" (click)=\"sidenav.toggle()\">\r\n\t\t\t\t\t\t<mat-icon>add</mat-icon>\r\n\t\t\t\t\t</button> -->\r\n\t\t\t\t\t<div class=\"ume-scrolling-content ume-sidenav-menu\">\r\n\t\t\t\t\t\t<button mat-button routerLink=\"/create\">\r\n\t\t\t\t\t\t\t<mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon> Create</button>\r\n\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t<button mat-button routerLink=\"/communities\">\r\n\t\t\t\t\t\t\t<mat-icon aria-label=\"Example icon-button with a heart icon\">donut_small</mat-icon> Communities</button>\r\n\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t<button mat-button routerLink=\"/security\">\r\n\t\t\t\t\t\t\t<mat-icon aria-label=\"Example icon-button with a heart icon\">security</mat-icon> Security</button>\r\n\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t<button mat-button routerLink=\"/wipe\">\r\n\t\t\t\t\t\t\t<mat-icon aria-label=\"Example icon-button with a heart icon\">delete_forever</mat-icon> Clear Device</button>\r\n\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t<button mat-button routerLink=\"/settings\">\r\n\t\t\t\t\t\t\t<mat-icon aria-label=\"Example icon-button with a heart icon\">settings</mat-icon> Settings</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</mat-sidenav>\r\n\t\t\t\t<button mat-mini-fab class=\"ume-fab\" (click)=\"sidenav.toggle()\">\r\n\t\t\t\t\t<mat-icon>add</mat-icon>\r\n\t\t\t\t</button>\r\n\t\t\t\t<div class=\"ume-scrolling-content ume-content\">\r\n\t\t\t\t\t<app-breadcrumb></app-breadcrumb>\r\n\t\t\t\t\t<router-outlet></router-outlet>\r\n\t\t\t\t</div>\r\n\t\t\t</mat-sidenav-container>\r\n\r\n\t\t\t<!-- <nav fxFlex=\"1 6 20%\" fxFlexOrder fxFlexOrder.xs=\"2\"></nav>\r\n\t\t\t<article fxFlex=\"3 1 60%\" fxFlexOrder fxFlexOrder.xs=\"1\"> article</article>\r\n\t\t\t<aside fxFlex=\"1 6 20%\" fxFlexOrder fxFlexOrder.xs=\"3\"> aside</aside> -->\r\n\t\t</div>\r\n\t\t<footer>\r\n\t\t\tConnected to gateway.\r\n\t\t</footer>\r\n\t</div>\r\n</div>\r\n\r\n<!-- <div fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n\t<mat-toolbar color=\"primary\">\r\n\t\t<button mat-icon-button>\r\n\t\t\t<mat-icon *ngIf=\"menuOpened\" (click)=\"onMenu(false)\" aria-label=\"Hide menu\">arrow_back</mat-icon>\r\n\t\t\t<mat-icon *ngIf=\"!menuOpened\" (click)=\"onMenu(true)\" aria-label=\"Open menu\">menu</mat-icon>\r\n\t\t</button>\r\n\r\n\t\t<mat-icon class=\"example-icon\">verified_user</mat-icon>\r\n\t</mat-toolbar>\r\n\r\n\t<div class=\"app-content\" fxFlexOffset=\"20px\" fxFlexFill>\r\n<p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p>\r\n<p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p>\r\n<p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p>\r\n<p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p>\r\n<p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p>\r\n<p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p>\r\n<p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p>\r\n<p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p>\r\n<p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p>\r\n<p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p>\r\n<p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p>\r\n<p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p>\r\n<p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p><p>hello world!</p>\r\n\t</div>\r\n\r\n\t<mat-sidenav-container fxFlexOffset=\"20px\" fxFlexFill class=\"example-sidenav-fab-container\">\r\n\t\t<mat-sidenav #sidenav mode=\"side\" opened=\"true\">\r\n\t\t\t<button mat-mini-fab class=\"example-fab\" (click)=\"sidenav.toggle()\">\r\n\t\t\t\t<mat-icon>add</mat-icon>\r\n\t\t\t</button>\r\n\t\t\t<div class=\"example-scrolling-content\">\r\n\t\t\t\tLorem ipsum dolor sit amet, pede a libero aenean phasellus, lectus metus sint ut risus, fusce vel in pellentesque. Nisl rutrum etiam morbi consectetuer tempor magna, aenean nullam nunc id, neque vivamus interdum sociis nulla scelerisque sem, dolor id wisi turpis magna aliquam magna. Risus accumsan hac eget etiam donec sed, senectus erat mattis quam, tempor vel urna occaecat cras, metus urna augue nec at. Et morbi amet dui praesent, nec eu at, ligula ipsum dui sollicitudin, quis nisl massa viverra ligula, mauris fermentum orci arcu enim fringilla. Arcu erat nulla in aenean lacinia ullamcorper, urna ante nam et sagittis, tristique vehicula nibh ipsum vivamus, proin proin. Porta commodo nibh quis libero amet. Taciti dui, sapien consectetuer.\r\n\t\t\t</div>\r\n\t\t</mat-sidenav>\r\n\t\t<button mat-mini-fab class=\"example-fab\" (click)=\"sidenav.toggle()\">\r\n\t\t\t<mat-icon>add</mat-icon>\r\n\t\t</button>\r\n\t\t<div class=\"example-scrolling-content\">\r\n\t\t\tLorem ipsum dolor sit amet, pede a libero aenean phasellus, lectus metus sint ut risus, fusce vel in pellentesque. Nisl rutrum etiam morbi consectetuer tempor magna, aenean nullam nunc id, neque vivamus interdum sociis nulla scelerisque sem, dolor id wisi turpis magna aliquam magna. Risus accumsan hac eget etiam donec sed, senectus erat mattis quam, tempor vel urna occaecat cras, metus urna augue nec at. Et morbi amet dui praesent, nec eu at, ligula ipsum dui sollicitudin, quis nisl massa viverra ligula, mauris fermentum orci arcu enim fringilla. Arcu erat nulla in aenean lacinia ullamcorper, urna ante nam et sagittis, tristique vehicula nibh ipsum vivamus, proin proin. Porta commodo nibh quis libero amet. Taciti dui, sapien consectetuer.\r\n\t\t</div>\r\n\t</mat-sidenav-container>\r\n</div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo-text {\n  font-size: 1.6rem !important;\n  margin-right: 6px;\n  text-decoration: none;\n  color: black; }\n\n.fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.mat-drawer {\n  background-color: transparent; }\n\n.ume-sidenav-fab-container {\n  width: 100%;\n  height: 100%; }\n\n.ume-scrolling-content {\n  overflow: auto;\n  height: 100%; }\n\n.ume-content {\n  padding: 20px;\n  box-sizing: border-box; }\n\n.ume-fab.mat-mini-fab {\n  position: absolute;\n  right: 20px;\n  bottom: 10px; }\n\n.app-content {\n  overflow: auto; }\n\n.ume-sidenav-menu {\n  box-sizing: border-box;\n  padding-top: 20px; }\n\n.ume-sidenav-menu button {\n  width: 100%;\n  text-align: left; }\n\n.box, .container {\n  height: 100%; }\n\nfooter {\n  padding: 4px 10px;\n  background-color: #ffc107; }\n\n#main > article {\n  border-color: #cccc33;\n  background: #dddd88;\n  cursor: pointer; }\n\n#main > nav, #main > aside {\n  border-color: #8888bb;\n  background: #ccccff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.menuOpened = false;
    }
    AppComponent.prototype.onMenu = function (open) {
        if (open === void 0) { open = true; }
        console.log('onMenu!', open);
        this.menuOpened = open;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__framework_framework_module__ = __webpack_require__("../../../../../src/app/framework/framework.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__communities_communities_module__ = __webpack_require__("../../../../../src/app/communities/communities.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__create_create_module__ = __webpack_require__("../../../../../src/app/create/create.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__security_security_module__ = __webpack_require__("../../../../../src/app/security/security.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__settings_settings_module__ = __webpack_require__("../../../../../src/app/settings/settings.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__wipe_wipe_module__ = __webpack_require__("../../../../../src/app/wipe/wipe.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__introduction_introduction_component__ = __webpack_require__("../../../../../src/app/introduction/introduction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__introduction_introduction_component__["a" /* IntroductionComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_3__framework_framework_module__["a" /* FrameworkModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__communities_communities_module__["a" /* CommunitiesModule */],
            __WEBPACK_IMPORTED_MODULE_9__create_create_module__["a" /* CreateModule */],
            __WEBPACK_IMPORTED_MODULE_10__security_security_module__["a" /* SecurityModule */],
            __WEBPACK_IMPORTED_MODULE_11__settings_settings_module__["a" /* SettingsModule */],
            __WEBPACK_IMPORTED_MODULE_12__wipe_wipe_module__["a" /* WipeModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__introduction_introduction_component__ = __webpack_require__("../../../../../src/app/introduction/introduction.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'home', pathMatch: 'full', redirectTo: '' },
    { path: 'introduction', component: __WEBPACK_IMPORTED_MODULE_3__introduction_introduction_component__["a" /* IntroductionComponent */], data: { breadcrumb: 'Introduction' } },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], AppRoutingModule);

// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import {
// 	AppComponent,
// 	CommunitiesComponent,
// 	CreateComponent,
// 	SecurityComponent,
// 	SettingsComponent,
// 	WipeComponent
// } from './';
// const routes: Routes = [
// 	{ path: 'home', pathMatch: 'full', redirectTo: '' },
// 	{ path: '', component: HomeComponent, canActivate: [AuthenticationGuard] },
// 	{
// 		path: 'login',
// 		component: LoginComponent,
// 		children: [
// 			{ path: '', component: UserLoginComponent },
// 			{ path: 'logout/:userId', component: LogoutComponent },
// 			{ path: 'logout', component: LogoutComponent },
// 			{ path: 'not-found', component: UserNotFoundComponent },
// 			{ path: 'microsoft-login', component: MicrosoftLoginComponent },
// 			{ path: 'pin', component: PinResetComponent },
// 			{ path: 'pin/activate', component: PinUpdateComponent },
// 			{ path: 'code', component: CodeGenerateComponent },
// 			{ path: 'code/activate', component: CodeActivateComponent },
// 			{ path: '**', component: CodeActivateComponent },
// 		]
// 	},
// 	{ path: 'load', component: LoadComponent, canActivate: [AuthenticationGuard] },
// 	{ path: 'profile', component: ProfileComponent, canActivate: [AuthenticationGuard] },
// 	{ path: 'search/:text', component: SearchComponent, canActivate: [AuthenticationGuard] },
// 	{ path: 'forbidden/:url', component: ForbiddenComponent, canActivate: [AuthenticationGuard] },
// ];
// @NgModule({
// 	imports: [RouterModule.forRoot(routes)],
// 	exports: [RouterModule],
// })
// export class AppRoutingModule { }
// export const routingComponents = [HomeComponent,
// 	NotFoundComponent,
// 	UserNotFoundComponent,
// 	MicrosoftLoginComponent,
// 	ForbiddenComponent,
// 	LoginComponent,
// 	CodeGenerateComponent,
// 	CodeActivateComponent,
// 	UserLoginComponent,
// 	PinResetComponent,
// 	PinUpdateComponent,
// 	LoadComponent,
// 	ProfileComponent,
// 	LogoutComponent,
// 	SearchComponent];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/communities/communities.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/communities/communities.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Settings</h1>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/communities/communities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommunitiesComponent = (function () {
    function CommunitiesComponent() {
    }
    CommunitiesComponent.prototype.ngOnInit = function () {
    };
    return CommunitiesComponent;
}());
CommunitiesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-communities',
        template: __webpack_require__("../../../../../src/app/communities/communities.component.html"),
        styles: [__webpack_require__("../../../../../src/app/communities/communities.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CommunitiesComponent);

//# sourceMappingURL=communities.component.js.map

/***/ }),

/***/ "../../../../../src/app/communities/communities.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunitiesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__communities_routing__ = __webpack_require__("../../../../../src/app/communities/communities.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/communities/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communities_component__ = __webpack_require__("../../../../../src/app/communities/communities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_framework_module__ = __webpack_require__("../../../../../src/app/framework/framework.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CommunitiesModule = (function () {
    function CommunitiesModule() {
    }
    return CommunitiesModule;
}());
CommunitiesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__communities_routing__["a" /* CommunitiesRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__framework_framework_module__["a" /* FrameworkModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__communities_routing__["a" /* CommunitiesRoutingModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_4__communities_component__["a" /* CommunitiesComponent */]]
    })
], CommunitiesModule);

//# sourceMappingURL=communities.module.js.map

/***/ }),

/***/ "../../../../../src/app/communities/communities.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunitiesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/communities/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__communities_component__ = __webpack_require__("../../../../../src/app/communities/communities.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'communities',
        component: __WEBPACK_IMPORTED_MODULE_3__communities_component__["a" /* CommunitiesComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] }
        ],
    }
];
var CommunitiesRoutingModule = (function () {
    function CommunitiesRoutingModule() {
    }
    return CommunitiesRoutingModule;
}());
CommunitiesRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], CommunitiesRoutingModule);

//# sourceMappingURL=communities.routing.js.map

/***/ }),

/***/ "../../../../../src/app/communities/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/communities/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Home section of settings\r\n</p>\r\n\r\n<button routerLink=\"/about\">About</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/communities/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-communities-home',
        template: __webpack_require__("../../../../../src/app/communities/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/communities/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/create/create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Settings</h1>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateComponent = (function () {
    function CreateComponent() {
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create',
        template: __webpack_require__("../../../../../src/app/create/create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create/create.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CreateComponent);

//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ "../../../../../src/app/create/create.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_routing__ = __webpack_require__("../../../../../src/app/create/create.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/create/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_component__ = __webpack_require__("../../../../../src/app/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_framework_module__ = __webpack_require__("../../../../../src/app/framework/framework.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CreateModule = (function () {
    function CreateModule() {
    }
    return CreateModule;
}());
CreateModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__create_routing__["a" /* CreateRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__framework_framework_module__["a" /* FrameworkModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__create_routing__["a" /* CreateRoutingModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_4__create_component__["a" /* CreateComponent */]]
    })
], CreateModule);

//# sourceMappingURL=create.module.js.map

/***/ }),

/***/ "../../../../../src/app/create/create.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/create/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_component__ = __webpack_require__("../../../../../src/app/create/create.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'create',
        component: __WEBPACK_IMPORTED_MODULE_3__create_component__["a" /* CreateComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] }
        ],
    }
];
var CreateRoutingModule = (function () {
    function CreateRoutingModule() {
    }
    return CreateRoutingModule;
}());
CreateRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], CreateRoutingModule);

//# sourceMappingURL=create.routing.js.map

/***/ }),

/***/ "../../../../../src/app/create/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Home section of settings\r\n</p>\r\n\r\n<button routerLink=\"/about\">About</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/create/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-home',
        template: __webpack_require__("../../../../../src/app/create/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/framework/breadcrumb/breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "<ol *ngIf=\"show\" class=\"breadcrumb\">\r\n\t<li>\r\n\t\t<a routerLink=\"\" class=\"breadcrumb\">Home</a>\r\n\t</li>\r\n\t<li *ngFor=\"let crumb of crumbs\" [ngClass]=\"{'last': crumb.last}\">\r\n\t\t<a [routerLink]=\"[crumb.url]\" *ngIf=\"!crumb.last\">{{ crumb.name }}</a>\r\n\t\t<span *ngIf=\"crumb.last\">{{ crumb.name }}</span>\r\n\t</li>\r\n</ol>\r\n"

/***/ }),

/***/ "../../../../../src/app/framework/breadcrumb/breadcrumb.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".breadcrumb {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n  margin-top: 2px;\n  margin-bottom: 10px; }\n  .breadcrumb li {\n    display: inline-block;\n    margin: 0;\n    padding: 0;\n    padding: 0 0px; }\n  .breadcrumb li::after {\n    content: \"\\E5CC\";\n    font-family: 'Material Icons';\n    font-weight: bold;\n    vertical-align: middle; }\n  .breadcrumb .last::after {\n    content: ''; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/framework/breadcrumb/breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreadcrumbComponent = (function () {
    function BreadcrumbComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        var self = this;
        this.subscription = router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]; })
            .subscribe(function (event) {
            // const root: ActivatedRoute = this.route.root;
            // console.log(root);
            _this.crumbs = _this.generateCrumbs(event);
            console.log(_this.crumbs);
        });
    }
    BreadcrumbComponent.prototype.generateCrumbs = function (event) {
        // We're on the root, hide.
        if (event.url.length === 1) {
            this.show = false;
        }
        else {
            this.show = true;
            var fragments = event.url.split('/');
            var lastFragment = fragments[fragments.length - 1];
            var urls = [];
            for (var _i = 0, fragments_1 = fragments; _i < fragments_1.length; _i++) {
                var fragment = fragments_1[_i];
                if (fragment === '') {
                    continue;
                }
                var url = fragment;
                var name = url.substring(0, 1).toUpperCase() + url.substring(1);
                urls.push({ name: name, url: url, last: (lastFragment === url) });
            }
            return urls;
        }
    };
    BreadcrumbComponent.prototype.ngOnInit = function () {
        this.version = window.ume.version;
    };
    BreadcrumbComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return BreadcrumbComponent;
}());
BreadcrumbComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-breadcrumb',
        template: __webpack_require__("../../../../../src/app/framework/breadcrumb/breadcrumb.component.html"),
        styles: [__webpack_require__("../../../../../src/app/framework/breadcrumb/breadcrumb.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], BreadcrumbComponent);

var _a, _b;
//# sourceMappingURL=breadcrumb.component.js.map

/***/ }),

/***/ "../../../../../src/app/framework/framework.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrameworkModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_module__ = __webpack_require__("../../../../../src/app/framework/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__breadcrumb_breadcrumb_component__ = __webpack_require__("../../../../../src/app/framework/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FrameworkModule = (function () {
    function FrameworkModule() {
    }
    return FrameworkModule;
}());
FrameworkModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__material_module__["a" /* MaterialModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */]]
    })
], FrameworkModule);

//# sourceMappingURL=framework.module.js.map

/***/ }),

/***/ "../../../../../src/app/framework/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export materialModules */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var materialModules = [
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatAutocompleteModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatButtonToggleModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatChipsModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatCommonModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDatepickerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatDialogModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatExpansionModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatFormFieldModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatGridListModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatLineModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatListModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatMenuModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatNativeDateModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatOptionModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatPaginatorModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["J" /* MatSortModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["M" /* MatTabsModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatPseudoCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatRadioModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatRippleModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatSelectModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatSliderModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatSlideToggleModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["I" /* MatSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["K" /* MatStepperModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["L" /* MatTableModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["N" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["O" /* MatTooltipModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* CompatibilityModule */],
];
var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: materialModules.slice(),
        exports: materialModules.slice()
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\r\n    Hi, welcome to üme, the collaborative community!\r\n</h1>\r\n\r\n<p>\r\n    üme is a bit special, it is decentralized and does not require any servers or installations. It runs in your browser, you\r\n    are both the host of the community and a member.\r\n</p>\r\n\r\n<button mat-button routerLink=\"introduction\">Read the introduction...</button>\r\n<br>\r\n<br>\r\n\r\n<p class=\"warning-card\">\r\n    WARNING: THIS IS AN UNRELEASED SOFTWARE. DO NOT USE FOR ANYTHING. WAIT FOR THE RELEASE.\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/introduction/introduction.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/introduction/introduction.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\r\n    Hi, welcome to üme, the collaborative community!\r\n</h1>\r\n\r\n<p>\r\n    üme is a bit special, it is decentralized and does not require any servers or installations. It runs in your browser, you\r\n    are both the host of the community and a member.\r\n</p>\r\n\r\n<p>üme is also special in another way, and that is how it enables community members to be anonymous and secure in their communication.\r\n</p>\r\n\r\n<p>Since üme only runs in your browser, and the browser is inherently insecure, no garantue can be give in regards to your privacy.\r\n    All communication is secured with encryption and digital signatures. It is important that you trust the content in your\r\n    community, so every message is signed by the creator.\r\n</p>\r\n\r\n<p>\r\n    It is important that at least two member is online in the community to ensure that data is sent. The community owner must\r\n    be online for new members to be able to join. Only the community owner's device can verify invitations.\r\n</p>\r\n\r\n<p>üme relies on a gateway for sending messages to all community members, this ensure that individual community members cannot\r\n    discover the IP address of another user. The gateway is open source, but don't use a gateway host you don't trust, as\r\n    the gateway could be modified to log the members IP addresse. Even with a log of IP addresses, all messages communicated\r\n    are encrypted and cannot easily be decrypted. You should combine the use of üme with Tor Project and/or Virtual Private\r\n    Network (VPN).\r\n</p>\r\n\r\n<p>\r\n    All the content of a community is stored in an unencrypted manner in the web browser. If your device is stolen, the information\r\n    can be accessed. There is an option to entirely delete local cache and always restore a community from the other members.\r\n    This is a handy feature to use if accessing a community using someone elses computer or at an internet café.\r\n</p>\r\n\r\n<p>\r\n    The app have a very easy functionality to take local backup copies of your communities, make sure you use them often.\r\n</p>\r\n\r\n<p>\r\n    By using üme, you are accepting that the use of this app is entirely on your own responsbility. No guarantee is given by\r\n    the developers, and we advice you to review the\r\n    <a href=\"https://github.com/sondreb/ume\" target=\"_blank\">üme source code</a> at any time.\r\n</p>\r\n<i class=\"material-icons\">favorite_border</i>\r\n<p>\r\n    <button mat-button routerLink=\"/\">Go back...</button>\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/introduction/introduction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroductionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroductionComponent = (function () {
    function IntroductionComponent() {
    }
    IntroductionComponent.prototype.ngOnInit = function () {
    };
    return IntroductionComponent;
}());
IntroductionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-introduction',
        template: __webpack_require__("../../../../../src/app/introduction/introduction.component.html"),
        styles: [__webpack_require__("../../../../../src/app/introduction/introduction.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IntroductionComponent);

//# sourceMappingURL=introduction.component.js.map

/***/ }),

/***/ "../../../../../src/app/security/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/security/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Home section of settings\r\n</p>\r\n\r\n<button routerLink=\"/about\">About</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/security/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-security-home',
        template: __webpack_require__("../../../../../src/app/security/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/security/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/security/security.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/security/security.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Settings</h1>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/security/security.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecurityComponent = (function () {
    function SecurityComponent() {
    }
    SecurityComponent.prototype.ngOnInit = function () {
    };
    return SecurityComponent;
}());
SecurityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-security',
        template: __webpack_require__("../../../../../src/app/security/security.component.html"),
        styles: [__webpack_require__("../../../../../src/app/security/security.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SecurityComponent);

//# sourceMappingURL=security.component.js.map

/***/ }),

/***/ "../../../../../src/app/security/security.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__security_routing__ = __webpack_require__("../../../../../src/app/security/security.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/security/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__security_component__ = __webpack_require__("../../../../../src/app/security/security.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_framework_module__ = __webpack_require__("../../../../../src/app/framework/framework.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SecurityModule = (function () {
    function SecurityModule() {
    }
    return SecurityModule;
}());
SecurityModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__security_routing__["a" /* SecurityRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__framework_framework_module__["a" /* FrameworkModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__security_routing__["a" /* SecurityRoutingModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_4__security_component__["a" /* SecurityComponent */]]
    })
], SecurityModule);

//# sourceMappingURL=security.module.js.map

/***/ }),

/***/ "../../../../../src/app/security/security.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/security/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__security_component__ = __webpack_require__("../../../../../src/app/security/security.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'security',
        component: __WEBPACK_IMPORTED_MODULE_3__security_component__["a" /* SecurityComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] }
        ],
    }
];
var SecurityRoutingModule = (function () {
    function SecurityRoutingModule() {
    }
    return SecurityRoutingModule;
}());
SecurityRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], SecurityRoutingModule);

//# sourceMappingURL=security.routing.js.map

/***/ }),

/***/ "../../../../../src/app/settings/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>About üme</h1>\r\n\r\n<!-- <button mat-button>Click me!</button>\r\n\r\n<mat-chip-list>\r\n\t<mat-chip>One fish</mat-chip>\r\n\t<mat-chip>Two fish</mat-chip>\r\n\t<mat-chip color=\"primary\" selected=\"true\">Primary fish</mat-chip>\r\n\t<mat-chip color=\"accent\" selected=\"true\">Accent fish</mat-chip>\r\n</mat-chip-list> -->\r\n\r\n<mat-card class=\"about-card\">\r\n\t<mat-card-header>\r\n\t\t<img mat-card-avatar src=\"assets/images/favicon-96x96.png\">\r\n\t\t<mat-card-title>üme</mat-card-title>\r\n\t\t<mat-card-subtitle>Version: {{version}}</mat-card-subtitle>\r\n\t</mat-card-header>\r\n\t<img mat-card-image src=\"assets/images/about.jpg\">\r\n\t<mat-card-content>\r\n\t\t<p>Release photo by\r\n\t\t\t<a href=\"https://unsplash.com/photos/KgjcndVr7tU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Nik MacMillan</a> on\r\n\t\t\t<a href=\"https://unsplash.com/\">Unsplash</a>\r\n\t\t</p>\r\n\t</mat-card-content>\r\n\t<mat-card-actions>\r\n\t\t<button mat-button>DONATE</button>\r\n\t\t<a href=\"https://github.com/sondreb/ume\" target=\"_blank\" mat-button>SOURCE CODE</a>\r\n\t</mat-card-actions>\r\n\r\n\t<mat-card-footer class=\"about-card-footer\">\r\n\t\t<mat-icon>favorite</mat-icon>\r\n\t</mat-card-footer>\r\n</mat-card>\r\n\r\n<!-- <div class=\"about-box\">\r\n\t<img src=\"assets/images/favicon-256x256.png\">\r\n\t<h1>üme</h1>\r\n\t<p>Version: {{version}}</p>\r\n\r\n\t<p>üme is open source:</p><a href=\"https://github.com/sondreb/ume\" target=\"_blank\">https://github.com/sondreb/ume</a>\r\n\r\n</div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/settings/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about-card-footer {\n  text-align: center;\n  line-height: 30px;\n  vertical-align: middle; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.version = window.ume.version;
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/settings/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/settings/about/about.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/gateway-dialog/gateway-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add a gateway</h2>\r\n<mat-dialog-content>\r\n\r\n\t<!-- <form class=\"example-form\">\r\n\t\t<mat-form-field>\r\n\t\t\t<input mdInput placeholder=\"Email\" [formControl]=\"emailFormControl\">\r\n\t\t\t<mat-error *ngIf=\"emailFormControl.hasError('pattern')\">\r\n\t\t\t\tPlease enter a valid email address\r\n\t\t\t</mat-error>\r\n\t\t\t<mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n\t\t\t\tEmail is\r\n\t\t\t\t<strong>required</strong>\r\n\t\t\t</mat-error>\r\n\t\t</mat-form-field>\r\n\t</form> -->\r\n\r\n\t<mat-form-field>\r\n\t\t<input matInput placeholder=\"Name\" [(ngModel)]=\"data.name\">\r\n\t</mat-form-field><br>\r\n\t<mat-form-field>\r\n\t\t<input matInput placeholder=\"URL\" [(ngModel)]=\"data.url\">\r\n\t</mat-form-field>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n\t<button mat-button mat-dialog-close>Cancel</button>\r\n\t<button mat-button color=\"primary\" [mat-dialog-close]=\"true\">Add</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "../../../../../src/app/settings/gateway-dialog/gateway-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GatewayDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var GatewayDialogComponent = (function () {
    function GatewayDialogComponent(dialogRef, data) {
        // emailFormControl = new FormControl('', [
        // 	Validators.required,
        // 	Validators.pattern(EMAIL_REGEX)]);
        this.dialogRef = dialogRef;
        this.data = data;
    }
    return GatewayDialogComponent;
}());
GatewayDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-gateway-dialog',
        template: __webpack_require__("../../../../../src/app/settings/gateway-dialog/gateway-dialog.component.html"),
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatDialogRef */]) === "function" && _a || Object, Object])
], GatewayDialogComponent);

var _a;
//# sourceMappingURL=gateway-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/gateway.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gateway; });
var Gateway = (function () {
    function Gateway() {
    }
    return Gateway;
}());

//# sourceMappingURL=gateway.js.map

/***/ }),

/***/ "../../../../../src/app/settings/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Settings</h1>\r\n\r\n<h2>Gateways</h2>\r\n\r\n<button mat-button (click)=\"onGatewayAdd()\"><mat-icon>add</mat-icon>Add a gateway</button>\r\n\r\n<h2>Storage</h2>\r\n\r\n<p *ngIf=\"quota\">You're using {{usage}} MB of {{quota}} MB of storage.\r\n\t<br>\r\n\t<mat-progress-bar class=\"example-margin\" color=\"primary\" mode=\"determinate\" [value]=\"storageUsed\"></mat-progress-bar>\r\n</p>\r\n\r\n<p *ngIf=\"usage && usage === quota\" class=\"alert-danger\">\r\n\tWarning:\r\n\t<br> Your device have used up available space for the app. You must clear available disk space on your device.\r\n</p>\r\n\r\n<hr>\r\n\r\n<button mat-button routerLink=\"about\">About</button>\r\n<button mat-button routerLink=\"licenses\">Licenses</button>\r\n<a mat-button href=\"https://github.com/sondreb/ume/issues\" target=\"_blank\">Feedback</a>\r\n"

/***/ }),

/***/ "../../../../../src/app/settings/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gateway_dialog_gateway_dialog_component__ = __webpack_require__("../../../../../src/app/settings/gateway-dialog/gateway-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gateway__ = __webpack_require__("../../../../../src/app/settings/gateway.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(dialog) {
        this.dialog = dialog;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Calculate storage every 10 seconds.
        this.interval = setInterval(function () {
            _this.updateUsedSpace();
        }, 10000);
        // Trigger an initial check.
        setTimeout(function () {
            _this.updateUsedSpace();
        });
    };
    HomeComponent.prototype.onGatewayAdd = function () {
        var gateway = new __WEBPACK_IMPORTED_MODULE_3__gateway__["a" /* Gateway */]();
        var dialogConfig = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatDialogConfig */]();
        dialogConfig.data = gateway;
        // dialogConfig.width = '250px';
        // dialogConfig.position = { top: '60px', left: '0' };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__gateway_dialog_gateway_dialog_component__["a" /* GatewayDialogComponent */], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                // Save the gateway.
                console.log(gateway);
            }
        });
    };
    HomeComponent.prototype.updateUsedSpace = function () {
        var self = this;
        var nav = window.navigator;
        if (nav.storage) {
            nav.storage.estimate().then(function (data) {
                self.quota = (data.quota / 1024 / 1024).toFixed(2);
                self.usage = (data.usage / 1024 / 1024).toFixed(2);
                self.storageUsed = self.usage / self.quota * 100;
                console.log(self.storageUsed);
            });
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/settings/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/settings/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialog */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/licenses/licenses.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Open Source Licenses</h1>\r\n\r\n<!-- <button mat-button>Click me!</button>\r\n\r\n<mat-chip-list>\r\n\t<mat-chip>One fish</mat-chip>\r\n\t<mat-chip>Two fish</mat-chip>\r\n\t<mat-chip color=\"primary\" selected=\"true\">Primary fish</mat-chip>\r\n\t<mat-chip color=\"accent\" selected=\"true\">Accent fish</mat-chip>\r\n</mat-chip-list> -->\r\n\r\n<pre>\r\n{{licenses}}\r\n</pre>\r\n\r\n<!-- <mat-card class=\"about-card\">\r\n\t<mat-card-header>\r\n\t\t<img mat-card-avatar src=\"assets/images/favicon-96x96.png\">\r\n\t\t<mat-card-title>üme</mat-card-title>\r\n\t\t<mat-card-subtitle>Version: {{version}}</mat-card-subtitle>\r\n\t</mat-card-header>\r\n\t<img mat-card-image src=\"assets/images/about.jpg\">\r\n\t<mat-card-content>\r\n\t\t<p>Release photo by\r\n\t\t\t<a href=\"https://unsplash.com/photos/KgjcndVr7tU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Nik MacMillan</a> on\r\n\t\t\t<a href=\"https://unsplash.com/\">Unsplash</a>\r\n\t\t</p>\r\n\t</mat-card-content>\r\n\t<mat-card-actions>\r\n\t\t<button mat-button>DONATE</button>\r\n\t\t<a href=\"https://github.com/sondreb/ume\" target=\"_blank\" mat-button>SOURCE CODE</a>\r\n\t</mat-card-actions>\r\n\r\n\t<mat-card-footer class=\"about-card-footer\">\r\n\t\t<mat-icon>favorite</mat-icon>\r\n\t</mat-card-footer>\r\n</mat-card> -->\r\n\r\n<!-- <div class=\"about-box\">\r\n\t<img src=\"assets/images/favicon-256x256.png\">\r\n\t<h1>üme</h1>\r\n\t<p>Version: {{version}}</p>\r\n\r\n\t<p>üme is open source:</p><a href=\"https://github.com/sondreb/ume\" target=\"_blank\">https://github.com/sondreb/ume</a>\r\n\r\n</div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/settings/licenses/licenses.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about-card-footer {\n  text-align: center;\n  line-height: 30px;\n  vertical-align: middle; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/licenses/licenses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LicensesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LicensesComponent = (function () {
    function LicensesComponent(http) {
        this.http = http;
    }
    LicensesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.version = window.ume.version;
        this.http.request('3rdpartylicenses.txt').subscribe(function (response) { return _this.licenses = response.text(); });
    };
    return LicensesComponent;
}());
LicensesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-licenses',
        template: __webpack_require__("../../../../../src/app/settings/licenses/licenses.component.html"),
        styles: [__webpack_require__("../../../../../src/app/settings/licenses/licenses.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], LicensesComponent);

var _a;
//# sourceMappingURL=licenses.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SettingsComponent);

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_routing__ = __webpack_require__("../../../../../src/app/settings/settings.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/settings/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__("../../../../../src/app/settings/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__framework_framework_module__ = __webpack_require__("../../../../../src/app/framework/framework.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__licenses_licenses_component__ = __webpack_require__("../../../../../src/app/settings/licenses/licenses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gateway_dialog_gateway_dialog_component__ = __webpack_require__("../../../../../src/app/settings/gateway-dialog/gateway-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SettingsModule = (function () {
    function SettingsModule() {
    }
    return SettingsModule;
}());
SettingsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__settings_routing__["a" /* SettingsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__framework_framework_module__["a" /* FrameworkModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__settings_routing__["a" /* SettingsRoutingModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_5__settings_component__["a" /* SettingsComponent */], __WEBPACK_IMPORTED_MODULE_7__licenses_licenses_component__["a" /* LicensesComponent */], __WEBPACK_IMPORTED_MODULE_8__gateway_dialog_gateway_dialog_component__["a" /* GatewayDialogComponent */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__gateway_dialog_gateway_dialog_component__["a" /* GatewayDialogComponent */]
        ]
    })
], SettingsModule);

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/settings/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../src/app/settings/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__licenses_licenses_component__ = __webpack_require__("../../../../../src/app/settings/licenses/licenses.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_4__settings_component__["a" /* SettingsComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], data: { breadcrumb: 'Settings' } },
            { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */], data: { breadcrumb: 'About' } },
            { path: 'licenses', component: __WEBPACK_IMPORTED_MODULE_5__licenses_licenses_component__["a" /* LicensesComponent */], data: { breadcrumb: 'Licenses' } }
        ],
    }
];
var SettingsRoutingModule = (function () {
    function SettingsRoutingModule() {
    }
    return SettingsRoutingModule;
}());
SettingsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], SettingsRoutingModule);

//# sourceMappingURL=settings.routing.js.map

/***/ }),

/***/ "../../../../../src/app/wipe/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wipe/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<i class=\"material-icons float-right\">delete_forever</i>\r\n<i class=\"material-icons float-right action\" data-ume-page=\"home\">chevron_left</i>\r\n<h1>Clear Device</h1>\r\n<p>\r\n\tTo protect your privacy, you can clear this device of all community data.\r\n</p>\r\n<p>\r\n\tBEWARE: If you clear the device, all your keys will be lost. Make sure you have a backup of your keys or remember your pass phrase.\r\n</p>\r\n<p>\r\n\t<i class=\"material-icons\">cloud_download</i> Backup first\r\n</p>\r\n<p>\r\n\tThe data wipe removes data from your browser cache. If the device is stolen, the data can potentially still be retrieved by recovering deleted files on the harddrive. After you wipe all data, restart the browser, go back to üme and verify data is wiped.\r\n</p>\r\n<p>\r\n\t<i class=\"material-icons\">delete_forever</i> Wipe all data on device\r\n</p>\r\n<p class=\"warning-card hidden\" id=\"wipe-success\">\r\n\tSuccess. All data was wiped. Close the window or tab to exit üme.\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/wipe/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-wipe-home',
        template: __webpack_require__("../../../../../src/app/wipe/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wipe/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/wipe/wipe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wipe/wipe.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Settings</h1>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/wipe/wipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WipeComponent = (function () {
    function WipeComponent() {
    }
    WipeComponent.prototype.ngOnInit = function () {
    };
    return WipeComponent;
}());
WipeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-wipe',
        template: __webpack_require__("../../../../../src/app/wipe/wipe.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wipe/wipe.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WipeComponent);

//# sourceMappingURL=wipe.component.js.map

/***/ }),

/***/ "../../../../../src/app/wipe/wipe.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wipe_routing__ = __webpack_require__("../../../../../src/app/wipe/wipe.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/wipe/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wipe_component__ = __webpack_require__("../../../../../src/app/wipe/wipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__framework_framework_module__ = __webpack_require__("../../../../../src/app/framework/framework.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var WipeModule = (function () {
    function WipeModule() {
    }
    return WipeModule;
}());
WipeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__wipe_routing__["a" /* WipeRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__framework_framework_module__["a" /* FrameworkModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__wipe_routing__["a" /* WipeRoutingModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_4__wipe_component__["a" /* WipeComponent */]]
    })
], WipeModule);

//# sourceMappingURL=wipe.module.js.map

/***/ }),

/***/ "../../../../../src/app/wipe/wipe.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WipeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/wipe/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wipe_component__ = __webpack_require__("../../../../../src/app/wipe/wipe.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'wipe',
        component: __WEBPACK_IMPORTED_MODULE_3__wipe_component__["a" /* WipeComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] }
        ],
    }
];
var WipeRoutingModule = (function () {
    function WipeRoutingModule() {
    }
    return WipeRoutingModule;
}());
WipeRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], WipeRoutingModule);

//# sourceMappingURL=wipe.routing.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    version: '0.0.1'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
else {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
var ume = {
    version: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].version
};
window.ume = ume;
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map