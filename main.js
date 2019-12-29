(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./projects/core/src/lib/auth/auth-public.service.ts":
/*!***********************************************************!*\
  !*** ./projects/core/src/lib/auth/auth-public.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthEvent, AuthPublicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEvent", function() { return AuthEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPublicService", function() { return AuthPublicService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthEvent;
(function (AuthEvent) {
    AuthEvent["TRY_LOGIN"] = "TRY_LOGIN";
    AuthEvent["LOGIN_FAILED"] = "LOGIN_FAILED";
    AuthEvent["LOGIN_SUCCESS"] = "LOGIN_SUCCESS";
    AuthEvent["REVOKE"] = "REVOKE";
    AuthEvent["SIGNUP_SUCCESS"] = "SIGNUP_SUCCESS";
})(AuthEvent || (AuthEvent = {}));
var AuthPublicService = /** @class */ (function () {
    function AuthPublicService() {
        this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.translations = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AuthPublicService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function AuthPublicService_Factory() { return new AuthPublicService(); }, token: AuthPublicService, providedIn: "root" });
    return AuthPublicService;
}());



/***/ }),

/***/ "./projects/core/src/lib/auth/facebook.service.ts":
/*!********************************************************!*\
  !*** ./projects/core/src/lib/auth/facebook.service.ts ***!
  \********************************************************/
/*! exports provided: FacebookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookService", function() { return FacebookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/core/node_modules/tslib/tslib.es6.js");

var FacebookService = /** @class */ (function () {
    function FacebookService(http) {
        this.http = http;
        this.facebookUser = {
            name: null
        };
    }
    FacebookService.prototype.getGraphAPI = function (user, token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://graph.facebook.com/v3.0/" + user + "?access_token=" + token;
                        return [4 /*yield*/, this.http.get(url).toPromise()];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    FacebookService.prototype.IsLoggedInByFacebook = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                FB.getLoginStatus(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var data;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(response.status === 'connected')) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.getGraphAPI(response.authResponse.userID, response.authResponse.accessToken)];
                            case 1:
                                data = _a.sent();
                                if (data && data.name) {
                                    this.facebookUser.name = data.name;
                                }
                                if (data && data.email) {
                                    this.facebookUser.email = data.email;
                                }
                                this.latestRespone = response;
                                resolve(true);
                                return [3 /*break*/, 3];
                            case 2:
                                resolve(false);
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
            }, 1000);
        });
    };
    /**
     * Returns useful information that you can use to authenticate your third party software.
     */
    FacebookService.prototype.GetUserAuthenticationInformation = function () {
        return {
            facebook_id: this.latestRespone.authResponse.userID,
            facebook_token: this.latestRespone.authResponse.accessToken
        };
    };
    return FacebookService;
}());



/***/ }),

/***/ "./projects/core/src/lib/auth/forgot-password/forgot-password.component.ts":
/*!*********************************************************************************!*\
  !*** ./projects/core/src/lib/auth/forgot-password/forgot-password.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "./projects/core/src/lib/auth/shared.ts");



var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(http, config) {
        this.http = http;
        this.config = config;
        this.url = '';
        this.email = '';
        this.response = null;
        this.isRequesting = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.url = this.config.API('/api/forget-password');
    };
    ForgotPasswordComponent.prototype.requestPassword = function (e) {
        e.preventDefault();
        this.forgetPasswordHttp({ email: this.email });
    };
    ForgotPasswordComponent.prototype.error = function (fieldName) {
        if (!this.response || !this.response.error || !this.response.error.errors) {
            return '';
        }
        var error = this.response.error.errors.find(function (x) { return x.location === fieldName; });
        return error ? error.message : '';
    };
    ForgotPasswordComponent.prototype.forgetPasswordHttp = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, response_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.RequestPasswordReset(data.email)];
                    case 1:
                        response = _a.sent();
                        this.response = response;
                        this.isRequesting = false;
                        this.onResetSuccess(response);
                        return [3 /*break*/, 3];
                    case 2:
                        response_1 = _a.sent();
                        this.isRequesting = false;
                        if (response_1.name === 'HttpErrorResponse') {
                            this.response = Object(_shared__WEBPACK_IMPORTED_MODULE_2__["GetNetworkError"])();
                            return [2 /*return*/, false];
                        }
                        this.response = response_1;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ForgotPasswordComponent.prototype.onResetSuccess = function (response) {
        if (response === void 0) { response = null; }
    };
    ForgotPasswordComponent.prototype.RequestPasswordReset = function (username) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ref, response, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ref = this.http.post(this.url, { username: username }).toPromise();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ref];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 3:
                        error_1 = _a.sent();
                        if (error_1.name === 'HttpErrorResponse') {
                            return [2 /*return*/, Object(_shared__WEBPACK_IMPORTED_MODULE_2__["GetNetworkError"])()];
                        }
                        return [2 /*return*/, error_1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./projects/core/src/lib/auth/login-form/login-form.component.ngfactory.js":
/*!*********************************************************************************!*\
  !*** ./projects/core/src/lib/auth/login-form/login-form.component.ngfactory.js ***!
  \*********************************************************************************/
/*! exports provided: RenderType_LoginFormComponent, View_LoginFormComponent_0, View_LoginFormComponent_Host_0, LoginFormComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LoginFormComponent", function() { return RenderType_LoginFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoginFormComponent_0", function() { return View_LoginFormComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoginFormComponent_Host_0", function() { return View_LoginFormComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponentNgFactory", function() { return LoginFormComponentNgFactory; });
/* harmony import */ var _login_form_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-form.component.scss.shim.ngstyle */ "./projects/core/src/lib/auth/login-form/login-form.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng5_basic_components_progress_line_progress_line_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ng5-basic/components/progress-line/progress-line.component.ngfactory */ "./projects/core/src/lib/ng5-basic/components/progress-line/progress-line.component.ngfactory.js");
/* harmony import */ var _ng5_basic_components_progress_line_progress_line_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ng5-basic/components/progress-line/progress-line.component */ "./projects/core/src/lib/ng5-basic/components/progress-line/progress-line.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../t.pipe */ "./projects/core/src/lib/t.pipe.ts");
/* harmony import */ var _ng5_basic_services_configuration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ng5-basic/services/configuration.service */ "./projects/core/src/lib/ng5-basic/services/configuration.service.ts");
/* harmony import */ var _node_modules_ngx_toasta_ngx_toasta_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../node_modules/ngx-toasta/ngx-toasta.ngfactory */ "./projects/core/node_modules/ngx-toasta/ngx-toasta.ngfactory.js");
/* harmony import */ var ngx_toasta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toasta */ "./projects/core/node_modules/ngx-toasta/fesm5/ngx-toasta.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login-form.component */ "./projects/core/src/lib/auth/login-form/login-form.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _facebook_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../facebook.service */ "./projects/core/src/lib/auth/facebook.service.ts");
/* harmony import */ var _auth_public_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../auth-public.service */ "./projects/core/src/lib/auth/auth-public.service.ts");
/* harmony import */ var _ng5_basic_services_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ng5-basic/services/user.service */ "./projects/core/src/lib/ng5-basic/services/user.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















var styles_LoginFormComponent = [_login_form_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LoginFormComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LoginFormComponent, data: {} });

function View_LoginFormComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-progress-line", [], null, null, null, _ng5_basic_components_progress_line_progress_line_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ProgressLineComponent_0"], _ng5_basic_components_progress_line_progress_line_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ProgressLineComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _ng5_basic_components_progress_line_progress_line_component__WEBPACK_IMPORTED_MODULE_3__["ProgressLineComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_LoginFormComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error-message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.error(_co.response, "email"); _ck(_v, 1, 0, currVal_0); }); }
function View_LoginFormComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error-message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.error(_co.response, "password"); _ck(_v, 1, 0, currVal_0); }); }
function View_LoginFormComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "button", [["class", "btn-facebook btn btn-primary btn-block app-login-facebook-submit"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.loginFacebook() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-facebook"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "span", [["translate", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 8536064, null, 0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { translate: [0, "translate"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var currVal_0 = ""; _ck(_v, 3, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).transform("Login by facebook")); _ck(_v, 4, 0, currVal_1); }); }
function View_LoginFormComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "button", [["class", "btn-facebook btn btn-primary btn-block app-login-facebook-continue"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.continueWithFacebook() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "i", [["class", "fa fa-facebook"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "span", [["translate", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 8536064, null, 0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { translate: [0, "translate"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var currVal_0 = ""; _ck(_v, 3, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).transform("Continue with facebook")); _ck(_v, 4, 0, currVal_1); }); }
function View_LoginFormComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginFormComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginFormComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.isLoggedInByFacebook; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.isLoggedInByFacebook; _ck(_v, 4, 0, currVal_1); }, null); }
function View_LoginFormComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginFormComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_0 = (_v.context.$implicit.type === "facebook"); _ck(_v, 2, 0, currVal_0); }, null); }
function View_LoginFormComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "sso-description"], ["translate", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 8536064, null, 0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { translate: [0, "translate"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginFormComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = ""; _ck(_v, 2, 0, currVal_0); var currVal_2 = _co.alternativeLogins; _ck(_v, 6, 0, currVal_2); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).transform("or alternatively login with:")); _ck(_v, 3, 0, currVal_1); }); }
function View_LoginFormComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _t_pipe__WEBPACK_IMPORTED_MODULE_6__["TPipe"], [_ng5_basic_services_configuration_service__WEBPACK_IMPORTED_MODULE_7__["ConfigurationService"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "ngx-toasta", [], null, null, null, _node_modules_ngx_toasta_ngx_toasta_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_ToastaComponent_0"], _node_modules_ngx_toasta_ngx_toasta_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_ToastaComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, ngx_toasta__WEBPACK_IMPORTED_MODULE_9__["ToastaComponent"], [ngx_toasta__WEBPACK_IMPORTED_MODULE_9__["ToastaConfig"], ngx_toasta__WEBPACK_IMPORTED_MODULE_9__["ToastaService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginFormComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 67, "div", [["class", "container-login"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 66, "div", [["class", "wrap-login"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 65, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 6, "div", [["class", "login-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](15, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](18, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 13, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 3, "label", [["translate", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 8536064, null, 0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { translate: [0, "translate"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](23, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 5, "input", [["class", "form-control app-login-form-email"], ["name", "email"], ["type", "email"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.form.email = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 0, "span", [["class", "focus-input"], ["data-placeholder", "Email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginFormComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 17, "div", [["class", "form-group"], ["style", "position: relative;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 2, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](35, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](36, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 5, "input", [["class", "app-login-form-password form-control "], ["name", "password"]], [[8, "type", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.form.password = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 0, "span", [["class", "focus-input"], ["data-placeholder", "Password"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginFormComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 4, "span", [["class", "btn-show-pass"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.togglePassword() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 3, "i", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](50, { "icon-visibility_off": 0, "icon-visibility": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 6, "div", [["class", "form-group login-button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 3, "button", [["class", "btn btn-primary btn-block app-login-form-submit"], ["translate", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.login($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 8536064, null, 0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { translate: [0, "translate"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](54, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](55, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginFormComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 14, "div", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 3, "span", [["translate", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 8536064, null, 0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { translate: [0, "translate"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](61, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](62, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 3, "a", [["class", "app-signup-button"], ["routerLink", "/signup"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](65, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](66, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 4, "a", [["class", "app-forget-password-link"], ["routerLink", "/forgot-password"], ["translate", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 8536064, null, 0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { translate: [0, "translate"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](71, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](72, 1)], function (_ck, _v) { var _co = _v.component; _ck(_v, 2, 0); var currVal_0 = _co.isRequesting; _ck(_v, 4, 0, currVal_0); var currVal_10 = ""; _ck(_v, 21, 0, currVal_10); var currVal_19 = "email"; var currVal_20 = _co.form.email; _ck(_v, 27, 0, currVal_19, currVal_20); var currVal_21 = _co.error(_co.response, "email"); _ck(_v, 32, 0, currVal_21); var currVal_31 = "password"; var currVal_32 = _co.form.password; _ck(_v, 40, 0, currVal_31, currVal_32); var currVal_33 = _co.error(_co.response, "password"); _ck(_v, 45, 0, currVal_33); var currVal_34 = _ck(_v, 50, 0, _co.passwordVisibility, !_co.passwordVisibility); _ck(_v, 49, 0, currVal_34); var currVal_35 = ""; _ck(_v, 53, 0, currVal_35); var currVal_37 = _co.alternativeLogins.length; _ck(_v, 57, 0, currVal_37); var currVal_38 = ""; _ck(_v, 60, 0, currVal_38); var currVal_42 = "/signup"; _ck(_v, 64, 0, currVal_42); var currVal_46 = ""; _ck(_v, 69, 0, currVal_46); var currVal_47 = "/forgot-password"; _ck(_v, 70, 0, currVal_47); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassPending; _ck(_v, 7, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 0, _ck(_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "auth_login_title")); _ck(_v, 14, 0, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 17, 0, _ck(_v, 18, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "auth_login_description")); _ck(_v, 17, 0, currVal_9); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 22, 0, _ck(_v, 23, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "auth_login_email_label")); _ck(_v, 22, 0, currVal_11); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassUntouched; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassTouched; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassPristine; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassDirty; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassValid; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassInvalid; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ngClassPending; _ck(_v, 24, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 35, 0, _ck(_v, 36, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "auth_login_password_label")); _ck(_v, 35, 0, currVal_22); var currVal_23 = (_co.passwordVisibility ? "text" : "password"); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).ngClassUntouched; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).ngClassTouched; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).ngClassPristine; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).ngClassDirty; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).ngClassValid; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).ngClassInvalid; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).ngClassPending; _ck(_v, 37, 0, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30); var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 54, 0, _ck(_v, 55, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "auth_login_submit")); _ck(_v, 54, 0, currVal_36); var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 61, 0, _ck(_v, 62, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "auth_create_account_button")); _ck(_v, 61, 0, currVal_39); var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).target; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 64).href; _ck(_v, 63, 0, currVal_40, currVal_41); var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 65, 0, _ck(_v, 66, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "auth_login_signup_link")); _ck(_v, 65, 0, currVal_43); var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).target; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).href; _ck(_v, 68, 0, currVal_44, currVal_45); var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 71, 0, _ck(_v, 72, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "auth_login_forgot_password")); _ck(_v, 71, 0, currVal_48); }); }
function View_LoginFormComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_LoginFormComponent_0, RenderType_LoginFormComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _login_form_component__WEBPACK_IMPORTED_MODULE_12__["LoginFormComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], _facebook_service__WEBPACK_IMPORTED_MODULE_14__["FacebookService"], _ng5_basic_services_configuration_service__WEBPACK_IMPORTED_MODULE_7__["ConfigurationService"], _auth_public_service__WEBPACK_IMPORTED_MODULE_15__["AuthPublicService"], _ng5_basic_services_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"], ngx_toasta__WEBPACK_IMPORTED_MODULE_9__["ToastaService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LoginFormComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-component", _login_form_component__WEBPACK_IMPORTED_MODULE_12__["LoginFormComponent"], View_LoginFormComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./projects/core/src/lib/auth/login-form/login-form.component.scss.shim.ngstyle.js":
/*!*****************************************************************************************!*\
  !*** ./projects/core/src/lib/auth/login-form/login-form.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".material-input[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  border-bottom: 1px solid #adadad;\n  margin-bottom: 35px;\n}\n.material-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #555555;\n  line-height: 1.2;\n  display: block;\n  width: 100%;\n  height: 45px;\n  background: transparent;\n  padding: 0 5px;\n  outline: none;\n  border: none;\n  overflow: visible;\n}\n.material-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .focus-input[_ngcontent-%COMP%]:after {\n  top: -10px;\n  font-size: 12px;\n  color: #aaa;\n}\n.material-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .focus-input[_ngcontent-%COMP%]:before {\n  width: 100%;\n}\n.material-input[_ngcontent-%COMP%]   input.focused[_ngcontent-%COMP%]    + .focus-input[_ngcontent-%COMP%]:after {\n  top: -10px;\n  font-size: 12px;\n  color: #aaa;\n}\n.material-input[_ngcontent-%COMP%]   input.focused[_ngcontent-%COMP%]    + .focus-input[_ngcontent-%COMP%]:before {\n  width: 100%;\n}\n.material-input[_ngcontent-%COMP%]   .focus-input[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n.material-input[_ngcontent-%COMP%]   .focus-input[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  transition: all 0.4s;\n  background: #6a7dfe;\n  background: linear-gradient(to left, #21d4fd, #b721ff);\n}\n.material-input[_ngcontent-%COMP%]   .focus-input[_ngcontent-%COMP%]:after {\n  font-size: 15px;\n  color: #999999;\n  line-height: 1.2;\n  content: attr(data-placeholder);\n  display: block;\n  width: 100%;\n  position: absolute;\n  top: 16px;\n  left: 0px;\n  padding-left: 5px;\n  transition: all 0.4s;\n}\n.material-input[_ngcontent-%COMP%]   .btn-show-pass[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #999999;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  height: 100%;\n  top: 0;\n  right: 0;\n  padding-right: 5px;\n  cursor: pointer;\n  transition: all 0.4s;\n}\n.material-input[_ngcontent-%COMP%]   .btn-show-pass[_ngcontent-%COMP%]:hover {\n  color: #6a7dfe;\n  color: -webkit-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -o-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -moz-linear-gradient(to left, #21d4fd, #b721ff);\n  color: linear-gradient(to left, #21d4fd, #b721ff);\n}\n.material-input[_ngcontent-%COMP%]   .btn-show-pass.active[_ngcontent-%COMP%] {\n  color: #6a7dfe;\n  color: -webkit-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -o-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -moz-linear-gradient(to left, #21d4fd, #b721ff);\n  color: linear-gradient(to left, #21d4fd, #b721ff);\n}\n.error-message[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #ff8f00;\n  position: absolute;\n  margin-top: 5px;\n  text-transform: capitalize;\n  -webkit-animation: fadein 0.5s;\n  \n  \n  \n  \n  animation: fadein 0.5s;\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n\n.container-login[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  background: #f2f2f2;\n}\n.container-login[_ngcontent-%COMP%]   .wrap-login[_ngcontent-%COMP%] {\n  width: 390px;\n  background: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  padding: 45px 45px 33px 45px;\n  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -o-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -ms-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 767px) {\n  .container-login[_ngcontent-%COMP%]   .wrap-login[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n}\n.container-login[_ngcontent-%COMP%]   .wrap-login[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%] {\n  font-size: 23px;\n  padding-bottom: 10px;\n}\n.container-login[_ngcontent-%COMP%]   .wrap-login[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n}\n.container-login[_ngcontent-%COMP%]   .wrap-login[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.container-login[_ngcontent-%COMP%]   .wrap-login[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%] {\n  margin: 25px 0;\n}\n.container-login[_ngcontent-%COMP%]   .wrap-login[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  padding-right: 25px;\n  padding-left: 25px;\n}\n.container-login[_ngcontent-%COMP%]   .wrap-login[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-facebook[_ngcontent-%COMP%] {\n  background: #4267b2;\n}\n.btn-facebook[_ngcontent-%COMP%]   .fa-facebook[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 3px;\n}\n.container-login[_ngcontent-%COMP%] {\n  background-image: url(/assets/images/wallpaper.jpg);\n  background-position: center;\n}\n.sso-description[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-style: italic;\n  margin: 10px auto;\n  display: block;\n}\n.btn-show-pass[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 56%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL2NvcmUvbm9kZV9tb2R1bGVzL3Nhc3MtbWF0ZXJpYWwtY29sb3JzL3Nhc3MvX3Nhc3MtbWF0ZXJpYWwtY29sb3JzLWZ1bmN0aW9uLnNjc3MiLCIvVXNlcnMvbGVnaW9uL25nLWRhc2hib2FyZC9wcm9qZWN0cy9jb3JlL3NyYy9saWIvYXV0aC9jb21tb24uc2NzcyIsInByb2plY3RzL2NvcmUvc3JjL2xpYi9hdXRoL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9uZzUtYmFzaWMvc2Nzcy9fdmFycy5zY3NzIiwiL1VzZXJzL2xlZ2lvbi9uZy1kYXNoYm9hcmQvcHJvamVjdHMvY29yZS9zcmMvbGliL25nNS1iYXNpYy9zY3NzL19tZWRpYXMuc2NzcyIsIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9hdXRoL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7Ozs7Ozs7O0VBQUE7QUNDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUNTRjtBRFJFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNVSjtBRFJNO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDVVI7QURSTTtFQUNFLFdBQUE7QUNVUjtBRE5NO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDUVI7QUROTTtFQUNFLFdBQUE7QUNRUjtBREpFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG9CQUFBO0FDTUo7QURMSTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBS0Esb0JBQUE7RUFFQSxtQkFBQTtFQUlBLHNEQUFBO0FDS047QURISTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFFQSwrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBS0Esb0JBQUE7QUNHTjtBRENFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFNQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUlBLG9CQUFBO0FDQUo7QURDSTtFQUNFLGNBQUE7RUFDQSx5REFBQTtFQUNBLG9EQUFBO0VBQ0Esc0RBQUE7RUFDQSxpREFBQTtBQ0NOO0FEQ0k7RUFDRSxjQUFBO0VBQ0EseURBQUE7RUFDQSxvREFBQTtFQUNBLHNEQUFBO0VBQ0EsaURBQUE7QUNDTjtBRElBO0VBQ0UsZUFBQTtFQUNBLGNFckZnQjtFRnNGaEIsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUFnQyxvQ0FBQTtFQUNILGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUN4QixzQkFBQTtBQ0dQO0FEQUE7RUFDRTtJQUFPLFVBQUE7RUNJUDtFREhBO0lBQU8sVUFBQTtFQ01QO0FBQ0Y7QURKQSxpQkFBQTtBQU1BLG9DQUFBO0FBQ0E7RUFDRTtJQUFPLFVBQUE7RUNVUDtFRFRBO0lBQU8sVUFBQTtFQ1lQO0FBQ0Y7QURWQSxzQkFBQTtBQU1BLGlCQUFBO0FBS0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFLQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNtQkY7QURsQkU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2Q0FBQTtFQUNBLGtEQUFBO0VBQ0EscURBQUE7RUFDQSxnREFBQTtFQUNBLGlEQUFBO0FDb0JKO0FFbkxFO0VIcUpBO0lBYUksYUFBQTtFQ3FCSjtBQUNGO0FEcEJJO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FDc0JOO0FEckJNO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQ3VCUjtBRHJCTTtFQUNFLGVBQUE7QUN1QlI7QURwQkk7RUFDRSxjQUFBO0FDc0JOO0FEckJNO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDdUJSO0FEcEJJO0VBQ0UsZUFBQTtBQ3NCTjtBRzNPQTtFQUNFLG1CQUFBO0FIOE9GO0FHN09FO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUgrT0o7QUczT0E7RUFDRSxtREFBQTtFQUNBLDJCQUFBO0FIOE9GO0FHNU9BO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FIK09GO0FHN09BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBSGdQRiIsImZpbGUiOiJwcm9qZWN0cy9jb3JlL3NyYy9saWIvYXV0aC9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzYXNzLW1hdGVyaWFsLWNvbG9ycy1tYXAnO1xuLyoqXG4gKiBSZXRyaWV2ZXMgYSBjb2xvciB2YWx1ZSBmcm9tIHRoZSAkbWF0ZXJpYWwtY29sb3JzIFNhc3MgbWFwXG4gKiBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vbmlsc2thc3BlcnNzb24vR29vZ2xlLU1hdGVyaWFsLVVJLUNvbG9yLVBhbGV0dGUvXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3ItbmFtZSAgICAgICAgICAgICAtIHF1b3RlZCwgbG93ZXItY2FzZSwgZGFzaGVyaXplZCBjb2xvclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lIChlLmcuICdwaW5rJywgJ2FtYmVyJylcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29sb3ItdmFyaWFudD0nNTAwJ10gIC0gcXVvdGVkLCBsb3dlcmNhc2UgY29sb3IgdmFyaWFudCAoZS5nLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMjAwJywgJ2ExMDAnKVxuICovXG5AZnVuY3Rpb24gbWF0ZXJpYWwtY29sb3IoJGNvbG9yLW5hbWUsICRjb2xvci12YXJpYW50OiAnNTAwJykge1xuICAkY29sb3I6IG1hcC1nZXQobWFwLWdldCgkbWF0ZXJpYWwtY29sb3JzLCAkY29sb3ItbmFtZSksJGNvbG9yLXZhcmlhbnQpO1xuICBAaWYgJGNvbG9yIHtcbiAgICBAcmV0dXJuICRjb2xvcjtcbiAgfSBAZWxzZSB7XG4gICAgLy8gTGlic2FzcyBzdGlsbCBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCBAZXJyb3JcbiAgICBAd2FybiBcIj0+IEVSUk9SOiBDT0xPUiBOT1QgRk9VTkQhIDw9IHwgWW91ciAkY29sb3ItbmFtZSwgJGNvbG9yLXZhcmlhbnQgY29tYmluYXRpb24gZGlkIG5vdCBtYXRjaCBhbnkgb2YgdGhlIHZhbHVlcyBpbiB0aGUgJG1hdGVyaWFsLWNvbG9ycyBtYXAuXCI7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi9uZzUtYmFzaWMvc2Nzcy9pbmplY3RzXCI7XG5cbi5tYXRlcmlhbC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWRhZGFkO1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjNTU1NTU1O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICY6Zm9jdXMgKyAuZm9jdXMtaW5wdXQge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICNhYWE7XG4gICAgICB9XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgICAmLmZvY3VzZWQgKyAuZm9jdXMtaW5wdXQge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICNhYWE7XG4gICAgICB9XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuZm9jdXMtaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogLTJweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGhlaWdodDogMnB4O1xuXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG5cbiAgICAgIGJhY2tncm91bmQ6ICM2YTdkZmU7XG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcblxuICAgICAgY29udGVudDogYXR0cihkYXRhLXBsYWNlaG9sZGVyKTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDE2cHg7XG4gICAgICBsZWZ0OiAwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcblxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIH1cbiAgfVxuXG4gIC5idG4tc2hvdy1wYXNzIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICM5OTk5OTk7XG5cbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICM2YTdkZmU7XG4gICAgICBjb2xvcjogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gICAgICBjb2xvcjogLW8tbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgY29sb3I6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgY29sb3I6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgICB9XG4gICAgJi5hY3RpdmUge1xuICAgICAgY29sb3I6ICM2YTdkZmU7XG4gICAgICBjb2xvcjogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gICAgICBjb2xvcjogLW8tbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgY29sb3I6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgY29sb3I6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgICB9XG4gIH1cbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAkZXJyb3ItY29sb3ItODAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41czsgLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xuICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDAuNXM7IC8qIEZpcmVmb3ggPCAxNiAqL1xuICAgLW1zLWFuaW1hdGlvbjogZmFkZWluIDAuNXM7IC8qIEludGVybmV0IEV4cGxvcmVyICovXG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMC41czsgLyogT3BlcmEgPCAxMi4xICovXG4gICAgICAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cztcbn1cblxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICB0byAgIHsgb3BhY2l0eTogMTsgfVxufVxuXG4vKiBGaXJlZm94IDwgMTYgKi9cbkAtbW96LWtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICB0byAgIHsgb3BhY2l0eTogMTsgfVxufVxuXG4vKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8gICB7IG9wYWNpdHk6IDE7IH1cbn1cblxuLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cbkAtbXMta2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gIHRvICAgeyBvcGFjaXR5OiAxOyB9XG59XG5cbi8qIE9wZXJhIDwgMTIuMSAqL1xuQC1vLWtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICB0byAgIHsgb3BhY2l0eTogMTsgfVxufVxuLmNvbnRhaW5lci1sb2dpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAud3JhcC1sb2dpbiB7XG4gICAgd2lkdGg6IDM5MHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogNDVweCA0NXB4IDMzcHggNDVweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLW8tYm94LXNoYWRvdzogMCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIC1tcy1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbiAgICBAaW5jbHVkZSBwaG9uZSgpIHtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgfVxuICAgIC5sb2dpbi1oZWFkZXIge1xuICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmxvZ2luLWJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDI1cHggMDtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgfVxuICAgIH1cbiAgICAubWVzc2FnZSB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIFJldHJpZXZlcyBhIGNvbG9yIHZhbHVlIGZyb20gdGhlICRtYXRlcmlhbC1jb2xvcnMgU2FzcyBtYXBcbiAqIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9uaWxza2FzcGVyc3Nvbi9Hb29nbGUtTWF0ZXJpYWwtVUktQ29sb3ItUGFsZXR0ZS9cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvci1uYW1lICAgICAgICAgICAgIC0gcXVvdGVkLCBsb3dlci1jYXNlLCBkYXNoZXJpemVkIGNvbG9yXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgKGUuZy4gJ3BpbmsnLCAnYW1iZXInKVxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2xvci12YXJpYW50PSc1MDAnXSAgLSBxdW90ZWQsIGxvd2VyY2FzZSBjb2xvciB2YXJpYW50IChlLmcuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcyMDAnLCAnYTEwMCcpXG4gKi9cbi5tYXRlcmlhbC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWRhZGFkO1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuLm1hdGVyaWFsLWlucHV0IGlucHV0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzU1NTU1NTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwIDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbi5tYXRlcmlhbC1pbnB1dCBpbnB1dDpmb2N1cyArIC5mb2N1cy1pbnB1dDphZnRlciB7XG4gIHRvcDogLTEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNhYWE7XG59XG4ubWF0ZXJpYWwtaW5wdXQgaW5wdXQ6Zm9jdXMgKyAuZm9jdXMtaW5wdXQ6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWF0ZXJpYWwtaW5wdXQgaW5wdXQuZm9jdXNlZCArIC5mb2N1cy1pbnB1dDphZnRlciB7XG4gIHRvcDogLTEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNhYWE7XG59XG4ubWF0ZXJpYWwtaW5wdXQgaW5wdXQuZm9jdXNlZCArIC5mb2N1cy1pbnB1dDpiZWZvcmUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXRlcmlhbC1pbnB1dCAuZm9jdXMtaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLm1hdGVyaWFsLWlucHV0IC5mb2N1cy1pbnB1dDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0ycHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICBiYWNrZ3JvdW5kOiAjNmE3ZGZlO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xufVxuLm1hdGVyaWFsLWlucHV0IC5mb2N1cy1pbnB1dDphZnRlciB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1wbGFjZWhvbGRlcik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIGxlZnQ6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cbi5tYXRlcmlhbC1pbnB1dCAuYnRuLXNob3ctcGFzcyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG4ubWF0ZXJpYWwtaW5wdXQgLmJ0bi1zaG93LXBhc3M6aG92ZXIge1xuICBjb2xvcjogIzZhN2RmZTtcbiAgY29sb3I6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICBjb2xvcjogLW8tbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICBjb2xvcjogLW1vei1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gIGNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG59XG4ubWF0ZXJpYWwtaW5wdXQgLmJ0bi1zaG93LXBhc3MuYWN0aXZlIHtcbiAgY29sb3I6ICM2YTdkZmU7XG4gIGNvbG9yOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgY29sb3I6IC1vLWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgY29sb3I6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICBjb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNmZjhmMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzO1xuICAvKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMC41cztcbiAgLyogRmlyZWZveCA8IDE2ICovXG4gIC1tcy1hbmltYXRpb246IGZhZGVpbiAwLjVzO1xuICAvKiBJbnRlcm5ldCBFeHBsb3JlciAqL1xuICAtby1hbmltYXRpb246IGZhZGVpbiAwLjVzO1xuICAvKiBPcGVyYSA8IDEyLjEgKi9cbiAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cztcbn1cblxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4vKiBGaXJlZm94IDwgMTYgKi9cbkAtbW96LWtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4vKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cbkAtbXMta2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi8qIE9wZXJhIDwgMTIuMSAqL1xuQC1vLWtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uY29udGFpbmVyLWxvZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG59XG4uY29udGFpbmVyLWxvZ2luIC53cmFwLWxvZ2luIHtcbiAgd2lkdGg6IDM5MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDQ1cHggNDVweCAzM3B4IDQ1cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtby1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tcy1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRhaW5lci1sb2dpbiAud3JhcC1sb2dpbiB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxufVxuLmNvbnRhaW5lci1sb2dpbiAud3JhcC1sb2dpbiAubG9naW4taGVhZGVyIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXItbG9naW4gLndyYXAtbG9naW4gLmxvZ2luLWhlYWRlciBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNvbnRhaW5lci1sb2dpbiAud3JhcC1sb2dpbiAubG9naW4taGVhZGVyIHAge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uY29udGFpbmVyLWxvZ2luIC53cmFwLWxvZ2luIC5sb2dpbi1idXR0b24ge1xuICBtYXJnaW46IDI1cHggMDtcbn1cbi5jb250YWluZXItbG9naW4gLndyYXAtbG9naW4gLmxvZ2luLWJ1dHRvbiBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbn1cbi5jb250YWluZXItbG9naW4gLndyYXAtbG9naW4gLm1lc3NhZ2Uge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5idG4tZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kOiAjNDI2N2IyO1xufVxuLmJ0bi1mYWNlYm9vayAuZmEtZmFjZWJvb2sge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uY29udGFpbmVyLWxvZ2luIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3dhbGxwYXBlci5qcGcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5zc28tZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYnRuLXNob3ctcGFzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNTYlO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLW1hdGVyaWFsLWNvbG9ycy9zYXNzL3Nhc3MtbWF0ZXJpYWwtY29sb3JzJztcblxuLy8vIERlZmF1bHQgdGhlbWUgYmFzZSB2YXJpYWJsZXNcbiRuYXZpZ2F0aW9uV2lkdGg6IDEwMHB4O1xuJHN0YXR1c0JhcldpZHRoOiAyNzVweDtcbiR0aGVtZS1pbnZlcnNlOiAgICAgICAgICAgICB3aGl0ZTtcbiR0aGVtZS1jb2xvcjogICAgICAgICAgICAgICByZ2IoMCwyMDMsMTIyKTtcbiRwcmltYXJ5LXRleHQ6ICAgICAgICAgICAgICAjMjEyMTIxO1xuJHNlY29uZGFyeS10ZXh0OiAgICAgICAgICAgICM3NTc1NzU7XG4kZGl2aWRlcjogICAgICAgICAgICAgICAgICAgI0JEQkRCRDtcbiRiYWNrZ3JvdW5kOiAgICAgICAgICAgICAgICAjRkZGRkZGO1xuJGRpYWxlY3Q6ICAgICAgICAgICAgICAgICAgIHNpbHZlcjtcbiRob3ZlcjogcmdiYSgyMzAsIDIzMCwgMjMwLCAwLjcpO1xuJHNoYWRvdzogICAgICAgICAgICAgICAgICAgIHJnYmEoMCwwLDAsMC4zKTtcblxuLy8vIE5hdmlnYXRpb24gdmFyaWFibGVzXG4kbmF2aWdhdGlvbjogICAgICAgICAgICAgICAgIzFhMWExYztcbiRuYXYtaWNvbjogICAgICAgICAgICAgICAgICByZ2IoMTI3LDEyNywxMjcpO1xuJG5hdi1pY29uLWhvdmVyOiAgICAgICAgICAgIHJnYig0OSw1Miw1Myk7XG4kbmF2LWljb24tYWN0aXZlOiAgICAgICAgICAgcmdiKDE3MCwxNzAsMTcwKTtcblxuXG4kYXBwaW5mbzogICAgICAgICAgICAgICAgICAgI2VlZjFmODtcbiRjb250YWluZXI6ICAgICAgICAgICAgICAgICByZ2IoMjM4LDI0MSwyNDcpO1xuJHNtb290aEJvcmRlcjogICAgICAgICAgICAgIDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XG5cblxuJG1hdGVyaWFsLWNvbG9yOiAnbGlnaHQtYmx1ZSc7XG4kdGhlbWUtY29sb3ItOTAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc5MDAnKTtcbiR0aGVtZS1jb2xvci04MDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzgwMCcpO1xuJHRoZW1lLWNvbG9yLTcwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnNzAwJyk7XG4kdGhlbWUtY29sb3ItNjAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc2MDAnKTtcbiR0aGVtZS1jb2xvci01MDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzUwMCcpO1xuJHRoZW1lLWNvbG9yLTQwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnNDAwJyk7XG4kdGhlbWUtY29sb3ItMzAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICczMDAnKTtcbiR0aGVtZS1jb2xvci0yMDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzIwMCcpO1xuJHRoZW1lLWNvbG9yLTEwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnMTAwJyk7XG4kdGhlbWUtY29sb3ItNTA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzUwJyk7XG5cblxuJGVycm9yLWNvbG9yOiAnYW1iZXInO1xuJGVycm9yLWNvbG9yLTkwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnOTAwJyk7XG4kZXJyb3ItY29sb3ItODAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICc4MDAnKTtcbiRlcnJvci1jb2xvci03MDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzcwMCcpO1xuJGVycm9yLWNvbG9yLTYwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnNjAwJyk7XG4kZXJyb3ItY29sb3ItNTAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICc1MDAnKTtcbiRlcnJvci1jb2xvci00MDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzQwMCcpO1xuJGVycm9yLWNvbG9yLTMwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnMzAwJyk7XG4kZXJyb3ItY29sb3ItMjAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICcyMDAnKTtcbiRlcnJvci1jb2xvci0xMDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzEwMCcpO1xuJGVycm9yLWNvbG9yLTUwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICc1MCcpO1xuXG5cbiIsIiRzY3JlZW4teHM6ICAgICAgICAgICAgICAgICAgNDgwcHg7XG4kc2NyZWVuLXBob25lLW1pbjogICAgICAgICAgICRzY3JlZW4teHM7IC8vIDQ4MHB4XG4kc2NyZWVuLXBob25lOiAgICAgICAgICAgICAgICRzY3JlZW4tcGhvbmUtbWluOyAvLyA0ODBweFxuXG4kc2NyZWVuLXNtOiAgICAgICAgICAgICAgICAgIDc2OHB4O1xuJHNjcmVlbi10YWJsZXQtbWluOiAgICAgICAgICAkc2NyZWVuLXNtOyAvLzc2OHB4XG4kc2NyZWVuLXRhYmxldDogICAgICAgICAgICAgICRzY3JlZW4tdGFibGV0LW1pbjsgLy83NjhweFxuXG4kc2NyZWVuLW1kOiAgICAgICAgICAgICAgICAgIDk5MnB4O1xuJHNjcmVlbi1kZXNrdG9wLW1pbjogICAgICAgICAkc2NyZWVuLW1kOyAvLzk5MnB4XG4kc2NyZWVuLWRlc2t0b3A6ICAgICAgICAgICAgICRzY3JlZW4tZGVza3RvcC1taW47IC8vOTkycHhcblxuJHNjcmVlbi1sZzogICAgICAgICAgICAgICAgICAxMjAwcHg7XG4kc2NyZWVuLWxnLWRlc2t0b3AtbWluOiAgICAgICRzY3JlZW4tbGc7IC8vMTIwMHB4XG4kc2NyZWVuLWxnLWRlc2t0b3A6ICAgICAgICAgICRzY3JlZW4tbGctZGVza3RvcC1taW47IC8vMTIwMHB4XG5cbiRzY3JlZW4teGxnOiAgICAgICAgICAgICAgICAgMTYwMHB4O1xuJHNjcmVlbi14bGctZGVza3RvcC1taW46ICAgICAkc2NyZWVuLXhsZzsgLy8xNjAwcHhcbiRzY3JlZW4teGxnLWRlc2t0b3A6ICAgICAgICAgJHNjcmVlbi14bGctZGVza3RvcC1taW47IC8vMTYwMHB4XG5cbiRzY3JlZW4tcGhvbmUtbWF4OiAgICAgICAgICAgKCRzY3JlZW4tdGFibGV0LW1pbiAtIDEpOyAvLzc2N3B4XG4kc2NyZWVuLXRhYmxldC1tYXg6ICAgICAgICAgICgkc2NyZWVuLWRlc2t0b3AtbWluIC0gMSk7IC8vOTkxcHhcbiRzY3JlZW4tZGVza3RvcC1tYXg6ICAgICAgICAgKCRzY3JlZW4tbGctZGVza3RvcC1taW4gLSAxKTsgLy8xMTk5cHhcbiRzY3JlZW4tbGctZGVza3RvcC1tYXg6ICAgICAgKCRzY3JlZW4teGxnLWRlc2t0b3AtbWluIC0gMSk7IC8vMTU5OXB4XG5cbi8vQ3VzdG9tIEZvciBzcGVjaWFsIGRldmljZVxuJHNjcmVlbi0xMzY2OiAgICAgICAgICAgICAgICAxMzY2cHg7XG4kc2NyZWVuLTEzNjYtbWluOiAgICAgICAgICAgICRzY3JlZW4tMTM2NjsgLy8xMzY2cHhcblxuQG1peGluIHBob25lIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICN7JHNjcmVlbi1waG9uZS1tYXh9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRzY3JlZW4tdGFibGV0LW1heH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRzY3JlZW4tZGVza3RvcC1tYXh9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRlc2t0b3AtbGcge1xuICBAbWVkaWEgKG1heC13aWR0aDogI3skc2NyZWVuLWxnLWRlc2t0b3B9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRlc2t0b3AteGxnIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi14bGctZGVza3RvcH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufSIsIkBpbXBvcnQgJy4uL2NvbW1vbi5zY3NzJztcbi5idG4tZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kOiAjNDI2N2IyO1xuICAuZmEtZmFjZWJvb2sge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgfVxuXG59XG4uY29udGFpbmVyLWxvZ2luIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3dhbGxwYXBlci5qcGcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4uc3NvLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5idG4tc2hvdy1wYXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiA1NiU7XG59XG4iXX0= */"];



/***/ }),

/***/ "./projects/core/src/lib/auth/login-form/login-form.component.ts":
/*!***********************************************************************!*\
  !*** ./projects/core/src/lib/auth/login-form/login-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "./projects/core/src/lib/auth/shared.ts");
/* harmony import */ var _auth_public_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth-public.service */ "./projects/core/src/lib/auth/auth-public.service.ts");
/* harmony import */ var _ng5_basic_services_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ng5-basic/services/common */ "./projects/core/src/lib/ng5-basic/services/common.ts");





var LoginFormComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LoginFormComponent, _super);
    function LoginFormComponent(router, http, facebook, config, auth, user, toastaService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.http = http;
        _this.facebook = facebook;
        _this.config = config;
        _this.auth = auth;
        _this.user = user;
        _this.toastaService = toastaService;
        _this.alternativeLogins = [];
        _this.isRequesting = false;
        _this.url = "";
        _this.facebookUrl = "/api/facebook/auth";
        _this.response = null;
        _this.error = _shared__WEBPACK_IMPORTED_MODULE_2__["error"];
        _this.form = {
            email: '',
            password: ''
        };
        _this.message = '';
        _this.passwordVisibility = false;
        _this.isLoggedInByFacebook = false;
        _this.loginDialog = 'Please enter your email and password.';
        return _this;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user.SetToken(null);
        this.user.SetUser(null);
        this.facebookUrl = this.config.API("/api/facebook/auth");
        this.auth.events.emit({
            type: _auth_public_service__WEBPACK_IMPORTED_MODULE_3__["AuthEvent"].REVOKE
        });
        var Config = this.config.Config;
        this.url = this.config.API('/api/user/signin');
        if (Config.loginDialog) {
            this.loginDialog = Config.loginDialog;
        }
        if (Config.provideFacebook) {
            this.alternativeLogins.push({
                type: 'facebook'
            });
        }
        this.facebook.IsLoggedInByFacebook().then(function (result) {
            if (result) {
                _this.isLoggedInByFacebook = true;
            }
            else {
                _this.isLoggedInByFacebook = false;
            }
        });
    };
    LoginFormComponent.prototype.login = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.auth.events.emit({
                    type: _auth_public_service__WEBPACK_IMPORTED_MODULE_3__["AuthEvent"].TRY_LOGIN
                });
                e.preventDefault();
                this.isRequesting = true;
                this.signinHttp(this.form);
                return [2 /*return*/];
            });
        });
    };
    LoginFormComponent.prototype.loginFacebook = function () {
        if (!FB) {
            return;
        }
        FB.login(function (result) { }, { scope: 'public_profile,email' });
    };
    LoginFormComponent.prototype.togglePassword = function () {
        this.passwordVisibility = this.passwordVisibility ? false : true;
    };
    LoginFormComponent.prototype.onSigninSuccess = function (response) {
        if (response === void 0) { response = null; }
        this.router.navigateByUrl('/index');
    };
    LoginFormComponent.prototype.continueWithFacebook = function () {
        this.signinFacebook(this.facebook.GetUserAuthenticationInformation());
    };
    LoginFormComponent.prototype.signinFacebook = function (data) {
        var _this = this;
        var conf = this.config.Config;
        this.http.post(this.facebookUrl, data).subscribe(function (response) {
            _this.response = response;
            if (_this.response.data && _this.response.data.items[0]) {
                _this.auth.events.emit({
                    payload: _this.response.data.items[0],
                    type: _auth_public_service__WEBPACK_IMPORTED_MODULE_3__["AuthEvent"].LOGIN_SUCCESS
                });
                if (conf.onLoginSuccess) {
                    conf.onLoginSuccess(response);
                }
                if (conf.afterLoginRedirect) {
                    _this.router.navigateByUrl(conf.afterLoginRedirect);
                }
            }
            _this.isRequesting = false;
        }, function (response) {
            _this.auth.events.emit({
                type: _auth_public_service__WEBPACK_IMPORTED_MODULE_3__["AuthEvent"].LOGIN_FAILED
            });
            _this.isRequesting = false;
            if (response.name === 'HttpErrorResponse') {
                _this.response = Object(_shared__WEBPACK_IMPORTED_MODULE_2__["GetNetworkError"])();
                return false;
            }
            _this.response = response;
        });
    };
    LoginFormComponent.prototype.signinHttp = function (data) {
        var _this = this;
        this.http.post(this.url, data).subscribe(function (response) {
            _this.isRequesting = false;
            _this.response = response;
            if (_this.response.data && _this.response.data.items[0]) {
                _this.auth.events.emit({
                    payload: _this.response.data.items[0],
                    type: _auth_public_service__WEBPACK_IMPORTED_MODULE_3__["AuthEvent"].LOGIN_SUCCESS
                });
                _this.onSigninSuccess(response);
                _this.user.SetToken(_this.response.data.items[0].token);
                _this.user.SetUser(_this.response.data.items[0].user);
            }
            else {
                _this.InternalError({
                    message: _this.response.error.message,
                    name: ''
                });
            }
            _this.isRequesting = false;
        }, function (response) {
            _this.isRequesting = false;
            _this.auth.events.emit({
                type: _auth_public_service__WEBPACK_IMPORTED_MODULE_3__["AuthEvent"].LOGIN_FAILED,
                payload: response
            });
            if (response.name === 'HttpErrorResponse') {
                _this.response = Object(_shared__WEBPACK_IMPORTED_MODULE_2__["GetNetworkError"])();
                return false;
            }
            _this.response = response;
        });
    };
    return LoginFormComponent;
}(_ng5_basic_services_common__WEBPACK_IMPORTED_MODULE_4__["ComponentCommon"]));



/***/ }),

/***/ "./projects/core/src/lib/auth/reset-password/reset-password.component.ts":
/*!*******************************************************************************!*\
  !*** ./projects/core/src/lib/auth/reset-password/reset-password.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared */ "./projects/core/src/lib/auth/shared.ts");


var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(http, router, route, config) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.config = config;
        this.key = '';
        this.url = null;
        this.error = _shared__WEBPACK_IMPORTED_MODULE_1__["error"];
        this.response = null;
        this.isRequesting = false;
        this.form = {
            password1: null,
            password2: null,
            key: null
        };
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.url = this.config.API('/api/user/reset-password');
        this.route.params.subscribe(function (data) {
            _this.key = _this.form.key = data.key;
        });
    };
    ResetPasswordComponent.prototype.SubmitForm = function () {
        this.execute(this.form);
    };
    ResetPasswordComponent.prototype.execute = function (data) {
        var _this = this;
        this.http.post(this.url, data).subscribe(function (response) {
            _this.response = response;
            if (_this.response.data && _this.response.data.items[0]) {
                _this.router.navigateByUrl('/login');
            }
            _this.isRequesting = false;
        }, function (response) {
            _this.isRequesting = false;
            if (response.name === 'HttpErrorResponse') {
                _this.response = Object(_shared__WEBPACK_IMPORTED_MODULE_1__["GetNetworkError"])();
                return false;
            }
            _this.response = response;
        });
    };
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./projects/core/src/lib/auth/shared.ts":
/*!**********************************************!*\
  !*** ./projects/core/src/lib/auth/shared.ts ***!
  \**********************************************/
/*! exports provided: GetNetworkError, error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNetworkError", function() { return GetNetworkError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
function GetNetworkError() {
    return {
        error: {
            code: 0,
            message: 'It seems you are not connected to internet. Please check your connection and try again'
        }
    };
}
function error(response, fieldName) {
    if (!response || !response.error || !response.error.errors) {
        return '';
    }
    var $error = response.error.errors.find(function (x) { return x.location === fieldName; });
    return $error ? $error.message : '';
}


/***/ }),

/***/ "./projects/core/src/lib/auth/signup-form/signup-form.component.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./projects/core/src/lib/auth/signup-form/signup-form.component.ngfactory.js ***!
  \***********************************************************************************/
/*! exports provided: RenderType_SignupFormComponent, View_SignupFormComponent_0, View_SignupFormComponent_Host_0, SignupFormComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SignupFormComponent", function() { return RenderType_SignupFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SignupFormComponent_0", function() { return View_SignupFormComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SignupFormComponent_Host_0", function() { return View_SignupFormComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponentNgFactory", function() { return SignupFormComponentNgFactory; });
/* harmony import */ var _signup_form_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-form.component.scss.shim.ngstyle */ "./projects/core/src/lib/auth/signup-form/signup-form.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng5_basic_components_progress_line_progress_line_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ng5-basic/components/progress-line/progress-line.component.ngfactory */ "./projects/core/src/lib/ng5-basic/components/progress-line/progress-line.component.ngfactory.js");
/* harmony import */ var _ng5_basic_components_progress_line_progress_line_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ng5-basic/components/progress-line/progress-line.component */ "./projects/core/src/lib/ng5-basic/components/progress-line/progress-line.component.ts");
/* harmony import */ var _ng5_basic_components_error_message_error_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ng5-basic/components/error-message/error-message.component.ngfactory */ "./projects/core/src/lib/ng5-basic/components/error-message/error-message.component.ngfactory.js");
/* harmony import */ var _ng5_basic_components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ng5-basic/components/error-message/error-message.component */ "./projects/core/src/lib/ng5-basic/components/error-message/error-message.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup-form.component */ "./projects/core/src/lib/auth/signup-form/signup-form.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_public_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../auth-public.service */ "./projects/core/src/lib/auth/auth-public.service.ts");
/* harmony import */ var _ng5_basic_services_configuration_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ng5-basic/services/configuration.service */ "./projects/core/src/lib/ng5-basic/services/configuration.service.ts");
/* harmony import */ var _ng5_basic_services_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ng5-basic/services/user.service */ "./projects/core/src/lib/ng5-basic/services/user.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 















var styles_SignupFormComponent = [_signup_form_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SignupFormComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SignupFormComponent, data: {} });

function View_SignupFormComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-progress-line", [], null, null, null, _ng5_basic_components_progress_line_progress_line_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ProgressLineComponent_0"], _ng5_basic_components_progress_line_progress_line_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ProgressLineComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _ng5_basic_components_progress_line_progress_line_component__WEBPACK_IMPORTED_MODULE_3__["ProgressLineComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_SignupFormComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "ng-error-message", [], null, null, null, _ng5_basic_components_error_message_error_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ErrorMessageComponent_0"], _ng5_basic_components_error_message_error_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ErrorMessageComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _ng5_basic_components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_5__["ErrorMessageComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, 0, [" ", "\n"]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.response.error.message; _ck(_v, 2, 0, currVal_0); }); }
function View_SignupFormComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error-message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.error(_co.response, "email"); _ck(_v, 1, 0, currVal_0); }); }
function View_SignupFormComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error-message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.error(_co.response, "password"); _ck(_v, 1, 0, currVal_0); }); }
function View_SignupFormComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SignupFormComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SignupFormComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 66, "div", [["class", "container-login"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 65, "div", [["class", "wrap-login"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 64, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 6, "div", [["class", "login-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 12, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 2, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](20, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 5, "input", [["autocomplete", "off"], ["class", "app-signup-form-email form-control"], ["name", "email"], ["type", "text"], ["value", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.form.email = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 0, "span", [["class", "focus-input"], ["data-placeholder", "Email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SignupFormComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 17, "div", [["class", "form-group"], ["style", "position: relative"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 2, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](33, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 4, "span", [["class", "btn-show-pass"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.togglePassword() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 3, "i", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](39, { "icon-visibility_off": 0, "icon-visibility": 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 5, "input", [["autocomplete", "off"], ["class", "app-signup-form-password form-control"], ["name", "password"]], [[8, "type", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.form.password = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 0, "span", [["class", "focus-input"], ["data-placeholder", "Password"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SignupFormComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 9, "p", [["class", "signup-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 3, "span", [["translate", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 8536064, null, 0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { translate: [0, "translate"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](52, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 3, "a", [["routerLink", "/privacy-policy"], ["translate", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 8536064, null, 0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { translate: [0, "translate"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Privacy Policy"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [". "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 3, "div", [["class", "form-group login-button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 2, "button", [["class", "btn btn-primary app-signup-form-submit"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.signup($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](61, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](65, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 3, "a", [["routerLink", "/login"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](69, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isRequesting; _ck(_v, 1, 0, currVal_0); var currVal_1 = (_co.response && _co.response.error); _ck(_v, 3, 0, currVal_1); var currVal_19 = "email"; var currVal_20 = _co.form.email; _ck(_v, 25, 0, currVal_19, currVal_20); var currVal_21 = _co.error(_co.response, "email"); _ck(_v, 30, 0, currVal_21); var currVal_23 = _ck(_v, 39, 0, _co.passwordVisibility, !_co.passwordVisibility); _ck(_v, 38, 0, currVal_23); var currVal_32 = "password"; var currVal_33 = _co.form.password; _ck(_v, 43, 0, currVal_32, currVal_33); var currVal_34 = _co.error(_co.response, "password"); _ck(_v, 48, 0, currVal_34); var currVal_35 = ""; _ck(_v, 51, 0, currVal_35); var currVal_39 = ""; _ck(_v, 55, 0, currVal_39); var currVal_40 = "/privacy-policy"; _ck(_v, 56, 0, currVal_40); var currVal_45 = "/login"; _ck(_v, 68, 0, currVal_45); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 6, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).transform("Create your account")); _ck(_v, 13, 0, currVal_9); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 16, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).transform(_co.signupDialog)); _ck(_v, 16, 0, currVal_10); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 20, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).transform("Your email (as username)")); _ck(_v, 20, 0, currVal_11); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassUntouched; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassTouched; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPristine; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassDirty; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassValid; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassInvalid; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPending; _ck(_v, 22, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 33, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).transform("Password")); _ck(_v, 33, 0, currVal_22); var currVal_24 = (_co.passwordVisibility ? "text" : "password"); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassUntouched; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassTouched; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassPristine; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassDirty; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassValid; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassInvalid; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassPending; _ck(_v, 40, 0, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31); var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 52, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).transform("By clicking on \"Signup\" below, you are agreeing to the")); _ck(_v, 52, 0, currVal_36); var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).target; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).href; _ck(_v, 54, 0, currVal_37, currVal_38); var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 61, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).transform("Signup")); _ck(_v, 61, 0, currVal_41); var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 65, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).transform("Do you have an account?")); _ck(_v, 65, 0, currVal_42); var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).target; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).href; _ck(_v, 67, 0, currVal_43, currVal_44); var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 69, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).transform("Login")); _ck(_v, 69, 0, currVal_46); }); }
function View_SignupFormComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_SignupFormComponent_0, RenderType_SignupFormComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _signup_form_component__WEBPACK_IMPORTED_MODULE_10__["SignupFormComponent"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _auth_public_service__WEBPACK_IMPORTED_MODULE_12__["AuthPublicService"], _ng5_basic_services_configuration_service__WEBPACK_IMPORTED_MODULE_13__["ConfigurationService"], _ng5_basic_services_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SignupFormComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-component", _signup_form_component__WEBPACK_IMPORTED_MODULE_10__["SignupFormComponent"], View_SignupFormComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./projects/core/src/lib/auth/signup-form/signup-form.component.scss.shim.ngstyle.js":
/*!*******************************************************************************************!*\
  !*** ./projects/core/src/lib/auth/signup-form/signup-form.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".material-input[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  border-bottom: 1px solid #adadad;\n  margin-bottom: 35px;\n}\n.material-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #555555;\n  line-height: 1.2;\n  display: block;\n  width: 100%;\n  height: 45px;\n  background: transparent;\n  padding: 0 5px;\n  outline: none;\n  border: none;\n  overflow: visible;\n}\n.material-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .focus-input[_ngcontent-%COMP%]:after {\n  top: -10px;\n  font-size: 12px;\n  color: #aaa;\n}\n.material-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .focus-input[_ngcontent-%COMP%]:before {\n  width: 100%;\n}\n.material-input[_ngcontent-%COMP%]   input.focused[_ngcontent-%COMP%]    + .focus-input[_ngcontent-%COMP%]:after {\n  top: -10px;\n  font-size: 12px;\n  color: #aaa;\n}\n.material-input[_ngcontent-%COMP%]   input.focused[_ngcontent-%COMP%]    + .focus-input[_ngcontent-%COMP%]:before {\n  width: 100%;\n}\n.material-input[_ngcontent-%COMP%]   .focus-input[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n.material-input[_ngcontent-%COMP%]   .focus-input[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  transition: all 0.4s;\n  background: #6a7dfe;\n  background: linear-gradient(to left, #21d4fd, #b721ff);\n}\n.material-input[_ngcontent-%COMP%]   .focus-input[_ngcontent-%COMP%]:after {\n  font-size: 15px;\n  color: #999999;\n  line-height: 1.2;\n  content: attr(data-placeholder);\n  display: block;\n  width: 100%;\n  position: absolute;\n  top: 16px;\n  left: 0px;\n  padding-left: 5px;\n  transition: all 0.4s;\n}\n.material-input[_ngcontent-%COMP%]   .btn-show-pass[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #999999;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  height: 100%;\n  top: 0;\n  right: 0;\n  padding-right: 5px;\n  cursor: pointer;\n  transition: all 0.4s;\n}\n.material-input[_ngcontent-%COMP%]   .btn-show-pass[_ngcontent-%COMP%]:hover {\n  color: #6a7dfe;\n  color: -webkit-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -o-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -moz-linear-gradient(to left, #21d4fd, #b721ff);\n  color: linear-gradient(to left, #21d4fd, #b721ff);\n}\n.material-input[_ngcontent-%COMP%]   .btn-show-pass.active[_ngcontent-%COMP%] {\n  color: #6a7dfe;\n  color: -webkit-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -o-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -moz-linear-gradient(to left, #21d4fd, #b721ff);\n  color: linear-gradient(to left, #21d4fd, #b721ff);\n}\n.error-message[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #ff8f00;\n  position: absolute;\n  margin-top: 5px;\n  text-transform: capitalize;\n  -webkit-animation: fadein 0.5s;\n  \n  \n  \n  \n  animation: fadein 0.5s;\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n\n.container-login[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  background: #f2f2f2;\n}\n.container-login[_ngcontent-%COMP%]   .wrap-login[_ngcontent-%COMP%] {\n  width: 390px;\n  background: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  padding: 45px 45px 33px 45px;\n  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -o-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -ms-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 767px) {\n  .container-login[_ngcontent-%COMP%]   .wrap-login[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n}\n.container-login[_ngcontent-%COMP%]   .wrap-login[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%] {\n  font-size: 23px;\n  padding-bottom: 10px;\n}\n.container-login[_ngcontent-%COMP%]   .wrap-login[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n}\n.container-login[_ngcontent-%COMP%]   .wrap-login[_ngcontent-%COMP%]   .login-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.container-login[_ngcontent-%COMP%]   .wrap-login[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%] {\n  margin: 25px 0;\n}\n.container-login[_ngcontent-%COMP%]   .wrap-login[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  padding-right: 25px;\n  padding-left: 25px;\n}\n.container-login[_ngcontent-%COMP%]   .wrap-login[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.btn-show-pass[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 56%;\n}\n.container-login[_ngcontent-%COMP%] {\n  background-image: url(/assets/images/wallpaper.jpg);\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL2NvcmUvbm9kZV9tb2R1bGVzL3Nhc3MtbWF0ZXJpYWwtY29sb3JzL3Nhc3MvX3Nhc3MtbWF0ZXJpYWwtY29sb3JzLWZ1bmN0aW9uLnNjc3MiLCIvVXNlcnMvbGVnaW9uL25nLWRhc2hib2FyZC9wcm9qZWN0cy9jb3JlL3NyYy9saWIvYXV0aC9jb21tb24uc2NzcyIsInByb2plY3RzL2NvcmUvc3JjL2xpYi9hdXRoL3NpZ251cC1mb3JtL3NpZ251cC1mb3JtLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2xlZ2lvbi9uZy1kYXNoYm9hcmQvcHJvamVjdHMvY29yZS9zcmMvbGliL25nNS1iYXNpYy9zY3NzL192YXJzLnNjc3MiLCIvVXNlcnMvbGVnaW9uL25nLWRhc2hib2FyZC9wcm9qZWN0cy9jb3JlL3NyYy9saWIvbmc1LWJhc2ljL3Njc3MvX21lZGlhcy5zY3NzIiwiL1VzZXJzL2xlZ2lvbi9uZy1kYXNoYm9hcmQvcHJvamVjdHMvY29yZS9zcmMvbGliL2F1dGgvc2lnbnVwLWZvcm0vc2lnbnVwLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7Ozs7Ozs7OztFQUFBO0FDQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FDU0Y7QURSRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDVUo7QURSTTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ1VSO0FEUk07RUFDRSxXQUFBO0FDVVI7QUROTTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ1FSO0FETk07RUFDRSxXQUFBO0FDUVI7QURKRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtBQ01KO0FETEk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUtBLG9CQUFBO0VBRUEsbUJBQUE7RUFJQSxzREFBQTtBQ0tOO0FESEk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBRUEsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUtBLG9CQUFBO0FDR047QURDRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBTUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFJQSxvQkFBQTtBQ0FKO0FEQ0k7RUFDRSxjQUFBO0VBQ0EseURBQUE7RUFDQSxvREFBQTtFQUNBLHNEQUFBO0VBQ0EsaURBQUE7QUNDTjtBRENJO0VBQ0UsY0FBQTtFQUNBLHlEQUFBO0VBQ0Esb0RBQUE7RUFDQSxzREFBQTtFQUNBLGlEQUFBO0FDQ047QURJQTtFQUNFLGVBQUE7RUFDQSxjRXJGZ0I7RUZzRmhCLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFBZ0Msb0NBQUE7RUFDSCxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDeEIsc0JBQUE7QUNHUDtBREFBO0VBQ0U7SUFBTyxVQUFBO0VDSVA7RURIQTtJQUFPLFVBQUE7RUNNUDtBQUNGO0FESkEsaUJBQUE7QUFNQSxvQ0FBQTtBQUNBO0VBQ0U7SUFBTyxVQUFBO0VDVVA7RURUQTtJQUFPLFVBQUE7RUNZUDtBQUNGO0FEVkEsc0JBQUE7QUFNQSxpQkFBQTtBQUtBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBS0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDbUJGO0FEbEJFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrREFBQTtFQUNBLHFEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxpREFBQTtBQ29CSjtBRW5MRTtFSHFKQTtJQWFJLGFBQUE7RUNxQko7QUFDRjtBRHBCSTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQ3NCTjtBRHJCTTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUN1QlI7QURyQk07RUFDRSxlQUFBO0FDdUJSO0FEcEJJO0VBQ0UsY0FBQTtBQ3NCTjtBRHJCTTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ3VCUjtBRHBCSTtFQUNFLGVBQUE7QUNzQk47QUcxT0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FINk9GO0FHM09BO0VBQ0UsbURBQUE7RUFDQSwyQkFBQTtBSDhPRiIsImZpbGUiOiJwcm9qZWN0cy9jb3JlL3NyYy9saWIvYXV0aC9zaWdudXAtZm9ybS9zaWdudXAtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3Nhc3MtbWF0ZXJpYWwtY29sb3JzLW1hcCc7XG4vKipcbiAqIFJldHJpZXZlcyBhIGNvbG9yIHZhbHVlIGZyb20gdGhlICRtYXRlcmlhbC1jb2xvcnMgU2FzcyBtYXBcbiAqIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9uaWxza2FzcGVyc3Nvbi9Hb29nbGUtTWF0ZXJpYWwtVUktQ29sb3ItUGFsZXR0ZS9cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvci1uYW1lICAgICAgICAgICAgIC0gcXVvdGVkLCBsb3dlci1jYXNlLCBkYXNoZXJpemVkIGNvbG9yXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgKGUuZy4gJ3BpbmsnLCAnYW1iZXInKVxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2xvci12YXJpYW50PSc1MDAnXSAgLSBxdW90ZWQsIGxvd2VyY2FzZSBjb2xvciB2YXJpYW50IChlLmcuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcyMDAnLCAnYTEwMCcpXG4gKi9cbkBmdW5jdGlvbiBtYXRlcmlhbC1jb2xvcigkY29sb3ItbmFtZSwgJGNvbG9yLXZhcmlhbnQ6ICc1MDAnKSB7XG4gICRjb2xvcjogbWFwLWdldChtYXAtZ2V0KCRtYXRlcmlhbC1jb2xvcnMsICRjb2xvci1uYW1lKSwkY29sb3ItdmFyaWFudCk7XG4gIEBpZiAkY29sb3Ige1xuICAgIEByZXR1cm4gJGNvbG9yO1xuICB9IEBlbHNlIHtcbiAgICAvLyBMaWJzYXNzIHN0aWxsIGRvZXNuJ3Qgc2VlbSB0byBzdXBwb3J0IEBlcnJvclxuICAgIEB3YXJuIFwiPT4gRVJST1I6IENPTE9SIE5PVCBGT1VORCEgPD0gfCBZb3VyICRjb2xvci1uYW1lLCAkY29sb3ItdmFyaWFudCBjb21iaW5hdGlvbiBkaWQgbm90IG1hdGNoIGFueSBvZiB0aGUgdmFsdWVzIGluIHRoZSAkbWF0ZXJpYWwtY29sb3JzIG1hcC5cIjtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uL25nNS1iYXNpYy9zY3NzL2luamVjdHNcIjtcblxuLm1hdGVyaWFsLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhZGFkYWQ7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIGlucHV0IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICM1NTU1NTU7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMCA1cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgJjpmb2N1cyArIC5mb2N1cy1pbnB1dCB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogI2FhYTtcbiAgICAgIH1cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICAgICYuZm9jdXNlZCArIC5mb2N1cy1pbnB1dCB7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogI2FhYTtcbiAgICAgIH1cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5mb2N1cy1pbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAtMnB4O1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgaGVpZ2h0OiAycHg7XG5cbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcblxuICAgICAgYmFja2dyb3VuZDogIzZhN2RmZTtcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgY29sb3I6ICM5OTk5OTk7XG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xuXG4gICAgICBjb250ZW50OiBhdHRyKGRhdGEtcGxhY2Vob2xkZXIpO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMTZweDtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgfVxuICB9XG5cbiAgLmJ0bi1zaG93LXBhc3Mge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzk5OTk5OTtcblxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogIzZhN2RmZTtcbiAgICAgIGNvbG9yOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgICAgIGNvbG9yOiAtby1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gICAgICBjb2xvcjogLW1vei1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gICAgICBjb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgIH1cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogIzZhN2RmZTtcbiAgICAgIGNvbG9yOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgICAgIGNvbG9yOiAtby1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gICAgICBjb2xvcjogLW1vei1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gICAgICBjb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgIH1cbiAgfVxufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICRlcnJvci1jb2xvci04MDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzOyAvKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMC41czsgLyogRmlyZWZveCA8IDE2ICovXG4gICAtbXMtYW5pbWF0aW9uOiBmYWRlaW4gMC41czsgLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cbiAgICAtby1hbmltYXRpb246IGZhZGVpbiAwLjVzOyAvKiBPcGVyYSA8IDEyLjEgKi9cbiAgICAgICBhbmltYXRpb246IGZhZGVpbiAwLjVzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gIHRvICAgeyBvcGFjaXR5OiAxOyB9XG59XG5cbi8qIEZpcmVmb3ggPCAxNiAqL1xuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gIHRvICAgeyBvcGFjaXR5OiAxOyB9XG59XG5cbi8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICB0byAgIHsgb3BhY2l0eTogMTsgfVxufVxuXG4vKiBJbnRlcm5ldCBFeHBsb3JlciAqL1xuQC1tcy1rZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8gICB7IG9wYWNpdHk6IDE7IH1cbn1cblxuLyogT3BlcmEgPCAxMi4xICovXG5ALW8ta2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gIHRvICAgeyBvcGFjaXR5OiAxOyB9XG59XG4uY29udGFpbmVyLWxvZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIC53cmFwLWxvZ2luIHtcbiAgICB3aWR0aDogMzkwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiA0NXB4IDQ1cHggMzNweCA0NXB4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAtby1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLW1zLWJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuICAgIEBpbmNsdWRlIHBob25lKCkge1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICB9XG4gICAgLmxvZ2luLWhlYWRlciB7XG4gICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgICAubG9naW4tYnV0dG9uIHtcbiAgICAgIG1hcmdpbjogMjVweCAwO1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5tZXNzYWdlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogUmV0cmlldmVzIGEgY29sb3IgdmFsdWUgZnJvbSB0aGUgJG1hdGVyaWFsLWNvbG9ycyBTYXNzIG1hcFxuICogSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL25pbHNrYXNwZXJzc29uL0dvb2dsZS1NYXRlcmlhbC1VSS1Db2xvci1QYWxldHRlL1xuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yLW5hbWUgICAgICAgICAgICAgLSBxdW90ZWQsIGxvd2VyLWNhc2UsIGRhc2hlcml6ZWQgY29sb3JcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSAoZS5nLiAncGluaycsICdhbWJlcicpXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbG9yLXZhcmlhbnQ9JzUwMCddICAtIHF1b3RlZCwgbG93ZXJjYXNlIGNvbG9yIHZhcmlhbnQgKGUuZy5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzIwMCcsICdhMTAwJylcbiAqL1xuLm1hdGVyaWFsLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhZGFkYWQ7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG4ubWF0ZXJpYWwtaW5wdXQgaW5wdXQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuLm1hdGVyaWFsLWlucHV0IGlucHV0OmZvY3VzICsgLmZvY3VzLWlucHV0OmFmdGVyIHtcbiAgdG9wOiAtMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2FhYTtcbn1cbi5tYXRlcmlhbC1pbnB1dCBpbnB1dDpmb2N1cyArIC5mb2N1cy1pbnB1dDpiZWZvcmUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXRlcmlhbC1pbnB1dCBpbnB1dC5mb2N1c2VkICsgLmZvY3VzLWlucHV0OmFmdGVyIHtcbiAgdG9wOiAtMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2FhYTtcbn1cbi5tYXRlcmlhbC1pbnB1dCBpbnB1dC5mb2N1c2VkICsgLmZvY3VzLWlucHV0OmJlZm9yZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1hdGVyaWFsLWlucHV0IC5mb2N1cy1pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ubWF0ZXJpYWwtaW5wdXQgLmZvY3VzLWlucHV0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTJweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIGJhY2tncm91bmQ6ICM2YTdkZmU7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG59XG4ubWF0ZXJpYWwtaW5wdXQgLmZvY3VzLWlucHV0OmFmdGVyIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzk5OTk5OTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgY29udGVudDogYXR0cihkYXRhLXBsYWNlaG9sZGVyKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbiAgbGVmdDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuLm1hdGVyaWFsLWlucHV0IC5idG4tc2hvdy1wYXNzIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzk5OTk5OTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cbi5tYXRlcmlhbC1pbnB1dCAuYnRuLXNob3ctcGFzczpob3ZlciB7XG4gIGNvbG9yOiAjNmE3ZGZlO1xuICBjb2xvcjogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gIGNvbG9yOiAtby1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gIGNvbG9yOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgY29sb3I6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbn1cbi5tYXRlcmlhbC1pbnB1dCAuYnRuLXNob3ctcGFzcy5hY3RpdmUge1xuICBjb2xvcjogIzZhN2RmZTtcbiAgY29sb3I6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICBjb2xvcjogLW8tbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICBjb2xvcjogLW1vei1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gIGNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2ZmOGYwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXM7XG4gIC8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cbiAgLW1vei1hbmltYXRpb246IGZhZGVpbiAwLjVzO1xuICAvKiBGaXJlZm94IDwgMTYgKi9cbiAgLW1zLWFuaW1hdGlvbjogZmFkZWluIDAuNXM7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyICovXG4gIC1vLWFuaW1hdGlvbjogZmFkZWluIDAuNXM7XG4gIC8qIE9wZXJhIDwgMTIuMSAqL1xuICBhbmltYXRpb246IGZhZGVpbiAwLjVzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi8qIEZpcmVmb3ggPCAxNiAqL1xuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4vKiBJbnRlcm5ldCBFeHBsb3JlciAqL1xuQC1tcy1rZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLyogT3BlcmEgPCAxMi4xICovXG5ALW8ta2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5jb250YWluZXItbG9naW4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbn1cbi5jb250YWluZXItbG9naW4gLndyYXAtbG9naW4ge1xuICB3aWR0aDogMzkwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNDVweCA0NXB4IDMzcHggNDVweDtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1vLWJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1zLWJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGFpbmVyLWxvZ2luIC53cmFwLWxvZ2luIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG59XG4uY29udGFpbmVyLWxvZ2luIC53cmFwLWxvZ2luIC5sb2dpbi1oZWFkZXIge1xuICBmb250LXNpemU6IDIzcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmNvbnRhaW5lci1sb2dpbiAud3JhcC1sb2dpbiAubG9naW4taGVhZGVyIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY29udGFpbmVyLWxvZ2luIC53cmFwLWxvZ2luIC5sb2dpbi1oZWFkZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5jb250YWluZXItbG9naW4gLndyYXAtbG9naW4gLmxvZ2luLWJ1dHRvbiB7XG4gIG1hcmdpbjogMjVweCAwO1xufVxuLmNvbnRhaW5lci1sb2dpbiAud3JhcC1sb2dpbiAubG9naW4tYnV0dG9uIGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuLmNvbnRhaW5lci1sb2dpbiAud3JhcC1sb2dpbiAubWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmJ0bi1zaG93LXBhc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDU2JTtcbn1cblxuLmNvbnRhaW5lci1sb2dpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy93YWxscGFwZXIuanBnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLW1hdGVyaWFsLWNvbG9ycy9zYXNzL3Nhc3MtbWF0ZXJpYWwtY29sb3JzJztcblxuLy8vIERlZmF1bHQgdGhlbWUgYmFzZSB2YXJpYWJsZXNcbiRuYXZpZ2F0aW9uV2lkdGg6IDEwMHB4O1xuJHN0YXR1c0JhcldpZHRoOiAyNzVweDtcbiR0aGVtZS1pbnZlcnNlOiAgICAgICAgICAgICB3aGl0ZTtcbiR0aGVtZS1jb2xvcjogICAgICAgICAgICAgICByZ2IoMCwyMDMsMTIyKTtcbiRwcmltYXJ5LXRleHQ6ICAgICAgICAgICAgICAjMjEyMTIxO1xuJHNlY29uZGFyeS10ZXh0OiAgICAgICAgICAgICM3NTc1NzU7XG4kZGl2aWRlcjogICAgICAgICAgICAgICAgICAgI0JEQkRCRDtcbiRiYWNrZ3JvdW5kOiAgICAgICAgICAgICAgICAjRkZGRkZGO1xuJGRpYWxlY3Q6ICAgICAgICAgICAgICAgICAgIHNpbHZlcjtcbiRob3ZlcjogcmdiYSgyMzAsIDIzMCwgMjMwLCAwLjcpO1xuJHNoYWRvdzogICAgICAgICAgICAgICAgICAgIHJnYmEoMCwwLDAsMC4zKTtcblxuLy8vIE5hdmlnYXRpb24gdmFyaWFibGVzXG4kbmF2aWdhdGlvbjogICAgICAgICAgICAgICAgIzFhMWExYztcbiRuYXYtaWNvbjogICAgICAgICAgICAgICAgICByZ2IoMTI3LDEyNywxMjcpO1xuJG5hdi1pY29uLWhvdmVyOiAgICAgICAgICAgIHJnYig0OSw1Miw1Myk7XG4kbmF2LWljb24tYWN0aXZlOiAgICAgICAgICAgcmdiKDE3MCwxNzAsMTcwKTtcblxuXG4kYXBwaW5mbzogICAgICAgICAgICAgICAgICAgI2VlZjFmODtcbiRjb250YWluZXI6ICAgICAgICAgICAgICAgICByZ2IoMjM4LDI0MSwyNDcpO1xuJHNtb290aEJvcmRlcjogICAgICAgICAgICAgIDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XG5cblxuJG1hdGVyaWFsLWNvbG9yOiAnbGlnaHQtYmx1ZSc7XG4kdGhlbWUtY29sb3ItOTAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc5MDAnKTtcbiR0aGVtZS1jb2xvci04MDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzgwMCcpO1xuJHRoZW1lLWNvbG9yLTcwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnNzAwJyk7XG4kdGhlbWUtY29sb3ItNjAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc2MDAnKTtcbiR0aGVtZS1jb2xvci01MDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzUwMCcpO1xuJHRoZW1lLWNvbG9yLTQwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnNDAwJyk7XG4kdGhlbWUtY29sb3ItMzAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICczMDAnKTtcbiR0aGVtZS1jb2xvci0yMDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzIwMCcpO1xuJHRoZW1lLWNvbG9yLTEwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnMTAwJyk7XG4kdGhlbWUtY29sb3ItNTA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzUwJyk7XG5cblxuJGVycm9yLWNvbG9yOiAnYW1iZXInO1xuJGVycm9yLWNvbG9yLTkwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnOTAwJyk7XG4kZXJyb3ItY29sb3ItODAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICc4MDAnKTtcbiRlcnJvci1jb2xvci03MDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzcwMCcpO1xuJGVycm9yLWNvbG9yLTYwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnNjAwJyk7XG4kZXJyb3ItY29sb3ItNTAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICc1MDAnKTtcbiRlcnJvci1jb2xvci00MDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzQwMCcpO1xuJGVycm9yLWNvbG9yLTMwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnMzAwJyk7XG4kZXJyb3ItY29sb3ItMjAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICcyMDAnKTtcbiRlcnJvci1jb2xvci0xMDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzEwMCcpO1xuJGVycm9yLWNvbG9yLTUwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICc1MCcpO1xuXG5cbiIsIiRzY3JlZW4teHM6ICAgICAgICAgICAgICAgICAgNDgwcHg7XG4kc2NyZWVuLXBob25lLW1pbjogICAgICAgICAgICRzY3JlZW4teHM7IC8vIDQ4MHB4XG4kc2NyZWVuLXBob25lOiAgICAgICAgICAgICAgICRzY3JlZW4tcGhvbmUtbWluOyAvLyA0ODBweFxuXG4kc2NyZWVuLXNtOiAgICAgICAgICAgICAgICAgIDc2OHB4O1xuJHNjcmVlbi10YWJsZXQtbWluOiAgICAgICAgICAkc2NyZWVuLXNtOyAvLzc2OHB4XG4kc2NyZWVuLXRhYmxldDogICAgICAgICAgICAgICRzY3JlZW4tdGFibGV0LW1pbjsgLy83NjhweFxuXG4kc2NyZWVuLW1kOiAgICAgICAgICAgICAgICAgIDk5MnB4O1xuJHNjcmVlbi1kZXNrdG9wLW1pbjogICAgICAgICAkc2NyZWVuLW1kOyAvLzk5MnB4XG4kc2NyZWVuLWRlc2t0b3A6ICAgICAgICAgICAgICRzY3JlZW4tZGVza3RvcC1taW47IC8vOTkycHhcblxuJHNjcmVlbi1sZzogICAgICAgICAgICAgICAgICAxMjAwcHg7XG4kc2NyZWVuLWxnLWRlc2t0b3AtbWluOiAgICAgICRzY3JlZW4tbGc7IC8vMTIwMHB4XG4kc2NyZWVuLWxnLWRlc2t0b3A6ICAgICAgICAgICRzY3JlZW4tbGctZGVza3RvcC1taW47IC8vMTIwMHB4XG5cbiRzY3JlZW4teGxnOiAgICAgICAgICAgICAgICAgMTYwMHB4O1xuJHNjcmVlbi14bGctZGVza3RvcC1taW46ICAgICAkc2NyZWVuLXhsZzsgLy8xNjAwcHhcbiRzY3JlZW4teGxnLWRlc2t0b3A6ICAgICAgICAgJHNjcmVlbi14bGctZGVza3RvcC1taW47IC8vMTYwMHB4XG5cbiRzY3JlZW4tcGhvbmUtbWF4OiAgICAgICAgICAgKCRzY3JlZW4tdGFibGV0LW1pbiAtIDEpOyAvLzc2N3B4XG4kc2NyZWVuLXRhYmxldC1tYXg6ICAgICAgICAgICgkc2NyZWVuLWRlc2t0b3AtbWluIC0gMSk7IC8vOTkxcHhcbiRzY3JlZW4tZGVza3RvcC1tYXg6ICAgICAgICAgKCRzY3JlZW4tbGctZGVza3RvcC1taW4gLSAxKTsgLy8xMTk5cHhcbiRzY3JlZW4tbGctZGVza3RvcC1tYXg6ICAgICAgKCRzY3JlZW4teGxnLWRlc2t0b3AtbWluIC0gMSk7IC8vMTU5OXB4XG5cbi8vQ3VzdG9tIEZvciBzcGVjaWFsIGRldmljZVxuJHNjcmVlbi0xMzY2OiAgICAgICAgICAgICAgICAxMzY2cHg7XG4kc2NyZWVuLTEzNjYtbWluOiAgICAgICAgICAgICRzY3JlZW4tMTM2NjsgLy8xMzY2cHhcblxuQG1peGluIHBob25lIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICN7JHNjcmVlbi1waG9uZS1tYXh9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRzY3JlZW4tdGFibGV0LW1heH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRzY3JlZW4tZGVza3RvcC1tYXh9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRlc2t0b3AtbGcge1xuICBAbWVkaWEgKG1heC13aWR0aDogI3skc2NyZWVuLWxnLWRlc2t0b3B9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRlc2t0b3AteGxnIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi14bGctZGVza3RvcH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufSIsIkBpbXBvcnQgJy4uL2NvbW1vbic7XG5cbi5idG4tc2hvdy1wYXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiA1NiU7XG59XG4uY29udGFpbmVyLWxvZ2luIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3dhbGxwYXBlci5qcGcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4iXX0= */"];



/***/ }),

/***/ "./projects/core/src/lib/auth/signup-form/signup-form.component.ts":
/*!*************************************************************************!*\
  !*** ./projects/core/src/lib/auth/signup-form/signup-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: SignupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function() { return SignupFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "./projects/core/src/lib/auth/shared.ts");
/* harmony import */ var _auth_public_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth-public.service */ "./projects/core/src/lib/auth/auth-public.service.ts");




var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent(http, router, auth, config, user) {
        this.http = http;
        this.router = router;
        this.auth = auth;
        this.config = config;
        this.user = user;
        this.isRequesting = false;
        this.response = null;
        this.signupDialog = "It's very easy to create an account. Please write your Email and A safe password";
        this.form = {
            email: '',
            password: ''
        };
        this.passwordVisibility = false;
        this.error = _shared__WEBPACK_IMPORTED_MODULE_2__["error"];
        this.signupUrl = null;
    }
    SignupFormComponent.prototype.ngOnInit = function () {
        var Config = this.config.Config;
        if (Config.signupDialog) {
            this.signupDialog = Config.signupDialog;
        }
    };
    SignupFormComponent.prototype.signup = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.signupUrl = this.config.API('/api/user/signup');
                e.preventDefault();
                this.isRequesting = true;
                this.signupHttp(this.form);
                return [2 /*return*/];
            });
        });
    };
    SignupFormComponent.prototype.togglePassword = function () {
        this.passwordVisibility = this.passwordVisibility ? false : true;
    };
    SignupFormComponent.prototype.onSignupSuccess = function (response) {
        if (response === void 0) { response = null; }
        this.user.SetToken(response.data.items[0].token);
        this.user.SetUser(response.data.items[0].user);
    };
    SignupFormComponent.prototype.signupHttp = function (data) {
        var _this = this;
        var conf = this.config.Config;
        window.scroll(0, 0);
        this.http.post(this.signupUrl, data).subscribe(function (response) {
            _this.response = response;
            _this.isRequesting = false;
            if (_this.response.data && _this.response.data.items[0]) {
                _this.onSignupSuccess(response);
                if (conf.onSignupSuccess) {
                    conf.onSignupSuccess(response);
                }
                _this.auth.events.emit({
                    type: _auth_public_service__WEBPACK_IMPORTED_MODULE_3__["AuthEvent"].SIGNUP_SUCCESS,
                    payload: response.data.items[0]
                });
                if (conf.afterSignupRedirect) {
                    _this.router.navigateByUrl(conf.afterSignupRedirect);
                }
            }
        }, function (response) {
            _this.isRequesting = false;
            if (response.name === 'HttpErrorResponse') {
                _this.response = Object(_shared__WEBPACK_IMPORTED_MODULE_2__["GetNetworkError"])();
                return false;
            }
            _this.response = response;
        });
    };
    return SignupFormComponent;
}());



/***/ }),

/***/ "./projects/core/src/lib/ng-dashboard.module.ts":
/*!******************************************************!*\
  !*** ./projects/core/src/lib/ng-dashboard.module.ts ***!
  \******************************************************/
/*! exports provided: NgDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgDashboardModule", function() { return NgDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng5_basic_services_mocks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng5-basic/services/mocks.service */ "./projects/core/src/lib/ng5-basic/services/mocks.service.ts");
/* harmony import */ var _ng5_basic_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng5-basic/services/configuration.service */ "./projects/core/src/lib/ng5-basic/services/configuration.service.ts");



var NgDashboardModule = /** @class */ (function () {
    function NgDashboardModule() {
    }
    NgDashboardModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: NgDashboardModule,
            providers: [
                _ng5_basic_services_mocks_service__WEBPACK_IMPORTED_MODULE_1__["MockService"],
                _ng5_basic_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"],
                { provide: 'config', useValue: config }
            ]
        };
    };
    return NgDashboardModule;
}());



/***/ }),

/***/ "./projects/core/src/lib/ng-dashboard.service.ts":
/*!*******************************************************!*\
  !*** ./projects/core/src/lib/ng-dashboard.service.ts ***!
  \*******************************************************/
/*! exports provided: NgDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgDashboardService", function() { return NgDashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NgDashboardService = /** @class */ (function () {
    function NgDashboardService() {
    }
    NgDashboardService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function NgDashboardService_Factory() { return new NgDashboardService(); }, token: NgDashboardService, providedIn: "root" });
    return NgDashboardService;
}());



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/components/error-message/error-message.component.ngfactory.js":
/*!*******************************************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/components/error-message/error-message.component.ngfactory.js ***!
  \*******************************************************************************************************/
/*! exports provided: RenderType_ErrorMessageComponent, View_ErrorMessageComponent_0, View_ErrorMessageComponent_Host_0, ErrorMessageComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ErrorMessageComponent", function() { return RenderType_ErrorMessageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ErrorMessageComponent_0", function() { return View_ErrorMessageComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ErrorMessageComponent_Host_0", function() { return View_ErrorMessageComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageComponentNgFactory", function() { return ErrorMessageComponentNgFactory; });
/* harmony import */ var _error_message_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-message.component.scss.shim.ngstyle */ "./projects/core/src/lib/ng5-basic/components/error-message/error-message.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _error_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-message.component */ "./projects/core/src/lib/ng5-basic/components/error-message/error-message.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_ErrorMessageComponent = [_error_message_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ErrorMessageComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ErrorMessageComponent, data: {} });

function View_ErrorMessageComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "error-message"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0)], null, null); }
function View_ErrorMessageComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-error-message", [], null, null, null, View_ErrorMessageComponent_0, RenderType_ErrorMessageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _error_message_component__WEBPACK_IMPORTED_MODULE_2__["ErrorMessageComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ErrorMessageComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-error-message", _error_message_component__WEBPACK_IMPORTED_MODULE_2__["ErrorMessageComponent"], View_ErrorMessageComponent_Host_0, {}, {}, ["*"]);



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/components/error-message/error-message.component.scss.shim.ngstyle.js":
/*!***************************************************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/components/error-message/error-message.component.scss.shim.ngstyle.js ***!
  \***************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".error-message[_ngcontent-%COMP%] {\n  background-color: #ffecb3;\n  padding: 15px;\n  position: fixed;\n  right: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL2NvcmUvbm9kZV9tb2R1bGVzL3Nhc3MtbWF0ZXJpYWwtY29sb3JzL3Nhc3MvX3Nhc3MtbWF0ZXJpYWwtY29sb3JzLWZ1bmN0aW9uLnNjc3MiLCIvVXNlcnMvbGVnaW9uL25nLWRhc2hib2FyZC9wcm9qZWN0cy9jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvZXJyb3ItbWVzc2FnZS9lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2xlZ2lvbi9uZy1kYXNoYm9hcmQvcHJvamVjdHMvY29yZS9zcmMvbGliL25nNS1iYXNpYy9zY3NzL192YXJzLnNjc3MiLCJwcm9qZWN0cy9jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvZXJyb3ItbWVzc2FnZS9lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzs7Ozs7Ozs7RUFBQTtBQ0NBO0VBQ0UseUJDOENnQjtFRDdDaEIsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtBRVNGIiwiZmlsZSI6InByb2plY3RzL2NvcmUvc3JjL2xpYi9uZzUtYmFzaWMvY29tcG9uZW50cy9lcnJvci1tZXNzYWdlL2Vycm9yLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzYXNzLW1hdGVyaWFsLWNvbG9ycy1tYXAnO1xuLyoqXG4gKiBSZXRyaWV2ZXMgYSBjb2xvciB2YWx1ZSBmcm9tIHRoZSAkbWF0ZXJpYWwtY29sb3JzIFNhc3MgbWFwXG4gKiBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vbmlsc2thc3BlcnNzb24vR29vZ2xlLU1hdGVyaWFsLVVJLUNvbG9yLVBhbGV0dGUvXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3ItbmFtZSAgICAgICAgICAgICAtIHF1b3RlZCwgbG93ZXItY2FzZSwgZGFzaGVyaXplZCBjb2xvclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lIChlLmcuICdwaW5rJywgJ2FtYmVyJylcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29sb3ItdmFyaWFudD0nNTAwJ10gIC0gcXVvdGVkLCBsb3dlcmNhc2UgY29sb3IgdmFyaWFudCAoZS5nLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMjAwJywgJ2ExMDAnKVxuICovXG5AZnVuY3Rpb24gbWF0ZXJpYWwtY29sb3IoJGNvbG9yLW5hbWUsICRjb2xvci12YXJpYW50OiAnNTAwJykge1xuICAkY29sb3I6IG1hcC1nZXQobWFwLWdldCgkbWF0ZXJpYWwtY29sb3JzLCAkY29sb3ItbmFtZSksJGNvbG9yLXZhcmlhbnQpO1xuICBAaWYgJGNvbG9yIHtcbiAgICBAcmV0dXJuICRjb2xvcjtcbiAgfSBAZWxzZSB7XG4gICAgLy8gTGlic2FzcyBzdGlsbCBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCBAZXJyb3JcbiAgICBAd2FybiBcIj0+IEVSUk9SOiBDT0xPUiBOT1QgRk9VTkQhIDw9IHwgWW91ciAkY29sb3ItbmFtZSwgJGNvbG9yLXZhcmlhbnQgY29tYmluYXRpb24gZGlkIG5vdCBtYXRjaCBhbnkgb2YgdGhlIHZhbHVlcyBpbiB0aGUgJG1hdGVyaWFsLWNvbG9ycyBtYXAuXCI7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4uLy4uL3Njc3MvX2luamVjdHMnO1xuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRlcnJvci1jb2xvci0xMDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbWF0ZXJpYWwtY29sb3JzL3Nhc3Mvc2Fzcy1tYXRlcmlhbC1jb2xvcnMnO1xuXG4vLy8gRGVmYXVsdCB0aGVtZSBiYXNlIHZhcmlhYmxlc1xuJG5hdmlnYXRpb25XaWR0aDogMTAwcHg7XG4kc3RhdHVzQmFyV2lkdGg6IDI3NXB4O1xuJHRoZW1lLWludmVyc2U6ICAgICAgICAgICAgIHdoaXRlO1xuJHRoZW1lLWNvbG9yOiAgICAgICAgICAgICAgIHJnYigwLDIwMywxMjIpO1xuJHByaW1hcnktdGV4dDogICAgICAgICAgICAgICMyMTIxMjE7XG4kc2Vjb25kYXJ5LXRleHQ6ICAgICAgICAgICAgIzc1NzU3NTtcbiRkaXZpZGVyOiAgICAgICAgICAgICAgICAgICAjQkRCREJEO1xuJGJhY2tncm91bmQ6ICAgICAgICAgICAgICAgICNGRkZGRkY7XG4kZGlhbGVjdDogICAgICAgICAgICAgICAgICAgc2lsdmVyO1xuJGhvdmVyOiByZ2JhKDIzMCwgMjMwLCAyMzAsIDAuNyk7XG4kc2hhZG93OiAgICAgICAgICAgICAgICAgICAgcmdiYSgwLDAsMCwwLjMpO1xuXG4vLy8gTmF2aWdhdGlvbiB2YXJpYWJsZXNcbiRuYXZpZ2F0aW9uOiAgICAgICAgICAgICAgICAjMWExYTFjO1xuJG5hdi1pY29uOiAgICAgICAgICAgICAgICAgIHJnYigxMjcsMTI3LDEyNyk7XG4kbmF2LWljb24taG92ZXI6ICAgICAgICAgICAgcmdiKDQ5LDUyLDUzKTtcbiRuYXYtaWNvbi1hY3RpdmU6ICAgICAgICAgICByZ2IoMTcwLDE3MCwxNzApO1xuXG5cbiRhcHBpbmZvOiAgICAgICAgICAgICAgICAgICAjZWVmMWY4O1xuJGNvbnRhaW5lcjogICAgICAgICAgICAgICAgIHJnYigyMzgsMjQxLDI0Nyk7XG4kc21vb3RoQm9yZGVyOiAgICAgICAgICAgICAgMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcblxuXG4kbWF0ZXJpYWwtY29sb3I6ICdsaWdodC1ibHVlJztcbiR0aGVtZS1jb2xvci05MDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzkwMCcpO1xuJHRoZW1lLWNvbG9yLTgwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnODAwJyk7XG4kdGhlbWUtY29sb3ItNzAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc3MDAnKTtcbiR0aGVtZS1jb2xvci02MDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzYwMCcpO1xuJHRoZW1lLWNvbG9yLTUwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnNTAwJyk7XG4kdGhlbWUtY29sb3ItNDAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc0MDAnKTtcbiR0aGVtZS1jb2xvci0zMDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzMwMCcpO1xuJHRoZW1lLWNvbG9yLTIwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnMjAwJyk7XG4kdGhlbWUtY29sb3ItMTAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICcxMDAnKTtcbiR0aGVtZS1jb2xvci01MDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnNTAnKTtcblxuXG4kZXJyb3ItY29sb3I6ICdhbWJlcic7XG4kZXJyb3ItY29sb3ItOTAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICc5MDAnKTtcbiRlcnJvci1jb2xvci04MDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzgwMCcpO1xuJGVycm9yLWNvbG9yLTcwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnNzAwJyk7XG4kZXJyb3ItY29sb3ItNjAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICc2MDAnKTtcbiRlcnJvci1jb2xvci01MDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzUwMCcpO1xuJGVycm9yLWNvbG9yLTQwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnNDAwJyk7XG4kZXJyb3ItY29sb3ItMzAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICczMDAnKTtcbiRlcnJvci1jb2xvci0yMDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzIwMCcpO1xuJGVycm9yLWNvbG9yLTEwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnMTAwJyk7XG4kZXJyb3ItY29sb3ItNTA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzUwJyk7XG5cblxuIiwiLyoqXG4gKiBSZXRyaWV2ZXMgYSBjb2xvciB2YWx1ZSBmcm9tIHRoZSAkbWF0ZXJpYWwtY29sb3JzIFNhc3MgbWFwXG4gKiBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vbmlsc2thc3BlcnNzb24vR29vZ2xlLU1hdGVyaWFsLVVJLUNvbG9yLVBhbGV0dGUvXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3ItbmFtZSAgICAgICAgICAgICAtIHF1b3RlZCwgbG93ZXItY2FzZSwgZGFzaGVyaXplZCBjb2xvclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lIChlLmcuICdwaW5rJywgJ2FtYmVyJylcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29sb3ItdmFyaWFudD0nNTAwJ10gIC0gcXVvdGVkLCBsb3dlcmNhc2UgY29sb3IgdmFyaWFudCAoZS5nLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMjAwJywgJ2ExMDAnKVxuICovXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVjYjM7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG59Il19 */"];



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/components/error-message/error-message.component.ts":
/*!*********************************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/components/error-message/error-message.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ErrorMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageComponent", function() { return ErrorMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ErrorMessageComponent = /** @class */ (function () {
    function ErrorMessageComponent() {
    }
    ErrorMessageComponent.prototype.ngOnInit = function () {
    };
    return ErrorMessageComponent;
}());



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/components/layout-fade/layout-fade.component.ts":
/*!*****************************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/components/layout-fade/layout-fade.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: LayoutFadeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutFadeComponent", function() { return LayoutFadeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var LayoutFadeComponent = /** @class */ (function () {
    function LayoutFadeComponent(sidebar) {
        var _this = this;
        this.sidebar = sidebar;
        this.isRequesting = false;
        this.isSidebarVisible = true;
        this.sidebar.SidebarVisibilityState.subscribe(function (val) { return (_this.isSidebarVisible = val); });
    }
    LayoutFadeComponent.prototype.prepareRoute = function (outlet) {
        return (outlet &&
            outlet.activatedRouteData &&
            outlet.activatedRouteData['animation']);
    };
    LayoutFadeComponent.prototype.ngOnInit = function () {
        this.isSidebarVisible = this.sidebar.IsSidebarVisibleInitially();
    };
    LayoutFadeComponent.prototype.sideOff = function () {
        if (this.isSidebarVisible) {
            this.sidebar.Hide();
        }
    };
    return LayoutFadeComponent;
}());



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/components/layout/layout.component.ngfactory.js":
/*!*****************************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/components/layout/layout.component.ngfactory.js ***!
  \*****************************************************************************************/
/*! exports provided: RenderType_LayoutComponent, View_LayoutComponent_0, View_LayoutComponent_Host_0, LayoutComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LayoutComponent", function() { return RenderType_LayoutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LayoutComponent_0", function() { return View_LayoutComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LayoutComponent_Host_0", function() { return View_LayoutComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponentNgFactory", function() { return LayoutComponentNgFactory; });
/* harmony import */ var _layout_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.component.scss.shim.ngstyle */ "./projects/core/src/lib/ng5-basic/components/layout/layout.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nav_bar_nav_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav-bar/nav-bar.component.ngfactory */ "./projects/core/src/lib/ng5-basic/components/nav-bar/nav-bar.component.ngfactory.js");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/translate.service */ "./projects/core/src/lib/ng5-basic/services/translate.service.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "./projects/core/src/lib/ng5-basic/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _ngx_sidebar_ngx_sidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ngx-sidebar/ngx-sidebar.service */ "./projects/core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.service.ts");
/* harmony import */ var _services_configuration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/configuration.service */ "./projects/core/src/lib/ng5-basic/services/configuration.service.ts");
/* harmony import */ var _side_bar_side_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../side-bar/side-bar.component.ngfactory */ "./projects/core/src/lib/ng5-basic/components/side-bar/side-bar.component.ngfactory.js");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../side-bar/side-bar.component */ "./projects/core/src/lib/ng5-basic/components/side-bar/side-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout.component */ "./projects/core/src/lib/ng5-basic/components/layout/layout.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












var styles_LayoutComponent = [_layout_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LayoutComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LayoutComponent, data: {} });

function View_LayoutComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "ng-nav-bar", [], null, [["window", "keyup"]], function (_v, en, $event) { var ad = true; if (("window:keyup" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onKeyDown($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _nav_bar_nav_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NavBarComponent_0"], _nav_bar_nav_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NavBarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _services_translate_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _services_translate_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], ["config", _ngx_sidebar_ngx_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["NgxSidebarService"], _services_translate_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _services_configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "ng-side-bar", [], null, null, null, _side_bar_side_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_SideBarComponent_0"], _side_bar_side_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_SideBarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_8__["SideBarComponent"], [_services_configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"], _ngx_sidebar_ngx_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["NgxSidebarService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, "div", [["class", "ngd-outlet"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.sideOff() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](8, { "ngd-sidebar-visible": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 16777216, null, null, 1, "router-outlet", [["class", "layout-router-outlet"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 212992, [["outlet", 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 2, 0); _ck(_v, 4, 0); var currVal_0 = "ngd-outlet"; var currVal_1 = _ck(_v, 8, 0, _co.isSidebarVisible); _ck(_v, 7, 0, currVal_0, currVal_1); _ck(_v, 10, 0); }, null); }
function View_LayoutComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_LayoutComponent_0, RenderType_LayoutComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _layout_component__WEBPACK_IMPORTED_MODULE_11__["LayoutComponent"], [_ngx_sidebar_ngx_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["NgxSidebarService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LayoutComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-component", _layout_component__WEBPACK_IMPORTED_MODULE_11__["LayoutComponent"], View_LayoutComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/components/layout/layout.component.scss.shim.ngstyle.js":
/*!*************************************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/components/layout/layout.component.scss.shim.ngstyle.js ***!
  \*************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".ngd-outlet[_ngcontent-%COMP%] {\n  overflow-y: scroll !important;\n  position: fixed !important;\n  z-index: -1;\n  padding: 30px;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  top: 3.8em;\n  transition-duration: 0.5s;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: right, left;\n}\n.ngd-outlet.ngd-sidebar-visible[_ngcontent-%COMP%] {\n  left: 280px;\n  right: -280px;\n}\n  body[dir=rtl] .ngd-outlet.ngd-sidebar-visible {\n  right: 280px;\n  left: -280px;\n}\n@media (min-width: 992px) {\n    body[dir=rtl] .ngd-outlet.ngd-sidebar-visible {\n    left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .ngd-outlet[_ngcontent-%COMP%] {\n    top: 3.8em;\n  }\n  .ngd-outlet.ngd-sidebar-visible[_ngcontent-%COMP%] {\n    right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9uZzUtYmFzaWMvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2xlZ2lvbi9uZy1kYXNoYm9hcmQvcHJvamVjdHMvY29yZS9zcmMvbGliL25nNS1iYXNpYy9zY3NzL19sYXlvdXQuc2NzcyIsInByb2plY3RzL2NvcmUvc3JjL2xpYi9uZzUtYmFzaWMvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsVUNUYztFRFVkLHlCQUFBO0VBQ0EsNERBQUE7RUFDQSxnQ0FBQTtBRURGO0FGRUU7RUFDRSxXQ2ZZO0VEZ0JaLGFBQUE7QUVBSjtBRk1JO0VBQ0UsWUN2QlU7RUR3QlYsWUFBQTtBRUhOO0FGSU07RUFIRjtJQUlJLE9BQUE7RUVETjtBQUNGO0FGTUE7RUFDRTtJQUNFLFVDakNZO0VDOEJkO0VGSUU7SUFDRSxRQUFBO0VFRko7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zY3NzL2xheW91dFwiO1xuXG4ubmdkLW91dGxldCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgei1pbmRleDogLTE7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHRvcDogJG5hdmJhcl9oZWlnaHQ7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogcmlnaHQsIGxlZnQ7XG4gICYubmdkLXNpZGViYXItdmlzaWJsZSB7XG4gICAgbGVmdDogJHNpZGViYXJfd2lkdGg7XG4gICAgcmlnaHQ6IC0kc2lkZWJhcl93aWR0aDtcbiAgfVxufVxuXG46Om5nLWRlZXAgYm9keVtkaXI9XCJydGxcIl0ge1xuICAubmdkLW91dGxldCB7XG4gICAgJi5uZ2Qtc2lkZWJhci12aXNpYmxlIHtcbiAgICAgIHJpZ2h0OiAkc2lkZWJhcl93aWR0aDtcbiAgICAgIGxlZnQ6IC0kc2lkZWJhcl93aWR0aDtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLm5nZC1vdXRsZXQge1xuICAgIHRvcDogJG5hdmJhcl9oZWlnaHQ7XG4gICAgJi5uZ2Qtc2lkZWJhci12aXNpYmxlIHtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgfVxufVxuIiwiJHNpZGViYXJfd2lkdGg6IDI4MHB4O1xuJG5hdmJhcl9oZWlnaHQ6IDMuOGVtOyIsIi5uZ2Qtb3V0bGV0IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAtMTtcbiAgcGFkZGluZzogMzBweDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgdG9wOiAzLjhlbTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiByaWdodCwgbGVmdDtcbn1cbi5uZ2Qtb3V0bGV0Lm5nZC1zaWRlYmFyLXZpc2libGUge1xuICBsZWZ0OiAyODBweDtcbiAgcmlnaHQ6IC0yODBweDtcbn1cblxuOjpuZy1kZWVwIGJvZHlbZGlyPXJ0bF0gLm5nZC1vdXRsZXQubmdkLXNpZGViYXItdmlzaWJsZSB7XG4gIHJpZ2h0OiAyODBweDtcbiAgbGVmdDogLTI4MHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIDo6bmctZGVlcCBib2R5W2Rpcj1ydGxdIC5uZ2Qtb3V0bGV0Lm5nZC1zaWRlYmFyLXZpc2libGUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5uZ2Qtb3V0bGV0IHtcbiAgICB0b3A6IDMuOGVtO1xuICB9XG4gIC5uZ2Qtb3V0bGV0Lm5nZC1zaWRlYmFyLXZpc2libGUge1xuICAgIHJpZ2h0OiAwO1xuICB9XG59Il19 */"];



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/components/layout/layout.component.ts":
/*!*******************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/components/layout/layout.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(sidebar) {
        var _this = this;
        this.sidebar = sidebar;
        this.isRequesting = false;
        this.isSidebarVisible = true;
        this.sidebar.SidebarVisibilityState.subscribe(function (val) { return (_this.isSidebarVisible = val); });
    }
    LayoutComponent.prototype.ngOnInit = function () {
        this.isSidebarVisible = this.sidebar.IsSidebarVisibleInitially();
    };
    LayoutComponent.prototype.sideOff = function () {
        if (this.isSidebarVisible) {
            this.sidebar.Hide();
        }
    };
    return LayoutComponent;
}());



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/components/nav-bar/nav-bar.component.ngfactory.js":
/*!*******************************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/components/nav-bar/nav-bar.component.ngfactory.js ***!
  \*******************************************************************************************/
/*! exports provided: RenderType_NavBarComponent, View_NavBarComponent_0, View_NavBarComponent_Host_0, NavBarComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NavBarComponent", function() { return RenderType_NavBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NavBarComponent_0", function() { return View_NavBarComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NavBarComponent_Host_0", function() { return View_NavBarComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponentNgFactory", function() { return NavBarComponentNgFactory; });
/* harmony import */ var _nav_bar_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar.component.scss.shim.ngstyle */ "./projects/core/src/lib/ng5-basic/components/nav-bar/nav-bar.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_ng_dashboard_amazing_search_ng_dashboard_amazing_search_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@ng-dashboard/amazing-search/ng-dashboard-amazing-search.ngfactory */ "./projects/core/node_modules/@ng-dashboard/amazing-search/ng-dashboard-amazing-search.ngfactory.js");
/* harmony import */ var _ng_dashboard_amazing_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-dashboard/amazing-search */ "./projects/core/node_modules/@ng-dashboard/amazing-search/fesm5/ng-dashboard-amazing-search.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_menu_profile_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profile-menu/profile-menu.component.ngfactory */ "./projects/core/src/lib/ng5-basic/components/profile-menu/profile-menu.component.ngfactory.js");
/* harmony import */ var _profile_menu_profile_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profile-menu/profile-menu.component */ "./projects/core/src/lib/ng5-basic/components/profile-menu/profile-menu.component.ts");
/* harmony import */ var _notification_list_notification_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../notification-list/notification-list.component.ngfactory */ "./projects/core/src/lib/ng5-basic/components/notification-list/notification-list.component.ngfactory.js");
/* harmony import */ var _notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notification-list/notification-list.component */ "./projects/core/src/lib/ng5-basic/components/notification-list/notification-list.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./projects/core/node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/translate.service */ "./projects/core/src/lib/ng5-basic/services/translate.service.ts");
/* harmony import */ var _nav_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav-bar.component */ "./projects/core/src/lib/ng5-basic/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _ngx_sidebar_ngx_sidebar_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ngx-sidebar/ngx-sidebar.service */ "./projects/core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.service.ts");
/* harmony import */ var _services_configuration_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/configuration.service */ "./projects/core/src/lib/ng5-basic/services/configuration.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 















var styles_NavBarComponent = [_nav_bar_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_NavBarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_NavBarComponent, data: {} });

function View_NavBarComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "i", [["class", "icon-menu icon-jump-in-animation"]], null, null, null, null, null))], null, null); }
function View_NavBarComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "i", [["class", "icon-close icon-jump-in-animation"]], null, null, null, null, null))], null, null); }
function View_NavBarComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "amazing-search", [], null, [["window", "keyup"], ["document", "click"]], function (_v, en, $event) { var ad = true; if (("window:keyup" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onKeyDown($event) !== false);
        ad = (pd_0 && ad);
    } if (("document:click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).clickedOutside($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_ng_dashboard_amazing_search_ng_dashboard_amazing_search_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AmazingSearchComponent_0"], _node_modules_ng_dashboard_amazing_search_ng_dashboard_amazing_search_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AmazingSearchComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, null, 0, _ng_dashboard_amazing_search__WEBPACK_IMPORTED_MODULE_3__["AmazingSearchComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]], { terms: [0, "terms"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.config.search.terms; _ck(_v, 2, 0, currVal_0); }, null); }
function View_NavBarComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "d-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "ng-profile-menu", [], null, null, null, _profile_menu_profile_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ProfileMenuComponent_0"], _profile_menu_profile_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ProfileMenuComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _profile_menu_profile_menu_component__WEBPACK_IMPORTED_MODULE_6__["ProfileMenuComponent"], [], null, null)], null, null); }
function View_NavBarComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "d-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "ng-notification-list", [], null, [["document", "click"]], function (_v, en, $event) { var ad = true; if (("document:click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).clickout($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _notification_list_notification_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_NotificationListComponent_0"], _notification_list_notification_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_NotificationListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_8__["NotificationListComponent"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
function View_NavBarComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "span", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.interactiveBtnClick(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_10__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { clickable: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "i", [], [[8, "className", 0]], null, null, null, null))], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, _v.context.$implicit.onPress); _ck(_v, 2, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.icon; _ck(_v, 4, 0, currVal_1); }); }
function View_NavBarComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "nav", [["class", "navbar navbar-expand-lg navbar-light fixed-nav ng-dashboard-nav"], ["dir", "ltr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "button", [["class", "ngd-sidebar-toggle "]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.SidebarVisibilityState() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NavBarComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NavBarComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "div", [["class", "application-nav col-lg-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NavBarComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 9, "div", [["style", "flex-grow: 1;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "div", [["class", "d-flex flex-row justify-content-end align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 7, "div", [["class", "d-flex flex-row-reverse ml-auto justify-content-start nav-items"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NavBarComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NavBarComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "div", [["class", "interactive-button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NavBarComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.sidebar.IsVisible; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.sidebar.IsVisible; _ck(_v, 5, 0, currVal_1); var currVal_2 = (_co.config.search && _co.config.search.terms); _ck(_v, 8, 0, currVal_2); var currVal_3 = (_co.config.profile !== false); _ck(_v, 13, 0, currVal_3); var currVal_4 = (_co.config.notification !== false); _ck(_v, 15, 0, currVal_4); var currVal_5 = _co.interactiveButtons; _ck(_v, 18, 0, currVal_5); }, null); }
function View_NavBarComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "ng-nav-bar", [], null, [["window", "keyup"]], function (_v, en, $event) { var ad = true; if (("window:keyup" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onKeyDown($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_NavBarComponent_0, RenderType_NavBarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _services_translate_service__WEBPACK_IMPORTED_MODULE_11__["TranslateService"], _services_translate_service__WEBPACK_IMPORTED_MODULE_11__["TranslateService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, _nav_bar_component__WEBPACK_IMPORTED_MODULE_12__["NavBarComponent"], ["config", _ngx_sidebar_ngx_sidebar_service__WEBPACK_IMPORTED_MODULE_13__["NgxSidebarService"], _services_translate_service__WEBPACK_IMPORTED_MODULE_11__["TranslateService"], _services_configuration_service__WEBPACK_IMPORTED_MODULE_14__["ConfigurationService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var NavBarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-nav-bar", _nav_bar_component__WEBPACK_IMPORTED_MODULE_12__["NavBarComponent"], View_NavBarComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/components/nav-bar/nav-bar.component.scss.shim.ngstyle.js":
/*!***************************************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/components/nav-bar/nav-bar.component.scss.shim.ngstyle.js ***!
  \***************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".fixed-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 2;\n  box-shadow: 6px 0 6px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 400px) {\n  .fixed-nav[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n}\n.f-basic-auto[_ngcontent-%COMP%] {\n  flex-basis: auto !important;\n}\n.nav-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  margin-left: 15px;\n}\n.ngd-sidebar-toggle[_ngcontent-%COMP%] {\n  background: transparent;\n  outline: none;\n  font-size: 28px;\n  border: 0px;\n  cursor: pointer;\n  margin-right: 15px;\n  position: relative;\n  top: 2px;\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 1.07rem;\n}\n@media (max-width: 400px) {\n  .navbar-brand[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n.application-nav[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.active-application-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  float: left;\n}\n.active-application-wrapper[_ngcontent-%COMP%]   .active-application[_ngcontent-%COMP%] {\n  display: table;\n  margin-left: 10px;\n}\n.active-application-wrapper[_ngcontent-%COMP%]   .active-application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n}\n.active-application-wrapper[_ngcontent-%COMP%]   .active-application[_ngcontent-%COMP%]   .application-title[_ngcontent-%COMP%] {\n  text-indent: 10px;\n  max-width: 100px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media (max-width: 400px) {\n  .active-application-wrapper[_ngcontent-%COMP%]   .active-application[_ngcontent-%COMP%]   .application-title[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n.active-application-wrapper[_ngcontent-%COMP%]   .active-application[_ngcontent-%COMP%]   .application-avatar[_ngcontent-%COMP%] {\n  width: 43px;\n  height: 43px;\n  background: #dbe7ff;\n  color: #6091fe;\n  border-radius: 5px;\n  font-weight: bold;\n}\n@media (max-width: 400px) {\n  .active-application-wrapper[_ngcontent-%COMP%]   .active-application[_ngcontent-%COMP%]   .application-avatar[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n    font-size: 13px;\n  }\n}\n@media (max-width: 1170.98px) {\n  .application-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 576px) {\n  .application-title[_ngcontent-%COMP%] {\n    text-indent: 10px;\n    max-width: initial !important;\n  }\n\n  .navbar-brand[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n.change-language[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.icon-jump-in-animation[_ngcontent-%COMP%] {\n  -webkit-animation: jump_in 1.2s;\n  \n  \n  \n  \n  animation: jump_in 1.2s;\n}\n@-webkit-keyframes jump_in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 30px;\n  }\n}\n@keyframes jump_in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 30px;\n  }\n}\n.interactive-button[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.interactive-button[_ngcontent-%COMP%]   .clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.interactive-button[_ngcontent-%COMP%]   .clickable[_ngcontent-%COMP%]:hover {\n  color: #4c84ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9uZzUtYmFzaWMvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLHdDQUFBO0FDQ0Y7QURBRTtFQU5GO0lBT0ksaUJBQUE7SUFDQSxrQkFBQTtFQ0dGO0FBQ0Y7QUREQTtFQUNFLDJCQUFBO0FDSUY7QURERTtFQUNFLGlCQUFBO0FDSUo7QUREQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDSUY7QURGQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0tGO0FESkU7RUFIRjtJQUlJLGVBQUE7RUNPRjtBQUNGO0FETEE7RUFDRSxVQUFBO0FDUUY7QUROQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ1NGO0FEUkU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNVSjtBRFRJO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDV047QURUSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNXTjtBRFZNO0VBTkY7SUFPSSxlQUFBO0VDYU47QUFDRjtBRFhJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDYU47QURaTTtFQVBGO0lBUUksV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VDZU47QUFDRjtBRFhBO0VBQ0U7SUFDRSxhQUFBO0VDY0Y7QUFDRjtBRFpBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLDZCQUFBO0VDY0Y7O0VEWkE7SUFDRSxrQkFBQTtFQ2VGO0FBQ0Y7QURiQTtFQUNFLGVBQUE7QUNlRjtBRFpBO0VBQ0UsK0JBQUE7RUFBaUMsb0NBQUE7RUFDSCxpQkFBQTtFQUNELHNCQUFBO0VBQ0QsaUJBQUE7RUFDNUIsdUJBQUE7QUNtQkY7QURoQkE7RUFDRTtJQUNFLFVBQUE7RUNtQkY7RURqQkE7SUFDRSxhQUFBO0VDbUJGO0FBQ0Y7QUR6QkE7RUFDRTtJQUNFLFVBQUE7RUNtQkY7RURqQkE7SUFDRSxhQUFBO0VDbUJGO0FBQ0Y7QURmQTtFQUNJLGVBQUE7QUNpQko7QURmSTtFQUNFLGVBQUE7QUNpQk47QURoQk07RUFDRSxjQUFBO0FDa0JSIiwiZmlsZSI6InByb2plY3RzL2NvcmUvc3JjL2xpYi9uZzUtYmFzaWMvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZml4ZWQtbmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAyO1xuICBib3gtc2hhZG93OiA2cHggMCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbn1cbi5mLWJhc2ljLWF1dG8ge1xuICBmbGV4LWJhc2lzOiBhdXRvICFpbXBvcnRhbnQ7XG59XG4ubmF2LWl0ZW1zIHtcbiAgZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbn1cbi5uZ2Qtc2lkZWJhci10b2dnbGUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBib3JkZXI6IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7XG59XG4ubmF2YmFyLWJyYW5kIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDEuMDdyZW07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuLmFwcGxpY2F0aW9uLW5hdiB7XG4gIHBhZGRpbmc6IDA7XG59XG4uYWN0aXZlLWFwcGxpY2F0aW9uLXdyYXBwZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbG9hdDogbGVmdDtcbiAgLmFjdGl2ZS1hcHBsaWNhdGlvbiB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgPiBkaXYge1xuICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5hcHBsaWNhdGlvbi10aXRsZSB7XG4gICAgICB0ZXh0LWluZGVudDogMTBweDtcbiAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmFwcGxpY2F0aW9uLWF2YXRhciB7XG4gICAgICB3aWR0aDogNDNweDtcbiAgICAgIGhlaWdodDogNDNweDtcbiAgICAgIGJhY2tncm91bmQ6ICNkYmU3ZmY7XG4gICAgICBjb2xvcjogIzYwOTFmZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTcwLjk4cHgpIHtcbiAgLmFwcGxpY2F0aW9uLW5hdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5hcHBsaWNhdGlvbi10aXRsZSB7XG4gICAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gICAgbWF4LXdpZHRoOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5hdmJhci1icmFuZCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG4uY2hhbmdlLWxhbmd1YWdlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaWNvbi1qdW1wLWluLWFuaW1hdGlvbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBqdW1wX2luIDEuMnM7IC8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cbiAgLW1vei1hbmltYXRpb246IGp1bXBfaW4gMS4yczsgLyogRmlyZWZveCA8IDE2ICovXG4gIC1tcy1hbmltYXRpb246IGp1bXBfaW4gMS4yczsgLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cbiAgLW8tYW5pbWF0aW9uOiBqdW1wX2luIDEuMnM7IC8qIE9wZXJhIDwgMTIuMSAqL1xuICBhbmltYXRpb246IGp1bXBfaW4gMS4ycztcbn1cblxuQGtleWZyYW1lcyBqdW1wX2luIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMzBweDtcbiAgfVxufVxuXG5cbi5pbnRlcmFjdGl2ZS1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcblxuICAgIC5jbGlja2FibGUge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjNGM4NGZmO1xuICAgICAgfVxuICAgIH1cbn0iLCIuZml4ZWQtbmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAyO1xuICBib3gtc2hhZG93OiA2cHggMCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5maXhlZC1uYXYge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgfVxufVxuXG4uZi1iYXNpYy1hdXRvIHtcbiAgZmxleC1iYXNpczogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubmF2LWl0ZW1zIGRpdjpudGgtY2hpbGQoMSkge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLm5nZC1zaWRlYmFyLXRvZ2dsZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGJvcmRlcjogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxLjA3cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5uYXZiYXItYnJhbmQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuXG4uYXBwbGljYXRpb24tbmF2IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmFjdGl2ZS1hcHBsaWNhdGlvbi13cmFwcGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uYWN0aXZlLWFwcGxpY2F0aW9uLXdyYXBwZXIgLmFjdGl2ZS1hcHBsaWNhdGlvbiB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5hY3RpdmUtYXBwbGljYXRpb24td3JhcHBlciAuYWN0aXZlLWFwcGxpY2F0aW9uID4gZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFjdGl2ZS1hcHBsaWNhdGlvbi13cmFwcGVyIC5hY3RpdmUtYXBwbGljYXRpb24gLmFwcGxpY2F0aW9uLXRpdGxlIHtcbiAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5hY3RpdmUtYXBwbGljYXRpb24td3JhcHBlciAuYWN0aXZlLWFwcGxpY2F0aW9uIC5hcHBsaWNhdGlvbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG4uYWN0aXZlLWFwcGxpY2F0aW9uLXdyYXBwZXIgLmFjdGl2ZS1hcHBsaWNhdGlvbiAuYXBwbGljYXRpb24tYXZhdGFyIHtcbiAgd2lkdGg6IDQzcHg7XG4gIGhlaWdodDogNDNweDtcbiAgYmFja2dyb3VuZDogI2RiZTdmZjtcbiAgY29sb3I6ICM2MDkxZmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmFjdGl2ZS1hcHBsaWNhdGlvbi13cmFwcGVyIC5hY3RpdmUtYXBwbGljYXRpb24gLmFwcGxpY2F0aW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTE3MC45OHB4KSB7XG4gIC5hcHBsaWNhdGlvbi1uYXYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuYXBwbGljYXRpb24tdGl0bGUge1xuICAgIHRleHQtaW5kZW50OiAxMHB4O1xuICAgIG1heC13aWR0aDogaW5pdGlhbCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5hdmJhci1icmFuZCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG4uY2hhbmdlLWxhbmd1YWdlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaWNvbi1qdW1wLWluLWFuaW1hdGlvbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBqdW1wX2luIDEuMnM7XG4gIC8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cbiAgLW1vei1hbmltYXRpb246IGp1bXBfaW4gMS4ycztcbiAgLyogRmlyZWZveCA8IDE2ICovXG4gIC1tcy1hbmltYXRpb246IGp1bXBfaW4gMS4ycztcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cbiAgLW8tYW5pbWF0aW9uOiBqdW1wX2luIDEuMnM7XG4gIC8qIE9wZXJhIDwgMTIuMSAqL1xuICBhbmltYXRpb246IGp1bXBfaW4gMS4ycztcbn1cblxuQGtleWZyYW1lcyBqdW1wX2luIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMzBweDtcbiAgfVxufVxuLmludGVyYWN0aXZlLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbi5pbnRlcmFjdGl2ZS1idXR0b24gLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbnRlcmFjdGl2ZS1idXR0b24gLmNsaWNrYWJsZTpob3ZlciB7XG4gIGNvbG9yOiAjNGM4NGZmO1xufSJdfQ== */"];



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_globalization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/globalization.service */ "./projects/core/src/lib/ng5-basic/services/globalization.service.ts");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/translate.service */ "./projects/core/src/lib/ng5-basic/services/translate.service.ts");



var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(gconfig, sidebar, translate, configService) {
        this.gconfig = gconfig;
        this.sidebar = sidebar;
        this.translate = translate;
        this.configService = configService;
        this.interactiveButtons = [];
        this.config = {
            notification: false,
            profile: false,
            avatar: 'DOC',
            brand: 'ng-dashboard',
            title: 'Documentations',
            search: {
                terms: []
            }
        };
    }
    NavBarComponent.prototype.onKeyDown = function (event) {
        var $event = document.all ? window.event : event;
        if (!/^(?:input|textarea|select|button)$/i.test($event.target.tagName)) {
            var matchedButton = this.interactiveButtons.find(function (button) { return event.key === button.keyboardShortcut; });
            if (matchedButton) {
                this.interactiveBtnClick(matchedButton);
            }
        }
    };
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.gconfig && this.gconfig.navbar) {
            this.config = this.gconfig.navbar;
        }
        this.configService.NavbarInteractiveButtons.subscribe(function (buttons) {
            console.log('buttons', buttons);
            _this.interactiveButtons = buttons;
        });
    };
    NavBarComponent.prototype.interactiveBtnClick = function (btn) {
        console.log('btn click!', btn);
        if (btn.onPress) {
            btn.onPress(btn);
        }
    };
    NavBarComponent.prototype.SidebarVisibilityState = function () {
        this.sidebar.Toggle();
    };
    NavBarComponent.prototype.CurrentLanguage = function () {
        return _services_globalization_service__WEBPACK_IMPORTED_MODULE_1__["SupportedLanguages"][this.translate.currentLang];
    };
    return NavBarComponent;
}());



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/components/notification-list/notification-list.component.ngfactory.js":
/*!***************************************************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/components/notification-list/notification-list.component.ngfactory.js ***!
  \***************************************************************************************************************/
/*! exports provided: RenderType_NotificationListComponent, View_NotificationListComponent_0, View_NotificationListComponent_Host_0, NotificationListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NotificationListComponent", function() { return RenderType_NotificationListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NotificationListComponent_0", function() { return View_NotificationListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NotificationListComponent_Host_0", function() { return View_NotificationListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationListComponentNgFactory", function() { return NotificationListComponentNgFactory; });
/* harmony import */ var _notification_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-list.component.scss.shim.ngstyle */ "./projects/core/src/lib/ng5-basic/components/notification-list/notification-list.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ngx-tooltip/tooltip.directive */ "./projects/core/src/lib/ngx-tooltip/tooltip.directive.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notification_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-list.component */ "./projects/core/src/lib/ng5-basic/components/notification-list/notification-list.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./projects/core/node_modules/@ngrx/store/fesm5/store.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_NotificationListComponent = [_notification_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_NotificationListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_NotificationListComponent, data: {} });

function View_NotificationListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "search-btn"]], null, [[null, "click"], [null, "mouseenter"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseenter" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onMouseEnter() !== false);
        ad = (pd_0 && ad);
    } if (("mouseleave" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onMouseLeave() !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick() !== false);
        ad = (pd_2 && ad);
    } if (("click" === en)) {
        var pd_3 = (_co.ToggleSearch() !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _ngx_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { Tooltip: [0, "Tooltip"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [["class", "icon-filter_list"]], null, null, null, null, null))], function (_ck, _v) { var currVal_0 = "Filter"; _ck(_v, 1, 0, currVal_0); }, null); }
function View_NotificationListComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "search-input"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "button", [["class", "search-btn close-search-bar"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.ToggleSearch() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [["class", "icon-close"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "Filter of all notifications ..."], ["type", "text"]], null, [[null, "keyup"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keyup" === en)) {
        var pd_0 = (_co.filterNotifications($event.target.value) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_NotificationListComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "no-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "i", [["class", "icon-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "p", [["translate", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 8536064, null, 0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateDirective"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { translate: [0, "translate"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["There are not any activities yet"]))], function (_ck, _v) { var currVal_0 = ""; _ck(_v, 3, 0, currVal_0); }, null); }
function View_NotificationListComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "notification-icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "div", [["class", "notification-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "p", [["class", "notification-message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", "", "", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "p", [["class", "notification-type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", " - ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](8, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](9, 2)], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.status; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.title; var currVal_2 = ((_v.context.$implicit.message.length > 0) ? " : " : ""); var currVal_3 = _v.context.$implicit.message; _ck(_v, 5, 0, currVal_1, currVal_2, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.date, "fullDate")); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 1, _ck(_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.date, "HH:MM")); _ck(_v, 7, 0, currVal_4, currVal_5); }); }
function View_NotificationListComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "notification-list"], ["data-simplebar", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NotificationListComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.notifications; _ck(_v, 3, 0, currVal_0); }, null); }
function View_NotificationListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "div", [["class", "notification-container"], ["id", "notification-button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.ToggleNotification() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, { "active": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "span", [["class", "notification-badge"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "i", [["class", "icon-notifications_none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "div", [["class", "notification-overlay"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](10, { "active": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 16, "div", [["class", "ngd-notification-wrapper"], ["id", "notification-list"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](14, { "active": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 8, "div", [["class", "d-flex justify-content-between notification-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "div", [["class", "d-2"], ["translate", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 8536064, null, 0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateDirective"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { translate: [0, "translate"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Notifications "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 2, "div", [["class", "d-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NotificationListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NotificationListComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NotificationListComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NotificationListComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "notification-container"; var currVal_1 = _ck(_v, 4, 0, _co.notificationStatus); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = "notification-overlay"; var currVal_3 = _ck(_v, 10, 0, _co.notificationStatus); _ck(_v, 9, 0, currVal_2, currVal_3); var currVal_4 = "ngd-notification-wrapper"; var currVal_5 = _ck(_v, 14, 0, _co.notificationStatus); _ck(_v, 13, 0, currVal_4, currVal_5); var currVal_6 = ""; _ck(_v, 17, 0, currVal_6); var currVal_7 = _co.notifications.length; _ck(_v, 21, 0, currVal_7); var currVal_8 = _co.searchStatus; _ck(_v, 23, 0, currVal_8); var currVal_9 = !_co.notifications.length; _ck(_v, 25, 0, currVal_9); var currVal_10 = _co.notifications.length; _ck(_v, 27, 0, currVal_10); }, null); }
function View_NotificationListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-notification-list", [], null, [["document", "click"]], function (_v, en, $event) { var ad = true; if (("document:click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).clickout($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_NotificationListComponent_0, RenderType_NotificationListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _notification_list_component__WEBPACK_IMPORTED_MODULE_5__["NotificationListComponent"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NotificationListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-notification-list", _notification_list_component__WEBPACK_IMPORTED_MODULE_5__["NotificationListComponent"], View_NotificationListComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/components/notification-list/notification-list.component.scss.shim.ngstyle.js":
/*!***********************************************************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/components/notification-list/notification-list.component.scss.shim.ngstyle.js ***!
  \***********************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".notification-container[_ngcontent-%COMP%] {\n  width: 43px;\n  height: 43px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  font-size: 25px;\n  color: #aaa;\n  position: relative;\n  cursor: pointer;\n}\n.notification-container[_ngcontent-%COMP%]:focus {\n  color: #aaa !important;\n}\n.notification-container.active[_ngcontent-%COMP%] {\n  background: #eee;\n  border-radius: 5px;\n  color: #4c84ff;\n}\n.notification-container[_ngcontent-%COMP%]   .notification-badge[_ngcontent-%COMP%] {\n  border: 2px solid orange;\n  border-radius: 50%;\n  width: 10px;\n  height: 10px;\n  display: inline-block;\n  position: absolute;\n  top: 3px;\n  right: 3px;\n}\n.notification-container[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #4c84ff;\n}\n@media (max-width: 400px) {\n  .notification-container[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n}\n.ngd-notification-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 3.8em;\n  right: 0;\n  width: 300px;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.98);\n  box-shadow: 0px 8px 9px -10px #949191 inset;\n  z-index: 2;\n  transform: translateX(100%);\n  transition-duration: 0.5s;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: transform;\n}\n.ngd-notification-wrapper.active[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.ngd-notification-wrapper[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  padding: 15px 15px 5px;\n  border-bottom: 1px solid #eee;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.ngd-notification-wrapper[_ngcontent-%COMP%]   .no-content[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n  padding-top: 15px;\n  margin: 70px 15px 15px;\n  border: 1px dashed #ddd;\n  border-radius: 3px;\n}\n.ngd-notification-wrapper[_ngcontent-%COMP%]   .no-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: orange;\n  margin-bottom: 10px;\n  display: inline-block;\n}\n.ngd-notification-wrapper[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {\n  background: #f1f1f1;\n  border: 0;\n  outline: none;\n  border-radius: 50%;\n  padding: 3px 4px;\n  cursor: pointer;\n  position: relative;\n  bottom: 3px;\n}\n.ngd-notification-wrapper[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]:hover {\n  background: #ddd;\n}\n.ngd-notification-wrapper[_ngcontent-%COMP%]   .search-btn.close-search-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 4px;\n  background: transparent;\n}\n.ngd-notification-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  left: 5px;\n}\n.ngd-notification-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  border-color: #eaeaea !important;\n  border-radius: 0px;\n}\n.notification-list[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  bottom: 0px;\n}\n.notification-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.notification-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n}\n.notification-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%] {\n  font-size: 23px;\n  width: 60x;\n  text-align: center;\n}\n.notification-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%]   i.icon-comment[_ngcontent-%COMP%] {\n  color: orange;\n}\n.notification-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%]   i.icon-call_made[_ngcontent-%COMP%] {\n  color: green;\n}\n.notification-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%]   i.icon-call_missed[_ngcontent-%COMP%] {\n  color: red;\n}\n.notification-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%]   i.icon-mail_outline[_ngcontent-%COMP%] {\n  color: #4c84ff;\n}\n.notification-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%]   i.icon-error[_ngcontent-%COMP%] {\n  color: #e2a700;\n}\n.notification-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%]   i.icon-add_circle[_ngcontent-%COMP%] {\n  color: cornflowerblue;\n}\n.notification-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .notification-icon[_ngcontent-%COMP%]   i.icon-remove_circle[_ngcontent-%COMP%] {\n  color: orangered;\n}\n.notification-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-left: 10px;\n}\n.notification-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 3px;\n  padding-top: 3px;\n}\n.notification-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-type[_ngcontent-%COMP%] {\n  color: #aaa;\n  font-size: 12px;\n  display: inline-block;\n}\n.notification-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 3.8em;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.25);\n  opacity: 0;\n  visibility: hidden;\n  transition: visibility 0.3s linear, opacity 0.3s linear;\n}\n.notification-overlay.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n  body[dir=rtl] .ngd-notification-wrapper {\n  right: auto;\n  left: 0px;\n  transform: translateX(-100%);\n  direction: rtl !important;\n}\n  body[dir=rtl] .ngd-notification-wrapper .search-btn.close-search-bar {\n  right: auto !important;\n  left: 5px;\n}\n  body[dir=rtl] .notification-list ul li .notification-content {\n  padding-left: 0px;\n  padding-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9uZzUtYmFzaWMvY29tcG9uZW50cy9ub3RpZmljYXRpb24tbGlzdC9ub3RpZmljYXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NvcmUvc3JjL2xpYi9uZzUtYmFzaWMvY29tcG9uZW50cy9ub3RpZmljYXRpb24tbGlzdC9ub3RpZmljYXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBbUJBLGVBQUE7QUNqQkY7QURERTtFQUNFLHNCQUFBO0FDR0o7QURERTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDR0o7QURERTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ0dKO0FEQUU7RUFDRSxjQUFBO0FDRUo7QURBRTtFQS9CRjtJQWdDSSxXQUFBO0lBQ0EsWUFBQTtFQ0dGO0FBQ0Y7QURBQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7RUFDQSwyQ0FBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNERBQUE7RUFDQSw4QkFBQTtBQ0dGO0FERkU7RUFDRSx3QkFBQTtBQ0lKO0FERkU7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDSUo7QURGRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDSUo7QURISTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0tOO0FERkU7RUFDRSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNJSjtBREhJO0VBQ0UsZ0JBQUE7QUNLTjtBREhJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0FDS047QURGRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNJSjtBREhJO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtBQ0tOO0FEQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDR0Y7QURGRTtFQUNFLGFBQUE7QUNJSjtBREhJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDS047QURKTTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNNUjtBREpVO0VBQ0UsYUFBQTtBQ01aO0FESlU7RUFDRSxZQUFBO0FDTVo7QURKVTtFQUNFLFVBQUE7QUNNWjtBREpVO0VBQ0UsY0FBQTtBQ01aO0FESlU7RUFDRSxjQUFBO0FDTVo7QURKVTtFQUNFLHFCQUFBO0FDTVo7QURKVTtFQUNFLGdCQUFBO0FDTVo7QURGTTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNJUjtBREhRO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNLVjtBREhRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0tWO0FEQ0E7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO0FDRUY7QURERTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQ0dKO0FERUU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7QUNDSjtBREVNO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0FDQVI7QURPUTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNMViIsImZpbGUiOiJwcm9qZWN0cy9jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLWxpc3Qvbm90aWZpY2F0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZpY2F0aW9uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0M3B4O1xuICBoZWlnaHQ6IDQzcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjYWFhO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiAjYWFhICFpbXBvcnRhbnQ7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiAjNGM4NGZmO1xuICB9XG4gIC5ub3RpZmljYXRpb24tYmFkZ2Uge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIG9yYW5nZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzcHg7XG4gICAgcmlnaHQ6IDNweDtcbiAgfVxuICBjdXJzb3I6IHBvaW50ZXI7XG4gICY6aG92ZXIgaSB7XG4gICAgY29sb3I6ICM0Yzg0ZmY7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG59XG5cbi5uZ2Qtbm90aWZpY2F0aW9uLXdyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMy44ZW07XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMzAwcHg7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk4KTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCA5cHggLTEwcHggIzk0OTE5MSBpbnNldDtcbiAgei1pbmRleDogMjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgJi5hY3RpdmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAubm90aWZpY2F0aW9uLWhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm5vLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgbWFyZ2luOiA3MHB4IDE1cHggMTVweDtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBjb2xvcjogb3JhbmdlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gIH1cbiAgLnNlYXJjaC1idG4ge1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDNweCA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDNweDtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgfVxuICAgICYuY2xvc2Utc2VhcmNoLWJhciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogNXB4O1xuICAgICAgdG9wOiA0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cbiAgLnNlYXJjaC1pbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgbGVmdDogNXB4O1xuICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICAgIGJvcmRlci1jb2xvcjogI2VhZWFlYSAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIH1cbiAgfVxufVxuXG4ubm90aWZpY2F0aW9uLWxpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTBweDtcbiAgYm90dG9tOiAwcHg7XG4gIHVsIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGxpIHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLm5vdGlmaWNhdGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICB3aWR0aDogNjB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGkge1xuICAgICAgICAgICYuaWNvbi1jb21tZW50IHtcbiAgICAgICAgICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgICAgICAgfVxuICAgICAgICAgICYuaWNvbi1jYWxsX21hZGUge1xuICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmLmljb24tY2FsbF9taXNzZWQge1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5pY29uLW1haWxfb3V0bGluZSB7XG4gICAgICAgICAgICBjb2xvcjogIzRjODRmZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5pY29uLWVycm9yIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZTJhNzAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmLmljb24tYWRkX2NpcmNsZSB7XG4gICAgICAgICAgICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgICYuaWNvbi1yZW1vdmVfY2lyY2xlIHtcbiAgICAgICAgICAgIGNvbG9yOiBvcmFuZ2VyZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAubm90aWZpY2F0aW9uLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgLm5vdGlmaWNhdGlvbi1tZXNzYWdlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5vdGlmaWNhdGlvbi10eXBlIHtcbiAgICAgICAgICBjb2xvcjogI2FhYTtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4ubm90aWZpY2F0aW9uLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMy44ZW07XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjNzIGxpbmVhciwgb3BhY2l0eSAwLjNzIGxpbmVhcjtcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxufVxuXG46Om5nLWRlZXAgYm9keVtkaXI9XCJydGxcIl0ge1xuICAubmdkLW5vdGlmaWNhdGlvbi13cmFwcGVyIHtcbiAgICByaWdodDogYXV0bztcbiAgICBsZWZ0OiAwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICBkaXJlY3Rpb246IHJ0bCAhaW1wb3J0YW50O1xuXG4gICAgLnNlYXJjaC1idG4ge1xuICAgICAgJi5jbG9zZS1zZWFyY2gtYmFyIHtcbiAgICAgICAgcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbGVmdDogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAubm90aWZpY2F0aW9uLWxpc3Qge1xuICAgIHVsIHtcbiAgICAgIGxpIHtcbiAgICAgICAgLm5vdGlmaWNhdGlvbi1jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIubm90aWZpY2F0aW9uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0M3B4O1xuICBoZWlnaHQ6IDQzcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjYWFhO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ub3RpZmljYXRpb24tY29udGFpbmVyOmZvY3VzIHtcbiAgY29sb3I6ICNhYWEgIWltcG9ydGFudDtcbn1cbi5ub3RpZmljYXRpb24tY29udGFpbmVyLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICM0Yzg0ZmY7XG59XG4ubm90aWZpY2F0aW9uLWNvbnRhaW5lciAubm90aWZpY2F0aW9uLWJhZGdlIHtcbiAgYm9yZGVyOiAycHggc29saWQgb3JhbmdlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgcmlnaHQ6IDNweDtcbn1cbi5ub3RpZmljYXRpb24tY29udGFpbmVyOmhvdmVyIGkge1xuICBjb2xvcjogIzRjODRmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAubm90aWZpY2F0aW9uLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG59XG5cbi5uZ2Qtbm90aWZpY2F0aW9uLXdyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMy44ZW07XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMzAwcHg7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk4KTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCA5cHggLTEwcHggIzk0OTE5MSBpbnNldDtcbiAgei1pbmRleDogMjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbn1cbi5uZ2Qtbm90aWZpY2F0aW9uLXdyYXBwZXIuYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuLm5nZC1ub3RpZmljYXRpb24td3JhcHBlciAubm90aWZpY2F0aW9uLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmc6IDE1cHggMTVweCA1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmdkLW5vdGlmaWNhdGlvbi13cmFwcGVyIC5uby1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBtYXJnaW46IDcwcHggMTVweCAxNXB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLm5nZC1ub3RpZmljYXRpb24td3JhcHBlciAubm8tY29udGVudCBpIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogb3JhbmdlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubmdkLW5vdGlmaWNhdGlvbi13cmFwcGVyIC5zZWFyY2gtYnRuIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDNweCA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDNweDtcbn1cbi5uZ2Qtbm90aWZpY2F0aW9uLXdyYXBwZXIgLnNlYXJjaC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xufVxuLm5nZC1ub3RpZmljYXRpb24td3JhcHBlciAuc2VhcmNoLWJ0bi5jbG9zZS1zZWFyY2gtYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDRweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ubmdkLW5vdGlmaWNhdGlvbi13cmFwcGVyIC5zZWFyY2gtaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIGxlZnQ6IDVweDtcbn1cbi5uZ2Qtbm90aWZpY2F0aW9uLXdyYXBwZXIgLnNlYXJjaC1pbnB1dCBpbnB1dFt0eXBlPXRleHRdIHtcbiAgYm9yZGVyLWNvbG9yOiAjZWFlYWVhICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLm5vdGlmaWNhdGlvbi1saXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIGJvdHRvbTogMHB4O1xufVxuLm5vdGlmaWNhdGlvbi1saXN0IHVsIHtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5ub3RpZmljYXRpb24tbGlzdCB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubm90aWZpY2F0aW9uLWxpc3QgdWwgbGkgLm5vdGlmaWNhdGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICB3aWR0aDogNjB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubm90aWZpY2F0aW9uLWxpc3QgdWwgbGkgLm5vdGlmaWNhdGlvbi1pY29uIGkuaWNvbi1jb21tZW50IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cbi5ub3RpZmljYXRpb24tbGlzdCB1bCBsaSAubm90aWZpY2F0aW9uLWljb24gaS5pY29uLWNhbGxfbWFkZSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5ub3RpZmljYXRpb24tbGlzdCB1bCBsaSAubm90aWZpY2F0aW9uLWljb24gaS5pY29uLWNhbGxfbWlzc2VkIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5ub3RpZmljYXRpb24tbGlzdCB1bCBsaSAubm90aWZpY2F0aW9uLWljb24gaS5pY29uLW1haWxfb3V0bGluZSB7XG4gIGNvbG9yOiAjNGM4NGZmO1xufVxuLm5vdGlmaWNhdGlvbi1saXN0IHVsIGxpIC5ub3RpZmljYXRpb24taWNvbiBpLmljb24tZXJyb3Ige1xuICBjb2xvcjogI2UyYTcwMDtcbn1cbi5ub3RpZmljYXRpb24tbGlzdCB1bCBsaSAubm90aWZpY2F0aW9uLWljb24gaS5pY29uLWFkZF9jaXJjbGUge1xuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XG59XG4ubm90aWZpY2F0aW9uLWxpc3QgdWwgbGkgLm5vdGlmaWNhdGlvbi1pY29uIGkuaWNvbi1yZW1vdmVfY2lyY2xlIHtcbiAgY29sb3I6IG9yYW5nZXJlZDtcbn1cbi5ub3RpZmljYXRpb24tbGlzdCB1bCBsaSAubm90aWZpY2F0aW9uLWNvbnRlbnQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5ub3RpZmljYXRpb24tbGlzdCB1bCBsaSAubm90aWZpY2F0aW9uLWNvbnRlbnQgLm5vdGlmaWNhdGlvbi1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG4ubm90aWZpY2F0aW9uLWxpc3QgdWwgbGkgLm5vdGlmaWNhdGlvbi1jb250ZW50IC5ub3RpZmljYXRpb24tdHlwZSB7XG4gIGNvbG9yOiAjYWFhO1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm5vdGlmaWNhdGlvbi1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDMuOGVtO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4zcyBsaW5lYXIsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XG59XG4ubm90aWZpY2F0aW9uLW92ZXJsYXkuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuOjpuZy1kZWVwIGJvZHlbZGlyPXJ0bF0gLm5nZC1ub3RpZmljYXRpb24td3JhcHBlciB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIGRpcmVjdGlvbjogcnRsICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgYm9keVtkaXI9cnRsXSAubmdkLW5vdGlmaWNhdGlvbi13cmFwcGVyIC5zZWFyY2gtYnRuLmNsb3NlLXNlYXJjaC1iYXIge1xuICByaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBsZWZ0OiA1cHg7XG59XG46Om5nLWRlZXAgYm9keVtkaXI9cnRsXSAubm90aWZpY2F0aW9uLWxpc3QgdWwgbGkgLm5vdGlmaWNhdGlvbi1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59Il19 */"];



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/components/notification-list/notification-list.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/components/notification-list/notification-list.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: NotificationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationListComponent", function() { return NotificationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NotificationListComponent = /** @class */ (function () {
    function NotificationListComponent(store) {
        this.store = store;
        this.notificationStatus = false;
        this.searchStatus = false;
    }
    NotificationListComponent.prototype.clickout = function (event) {
        if (this.notificationStatus) {
            var path = event.path || (event.composedPath && event.composedPath()) || this.composedPath(event.target);
            var isTarget = path.filter(function (x) { return x.id === 'notification-list' || x.id === 'notification-button'; });
            if (isTarget.length === 0) {
                this.ToggleNotification();
            }
        }
    };
    NotificationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('ng5').subscribe(function (_a) {
            var notifications = _a.notifications;
            _this.notifications = notifications;
            _this.notificationsBackup = notifications;
        });
    };
    NotificationListComponent.prototype.ToggleNotification = function () {
        this.notificationStatus = (this.notificationStatus) ? false : true;
    };
    NotificationListComponent.prototype.ToggleSearch = function () {
        this.searchStatus = (this.searchStatus) ? false : true;
    };
    NotificationListComponent.prototype.filterNotifications = function (value) {
        var filtered = this.notificationsBackup.filter(function (x) { return x.message.indexOf(value) > -1 || x.title.indexOf(value) > -1; });
        this.notifications = (filtered.length) ? filtered : this.notificationsBackup;
    };
    NotificationListComponent.prototype.composedPath = function (el) {
        var path = [];
        while (el) {
            path.push(el);
            if (el.tagName === 'HTML') {
                path.push(document);
                path.push(window);
                return path;
            }
            el = el.parentElement;
        }
    };
    return NotificationListComponent;
}());



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/components/profile-menu/profile-menu.component.ngfactory.js":
/*!*****************************************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/components/profile-menu/profile-menu.component.ngfactory.js ***!
  \*****************************************************************************************************/
/*! exports provided: RenderType_ProfileMenuComponent, View_ProfileMenuComponent_0, View_ProfileMenuComponent_Host_0, ProfileMenuComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ProfileMenuComponent", function() { return RenderType_ProfileMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProfileMenuComponent_0", function() { return View_ProfileMenuComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProfileMenuComponent_Host_0", function() { return View_ProfileMenuComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileMenuComponentNgFactory", function() { return ProfileMenuComponentNgFactory; });
/* harmony import */ var _profile_menu_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-menu.component.scss.shim.ngstyle */ "./projects/core/src/lib/ng5-basic/components/profile-menu/profile-menu.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-menu.component */ "./projects/core/src/lib/ng5-basic/components/profile-menu/profile-menu.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_ProfileMenuComponent = [_profile_menu_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ProfileMenuComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ProfileMenuComponent, data: {} });

function View_ProfileMenuComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "avatar-name app-avatar-name"], ["style", "text-transform: uppercase;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.name(); _ck(_v, 1, 0, currVal_0); }); }
function View_ProfileMenuComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "avatar-container d-flex flex-row justify-content-center align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProfileMenuComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "div", [["class", "pname"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "a", [["class", "app-profile-view"], ["routerLink", "/profile"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""]))], function (_ck, _v) { var currVal_0 = true; _ck(_v, 3, 0, currVal_0); var currVal_3 = "/profile"; _ck(_v, 6, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).target; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).href; _ck(_v, 5, 0, currVal_1, currVal_2); var currVal_4 = _co.display; _ck(_v, 7, 0, currVal_4); }); }
function View_ProfileMenuComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-profile-menu", [], null, null, null, View_ProfileMenuComponent_0, RenderType_ProfileMenuComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _profile_menu_component__WEBPACK_IMPORTED_MODULE_4__["ProfileMenuComponent"], [], null, null)], null, null); }
var ProfileMenuComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-profile-menu", _profile_menu_component__WEBPACK_IMPORTED_MODULE_4__["ProfileMenuComponent"], View_ProfileMenuComponent_Host_0, { user: "user" }, {}, []);



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/components/profile-menu/profile-menu.component.scss.shim.ngstyle.js":
/*!*************************************************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/components/profile-menu/profile-menu.component.scss.shim.ngstyle.js ***!
  \*************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".avatar-container[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.avatar-container[_ngcontent-%COMP%]   .avatar-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  border-radius: 5px;\n}\n@media (max-width: 400px) {\n  .avatar-container[_ngcontent-%COMP%]   .avatar-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 35px;\n  }\n}\n.avatar-container[_ngcontent-%COMP%]   .avatar-name[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 5px;\n  background: #4c84ff;\n  color: #fff;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  font-weight: 600;\n}\n@media (max-width: 400px) {\n  .avatar-container[_ngcontent-%COMP%]   .avatar-name[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n  }\n}\n.avatar-container[_ngcontent-%COMP%]:hover {\n  color: #4c84ff;\n}\n@media (max-width: 475px) {\n  .avatar-container[_ngcontent-%COMP%]   .pname[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-size: 14px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 95px;\n  }\n}\n.pname[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9uZzUtYmFzaWMvY29tcG9uZW50cy9wcm9maWxlLW1lbnUvcHJvZmlsZS1tZW51LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvY29yZS9zcmMvbGliL25nNS1iYXNpYy9jb21wb25lbnRzL3Byb2ZpbGUtbWVudS9wcm9maWxlLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUEwQkksZUFBQTtBQ3hCSjtBREFRO0VBQ0ksV0FBQTtFQUlBLGtCQUFBO0FDRFo7QURGWTtFQUZKO0lBR1EsV0FBQTtFQ0tkO0FBQ0Y7QURBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDRVI7QUREUTtFQVZKO0lBV1EsV0FBQTtJQUNBLFlBQUE7RUNJVjtBQUNGO0FEREk7RUFDSSxjQUFBO0FDR1I7QURESTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsdUJBQUE7SUFDQSxlQUFBO0VDR1Y7QUFDRjtBRENBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDRUoiLCJmaWxlIjoicHJvamVjdHMvY29yZS9zcmMvbGliL25nNS1iYXNpYy9jb21wb25lbnRzL3Byb2ZpbGUtbWVudS9wcm9maWxlLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFyLWNvbnRhaW5lcntcbiAgIC5hdmF0YXItaW1hZ2Uge1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYXZhdGFyLW5hbWUge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0Yzg0ZmY7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogNDAwcHgpIHtcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICB9XG4gICAgfSBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjpob3ZlcntcbiAgICAgICAgY29sb3I6ICM0Yzg0ZmY7XG4gICAgfVxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDQ3NXB4KSB7XG4gICAgICAgIC5wbmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA5NXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucG5hbWUge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMDtcbn1cbiIsIi5hdmF0YXItY29udGFpbmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmF2YXRhci1jb250YWluZXIgLmF2YXRhci1pbWFnZSBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5hdmF0YXItY29udGFpbmVyIC5hdmF0YXItaW1hZ2UgaW1nIHtcbiAgICB3aWR0aDogMzVweDtcbiAgfVxufVxuLmF2YXRhci1jb250YWluZXIgLmF2YXRhci1uYW1lIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjNGM4NGZmO1xuICBjb2xvcjogI2ZmZjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmF2YXRhci1jb250YWluZXIgLmF2YXRhci1uYW1lIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gIH1cbn1cbi5hdmF0YXItY29udGFpbmVyOmhvdmVyIHtcbiAgY29sb3I6ICM0Yzg0ZmY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDc1cHgpIHtcbiAgLmF2YXRhci1jb250YWluZXIgLnBuYW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXgtd2lkdGg6IDk1cHg7XG4gIH1cbn1cblxuLnBuYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMDtcbn0iXX0= */"];



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/components/profile-menu/profile-menu.component.ts":
/*!*******************************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/components/profile-menu/profile-menu.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProfileMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileMenuComponent", function() { return ProfileMenuComponent; });
var ProfileMenuComponent = /** @class */ (function () {
    function ProfileMenuComponent() {
        this.user = null;
        this.display = '';
    }
    ProfileMenuComponent.prototype.name = function () {
        var user = this.user;
        if (!user) {
            return 'GU';
        }
        if (user.firstname && user.lastname) {
            return "" + user.firstname.substr(0, 1) + user.lastname.substr(0, 1);
        }
        if (user.firstname) {
            return "" + user.firstname.substr(0, 2);
        }
        if (user.lastname) {
            return "" + user.lastname.substr(0, 2);
        }
        return user.email.substr(0, 2);
    };
    return ProfileMenuComponent;
}());



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/components/progress-line/progress-line.component.ngfactory.js":
/*!*******************************************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/components/progress-line/progress-line.component.ngfactory.js ***!
  \*******************************************************************************************************/
/*! exports provided: RenderType_ProgressLineComponent, View_ProgressLineComponent_0, View_ProgressLineComponent_Host_0, ProgressLineComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ProgressLineComponent", function() { return RenderType_ProgressLineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProgressLineComponent_0", function() { return View_ProgressLineComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProgressLineComponent_Host_0", function() { return View_ProgressLineComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressLineComponentNgFactory", function() { return ProgressLineComponentNgFactory; });
/* harmony import */ var _progress_line_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress-line.component.scss.shim.ngstyle */ "./projects/core/src/lib/ng5-basic/components/progress-line/progress-line.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _progress_line_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress-line.component */ "./projects/core/src/lib/ng5-basic/components/progress-line/progress-line.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_ProgressLineComponent = [_progress_line_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ProgressLineComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ProgressLineComponent, data: {} });

function View_ProgressLineComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["class", "progress-line"]], null, null, null, null, null))], null, null); }
function View_ProgressLineComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-progress-line", [], null, null, null, View_ProgressLineComponent_0, RenderType_ProgressLineComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _progress_line_component__WEBPACK_IMPORTED_MODULE_2__["ProgressLineComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ProgressLineComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-progress-line", _progress_line_component__WEBPACK_IMPORTED_MODULE_2__["ProgressLineComponent"], View_ProgressLineComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/components/progress-line/progress-line.component.scss.shim.ngstyle.js":
/*!***************************************************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/components/progress-line/progress-line.component.scss.shim.ngstyle.js ***!
  \***************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".progress-line[_ngcontent-%COMP%], .progress-line[_ngcontent-%COMP%]:before {\n  height: 3px;\n  width: 100%;\n  margin: 0;\n}\n\n.progress-line[_ngcontent-%COMP%] {\n  background-color: #b3d4fc;\n  display: flex;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 3;\n}\n\n.progress-line[_ngcontent-%COMP%]:before {\n  background-color: #3f51b5;\n  content: \"\";\n  -webkit-animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n}\n\n@-webkit-keyframes running-progress {\n  0% {\n    margin-left: 0px;\n    margin-right: 100%;\n  }\n  50% {\n    margin-left: 25%;\n    margin-right: 0%;\n  }\n  100% {\n    margin-left: 100%;\n    margin-right: 0;\n  }\n}\n\n@keyframes running-progress {\n  0% {\n    margin-left: 0px;\n    margin-right: 100%;\n  }\n  50% {\n    margin-left: 25%;\n    margin-right: 0%;\n  }\n  100% {\n    margin-left: 100%;\n    margin-right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9uZzUtYmFzaWMvY29tcG9uZW50cy9wcm9ncmVzcy1saW5lL3Byb2dyZXNzLWxpbmUuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvcHJvZ3Jlc3MtbGluZS9wcm9ncmVzcy1saW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFFQSxTQUFBO0FDREY7O0FER0E7RUFDRSx5QkFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsNEVBQUE7RUFDQSxvRUFBQTtBQ0FGOztBREVBO0VBQ0U7SUFBSyxnQkFBQTtJQUFrQixrQkFBQTtFQ0d2QjtFREZBO0lBQU0sZ0JBQUE7SUFBa0IsZ0JBQUE7RUNNeEI7RURMQTtJQUFPLGlCQUFBO0lBQW1CLGVBQUE7RUNTMUI7QUFDRjs7QURSQTtFQUNFO0lBQUssZ0JBQUE7SUFBa0Isa0JBQUE7RUNZdkI7RURYQTtJQUFNLGdCQUFBO0lBQWtCLGdCQUFBO0VDZXhCO0VEZEE7SUFBTyxpQkFBQTtJQUFtQixlQUFBO0VDa0IxQjtBQUNGIiwiZmlsZSI6InByb2plY3RzL2NvcmUvc3JjL2xpYi9uZzUtYmFzaWMvY29tcG9uZW50cy9wcm9ncmVzcy1saW5lL3Byb2dyZXNzLWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5wcm9ncmVzcy1saW5lLCAucHJvZ3Jlc3MtbGluZTpiZWZvcmUge1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIFxuICBtYXJnaW46IDA7XG59XG4ucHJvZ3Jlc3MtbGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2Q0ZmM7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6MDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5wcm9ncmVzcy1saW5lOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbnRlbnQ6ICcnO1xuICAtd2Via2l0LWFuaW1hdGlvbjogcnVubmluZy1wcm9ncmVzcyAycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlO1xuICBhbmltYXRpb246IHJ1bm5pbmctcHJvZ3Jlc3MgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBydW5uaW5nLXByb2dyZXNzIHtcbiAgMCUgeyBtYXJnaW4tbGVmdDogMHB4OyBtYXJnaW4tcmlnaHQ6IDEwMCU7IH1cbiAgNTAlIHsgbWFyZ2luLWxlZnQ6IDI1JTsgbWFyZ2luLXJpZ2h0OiAwJTsgfVxuICAxMDAlIHsgbWFyZ2luLWxlZnQ6IDEwMCU7IG1hcmdpbi1yaWdodDogMDsgfVxufVxuQGtleWZyYW1lcyBydW5uaW5nLXByb2dyZXNzIHtcbiAgMCUgeyBtYXJnaW4tbGVmdDogMHB4OyBtYXJnaW4tcmlnaHQ6IDEwMCU7IH1cbiAgNTAlIHsgbWFyZ2luLWxlZnQ6IDI1JTsgbWFyZ2luLXJpZ2h0OiAwJTsgfVxuICAxMDAlIHsgbWFyZ2luLWxlZnQ6IDEwMCU7IG1hcmdpbi1yaWdodDogMDsgfVxufSIsIi5wcm9ncmVzcy1saW5lLCAucHJvZ3Jlc3MtbGluZTpiZWZvcmUge1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cblxuLnByb2dyZXNzLWxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNkNGZjO1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMztcbn1cblxuLnByb2dyZXNzLWxpbmU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgY29udGVudDogXCJcIjtcbiAgLXdlYmtpdC1hbmltYXRpb246IHJ1bm5pbmctcHJvZ3Jlc3MgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBydW5uaW5nLXByb2dyZXNzIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgaW5maW5pdGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBydW5uaW5nLXByb2dyZXNzIHtcbiAgMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMDAlO1xuICB9XG4gIDUwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xuICB9XG4gIDEwMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBydW5uaW5nLXByb2dyZXNzIHtcbiAgMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMDAlO1xuICB9XG4gIDUwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xuICB9XG4gIDEwMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufSJdfQ== */"];



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/components/progress-line/progress-line.component.ts":
/*!*********************************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/components/progress-line/progress-line.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProgressLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressLineComponent", function() { return ProgressLineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ProgressLineComponent = /** @class */ (function () {
    function ProgressLineComponent() {
    }
    ProgressLineComponent.prototype.ngOnInit = function () {
    };
    return ProgressLineComponent;
}());



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/components/side-bar/side-bar.component.ngfactory.js":
/*!*********************************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/components/side-bar/side-bar.component.ngfactory.js ***!
  \*********************************************************************************************/
/*! exports provided: RenderType_SideBarComponent, View_SideBarComponent_0, View_SideBarComponent_Host_0, SideBarComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SideBarComponent", function() { return RenderType_SideBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SideBarComponent_0", function() { return View_SideBarComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SideBarComponent_Host_0", function() { return View_SideBarComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponentNgFactory", function() { return SideBarComponentNgFactory; });
/* harmony import */ var _side_bar_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-bar.component.scss.shim.ngstyle */ "./projects/core/src/lib/ng5-basic/components/side-bar/side-bar.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_sidebar_ngx_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ngx-sidebar/ngx-sidebar.component.ngfactory */ "./projects/core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.component.ngfactory.js");
/* harmony import */ var _ngx_sidebar_ngx_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ngx-sidebar/ngx-sidebar.component */ "./projects/core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_configuration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/configuration.service */ "./projects/core/src/lib/ng5-basic/services/configuration.service.ts");
/* harmony import */ var _ngx_sidebar_ngx_sidebar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ngx-sidebar/ngx-sidebar.service */ "./projects/core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.service.ts");
/* harmony import */ var _side_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./side-bar.component */ "./projects/core/src/lib/ng5-basic/components/side-bar/side-bar.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_SideBarComponent = [_side_bar_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SideBarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SideBarComponent, data: {} });

function View_SideBarComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "bd-sidebar"], ["data-simplebar", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { "active": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "ngx-sidebar", [], null, [["window", "keyup"]], function (_v, en, $event) { var ad = true; if (("window:keyup" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onKeyDown($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _ngx_sidebar_ngx_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_NgxSidebarComponent_0"], _ngx_sidebar_ngx_sidebar_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_NgxSidebarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 638976, null, 0, _ngx_sidebar_ngx_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["NgxSidebarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _ngx_sidebar_ngx_sidebar_service__WEBPACK_IMPORTED_MODULE_7__["NgxSidebarService"]], { navigation: [0, "navigation"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "bd-sidebar"; var currVal_1 = _ck(_v, 3, 0, _co.isSidebarVisible); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.navigation; _ck(_v, 5, 0, currVal_2); }, null); }
function View_SideBarComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-side-bar", [], null, null, null, View_SideBarComponent_0, RenderType_SideBarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _side_bar_component__WEBPACK_IMPORTED_MODULE_8__["SideBarComponent"], [_services_configuration_service__WEBPACK_IMPORTED_MODULE_6__["ConfigurationService"], _ngx_sidebar_ngx_sidebar_service__WEBPACK_IMPORTED_MODULE_7__["NgxSidebarService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SideBarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-side-bar", _side_bar_component__WEBPACK_IMPORTED_MODULE_8__["SideBarComponent"], View_SideBarComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/components/side-bar/side-bar.component.scss.shim.ngstyle.js":
/*!*****************************************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/components/side-bar/side-bar.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".bd-sidebar[_ngcontent-%COMP%] {\n  width: 280px;\n  position: fixed !important;\n  top: 3.8em;\n  left: 0;\n  bottom: 0;\n  z-index: 1;\n  background: #fff;\n  padding: 0;\n  transform: translateX(-100%);\n  transition-duration: 0.5s;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: transform;\n  box-shadow: 6px 0 6px rgba(0, 0, 0, 0.1);\n}\n.bd-sidebar.active[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n  body[dir=rtl] .bd-sidebar {\n  right: 0;\n  left: auto;\n  transform: translateX(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9uZzUtYmFzaWMvY29tcG9uZW50cy9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9uZzUtYmFzaWMvc2Nzcy9fbGF5b3V0LnNjc3MiLCJwcm9qZWN0cy9jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQ0hZO0VESVosMEJBQUE7RUFDQSxVQ0pZO0VES1osT0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLDREQUFBO0VBQ0EsOEJBQUE7RUFDQSx3Q0FBQTtBRURKO0FGR0k7RUFDSSx3QkFBQTtBRURSO0FGTUU7RUFDRSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FFSEoiLCJmaWxlIjoicHJvamVjdHMvY29yZS9zcmMvbGliL25nNS1iYXNpYy9jb21wb25lbnRzL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc2Nzcy9sYXlvdXQnO1xuXG4uYmQtc2lkZWJhciB7XG4gICAgd2lkdGg6ICRzaWRlYmFyX3dpZHRoO1xuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgIHRvcDogJG5hdmJhcl9oZWlnaHQ7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogMTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuNXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICBib3gtc2hhZG93OiA2cHggMCA2cHggcmdiYSgwLDAsMCwuMSk7XG5cbiAgICAmLmFjdGl2ZXtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cbn1cblxuOjpuZy1kZWVwIGJvZHlbZGlyPVwicnRsXCJdIHtcbiAgLmJkLXNpZGViYXJ7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogYXV0bztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH0gICAgXG59XG4iLCIkc2lkZWJhcl93aWR0aDogMjgwcHg7XG4kbmF2YmFyX2hlaWdodDogMy44ZW07IiwiLmJkLXNpZGViYXIge1xuICB3aWR0aDogMjgwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICB0b3A6IDMuOGVtO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICBib3gtc2hhZG93OiA2cHggMCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmJkLXNpZGViYXIuYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuXG46Om5nLWRlZXAgYm9keVtkaXI9cnRsXSAuYmQtc2lkZWJhciB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiBhdXRvO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG59Il19 */"];



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/components/side-bar/side-bar.component.ts":
/*!***********************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/components/side-bar/side-bar.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(config, sidebar) {
        var _this = this;
        this.config = config;
        this.sidebar = sidebar;
        this.isSidebarVisible = true;
        this.keepOpen = false;
        this.navigation = [];
        this.sidebar.SidebarVisibilityState.subscribe(function (val) { return (_this.isSidebarVisible = val); });
    }
    SideBarComponent.prototype.ngOnInit = function () {
        this.navigation = this.config.getNavigationItems();
        this.isSidebarVisible = this.sidebar.IsSidebarVisibleInitially();
    };
    return SideBarComponent;
}());



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/definitions.ts":
/*!********************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/definitions.ts ***!
  \********************************************************/
/*! exports provided: ActivityTypes, TemperatureCustomization, CloudDeviceType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityTypes", function() { return ActivityTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatureCustomization", function() { return TemperatureCustomization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudDeviceType", function() { return CloudDeviceType; });
/**
 * Occures when a device changes
 */
var ActivityTypes;
(function (ActivityTypes) {
    ActivityTypes[ActivityTypes["DevicePinChange"] = 0] = "DevicePinChange";
})(ActivityTypes || (ActivityTypes = {}));
/**
 * Represents a change in device data, when happens inside a analog device reader;
 * such as temperature, pressure, and humidity.
 */
var TemperatureCustomization;
(function (TemperatureCustomization) {
    TemperatureCustomization[TemperatureCustomization["SidebarRealTimeValue"] = 0] = "SidebarRealTimeValue";
    TemperatureCustomization[TemperatureCustomization["SidebarLastWeekAverage"] = 1] = "SidebarLastWeekAverage";
})(TemperatureCustomization || (TemperatureCustomization = {}));
var CloudDeviceType;
(function (CloudDeviceType) {
    CloudDeviceType[CloudDeviceType["TemperatureSensor"] = 0] = "TemperatureSensor";
    CloudDeviceType[CloudDeviceType["LampBridge"] = 1] = "LampBridge";
    CloudDeviceType[CloudDeviceType["HumiditySensor"] = 2] = "HumiditySensor";
    CloudDeviceType[CloudDeviceType["CO2Sensor"] = 3] = "CO2Sensor";
})(CloudDeviceType || (CloudDeviceType = {}));


/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.component.ngfactory.js":
/*!****************************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.component.ngfactory.js ***!
  \****************************************************************************************/
/*! exports provided: RenderType_NgxSidebarComponent, View_NgxSidebarComponent_0, View_NgxSidebarComponent_Host_0, NgxSidebarComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NgxSidebarComponent", function() { return RenderType_NgxSidebarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NgxSidebarComponent_0", function() { return View_NgxSidebarComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NgxSidebarComponent_Host_0", function() { return View_NgxSidebarComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSidebarComponentNgFactory", function() { return NgxSidebarComponentNgFactory; });
/* harmony import */ var _ngx_sidebar_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngx-sidebar.component.scss.shim.ngstyle */ "./projects/core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngx-sidebar.component */ "./projects/core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.component.ts");
/* harmony import */ var _services_configuration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/configuration.service */ "./projects/core/src/lib/ng5-basic/services/configuration.service.ts");
/* harmony import */ var _ngx_sidebar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ngx-sidebar.service */ "./projects/core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.service.ts");
/* harmony import */ var _t_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../t.pipe */ "./projects/core/src/lib/t.pipe.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_NgxSidebarComponent = [_ngx_sidebar_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_NgxSidebarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_NgxSidebarComponent, data: {} });

function View_NgxSidebarComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "li", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.menuToggle($event, _co.nav);
        var pd_0 = ($event.stopPropagation() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "a", [], [[8, "className", 0], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.onLinkClick(_co.nav) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 671744, [[3, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "i", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](8, 1)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.nav.link ? "opened" : ""); _ck(_v, 1, 0, currVal_0); var currVal_4 = _co.nav.link; _ck(_v, 5, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "ngx-menu-item ngx-menu-link-", _co.nav.class, ""); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).target; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).href; _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3); var currVal_5 = _co.nav.icon; _ck(_v, 6, 0, currVal_5); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _co.nav.title)); _ck(_v, 7, 0, currVal_6); }); }
function View_NgxSidebarComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [["class", "move-back-btn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.GoBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NgxSidebarComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.nav; _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), "move_back")); _ck(_v, 2, 0, currVal_0); }); }
function View_NgxSidebarComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], null, null); }
function View_NgxSidebarComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-sidebar", [], null, [["window", "keyup"]], function (_v, en, $event) { var ad = true; if (("window:keyup" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onKeyDown($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_NgxSidebarComponent_0, RenderType_NgxSidebarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 638976, null, 0, _ngx_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["NgxSidebarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _ngx_sidebar_service__WEBPACK_IMPORTED_MODULE_6__["NgxSidebarService"]], { navigation: [0, "navigation"], containerClass: [1, "containerClass"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.children; var currVal_1 = "child-ul"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_NgxSidebarComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "li", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.menuToggle($event, _v.parent.context.$implicit);
        var pd_0 = ($event.stopPropagation() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "a", [], [[8, "className", 0], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.renderComponents(_v.parent.context.$implicit.component) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 671744, [[5, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "i", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](8, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NgxSidebarComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_0 = (_v.parent.context.$implicit.link ? "opened" : ""); _ck(_v, 1, 0, currVal_0); var currVal_4 = _v.parent.context.$implicit.link; _ck(_v, 5, 0, currVal_4); var currVal_7 = _v.parent.context.$implicit.children; _ck(_v, 10, 0, currVal_7); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "ngx-menu-item ngx-menu-link-", _v.parent.context.$implicit.class, ""); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).target; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).href; _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3); var currVal_5 = _v.parent.context.$implicit.icon; _ck(_v, 6, 0, currVal_5); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _v.parent.context.$implicit.title)); _ck(_v, 7, 0, currVal_6); }); }
function View_NgxSidebarComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NgxSidebarComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_NgxSidebarComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NgxSidebarComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.navigation; _ck(_v, 2, 0, currVal_0); }, null); }
function View_NgxSidebarComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _t_pipe__WEBPACK_IMPORTED_MODULE_7__["TPipe"], [_services_configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { target: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 7, "ul", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NgxSidebarComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, [[1, 3], ["dynamic", 2]], null, 0, null, View_NgxSidebarComponent_3)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NgxSidebarComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.containerClass; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.isRouteFocused; _ck(_v, 6, 0, currVal_1); var currVal_2 = !_co.isRouteFocused; _ck(_v, 9, 0, currVal_2); }, null); }
function View_NgxSidebarComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ngx-sidebar", [], null, [["window", "keyup"]], function (_v, en, $event) { var ad = true; if (("window:keyup" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onKeyDown($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_NgxSidebarComponent_0, RenderType_NgxSidebarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 638976, null, 0, _ngx_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["NgxSidebarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _ngx_sidebar_service__WEBPACK_IMPORTED_MODULE_6__["NgxSidebarService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NgxSidebarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ngx-sidebar", _ngx_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["NgxSidebarComponent"], View_NgxSidebarComponent_Host_0, { navigation: "navigation", containerClass: "containerClass", child: "child", value: "value" }, {}, []);



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.component.scss.shim.ngstyle.js":
/*!************************************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.component.scss.shim.ngstyle.js ***!
  \************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@charset \"UTF-8\";\n.main-ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  position: relative;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: none;\n  position: relative;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\n  content: \"\uE99A\";\n  font-family: \"material\";\n  display: inline-block;\n  top: 16px;\n  right: 15px;\n  position: absolute;\n  font-size: 23px;\n  left: auto;\n  transition: transform 0.3s;\n}\nul[_ngcontent-%COMP%]   li.opened[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\n  transform: rotate(90deg);\n}\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:only-child:after {\n  content: \"\";\n  border: 0;\n}\n.main-ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: block;\n}\n.main-ul[_ngcontent-%COMP%]    > li.opened[_ngcontent-%COMP%] {\n  background: #f7f7f7;\n  border-left: 3px solid #4c84ff;\n}\n.main-ul[_ngcontent-%COMP%]    > li.opened[_ngcontent-%COMP%]   .child-ul[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n}\n.main-ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background: #f7f7f7 !important;\n}\n.main-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[class^=icon-][_ngcontent-%COMP%], .main-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[class^=fa-][_ngcontent-%COMP%] {\n  font-size: 22px;\n  padding-right: 5px;\n  text-align: center;\n  color: #888;\n}\n.main-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[class^=fa-][_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 0 9px;\n}\n.main-ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 400;\n  padding: 20px 20px;\n  color: #333;\n  text-decoration: none;\n}\n.main-ul[_ngcontent-%COMP%]   li.opened[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #4c84ff !important;\n}\n.main-ul[_ngcontent-%COMP%]   li.opened[_ngcontent-%COMP%]    > ngx-sidebar[_ngcontent-%COMP%]    > .child-ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.main-ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background: #fff;\n}\n.child-ul[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  display: none;\n}\n.main-ul[_ngcontent-%COMP%]   li.opened[_ngcontent-%COMP%]    > ngx-sidebar[_ngcontent-%COMP%]    > .child-ul[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.child-ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  position: relative;\n}\n.child-ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\n  color: #4c84ff;\n}\n  body[dir=rtl] .bd-sidebar ul li a {\n  text-align: right;\n}\n  body[dir=rtl] .bd-sidebar ul li > a:after {\n  content: \"\uE999\" !important;\n  right: auto !important;\n  left: 15px !important;\n}\n  body[dir=rtl] .bd-sidebar ul li.opened > a:after {\n  transform: rotate(-90deg) !important;\n}\n  body[dir=rtl] .bd-sidebar .main-ul > li.opened {\n  border-right: 3px solid #4c84ff;\n  border-left: 0 !important;\n}\n  body[dir=rtl] .bd-sidebar .main-ul li i[class^=icon-] {\n  padding-right: 0px !important;\n  padding-left: 5px;\n}\n.move-back-btn[_ngcontent-%COMP%] {\n  padding: 10px 5px;\n  display: block;\n  cursor: pointer;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2NvcmUvc3JjL2xpYi9uZzUtYmFzaWMvbmd4LXNpZGViYXIvbmd4LXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbGVnaW9uL25nLWRhc2hib2FyZC9wcm9qZWN0cy9jb3JlL3NyYy9saWIvbmc1LWJhc2ljL25neC1zaWRlYmFyL25neC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FERUY7QUNDQTtFQUlFLGFBQUE7RUFDQSxrQkFBQTtBRERGO0FDSEU7RUFDRSxrQkFBQTtBREtKO0FDREU7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FER0o7QUNERTtFQUNFLHdCQUFBO0FER0o7QUNERTtFQUNFLFdBQUE7RUFDQSxTQUFBO0FER0o7QUNFRTtFQUNFLGNBQUE7QURDSjtBQ0FJO0VBQ0UsbUJBQUE7RUFDQSw4QkFBQTtBREVOO0FDQU07RUFDRSxtQkFBQTtBREVSO0FDQ0k7RUFDTSw4QkFBQTtBRENWO0FDR0k7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QURETjtBQ0dJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QURETjtBQ0dJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURETjtBQ0dJO0VBQ0UseUJBQUE7QURETjtBQ0dJO0VBQ0UseUJBQUE7QURETjtBQ0lFO0VBQ0UsZ0JBQUE7QURGSjtBQ01BO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FESEY7QUNNQTtFQUNFLHlCQUFBO0FESEY7QUNNQTtFQUNFLGtCQUFBO0FESEY7QUNJRTtFQUNJLGNBQUE7QURGTjtBQ1NNO0VBQ0UsaUJBQUE7QUROUjtBQ1FNO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FETlI7QUNRTTtFQUNFLG9DQUFBO0FETlI7QUNXUTtFQUNFLCtCQUFBO0VBQ0EseUJBQUE7QURUVjtBQ2FRO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtBRFhWO0FDaUJBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FEZEYiLCJmaWxlIjoicHJvamVjdHMvY29yZS9zcmMvbGliL25nNS1iYXNpYy9uZ3gtc2lkZWJhci9uZ3gtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5tYWluLXVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG51bCBsaSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbnVsIGxpIGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG51bCBsaSA+IGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIu6mmlwiO1xuICBmb250LWZhbWlseTogXCJtYXRlcmlhbFwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRvcDogMTZweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBsZWZ0OiBhdXRvO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbn1cbnVsIGxpLm9wZW5lZCA+IGE6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG51bCBsaSA+IGE6b25seS1jaGlsZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlcjogMDtcbn1cblxuLm1haW4tdWwgPiBsaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW4tdWwgPiBsaS5vcGVuZWQge1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM0Yzg0ZmY7XG59XG4ubWFpbi11bCA+IGxpLm9wZW5lZCAuY2hpbGQtdWwge1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xufVxuLm1haW4tdWwgPiBsaSA+IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3ICFpbXBvcnRhbnQ7XG59XG4ubWFpbi11bCBsaSBpW2NsYXNzXj1pY29uLV0sIC5tYWluLXVsIGxpIGlbY2xhc3NePWZhLV0ge1xuICBmb250LXNpemU6IDIycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzg4ODtcbn1cbi5tYWluLXVsIGxpIGlbY2xhc3NePWZhLV0ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDAgOXB4O1xufVxuLm1haW4tdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubWFpbi11bCBsaS5vcGVuZWQgPiBhIHtcbiAgY29sb3I6ICM0Yzg0ZmYgIWltcG9ydGFudDtcbn1cbi5tYWluLXVsIGxpLm9wZW5lZCA+IG5neC1zaWRlYmFyID4gLmNoaWxkLXVsID4gbGkge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuLm1haW4tdWwgPiBsaSA+IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uY2hpbGQtdWwge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tYWluLXVsIGxpLm9wZW5lZCA+IG5neC1zaWRlYmFyID4gLmNoaWxkLXVsIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLmNoaWxkLXVsID4gbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2hpbGQtdWwgPiBsaTpob3ZlciA+IGEge1xuICBjb2xvcjogIzRjODRmZjtcbn1cblxuOjpuZy1kZWVwIGJvZHlbZGlyPXJ0bF0gLmJkLXNpZGViYXIgdWwgbGkgYSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuOjpuZy1kZWVwIGJvZHlbZGlyPXJ0bF0gLmJkLXNpZGViYXIgdWwgbGkgPiBhOmFmdGVyIHtcbiAgY29udGVudDogXCLupplcIiAhaW1wb3J0YW50O1xuICByaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBsZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgYm9keVtkaXI9cnRsXSAuYmQtc2lkZWJhciB1bCBsaS5vcGVuZWQgPiBhOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGJvZHlbZGlyPXJ0bF0gLmJkLXNpZGViYXIgLm1haW4tdWwgPiBsaS5vcGVuZWQge1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjNGM4NGZmO1xuICBib3JkZXItbGVmdDogMCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGJvZHlbZGlyPXJ0bF0gLmJkLXNpZGViYXIgLm1haW4tdWwgbGkgaVtjbGFzc149aWNvbi1dIHtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4ubW92ZS1iYWNrLWJ0biB7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iLCIubWFpbi11bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxudWwgbGkge1xuICBhIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICA+IGE6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTlhXCI7XG4gICAgZm9udC1mYW1pbHk6ICdtYXRlcmlhbCc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRvcDogMTZweDtcbiAgICByaWdodDogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGxlZnQ6IGF1dG87XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcztcbiAgfVxuICAmLm9wZW5lZCA+IGE6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgfVxuICA+IGE6b25seS1jaGlsZDphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBib3JkZXI6IDA7XG4gIH1cbn1cblxuLm1haW4tdWwge1xuICA+IGxpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAmLm9wZW5lZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNGM4NGZmO1xuICAgICAgXG4gICAgICAuY2hpbGQtdWwge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgICAgfVxuICAgIH1cbiAgICA+IGE6aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y3ZjdmNyAhaW1wb3J0YW50O1xuICAgICAgfVxuICB9XG4gIGxpIHtcbiAgICBpW2NsYXNzXj1cImljb24tXCJdLCBpW2NsYXNzXj1cImZhLVwiXSB7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzg4ODtcbiAgICB9XG4gICAgaVtjbGFzc149XCJmYS1cIl0ge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgcGFkZGluZzogMCA5cHg7XG4gICAgfVxuICAgIGEge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICAgICYub3BlbmVkID4gYXtcbiAgICAgIGNvbG9yOiAjNGM4NGZmICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICYub3BlbmVkID4gbmd4LXNpZGViYXIgPiAuY2hpbGQtdWwgPiBsaSB7XG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICA+IGxpID4gYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxufVxuXG4uY2hpbGQtdWwge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tYWluLXVsIGxpLm9wZW5lZCA+IG5neC1zaWRlYmFyID4gLmNoaWxkLXVsIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLmNoaWxkLXVsID4gbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6aG92ZXIgPiBhIHtcbiAgICAgIGNvbG9yOiAjNGM4NGZmO1xuICB9XG59XG5cbjo6bmctZGVlcCBib2R5W2Rpcj1cInJ0bFwiXSB7XG4gIC5iZC1zaWRlYmFye1xuICAgIHVsIGxpIHtcbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICAgID4gYTphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXFxlOTk5XCIgIWltcG9ydGFudDtcbiAgICAgICAgcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgJi5vcGVuZWQgPiBhOmFmdGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgICAubWFpbi11bCB7XG4gICAgICA+IGxpIHtcbiAgICAgICAgJi5vcGVuZWQge1xuICAgICAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICM0Yzg0ZmY7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGkge1xuICAgICAgICBpW2NsYXNzXj1cImljb24tXCJdIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLm1vdmUtYmFjay1idG4ge1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */"];



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.component.ts":
/*!******************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.component.ts ***!
  \******************************************************************************/
/*! exports provided: NgxSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSidebarComponent", function() { return NgxSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



var NgxSidebarComponent = /** @class */ (function () {
    function NgxSidebarComponent(renderer, router, config, compiler, sidebar) {
        var _this = this;
        this.renderer = renderer;
        this.router = router;
        this.config = config;
        this.compiler = compiler;
        this.sidebar = sidebar;
        this.containerClass = 'main-ul';
        this.state = true;
        this.currentRoute = null;
        this.isRouteFocused = false;
        this.nav = null;
        this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.currentRoute = e.url;
                _this.IsRouteFocused(e.url);
            }
        });
    }
    NgxSidebarComponent.prototype.onKeyDown = function (event) {
        var $event = document.all ? window.event : event;
        if (!/^(?:input|textarea|select|button)$/i.test($event.target.tagName)) {
            if (event.key === 'm' || event.key === 'M') {
                this.sidebar.Toggle();
            }
        }
    };
    NgxSidebarComponent.prototype.destroyComponent = function () {
        this.componentRef.destroy();
    };
    NgxSidebarComponent.prototype.renderComponents = function (childComponent) {
        if (!childComponent) {
            return;
        }
        var componentFactory = this.compiler.resolveComponentFactory(childComponent);
        this.componentRef = this.target.createComponent(componentFactory);
        this.renderComponent();
    };
    NgxSidebarComponent.prototype.ngOnChanges = function (changes) {
        this.renderComponent();
    };
    NgxSidebarComponent.prototype.GoBack = function () {
        history.back();
        this.destroyComponent();
    };
    NgxSidebarComponent.prototype.ngOnInit = function () {
        this.currentRoute = this.router.url;
        this.IsRouteFocused(this.currentRoute);
    };
    NgxSidebarComponent.prototype.renderComponent = function () {
        if (this.componentRef)
            this.componentRef.instance.value = this.value;
    };
    NgxSidebarComponent.prototype.onLinkClick = function (item) {
        this.IsRouteFocused(item.link);
    };
    NgxSidebarComponent.prototype.IsRouteFocused = function (url) {
        var $nav = null;
        var focused = false;
        var flatNav = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["flatten"])(this.navigation);
        flatNav.map(function (nav) {
            if (nav.link === url && nav.focused) {
                focused = true;
                $nav = nav;
            }
        });
        this.isRouteFocused = focused;
        if (this.isRouteFocused) {
            this.nav = $nav;
        }
        else {
            this.nav = null;
        }
    };
    NgxSidebarComponent.prototype.menuToggle = function (event, nav) {
        if (nav.hasOwnProperty('children')) {
            this.state = !event.currentTarget.classList.contains('opened')
                ? true
                : false;
            this.renderer.setElementClass(event.currentTarget, 'opened', this.state);
            this.state = !this.state;
        }
        else {
            this.sidebar.Hide();
        }
    };
    return NgxSidebarComponent;
}());



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.service.ts":
/*!****************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.service.ts ***!
  \****************************************************************************/
/*! exports provided: NgxSidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSidebarService", function() { return NgxSidebarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_globalization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/globalization.service */ "./projects/core/src/lib/ng5-basic/services/globalization.service.ts");




var LOCAL_STORAGE_KEY = 'ngx_sidebar_visibility';
var NgxSidebarService = /** @class */ (function () {
    function NgxSidebarService(config, globalization) {
        var _this = this;
        this.config = config;
        this.globalization = globalization;
        this.SidebarVisibilityState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.eventIsActive = false;
        this.eventMoveChange = { x: undefined, y: undefined };
        this.eventStartPoint = { x: undefined, y: undefined };
        this.SidebarVisibilityState.next(this.IsSidebarVisibleInitially());
        window.addEventListener('resize', function (event) {
            if (event.target.innerWidth < 992) {
                _this.Hide();
            }
            else {
                _this.Show();
            }
        });
        this.addListenerMulti(window, 'touchstart touchend touchmove mousedown mouseup mousemove', function (e) {
            var path = e.path ||
                (e.composedPath && e.composedPath()) ||
                _this.composedPath(e.target);
            _this.sidebarStatus(path).then(function (status) {
                if (!status) {
                    if (e.type === 'touchstart' || e.type === 'mousedown') {
                        _this.eventIsActive = true;
                    }
                    if (e.type === 'touchend' || e.type === 'mouseup') {
                        if (window.innerWidth < 992) {
                            if (!(Math.abs(_this.eventStartPoint.y - _this.eventMoveChange.y) >
                                50)) {
                                if (_this.globalization.getLayoutDirection() === 'rtl') {
                                    if (_this.eventStartPoint.x > _this.eventMoveChange.x + 15) {
                                        _this.Show();
                                    }
                                    else if (_this.eventStartPoint.x <
                                        _this.eventMoveChange.x - 15) {
                                        _this.Hide();
                                    }
                                }
                                else {
                                    if (_this.eventStartPoint.x > _this.eventMoveChange.x + 15) {
                                        _this.Hide();
                                    }
                                    else if (_this.eventStartPoint.x <
                                        _this.eventMoveChange.x - 15) {
                                        _this.Show();
                                    }
                                }
                            }
                        }
                        _this.eventIsActive = false;
                        _this.eventStartPoint = { x: undefined, y: undefined };
                    }
                    if (_this.eventIsActive &&
                        (e.type === 'mousemove' || e.type === 'touchmove')) {
                        if (_this.eventStartPoint.x === undefined &&
                            _this.eventStartPoint.y === undefined) {
                            _this.eventStartPoint = _this.getClientPostion(e);
                        }
                        _this.eventMoveChange = _this.getClientPostion(e);
                    }
                }
            });
        });
    }
    NgxSidebarService.prototype.addListenerMulti = function (el, s, fn) {
        s.split(' ').forEach(function (e) { return el.addEventListener(e, fn, false); });
    };
    NgxSidebarService.prototype.getClientPostion = function (e) {
        switch (e.type) {
            case 'mousemove':
                return {
                    x: e.clientX,
                    y: e.clientY
                };
            case 'touchmove':
                return {
                    x: e.changedTouches[0].clientX,
                    y: e.changedTouches[0].clientY
                };
        }
    };
    NgxSidebarService.prototype.sidebarStatus = function (el) {
        return new Promise(function (res, rej) {
            var e_1, _a;
            try {
                for (var el_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](el), el_1_1 = el_1.next(); !el_1_1.done; el_1_1 = el_1.next()) {
                    var e = el_1_1.value;
                    if (e.tagName !== undefined) {
                        if (e.hasAttribute('ngx-sidebar-off')) {
                            res(true);
                            return;
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (el_1_1 && !el_1_1.done && (_a = el_1.return)) _a.call(el_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            res(false);
        });
    };
    NgxSidebarService.prototype.composedPath = function (el) {
        var path = [];
        while (el) {
            path.push(el);
            if (el.tagName === 'HTML') {
                path.push(document);
                path.push(window);
                return path;
            }
            el = el.parentElement;
        }
    };
    NgxSidebarService.prototype.GetCachedState = function () {
        var state = null;
        try {
            state = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        }
        catch (error) {
            // @ left intentionally blank
        }
        return state === true || state === false ? state : null;
    };
    NgxSidebarService.prototype.IsSidebarVisibleInitially = function () {
        if (this.GetCachedState() === true || this.GetCachedState() === false) {
            return this.GetCachedState();
        }
        if (this.config.sidebar && this.config.sidebar.visible === false) {
            return false;
        }
        if (window.innerWidth < 992) {
            return false;
        }
        return true;
    };
    NgxSidebarService.prototype.Show = function () {
        this.SidebarVisibilityState.next(true);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(true));
    };
    NgxSidebarService.prototype.Hide = function () {
        this.SidebarVisibilityState.next(false);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(false));
    };
    NgxSidebarService.prototype.Toggle = function () {
        if (this.IsVisible) {
            return this.Hide();
        }
        return this.Show();
    };
    Object.defineProperty(NgxSidebarService.prototype, "IsVisible", {
        get: function () {
            return this.SidebarVisibilityState.value;
        },
        enumerable: true,
        configurable: true
    });
    NgxSidebarService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ factory: function NgxSidebarService_Factory() { return new NgxSidebarService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"]("config"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_globalization_service__WEBPACK_IMPORTED_MODULE_3__["GlobalizationService"])); }, token: NgxSidebarService, providedIn: "root" });
    return NgxSidebarService;
}());



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/reducers/activity.reducer.ts":
/*!**********************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/reducers/activity.reducer.ts ***!
  \**********************************************************************/
/*! exports provided: activitiesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activitiesReducer", function() { return activitiesReducer; });
/* harmony import */ var _services_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/common */ "./projects/core/src/lib/ng5-basic/services/common.ts");

function activitiesReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'RESET':
            return [];
        case 'UPDATE_ACTIVITY':
            return Object(_services_common__WEBPACK_IMPORTED_MODULE_0__["UpdateOrPrepend"])(action.payload, state, 'id');
    }
    return state;
}


/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/reducers/notifications.reducer.ts":
/*!***************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/reducers/notifications.reducer.ts ***!
  \***************************************************************************/
/*! exports provided: notificationsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationsReducer", function() { return notificationsReducer; });
function notificationsReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'RESET':
            return [];
        case 'INSERT_NOTIFICATION':
            return state.concat(action.payload);
    }
    return state;
}


/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/services/actions.service.ts":
/*!*********************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/services/actions.service.ts ***!
  \*********************************************************************/
/*! exports provided: ActionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsService", function() { return ActionsService; });
var ActionsService = /** @class */ (function () {
    function ActionsService() {
    }
    ActionsService.prototype.scrollTop = function () {
        var el = new SimpleBar(document.getElementById('layout'));
        el.scrollContentEl.scrollTop = 0;
    };
    return ActionsService;
}());



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/services/common.ts":
/*!************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/services/common.ts ***!
  \************************************************************/
/*! exports provided: GetNetworkError, error, IsSuccessEntity, IsDataSource, handleRoute, urlMatch, UpdateOrPrepend, UpdateOrInsert, ComponentCommon, parseStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNetworkError", function() { return GetNetworkError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsSuccessEntity", function() { return IsSuccessEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsDataSource", function() { return IsDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleRoute", function() { return handleRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlMatch", function() { return urlMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOrPrepend", function() { return UpdateOrPrepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOrInsert", function() { return UpdateOrInsert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentCommon", function() { return ComponentCommon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStorage", function() { return parseStorage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var url_matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-matcher */ "./projects/core/node_modules/url-matcher/lib/index.js");
/* harmony import */ var url_matcher__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url_matcher__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





function GetNetworkError() {
    return {
        error: {
            code: 0,
            message: 'It seems you are not connected to internet. Please check your connection and try again'
        }
    };
}
function error(response, fieldName) {
    if (!response || !response.error || !response.error.errors) {
        return '';
    }
    var $error = response.error.errors.find(function (x) { return x.location === fieldName; });
    return $error ? $error.message : '';
}
function IsSuccessEntity(response) {
    return (response && response.data && response.data.items && response.data.items[0]);
}
function IsDataSource(data) {
    if (!data.value) {
        return false;
    }
    if (!data.dataSourceId) {
        return false;
    }
    return true;
}
function handleRoute(req, routes, prefixAPI) {
    var _a = urlMatch(req.url, req.method, routes, prefixAPI), url = _a.url, match = _a.match;
    var action = routes[url];
    var result = this[action].call(this, req, match);
    var mockResponse = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
        body: result,
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](),
        status: result.data ? 200 : result.error.code,
        statusText: 'OK',
        url: req.url
    });
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(mockResponse);
}
function urlMatch(url, method, routes, prefixAPI) {
    var e_1, _a;
    if (method === void 0) { method = null; }
    url = url.replace(prefixAPI, '');
    try {
        for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object.keys(routes)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var route = _c.value;
            var urlMethod = route.split(' ');
            var result = '';
            if (urlMethod.length === 2) {
                if (method === null) {
                    result = Object(url_matcher__WEBPACK_IMPORTED_MODULE_3__["matchPattern"])(urlMethod[1], url);
                }
                else {
                    if (urlMethod[0].toUpperCase() === method.toUpperCase()) {
                        result = Object(url_matcher__WEBPACK_IMPORTED_MODULE_3__["matchPattern"])(urlMethod[1], url);
                    }
                }
            }
            else {
                result = Object(url_matcher__WEBPACK_IMPORTED_MODULE_3__["matchPattern"])(route, url);
            }
            if (result) {
                return {
                    url: route,
                    match: result
                };
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return null;
}
function UpdateOrPrepend(element, context, compareKey) {
    var updated = false;
    var newContext;
    newContext = context.map(function ($el) {
        if ($el[compareKey] === element[compareKey]) {
            updated = true;
            return element;
        }
        return $el;
    });
    if (!updated) {
        newContext = [element].concat(context);
    }
    return newContext;
}
function UpdateOrInsert(element, context, compareKey, mergeWithExisting) {
    if (mergeWithExisting === void 0) { mergeWithExisting = false; }
    var updated = false;
    var newContext;
    newContext = context.map(function ($el) {
        if ($el[compareKey] === element[compareKey]) {
            updated = true;
            if (mergeWithExisting) {
                return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["merge"])($el, element);
            }
            return element;
        }
        return $el;
    });
    if (!updated) {
        newContext = context.concat(element);
    }
    return newContext;
}
/**
 * @description Set of functions that every component needs.
 * You need to bind an instance of this component to your angular component.
 * Helps for http requests, working progress, managing response.
 */
var ComponentCommon = /** @class */ (function () {
    function ComponentCommon() {
    }
    ComponentCommon.prototype.ngOnDestroy = function () { };
    ComponentCommon.prototype.ResponseError = function (error2) {
        var toastOptions = {
            title: error2.status.toString(),
            msg: error2.statusText,
            showClose: true,
            timeout: 5000
        };
        this.toastaService.info(toastOptions);
    };
    ComponentCommon.prototype.InternalError = function (error2) {
        var toastOptions = {
            title: error2.name,
            msg: error2.message,
            showClose: true,
            timeout: 5000
        };
        this.toastaService.error(toastOptions);
    };
    ComponentCommon.prototype.StartRequest = function (callableRequest) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.working = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, callableRequest()];
                    case 2:
                        response = _a.sent();
                        this.working = false;
                        if (IsSuccessEntity(response)) {
                            return [2 /*return*/, {
                                    items: response.data.items,
                                    item: response.data.items[0]
                                }];
                        }
                        else {
                            return [2 /*return*/, {
                                    error: response.error
                                }];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.working = false;
                        if (error_1 instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                            this.ResponseError(error_1);
                        }
                        else {
                            this.InternalError(error_1);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ComponentCommon;
}());

function parseStorage(key) {
    try {
        var value = localStorage.getItem(key);
        if (value) {
            value = JSON.parse(value);
        }
        if (value) {
            return value;
        }
    }
    catch (error) {
        return null;
    }
    return null;
}


/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/services/configuration.service.ts":
/*!***************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/services/configuration.service.ts ***!
  \***************************************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(config) {
        this.config = config;
        this.language = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('en');
        this.NavbarInteractiveButtons = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.translationsDictionary = {};
    }
    Object.defineProperty(ConfigurationService.prototype, "Config", {
        get: function () {
            return this.config.auth || {};
        },
        enumerable: true,
        configurable: true
    });
    ConfigurationService.prototype.SetInteractiveButtons = function (buttons) {
        this.NavbarInteractiveButtons.next(buttons);
    };
    ConfigurationService.prototype.getNavigationItems = function () {
        return this.config.navigation;
    };
    ConfigurationService.prototype.API = function (affix) {
        return (this.config.api || '') + affix;
    };
    Object.defineProperty(ConfigurationService.prototype, "Github", {
        get: function () {
            return this.config.github;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigurationService.prototype, "Navigation", {
        get: function () {
            return this.config.navigation;
        },
        enumerable: true,
        configurable: true
    });
    ConfigurationService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function ConfigurationService_Factory() { return new ConfigurationService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"]("config")); }, token: ConfigurationService, providedIn: "root" });
    return ConfigurationService;
}());



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/services/globalization.service.ts":
/*!***************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/services/globalization.service.ts ***!
  \***************************************************************************/
/*! exports provided: ExperimentalLanguages, StableLanguages, SupportedLanguages, GlobalizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentalLanguages", function() { return ExperimentalLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StableLanguages", function() { return StableLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportedLanguages", function() { return SupportedLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalizationService", function() { return GlobalizationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translate.service */ "./projects/core/src/lib/ng5-basic/services/translate.service.ts");





/**
 * At the moment, we are not supporting other languages rather than english in production wise.
 * Since this repository is a dependency for commerical version, we will remove the other experimental
 * languages that community is working on.
 * If you are building your own version of this repository, feel free to enable them. In case you can
 * make more contributions to the dashboard, we would appreciate it so please review github repository
 */
var ExperimentalLanguages = {
    pl: { title: 'Polish (Poland)', direction: 'ltr' },
    fa: { title: 'Persian (فارسی ایران)', direction: 'rtl' }
};
var StableLanguages = {
    en: { title: 'English (United States)', direction: 'ltr' }
};
var SupportedLanguages = StableLanguages;
var GlobalizationService = /** @class */ (function () {
    function GlobalizationService(document, translate) {
        this.document = document;
        this.translate = translate;
        this.layoutDirectionEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    GlobalizationService.prototype.GetLanguages = function () {
        var e_1, _a;
        var langs = [];
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object.keys(SupportedLanguages)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var lang = _c.value;
                langs.push({ label: SupportedLanguages[lang].title, lang: lang });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return langs;
    };
    GlobalizationService.prototype.setLayoutDirection = function (effectOn) {
        var _this = this;
        if (!effectOn) {
            this.document.body.classList.add('display-off');
            setTimeout(function () {
                _this.localSetter();
            }, 500);
            setTimeout(function () {
                _this.document.body.classList.remove('display-off');
            }, 1000);
        }
        else {
            this.localSetter();
        }
    };
    GlobalizationService.prototype.localSetter = function () {
        var lang = this.translate.currentLang;
        var direction = SupportedLanguages[lang].direction;
        this.layoutDirectionEmitter.emit(direction);
        this.layoutDirection = direction;
    };
    GlobalizationService.prototype.getLayoutDirection = function () {
        return this.layoutDirection;
    };
    GlobalizationService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function GlobalizationService_Factory() { return new GlobalizationService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_translate_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); }, token: GlobalizationService, providedIn: "root" });
    return GlobalizationService;
}());



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/services/helpers.ts":
/*!*************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/services/helpers.ts ***!
  \*************************************************************/
/*! exports provided: AuthLayoutChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutChild", function() { return AuthLayoutChild; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/core/node_modules/tslib/tslib.es6.js");

function AuthLayoutChild(component, route, options) {
    if (options === void 0) { options = {}; }
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ path: route, component: component }, options);
}


/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/services/mocks.service.ts":
/*!*******************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/services/mocks.service.ts ***!
  \*******************************************************************/
/*! exports provided: MockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockService", function() { return MockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var url_matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-matcher */ "./projects/core/node_modules/url-matcher/lib/index.js");
/* harmony import */ var url_matcher__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url_matcher__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var MockService = /** @class */ (function () {
    function MockService(config, permissions, translate) {
        this.config = config;
        this.permissions = permissions;
        this.translate = translate;
        this.routes = {
            'POST /api/user/signin': 'signIn',
            'POST /api/user/signup': 'signUp',
            'POST /api/forget-password': 'forgetPassword',
            'GET /api/contact-details': 'GetContactDetails',
            'POST /api/user/settings': 'updateUserProfile',
            'POST /api/contact-details': 'UpdateContactDetails',
            'POST /api/user/reset-password': 'ResetPassword'
        };
    }
    MockService.prototype.GetAPI = function () {
        return this.config.api;
    };
    MockService.prototype.IsGithub = function () {
        return this.config.github;
    };
    MockService.prototype.urlMatch = function (url, method) {
        var e_1, _a;
        if (method === void 0) { method = null; }
        url = url.replace(this.config.api, '');
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](Object.keys(this.routes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var route = _c.value;
                var urlMethod = route.split(' ');
                var result = '';
                if (urlMethod.length === 2) {
                    if (method === null) {
                        result = Object(url_matcher__WEBPACK_IMPORTED_MODULE_3__["matchPattern"])(urlMethod[1], url);
                    }
                    else {
                        if (urlMethod[0].toUpperCase() === method.toUpperCase()) {
                            result = Object(url_matcher__WEBPACK_IMPORTED_MODULE_3__["matchPattern"])(urlMethod[1], url);
                        }
                    }
                }
                else {
                    result = Object(url_matcher__WEBPACK_IMPORTED_MODULE_3__["matchPattern"])(route, url);
                }
                if (result) {
                    return route;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return '';
    };
    MockService.prototype.handleRoute = function (req) {
        var _this = this;
        var url = this.urlMatch(req.url, req.method);
        var action = this.routes[url];
        var result = this[action].call(this, req);
        if (result && result.error) {
            result.error.message = this.translate.instant(result.error.message);
        }
        if (result && result.error && result.error.errors) {
            result.error.errors = result.error.errors.map(function (x) {
                x.message = _this.translate.instant(x.message);
                return x;
            });
        }
        var mockResponse = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
            body: result,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](),
            status: result.data ? 200 : result.error.code,
            statusText: 'OK',
            url: req.url
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(mockResponse);
    };
    MockService.prototype.ResetPassword = function (req) {
        var message = 'Please reset your password to 123321, and both fields must be identical.' +
            ' You see this message because your are running an experimental version of app';
        if (req.body.password1 !== '123321' ||
            req.body.password2 !== req.body.password1) {
            return {
                error: {
                    code: 17,
                    message: message,
                    errors: [
                        {
                            location: 'password1',
                            message: 'Please type 123321'
                        },
                        {
                            location: 'password2',
                            message: 'Please repeat 123321'
                        }
                    ]
                }
            };
        }
        return {
            data: {
                items: Object(lodash__WEBPACK_IMPORTED_MODULE_4__["times"])(24, function () { return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["random"])(10, 30); })
            }
        };
    };
    MockService.prototype.mockUser = function () {
        return {
            email: 'alitorabi@seekasia.com',
            username: 'alitorabi',
            avatar: 'user.png',
            firstname: 'John',
            lastname: 'Doe ',
            role: {
                permissions: [
                    this.permissions.findByKey('DEVICES::VIEW'),
                    this.permissions.findByKey('WIDGETS::VIEW'),
                    this.permissions.findByKey('LOCATIONS::VIEW'),
                    this.permissions.findByKey('ACTIVITIES::VIEW'),
                    this.permissions.findByKey('ROLES::VIEW'),
                    this.permissions.findByKey('USERS::VIEW')
                ]
            }
        };
    };
    MockService.prototype.signIn = function (req) {
        if (req.body.email === 'test@test.com' && req.body.password === '123321') {
            return {
                data: {
                    items: [
                        {
                            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoyfSwiaWF0IjoxNTEwOTE4NTY5L' +
                                'CJleHAiOjE1MTA5MjIxNjl9.qOPJVGiIFBye1dUY0BfX6bqcc0rig8PhZTLMYNg1FLU',
                            user: this.mockUser()
                        }
                    ]
                }
            };
        }
        else {
            var errors = [];
            if (!req.body.email) {
                errors.push({
                    location: 'email',
                    message: 'Please provide "test@test.com" as email'
                });
            }
            if (!req.body.password) {
                errors.push({
                    location: 'password',
                    message: 'Please provide "123321" as password'
                });
            }
            return {
                apiVersion: 'beta',
                error: {
                    code: 401,
                    message: 'There is an issue on sign-in. Please set the email and password as provided.',
                    errors: errors
                }
            };
        }
    };
    MockService.prototype.signUp = function (req) {
        var form = req.body;
        function hasUnvalidFields(user) {
            var errors = [];
            if (!user.email) {
                errors.push({
                    location: 'email',
                    message: 'Please provide the email'
                });
            }
            if (!user.password) {
                errors.push({
                    location: 'password',
                    message: 'Please provide a strong password'
                });
            }
            return errors;
        }
        if (hasUnvalidFields(form).length) {
            return {
                error: {
                    code: 1,
                    message: 'Signup cannot be completed due to some errors. Please fix marked fields and try again',
                    errors: hasUnvalidFields(form)
                }
            };
        }
        return {
            data: {
                items: [
                    {
                        user: this.mockUser(),
                        token: 'fake-token3892379828932982789237982'
                    }
                ]
            }
        };
    };
    MockService.prototype.UpdateContactDetails = function (req) {
        return {
            data: {
                items: [{}]
            }
        };
    };
    /**
     * For email, phone, sms and etc that user determines when he wants
     * to be notified when an action has occured.
     */
    MockService.prototype.GetContactDetails = function (req) {
        return {
            data: {
                items: [
                    {
                        type: 'call',
                        value: '+14149990000'
                    },
                    {
                        type: 'sms',
                        value: '+492839179387'
                    }
                ]
            }
        };
    };
    MockService.prototype.updateUserProfile = function (req) {
        var user = req.body;
        return {
            data: {
                items: [user]
            }
        };
    };
    MockService.prototype.forgetPassword = function (req) {
        var username = req.body.username;
        if (!username) {
            return {
                error: {
                    code: 29,
                    message: 'We cannot process your reset password request',
                    errors: [
                        {
                            location: 'username',
                            message: 'Please provide us a username first.'
                        }
                    ]
                }
            };
        }
        return {
            data: {
                items: []
            }
        };
    };
    return MockService;
}());



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/services/permissions.service.ts":
/*!*************************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/services/permissions.service.ts ***!
  \*************************************************************************/
/*! exports provided: PermissionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsService", function() { return PermissionsService; });
var PermissionsService = /** @class */ (function () {
    function PermissionsService() {
    }
    PermissionsService.prototype.UsersPermissions = function () {
        return [
            {
                group: 'USERS',
                key: 'USERS::CREATE',
                title: 'Create user'
            },
            {
                group: 'USERS',
                key: 'USERS::UPDATE',
                title: 'Update user'
            },
            {
                group: 'USERS',
                key: 'USERS::DELETE',
                title: 'Delete user'
            },
            {
                group: 'USERS',
                key: 'USERS::VIEW',
                title: 'View users'
            }
        ];
    };
    PermissionsService.prototype.DevicesPermissions = function () {
        return [
            {
                title: 'Update device infomration',
                group: 'DEVICES',
                key: 'DEVICES::UPDATE_INFORMATION'
            },
            {
                title: 'Update devices',
                group: 'DEVICES',
                key: 'DEVICES::VIEW'
            }
        ];
    };
    PermissionsService.prototype.LocationsPermissions = function () {
        return [
            {
                title: 'View Locations',
                group: 'LOCATIONS',
                key: 'LOCATIONS::VIEW'
            }
        ];
    };
    PermissionsService.prototype.ActivitiesPermissions = function () {
        return [
            {
                title: 'View Activities',
                group: 'ACTIVITIES',
                key: 'ACTIVITIES::VIEW'
            }
        ];
    };
    PermissionsService.prototype.RolesPermissions = function () {
        return [
            {
                title: 'View Roles',
                group: 'ROLES',
                key: 'ROLES::VIEW'
            }
        ];
    };
    PermissionsService.prototype.WidgetsPermissions = function () {
        return [
            {
                group: 'WIDGETS',
                key: 'WIDGETS::CREATE',
                title: 'Create widget'
            },
            {
                group: 'WIDGETS',
                key: 'WIDGETS::UPDATE',
                title: 'Update widget info'
            },
            {
                group: 'WIDGETS',
                key: 'WIDGETS::CHANGE',
                title: 'Change widgets output'
            },
            {
                group: 'WIDGETS',
                key: 'WIDGETS::VIEW',
                title: 'View widgets'
            }
        ];
    };
    PermissionsService.prototype.getAll = function () {
        return this.DevicesPermissions()
            .concat(this.UsersPermissions())
            .concat(this.LocationsPermissions())
            .concat(this.RolesPermissions())
            .concat(this.ActivitiesPermissions())
            .concat(this.WidgetsPermissions());
    };
    PermissionsService.prototype.findByKey = function (key) {
        return this.getAll().find(function (x) { return x.key === key; });
    };
    return PermissionsService;
}());



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/services/requests.service.ts":
/*!**********************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/services/requests.service.ts ***!
  \**********************************************************************/
/*! exports provided: RequestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsService", function() { return RequestsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./projects/core/src/lib/ng5-basic/services/common.ts");


var RequestsService = /** @class */ (function () {
    function RequestsService(http, config) {
        this.http = http;
        this.config = config;
    }
    RequestsService.prototype.GetContactDetails = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, ref, response, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.config.API('/api/contact-details');
                        ref = this.http.get(url).toPromise();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ref];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 3:
                        error_1 = _a.sent();
                        if (error_1.name === 'HttpErrorResponse') {
                            return [2 /*return*/, Object(_common__WEBPACK_IMPORTED_MODULE_1__["GetNetworkError"])()];
                        }
                        return [2 /*return*/, error_1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RequestsService.prototype.UpdateUserProfile = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ref, response, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ref = this.http
                            .post(this.config.API('/api/user/settings'), user)
                            .toPromise();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ref];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 3:
                        error_2 = _a.sent();
                        if (error_2.name === 'HttpErrorResponse') {
                            return [2 /*return*/, Object(_common__WEBPACK_IMPORTED_MODULE_1__["GetNetworkError"])()];
                        }
                        return [2 /*return*/, error_2];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RequestsService.prototype.UpdateContactDetails = function (contacts) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ref, response, error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ref = this.http
                            .post(this.config.API('/api/contact-details'), { contacts: contacts })
                            .toPromise();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ref];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 3:
                        error_3 = _a.sent();
                        if (error_3.name === 'HttpErrorResponse') {
                            return [2 /*return*/, Object(_common__WEBPACK_IMPORTED_MODULE_1__["GetNetworkError"])()];
                        }
                        return [2 /*return*/, error_3];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RequestsService.prototype.RequestPasswordReset = function (username) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ref, response, error_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ref = this.http
                            .post(this.config.API('/api/forget-password'), { username: username })
                            .toPromise();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ref];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 3:
                        error_4 = _a.sent();
                        if (error_4.name === 'HttpErrorResponse') {
                            return [2 /*return*/, Object(_common__WEBPACK_IMPORTED_MODULE_1__["GetNetworkError"])()];
                        }
                        return [2 /*return*/, error_4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return RequestsService;
}());



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/services/translate.service.ts":
/*!***********************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/services/translate.service.ts ***!
  \***********************************************************************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
var TranslateService = /** @class */ (function () {
    function TranslateService() {
        this.lang = 'en';
        this.langs = {};
    }
    TranslateService.prototype.setTranslation = function (lang, translation) {
        this.langs[lang] = translation;
    };
    TranslateService.prototype.use = function (lang) {
        this.lang = lang;
    };
    TranslateService.prototype.setDefaultLang = function (lang) {
        this.lang = lang;
    };
    TranslateService.prototype.instant = function (key) {
        var val = this.langs[this.lang][key];
        return val ? val : key;
    };
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        get: function () {
            return this.lang;
        },
        enumerable: true,
        configurable: true
    });
    return TranslateService;
}());



/***/ }),

/***/ "./projects/core/src/lib/ng5-basic/services/user.service.ts":
/*!******************************************************************!*\
  !*** ./projects/core/src/lib/ng5-basic/services/user.service.ts ***!
  \******************************************************************/
/*! exports provided: UserService, UserLoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoggedInGuard", function() { return UserLoggedInGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/core/node_modules/tslib/tslib.es6.js");

var UserService = /** @class */ (function () {
    function UserService(permissions) {
        this.permissions = permissions;
        try {
            this.user = JSON.parse(localStorage.getItem('userInformation'));
            this.token = JSON.parse(localStorage.getItem('tokenInformation'));
        }
        catch (err) { }
    }
    Object.defineProperty(UserService.prototype, "User", {
        get: function () {
            return this.user;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.logout = function () {
        this.user = null;
    };
    UserService.prototype.canActivate = function (permissions) {
        var e_1, _a;
        var user = this.User;
        if (!user.role) {
            user.role = {
                permissions: [],
                id: null,
                title: 'normal'
            };
        }
        if (permissions && permissions.length) {
            var _loop_1 = function (key) {
                var perm = user.role.permissions.find(function (x) { return x && x.key === key; });
                if (!perm) {
                    return { value: false };
                }
            };
            try {
                for (var permissions_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](permissions), permissions_1_1 = permissions_1.next(); !permissions_1_1.done; permissions_1_1 = permissions_1.next()) {
                    var key = permissions_1_1.value;
                    var state_1 = _loop_1(key);
                    if (typeof state_1 === "object")
                        return state_1.value;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (permissions_1_1 && !permissions_1_1.done && (_a = permissions_1.return)) _a.call(permissions_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return true;
    };
    UserService.prototype.GetToken = function () {
        return this.token || '';
    };
    UserService.prototype.SetUser = function (user) {
        this.user = user;
        localStorage.setItem('userInformation', JSON.stringify(user));
    };
    UserService.prototype.SetToken = function (token) {
        this.token = token;
        localStorage.setItem('tokenInformation', JSON.stringify(token));
    };
    UserService.prototype.Revoke = function () {
        this.SetToken(null);
        this.SetUser(null);
    };
    return UserService;
}());

var UserLoggedInGuard = /** @class */ (function () {
    function UserLoggedInGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    UserLoggedInGuard.prototype.canActivate = function () {
        if (!this.user.GetToken()) {
            this.router.navigateByUrl('/login');
            return false;
        }
        return true;
    };
    return UserLoggedInGuard;
}());



/***/ }),

/***/ "./projects/core/src/lib/ngx-tooltip/ngx-tooltip.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./projects/core/src/lib/ngx-tooltip/ngx-tooltip.component.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: RenderType_NgxTooltipComponent, View_NgxTooltipComponent_0, View_NgxTooltipComponent_Host_0, NgxTooltipComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NgxTooltipComponent", function() { return RenderType_NgxTooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NgxTooltipComponent_0", function() { return View_NgxTooltipComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NgxTooltipComponent_Host_0", function() { return View_NgxTooltipComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxTooltipComponentNgFactory", function() { return NgxTooltipComponentNgFactory; });
/* harmony import */ var _ngx_tooltip_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngx-tooltip.component.scss.shim.ngstyle */ "./projects/core/src/lib/ngx-tooltip/ngx-tooltip.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_tooltip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngx-tooltip.component */ "./projects/core/src/lib/ngx-tooltip/ngx-tooltip.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_NgxTooltipComponent = [_ngx_tooltip_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_NgxTooltipComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_NgxTooltipComponent, data: {} });

function View_NgxTooltipComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, { tooltipBox: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, [[1, 0], ["tooltipBox", 1]], null, 4, "div", [["class", "ngx-tooltip"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"]], { ngStyle: [0, "ngStyle"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, { "left": 0, "top": 1, "opacity": 2 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", "\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 4, 0, (_co.elementStyle.width + "px"), (_co.elementStyle.height + "px"), _co.elementStyle.opacity); _ck(_v, 3, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.tooltip; _ck(_v, 5, 0, currVal_1); }); }
function View_NgxTooltipComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "ng-component", [], null, null, null, View_NgxTooltipComponent_0, RenderType_NgxTooltipComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _ngx_tooltip_component__WEBPACK_IMPORTED_MODULE_3__["NgxTooltipComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NgxTooltipComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("ng-component", _ngx_tooltip_component__WEBPACK_IMPORTED_MODULE_3__["NgxTooltipComponent"], View_NgxTooltipComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./projects/core/src/lib/ngx-tooltip/ngx-tooltip.component.scss.shim.ngstyle.js":
/*!**************************************************************************************!*\
  !*** ./projects/core/src/lib/ngx-tooltip/ngx-tooltip.component.scss.shim.ngstyle.js ***!
  \**************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".ngx-tooltip[_ngcontent-%COMP%] {\n  background: #333;\n  color: #fff;\n  padding: 4px 6px 6px;\n  position: fixed;\n  z-index: 1000000;\n  border-radius: 3px;\n  font-size: 13px;\n  max-width: 200px;\n}\n.ngx-tooltip[_ngcontent-%COMP%]:after {\n  content: \" \";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  bottom: -3px;\n  left: 50%;\n  border-right: 7px solid #333;\n  border-bottom: 7px solid #333;\n  display: inline-block;\n  transform: rotate(45deg);\n  margin-left: -5px;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL2NvcmUvc3JjL2xpYi9uZ3gtdG9vbHRpcC9uZ3gtdG9vbHRpcC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2NvcmUvc3JjL2xpYi9uZ3gtdG9vbHRpcC9uZ3gtdG9vbHRpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDRVIiLCJmaWxlIjoicHJvamVjdHMvY29yZS9zcmMvbGliL25neC10b29sdGlwL25neC10b29sdGlwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5neC10b29sdGlwIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDRweCA2cHggNnB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxMDAwMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAmOmFmdGVye1xuICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDoxMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIGJvdHRvbTogLTNweDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCAjMzMzO1xuICAgICAgICBib3JkZXItYm90dG9tOiA3cHggc29saWQgIzMzMztcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG59IiwiLm5neC10b29sdGlwIHtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDRweCA2cHggNnB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXgtd2lkdGg6IDIwMHB4O1xufVxuLm5neC10b29sdGlwOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm90dG9tOiAtM3B4O1xuICBsZWZ0OiA1MCU7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkICMzMzM7XG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjMzMzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIHotaW5kZXg6IC0xO1xufSJdfQ== */"];



/***/ }),

/***/ "./projects/core/src/lib/ngx-tooltip/ngx-tooltip.component.ts":
/*!********************************************************************!*\
  !*** ./projects/core/src/lib/ngx-tooltip/ngx-tooltip.component.ts ***!
  \********************************************************************/
/*! exports provided: NgxTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxTooltipComponent", function() { return NgxTooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NgxTooltipComponent = /** @class */ (function () {
    function NgxTooltipComponent() {
        this.elementStyle = {
            width: 0,
            height: 0,
            opacity: 0
        };
    }
    NgxTooltipComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.element = _this.tooltipBox.nativeElement.getBoundingClientRect();
            _this.elementStyle.width =
                _this.positions.left -
                    (_this.element.width / 2 - _this.positions.width / 2);
            _this.elementStyle.height = _this.positions.top - _this.element.height - 10;
            _this.elementStyle.opacity = 1;
        }, 0.1);
    };
    return NgxTooltipComponent;
}());



/***/ }),

/***/ "./projects/core/src/lib/ngx-tooltip/ngx-tooltip.module.ts":
/*!*****************************************************************!*\
  !*** ./projects/core/src/lib/ngx-tooltip/ngx-tooltip.module.ts ***!
  \*****************************************************************/
/*! exports provided: NgxTooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxTooltipModule", function() { return NgxTooltipModule; });
var NgxTooltipModule = /** @class */ (function () {
    function NgxTooltipModule() {
    }
    return NgxTooltipModule;
}());



/***/ }),

/***/ "./projects/core/src/lib/ngx-tooltip/tooltip.directive.ts":
/*!****************************************************************!*\
  !*** ./projects/core/src/lib/ngx-tooltip/tooltip.directive.ts ***!
  \****************************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_tooltip_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-tooltip.component */ "./projects/core/src/lib/ngx-tooltip/ngx-tooltip.component.ts");


var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(el, componentFactoryResolver, appRef, injector) {
        this.el = el;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    TooltipDirective.prototype.onMouseEnter = function () {
        this.componentRef = this.componentFactoryResolver
            .resolveComponentFactory(_ngx_tooltip_component__WEBPACK_IMPORTED_MODULE_1__["NgxTooltipComponent"])
            .create(this.injector);
        this.appRef.attachView(this.componentRef.hostView);
        var domElem = this.componentRef.hostView
            .rootNodes[0];
        document.body.appendChild(domElem);
        this.componentRef.instance.tooltip = this.Tooltip;
        this.componentRef.instance.positions = this.el.nativeElement.getBoundingClientRect();
    };
    TooltipDirective.prototype.onMouseLeave = function () {
        this.appRef.detachView(this.componentRef.hostView);
        this.componentRef.destroy();
    };
    TooltipDirective.prototype.onClick = function () {
        this.appRef.detachView(this.componentRef.hostView);
        this.componentRef.destroy();
    };
    return TooltipDirective;
}());



/***/ }),

/***/ "./projects/core/src/lib/t.pipe.ts":
/*!*****************************************!*\
  !*** ./projects/core/src/lib/t.pipe.ts ***!
  \*****************************************/
/*! exports provided: TPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TPipe", function() { return TPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var TPipe = /** @class */ (function () {
    function TPipe(config) {
        this.config = config;
    }
    TPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var translatedPhrase = this.config.translationsDictionary[value];
        if (!translatedPhrase) {
            console.warn('There is no translation for', value, '>>>>', this.config.language.value);
        }
        return translatedPhrase || value;
    };
    return TPipe;
}());



/***/ }),

/***/ "./projects/core/src/public_api.ts":
/*!*****************************************!*\
  !*** ./projects/core/src/public_api.ts ***!
  \*****************************************/
/*! exports provided: NgDashboardModule, ConfigurationService, UserService, UserLoggedInGuard, LayoutComponent, LoginFormComponent, SignupFormComponent, NgDashboardService, LayoutFadeComponent, AuthLayoutChild, ActivityTypes, TemperatureCustomization, CloudDeviceType, GetNetworkError, error, IsSuccessEntity, IsDataSource, handleRoute, urlMatch, UpdateOrPrepend, UpdateOrInsert, ComponentCommon, parseStorage, ForgotPasswordComponent, ResetPasswordComponent, AuthEvent, AuthPublicService, NgDashboardEn, NgDashboardFa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ng_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ng-dashboard.service */ "./projects/core/src/lib/ng-dashboard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgDashboardService", function() { return _lib_ng_dashboard_service__WEBPACK_IMPORTED_MODULE_0__["NgDashboardService"]; });

/* harmony import */ var _lib_ng_dashboard_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ng-dashboard.module */ "./projects/core/src/lib/ng-dashboard.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgDashboardModule", function() { return _lib_ng_dashboard_module__WEBPACK_IMPORTED_MODULE_1__["NgDashboardModule"]; });

/* harmony import */ var _lib_ng5_basic_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ng5-basic/services/configuration.service */ "./projects/core/src/lib/ng5-basic/services/configuration.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return _lib_ng5_basic_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]; });

/* harmony import */ var _lib_ng5_basic_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/ng5-basic/services/user.service */ "./projects/core/src/lib/ng5-basic/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _lib_ng5_basic_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserLoggedInGuard", function() { return _lib_ng5_basic_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserLoggedInGuard"]; });

/* harmony import */ var _lib_ng5_basic_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/ng5-basic/components/layout/layout.component */ "./projects/core/src/lib/ng5-basic/components/layout/layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return _lib_ng5_basic_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"]; });

/* harmony import */ var _lib_ng5_basic_components_layout_fade_layout_fade_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/ng5-basic/components/layout-fade/layout-fade.component */ "./projects/core/src/lib/ng5-basic/components/layout-fade/layout-fade.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutFadeComponent", function() { return _lib_ng5_basic_components_layout_fade_layout_fade_component__WEBPACK_IMPORTED_MODULE_5__["LayoutFadeComponent"]; });

/* harmony import */ var _lib_ng5_basic_services_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/ng5-basic/services/helpers */ "./projects/core/src/lib/ng5-basic/services/helpers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutChild", function() { return _lib_ng5_basic_services_helpers__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutChild"]; });

/* harmony import */ var _lib_ng5_basic_definitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/ng5-basic/definitions */ "./projects/core/src/lib/ng5-basic/definitions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivityTypes", function() { return _lib_ng5_basic_definitions__WEBPACK_IMPORTED_MODULE_7__["ActivityTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemperatureCustomization", function() { return _lib_ng5_basic_definitions__WEBPACK_IMPORTED_MODULE_7__["TemperatureCustomization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudDeviceType", function() { return _lib_ng5_basic_definitions__WEBPACK_IMPORTED_MODULE_7__["CloudDeviceType"]; });

/* harmony import */ var _lib_ng5_basic_services_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/ng5-basic/services/common */ "./projects/core/src/lib/ng5-basic/services/common.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetNetworkError", function() { return _lib_ng5_basic_services_common__WEBPACK_IMPORTED_MODULE_8__["GetNetworkError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "error", function() { return _lib_ng5_basic_services_common__WEBPACK_IMPORTED_MODULE_8__["error"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsSuccessEntity", function() { return _lib_ng5_basic_services_common__WEBPACK_IMPORTED_MODULE_8__["IsSuccessEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsDataSource", function() { return _lib_ng5_basic_services_common__WEBPACK_IMPORTED_MODULE_8__["IsDataSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleRoute", function() { return _lib_ng5_basic_services_common__WEBPACK_IMPORTED_MODULE_8__["handleRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlMatch", function() { return _lib_ng5_basic_services_common__WEBPACK_IMPORTED_MODULE_8__["urlMatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateOrPrepend", function() { return _lib_ng5_basic_services_common__WEBPACK_IMPORTED_MODULE_8__["UpdateOrPrepend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateOrInsert", function() { return _lib_ng5_basic_services_common__WEBPACK_IMPORTED_MODULE_8__["UpdateOrInsert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentCommon", function() { return _lib_ng5_basic_services_common__WEBPACK_IMPORTED_MODULE_8__["ComponentCommon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseStorage", function() { return _lib_ng5_basic_services_common__WEBPACK_IMPORTED_MODULE_8__["parseStorage"]; });

/* harmony import */ var _lib_auth_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/auth/login-form/login-form.component */ "./projects/core/src/lib/auth/login-form/login-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return _lib_auth_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__["LoginFormComponent"]; });

/* harmony import */ var _lib_auth_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/auth/signup-form/signup-form.component */ "./projects/core/src/lib/auth/signup-form/signup-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function() { return _lib_auth_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_10__["SignupFormComponent"]; });

/* harmony import */ var _lib_auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/auth/forgot-password/forgot-password.component */ "./projects/core/src/lib/auth/forgot-password/forgot-password.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return _lib_auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"]; });

/* harmony import */ var _lib_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/auth/reset-password/reset-password.component */ "./projects/core/src/lib/auth/reset-password/reset-password.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return _lib_auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__["ResetPasswordComponent"]; });

/* harmony import */ var _lib_auth_auth_public_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/auth/auth-public.service */ "./projects/core/src/lib/auth/auth-public.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthEvent", function() { return _lib_auth_auth_public_service__WEBPACK_IMPORTED_MODULE_13__["AuthEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthPublicService", function() { return _lib_auth_auth_public_service__WEBPACK_IMPORTED_MODULE_13__["AuthPublicService"]; });

/* harmony import */ var _translations_en__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./translations/en */ "./projects/core/src/translations/en.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgDashboardEn", function() { return _translations_en__WEBPACK_IMPORTED_MODULE_14__["NgDashboardEn"]; });

/* harmony import */ var _translations_pl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./translations/pl */ "./projects/core/src/translations/pl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgDashboardFa", function() { return _translations_pl__WEBPACK_IMPORTED_MODULE_15__["NgDashboardFa"]; });

/*
 * Public API Surface of ng-dashboard
 */


















/***/ }),

/***/ "./projects/core/src/translations/en.ts":
/*!**********************************************!*\
  !*** ./projects/core/src/translations/en.ts ***!
  \**********************************************/
/*! exports provided: NgDashboardEn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgDashboardEn", function() { return NgDashboardEn; });
var NgDashboardEn = {
    auth_login_title: 'Login',
    auth_login_description: 'Enter your email and password to continue.',
    auth_login_email_label: 'Email address',
    auth_login_password_label: 'Password',
    auth_login_submit: 'Continue',
    auth_create_account_button: 'You can also',
    auth_login_signup_link: 'create new account',
    auth_login_forgot_password: 'I have forgot my password'
};


/***/ }),

/***/ "./projects/core/src/translations/pl.ts":
/*!**********************************************!*\
  !*** ./projects/core/src/translations/pl.ts ***!
  \**********************************************/
/*! exports provided: NgDashboardFa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgDashboardFa", function() { return NgDashboardFa; });
var NgDashboardFa = {
    auth_login_title: 'Zaloguj sie',
    auth_login_description: 'Wpisz swój adres e-mail i hasło, aby kontynuować.',
    auth_login_email_label: 'Adres e-mail',
    auth_login_password_label: 'Hasło',
    auth_login_submit: 'Kontyntynuj',
    auth_create_account_button: 'Możesz także',
    auth_login_signup_link: 'Stwórz nowe konto',
    auth_login_forgot_password: 'Zapomniałem hasła'
};


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guide_guide_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guide/guide.component */ "./src/app/guide/guide.component.ts");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/core/src/public_api */ "./projects/core/src/public_api.ts");



var routes = [
    {
        component: projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        path: '',
        children: [
            {
                path: '',
                component: _guide_guide_component__WEBPACK_IMPORTED_MODULE_1__["GuideComponent"]
            }
        ]
    },
    {
        path: 'login',
        component: projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"]
    },
    {
        path: 'signup',
        component: projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["SignupFormComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], [], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"];



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
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng-dashboard';
    }
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _projects_core_src_lib_ng5_basic_components_layout_layout_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projects/core/src/lib/ng5-basic/components/layout/layout.component.ngfactory */ "./projects/core/src/lib/ng5-basic/components/layout/layout.component.ngfactory.js");
/* harmony import */ var _guide_guide_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guide/guide.component.ngfactory */ "./src/app/guide/guide.component.ngfactory.js");
/* harmony import */ var _projects_core_src_lib_auth_login_form_login_form_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../projects/core/src/lib/auth/login-form/login-form.component.ngfactory */ "./projects/core/src/lib/auth/login-form/login-form.component.ngfactory.js");
/* harmony import */ var _projects_core_src_lib_auth_signup_form_signup_form_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../projects/core/src/lib/auth/signup-form/signup-form.component.ngfactory */ "./projects/core/src/lib/auth/signup-form/signup-form.component.ngfactory.js");
/* harmony import */ var _projects_core_src_lib_ngx_tooltip_ngx_tooltip_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../projects/core/src/lib/ngx-tooltip/ngx-tooltip.component.ngfactory */ "./projects/core/src/lib/ngx-tooltip/ngx-tooltip.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm5/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toasta__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-toasta */ "./node_modules/ngx-toasta/fesm5/ngx-toasta.js");
/* harmony import */ var _projects_core_src_lib_ng5_basic_services_translate_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../projects/core/src/lib/ng5-basic/services/translate.service */ "./projects/core/src/lib/ng5-basic/services/translate.service.ts");
/* harmony import */ var _projects_core_src_lib_ng5_basic_services_requests_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../projects/core/src/lib/ng5-basic/services/requests.service */ "./projects/core/src/lib/ng5-basic/services/requests.service.ts");
/* harmony import */ var _projects_core_src_lib_ng5_basic_services_configuration_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../projects/core/src/lib/ng5-basic/services/configuration.service */ "./projects/core/src/lib/ng5-basic/services/configuration.service.ts");
/* harmony import */ var _projects_core_src_lib_ng5_basic_services_mocks_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../projects/core/src/lib/ng5-basic/services/mocks.service */ "./projects/core/src/lib/ng5-basic/services/mocks.service.ts");
/* harmony import */ var _projects_core_src_lib_ng5_basic_services_permissions_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../projects/core/src/lib/ng5-basic/services/permissions.service */ "./projects/core/src/lib/ng5-basic/services/permissions.service.ts");
/* harmony import */ var _projects_core_src_lib_ng5_basic_services_actions_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../projects/core/src/lib/ng5-basic/services/actions.service */ "./projects/core/src/lib/ng5-basic/services/actions.service.ts");
/* harmony import */ var _projects_core_src_lib_ng5_basic_services_globalization_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../projects/core/src/lib/ng5-basic/services/globalization.service */ "./projects/core/src/lib/ng5-basic/services/globalization.service.ts");
/* harmony import */ var _projects_core_src_lib_ng5_basic_ngx_sidebar_ngx_sidebar_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../projects/core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.service */ "./projects/core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.service.ts");
/* harmony import */ var _projects_core_src_lib_auth_facebook_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../projects/core/src/lib/auth/facebook.service */ "./projects/core/src/lib/auth/facebook.service.ts");
/* harmony import */ var _projects_core_src_lib_ng5_basic_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../projects/core/src/lib/ng5-basic/components/layout/layout.component */ "./projects/core/src/lib/ng5-basic/components/layout/layout.component.ts");
/* harmony import */ var _guide_guide_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./guide/guide.component */ "./src/app/guide/guide.component.ts");
/* harmony import */ var _projects_core_src_lib_auth_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../projects/core/src/lib/auth/login-form/login-form.component */ "./projects/core/src/lib/auth/login-form/login-form.component.ts");
/* harmony import */ var _projects_core_src_lib_auth_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../projects/core/src/lib/auth/signup-form/signup-form.component */ "./projects/core/src/lib/auth/signup-form/signup-form.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ng_dashboard_amazing_search__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ng-dashboard/amazing-search */ "./node_modules/@ng-dashboard/amazing-search/fesm5/ng-dashboard-amazing-search.js");
/* harmony import */ var _projects_core_src_lib_ngx_tooltip_ngx_tooltip_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../projects/core/src/lib/ngx-tooltip/ngx-tooltip.module */ "./projects/core/src/lib/ngx-tooltip/ngx-tooltip.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _projects_core_src_lib_ng5_basic_reducers_activity_reducer__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../projects/core/src/lib/ng5-basic/reducers/activity.reducer */ "./projects/core/src/lib/ng5-basic/reducers/activity.reducer.ts");
/* harmony import */ var _projects_core_src_lib_ng5_basic_reducers_notifications_reducer__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../projects/core/src/lib/ng5-basic/reducers/notifications.reducer */ "./projects/core/src/lib/ng5-basic/reducers/notifications.reducer.ts");
/* harmony import */ var _projects_core_src_lib_ng_dashboard_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../projects/core/src/lib/ng-dashboard.module */ "./projects/core/src/lib/ng-dashboard.module.ts");
/* harmony import */ var _projects_core_src_lib_ng5_basic_services_user_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../projects/core/src/lib/ng5-basic/services/user.service */ "./projects/core/src/lib/ng5-basic/services/user.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _projects_core_src_lib_ng5_basic_components_layout_layout_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["LayoutComponentNgFactory"], _guide_guide_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["GuideComponentNgFactory"], _projects_core_src_lib_auth_login_form_login_form_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["LoginFormComponentNgFactory"], _projects_core_src_lib_auth_signup_form_signup_form_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["SignupFormComponentNgFactory"], _projects_core_src_lib_ngx_tooltip_ngx_tooltip_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["NgxTooltipComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_14__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_14__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateLoader"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateFakeLoader"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateFakeCompiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateDefaultParser"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["FakeMissingTranslationHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateStore"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateStore"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateService"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateStore"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateLoader"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["USE_DEFAULT_LANG"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["USE_STORE"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_17__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_toasta__WEBPACK_IMPORTED_MODULE_19__["ToastaConfig"], ngx_toasta__WEBPACK_IMPORTED_MODULE_19__["ToastaConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ngx_toasta__WEBPACK_IMPORTED_MODULE_19__["ToastaService"], ngx_toasta__WEBPACK_IMPORTED_MODULE_19__["toastaServiceFactory"], [ngx_toasta__WEBPACK_IMPORTED_MODULE_19__["ToastaConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _projects_core_src_lib_ng5_basic_services_translate_service__WEBPACK_IMPORTED_MODULE_20__["TranslateService"], _projects_core_src_lib_ng5_basic_services_translate_service__WEBPACK_IMPORTED_MODULE_20__["TranslateService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _projects_core_src_lib_ng5_basic_services_requests_service__WEBPACK_IMPORTED_MODULE_21__["RequestsService"], _projects_core_src_lib_ng5_basic_services_requests_service__WEBPACK_IMPORTED_MODULE_21__["RequestsService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"], _projects_core_src_lib_ng5_basic_services_configuration_service__WEBPACK_IMPORTED_MODULE_22__["ConfigurationService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _projects_core_src_lib_ng5_basic_services_mocks_service__WEBPACK_IMPORTED_MODULE_23__["MockService"], _projects_core_src_lib_ng5_basic_services_mocks_service__WEBPACK_IMPORTED_MODULE_23__["MockService"], ["config", _projects_core_src_lib_ng5_basic_services_permissions_service__WEBPACK_IMPORTED_MODULE_24__["PermissionsService"], _projects_core_src_lib_ng5_basic_services_translate_service__WEBPACK_IMPORTED_MODULE_20__["TranslateService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _projects_core_src_lib_ng5_basic_services_actions_service__WEBPACK_IMPORTED_MODULE_25__["ActionsService"], _projects_core_src_lib_ng5_basic_services_actions_service__WEBPACK_IMPORTED_MODULE_25__["ActionsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _projects_core_src_lib_ng5_basic_services_globalization_service__WEBPACK_IMPORTED_MODULE_26__["GlobalizationService"], _projects_core_src_lib_ng5_basic_services_globalization_service__WEBPACK_IMPORTED_MODULE_26__["GlobalizationService"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _projects_core_src_lib_ng5_basic_services_translate_service__WEBPACK_IMPORTED_MODULE_20__["TranslateService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _projects_core_src_lib_ng5_basic_ngx_sidebar_ngx_sidebar_service__WEBPACK_IMPORTED_MODULE_27__["NgxSidebarService"], _projects_core_src_lib_ng5_basic_ngx_sidebar_ngx_sidebar_service__WEBPACK_IMPORTED_MODULE_27__["NgxSidebarService"], ["config", _projects_core_src_lib_ng5_basic_services_globalization_service__WEBPACK_IMPORTED_MODULE_26__["GlobalizationService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _projects_core_src_lib_auth_facebook_service__WEBPACK_IMPORTED_MODULE_28__["FacebookService"], _projects_core_src_lib_auth_facebook_service__WEBPACK_IMPORTED_MODULE_28__["FacebookService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_b"](), _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_i"](p1_0), _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_i"](p2_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_14__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTES"], function () { return [[{ component: _projects_core_src_lib_ng5_basic_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_29__["LayoutComponent"], path: "", children: [{ path: "", component: _guide_guide_component__WEBPACK_IMPORTED_MODULE_30__["GuideComponent"] }] }, { path: "login", component: _projects_core_src_lib_auth_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_31__["LoginFormComponent"] }, { path: "signup", component: _projects_core_src_lib_auth_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_32__["SignupFormComponent"] }], []]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_33__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_33__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_dashboard_amazing_search__WEBPACK_IMPORTED_MODULE_34__["AmazingSearchModule"], _ng_dashboard_amazing_search__WEBPACK_IMPORTED_MODULE_34__["AmazingSearchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_toasta__WEBPACK_IMPORTED_MODULE_19__["ToastaModule"], ngx_toasta__WEBPACK_IMPORTED_MODULE_19__["ToastaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _projects_core_src_lib_ngx_tooltip_ngx_tooltip_module__WEBPACK_IMPORTED_MODULE_35__["NgxTooltipModule"], _projects_core_src_lib_ngx_tooltip_ngx_tooltip_module__WEBPACK_IMPORTED_MODULE_35__["NgxTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ActionsSubject"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ReducerManagerDispatcher"], null, [_ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ActionsSubject"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_i"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["INITIAL_STATE"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_w"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_i"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_k"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_l"], null, [_ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_k"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["INITIAL_REDUCERS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_k"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_l"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_j"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["combineReducers"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_r"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["USER_RUNTIME_CHECKS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_bd"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_r"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_s"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_z"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_36__["USER_RUNTIME_CHECKS"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["META_REDUCERS"], function (p0_0, p1_0) { return [_ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_bb"](p0_0), _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_ba"](p1_0)]; }, [_ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_s"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_s"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["USER_PROVIDED_META_REDUCERS"], [], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_q"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_x"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_36__["META_REDUCERS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["USER_PROVIDED_META_REDUCERS"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["REDUCER_FACTORY"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["createReducerFactory"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_j"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_q"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ReducerManager"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ReducerManager"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ReducerManagerDispatcher"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["INITIAL_STATE"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["INITIAL_REDUCERS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["REDUCER_FACTORY"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ReducerObservable"], null, [_ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ReducerManager"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ScannedActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ScannedActionsSubject"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["State"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["State"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ReducerObservable"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ScannedActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["INITIAL_STATE"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["StateObservable"], null, [_ngrx_store__WEBPACK_IMPORTED_MODULE_36__["State"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["Store"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["Store"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_36__["StateObservable"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ReducerManager"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_h"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_y"], [[3, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["Store"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["StoreRootModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["StoreRootModule"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ReducerObservable"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ScannedActionsSubject"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["Store"], [2, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_h"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_n"], function () { return [{}]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["STORE_FEATURES"], function () { return [{ key: "ng5", reducerFactory: _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["combineReducers"], metaReducers: [], initialState: undefined }]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_o"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_u"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_n"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["STORE_FEATURES"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_m"], function () { return [{ activities: _projects_core_src_lib_ng5_basic_reducers_activity_reducer__WEBPACK_IMPORTED_MODULE_37__["activitiesReducer"], notifications: _projects_core_src_lib_ng5_basic_reducers_notifications_reducer__WEBPACK_IMPORTED_MODULE_38__["notificationsReducer"] }]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_p"], function (p0_0) { return [p0_0]; }, [_ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_m"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["FEATURE_REDUCERS"], function (p0_0, p0_1, p0_2) { return [_ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_v"](p0_0, p0_1, p0_2)]; }, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_m"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_p"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073873408, _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["StoreFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["StoreFeatureModule"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ɵngrx_modules_store_store_o"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["FEATURE_REDUCERS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["ReducerManager"], _ngrx_store__WEBPACK_IMPORTED_MODULE_36__["StoreRootModule"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _projects_core_src_lib_ng_dashboard_module__WEBPACK_IMPORTED_MODULE_39__["NgDashboardModule"], _projects_core_src_lib_ng_dashboard_module__WEBPACK_IMPORTED_MODULE_39__["NgDashboardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, "config", { api: "http://localhost:1337", navigation: [{ title: "Login", link: "/login" }], auth: { afterSignupRedirect: "/" } }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _projects_core_src_lib_ng5_basic_services_configuration_service__WEBPACK_IMPORTED_MODULE_22__["ConfigurationService"], _projects_core_src_lib_ng5_basic_services_configuration_service__WEBPACK_IMPORTED_MODULE_22__["ConfigurationService"], ["config"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _projects_core_src_lib_ng5_basic_services_permissions_service__WEBPACK_IMPORTED_MODULE_24__["PermissionsService"], _projects_core_src_lib_ng5_basic_services_permissions_service__WEBPACK_IMPORTED_MODULE_24__["PermissionsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _projects_core_src_lib_ng5_basic_services_user_service__WEBPACK_IMPORTED_MODULE_40__["UserService"], _projects_core_src_lib_ng5_basic_services_user_service__WEBPACK_IMPORTED_MODULE_40__["UserService"], [_projects_core_src_lib_ng5_basic_services_permissions_service__WEBPACK_IMPORTED_MODULE_24__["PermissionsService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_projects_core_src_lib_ng5_basic_services_configuration_service__WEBPACK_IMPORTED_MODULE_22__["ConfigurationService"], _projects_core_src_lib_ng5_basic_services_user_service__WEBPACK_IMPORTED_MODULE_40__["UserService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["USE_STORE"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["USE_DEFAULT_LANG"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]); });



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
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/core/src/public_api */ "./projects/core/src/public_api.ts");

var AppModule = /** @class */ (function () {
    function AppModule(config, user) {
        this.config = config;
        this.user = user;
        this.user.SetUser({
            firstname: 'Ali',
            lastname: 'Torabi',
            email: 'ali.torabi@pixelplux.com'
        });
        this.config.config.navbar = {
            profile: false,
            notification: true
        };
        this.config.SetInteractiveButtons([
            {
                icon: 'icon-info',
                title: 'info',
                key: 'info_btn',
                onPress: function () {
                    alert('Wow! You are now using interactive buttons! see app.module.ts for more info');
                },
                keyboardShortcut: 'Enter'
            }
        ]);
        this.config.translationsDictionary = projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__["NgDashboardEn"];
        this.config.language.next('en');
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guide/guide.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/guide/guide.component.ngfactory.js ***!
  \****************************************************/
/*! exports provided: RenderType_GuideComponent, View_GuideComponent_0, View_GuideComponent_Host_0, GuideComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_GuideComponent", function() { return RenderType_GuideComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GuideComponent_0", function() { return View_GuideComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_GuideComponent_Host_0", function() { return View_GuideComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideComponentNgFactory", function() { return GuideComponentNgFactory; });
/* harmony import */ var _guide_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guide.component.scss.shim.ngstyle */ "./src/app/guide/guide.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _guide_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guide.component */ "./src/app/guide/guide.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_GuideComponent = [_guide_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_GuideComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_GuideComponent, data: {} });

function View_GuideComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Angular 8 Dashboard"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" ng-dashboard is a modular dashboard based on Angular. You can create your own dashboard, based on tools provided on this library\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["    npm i @ng-dashboard/core --save\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["@ng-dashboard/core comes with the authentication as well."]))], null, null); }
function View_GuideComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-guide", [], null, null, null, View_GuideComponent_0, RenderType_GuideComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _guide_component__WEBPACK_IMPORTED_MODULE_2__["GuideComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var GuideComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-guide", _guide_component__WEBPACK_IMPORTED_MODULE_2__["GuideComponent"], View_GuideComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/guide/guide.component.scss.shim.ngstyle.js":
/*!************************************************************!*\
  !*** ./src/app/guide/guide.component.scss.shim.ngstyle.js ***!
  \************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1aWRlL2d1aWRlLmNvbXBvbmVudC5zY3NzIn0= */"];



/***/ }),

/***/ "./src/app/guide/guide.component.ts":
/*!******************************************!*\
  !*** ./src/app/guide/guide.component.ts ***!
  \******************************************/
/*! exports provided: GuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideComponent", function() { return GuideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var GuideComponent = /** @class */ (function () {
    function GuideComponent() {
    }
    GuideComponent.prototype.ngOnInit = function () {
    };
    return GuideComponent;
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/legion/ng-dashboard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map