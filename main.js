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

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-authentication/src/lib/error-message/error-message.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-authentication/src/lib/error-message/error-message.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"error-message\">\n  <ng-content></ng-content>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-authentication/src/lib/forgot-password/forgot-password.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-authentication/src/lib/forgot-password/forgot-password.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<lib-error-message *ngIf=\"response && response.error\">\n  {{response.error.message}}\n</lib-error-message>\n<div class=\"container-login\">\n  <div class=\"wrap-login\" >\n    <div class=\"success-message\" *ngIf=\"response && response.data\">\n      <div class=\"login-header\">\n        <span class=\"success-text\" translate>{{ 'Request success' | translate}}</span>\n        <p>\n          <span translate>{{ 'Your request has been sent successfully to the' | translate}}</span><b>{{email}}</b>.\n          <span translate>{{ 'password_sent_info' | translate }}</span>\n        </p>\n      </div>\n    </div>\n    <form *ngIf=\"!response || !response.data\">\n      <div class=\"login-header\">\n        <span>{{ 'Forgot Password' | translate }}</span>\n        <p translate>{{ 'Enter your email adress and we’ll send a link to reset your password' | translate }}</p>\n      </div>\n      <div class=\"form-group material-input\">\n        <input type=\"text\" class=\"app-forget-password-email\" material-input name=\"email\" [(ngModel)]=\"email\">\n        <span class=\"focus-input\" data-placeholder=\"Email\"></span>\n        <span class=\"error-message\" *ngIf=\"error('username')\">{{error('username')}}</span>\n      </div>\n      <div class=\"form-group login-button\">\n        <button class=\"btn btn-primary\" (click)=\"requestPassword($event);\" translate>\n          {{ 'Request Password' | translate }}\n        </button>\n      </div>\n    </form>\n    <div>\n      <span translate>{{ 'Maybe you want to' | translate }}</span>&nbsp;\n      <a translate routerLink=\"/login\">{{ 'Login' | translate }}</a>&nbsp;<span translate>{{ 'or' | translate }}</span>&nbsp;\n       <a translate routerLink=\"/signup\">{{'Signup' | translate }}</a>.\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-authentication/src/lib/login-form/login-form.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-authentication/src/lib/login-form/login-form.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<lib-progress-line *ngIf=\"isRequesting\"></lib-progress-line>\n<lib-error-message *ngIf=\"response && response.error\">\n  {{response.error.message}}\n</lib-error-message>\n<div class=\"container-login\">\n  <div class=\"wrap-login\">\n    <form>\n      <div class=\"login-header\">\n        <span>{{'Sign-in' | translate}}</span>\n        <p >{{loginDialog | translate}}</p>\n      </div>\n\n      <div class=\"form-group\">\n        <label translate>{{'Username (email)' | translate}}</label>\n        <input type=\"text\" class=\"form-control app-login-form-email\"   name=\"email\" [(ngModel)]=\"form.email\">\n        <span class=\"focus-input\" data-placeholder=\"Email\"></span>\n        <span class=\"error-message\" *ngIf=\"error(response, 'email')\">{{error(response, 'email')}}</span>\n\n      </div>\n\n      <div class=\"form-group\" style=\"position: relative;\">\n\n        <label>{{'Password'| translate}}</label>\n        <input class=\"app-login-form-password form-control \" [type]=\"passwordVisibility ? 'text' : 'password'\" name=\"password\" [(ngModel)]=\"form.password\">\n        <span class=\"focus-input\" data-placeholder=\"Password\"></span>\n        <span class=\"error-message\" *ngIf=\"error(response, 'password')\">{{error(response, 'password')}}</span>\n\n        <span class=\"btn-show-pass\" (click)=\"togglePassword();\">\n          <i [ngClass]=\"{'icon-visibility_off': passwordVisibility, 'icon-visibility': (!passwordVisibility)}\"></i>\n        </span>\n      </div>\n\n      <div class=\"form-group login-button\">\n        <button class=\"btn btn-primary btn-block app-login-form-submit\" (click)=\"login($event);\" translate>\n          {{'Login'| translate}}\n        </button>\n\n        <div *ngIf=\"alternativeLogins.length\">\n          <div class=\"sso-description\" translate>\n            {{'or alternatively login with:'| translate}}\n          </div>\n\n          <ng-container *ngFor=\"let item of alternativeLogins\">\n            <ng-container *ngIf=\"item.type === 'facebook'\">\n              <button *ngIf=\"!isLoggedInByFacebook\" class=\"btn-facebook btn btn-primary btn-block app-login-facebook-submit\" (click)=\"loginFacebook();\">\n                <i class=\"fa fa-facebook\"></i>\n                <span translate>{{'Login by facebook'| translate}}</span>\n              </button>\n              <button *ngIf=\"isLoggedInByFacebook\" class=\"btn-facebook btn btn-primary btn-block app-login-facebook-continue\" (click)=\"continueWithFacebook();\">\n                <i class=\"fa fa-facebook\"></i>\n                <span translate>{{'Continue with facebook' | translate}}</span>\n              </button>\n            </ng-container>\n          </ng-container>\n\n        </div>\n      </div>\n\n      <div class=\"\">\n        <span translate>{{'Don’t have an account?' | translate}}</span>\n        <a routerLink=\"/signup\" class=\"app-signup-button\">\n          {{'Sign Up'| translate}}\n        </a>\n        <br>\n        <a routerLink=\"/forgot-password\" class=\"app-forget-password-link\" translate>\n          {{'Forgot Password?'| translate}}\n        </a>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-authentication/src/lib/progress-line/progress-line.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-authentication/src/lib/progress-line/progress-line.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"progress-line\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-authentication/src/lib/reset-password/reset-password.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-authentication/src/lib/reset-password/reset-password.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<lib-progress-line *ngIf=\"isRequesting\"></lib-progress-line>\n<lib-error-message *ngIf=\"response && response.error\">\n  {{response.error.message}}\n</lib-error-message>\n<div class=\"container-login\">\n  <div class=\"wrap-login\">\n    <form *ngIf=\"!response || !response.data\">\n      <input type=\"hidden\" class=\"app-reset-password-key\" [value]=\"key\">\n      <div class=\"login-header\">\n        <span translate>Reset password</span>\n        <p translate>Please enter your new password, and then confirm it again.</p>\n      </div>\n      <div class=\"form-group\">\n        <label translate>Password</label>\n        <input type=\"password\" class=\"form-control app-reset-password-pass1\" name=\"password1\" [(ngModel)]=\"form.password1\">\n        <span class=\"focus-input\" data-placeholder=\"Password\"></span>\n        <span class=\"error-message\" *ngIf=\"error(response, 'password1')\">{{error(response, 'password1')}}</span>\n      </div>\n      <div class=\"form-group\">\n        <label translate>Repeat password</label>\n        <input type=\"password\" class=\"form-control app-reset-password-pass2\" name=\"password2\" [(ngModel)]=\"form.password2\">\n        <span class=\"focus-input\" data-placeholder=\"Repeat password\"></span>\n        <span class=\"error-message\" *ngIf=\"error(response, 'password2')\">{{error(response, 'password2')}}</span>\n      </div>\n      <div class=\"form-group login-button\">\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"SubmitForm();\" translate>\n          Update password\n        </button>\n      </div>\n    </form>\n    <div>\n      <span translate>Maybe you want to</span>\n      <a translate routerLink=\"/login\">Login</a> <span translate>or</span> <a translate routerLink=\"/signup\">Signup</a>.\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-authentication/src/lib/signup-form/signup-form.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-authentication/src/lib/signup-form/signup-form.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<lib-progress-line *ngIf=\"isRequesting\"></lib-progress-line>\n<lib-error-message *ngIf=\"response && response.error\">\n  {{ response.error.message }}\n</lib-error-message>\n<div class=\"container-login\">\n  <div class=\"wrap-login\">\n    <form>\n      <div class=\"login-header\">\n        <span> {{ 'Create your account' | translate }} </span>\n        <p>{{ signupDialog | translate }}</p>\n      </div>\n\n      <div class=\"form-group\">\n        <label>{{ 'Your email (as username)' | translate }}</label>\n        <input\n          class=\"app-signup-form-email form-control\"\n          autocomplete=\"off\"\n          type=\"text\"\n          name=\"email\"\n          value=\"\"\n          [(ngModel)]=\"form.email\"\n        />\n        <span class=\"focus-input\" data-placeholder=\"Email\"></span>\n        <span class=\"error-message\" *ngIf=\"error(response, 'email')\">{{\n          error(response, 'email')\n        }}</span>\n      </div>\n\n      <div class=\"form-group\" style=\"position: relative\">\n        <label>{{ 'Password' | translate }}</label>\n        <span class=\"btn-show-pass\" (click)=\"togglePassword()\">\n          <i\n            [ngClass]=\"{\n              'icon-visibility_off': passwordVisibility,\n              'icon-visibility': !passwordVisibility\n            }\"\n          ></i>\n        </span>\n        <input\n          class=\"app-signup-form-password form-control\"\n          autocomplete=\"off\"\n          [type]=\"passwordVisibility ? 'text' : 'password'\"\n          name=\"password\"\n          [(ngModel)]=\"form.password\"\n        />\n        <span class=\"focus-input\" data-placeholder=\"Password\"></span>\n        <span class=\"error-message\" *ngIf=\"error(response, 'password')\">{{\n          error(response, 'password')\n        }}</span>\n      </div>\n\n      <p class=\"signup-info\">\n        <span translate>{{\n          'By clicking on \"Signup\" below, you are agreeing to the' | translate\n        }}</span>\n        <a routerLink=\"/privacy-policy\" translate>Privacy Policy</a>.\n      </p>\n\n      <div class=\"form-group login-button\">\n        <button\n          class=\"btn btn-primary app-signup-form-submit\"\n          (click)=\"signup($event)\"\n        >\n          {{ 'Signup' | translate }}\n        </button>\n      </div>\n\n      <div>\n        <span>{{ 'Do you have an account?' | translate }}</span>\n        <a routerLink=\"/login\"> {{ 'Login' | translate }} </a>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/error-message/error-message.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/error-message/error-message.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"error-message\">\n  <ng-content></ng-content>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/layout-fade/layout-fade.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/layout-fade/layout-fade.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-nav-bar></ng-nav-bar>\n<ng-side-bar></ng-side-bar>\n<div\n  [ngClass]=\"{'ngd-sidebar-visible': sideState }\"\n  class=\"ngd-outlet\"\n  (click)=\"sideOff();\"\n>\n  <main [@routeAnimations]=\"prepareRoute(outlet)\" style='display:block; position: relative;'>\n    <router-outlet class=\"layout-router-outlet\" #outlet=\"outlet\"></router-outlet>\n  </main>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/layout/layout.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/layout/layout.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ng-nav-bar></ng-nav-bar>\n<ng-side-bar></ng-side-bar>\n<div\n  [ngClass]=\"{'ngd-sidebar-visible': sideState }\"\n  class=\"ngd-outlet\"\n  (click)=\"sideOff();\"\n>\n <router-outlet class=\"layout-router-outlet\" #outlet=\"outlet\"></router-outlet>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/nav-bar/nav-bar.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/nav-bar/nav-bar.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light fixed-nav ng-dashboard-nav\" dir=\"ltr\">\n  <button class=\"ngd-sidebar-toggle \" (click)=\"ToggleSidebar()\">\n    <i class=\"icon-menu\"></i>\n  </button>\n  <div class=\"application-nav col-lg-6\">\n    <ng-container *ngIf=\"config.search && config.search.terms\">\n      <amazing-search [terms]=\"config.search.terms\"></amazing-search>\n    </ng-container>\n    <!-- <div class=\"active-application-wrapper\">\n      <div class=\"active-application\" title=\"Work Office In London\">\n        <ng-container *ngIf=\"config.avatar\">\n          <div class=\"application-avatar\">{{config.avatar}}</div>\n        </ng-container>\n        <ng-container *ngIf=\"config.title\">\n          <div class=\"application-title\" translate>{{config.title}}</div>\n        </ng-container>\n      </div>\n    </div>\n    <a class=\"navbar-brand\" translate>{{config.brand}}</a> -->\n  </div>\n  <div class=\"navbar-collapse f-basic-auto\">\n    <div class=\"d-flex flex-row-reverse ml-auto justify-content-start nav-items\">\n      <div class=\"d-2\" *ngIf=\"config.profile !== false\">\n        <ng-profile-menu></ng-profile-menu>\n      </div>\n      <div class=\"d-2\" *ngIf=\"config.notification !== false\">\n        <ng-notification-list></ng-notification-list>\n      </div>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/notification-list/notification-list.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/notification-list/notification-list.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"notification-container\" id=\"notification-button\" (click)=\"ToggleNotification();\" [ngClass]=\"{'active': notificationStatus}\">\n  <span class=\"notification-badge\"></span>\n  <i class=\"icon-notifications_none\"></i>\n</div>\n\n<div class=\"notification-overlay\" [ngClass]=\"{'active': notificationStatus}\"></div>\n<div class=\"ngd-notification-wrapper\" id=\"notification-list\" [ngClass]=\"{'active': notificationStatus}\">\n  <div class=\"d-flex justify-content-between notification-header\">\n    <div class=\"d-2\" translate>\n      Notifications\n    </div>\n    <div class=\"d-2\">\n      <button class=\"search-btn\" (click)=\"ToggleSearch();\" *ngIf=\"notifications.length\" [Tooltip]=\"'Filter'\">\n        <i class=\"icon-filter_list\"></i>\n      </button>\n    </div>\n    <div class=\"search-input\" *ngIf=\"searchStatus\">\n      <button class=\"search-btn close-search-bar\" (click)=\"ToggleSearch();\">\n        <i class=\"icon-close\"></i>\n      </button>\n      <input type=\"text\" class=\"form-control\" (keyup)=\"filterNotifications($event.target.value);\" placeholder=\"Filter of all notifications ...\"/>\n    </div>\n  </div>\n  <div *ngIf=\"!notifications.length\" class=\"no-content\">\n    <i class=\"icon-error\"></i>\n    <p translate>There are not any activities yet</p>\n  </div>\n  <div class=\"notification-list\" data-simplebar *ngIf=\"notifications.length\">\n    <ul>\n      <li *ngFor=\"let item of notifications\">\n        <div class=\"notification-icon\">\n          <i [class]=\"item.status\"></i>\n        </div>\n        <div class=\"notification-content\">\n          <p class=\"notification-message\">{{item.title}}{{ item.message.length > 0 ? ' : ' : ''}}{{item.message}}</p>\n          <p class=\"notification-type\">{{item.date  | date:'fullDate'}} - {{item.date  | date:'HH:MM'}}</p>\n        </div>\n      </li>\n\n      <!-- Don't remove this lines we need it for Reminding -->\n      <!-- <li>\n        <div class=\"notification-icon\">\n          <i class=\"icon-comment\" [Tooltip]=\"'Sent Message'\"></i>\n        </div>\n        <div class=\"notification-content\">\n          <p class=\"notification-message\">Kitcheb temprature is higher than normal temp</p>\n          <p class=\"notification-type\">Friday, March 26, 2018 - 06:00</p>\n        </div>\n      </li>\n      <li>\n        <div class=\"notification-icon\">\n          <i class=\"icon-mail_outline\" [Tooltip]=\"'Sent Email'\"></i>\n        </div>\n        <div class=\"notification-content\">\n          <p class=\"notification-message\">5 Devices maybe has crashed</p>\n          <p class=\"notification-type\">Friday, March 26, 2018 - 08:15</p>\n        </div>\n      </li>\n      <li>\n        <div class=\"notification-icon\">\n          <i class=\"icon-call_missed\" [Tooltip]=\"'Missed call'\"></i>\n        </div>\n        <div class=\"notification-content\">\n          <p class=\"notification-message\">You don't answer to phon call and we send the message to you</p>\n          <p class=\"notification-type\">Friday, March 27, 2018 - 15:30</p>\n        </div>\n      </li>\n      <li>\n        <div class=\"notification-icon\">\n          <i class=\"icon-error\" [Tooltip]=\"'Warning'\"></i>\n        </div>\n        <div class=\"notification-content\">\n          <p class=\"notification-message\">8 Devices has detected but that's not connect to your dashboard</p>\n          <p class=\"notification-type\">Friday, March 27, 2018 - 18:30</p>\n        </div>\n      </li>\n      <li>\n        <div class=\"notification-icon\">\n          <i class=\"icon-remove_circle\" [Tooltip]=\"'Remove'\"></i>\n        </div>\n        <div class=\"notification-content\">\n          <p class=\"notification-message\">Removed Location: Bathroom has removed successfuly.</p>\n          <p class=\"notification-type\">Friday, March 27, 2018 - 18:30</p>\n        </div>\n      </li>\n      <li>\n        <div class=\"notification-icon\">\n          <i class=\"icon-call_made\" [Tooltip]=\"'Called'\"></i>\n        </div>\n        <div class=\"notification-content\">\n          <p class=\"notification-message\">All Lights on for 2 days, Called to +98901234567 and answerd</p>\n          <p class=\"notification-type\">Friday, March 27, 2018 - 18:50</p>\n        </div>\n      </li>\n      <li>\n        <div class=\"notification-icon\">\n          <i class=\"icon-mode_edit\" [Tooltip]=\"'Edit'\"></i>\n        </div>\n        <div class=\"notification-content\">\n          <p class=\"notification-message\">Edited Device: Temrature has edited successfuly</p>\n          <p class=\"notification-type\">Friday, March 27, 2018 - 19:50</p>\n        </div>\n      </li>\n      <li>\n        <div class=\"notification-icon\">\n          <i class=\"icon-add_circle\" [Tooltip]=\"'Add'\"></i>\n        </div>\n        <div class=\"notification-content\">\n          <p class=\"notification-message\">Added Location: Kitchen has created successfuly</p>\n          <p class=\"notification-type\">Friday, March 27, 2018 - 19:50</p>\n        </div>\n      </li> -->\n\n      \n    </ul>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/page-container/page-container.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/page-container/page-container.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box-wrapper\">\n  <div class=\"row\">\n    <div class=\"box-title\">\n      <div class=\"d-flex flex-wrap justify-content-between align-items-center\">\n        <div class=\"d-2 elips-inner-content\">\n            <h2 [title]=\"maintitle\" class=\"app-page-title\" >{{maintitle | translate}}</h2>\n            <p [title]=\"subtitle\" >{{subtitle | translate}}</p>\n        </div>\n        <div class=\"d-2\">\n          <ng-content select=[action-button]></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"j-forms\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/profile-menu/profile-menu.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/profile-menu/profile-menu.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"avatar-container d-flex flex-row justify-content-center align-items-center\">\n  <div  >\n    <div *ngIf=\"true\" style=\"text-transform: uppercase;\" class=\"avatar-name app-avatar-name\">{{name()}}</div>\n  </div>\n  <div class=\"pname\">\n    <a routerLink=\"/profile\" class=\"app-profile-view\">{{display}}</a>\n    <!-- <i class=\"icon-expand_more\"></i> -->\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/progress-line/progress-line.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/progress-line/progress-line.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"progress-line\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/side-bar/side-bar.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/side-bar/side-bar.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bd-sidebar\" data-simplebar [ngClass]=\"{'active': sideState }\">\n    <ngx-sidebar [navigation]=\"navigation\"></ngx-sidebar>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/spinner/spinner.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/spinner/spinner.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span\n  class=\"spinner-double-section-in\"\n  [ngClass]=\"{'spinner-high': isHigh, 'spinner-low': isLow}\">\n</span>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-icon-box/ui-icon-box.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-icon-box/ui-icon-box.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"box-wrapper app-statistics\" [routerLink]=\"url\">\n  <div class=\"d-flex flex-wrap justify-content-between align-items-center hover\">  \n    <i [class]=\"'icon ' + icon\"></i>\n    <div class=\"d-2\">\n      <h2>{{title}}</h2>\n    </div>\n  </div>\n</a>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-panel-box/ui-panel-box.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-panel-box/ui-panel-box.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box-wrapper no-padding\">\n  <div class=\"hs-container\">\n    <div class=\"hs-title\" >\n      <div class=\"d-flex d-md-flex d-sm-block d-xs-block align-items-center\">\n        <div class=\"d-2\">\n          <h2>{{title}}</h2>\n          <p>{{description}}</p>\n        </div>\n        <div class=\"d-2 d-sm-block current-item\">\n          <div class=\"d-flex flex-column\">\n            <div class=\"d-2\">\n              20-18-20\n            </div>\n            \n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex overflow-hidden position-relative\">\n      <ng-content></ng-content>\n\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-small-box/ui-small-box.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-small-box/ui-small-box.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box-wrapper app-statistics\">\n  <div class=\"d-flex flex-wrap justify-content-between align-items-center\">\n    <div class=\"d-2\">\n      <h2>{{title}}</h2>\n      <p>{{description}}</p>\n    </div>\n    <div class=\"d-2 value\">\n      {{value}}\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul [ngClass]='containerClass'>  \n  <ng-container *ngIf=\"isRouteFocused\">\n    <a class=\"move-back-btn\" (click)=\"GoBack();\">Move back</a>\n    <li *ngIf=\"nav\" [routerLinkActive]=\"nav.link ? 'opened' : ''\"  (click)=\"menuToggle($event, nav);$event.stopPropagation()\">\n      <a (click)=\"onLinkClick(nav)\" class=\"ngx-menu-item ngx-menu-link-{{nav.class}}\" [routerLink]=\"nav.link\">\n        <i [class]='nav.icon'></i>\n        {{ nav.title | translate }}\n      </a>\n    </li>\n  </ng-container>\n  <ng-template #dynamic></ng-template>\n  <ng-container *ngIf=\"!isRouteFocused\">\n    <ng-container *ngFor=\"let nav of navigation\" >\n      <li *ngIf=\"nav\" [routerLinkActive]=\"nav.link ? 'opened' : ''\"  (click)=\"menuToggle($event, nav);$event.stopPropagation()\">\n        <a (click)=\"renderComponents(nav.component)\" class=\"ngx-menu-item ngx-menu-link-{{nav.class}}\" [routerLink]=\"nav.link\">\n          <i [class]='nav.icon'></i>\n          {{ nav.title | translate }}\n        </a>\n        <ngx-sidebar *ngIf=\"nav.children\" [navigation]='nav.children' [containerClass]=\"'child-ul'\"></ngx-sidebar>\n      </li>\n    </ng-container>\n  </ng-container>\n</ul>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ngx-tooltip/ngx-tooltip.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ngx-tooltip/ngx-tooltip.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #tooltipBox class=\"ngx-tooltip\" [ngStyle]=\"{'left': elementStyle.width + 'px', 'top': elementStyle.height + 'px', 'opacity': elementStyle.opacity}\">\n  {{tooltip}}\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/preview/preview.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/preview/preview.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>preview works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./projects/ng-authentication/src/lib/auth-public.service.ts":
/*!*******************************************************************!*\
  !*** ./projects/ng-authentication/src/lib/auth-public.service.ts ***!
  \*******************************************************************/
/*! exports provided: AuthEvent, AuthPublicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEvent", function() { return AuthEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPublicService", function() { return AuthPublicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


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
        this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.translations = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AuthPublicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthPublicService);
    return AuthPublicService;
}());



/***/ }),

/***/ "./projects/ng-authentication/src/lib/config.service.ts":
/*!**************************************************************!*\
  !*** ./projects/ng-authentication/src/lib/config.service.ts ***!
  \**************************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigService = /** @class */ (function () {
    function ConfigService(authConfig) {
        this.authConfig = authConfig;
    }
    Object.defineProperty(ConfigService.prototype, "Config", {
        get: function () {
            return this.authConfig;
        },
        enumerable: true,
        configurable: true
    });
    ConfigService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['authConfig',] }] }
    ]; };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('authConfig'))
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./projects/ng-authentication/src/lib/error-message/error-message.component.scss":
/*!***************************************************************************************!*\
  !*** ./projects/ng-authentication/src/lib/error-message/error-message.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * Retrieves a color value from the $material-colors Sass map\n * Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette/\n *\n * @function\n * @param {string} color-name             - quoted, lower-case, dasherized color\n *                                          name (e.g. 'pink', 'amber')\n * @param {string} [color-variant='500']  - quoted, lowercase color variant (e.g.\n *                                          '200', 'a100')\n */\n.error-message {\n  background-color: #ffecb3;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL25nLWF1dGhlbnRpY2F0aW9uL25vZGVfbW9kdWxlcy9zYXNzLW1hdGVyaWFsLWNvbG9ycy9zYXNzL19zYXNzLW1hdGVyaWFsLWNvbG9ycy1mdW5jdGlvbi5zY3NzIiwiL1VzZXJzL2xlZ2lvbi9uZy1kYXNoYm9hcmQvcHJvamVjdHMvbmctYXV0aGVudGljYXRpb24vc3JjL2xpYi9lcnJvci1tZXNzYWdlL2Vycm9yLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbGVnaW9uL25nLWRhc2hib2FyZC9wcm9qZWN0cy9uZy1hdXRoZW50aWNhdGlvbi9zcmMvbGliL3Njc3MvX3ZhcnMuc2NzcyIsInByb2plY3RzL25nLWF1dGhlbnRpY2F0aW9uL3NyYy9saWIvZXJyb3ItbWVzc2FnZS9lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzs7Ozs7Ozs7RUFBQTtBQ0NBO0VBQ0UseUJDOENnQjtFRDdDaEIsYUFBQTtBRVNGIiwiZmlsZSI6InByb2plY3RzL25nLWF1dGhlbnRpY2F0aW9uL3NyYy9saWIvZXJyb3ItbWVzc2FnZS9lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc2Fzcy1tYXRlcmlhbC1jb2xvcnMtbWFwJztcbi8qKlxuICogUmV0cmlldmVzIGEgY29sb3IgdmFsdWUgZnJvbSB0aGUgJG1hdGVyaWFsLWNvbG9ycyBTYXNzIG1hcFxuICogSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL25pbHNrYXNwZXJzc29uL0dvb2dsZS1NYXRlcmlhbC1VSS1Db2xvci1QYWxldHRlL1xuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yLW5hbWUgICAgICAgICAgICAgLSBxdW90ZWQsIGxvd2VyLWNhc2UsIGRhc2hlcml6ZWQgY29sb3JcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSAoZS5nLiAncGluaycsICdhbWJlcicpXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvbG9yLXZhcmlhbnQ9JzUwMCddICAtIHF1b3RlZCwgbG93ZXJjYXNlIGNvbG9yIHZhcmlhbnQgKGUuZy5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzIwMCcsICdhMTAwJylcbiAqL1xuQGZ1bmN0aW9uIG1hdGVyaWFsLWNvbG9yKCRjb2xvci1uYW1lLCAkY29sb3ItdmFyaWFudDogJzUwMCcpIHtcbiAgJGNvbG9yOiBtYXAtZ2V0KG1hcC1nZXQoJG1hdGVyaWFsLWNvbG9ycywgJGNvbG9yLW5hbWUpLCRjb2xvci12YXJpYW50KTtcbiAgQGlmICRjb2xvciB7XG4gICAgQHJldHVybiAkY29sb3I7XG4gIH0gQGVsc2Uge1xuICAgIC8vIExpYnNhc3Mgc3RpbGwgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgQGVycm9yXG4gICAgQHdhcm4gXCI9PiBFUlJPUjogQ09MT1IgTk9UIEZPVU5EISA8PSB8IFlvdXIgJGNvbG9yLW5hbWUsICRjb2xvci12YXJpYW50IGNvbWJpbmF0aW9uIGRpZCBub3QgbWF0Y2ggYW55IG9mIHRoZSB2YWx1ZXMgaW4gdGhlICRtYXRlcmlhbC1jb2xvcnMgbWFwLlwiO1xuICB9XG59XG4iLCJAaW1wb3J0ICcuLi9zY3NzL2luamVjdHMnO1xuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRlcnJvci1jb2xvci0xMDA7XG4gIHBhZGRpbmc6IDE1cHg7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbWF0ZXJpYWwtY29sb3JzL3Nhc3Mvc2Fzcy1tYXRlcmlhbC1jb2xvcnMnO1xuXG4vLy8gRGVmYXVsdCB0aGVtZSBiYXNlIHZhcmlhYmxlc1xuJG5hdmlnYXRpb25XaWR0aDogMTAwcHg7XG4kc3RhdHVzQmFyV2lkdGg6IDI3NXB4O1xuJHRoZW1lLWludmVyc2U6ICAgICAgICAgICAgIHdoaXRlO1xuJHRoZW1lLWNvbG9yOiAgICAgICAgICAgICAgIHJnYigwLDIwMywxMjIpO1xuJHByaW1hcnktdGV4dDogICAgICAgICAgICAgICMyMTIxMjE7XG4kc2Vjb25kYXJ5LXRleHQ6ICAgICAgICAgICAgIzc1NzU3NTtcbiRkaXZpZGVyOiAgICAgICAgICAgICAgICAgICAjQkRCREJEO1xuJGJhY2tncm91bmQ6ICAgICAgICAgICAgICAgICNGRkZGRkY7XG4kZGlhbGVjdDogICAgICAgICAgICAgICAgICAgc2lsdmVyO1xuJGhvdmVyOiByZ2JhKDIzMCwgMjMwLCAyMzAsIDAuNyk7XG4kc2hhZG93OiAgICAgICAgICAgICAgICAgICAgcmdiYSgwLDAsMCwwLjMpO1xuXG4vLy8gTmF2aWdhdGlvbiB2YXJpYWJsZXNcbiRuYXZpZ2F0aW9uOiAgICAgICAgICAgICAgICAjMWExYTFjO1xuJG5hdi1pY29uOiAgICAgICAgICAgICAgICAgIHJnYigxMjcsMTI3LDEyNyk7XG4kbmF2LWljb24taG92ZXI6ICAgICAgICAgICAgcmdiKDQ5LDUyLDUzKTtcbiRuYXYtaWNvbi1hY3RpdmU6ICAgICAgICAgICByZ2IoMTcwLDE3MCwxNzApO1xuXG5cbiRhcHBpbmZvOiAgICAgICAgICAgICAgICAgICAjZWVmMWY4O1xuJGNvbnRhaW5lcjogICAgICAgICAgICAgICAgIHJnYigyMzgsMjQxLDI0Nyk7XG4kc21vb3RoQm9yZGVyOiAgICAgICAgICAgICAgMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcblxuXG4kbWF0ZXJpYWwtY29sb3I6ICdsaWdodC1ibHVlJztcbiR0aGVtZS1jb2xvci05MDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzkwMCcpO1xuJHRoZW1lLWNvbG9yLTgwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnODAwJyk7XG4kdGhlbWUtY29sb3ItNzAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc3MDAnKTtcbiR0aGVtZS1jb2xvci02MDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzYwMCcpO1xuJHRoZW1lLWNvbG9yLTUwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnNTAwJyk7XG4kdGhlbWUtY29sb3ItNDAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc0MDAnKTtcbiR0aGVtZS1jb2xvci0zMDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzMwMCcpO1xuJHRoZW1lLWNvbG9yLTIwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnMjAwJyk7XG4kdGhlbWUtY29sb3ItMTAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICcxMDAnKTtcbiR0aGVtZS1jb2xvci01MDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnNTAnKTtcblxuXG4kZXJyb3ItY29sb3I6ICdhbWJlcic7XG4kZXJyb3ItY29sb3ItOTAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICc5MDAnKTtcbiRlcnJvci1jb2xvci04MDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzgwMCcpO1xuJGVycm9yLWNvbG9yLTcwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnNzAwJyk7XG4kZXJyb3ItY29sb3ItNjAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICc2MDAnKTtcbiRlcnJvci1jb2xvci01MDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzUwMCcpO1xuJGVycm9yLWNvbG9yLTQwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnNDAwJyk7XG4kZXJyb3ItY29sb3ItMzAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICczMDAnKTtcbiRlcnJvci1jb2xvci0yMDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzIwMCcpO1xuJGVycm9yLWNvbG9yLTEwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnMTAwJyk7XG4kZXJyb3ItY29sb3ItNTA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzUwJyk7XG5cblxuIiwiLyoqXG4gKiBSZXRyaWV2ZXMgYSBjb2xvciB2YWx1ZSBmcm9tIHRoZSAkbWF0ZXJpYWwtY29sb3JzIFNhc3MgbWFwXG4gKiBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vbmlsc2thc3BlcnNzb24vR29vZ2xlLU1hdGVyaWFsLVVJLUNvbG9yLVBhbGV0dGUvXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3ItbmFtZSAgICAgICAgICAgICAtIHF1b3RlZCwgbG93ZXItY2FzZSwgZGFzaGVyaXplZCBjb2xvclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lIChlLmcuICdwaW5rJywgJ2FtYmVyJylcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29sb3ItdmFyaWFudD0nNTAwJ10gIC0gcXVvdGVkLCBsb3dlcmNhc2UgY29sb3IgdmFyaWFudCAoZS5nLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMjAwJywgJ2ExMDAnKVxuICovXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVjYjM7XG4gIHBhZGRpbmc6IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./projects/ng-authentication/src/lib/error-message/error-message.component.ts":
/*!*************************************************************************************!*\
  !*** ./projects/ng-authentication/src/lib/error-message/error-message.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ErrorMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageComponent", function() { return ErrorMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorMessageComponent = /** @class */ (function () {
    function ErrorMessageComponent() {
    }
    ErrorMessageComponent.prototype.ngOnInit = function () {
    };
    ErrorMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lib-error-message',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error-message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-authentication/src/lib/error-message/error-message.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error-message.component.scss */ "./projects/ng-authentication/src/lib/error-message/error-message.component.scss")).default]
        })
    ], ErrorMessageComponent);
    return ErrorMessageComponent;
}());



/***/ }),

/***/ "./projects/ng-authentication/src/lib/facebook.service.ts":
/*!****************************************************************!*\
  !*** ./projects/ng-authentication/src/lib/facebook.service.ts ***!
  \****************************************************************/
/*! exports provided: FacebookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookService", function() { return FacebookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



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
    FacebookService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    FacebookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FacebookService);
    return FacebookService;
}());



/***/ }),

/***/ "./projects/ng-authentication/src/lib/forgot-password/forgot-password.component.scss":
/*!*******************************************************************************************!*\
  !*** ./projects/ng-authentication/src/lib/forgot-password/forgot-password.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * Retrieves a color value from the $material-colors Sass map\n * Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette/\n *\n * @function\n * @param {string} color-name             - quoted, lower-case, dasherized color\n *                                          name (e.g. 'pink', 'amber')\n * @param {string} [color-variant='500']  - quoted, lowercase color variant (e.g.\n *                                          '200', 'a100')\n */\n.material-input {\n  width: 100%;\n  position: relative;\n  border-bottom: 1px solid #adadad;\n  margin-bottom: 35px;\n}\n.material-input input {\n  font-size: 15px;\n  color: #555555;\n  line-height: 1.2;\n  display: block;\n  width: 100%;\n  height: 45px;\n  background: transparent;\n  padding: 0 5px;\n  outline: none;\n  border: none;\n  overflow: visible;\n}\n.material-input input:focus + .focus-input:after {\n  top: -10px;\n  font-size: 12px;\n  color: #aaa;\n}\n.material-input input:focus + .focus-input:before {\n  width: 100%;\n}\n.material-input input.focused + .focus-input:after {\n  top: -10px;\n  font-size: 12px;\n  color: #aaa;\n}\n.material-input input.focused + .focus-input:before {\n  width: 100%;\n}\n.material-input .focus-input {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n.material-input .focus-input:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  transition: all 0.4s;\n  background: #6a7dfe;\n  background: linear-gradient(to left, #21d4fd, #b721ff);\n}\n.material-input .focus-input:after {\n  font-size: 15px;\n  color: #999999;\n  line-height: 1.2;\n  content: attr(data-placeholder);\n  display: block;\n  width: 100%;\n  position: absolute;\n  top: 16px;\n  left: 0px;\n  padding-left: 5px;\n  transition: all 0.4s;\n}\n.material-input .btn-show-pass {\n  font-size: 15px;\n  color: #999999;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  height: 100%;\n  top: 0;\n  right: 0;\n  padding-right: 5px;\n  cursor: pointer;\n  transition: all 0.4s;\n}\n.material-input .btn-show-pass:hover {\n  color: #6a7dfe;\n  color: -webkit-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -o-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -moz-linear-gradient(to left, #21d4fd, #b721ff);\n  color: linear-gradient(to left, #21d4fd, #b721ff);\n}\n.material-input .btn-show-pass.active {\n  color: #6a7dfe;\n  color: -webkit-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -o-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -moz-linear-gradient(to left, #21d4fd, #b721ff);\n  color: linear-gradient(to left, #21d4fd, #b721ff);\n}\n.error-message {\n  font-size: 13px;\n  color: #ff8f00;\n  position: absolute;\n  margin-top: 5px;\n  margin-left: 5px;\n}\n.container-login {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  background: #f2f2f2;\n}\n.container-login .wrap-login {\n  width: 390px;\n  background: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  padding: 45px 45px 33px 45px;\n  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -o-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -ms-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 767px) {\n  .container-login .wrap-login {\n    padding: 15px;\n  }\n}\n.container-login .wrap-login .login-header {\n  font-size: 23px;\n  padding-bottom: 10px;\n}\n.container-login .wrap-login .login-header span {\n  display: inline-block;\n  margin-bottom: 10px;\n}\n.container-login .wrap-login .login-header p {\n  font-size: 15px;\n}\n.container-login .wrap-login .login-button {\n  margin: 25px 0;\n}\n.container-login .wrap-login .login-button button {\n  border-radius: 3px;\n  padding-right: 25px;\n  padding-left: 25px;\n}\n.container-login .wrap-login .message {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL25nLWF1dGhlbnRpY2F0aW9uL25vZGVfbW9kdWxlcy9zYXNzLW1hdGVyaWFsLWNvbG9ycy9zYXNzL19zYXNzLW1hdGVyaWFsLWNvbG9ycy1mdW5jdGlvbi5zY3NzIiwiL1VzZXJzL2xlZ2lvbi9uZy1kYXNoYm9hcmQvcHJvamVjdHMvbmctYXV0aGVudGljYXRpb24vc3JjL2xpYi9jb21tb24uc2NzcyIsInByb2plY3RzL25nLWF1dGhlbnRpY2F0aW9uL3NyYy9saWIvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL25nLWF1dGhlbnRpY2F0aW9uL3NyYy9saWIvc2Nzcy9fdmFycy5zY3NzIiwiL1VzZXJzL2xlZ2lvbi9uZy1kYXNoYm9hcmQvcHJvamVjdHMvbmctYXV0aGVudGljYXRpb24vc3JjL2xpYi9zY3NzL19tZWRpYXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7Ozs7Ozs7O0VBQUE7QUNBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUNVRjtBRFRFO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNXTjtBRFRVO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDV2Q7QURUVTtFQUNJLFdBQUE7QUNXZDtBRFBVO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDU2Q7QURQVTtFQUNJLFdBQUE7QUNTZDtBRExFO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG9CQUFBO0FDT047QUROTTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBS0Esb0JBQUE7RUFFQSxtQkFBQTtFQUlBLHNEQUFBO0FDTVY7QURKTTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFFQSwrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBS0Esb0JBQUE7QUNJVjtBREFFO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFNQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUlBLG9CQUFBO0FDQ047QURBTTtFQUNJLGNBQUE7RUFDQSx5REFBQTtFQUNBLG9EQUFBO0VBQ0Esc0RBQUE7RUFDQSxpREFBQTtBQ0VWO0FEQU07RUFDSSxjQUFBO0VBQ0EseURBQUE7RUFDQSxvREFBQTtFQUNBLHNEQUFBO0VBQ0EsaURBQUE7QUNFVjtBREdBO0VBQ0UsZUFBQTtFQUNBLGNFcEZnQjtFRnFGaEIsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBRElBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBS0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDREY7QURFRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0RBQUE7RUFDQSxxREFBQTtFQUNBLGdEQUFBO0VBQ0EsaURBQUE7QUNBSjtBRTlIRTtFSG9IQTtJQWFJLGFBQUE7RUNDSjtBQUNGO0FEQUk7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUNFTjtBRERNO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQ0dSO0FERE07RUFDRSxlQUFBO0FDR1I7QURBSTtFQUNFLGNBQUE7QUNFTjtBRERNO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDR1I7QURBSTtFQUNFLGVBQUE7QUNFTiIsImZpbGUiOiJwcm9qZWN0cy9uZy1hdXRoZW50aWNhdGlvbi9zcmMvbGliL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzYXNzLW1hdGVyaWFsLWNvbG9ycy1tYXAnO1xuLyoqXG4gKiBSZXRyaWV2ZXMgYSBjb2xvciB2YWx1ZSBmcm9tIHRoZSAkbWF0ZXJpYWwtY29sb3JzIFNhc3MgbWFwXG4gKiBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vbmlsc2thc3BlcnNzb24vR29vZ2xlLU1hdGVyaWFsLVVJLUNvbG9yLVBhbGV0dGUvXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3ItbmFtZSAgICAgICAgICAgICAtIHF1b3RlZCwgbG93ZXItY2FzZSwgZGFzaGVyaXplZCBjb2xvclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lIChlLmcuICdwaW5rJywgJ2FtYmVyJylcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29sb3ItdmFyaWFudD0nNTAwJ10gIC0gcXVvdGVkLCBsb3dlcmNhc2UgY29sb3IgdmFyaWFudCAoZS5nLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMjAwJywgJ2ExMDAnKVxuICovXG5AZnVuY3Rpb24gbWF0ZXJpYWwtY29sb3IoJGNvbG9yLW5hbWUsICRjb2xvci12YXJpYW50OiAnNTAwJykge1xuICAkY29sb3I6IG1hcC1nZXQobWFwLWdldCgkbWF0ZXJpYWwtY29sb3JzLCAkY29sb3ItbmFtZSksJGNvbG9yLXZhcmlhbnQpO1xuICBAaWYgJGNvbG9yIHtcbiAgICBAcmV0dXJuICRjb2xvcjtcbiAgfSBAZWxzZSB7XG4gICAgLy8gTGlic2FzcyBzdGlsbCBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCBAZXJyb3JcbiAgICBAd2FybiBcIj0+IEVSUk9SOiBDT0xPUiBOT1QgRk9VTkQhIDw9IHwgWW91ciAkY29sb3ItbmFtZSwgJGNvbG9yLXZhcmlhbnQgY29tYmluYXRpb24gZGlkIG5vdCBtYXRjaCBhbnkgb2YgdGhlIHZhbHVlcyBpbiB0aGUgJG1hdGVyaWFsLWNvbG9ycyBtYXAuXCI7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4vc2Nzcy9pbmplY3RzJztcbi5tYXRlcmlhbC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWRhZGFkO1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICBpbnB1dCB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBjb2xvcjogIzU1NTU1NTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICY6Zm9jdXMgKyAuZm9jdXMtaW5wdXR7XG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgY29sb3I6ICNhYWE7XG4gICAgICAgICAgfVxuICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5mb2N1c2VkICsgLmZvY3VzLWlucHV0e1xuICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICB0b3A6IC0xMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjYWFhO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICAuZm9jdXMtaW5wdXQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IC0ycHg7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICBcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgICAgXG4gICAgICAgICAgYmFja2dyb3VuZDogIzZhN2RmZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgfVxuICAgICAgJjphZnRlciB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgXG4gICAgICAgICAgY29udGVudDogYXR0cihkYXRhLXBsYWNlaG9sZGVyKTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICBcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICB9XG4gIH1cblxuICAuYnRuLXNob3ctcGFzcyB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBjb2xvcjogIzk5OTk5OTtcbiAgICAgIFxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjNmE3ZGZlO1xuICAgICAgICAgIGNvbG9yOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgICAgICAgICBjb2xvcjogLW8tbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgICAgIGNvbG9yOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgICAgICAgICBjb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgfVxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIGNvbG9yOiAjNmE3ZGZlO1xuICAgICAgICAgIGNvbG9yOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgICAgICAgICBjb2xvcjogLW8tbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgICAgIGNvbG9yOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgICAgICAgICBjb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgfVxuICB9XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogJGVycm9yLWNvbG9yLTgwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cblxuLmNvbnRhaW5lci1sb2dpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAud3JhcC1sb2dpbiB7XG4gICAgd2lkdGg6IDM5MHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogNDVweCA0NXB4IDMzcHggNDVweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLW8tYm94LXNoYWRvdzogMCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIC1tcy1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbiAgICBAaW5jbHVkZSBwaG9uZSAoKSB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgIH1cbiAgICAubG9naW4taGVhZGVyIHtcbiAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweFxuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmxvZ2luLWJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDI1cHggMDtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgfVxuICAgIH1cbiAgICAubWVzc2FnZSB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICB9XG59IiwiLyoqXG4gKiBSZXRyaWV2ZXMgYSBjb2xvciB2YWx1ZSBmcm9tIHRoZSAkbWF0ZXJpYWwtY29sb3JzIFNhc3MgbWFwXG4gKiBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vbmlsc2thc3BlcnNzb24vR29vZ2xlLU1hdGVyaWFsLVVJLUNvbG9yLVBhbGV0dGUvXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3ItbmFtZSAgICAgICAgICAgICAtIHF1b3RlZCwgbG93ZXItY2FzZSwgZGFzaGVyaXplZCBjb2xvclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lIChlLmcuICdwaW5rJywgJ2FtYmVyJylcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29sb3ItdmFyaWFudD0nNTAwJ10gIC0gcXVvdGVkLCBsb3dlcmNhc2UgY29sb3IgdmFyaWFudCAoZS5nLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMjAwJywgJ2ExMDAnKVxuICovXG4ubWF0ZXJpYWwtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FkYWRhZDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbi5tYXRlcmlhbC1pbnB1dCBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4ubWF0ZXJpYWwtaW5wdXQgaW5wdXQ6Zm9jdXMgKyAuZm9jdXMtaW5wdXQ6YWZ0ZXIge1xuICB0b3A6IC0xMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjYWFhO1xufVxuLm1hdGVyaWFsLWlucHV0IGlucHV0OmZvY3VzICsgLmZvY3VzLWlucHV0OmJlZm9yZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1hdGVyaWFsLWlucHV0IGlucHV0LmZvY3VzZWQgKyAuZm9jdXMtaW5wdXQ6YWZ0ZXIge1xuICB0b3A6IC0xMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjYWFhO1xufVxuLm1hdGVyaWFsLWlucHV0IGlucHV0LmZvY3VzZWQgKyAuZm9jdXMtaW5wdXQ6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWF0ZXJpYWwtaW5wdXQgLmZvY3VzLWlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5tYXRlcmlhbC1pbnB1dCAuZm9jdXMtaW5wdXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMnB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgYmFja2dyb3VuZDogIzZhN2RmZTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbn1cbi5tYXRlcmlhbC1pbnB1dCAuZm9jdXMtaW5wdXQ6YWZ0ZXIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb250ZW50OiBhdHRyKGRhdGEtcGxhY2Vob2xkZXIpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNnB4O1xuICBsZWZ0OiAwcHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG4ubWF0ZXJpYWwtaW5wdXQgLmJ0bi1zaG93LXBhc3Mge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuLm1hdGVyaWFsLWlucHV0IC5idG4tc2hvdy1wYXNzOmhvdmVyIHtcbiAgY29sb3I6ICM2YTdkZmU7XG4gIGNvbG9yOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgY29sb3I6IC1vLWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgY29sb3I6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICBjb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xufVxuLm1hdGVyaWFsLWlucHV0IC5idG4tc2hvdy1wYXNzLmFjdGl2ZSB7XG4gIGNvbG9yOiAjNmE3ZGZlO1xuICBjb2xvcjogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gIGNvbG9yOiAtby1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gIGNvbG9yOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgY29sb3I6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmY4ZjAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmNvbnRhaW5lci1sb2dpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xufVxuLmNvbnRhaW5lci1sb2dpbiAud3JhcC1sb2dpbiB7XG4gIHdpZHRoOiAzOTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA0NXB4IDQ1cHggMzNweCA0NXB4O1xuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW8tYm94LXNoYWRvdzogMCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbXMtYm94LXNoYWRvdzogMCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250YWluZXItbG9naW4gLndyYXAtbG9naW4ge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbn1cbi5jb250YWluZXItbG9naW4gLndyYXAtbG9naW4gLmxvZ2luLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uY29udGFpbmVyLWxvZ2luIC53cmFwLWxvZ2luIC5sb2dpbi1oZWFkZXIgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXItbG9naW4gLndyYXAtbG9naW4gLmxvZ2luLWhlYWRlciBwIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmNvbnRhaW5lci1sb2dpbiAud3JhcC1sb2dpbiAubG9naW4tYnV0dG9uIHtcbiAgbWFyZ2luOiAyNXB4IDA7XG59XG4uY29udGFpbmVyLWxvZ2luIC53cmFwLWxvZ2luIC5sb2dpbi1idXR0b24gYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG4uY29udGFpbmVyLWxvZ2luIC53cmFwLWxvZ2luIC5tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLW1hdGVyaWFsLWNvbG9ycy9zYXNzL3Nhc3MtbWF0ZXJpYWwtY29sb3JzJztcblxuLy8vIERlZmF1bHQgdGhlbWUgYmFzZSB2YXJpYWJsZXNcbiRuYXZpZ2F0aW9uV2lkdGg6IDEwMHB4O1xuJHN0YXR1c0JhcldpZHRoOiAyNzVweDtcbiR0aGVtZS1pbnZlcnNlOiAgICAgICAgICAgICB3aGl0ZTtcbiR0aGVtZS1jb2xvcjogICAgICAgICAgICAgICByZ2IoMCwyMDMsMTIyKTtcbiRwcmltYXJ5LXRleHQ6ICAgICAgICAgICAgICAjMjEyMTIxO1xuJHNlY29uZGFyeS10ZXh0OiAgICAgICAgICAgICM3NTc1NzU7XG4kZGl2aWRlcjogICAgICAgICAgICAgICAgICAgI0JEQkRCRDtcbiRiYWNrZ3JvdW5kOiAgICAgICAgICAgICAgICAjRkZGRkZGO1xuJGRpYWxlY3Q6ICAgICAgICAgICAgICAgICAgIHNpbHZlcjtcbiRob3ZlcjogcmdiYSgyMzAsIDIzMCwgMjMwLCAwLjcpO1xuJHNoYWRvdzogICAgICAgICAgICAgICAgICAgIHJnYmEoMCwwLDAsMC4zKTtcblxuLy8vIE5hdmlnYXRpb24gdmFyaWFibGVzXG4kbmF2aWdhdGlvbjogICAgICAgICAgICAgICAgIzFhMWExYztcbiRuYXYtaWNvbjogICAgICAgICAgICAgICAgICByZ2IoMTI3LDEyNywxMjcpO1xuJG5hdi1pY29uLWhvdmVyOiAgICAgICAgICAgIHJnYig0OSw1Miw1Myk7XG4kbmF2LWljb24tYWN0aXZlOiAgICAgICAgICAgcmdiKDE3MCwxNzAsMTcwKTtcblxuXG4kYXBwaW5mbzogICAgICAgICAgICAgICAgICAgI2VlZjFmODtcbiRjb250YWluZXI6ICAgICAgICAgICAgICAgICByZ2IoMjM4LDI0MSwyNDcpO1xuJHNtb290aEJvcmRlcjogICAgICAgICAgICAgIDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XG5cblxuJG1hdGVyaWFsLWNvbG9yOiAnbGlnaHQtYmx1ZSc7XG4kdGhlbWUtY29sb3ItOTAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc5MDAnKTtcbiR0aGVtZS1jb2xvci04MDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzgwMCcpO1xuJHRoZW1lLWNvbG9yLTcwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnNzAwJyk7XG4kdGhlbWUtY29sb3ItNjAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc2MDAnKTtcbiR0aGVtZS1jb2xvci01MDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzUwMCcpO1xuJHRoZW1lLWNvbG9yLTQwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnNDAwJyk7XG4kdGhlbWUtY29sb3ItMzAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICczMDAnKTtcbiR0aGVtZS1jb2xvci0yMDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzIwMCcpO1xuJHRoZW1lLWNvbG9yLTEwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnMTAwJyk7XG4kdGhlbWUtY29sb3ItNTA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzUwJyk7XG5cblxuJGVycm9yLWNvbG9yOiAnYW1iZXInO1xuJGVycm9yLWNvbG9yLTkwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnOTAwJyk7XG4kZXJyb3ItY29sb3ItODAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICc4MDAnKTtcbiRlcnJvci1jb2xvci03MDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzcwMCcpO1xuJGVycm9yLWNvbG9yLTYwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnNjAwJyk7XG4kZXJyb3ItY29sb3ItNTAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICc1MDAnKTtcbiRlcnJvci1jb2xvci00MDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzQwMCcpO1xuJGVycm9yLWNvbG9yLTMwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnMzAwJyk7XG4kZXJyb3ItY29sb3ItMjAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICcyMDAnKTtcbiRlcnJvci1jb2xvci0xMDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzEwMCcpO1xuJGVycm9yLWNvbG9yLTUwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICc1MCcpO1xuXG5cbiIsIiRzY3JlZW4teHM6ICAgICAgICAgICAgICAgICAgNDgwcHg7XG4kc2NyZWVuLXBob25lLW1pbjogICAgICAgICAgICRzY3JlZW4teHM7IC8vIDQ4MHB4XG4kc2NyZWVuLXBob25lOiAgICAgICAgICAgICAgICRzY3JlZW4tcGhvbmUtbWluOyAvLyA0ODBweFxuXG4kc2NyZWVuLXNtOiAgICAgICAgICAgICAgICAgIDc2OHB4O1xuJHNjcmVlbi10YWJsZXQtbWluOiAgICAgICAgICAkc2NyZWVuLXNtOyAvLzc2OHB4XG4kc2NyZWVuLXRhYmxldDogICAgICAgICAgICAgICRzY3JlZW4tdGFibGV0LW1pbjsgLy83NjhweFxuXG4kc2NyZWVuLW1kOiAgICAgICAgICAgICAgICAgIDk5MnB4O1xuJHNjcmVlbi1kZXNrdG9wLW1pbjogICAgICAgICAkc2NyZWVuLW1kOyAvLzk5MnB4XG4kc2NyZWVuLWRlc2t0b3A6ICAgICAgICAgICAgICRzY3JlZW4tZGVza3RvcC1taW47IC8vOTkycHhcblxuJHNjcmVlbi1sZzogICAgICAgICAgICAgICAgICAxMjAwcHg7XG4kc2NyZWVuLWxnLWRlc2t0b3AtbWluOiAgICAgICRzY3JlZW4tbGc7IC8vMTIwMHB4XG4kc2NyZWVuLWxnLWRlc2t0b3A6ICAgICAgICAgICRzY3JlZW4tbGctZGVza3RvcC1taW47IC8vMTIwMHB4XG5cbiRzY3JlZW4teGxnOiAgICAgICAgICAgICAgICAgMTYwMHB4O1xuJHNjcmVlbi14bGctZGVza3RvcC1taW46ICAgICAkc2NyZWVuLXhsZzsgLy8xNjAwcHhcbiRzY3JlZW4teGxnLWRlc2t0b3A6ICAgICAgICAgJHNjcmVlbi14bGctZGVza3RvcC1taW47IC8vMTYwMHB4XG5cbiRzY3JlZW4tcGhvbmUtbWF4OiAgICAgICAgICAgKCRzY3JlZW4tdGFibGV0LW1pbiAtIDEpOyAvLzc2N3B4XG4kc2NyZWVuLXRhYmxldC1tYXg6ICAgICAgICAgICgkc2NyZWVuLWRlc2t0b3AtbWluIC0gMSk7IC8vOTkxcHhcbiRzY3JlZW4tZGVza3RvcC1tYXg6ICAgICAgICAgKCRzY3JlZW4tbGctZGVza3RvcC1taW4gLSAxKTsgLy8xMTk5cHhcbiRzY3JlZW4tbGctZGVza3RvcC1tYXg6ICAgICAgKCRzY3JlZW4teGxnLWRlc2t0b3AtbWluIC0gMSk7IC8vMTU5OXB4XG5cbi8vQ3VzdG9tIEZvciBzcGVjaWFsIGRldmljZVxuJHNjcmVlbi0xMzY2OiAgICAgICAgICAgICAgICAxMzY2cHg7XG4kc2NyZWVuLTEzNjYtbWluOiAgICAgICAgICAgICRzY3JlZW4tMTM2NjsgLy8xMzY2cHhcblxuQG1peGluIHBob25lIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICN7JHNjcmVlbi1waG9uZS1tYXh9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHRhYmxldCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRzY3JlZW4tdGFibGV0LW1heH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRzY3JlZW4tZGVza3RvcC1tYXh9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRlc2t0b3AtbGcge1xuICBAbWVkaWEgKG1heC13aWR0aDogI3skc2NyZWVuLWxnLWRlc2t0b3B9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRlc2t0b3AteGxnIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHNjcmVlbi14bGctZGVza3RvcH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./projects/ng-authentication/src/lib/forgot-password/forgot-password.component.ts":
/*!*****************************************************************************************!*\
  !*** ./projects/ng-authentication/src/lib/forgot-password/forgot-password.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./projects/ng-authentication/src/lib/shared.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config.service */ "./projects/ng-authentication/src/lib/config.service.ts");





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
        this.url = this.config.Config.baseUrl + '/api/forget-password';
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
                            this.response = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["GetNetworkError"])();
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
                            return [2 /*return*/, Object(_shared__WEBPACK_IMPORTED_MODULE_3__["GetNetworkError"])()];
                        }
                        return [2 /*return*/, error_1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }
    ]; };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-authentication/src/lib/forgot-password/forgot-password.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.scss */ "./projects/ng-authentication/src/lib/forgot-password/forgot-password.component.scss")).default]
        })
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./projects/ng-authentication/src/lib/login-form/login-form.component.scss":
/*!*********************************************************************************!*\
  !*** ./projects/ng-authentication/src/lib/login-form/login-form.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * Retrieves a color value from the $material-colors Sass map\n * Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette/\n *\n * @function\n * @param {string} color-name             - quoted, lower-case, dasherized color\n *                                          name (e.g. 'pink', 'amber')\n * @param {string} [color-variant='500']  - quoted, lowercase color variant (e.g.\n *                                          '200', 'a100')\n */\n.material-input {\n  width: 100%;\n  position: relative;\n  border-bottom: 1px solid #adadad;\n  margin-bottom: 35px;\n}\n.material-input input {\n  font-size: 15px;\n  color: #555555;\n  line-height: 1.2;\n  display: block;\n  width: 100%;\n  height: 45px;\n  background: transparent;\n  padding: 0 5px;\n  outline: none;\n  border: none;\n  overflow: visible;\n}\n.material-input input:focus + .focus-input:after {\n  top: -10px;\n  font-size: 12px;\n  color: #aaa;\n}\n.material-input input:focus + .focus-input:before {\n  width: 100%;\n}\n.material-input input.focused + .focus-input:after {\n  top: -10px;\n  font-size: 12px;\n  color: #aaa;\n}\n.material-input input.focused + .focus-input:before {\n  width: 100%;\n}\n.material-input .focus-input {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n.material-input .focus-input:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  transition: all 0.4s;\n  background: #6a7dfe;\n  background: linear-gradient(to left, #21d4fd, #b721ff);\n}\n.material-input .focus-input:after {\n  font-size: 15px;\n  color: #999999;\n  line-height: 1.2;\n  content: attr(data-placeholder);\n  display: block;\n  width: 100%;\n  position: absolute;\n  top: 16px;\n  left: 0px;\n  padding-left: 5px;\n  transition: all 0.4s;\n}\n.material-input .btn-show-pass {\n  font-size: 15px;\n  color: #999999;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  height: 100%;\n  top: 0;\n  right: 0;\n  padding-right: 5px;\n  cursor: pointer;\n  transition: all 0.4s;\n}\n.material-input .btn-show-pass:hover {\n  color: #6a7dfe;\n  color: -webkit-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -o-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -moz-linear-gradient(to left, #21d4fd, #b721ff);\n  color: linear-gradient(to left, #21d4fd, #b721ff);\n}\n.material-input .btn-show-pass.active {\n  color: #6a7dfe;\n  color: -webkit-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -o-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -moz-linear-gradient(to left, #21d4fd, #b721ff);\n  color: linear-gradient(to left, #21d4fd, #b721ff);\n}\n.error-message {\n  font-size: 13px;\n  color: #ff8f00;\n  position: absolute;\n  margin-top: 5px;\n  margin-left: 5px;\n}\n.container-login {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  background: #f2f2f2;\n}\n.container-login .wrap-login {\n  width: 390px;\n  background: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  padding: 45px 45px 33px 45px;\n  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -o-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -ms-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 767px) {\n  .container-login .wrap-login {\n    padding: 15px;\n  }\n}\n.container-login .wrap-login .login-header {\n  font-size: 23px;\n  padding-bottom: 10px;\n}\n.container-login .wrap-login .login-header span {\n  display: inline-block;\n  margin-bottom: 10px;\n}\n.container-login .wrap-login .login-header p {\n  font-size: 15px;\n}\n.container-login .wrap-login .login-button {\n  margin: 25px 0;\n}\n.container-login .wrap-login .login-button button {\n  border-radius: 3px;\n  padding-right: 25px;\n  padding-left: 25px;\n}\n.container-login .wrap-login .message {\n  font-size: 15px;\n}\n.btn-facebook {\n  background: #4267b2;\n}\n.btn-facebook .fa-facebook {\n  float: left;\n  margin-top: 3px;\n}\n.container-login {\n  background-image: url(/assets/images/wallpaper.jpg);\n  background-position: center;\n}\n.sso-description {\n  font-size: 13px;\n  font-style: italic;\n  margin: 10px auto;\n  display: block;\n}\n.btn-show-pass {\n  position: absolute;\n  right: 10px;\n  top: 56%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL25nLWF1dGhlbnRpY2F0aW9uL25vZGVfbW9kdWxlcy9zYXNzLW1hdGVyaWFsLWNvbG9ycy9zYXNzL19zYXNzLW1hdGVyaWFsLWNvbG9ycy1mdW5jdGlvbi5zY3NzIiwiL1VzZXJzL2xlZ2lvbi9uZy1kYXNoYm9hcmQvcHJvamVjdHMvbmctYXV0aGVudGljYXRpb24vc3JjL2xpYi9jb21tb24uc2NzcyIsInByb2plY3RzL25nLWF1dGhlbnRpY2F0aW9uL3NyYy9saWIvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2xlZ2lvbi9uZy1kYXNoYm9hcmQvcHJvamVjdHMvbmctYXV0aGVudGljYXRpb24vc3JjL2xpYi9zY3NzL192YXJzLnNjc3MiLCIvVXNlcnMvbGVnaW9uL25nLWRhc2hib2FyZC9wcm9qZWN0cy9uZy1hdXRoZW50aWNhdGlvbi9zcmMvbGliL3Njc3MvX21lZGlhcy5zY3NzIiwiL1VzZXJzL2xlZ2lvbi9uZy1kYXNoYm9hcmQvcHJvamVjdHMvbmctYXV0aGVudGljYXRpb24vc3JjL2xpYi9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7Ozs7Ozs7OztFQUFBO0FDQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FDVUY7QURURTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDV047QURUVTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ1dkO0FEVFU7RUFDSSxXQUFBO0FDV2Q7QURQVTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ1NkO0FEUFU7RUFDSSxXQUFBO0FDU2Q7QURMRTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtBQ09OO0FETk07RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUtBLG9CQUFBO0VBRUEsbUJBQUE7RUFJQSxzREFBQTtBQ01WO0FESk07RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBRUEsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUtBLG9CQUFBO0FDSVY7QURBRTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBTUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFJQSxvQkFBQTtBQ0NOO0FEQU07RUFDSSxjQUFBO0VBQ0EseURBQUE7RUFDQSxvREFBQTtFQUNBLHNEQUFBO0VBQ0EsaURBQUE7QUNFVjtBREFNO0VBQ0ksY0FBQTtFQUNBLHlEQUFBO0VBQ0Esb0RBQUE7RUFDQSxzREFBQTtFQUNBLGlEQUFBO0FDRVY7QURHQTtFQUNFLGVBQUE7RUFDQSxjRXBGZ0I7RUZxRmhCLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQUY7QURJQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUtBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0RGO0FERUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2Q0FBQTtFQUNBLGtEQUFBO0VBQ0EscURBQUE7RUFDQSxnREFBQTtFQUNBLGlEQUFBO0FDQUo7QUU5SEU7RUhvSEE7SUFhSSxhQUFBO0VDQ0o7QUFDRjtBREFJO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FDRU47QURETTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUNHUjtBRERNO0VBQ0UsZUFBQTtBQ0dSO0FEQUk7RUFDRSxjQUFBO0FDRU47QURETTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0dSO0FEQUk7RUFDRSxlQUFBO0FDRU47QUd0TEE7RUFDRSxtQkFBQTtBSHlMRjtBR3hMRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FIMExKO0FHdExBO0VBQ0UsbURBQUE7RUFDQSwyQkFBQTtBSHlMRjtBR3ZMQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBSDBMRjtBR3hMQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUgyTEYiLCJmaWxlIjoicHJvamVjdHMvbmctYXV0aGVudGljYXRpb24vc3JjL2xpYi9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzYXNzLW1hdGVyaWFsLWNvbG9ycy1tYXAnO1xuLyoqXG4gKiBSZXRyaWV2ZXMgYSBjb2xvciB2YWx1ZSBmcm9tIHRoZSAkbWF0ZXJpYWwtY29sb3JzIFNhc3MgbWFwXG4gKiBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vbmlsc2thc3BlcnNzb24vR29vZ2xlLU1hdGVyaWFsLVVJLUNvbG9yLVBhbGV0dGUvXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3ItbmFtZSAgICAgICAgICAgICAtIHF1b3RlZCwgbG93ZXItY2FzZSwgZGFzaGVyaXplZCBjb2xvclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lIChlLmcuICdwaW5rJywgJ2FtYmVyJylcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29sb3ItdmFyaWFudD0nNTAwJ10gIC0gcXVvdGVkLCBsb3dlcmNhc2UgY29sb3IgdmFyaWFudCAoZS5nLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMjAwJywgJ2ExMDAnKVxuICovXG5AZnVuY3Rpb24gbWF0ZXJpYWwtY29sb3IoJGNvbG9yLW5hbWUsICRjb2xvci12YXJpYW50OiAnNTAwJykge1xuICAkY29sb3I6IG1hcC1nZXQobWFwLWdldCgkbWF0ZXJpYWwtY29sb3JzLCAkY29sb3ItbmFtZSksJGNvbG9yLXZhcmlhbnQpO1xuICBAaWYgJGNvbG9yIHtcbiAgICBAcmV0dXJuICRjb2xvcjtcbiAgfSBAZWxzZSB7XG4gICAgLy8gTGlic2FzcyBzdGlsbCBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCBAZXJyb3JcbiAgICBAd2FybiBcIj0+IEVSUk9SOiBDT0xPUiBOT1QgRk9VTkQhIDw9IHwgWW91ciAkY29sb3ItbmFtZSwgJGNvbG9yLXZhcmlhbnQgY29tYmluYXRpb24gZGlkIG5vdCBtYXRjaCBhbnkgb2YgdGhlIHZhbHVlcyBpbiB0aGUgJG1hdGVyaWFsLWNvbG9ycyBtYXAuXCI7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4vc2Nzcy9pbmplY3RzJztcbi5tYXRlcmlhbC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWRhZGFkO1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICBpbnB1dCB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBjb2xvcjogIzU1NTU1NTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICY6Zm9jdXMgKyAuZm9jdXMtaW5wdXR7XG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgY29sb3I6ICNhYWE7XG4gICAgICAgICAgfVxuICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5mb2N1c2VkICsgLmZvY3VzLWlucHV0e1xuICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICB0b3A6IC0xMHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjYWFhO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICAuZm9jdXMtaW5wdXQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IC0ycHg7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICBcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgICAgXG4gICAgICAgICAgYmFja2dyb3VuZDogIzZhN2RmZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgfVxuICAgICAgJjphZnRlciB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgXG4gICAgICAgICAgY29udGVudDogYXR0cihkYXRhLXBsYWNlaG9sZGVyKTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICBcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICB9XG4gIH1cblxuICAuYnRuLXNob3ctcGFzcyB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBjb2xvcjogIzk5OTk5OTtcbiAgICAgIFxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjNmE3ZGZlO1xuICAgICAgICAgIGNvbG9yOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgICAgICAgICBjb2xvcjogLW8tbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgICAgIGNvbG9yOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgICAgICAgICBjb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgfVxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgIGNvbG9yOiAjNmE3ZGZlO1xuICAgICAgICAgIGNvbG9yOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgICAgICAgICBjb2xvcjogLW8tbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgICAgIGNvbG9yOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgICAgICAgICBjb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgfVxuICB9XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogJGVycm9yLWNvbG9yLTgwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cblxuLmNvbnRhaW5lci1sb2dpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAud3JhcC1sb2dpbiB7XG4gICAgd2lkdGg6IDM5MHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogNDVweCA0NXB4IDMzcHggNDVweDtcbiAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLW8tYm94LXNoYWRvdzogMCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIC1tcy1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbiAgICBAaW5jbHVkZSBwaG9uZSAoKSB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgIH1cbiAgICAubG9naW4taGVhZGVyIHtcbiAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweFxuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmxvZ2luLWJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDI1cHggMDtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgfVxuICAgIH1cbiAgICAubWVzc2FnZSB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICB9XG59IiwiLyoqXG4gKiBSZXRyaWV2ZXMgYSBjb2xvciB2YWx1ZSBmcm9tIHRoZSAkbWF0ZXJpYWwtY29sb3JzIFNhc3MgbWFwXG4gKiBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vbmlsc2thc3BlcnNzb24vR29vZ2xlLU1hdGVyaWFsLVVJLUNvbG9yLVBhbGV0dGUvXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3ItbmFtZSAgICAgICAgICAgICAtIHF1b3RlZCwgbG93ZXItY2FzZSwgZGFzaGVyaXplZCBjb2xvclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lIChlLmcuICdwaW5rJywgJ2FtYmVyJylcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29sb3ItdmFyaWFudD0nNTAwJ10gIC0gcXVvdGVkLCBsb3dlcmNhc2UgY29sb3IgdmFyaWFudCAoZS5nLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMjAwJywgJ2ExMDAnKVxuICovXG4ubWF0ZXJpYWwtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FkYWRhZDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbi5tYXRlcmlhbC1pbnB1dCBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4ubWF0ZXJpYWwtaW5wdXQgaW5wdXQ6Zm9jdXMgKyAuZm9jdXMtaW5wdXQ6YWZ0ZXIge1xuICB0b3A6IC0xMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjYWFhO1xufVxuLm1hdGVyaWFsLWlucHV0IGlucHV0OmZvY3VzICsgLmZvY3VzLWlucHV0OmJlZm9yZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1hdGVyaWFsLWlucHV0IGlucHV0LmZvY3VzZWQgKyAuZm9jdXMtaW5wdXQ6YWZ0ZXIge1xuICB0b3A6IC0xMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjYWFhO1xufVxuLm1hdGVyaWFsLWlucHV0IGlucHV0LmZvY3VzZWQgKyAuZm9jdXMtaW5wdXQ6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWF0ZXJpYWwtaW5wdXQgLmZvY3VzLWlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5tYXRlcmlhbC1pbnB1dCAuZm9jdXMtaW5wdXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMnB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgYmFja2dyb3VuZDogIzZhN2RmZTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbn1cbi5tYXRlcmlhbC1pbnB1dCAuZm9jdXMtaW5wdXQ6YWZ0ZXIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb250ZW50OiBhdHRyKGRhdGEtcGxhY2Vob2xkZXIpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNnB4O1xuICBsZWZ0OiAwcHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG4ubWF0ZXJpYWwtaW5wdXQgLmJ0bi1zaG93LXBhc3Mge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuLm1hdGVyaWFsLWlucHV0IC5idG4tc2hvdy1wYXNzOmhvdmVyIHtcbiAgY29sb3I6ICM2YTdkZmU7XG4gIGNvbG9yOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgY29sb3I6IC1vLWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgY29sb3I6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICBjb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xufVxuLm1hdGVyaWFsLWlucHV0IC5idG4tc2hvdy1wYXNzLmFjdGl2ZSB7XG4gIGNvbG9yOiAjNmE3ZGZlO1xuICBjb2xvcjogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gIGNvbG9yOiAtby1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gIGNvbG9yOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgY29sb3I6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmY4ZjAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmNvbnRhaW5lci1sb2dpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xufVxuLmNvbnRhaW5lci1sb2dpbiAud3JhcC1sb2dpbiB7XG4gIHdpZHRoOiAzOTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA0NXB4IDQ1cHggMzNweCA0NXB4O1xuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW8tYm94LXNoYWRvdzogMCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbXMtYm94LXNoYWRvdzogMCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250YWluZXItbG9naW4gLndyYXAtbG9naW4ge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbn1cbi5jb250YWluZXItbG9naW4gLndyYXAtbG9naW4gLmxvZ2luLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uY29udGFpbmVyLWxvZ2luIC53cmFwLWxvZ2luIC5sb2dpbi1oZWFkZXIgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXItbG9naW4gLndyYXAtbG9naW4gLmxvZ2luLWhlYWRlciBwIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmNvbnRhaW5lci1sb2dpbiAud3JhcC1sb2dpbiAubG9naW4tYnV0dG9uIHtcbiAgbWFyZ2luOiAyNXB4IDA7XG59XG4uY29udGFpbmVyLWxvZ2luIC53cmFwLWxvZ2luIC5sb2dpbi1idXR0b24gYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG4uY29udGFpbmVyLWxvZ2luIC53cmFwLWxvZ2luIC5tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uYnRuLWZhY2Vib29rIHtcbiAgYmFja2dyb3VuZDogIzQyNjdiMjtcbn1cbi5idG4tZmFjZWJvb2sgLmZhLWZhY2Vib29rIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmNvbnRhaW5lci1sb2dpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy93YWxscGFwZXIuanBnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uc3NvLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmJ0bi1zaG93LXBhc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDU2JTtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1tYXRlcmlhbC1jb2xvcnMvc2Fzcy9zYXNzLW1hdGVyaWFsLWNvbG9ycyc7XG5cbi8vLyBEZWZhdWx0IHRoZW1lIGJhc2UgdmFyaWFibGVzXG4kbmF2aWdhdGlvbldpZHRoOiAxMDBweDtcbiRzdGF0dXNCYXJXaWR0aDogMjc1cHg7XG4kdGhlbWUtaW52ZXJzZTogICAgICAgICAgICAgd2hpdGU7XG4kdGhlbWUtY29sb3I6ICAgICAgICAgICAgICAgcmdiKDAsMjAzLDEyMik7XG4kcHJpbWFyeS10ZXh0OiAgICAgICAgICAgICAgIzIxMjEyMTtcbiRzZWNvbmRhcnktdGV4dDogICAgICAgICAgICAjNzU3NTc1O1xuJGRpdmlkZXI6ICAgICAgICAgICAgICAgICAgICNCREJEQkQ7XG4kYmFja2dyb3VuZDogICAgICAgICAgICAgICAgI0ZGRkZGRjtcbiRkaWFsZWN0OiAgICAgICAgICAgICAgICAgICBzaWx2ZXI7XG4kaG92ZXI6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMC43KTtcbiRzaGFkb3c6ICAgICAgICAgICAgICAgICAgICByZ2JhKDAsMCwwLDAuMyk7XG5cbi8vLyBOYXZpZ2F0aW9uIHZhcmlhYmxlc1xuJG5hdmlnYXRpb246ICAgICAgICAgICAgICAgICMxYTFhMWM7XG4kbmF2LWljb246ICAgICAgICAgICAgICAgICAgcmdiKDEyNywxMjcsMTI3KTtcbiRuYXYtaWNvbi1ob3ZlcjogICAgICAgICAgICByZ2IoNDksNTIsNTMpO1xuJG5hdi1pY29uLWFjdGl2ZTogICAgICAgICAgIHJnYigxNzAsMTcwLDE3MCk7XG5cblxuJGFwcGluZm86ICAgICAgICAgICAgICAgICAgICNlZWYxZjg7XG4kY29udGFpbmVyOiAgICAgICAgICAgICAgICAgcmdiKDIzOCwyNDEsMjQ3KTtcbiRzbW9vdGhCb3JkZXI6ICAgICAgICAgICAgICAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xuXG5cbiRtYXRlcmlhbC1jb2xvcjogJ2xpZ2h0LWJsdWUnO1xuJHRoZW1lLWNvbG9yLTkwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnOTAwJyk7XG4kdGhlbWUtY29sb3ItODAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc4MDAnKTtcbiR0aGVtZS1jb2xvci03MDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzcwMCcpO1xuJHRoZW1lLWNvbG9yLTYwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnNjAwJyk7XG4kdGhlbWUtY29sb3ItNTAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc1MDAnKTtcbiR0aGVtZS1jb2xvci00MDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzQwMCcpO1xuJHRoZW1lLWNvbG9yLTMwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnMzAwJyk7XG4kdGhlbWUtY29sb3ItMjAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICcyMDAnKTtcbiR0aGVtZS1jb2xvci0xMDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzEwMCcpO1xuJHRoZW1lLWNvbG9yLTUwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc1MCcpO1xuXG5cbiRlcnJvci1jb2xvcjogJ2FtYmVyJztcbiRlcnJvci1jb2xvci05MDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzkwMCcpO1xuJGVycm9yLWNvbG9yLTgwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnODAwJyk7XG4kZXJyb3ItY29sb3ItNzAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICc3MDAnKTtcbiRlcnJvci1jb2xvci02MDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzYwMCcpO1xuJGVycm9yLWNvbG9yLTUwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnNTAwJyk7XG4kZXJyb3ItY29sb3ItNDAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICc0MDAnKTtcbiRlcnJvci1jb2xvci0zMDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzMwMCcpO1xuJGVycm9yLWNvbG9yLTIwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnMjAwJyk7XG4kZXJyb3ItY29sb3ItMTAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICcxMDAnKTtcbiRlcnJvci1jb2xvci01MDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnNTAnKTtcblxuXG4iLCIkc2NyZWVuLXhzOiAgICAgICAgICAgICAgICAgIDQ4MHB4O1xuJHNjcmVlbi1waG9uZS1taW46ICAgICAgICAgICAkc2NyZWVuLXhzOyAvLyA0ODBweFxuJHNjcmVlbi1waG9uZTogICAgICAgICAgICAgICAkc2NyZWVuLXBob25lLW1pbjsgLy8gNDgwcHhcblxuJHNjcmVlbi1zbTogICAgICAgICAgICAgICAgICA3NjhweDtcbiRzY3JlZW4tdGFibGV0LW1pbjogICAgICAgICAgJHNjcmVlbi1zbTsgLy83NjhweFxuJHNjcmVlbi10YWJsZXQ6ICAgICAgICAgICAgICAkc2NyZWVuLXRhYmxldC1taW47IC8vNzY4cHhcblxuJHNjcmVlbi1tZDogICAgICAgICAgICAgICAgICA5OTJweDtcbiRzY3JlZW4tZGVza3RvcC1taW46ICAgICAgICAgJHNjcmVlbi1tZDsgLy85OTJweFxuJHNjcmVlbi1kZXNrdG9wOiAgICAgICAgICAgICAkc2NyZWVuLWRlc2t0b3AtbWluOyAvLzk5MnB4XG5cbiRzY3JlZW4tbGc6ICAgICAgICAgICAgICAgICAgMTIwMHB4O1xuJHNjcmVlbi1sZy1kZXNrdG9wLW1pbjogICAgICAkc2NyZWVuLWxnOyAvLzEyMDBweFxuJHNjcmVlbi1sZy1kZXNrdG9wOiAgICAgICAgICAkc2NyZWVuLWxnLWRlc2t0b3AtbWluOyAvLzEyMDBweFxuXG4kc2NyZWVuLXhsZzogICAgICAgICAgICAgICAgIDE2MDBweDtcbiRzY3JlZW4teGxnLWRlc2t0b3AtbWluOiAgICAgJHNjcmVlbi14bGc7IC8vMTYwMHB4XG4kc2NyZWVuLXhsZy1kZXNrdG9wOiAgICAgICAgICRzY3JlZW4teGxnLWRlc2t0b3AtbWluOyAvLzE2MDBweFxuXG4kc2NyZWVuLXBob25lLW1heDogICAgICAgICAgICgkc2NyZWVuLXRhYmxldC1taW4gLSAxKTsgLy83NjdweFxuJHNjcmVlbi10YWJsZXQtbWF4OiAgICAgICAgICAoJHNjcmVlbi1kZXNrdG9wLW1pbiAtIDEpOyAvLzk5MXB4XG4kc2NyZWVuLWRlc2t0b3AtbWF4OiAgICAgICAgICgkc2NyZWVuLWxnLWRlc2t0b3AtbWluIC0gMSk7IC8vMTE5OXB4XG4kc2NyZWVuLWxnLWRlc2t0b3AtbWF4OiAgICAgICgkc2NyZWVuLXhsZy1kZXNrdG9wLW1pbiAtIDEpOyAvLzE1OTlweFxuXG4vL0N1c3RvbSBGb3Igc3BlY2lhbCBkZXZpY2VcbiRzY3JlZW4tMTM2NjogICAgICAgICAgICAgICAgMTM2NnB4O1xuJHNjcmVlbi0xMzY2LW1pbjogICAgICAgICAgICAkc2NyZWVuLTEzNjY7IC8vMTM2NnB4XG5cbkBtaXhpbiBwaG9uZSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRzY3JlZW4tcGhvbmUtbWF4fSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQge1xuICBAbWVkaWEgKG1heC13aWR0aDogI3skc2NyZWVuLXRhYmxldC1tYXh9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRlc2t0b3Age1xuICBAbWVkaWEgKG1heC13aWR0aDogI3skc2NyZWVuLWRlc2t0b3AtbWF4fSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wLWxnIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICN7JHNjcmVlbi1sZy1kZXNrdG9wfSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wLXhsZyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4teGxnLWRlc2t0b3B9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi9jb21tb24uc2Nzcyc7XG4uYnRuLWZhY2Vib29rIHtcbiAgYmFja2dyb3VuZDogIzQyNjdiMjtcbiAgLmZhLWZhY2Vib29rIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gIH1cblxufVxuLmNvbnRhaW5lci1sb2dpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy93YWxscGFwZXIuanBnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnNzby1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYnRuLXNob3ctcGFzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNTYlO1xufVxuIl19 */");

/***/ }),

/***/ "./projects/ng-authentication/src/lib/login-form/login-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./projects/ng-authentication/src/lib/login-form/login-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "./projects/ng-authentication/src/lib/shared.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _facebook_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../facebook.service */ "./projects/ng-authentication/src/lib/facebook.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config.service */ "./projects/ng-authentication/src/lib/config.service.ts");
/* harmony import */ var _auth_public_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth-public.service */ "./projects/ng-authentication/src/lib/auth-public.service.ts");








var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(router, http, facebook, config, auth) {
        this.router = router;
        this.http = http;
        this.facebook = facebook;
        this.config = config;
        this.auth = auth;
        this.alternativeLogins = [];
        this.isRequesting = false;
        this.url = "";
        this.facebookUrl = "/api/facebook/auth";
        this.response = null;
        this.error = _shared__WEBPACK_IMPORTED_MODULE_2__["error"];
        this.form = {
            email: '',
            password: ''
        };
        this.message = '';
        this.passwordVisibility = false;
        this.isLoggedInByFacebook = false;
        this.loginDialog = 'Please enter your email and password.';
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.facebookUrl = this.config.Config.baseUrl + "/api/facebook/auth";
        this.auth.events.emit({
            type: _auth_public_service__WEBPACK_IMPORTED_MODULE_7__["AuthEvent"].REVOKE
        });
        var Config = this.config.Config;
        this.url = this.config.Config.baseUrl + '/api/user/signin';
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
                    type: _auth_public_service__WEBPACK_IMPORTED_MODULE_7__["AuthEvent"].TRY_LOGIN
                });
                e.preventDefault();
                this.isRequesting = true;
                this.signinHttp(this.form);
                return [2 /*return*/];
            });
        });
    };
    LoginFormComponent.prototype.loginFacebook = function () {
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
                    type: _auth_public_service__WEBPACK_IMPORTED_MODULE_7__["AuthEvent"].LOGIN_SUCCESS
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
                type: _auth_public_service__WEBPACK_IMPORTED_MODULE_7__["AuthEvent"].LOGIN_FAILED
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
            _this.auth.events.emit({
                payload: _this.response.data.items[0],
                type: _auth_public_service__WEBPACK_IMPORTED_MODULE_7__["AuthEvent"].LOGIN_SUCCESS
            });
            if (_this.response.data && _this.response.data.items[0]) {
                _this.onSigninSuccess(response);
            }
            _this.isRequesting = false;
        }, function (response) {
            _this.isRequesting = false;
            _this.auth.events.emit({
                type: _auth_public_service__WEBPACK_IMPORTED_MODULE_7__["AuthEvent"].LOGIN_FAILED,
                payload: response
            });
            if (response.name === 'HttpErrorResponse') {
                _this.response = Object(_shared__WEBPACK_IMPORTED_MODULE_2__["GetNetworkError"])();
                return false;
            }
            _this.response = response;
        });
    };
    LoginFormComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _facebook_service__WEBPACK_IMPORTED_MODULE_5__["FacebookService"] },
        { type: _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
        { type: _auth_public_service__WEBPACK_IMPORTED_MODULE_7__["AuthPublicService"] }
    ]; };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-authentication/src/lib/login-form/login-form.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-form.component.scss */ "./projects/ng-authentication/src/lib/login-form/login-form.component.scss")).default]
        })
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./projects/ng-authentication/src/lib/ng-authentication.component.ts":
/*!***************************************************************************!*\
  !*** ./projects/ng-authentication/src/lib/ng-authentication.component.ts ***!
  \***************************************************************************/
/*! exports provided: NgAuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAuthenticationComponent", function() { return NgAuthenticationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NgAuthenticationComponent = /** @class */ (function () {
    function NgAuthenticationComponent() {
    }
    NgAuthenticationComponent.prototype.ngOnInit = function () {
    };
    NgAuthenticationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lib-ng-authentication',
            template: "\n    <p>\n      ng-authentication works!\n    </p>\n  "
        })
    ], NgAuthenticationComponent);
    return NgAuthenticationComponent;
}());



/***/ }),

/***/ "./projects/ng-authentication/src/lib/ng-authentication.module.ts":
/*!************************************************************************!*\
  !*** ./projects/ng-authentication/src/lib/ng-authentication.module.ts ***!
  \************************************************************************/
/*! exports provided: NgAuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAuthenticationModule", function() { return NgAuthenticationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_authentication_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng-authentication.component */ "./projects/ng-authentication/src/lib/ng-authentication.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-form/login-form.component */ "./projects/ng-authentication/src/lib/login-form/login-form.component.ts");
/* harmony import */ var _progress_line_progress_line_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progress-line/progress-line.component */ "./projects/ng-authentication/src/lib/progress-line/progress-line.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _error_message_error_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error-message/error-message.component */ "./projects/ng-authentication/src/lib/error-message/error-message.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _facebook_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./facebook.service */ "./projects/ng-authentication/src/lib/facebook.service.ts");
/* harmony import */ var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup-form/signup-form.component */ "./projects/ng-authentication/src/lib/signup-form/signup-form.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./projects/ng-authentication/src/lib/forgot-password/forgot-password.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./config.service */ "./projects/ng-authentication/src/lib/config.service.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./projects/ng-authentication/src/lib/reset-password/reset-password.component.ts");
/* harmony import */ var _auth_public_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth-public.service */ "./projects/ng-authentication/src/lib/auth-public.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");

















var NgAuthenticationModule = /** @class */ (function () {
    function NgAuthenticationModule(auth, authConfig) {
        this.auth = auth;
        this.authConfig = authConfig;
        this.auth.translations.subscribe(function (e) { });
    }
    NgAuthenticationModule_1 = NgAuthenticationModule;
    NgAuthenticationModule.forRoot = function (config) {
        return {
            ngModule: NgAuthenticationModule_1,
            providers: [_config_service__WEBPACK_IMPORTED_MODULE_13__["ConfigService"], { provide: 'authConfig', useValue: config }]
        };
    };
    var NgAuthenticationModule_1;
    NgAuthenticationModule.ctorParameters = function () { return [
        { type: _auth_public_service__WEBPACK_IMPORTED_MODULE_15__["AuthPublicService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['authConfig',] }] }
    ]; };
    NgAuthenticationModule = NgAuthenticationModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild([])
            ],
            declarations: [
                _ng_authentication_component__WEBPACK_IMPORTED_MODULE_2__["NgAuthenticationComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"],
                _progress_line_progress_line_component__WEBPACK_IMPORTED_MODULE_4__["ProgressLineComponent"],
                _error_message_error_message_component__WEBPACK_IMPORTED_MODULE_6__["ErrorMessageComponent"],
                _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_9__["SignupFormComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_14__["ResetPasswordComponent"]
            ],
            exports: [
                _ng_authentication_component__WEBPACK_IMPORTED_MODULE_2__["NgAuthenticationComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"],
                _progress_line_progress_line_component__WEBPACK_IMPORTED_MODULE_4__["ProgressLineComponent"],
                _error_message_error_message_component__WEBPACK_IMPORTED_MODULE_6__["ErrorMessageComponent"],
                _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_9__["SignupFormComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_14__["ResetPasswordComponent"]
            ],
            providers: [_facebook_service__WEBPACK_IMPORTED_MODULE_8__["FacebookService"], _config_service__WEBPACK_IMPORTED_MODULE_13__["ConfigService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('authConfig'))
    ], NgAuthenticationModule);
    return NgAuthenticationModule;
}());



/***/ }),

/***/ "./projects/ng-authentication/src/lib/ng-authentication.service.ts":
/*!*************************************************************************!*\
  !*** ./projects/ng-authentication/src/lib/ng-authentication.service.ts ***!
  \*************************************************************************/
/*! exports provided: NgAuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAuthenticationService", function() { return NgAuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NgAuthenticationService = /** @class */ (function () {
    function NgAuthenticationService() {
    }
    NgAuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], NgAuthenticationService);
    return NgAuthenticationService;
}());



/***/ }),

/***/ "./projects/ng-authentication/src/lib/progress-line/progress-line.component.scss":
/*!***************************************************************************************!*\
  !*** ./projects/ng-authentication/src/lib/progress-line/progress-line.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".progress-line, .progress-line:before {\n  height: 3px;\n  width: 100%;\n  margin: 0;\n}\n\n.progress-line {\n  background-color: #b3d4fc;\n  display: flex;\n  position: fixed;\n  top: 0;\n}\n\n.progress-line:before {\n  background-color: #3f51b5;\n  content: \"\";\n  -webkit-animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n}\n\n@-webkit-keyframes running-progress {\n  0% {\n    margin-left: 0px;\n    margin-right: 100%;\n  }\n  50% {\n    margin-left: 25%;\n    margin-right: 0%;\n  }\n  100% {\n    margin-left: 100%;\n    margin-right: 0;\n  }\n}\n\n@keyframes running-progress {\n  0% {\n    margin-left: 0px;\n    margin-right: 100%;\n  }\n  50% {\n    margin-left: 25%;\n    margin-right: 0%;\n  }\n  100% {\n    margin-left: 100%;\n    margin-right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL25nLWF1dGhlbnRpY2F0aW9uL3NyYy9saWIvcHJvZ3Jlc3MtbGluZS9wcm9ncmVzcy1saW5lLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbmctYXV0aGVudGljYXRpb24vc3JjL2xpYi9wcm9ncmVzcy1saW5lL3Byb2dyZXNzLWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUVBLFNBQUE7QUNERjs7QURHQTtFQUNFLHlCQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw0RUFBQTtFQUNBLG9FQUFBO0FDQUY7O0FERUE7RUFDRTtJQUFLLGdCQUFBO0lBQWtCLGtCQUFBO0VDR3ZCO0VERkE7SUFBTSxnQkFBQTtJQUFrQixnQkFBQTtFQ014QjtFRExBO0lBQU8saUJBQUE7SUFBbUIsZUFBQTtFQ1MxQjtBQUNGOztBRFJBO0VBQ0U7SUFBSyxnQkFBQTtJQUFrQixrQkFBQTtFQ1l2QjtFRFhBO0lBQU0sZ0JBQUE7SUFBa0IsZ0JBQUE7RUNleEI7RURkQTtJQUFPLGlCQUFBO0lBQW1CLGVBQUE7RUNrQjFCO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvbmctYXV0aGVudGljYXRpb24vc3JjL2xpYi9wcm9ncmVzcy1saW5lL3Byb2dyZXNzLWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5wcm9ncmVzcy1saW5lLCAucHJvZ3Jlc3MtbGluZTpiZWZvcmUge1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIFxuICBtYXJnaW46IDA7XG59XG4ucHJvZ3Jlc3MtbGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2Q0ZmM7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6MDtcbn1cblxuLnByb2dyZXNzLWxpbmU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgY29udGVudDogJyc7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBydW5uaW5nLXByb2dyZXNzIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogcnVubmluZy1wcm9ncmVzcyAycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHJ1bm5pbmctcHJvZ3Jlc3Mge1xuICAwJSB7IG1hcmdpbi1sZWZ0OiAwcHg7IG1hcmdpbi1yaWdodDogMTAwJTsgfVxuICA1MCUgeyBtYXJnaW4tbGVmdDogMjUlOyBtYXJnaW4tcmlnaHQ6IDAlOyB9XG4gIDEwMCUgeyBtYXJnaW4tbGVmdDogMTAwJTsgbWFyZ2luLXJpZ2h0OiAwOyB9XG59XG5Aa2V5ZnJhbWVzIHJ1bm5pbmctcHJvZ3Jlc3Mge1xuICAwJSB7IG1hcmdpbi1sZWZ0OiAwcHg7IG1hcmdpbi1yaWdodDogMTAwJTsgfVxuICA1MCUgeyBtYXJnaW4tbGVmdDogMjUlOyBtYXJnaW4tcmlnaHQ6IDAlOyB9XG4gIDEwMCUgeyBtYXJnaW4tbGVmdDogMTAwJTsgbWFyZ2luLXJpZ2h0OiAwOyB9XG59IiwiLnByb2dyZXNzLWxpbmUsIC5wcm9ncmVzcy1saW5lOmJlZm9yZSB7XG4gIGhlaWdodDogM3B4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucHJvZ3Jlc3MtbGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2Q0ZmM7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG59XG5cbi5wcm9ncmVzcy1saW5lOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBydW5uaW5nLXByb2dyZXNzIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogcnVubmluZy1wcm9ncmVzcyAycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcnVubmluZy1wcm9ncmVzcyB7XG4gIDAlIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTAwJTtcbiAgfVxuICA1MCUge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcnVubmluZy1wcm9ncmVzcyB7XG4gIDAlIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTAwJTtcbiAgfVxuICA1MCUge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./projects/ng-authentication/src/lib/progress-line/progress-line.component.ts":
/*!*************************************************************************************!*\
  !*** ./projects/ng-authentication/src/lib/progress-line/progress-line.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProgressLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressLineComponent", function() { return ProgressLineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgressLineComponent = /** @class */ (function () {
    function ProgressLineComponent() {
    }
    ProgressLineComponent.prototype.ngOnInit = function () {
    };
    ProgressLineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lib-progress-line',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./progress-line.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-authentication/src/lib/progress-line/progress-line.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./progress-line.component.scss */ "./projects/ng-authentication/src/lib/progress-line/progress-line.component.scss")).default]
        })
    ], ProgressLineComponent);
    return ProgressLineComponent;
}());



/***/ }),

/***/ "./projects/ng-authentication/src/lib/reset-password/reset-password.component.scss":
/*!*****************************************************************************************!*\
  !*** ./projects/ng-authentication/src/lib/reset-password/reset-password.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * Retrieves a color value from the $material-colors Sass map\n * Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette/\n *\n * @function\n * @param {string} color-name             - quoted, lower-case, dasherized color\n *                                          name (e.g. 'pink', 'amber')\n * @param {string} [color-variant='500']  - quoted, lowercase color variant (e.g.\n *                                          '200', 'a100')\n */\n.material-input {\n  width: 100%;\n  position: relative;\n  border-bottom: 1px solid #adadad;\n  margin-bottom: 35px;\n}\n.material-input input {\n  font-size: 15px;\n  color: #555555;\n  line-height: 1.2;\n  display: block;\n  width: 100%;\n  height: 45px;\n  background: transparent;\n  padding: 0 5px;\n  outline: none;\n  border: none;\n  overflow: visible;\n}\n.material-input input:focus + .focus-input:after {\n  top: -10px;\n  font-size: 12px;\n  color: #aaa;\n}\n.material-input input:focus + .focus-input:before {\n  width: 100%;\n}\n.material-input input.focused + .focus-input:after {\n  top: -10px;\n  font-size: 12px;\n  color: #aaa;\n}\n.material-input input.focused + .focus-input:before {\n  width: 100%;\n}\n.material-input .focus-input {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n.material-input .focus-input:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  transition: all 0.4s;\n  background: #6a7dfe;\n  background: linear-gradient(to left, #21d4fd, #b721ff);\n}\n.material-input .focus-input:after {\n  font-size: 15px;\n  color: #999999;\n  line-height: 1.2;\n  content: attr(data-placeholder);\n  display: block;\n  width: 100%;\n  position: absolute;\n  top: 16px;\n  left: 0px;\n  padding-left: 5px;\n  transition: all 0.4s;\n}\n.material-input .btn-show-pass {\n  font-size: 15px;\n  color: #999999;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  height: 100%;\n  top: 0;\n  right: 0;\n  padding-right: 5px;\n  cursor: pointer;\n  transition: all 0.4s;\n}\n.material-input .btn-show-pass:hover {\n  color: #6a7dfe;\n  color: -webkit-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -o-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -moz-linear-gradient(to left, #21d4fd, #b721ff);\n  color: linear-gradient(to left, #21d4fd, #b721ff);\n}\n.material-input .btn-show-pass.active {\n  color: #6a7dfe;\n  color: -webkit-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -o-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -moz-linear-gradient(to left, #21d4fd, #b721ff);\n  color: linear-gradient(to left, #21d4fd, #b721ff);\n}\n.error-message {\n  font-size: 13px;\n  color: #ff8f00;\n  position: absolute;\n  margin-top: 5px;\n  margin-left: 5px;\n}\n.container-login {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  background: #f2f2f2;\n}\n.container-login .wrap-login {\n  width: 390px;\n  background: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  padding: 45px 45px 33px 45px;\n  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -o-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -ms-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 767px) {\n  .container-login .wrap-login {\n    padding: 15px;\n  }\n}\n.container-login .wrap-login .login-header {\n  font-size: 23px;\n  padding-bottom: 10px;\n}\n.container-login .wrap-login .login-header span {\n  display: inline-block;\n  margin-bottom: 10px;\n}\n.container-login .wrap-login .login-header p {\n  font-size: 15px;\n}\n.container-login .wrap-login .login-button {\n  margin: 25px 0;\n}\n.container-login .wrap-login .login-button button {\n  border-radius: 3px;\n  padding-right: 25px;\n  padding-left: 25px;\n}\n.container-login .wrap-login .message {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL25nLWF1dGhlbnRpY2F0aW9uL25vZGVfbW9kdWxlcy9zYXNzLW1hdGVyaWFsLWNvbG9ycy9zYXNzL19zYXNzLW1hdGVyaWFsLWNvbG9ycy1mdW5jdGlvbi5zY3NzIiwiL1VzZXJzL2xlZ2lvbi9uZy1kYXNoYm9hcmQvcHJvamVjdHMvbmctYXV0aGVudGljYXRpb24vc3JjL2xpYi9jb21tb24uc2NzcyIsInByb2plY3RzL25nLWF1dGhlbnRpY2F0aW9uL3NyYy9saWIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbGVnaW9uL25nLWRhc2hib2FyZC9wcm9qZWN0cy9uZy1hdXRoZW50aWNhdGlvbi9zcmMvbGliL3Njc3MvX3ZhcnMuc2NzcyIsIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL25nLWF1dGhlbnRpY2F0aW9uL3NyYy9saWIvc2Nzcy9fbWVkaWFzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7Ozs7Ozs7OztFQUFBO0FDQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FDVUY7QURURTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDV047QURUVTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ1dkO0FEVFU7RUFDSSxXQUFBO0FDV2Q7QURQVTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ1NkO0FEUFU7RUFDSSxXQUFBO0FDU2Q7QURMRTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtBQ09OO0FETk07RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUtBLG9CQUFBO0VBRUEsbUJBQUE7RUFJQSxzREFBQTtBQ01WO0FESk07RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBRUEsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUtBLG9CQUFBO0FDSVY7QURBRTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBTUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFJQSxvQkFBQTtBQ0NOO0FEQU07RUFDSSxjQUFBO0VBQ0EseURBQUE7RUFDQSxvREFBQTtFQUNBLHNEQUFBO0VBQ0EsaURBQUE7QUNFVjtBREFNO0VBQ0ksY0FBQTtFQUNBLHlEQUFBO0VBQ0Esb0RBQUE7RUFDQSxzREFBQTtFQUNBLGlEQUFBO0FDRVY7QURHQTtFQUNFLGVBQUE7RUFDQSxjRXBGZ0I7RUZxRmhCLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQUY7QURJQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUtBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0RGO0FERUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2Q0FBQTtFQUNBLGtEQUFBO0VBQ0EscURBQUE7RUFDQSxnREFBQTtFQUNBLGlEQUFBO0FDQUo7QUU5SEU7RUhvSEE7SUFhSSxhQUFBO0VDQ0o7QUFDRjtBREFJO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FDRU47QURETTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUNHUjtBRERNO0VBQ0UsZUFBQTtBQ0dSO0FEQUk7RUFDRSxjQUFBO0FDRU47QURETTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0dSO0FEQUk7RUFDRSxlQUFBO0FDRU4iLCJmaWxlIjoicHJvamVjdHMvbmctYXV0aGVudGljYXRpb24vc3JjL2xpYi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3Nhc3MtbWF0ZXJpYWwtY29sb3JzLW1hcCc7XG4vKipcbiAqIFJldHJpZXZlcyBhIGNvbG9yIHZhbHVlIGZyb20gdGhlICRtYXRlcmlhbC1jb2xvcnMgU2FzcyBtYXBcbiAqIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9uaWxza2FzcGVyc3Nvbi9Hb29nbGUtTWF0ZXJpYWwtVUktQ29sb3ItUGFsZXR0ZS9cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvci1uYW1lICAgICAgICAgICAgIC0gcXVvdGVkLCBsb3dlci1jYXNlLCBkYXNoZXJpemVkIGNvbG9yXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgKGUuZy4gJ3BpbmsnLCAnYW1iZXInKVxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2xvci12YXJpYW50PSc1MDAnXSAgLSBxdW90ZWQsIGxvd2VyY2FzZSBjb2xvciB2YXJpYW50IChlLmcuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcyMDAnLCAnYTEwMCcpXG4gKi9cbkBmdW5jdGlvbiBtYXRlcmlhbC1jb2xvcigkY29sb3ItbmFtZSwgJGNvbG9yLXZhcmlhbnQ6ICc1MDAnKSB7XG4gICRjb2xvcjogbWFwLWdldChtYXAtZ2V0KCRtYXRlcmlhbC1jb2xvcnMsICRjb2xvci1uYW1lKSwkY29sb3ItdmFyaWFudCk7XG4gIEBpZiAkY29sb3Ige1xuICAgIEByZXR1cm4gJGNvbG9yO1xuICB9IEBlbHNlIHtcbiAgICAvLyBMaWJzYXNzIHN0aWxsIGRvZXNuJ3Qgc2VlbSB0byBzdXBwb3J0IEBlcnJvclxuICAgIEB3YXJuIFwiPT4gRVJST1I6IENPTE9SIE5PVCBGT1VORCEgPD0gfCBZb3VyICRjb2xvci1uYW1lLCAkY29sb3ItdmFyaWFudCBjb21iaW5hdGlvbiBkaWQgbm90IG1hdGNoIGFueSBvZiB0aGUgdmFsdWVzIGluIHRoZSAkbWF0ZXJpYWwtY29sb3JzIG1hcC5cIjtcbiAgfVxufVxuIiwiQGltcG9ydCAnLi9zY3NzL2luamVjdHMnO1xuLm1hdGVyaWFsLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhZGFkYWQ7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIGlucHV0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGNvbG9yOiAjNTU1NTU1O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgJjpmb2N1cyArIC5mb2N1cy1pbnB1dHtcbiAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICBjb2xvcjogI2FhYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLmZvY3VzZWQgKyAuZm9jdXMtaW5wdXR7XG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgY29sb3I6ICNhYWE7XG4gICAgICAgICAgfVxuICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIC5mb2N1cy1pbnB1dCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogLTJweDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgIFxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgICAgICBcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNmE3ZGZlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gICAgICB9XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgY29sb3I6ICM5OTk5OTk7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgICBcbiAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtcGxhY2Vob2xkZXIpO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgIFxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIH1cbiAgfVxuXG4gIC5idG4tc2hvdy1wYXNzIHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgICAgXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICM2YTdkZmU7XG4gICAgICAgICAgY29sb3I6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgICAgIGNvbG9yOiAtby1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gICAgICAgICAgY29sb3I6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgICAgIGNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gICAgICB9XG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6ICM2YTdkZmU7XG4gICAgICAgICAgY29sb3I6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgICAgIGNvbG9yOiAtby1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gICAgICAgICAgY29sb3I6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgICAgIGNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gICAgICB9XG4gIH1cbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAkZXJyb3ItY29sb3ItODAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuXG4uY29udGFpbmVyLWxvZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIC53cmFwLWxvZ2luIHtcbiAgICB3aWR0aDogMzkwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiA0NXB4IDQ1cHggMzNweCA0NXB4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAtby1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLW1zLWJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuICAgIEBpbmNsdWRlIHBob25lICgpIHtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgfVxuICAgIC5sb2dpbi1oZWFkZXIge1xuICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgICAubG9naW4tYnV0dG9uIHtcbiAgICAgIG1hcmdpbjogMjVweCAwO1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5tZXNzYWdlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gIH1cbn0iLCIvKipcbiAqIFJldHJpZXZlcyBhIGNvbG9yIHZhbHVlIGZyb20gdGhlICRtYXRlcmlhbC1jb2xvcnMgU2FzcyBtYXBcbiAqIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9uaWxza2FzcGVyc3Nvbi9Hb29nbGUtTWF0ZXJpYWwtVUktQ29sb3ItUGFsZXR0ZS9cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvci1uYW1lICAgICAgICAgICAgIC0gcXVvdGVkLCBsb3dlci1jYXNlLCBkYXNoZXJpemVkIGNvbG9yXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgKGUuZy4gJ3BpbmsnLCAnYW1iZXInKVxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2xvci12YXJpYW50PSc1MDAnXSAgLSBxdW90ZWQsIGxvd2VyY2FzZSBjb2xvciB2YXJpYW50IChlLmcuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcyMDAnLCAnYTEwMCcpXG4gKi9cbi5tYXRlcmlhbC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWRhZGFkO1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuLm1hdGVyaWFsLWlucHV0IGlucHV0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzU1NTU1NTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwIDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbi5tYXRlcmlhbC1pbnB1dCBpbnB1dDpmb2N1cyArIC5mb2N1cy1pbnB1dDphZnRlciB7XG4gIHRvcDogLTEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNhYWE7XG59XG4ubWF0ZXJpYWwtaW5wdXQgaW5wdXQ6Zm9jdXMgKyAuZm9jdXMtaW5wdXQ6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWF0ZXJpYWwtaW5wdXQgaW5wdXQuZm9jdXNlZCArIC5mb2N1cy1pbnB1dDphZnRlciB7XG4gIHRvcDogLTEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNhYWE7XG59XG4ubWF0ZXJpYWwtaW5wdXQgaW5wdXQuZm9jdXNlZCArIC5mb2N1cy1pbnB1dDpiZWZvcmUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXRlcmlhbC1pbnB1dCAuZm9jdXMtaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLm1hdGVyaWFsLWlucHV0IC5mb2N1cy1pbnB1dDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0ycHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICBiYWNrZ3JvdW5kOiAjNmE3ZGZlO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xufVxuLm1hdGVyaWFsLWlucHV0IC5mb2N1cy1pbnB1dDphZnRlciB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1wbGFjZWhvbGRlcik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIGxlZnQ6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cbi5tYXRlcmlhbC1pbnB1dCAuYnRuLXNob3ctcGFzcyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG4ubWF0ZXJpYWwtaW5wdXQgLmJ0bi1zaG93LXBhc3M6aG92ZXIge1xuICBjb2xvcjogIzZhN2RmZTtcbiAgY29sb3I6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICBjb2xvcjogLW8tbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICBjb2xvcjogLW1vei1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gIGNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG59XG4ubWF0ZXJpYWwtaW5wdXQgLmJ0bi1zaG93LXBhc3MuYWN0aXZlIHtcbiAgY29sb3I6ICM2YTdkZmU7XG4gIGNvbG9yOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgY29sb3I6IC1vLWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgY29sb3I6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICBjb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNmZjhmMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uY29udGFpbmVyLWxvZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG59XG4uY29udGFpbmVyLWxvZ2luIC53cmFwLWxvZ2luIHtcbiAgd2lkdGg6IDM5MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDQ1cHggNDVweCAzM3B4IDQ1cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtby1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tcy1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRhaW5lci1sb2dpbiAud3JhcC1sb2dpbiB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxufVxuLmNvbnRhaW5lci1sb2dpbiAud3JhcC1sb2dpbiAubG9naW4taGVhZGVyIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXItbG9naW4gLndyYXAtbG9naW4gLmxvZ2luLWhlYWRlciBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNvbnRhaW5lci1sb2dpbiAud3JhcC1sb2dpbiAubG9naW4taGVhZGVyIHAge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uY29udGFpbmVyLWxvZ2luIC53cmFwLWxvZ2luIC5sb2dpbi1idXR0b24ge1xuICBtYXJnaW46IDI1cHggMDtcbn1cbi5jb250YWluZXItbG9naW4gLndyYXAtbG9naW4gLmxvZ2luLWJ1dHRvbiBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbn1cbi5jb250YWluZXItbG9naW4gLndyYXAtbG9naW4gLm1lc3NhZ2Uge1xuICBmb250LXNpemU6IDE1cHg7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbWF0ZXJpYWwtY29sb3JzL3Nhc3Mvc2Fzcy1tYXRlcmlhbC1jb2xvcnMnO1xuXG4vLy8gRGVmYXVsdCB0aGVtZSBiYXNlIHZhcmlhYmxlc1xuJG5hdmlnYXRpb25XaWR0aDogMTAwcHg7XG4kc3RhdHVzQmFyV2lkdGg6IDI3NXB4O1xuJHRoZW1lLWludmVyc2U6ICAgICAgICAgICAgIHdoaXRlO1xuJHRoZW1lLWNvbG9yOiAgICAgICAgICAgICAgIHJnYigwLDIwMywxMjIpO1xuJHByaW1hcnktdGV4dDogICAgICAgICAgICAgICMyMTIxMjE7XG4kc2Vjb25kYXJ5LXRleHQ6ICAgICAgICAgICAgIzc1NzU3NTtcbiRkaXZpZGVyOiAgICAgICAgICAgICAgICAgICAjQkRCREJEO1xuJGJhY2tncm91bmQ6ICAgICAgICAgICAgICAgICNGRkZGRkY7XG4kZGlhbGVjdDogICAgICAgICAgICAgICAgICAgc2lsdmVyO1xuJGhvdmVyOiByZ2JhKDIzMCwgMjMwLCAyMzAsIDAuNyk7XG4kc2hhZG93OiAgICAgICAgICAgICAgICAgICAgcmdiYSgwLDAsMCwwLjMpO1xuXG4vLy8gTmF2aWdhdGlvbiB2YXJpYWJsZXNcbiRuYXZpZ2F0aW9uOiAgICAgICAgICAgICAgICAjMWExYTFjO1xuJG5hdi1pY29uOiAgICAgICAgICAgICAgICAgIHJnYigxMjcsMTI3LDEyNyk7XG4kbmF2LWljb24taG92ZXI6ICAgICAgICAgICAgcmdiKDQ5LDUyLDUzKTtcbiRuYXYtaWNvbi1hY3RpdmU6ICAgICAgICAgICByZ2IoMTcwLDE3MCwxNzApO1xuXG5cbiRhcHBpbmZvOiAgICAgICAgICAgICAgICAgICAjZWVmMWY4O1xuJGNvbnRhaW5lcjogICAgICAgICAgICAgICAgIHJnYigyMzgsMjQxLDI0Nyk7XG4kc21vb3RoQm9yZGVyOiAgICAgICAgICAgICAgMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcblxuXG4kbWF0ZXJpYWwtY29sb3I6ICdsaWdodC1ibHVlJztcbiR0aGVtZS1jb2xvci05MDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzkwMCcpO1xuJHRoZW1lLWNvbG9yLTgwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnODAwJyk7XG4kdGhlbWUtY29sb3ItNzAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc3MDAnKTtcbiR0aGVtZS1jb2xvci02MDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzYwMCcpO1xuJHRoZW1lLWNvbG9yLTUwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnNTAwJyk7XG4kdGhlbWUtY29sb3ItNDAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc0MDAnKTtcbiR0aGVtZS1jb2xvci0zMDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzMwMCcpO1xuJHRoZW1lLWNvbG9yLTIwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnMjAwJyk7XG4kdGhlbWUtY29sb3ItMTAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICcxMDAnKTtcbiR0aGVtZS1jb2xvci01MDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnNTAnKTtcblxuXG4kZXJyb3ItY29sb3I6ICdhbWJlcic7XG4kZXJyb3ItY29sb3ItOTAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICc5MDAnKTtcbiRlcnJvci1jb2xvci04MDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzgwMCcpO1xuJGVycm9yLWNvbG9yLTcwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnNzAwJyk7XG4kZXJyb3ItY29sb3ItNjAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICc2MDAnKTtcbiRlcnJvci1jb2xvci01MDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzUwMCcpO1xuJGVycm9yLWNvbG9yLTQwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnNDAwJyk7XG4kZXJyb3ItY29sb3ItMzAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICczMDAnKTtcbiRlcnJvci1jb2xvci0yMDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzIwMCcpO1xuJGVycm9yLWNvbG9yLTEwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnMTAwJyk7XG4kZXJyb3ItY29sb3ItNTA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzUwJyk7XG5cblxuIiwiJHNjcmVlbi14czogICAgICAgICAgICAgICAgICA0ODBweDtcbiRzY3JlZW4tcGhvbmUtbWluOiAgICAgICAgICAgJHNjcmVlbi14czsgLy8gNDgwcHhcbiRzY3JlZW4tcGhvbmU6ICAgICAgICAgICAgICAgJHNjcmVlbi1waG9uZS1taW47IC8vIDQ4MHB4XG5cbiRzY3JlZW4tc206ICAgICAgICAgICAgICAgICAgNzY4cHg7XG4kc2NyZWVuLXRhYmxldC1taW46ICAgICAgICAgICRzY3JlZW4tc207IC8vNzY4cHhcbiRzY3JlZW4tdGFibGV0OiAgICAgICAgICAgICAgJHNjcmVlbi10YWJsZXQtbWluOyAvLzc2OHB4XG5cbiRzY3JlZW4tbWQ6ICAgICAgICAgICAgICAgICAgOTkycHg7XG4kc2NyZWVuLWRlc2t0b3AtbWluOiAgICAgICAgICRzY3JlZW4tbWQ7IC8vOTkycHhcbiRzY3JlZW4tZGVza3RvcDogICAgICAgICAgICAgJHNjcmVlbi1kZXNrdG9wLW1pbjsgLy85OTJweFxuXG4kc2NyZWVuLWxnOiAgICAgICAgICAgICAgICAgIDEyMDBweDtcbiRzY3JlZW4tbGctZGVza3RvcC1taW46ICAgICAgJHNjcmVlbi1sZzsgLy8xMjAwcHhcbiRzY3JlZW4tbGctZGVza3RvcDogICAgICAgICAgJHNjcmVlbi1sZy1kZXNrdG9wLW1pbjsgLy8xMjAwcHhcblxuJHNjcmVlbi14bGc6ICAgICAgICAgICAgICAgICAxNjAwcHg7XG4kc2NyZWVuLXhsZy1kZXNrdG9wLW1pbjogICAgICRzY3JlZW4teGxnOyAvLzE2MDBweFxuJHNjcmVlbi14bGctZGVza3RvcDogICAgICAgICAkc2NyZWVuLXhsZy1kZXNrdG9wLW1pbjsgLy8xNjAwcHhcblxuJHNjcmVlbi1waG9uZS1tYXg6ICAgICAgICAgICAoJHNjcmVlbi10YWJsZXQtbWluIC0gMSk7IC8vNzY3cHhcbiRzY3JlZW4tdGFibGV0LW1heDogICAgICAgICAgKCRzY3JlZW4tZGVza3RvcC1taW4gLSAxKTsgLy85OTFweFxuJHNjcmVlbi1kZXNrdG9wLW1heDogICAgICAgICAoJHNjcmVlbi1sZy1kZXNrdG9wLW1pbiAtIDEpOyAvLzExOTlweFxuJHNjcmVlbi1sZy1kZXNrdG9wLW1heDogICAgICAoJHNjcmVlbi14bGctZGVza3RvcC1taW4gLSAxKTsgLy8xNTk5cHhcblxuLy9DdXN0b20gRm9yIHNwZWNpYWwgZGV2aWNlXG4kc2NyZWVuLTEzNjY6ICAgICAgICAgICAgICAgIDEzNjZweDtcbiRzY3JlZW4tMTM2Ni1taW46ICAgICAgICAgICAgJHNjcmVlbi0xMzY2OyAvLzEzNjZweFxuXG5AbWl4aW4gcGhvbmUge1xuICBAbWVkaWEgKG1heC13aWR0aDogI3skc2NyZWVuLXBob25lLW1heH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdGFibGV0IHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICN7JHNjcmVlbi10YWJsZXQtbWF4fSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICN7JHNjcmVlbi1kZXNrdG9wLW1heH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGVza3RvcC1sZyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRzY3JlZW4tbGctZGVza3RvcH0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGVza3RvcC14bGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3skc2NyZWVuLXhsZy1kZXNrdG9wfSkge1xuICAgIEBjb250ZW50O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./projects/ng-authentication/src/lib/reset-password/reset-password.component.ts":
/*!***************************************************************************************!*\
  !*** ./projects/ng-authentication/src/lib/reset-password/reset-password.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "./projects/ng-authentication/src/lib/shared.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.service */ "./projects/ng-authentication/src/lib/config.service.ts");







var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(http, router, route, config) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.config = config;
        this.key = '';
        this.url = null;
        this.error = _shared__WEBPACK_IMPORTED_MODULE_2__["error"];
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
        this.url = this.config.Config.baseUrl + '/api/user/reset-password';
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
                _this.response = Object(_shared__WEBPACK_IMPORTED_MODULE_2__["GetNetworkError"])();
                return false;
            }
            _this.response = response;
        });
    };
    ResetPasswordComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] }
    ]; };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-authentication/src/lib/reset-password/reset-password.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-password.component.scss */ "./projects/ng-authentication/src/lib/reset-password/reset-password.component.scss")).default]
        })
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./projects/ng-authentication/src/lib/shared.ts":
/*!******************************************************!*\
  !*** ./projects/ng-authentication/src/lib/shared.ts ***!
  \******************************************************/
/*! exports provided: GetNetworkError, error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNetworkError", function() { return GetNetworkError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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

/***/ "./projects/ng-authentication/src/lib/signup-form/signup-form.component.scss":
/*!***********************************************************************************!*\
  !*** ./projects/ng-authentication/src/lib/signup-form/signup-form.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * Retrieves a color value from the $material-colors Sass map\n * Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette/\n *\n * @function\n * @param {string} color-name             - quoted, lower-case, dasherized color\n *                                          name (e.g. 'pink', 'amber')\n * @param {string} [color-variant='500']  - quoted, lowercase color variant (e.g.\n *                                          '200', 'a100')\n */\n.material-input {\n  width: 100%;\n  position: relative;\n  border-bottom: 1px solid #adadad;\n  margin-bottom: 35px;\n}\n.material-input input {\n  font-size: 15px;\n  color: #555555;\n  line-height: 1.2;\n  display: block;\n  width: 100%;\n  height: 45px;\n  background: transparent;\n  padding: 0 5px;\n  outline: none;\n  border: none;\n  overflow: visible;\n}\n.material-input input:focus + .focus-input:after {\n  top: -10px;\n  font-size: 12px;\n  color: #aaa;\n}\n.material-input input:focus + .focus-input:before {\n  width: 100%;\n}\n.material-input input.focused + .focus-input:after {\n  top: -10px;\n  font-size: 12px;\n  color: #aaa;\n}\n.material-input input.focused + .focus-input:before {\n  width: 100%;\n}\n.material-input .focus-input {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n}\n.material-input .focus-input:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  transition: all 0.4s;\n  background: #6a7dfe;\n  background: linear-gradient(to left, #21d4fd, #b721ff);\n}\n.material-input .focus-input:after {\n  font-size: 15px;\n  color: #999999;\n  line-height: 1.2;\n  content: attr(data-placeholder);\n  display: block;\n  width: 100%;\n  position: absolute;\n  top: 16px;\n  left: 0px;\n  padding-left: 5px;\n  transition: all 0.4s;\n}\n.material-input .btn-show-pass {\n  font-size: 15px;\n  color: #999999;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  height: 100%;\n  top: 0;\n  right: 0;\n  padding-right: 5px;\n  cursor: pointer;\n  transition: all 0.4s;\n}\n.material-input .btn-show-pass:hover {\n  color: #6a7dfe;\n  color: -webkit-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -o-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -moz-linear-gradient(to left, #21d4fd, #b721ff);\n  color: linear-gradient(to left, #21d4fd, #b721ff);\n}\n.material-input .btn-show-pass.active {\n  color: #6a7dfe;\n  color: -webkit-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -o-linear-gradient(to left, #21d4fd, #b721ff);\n  color: -moz-linear-gradient(to left, #21d4fd, #b721ff);\n  color: linear-gradient(to left, #21d4fd, #b721ff);\n}\n.error-message {\n  font-size: 13px;\n  color: #ff8f00;\n  position: absolute;\n  margin-top: 5px;\n  margin-left: 5px;\n}\n.container-login {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  background: #f2f2f2;\n}\n.container-login .wrap-login {\n  width: 390px;\n  background: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  padding: 45px 45px 33px 45px;\n  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -o-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n  -ms-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 767px) {\n  .container-login .wrap-login {\n    padding: 15px;\n  }\n}\n.container-login .wrap-login .login-header {\n  font-size: 23px;\n  padding-bottom: 10px;\n}\n.container-login .wrap-login .login-header span {\n  display: inline-block;\n  margin-bottom: 10px;\n}\n.container-login .wrap-login .login-header p {\n  font-size: 15px;\n}\n.container-login .wrap-login .login-button {\n  margin: 25px 0;\n}\n.container-login .wrap-login .login-button button {\n  border-radius: 3px;\n  padding-right: 25px;\n  padding-left: 25px;\n}\n.container-login .wrap-login .message {\n  font-size: 15px;\n}\n.btn-show-pass {\n  position: absolute;\n  right: 10px;\n  top: 56%;\n}\n.container-login {\n  background-image: url(/assets/images/wallpaper.jpg);\n  background-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL25nLWF1dGhlbnRpY2F0aW9uL25vZGVfbW9kdWxlcy9zYXNzLW1hdGVyaWFsLWNvbG9ycy9zYXNzL19zYXNzLW1hdGVyaWFsLWNvbG9ycy1mdW5jdGlvbi5zY3NzIiwiL1VzZXJzL2xlZ2lvbi9uZy1kYXNoYm9hcmQvcHJvamVjdHMvbmctYXV0aGVudGljYXRpb24vc3JjL2xpYi9jb21tb24uc2NzcyIsInByb2plY3RzL25nLWF1dGhlbnRpY2F0aW9uL3NyYy9saWIvc2lnbnVwLWZvcm0vc2lnbnVwLWZvcm0uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbGVnaW9uL25nLWRhc2hib2FyZC9wcm9qZWN0cy9uZy1hdXRoZW50aWNhdGlvbi9zcmMvbGliL3Njc3MvX3ZhcnMuc2NzcyIsIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL25nLWF1dGhlbnRpY2F0aW9uL3NyYy9saWIvc2Nzcy9fbWVkaWFzLnNjc3MiLCIvVXNlcnMvbGVnaW9uL25nLWRhc2hib2FyZC9wcm9qZWN0cy9uZy1hdXRoZW50aWNhdGlvbi9zcmMvbGliL3NpZ251cC1mb3JtL3NpZ251cC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzs7Ozs7Ozs7RUFBQTtBQ0FBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQ1VGO0FEVEU7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ1dOO0FEVFU7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNXZDtBRFRVO0VBQ0ksV0FBQTtBQ1dkO0FEUFU7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNTZDtBRFBVO0VBQ0ksV0FBQTtBQ1NkO0FETEU7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7QUNPTjtBRE5NO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFLQSxvQkFBQTtFQUVBLG1CQUFBO0VBSUEsc0RBQUE7QUNNVjtBREpNO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUVBLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFLQSxvQkFBQTtBQ0lWO0FEQUU7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQU1BLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBSUEsb0JBQUE7QUNDTjtBREFNO0VBQ0ksY0FBQTtFQUNBLHlEQUFBO0VBQ0Esb0RBQUE7RUFDQSxzREFBQTtFQUNBLGlEQUFBO0FDRVY7QURBTTtFQUNJLGNBQUE7RUFDQSx5REFBQTtFQUNBLG9EQUFBO0VBQ0Esc0RBQUE7RUFDQSxpREFBQTtBQ0VWO0FER0E7RUFDRSxlQUFBO0VBQ0EsY0VwRmdCO0VGcUZoQixrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0FGO0FESUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFLQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNERjtBREVFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrREFBQTtFQUNBLHFEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxpREFBQTtBQ0FKO0FFOUhFO0VIb0hBO0lBYUksYUFBQTtFQ0NKO0FBQ0Y7QURBSTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQ0VOO0FERE07RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FDR1I7QURETTtFQUNFLGVBQUE7QUNHUjtBREFJO0VBQ0UsY0FBQTtBQ0VOO0FERE07RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNHUjtBREFJO0VBQ0UsZUFBQTtBQ0VOO0FHckxBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBSHdMRjtBR3RMQTtFQUNFLG1EQUFBO0VBQ0EsMkJBQUE7QUh5TEYiLCJmaWxlIjoicHJvamVjdHMvbmctYXV0aGVudGljYXRpb24vc3JjL2xpYi9zaWdudXAtZm9ybS9zaWdudXAtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3Nhc3MtbWF0ZXJpYWwtY29sb3JzLW1hcCc7XG4vKipcbiAqIFJldHJpZXZlcyBhIGNvbG9yIHZhbHVlIGZyb20gdGhlICRtYXRlcmlhbC1jb2xvcnMgU2FzcyBtYXBcbiAqIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9uaWxza2FzcGVyc3Nvbi9Hb29nbGUtTWF0ZXJpYWwtVUktQ29sb3ItUGFsZXR0ZS9cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvci1uYW1lICAgICAgICAgICAgIC0gcXVvdGVkLCBsb3dlci1jYXNlLCBkYXNoZXJpemVkIGNvbG9yXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgKGUuZy4gJ3BpbmsnLCAnYW1iZXInKVxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2xvci12YXJpYW50PSc1MDAnXSAgLSBxdW90ZWQsIGxvd2VyY2FzZSBjb2xvciB2YXJpYW50IChlLmcuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcyMDAnLCAnYTEwMCcpXG4gKi9cbkBmdW5jdGlvbiBtYXRlcmlhbC1jb2xvcigkY29sb3ItbmFtZSwgJGNvbG9yLXZhcmlhbnQ6ICc1MDAnKSB7XG4gICRjb2xvcjogbWFwLWdldChtYXAtZ2V0KCRtYXRlcmlhbC1jb2xvcnMsICRjb2xvci1uYW1lKSwkY29sb3ItdmFyaWFudCk7XG4gIEBpZiAkY29sb3Ige1xuICAgIEByZXR1cm4gJGNvbG9yO1xuICB9IEBlbHNlIHtcbiAgICAvLyBMaWJzYXNzIHN0aWxsIGRvZXNuJ3Qgc2VlbSB0byBzdXBwb3J0IEBlcnJvclxuICAgIEB3YXJuIFwiPT4gRVJST1I6IENPTE9SIE5PVCBGT1VORCEgPD0gfCBZb3VyICRjb2xvci1uYW1lLCAkY29sb3ItdmFyaWFudCBjb21iaW5hdGlvbiBkaWQgbm90IG1hdGNoIGFueSBvZiB0aGUgdmFsdWVzIGluIHRoZSAkbWF0ZXJpYWwtY29sb3JzIG1hcC5cIjtcbiAgfVxufVxuIiwiQGltcG9ydCAnLi9zY3NzL2luamVjdHMnO1xuLm1hdGVyaWFsLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhZGFkYWQ7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIGlucHV0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGNvbG9yOiAjNTU1NTU1O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgJjpmb2N1cyArIC5mb2N1cy1pbnB1dHtcbiAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICBjb2xvcjogI2FhYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLmZvY3VzZWQgKyAuZm9jdXMtaW5wdXR7XG4gICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgY29sb3I6ICNhYWE7XG4gICAgICAgICAgfVxuICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIC5mb2N1cy1pbnB1dCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogLTJweDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgIFxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgICAgICBcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNmE3ZGZlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gICAgICB9XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgY29sb3I6ICM5OTk5OTk7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgICBcbiAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtcGxhY2Vob2xkZXIpO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgIFxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIH1cbiAgfVxuXG4gIC5idG4tc2hvdy1wYXNzIHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgICAgXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICM2YTdkZmU7XG4gICAgICAgICAgY29sb3I6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgICAgIGNvbG9yOiAtby1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gICAgICAgICAgY29sb3I6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgICAgIGNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gICAgICB9XG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6ICM2YTdkZmU7XG4gICAgICAgICAgY29sb3I6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgICAgIGNvbG9yOiAtby1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gICAgICAgICAgY29sb3I6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICAgICAgICAgIGNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gICAgICB9XG4gIH1cbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAkZXJyb3ItY29sb3ItODAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuXG4uY29udGFpbmVyLWxvZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIC53cmFwLWxvZ2luIHtcbiAgICB3aWR0aDogMzkwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiA0NXB4IDQ1cHggMzNweCA0NXB4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAtby1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLW1zLWJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuICAgIEBpbmNsdWRlIHBob25lICgpIHtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgfVxuICAgIC5sb2dpbi1oZWFkZXIge1xuICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgICAubG9naW4tYnV0dG9uIHtcbiAgICAgIG1hcmdpbjogMjVweCAwO1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5tZXNzYWdlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gIH1cbn0iLCIvKipcbiAqIFJldHJpZXZlcyBhIGNvbG9yIHZhbHVlIGZyb20gdGhlICRtYXRlcmlhbC1jb2xvcnMgU2FzcyBtYXBcbiAqIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9uaWxza2FzcGVyc3Nvbi9Hb29nbGUtTWF0ZXJpYWwtVUktQ29sb3ItUGFsZXR0ZS9cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvci1uYW1lICAgICAgICAgICAgIC0gcXVvdGVkLCBsb3dlci1jYXNlLCBkYXNoZXJpemVkIGNvbG9yXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgKGUuZy4gJ3BpbmsnLCAnYW1iZXInKVxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2xvci12YXJpYW50PSc1MDAnXSAgLSBxdW90ZWQsIGxvd2VyY2FzZSBjb2xvciB2YXJpYW50IChlLmcuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcyMDAnLCAnYTEwMCcpXG4gKi9cbi5tYXRlcmlhbC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWRhZGFkO1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuLm1hdGVyaWFsLWlucHV0IGlucHV0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzU1NTU1NTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwIDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbi5tYXRlcmlhbC1pbnB1dCBpbnB1dDpmb2N1cyArIC5mb2N1cy1pbnB1dDphZnRlciB7XG4gIHRvcDogLTEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNhYWE7XG59XG4ubWF0ZXJpYWwtaW5wdXQgaW5wdXQ6Zm9jdXMgKyAuZm9jdXMtaW5wdXQ6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWF0ZXJpYWwtaW5wdXQgaW5wdXQuZm9jdXNlZCArIC5mb2N1cy1pbnB1dDphZnRlciB7XG4gIHRvcDogLTEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNhYWE7XG59XG4ubWF0ZXJpYWwtaW5wdXQgaW5wdXQuZm9jdXNlZCArIC5mb2N1cy1pbnB1dDpiZWZvcmUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYXRlcmlhbC1pbnB1dCAuZm9jdXMtaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLm1hdGVyaWFsLWlucHV0IC5mb2N1cy1pbnB1dDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0ycHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICBiYWNrZ3JvdW5kOiAjNmE3ZGZlO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xufVxuLm1hdGVyaWFsLWlucHV0IC5mb2N1cy1pbnB1dDphZnRlciB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1wbGFjZWhvbGRlcik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIGxlZnQ6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cbi5tYXRlcmlhbC1pbnB1dCAuYnRuLXNob3ctcGFzcyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG4ubWF0ZXJpYWwtaW5wdXQgLmJ0bi1zaG93LXBhc3M6aG92ZXIge1xuICBjb2xvcjogIzZhN2RmZTtcbiAgY29sb3I6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICBjb2xvcjogLW8tbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICBjb2xvcjogLW1vei1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG4gIGNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XG59XG4ubWF0ZXJpYWwtaW5wdXQgLmJ0bi1zaG93LXBhc3MuYWN0aXZlIHtcbiAgY29sb3I6ICM2YTdkZmU7XG4gIGNvbG9yOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgY29sb3I6IC1vLWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcbiAgY29sb3I6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xuICBjb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNmZjhmMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uY29udGFpbmVyLWxvZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG59XG4uY29udGFpbmVyLWxvZ2luIC53cmFwLWxvZ2luIHtcbiAgd2lkdGg6IDM5MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDQ1cHggNDVweCAzM3B4IDQ1cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtby1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tcy1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRhaW5lci1sb2dpbiAud3JhcC1sb2dpbiB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxufVxuLmNvbnRhaW5lci1sb2dpbiAud3JhcC1sb2dpbiAubG9naW4taGVhZGVyIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5jb250YWluZXItbG9naW4gLndyYXAtbG9naW4gLmxvZ2luLWhlYWRlciBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNvbnRhaW5lci1sb2dpbiAud3JhcC1sb2dpbiAubG9naW4taGVhZGVyIHAge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uY29udGFpbmVyLWxvZ2luIC53cmFwLWxvZ2luIC5sb2dpbi1idXR0b24ge1xuICBtYXJnaW46IDI1cHggMDtcbn1cbi5jb250YWluZXItbG9naW4gLndyYXAtbG9naW4gLmxvZ2luLWJ1dHRvbiBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbn1cbi5jb250YWluZXItbG9naW4gLndyYXAtbG9naW4gLm1lc3NhZ2Uge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5idG4tc2hvdy1wYXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiA1NiU7XG59XG5cbi5jb250YWluZXItbG9naW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvd2FsbHBhcGVyLmpwZyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1tYXRlcmlhbC1jb2xvcnMvc2Fzcy9zYXNzLW1hdGVyaWFsLWNvbG9ycyc7XG5cbi8vLyBEZWZhdWx0IHRoZW1lIGJhc2UgdmFyaWFibGVzXG4kbmF2aWdhdGlvbldpZHRoOiAxMDBweDtcbiRzdGF0dXNCYXJXaWR0aDogMjc1cHg7XG4kdGhlbWUtaW52ZXJzZTogICAgICAgICAgICAgd2hpdGU7XG4kdGhlbWUtY29sb3I6ICAgICAgICAgICAgICAgcmdiKDAsMjAzLDEyMik7XG4kcHJpbWFyeS10ZXh0OiAgICAgICAgICAgICAgIzIxMjEyMTtcbiRzZWNvbmRhcnktdGV4dDogICAgICAgICAgICAjNzU3NTc1O1xuJGRpdmlkZXI6ICAgICAgICAgICAgICAgICAgICNCREJEQkQ7XG4kYmFja2dyb3VuZDogICAgICAgICAgICAgICAgI0ZGRkZGRjtcbiRkaWFsZWN0OiAgICAgICAgICAgICAgICAgICBzaWx2ZXI7XG4kaG92ZXI6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMC43KTtcbiRzaGFkb3c6ICAgICAgICAgICAgICAgICAgICByZ2JhKDAsMCwwLDAuMyk7XG5cbi8vLyBOYXZpZ2F0aW9uIHZhcmlhYmxlc1xuJG5hdmlnYXRpb246ICAgICAgICAgICAgICAgICMxYTFhMWM7XG4kbmF2LWljb246ICAgICAgICAgICAgICAgICAgcmdiKDEyNywxMjcsMTI3KTtcbiRuYXYtaWNvbi1ob3ZlcjogICAgICAgICAgICByZ2IoNDksNTIsNTMpO1xuJG5hdi1pY29uLWFjdGl2ZTogICAgICAgICAgIHJnYigxNzAsMTcwLDE3MCk7XG5cblxuJGFwcGluZm86ICAgICAgICAgICAgICAgICAgICNlZWYxZjg7XG4kY29udGFpbmVyOiAgICAgICAgICAgICAgICAgcmdiKDIzOCwyNDEsMjQ3KTtcbiRzbW9vdGhCb3JkZXI6ICAgICAgICAgICAgICAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xuXG5cbiRtYXRlcmlhbC1jb2xvcjogJ2xpZ2h0LWJsdWUnO1xuJHRoZW1lLWNvbG9yLTkwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnOTAwJyk7XG4kdGhlbWUtY29sb3ItODAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc4MDAnKTtcbiR0aGVtZS1jb2xvci03MDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzcwMCcpO1xuJHRoZW1lLWNvbG9yLTYwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnNjAwJyk7XG4kdGhlbWUtY29sb3ItNTAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc1MDAnKTtcbiR0aGVtZS1jb2xvci00MDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzQwMCcpO1xuJHRoZW1lLWNvbG9yLTMwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnMzAwJyk7XG4kdGhlbWUtY29sb3ItMjAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICcyMDAnKTtcbiR0aGVtZS1jb2xvci0xMDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzEwMCcpO1xuJHRoZW1lLWNvbG9yLTUwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc1MCcpO1xuXG5cbiRlcnJvci1jb2xvcjogJ2FtYmVyJztcbiRlcnJvci1jb2xvci05MDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzkwMCcpO1xuJGVycm9yLWNvbG9yLTgwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnODAwJyk7XG4kZXJyb3ItY29sb3ItNzAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICc3MDAnKTtcbiRlcnJvci1jb2xvci02MDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzYwMCcpO1xuJGVycm9yLWNvbG9yLTUwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnNTAwJyk7XG4kZXJyb3ItY29sb3ItNDAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICc0MDAnKTtcbiRlcnJvci1jb2xvci0zMDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzMwMCcpO1xuJGVycm9yLWNvbG9yLTIwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnMjAwJyk7XG4kZXJyb3ItY29sb3ItMTAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICcxMDAnKTtcbiRlcnJvci1jb2xvci01MDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnNTAnKTtcblxuXG4iLCIkc2NyZWVuLXhzOiAgICAgICAgICAgICAgICAgIDQ4MHB4O1xuJHNjcmVlbi1waG9uZS1taW46ICAgICAgICAgICAkc2NyZWVuLXhzOyAvLyA0ODBweFxuJHNjcmVlbi1waG9uZTogICAgICAgICAgICAgICAkc2NyZWVuLXBob25lLW1pbjsgLy8gNDgwcHhcblxuJHNjcmVlbi1zbTogICAgICAgICAgICAgICAgICA3NjhweDtcbiRzY3JlZW4tdGFibGV0LW1pbjogICAgICAgICAgJHNjcmVlbi1zbTsgLy83NjhweFxuJHNjcmVlbi10YWJsZXQ6ICAgICAgICAgICAgICAkc2NyZWVuLXRhYmxldC1taW47IC8vNzY4cHhcblxuJHNjcmVlbi1tZDogICAgICAgICAgICAgICAgICA5OTJweDtcbiRzY3JlZW4tZGVza3RvcC1taW46ICAgICAgICAgJHNjcmVlbi1tZDsgLy85OTJweFxuJHNjcmVlbi1kZXNrdG9wOiAgICAgICAgICAgICAkc2NyZWVuLWRlc2t0b3AtbWluOyAvLzk5MnB4XG5cbiRzY3JlZW4tbGc6ICAgICAgICAgICAgICAgICAgMTIwMHB4O1xuJHNjcmVlbi1sZy1kZXNrdG9wLW1pbjogICAgICAkc2NyZWVuLWxnOyAvLzEyMDBweFxuJHNjcmVlbi1sZy1kZXNrdG9wOiAgICAgICAgICAkc2NyZWVuLWxnLWRlc2t0b3AtbWluOyAvLzEyMDBweFxuXG4kc2NyZWVuLXhsZzogICAgICAgICAgICAgICAgIDE2MDBweDtcbiRzY3JlZW4teGxnLWRlc2t0b3AtbWluOiAgICAgJHNjcmVlbi14bGc7IC8vMTYwMHB4XG4kc2NyZWVuLXhsZy1kZXNrdG9wOiAgICAgICAgICRzY3JlZW4teGxnLWRlc2t0b3AtbWluOyAvLzE2MDBweFxuXG4kc2NyZWVuLXBob25lLW1heDogICAgICAgICAgICgkc2NyZWVuLXRhYmxldC1taW4gLSAxKTsgLy83NjdweFxuJHNjcmVlbi10YWJsZXQtbWF4OiAgICAgICAgICAoJHNjcmVlbi1kZXNrdG9wLW1pbiAtIDEpOyAvLzk5MXB4XG4kc2NyZWVuLWRlc2t0b3AtbWF4OiAgICAgICAgICgkc2NyZWVuLWxnLWRlc2t0b3AtbWluIC0gMSk7IC8vMTE5OXB4XG4kc2NyZWVuLWxnLWRlc2t0b3AtbWF4OiAgICAgICgkc2NyZWVuLXhsZy1kZXNrdG9wLW1pbiAtIDEpOyAvLzE1OTlweFxuXG4vL0N1c3RvbSBGb3Igc3BlY2lhbCBkZXZpY2VcbiRzY3JlZW4tMTM2NjogICAgICAgICAgICAgICAgMTM2NnB4O1xuJHNjcmVlbi0xMzY2LW1pbjogICAgICAgICAgICAkc2NyZWVuLTEzNjY7IC8vMTM2NnB4XG5cbkBtaXhpbiBwaG9uZSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAjeyRzY3JlZW4tcGhvbmUtbWF4fSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0YWJsZXQge1xuICBAbWVkaWEgKG1heC13aWR0aDogI3skc2NyZWVuLXRhYmxldC1tYXh9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGRlc2t0b3Age1xuICBAbWVkaWEgKG1heC13aWR0aDogI3skc2NyZWVuLWRlc2t0b3AtbWF4fSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wLWxnIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICN7JHNjcmVlbi1sZy1kZXNrdG9wfSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wLXhsZyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRzY3JlZW4teGxnLWRlc2t0b3B9KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi9jb21tb24nO1xuXG4uYnRuLXNob3ctcGFzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogNTYlO1xufVxuLmNvbnRhaW5lci1sb2dpbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy93YWxscGFwZXIuanBnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuIl19 */");

/***/ }),

/***/ "./projects/ng-authentication/src/lib/signup-form/signup-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./projects/ng-authentication/src/lib/signup-form/signup-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SignupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function() { return SignupFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./projects/ng-authentication/src/lib/shared.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.service */ "./projects/ng-authentication/src/lib/config.service.ts");
/* harmony import */ var _auth_public_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth-public.service */ "./projects/ng-authentication/src/lib/auth-public.service.ts");







var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent(http, router, auth, config) {
        this.http = http;
        this.router = router;
        this.auth = auth;
        this.config = config;
        this.isRequesting = false;
        this.response = null;
        this.signupDialog = "It's very easy to create an account. Please write your Email and A safe password";
        this.form = {
            email: '',
            password: ''
        };
        this.passwordVisibility = false;
        this.error = _shared__WEBPACK_IMPORTED_MODULE_4__["error"];
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
                this.signupUrl = this.config.Config.baseUrl + '/api/user/signup';
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
    };
    SignupFormComponent.prototype.signupHttp = function (data) {
        var _this = this;
        var conf = this.config.Config;
        window.scroll(0, 0);
        this.http.post(this.signupUrl, data).subscribe(function (response) {
            _this.response = response;
            _this.isRequesting = false;
            if (_this.response.data && _this.response.data.items[0]) {
                if (conf.onSignupSuccess) {
                    conf.onSignupSuccess(response);
                }
                _this.auth.events.emit({
                    type: _auth_public_service__WEBPACK_IMPORTED_MODULE_6__["AuthEvent"].SIGNUP_SUCCESS,
                    payload: response.data.items[0]
                });
                if (conf.afterSignupRedirect) {
                    _this.router.navigateByUrl(conf.afterSignupRedirect);
                }
            }
            _this.onSignupSuccess(response);
        }, function (response) {
            _this.isRequesting = false;
            if (response.name === 'HttpErrorResponse') {
                _this.response = Object(_shared__WEBPACK_IMPORTED_MODULE_4__["GetNetworkError"])();
                return false;
            }
            _this.response = response;
        });
    };
    SignupFormComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _auth_public_service__WEBPACK_IMPORTED_MODULE_6__["AuthPublicService"] },
        { type: _config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] }
    ]; };
    SignupFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-authentication/src/lib/signup-form/signup-form.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup-form.component.scss */ "./projects/ng-authentication/src/lib/signup-form/signup-form.component.scss")).default]
        })
    ], SignupFormComponent);
    return SignupFormComponent;
}());



/***/ }),

/***/ "./projects/ng-authentication/src/public_api.ts":
/*!******************************************************!*\
  !*** ./projects/ng-authentication/src/public_api.ts ***!
  \******************************************************/
/*! exports provided: NgAuthenticationService, NgAuthenticationComponent, NgAuthenticationModule, LoginFormComponent, SignupFormComponent, ForgotPasswordComponent, ResetPasswordComponent, AuthEvent, AuthPublicService, ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_ng_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ng-authentication.service */ "./projects/ng-authentication/src/lib/ng-authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgAuthenticationService", function() { return _lib_ng_authentication_service__WEBPACK_IMPORTED_MODULE_1__["NgAuthenticationService"]; });

/* harmony import */ var _lib_ng_authentication_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ng-authentication.component */ "./projects/ng-authentication/src/lib/ng-authentication.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgAuthenticationComponent", function() { return _lib_ng_authentication_component__WEBPACK_IMPORTED_MODULE_2__["NgAuthenticationComponent"]; });

/* harmony import */ var _lib_ng_authentication_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/ng-authentication.module */ "./projects/ng-authentication/src/lib/ng-authentication.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgAuthenticationModule", function() { return _lib_ng_authentication_module__WEBPACK_IMPORTED_MODULE_3__["NgAuthenticationModule"]; });

/* harmony import */ var _lib_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/login-form/login-form.component */ "./projects/ng-authentication/src/lib/login-form/login-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return _lib_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__["LoginFormComponent"]; });

/* harmony import */ var _lib_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/signup-form/signup-form.component */ "./projects/ng-authentication/src/lib/signup-form/signup-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function() { return _lib_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_5__["SignupFormComponent"]; });

/* harmony import */ var _lib_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/forgot-password/forgot-password.component */ "./projects/ng-authentication/src/lib/forgot-password/forgot-password.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return _lib_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"]; });

/* harmony import */ var _lib_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/reset-password/reset-password.component */ "./projects/ng-authentication/src/lib/reset-password/reset-password.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return _lib_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordComponent"]; });

/* harmony import */ var _lib_auth_public_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/auth-public.service */ "./projects/ng-authentication/src/lib/auth-public.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthEvent", function() { return _lib_auth_public_service__WEBPACK_IMPORTED_MODULE_8__["AuthEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthPublicService", function() { return _lib_auth_public_service__WEBPACK_IMPORTED_MODULE_8__["AuthPublicService"]; });

/* harmony import */ var _lib_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/config.service */ "./projects/ng-authentication/src/lib/config.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return _lib_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"]; });

/*
 * Public API Surface of ng-authentication
 */












/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/animations/animations.ts":
/*!*********************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/animations/animations.ts ***!
  \*********************************************************************/
/*! exports provided: routeFadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeFadeAnimation", function() { return routeFadeAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");


var routeFadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                opacity: 0
            })
        ], {
            optional: true
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                opacity: 1
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))], { optional: true })
    ])
]);


/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng-dashboard.module.ts":
/*!*******************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng-dashboard.module.ts ***!
  \*******************************************************************/
/*! exports provided: NgDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgDashboardModule", function() { return NgDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./projects/ng-dashboard-core/node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng5_basic_services_permissions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ng5-basic/services/permissions.service */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/permissions.service.ts");
/* harmony import */ var _ng5_basic_services_requests_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ng5-basic/services/requests.service */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/requests.service.ts");
/* harmony import */ var _ng5_basic_services_actions_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ng5-basic/services/actions.service */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/actions.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng5_basic_services_mocks_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ng5-basic/services/mocks.service */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/mocks.service.ts");
/* harmony import */ var _ng5_basic_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ng5-basic/components/layout/layout.component */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/layout/layout.component.ts");
/* harmony import */ var _ng5_basic_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ng5-basic/components/nav-bar/nav-bar.component */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _ng5_basic_components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ng5-basic/components/side-bar/side-bar.component */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/side-bar/side-bar.component.ts");
/* harmony import */ var _ng5_basic_components_profile_menu_profile_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ng5-basic/components/profile-menu/profile-menu.component */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/profile-menu/profile-menu.component.ts");
/* harmony import */ var _ng5_basic_components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ng5-basic/components/notification-list/notification-list.component */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/notification-list/notification-list.component.ts");
/* harmony import */ var _ngx_tooltip_ngx_tooltip_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ngx-tooltip/ngx-tooltip.module */ "./projects/ng-dashboard-core/src/lib/ngx-tooltip/ngx-tooltip.module.ts");
/* harmony import */ var _ng5_basic_components_ui_icon_box_ui_icon_box_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ng5-basic/components/ui-icon-box/ui-icon-box.component */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-icon-box/ui-icon-box.component.ts");
/* harmony import */ var _ng5_basic_components_ui_panel_box_ui_panel_box_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ng5-basic/components/ui-panel-box/ui-panel-box.component */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-panel-box/ui-panel-box.component.ts");
/* harmony import */ var _ng5_basic_components_ui_small_box_ui_small_box_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ng5-basic/components/ui-small-box/ui-small-box.component */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-small-box/ui-small-box.component.ts");
/* harmony import */ var _ng5_basic_components_progress_line_progress_line_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ng5-basic/components/progress-line/progress-line.component */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/progress-line/progress-line.component.ts");
/* harmony import */ var _ng5_basic_components_page_container_page_container_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ng5-basic/components/page-container/page-container.component */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/page-container/page-container.component.ts");
/* harmony import */ var _ng5_basic_components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ng5-basic/components/error-message/error-message.component */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/error-message/error-message.component.ts");
/* harmony import */ var _ng5_basic_services_globalization_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ng5-basic/services/globalization.service */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/globalization.service.ts");
/* harmony import */ var _ng5_basic_ng5_basic_reducers__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ng5-basic/ng5-basic.reducers */ "./projects/ng-dashboard-core/src/lib/ng5-basic/ng5-basic.reducers.ts");
/* harmony import */ var _ng5_basic_ngx_sidebar_ngx_sidebar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ng5-basic/ngx-sidebar/ngx-sidebar.component */ "./projects/ng-dashboard-core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.component.ts");
/* harmony import */ var _ng5_basic_services_configuration_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ng5-basic/services/configuration.service */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/configuration.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngrx/store */ "./projects/ng-dashboard-core/node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ng5_basic_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ng5-basic/components/spinner/spinner.component */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/spinner/spinner.component.ts");
/* harmony import */ var _ng5_basic_components_layout_fade_layout_fade_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ng5-basic/components/layout-fade/layout-fade.component */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/layout-fade/layout-fade.component.ts");
/* harmony import */ var _ng5_basic_services_translate_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ng5-basic/services/translate.service */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/translate.service.ts");
/* harmony import */ var _ng_dashboard_amazing_search__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ng-dashboard/amazing-search */ "./projects/ng-dashboard-core/node_modules/@ng-dashboard/amazing-search/fesm5/ng-dashboard-amazing-search.js");

































var NgDashboardModule = /** @class */ (function () {
    function NgDashboardModule() {
    }
    NgDashboardModule_1 = NgDashboardModule;
    NgDashboardModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: NgDashboardModule_1,
            providers: [
                _ng5_basic_services_mocks_service__WEBPACK_IMPORTED_MODULE_11__["MockService"],
                _ng5_basic_services_configuration_service__WEBPACK_IMPORTED_MODULE_27__["ConfigurationService"],
                { provide: 'config', useValue: config }
            ]
        };
    };
    var NgDashboardModule_1;
    NgDashboardModule = NgDashboardModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _ng5_basic_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"],
                _ng5_basic_components_layout_fade_layout_fade_component__WEBPACK_IMPORTED_MODULE_30__["LayoutFadeComponent"],
                _ng5_basic_components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_14__["SideBarComponent"],
                _ng5_basic_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"],
                _ng5_basic_components_profile_menu_profile_menu_component__WEBPACK_IMPORTED_MODULE_15__["ProfileMenuComponent"],
                _ng5_basic_components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_16__["NotificationListComponent"],
                _ng5_basic_components_ui_icon_box_ui_icon_box_component__WEBPACK_IMPORTED_MODULE_18__["UiIconBoxComponent"],
                _ng5_basic_components_progress_line_progress_line_component__WEBPACK_IMPORTED_MODULE_21__["ProgressLineComponent"],
                _ng5_basic_components_ui_panel_box_ui_panel_box_component__WEBPACK_IMPORTED_MODULE_19__["UiPanelBoxComponent"],
                _ng5_basic_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_29__["SpinnerComponent"],
                _ng5_basic_ngx_sidebar_ngx_sidebar_component__WEBPACK_IMPORTED_MODULE_26__["NgxSidebarComponent"],
                _ng5_basic_components_ui_small_box_ui_small_box_component__WEBPACK_IMPORTED_MODULE_20__["UiSmallBoxComponent"],
                _ng5_basic_components_page_container_page_container_component__WEBPACK_IMPORTED_MODULE_22__["PageContainerComponent"],
                _ng5_basic_components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_23__["ErrorMessageComponent"]
            ],
            exports: [
                _ng5_basic_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_12__["LayoutComponent"],
                _ng5_basic_components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_14__["SideBarComponent"],
                _ng5_basic_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavBarComponent"],
                _ng5_basic_components_profile_menu_profile_menu_component__WEBPACK_IMPORTED_MODULE_15__["ProfileMenuComponent"],
                _ng5_basic_components_layout_fade_layout_fade_component__WEBPACK_IMPORTED_MODULE_30__["LayoutFadeComponent"],
                _ng5_basic_components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_16__["NotificationListComponent"],
                _ng5_basic_components_ui_icon_box_ui_icon_box_component__WEBPACK_IMPORTED_MODULE_18__["UiIconBoxComponent"],
                _ng5_basic_components_progress_line_progress_line_component__WEBPACK_IMPORTED_MODULE_21__["ProgressLineComponent"],
                _ng5_basic_components_ui_panel_box_ui_panel_box_component__WEBPACK_IMPORTED_MODULE_19__["UiPanelBoxComponent"],
                _ng5_basic_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_29__["SpinnerComponent"],
                _ng5_basic_components_ui_small_box_ui_small_box_component__WEBPACK_IMPORTED_MODULE_20__["UiSmallBoxComponent"],
                _ng5_basic_components_page_container_page_container_component__WEBPACK_IMPORTED_MODULE_22__["PageContainerComponent"],
                _ng5_basic_components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_23__["ErrorMessageComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _ng_dashboard_amazing_search__WEBPACK_IMPORTED_MODULE_32__["AmazingSearchModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forRoot(),
                _ngx_tooltip_ngx_tooltip_module__WEBPACK_IMPORTED_MODULE_17__["NgxTooltipModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_28__["StoreModule"].forRoot({}),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([]),
                Object(_ng5_basic_ng5_basic_reducers__WEBPACK_IMPORTED_MODULE_25__["ng5ReducerGenerator"])()
            ],
            providers: [
                _ng5_basic_services_permissions_service__WEBPACK_IMPORTED_MODULE_7__["PermissionsService"],
                _ng5_basic_services_translate_service__WEBPACK_IMPORTED_MODULE_31__["TranslateService"],
                _ng5_basic_services_requests_service__WEBPACK_IMPORTED_MODULE_8__["RequestsService"],
                _ng5_basic_services_mocks_service__WEBPACK_IMPORTED_MODULE_11__["MockService"],
                _ng5_basic_services_actions_service__WEBPACK_IMPORTED_MODULE_9__["ActionsService"],
                _ng5_basic_services_configuration_service__WEBPACK_IMPORTED_MODULE_27__["ConfigurationService"],
                _ng5_basic_services_globalization_service__WEBPACK_IMPORTED_MODULE_24__["GlobalizationService"]
            ]
        })
    ], NgDashboardModule);
    return NgDashboardModule;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng-dashboard.service.ts":
/*!********************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng-dashboard.service.ts ***!
  \********************************************************************/
/*! exports provided: NgDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgDashboardService", function() { return NgDashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NgDashboardService = /** @class */ (function () {
    function NgDashboardService() {
    }
    NgDashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], NgDashboardService);
    return NgDashboardService;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/error-message/error-message.component.scss":
/*!************************************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/error-message/error-message.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * Retrieves a color value from the $material-colors Sass map\n * Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette/\n *\n * @function\n * @param {string} color-name             - quoted, lower-case, dasherized color\n *                                          name (e.g. 'pink', 'amber')\n * @param {string} [color-variant='500']  - quoted, lowercase color variant (e.g.\n *                                          '200', 'a100')\n */\n.error-message {\n  background-color: #ffecb3;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL25vZGVfbW9kdWxlcy9zYXNzLW1hdGVyaWFsLWNvbG9ycy9zYXNzL19zYXNzLW1hdGVyaWFsLWNvbG9ycy1mdW5jdGlvbi5zY3NzIiwiL1VzZXJzL2xlZ2lvbi9uZy1kYXNoYm9hcmQvcHJvamVjdHMvbmctZGFzaGJvYXJkLWNvcmUvc3JjL2xpYi9uZzUtYmFzaWMvY29tcG9uZW50cy9lcnJvci1tZXNzYWdlL2Vycm9yLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbGVnaW9uL25nLWRhc2hib2FyZC9wcm9qZWN0cy9uZy1kYXNoYm9hcmQtY29yZS9zcmMvbGliL25nNS1iYXNpYy9zY3NzL192YXJzLnNjc3MiLCJwcm9qZWN0cy9uZy1kYXNoYm9hcmQtY29yZS9zcmMvbGliL25nNS1iYXNpYy9jb21wb25lbnRzL2Vycm9yLW1lc3NhZ2UvZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7Ozs7Ozs7O0VBQUE7QUNDQTtFQUNFLHlCQzhDZ0I7RUQ3Q2hCLGFBQUE7QUVTRiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kYXNoYm9hcmQtY29yZS9zcmMvbGliL25nNS1iYXNpYy9jb21wb25lbnRzL2Vycm9yLW1lc3NhZ2UvZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3Nhc3MtbWF0ZXJpYWwtY29sb3JzLW1hcCc7XG4vKipcbiAqIFJldHJpZXZlcyBhIGNvbG9yIHZhbHVlIGZyb20gdGhlICRtYXRlcmlhbC1jb2xvcnMgU2FzcyBtYXBcbiAqIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9uaWxza2FzcGVyc3Nvbi9Hb29nbGUtTWF0ZXJpYWwtVUktQ29sb3ItUGFsZXR0ZS9cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvci1uYW1lICAgICAgICAgICAgIC0gcXVvdGVkLCBsb3dlci1jYXNlLCBkYXNoZXJpemVkIGNvbG9yXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgKGUuZy4gJ3BpbmsnLCAnYW1iZXInKVxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2xvci12YXJpYW50PSc1MDAnXSAgLSBxdW90ZWQsIGxvd2VyY2FzZSBjb2xvciB2YXJpYW50IChlLmcuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcyMDAnLCAnYTEwMCcpXG4gKi9cbkBmdW5jdGlvbiBtYXRlcmlhbC1jb2xvcigkY29sb3ItbmFtZSwgJGNvbG9yLXZhcmlhbnQ6ICc1MDAnKSB7XG4gICRjb2xvcjogbWFwLWdldChtYXAtZ2V0KCRtYXRlcmlhbC1jb2xvcnMsICRjb2xvci1uYW1lKSwkY29sb3ItdmFyaWFudCk7XG4gIEBpZiAkY29sb3Ige1xuICAgIEByZXR1cm4gJGNvbG9yO1xuICB9IEBlbHNlIHtcbiAgICAvLyBMaWJzYXNzIHN0aWxsIGRvZXNuJ3Qgc2VlbSB0byBzdXBwb3J0IEBlcnJvclxuICAgIEB3YXJuIFwiPT4gRVJST1I6IENPTE9SIE5PVCBGT1VORCEgPD0gfCBZb3VyICRjb2xvci1uYW1lLCAkY29sb3ItdmFyaWFudCBjb21iaW5hdGlvbiBkaWQgbm90IG1hdGNoIGFueSBvZiB0aGUgdmFsdWVzIGluIHRoZSAkbWF0ZXJpYWwtY29sb3JzIG1hcC5cIjtcbiAgfVxufVxuIiwiQGltcG9ydCAnLi4vLi4vc2Nzcy9faW5qZWN0cyc7XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGVycm9yLWNvbG9yLTEwMDtcbiAgcGFkZGluZzogMTVweDtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1tYXRlcmlhbC1jb2xvcnMvc2Fzcy9zYXNzLW1hdGVyaWFsLWNvbG9ycyc7XG5cbi8vLyBEZWZhdWx0IHRoZW1lIGJhc2UgdmFyaWFibGVzXG4kbmF2aWdhdGlvbldpZHRoOiAxMDBweDtcbiRzdGF0dXNCYXJXaWR0aDogMjc1cHg7XG4kdGhlbWUtaW52ZXJzZTogICAgICAgICAgICAgd2hpdGU7XG4kdGhlbWUtY29sb3I6ICAgICAgICAgICAgICAgcmdiKDAsMjAzLDEyMik7XG4kcHJpbWFyeS10ZXh0OiAgICAgICAgICAgICAgIzIxMjEyMTtcbiRzZWNvbmRhcnktdGV4dDogICAgICAgICAgICAjNzU3NTc1O1xuJGRpdmlkZXI6ICAgICAgICAgICAgICAgICAgICNCREJEQkQ7XG4kYmFja2dyb3VuZDogICAgICAgICAgICAgICAgI0ZGRkZGRjtcbiRkaWFsZWN0OiAgICAgICAgICAgICAgICAgICBzaWx2ZXI7XG4kaG92ZXI6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMC43KTtcbiRzaGFkb3c6ICAgICAgICAgICAgICAgICAgICByZ2JhKDAsMCwwLDAuMyk7XG5cbi8vLyBOYXZpZ2F0aW9uIHZhcmlhYmxlc1xuJG5hdmlnYXRpb246ICAgICAgICAgICAgICAgICMxYTFhMWM7XG4kbmF2LWljb246ICAgICAgICAgICAgICAgICAgcmdiKDEyNywxMjcsMTI3KTtcbiRuYXYtaWNvbi1ob3ZlcjogICAgICAgICAgICByZ2IoNDksNTIsNTMpO1xuJG5hdi1pY29uLWFjdGl2ZTogICAgICAgICAgIHJnYigxNzAsMTcwLDE3MCk7XG5cblxuJGFwcGluZm86ICAgICAgICAgICAgICAgICAgICNlZWYxZjg7XG4kY29udGFpbmVyOiAgICAgICAgICAgICAgICAgcmdiKDIzOCwyNDEsMjQ3KTtcbiRzbW9vdGhCb3JkZXI6ICAgICAgICAgICAgICAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xuXG5cbiRtYXRlcmlhbC1jb2xvcjogJ2xpZ2h0LWJsdWUnO1xuJHRoZW1lLWNvbG9yLTkwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnOTAwJyk7XG4kdGhlbWUtY29sb3ItODAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc4MDAnKTtcbiR0aGVtZS1jb2xvci03MDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzcwMCcpO1xuJHRoZW1lLWNvbG9yLTYwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnNjAwJyk7XG4kdGhlbWUtY29sb3ItNTAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc1MDAnKTtcbiR0aGVtZS1jb2xvci00MDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzQwMCcpO1xuJHRoZW1lLWNvbG9yLTMwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnMzAwJyk7XG4kdGhlbWUtY29sb3ItMjAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICcyMDAnKTtcbiR0aGVtZS1jb2xvci0xMDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzEwMCcpO1xuJHRoZW1lLWNvbG9yLTUwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc1MCcpO1xuXG5cbiRlcnJvci1jb2xvcjogJ2FtYmVyJztcbiRlcnJvci1jb2xvci05MDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzkwMCcpO1xuJGVycm9yLWNvbG9yLTgwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnODAwJyk7XG4kZXJyb3ItY29sb3ItNzAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICc3MDAnKTtcbiRlcnJvci1jb2xvci02MDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzYwMCcpO1xuJGVycm9yLWNvbG9yLTUwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnNTAwJyk7XG4kZXJyb3ItY29sb3ItNDAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICc0MDAnKTtcbiRlcnJvci1jb2xvci0zMDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzMwMCcpO1xuJGVycm9yLWNvbG9yLTIwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnMjAwJyk7XG4kZXJyb3ItY29sb3ItMTAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICcxMDAnKTtcbiRlcnJvci1jb2xvci01MDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnNTAnKTtcblxuXG4iLCIvKipcbiAqIFJldHJpZXZlcyBhIGNvbG9yIHZhbHVlIGZyb20gdGhlICRtYXRlcmlhbC1jb2xvcnMgU2FzcyBtYXBcbiAqIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9uaWxza2FzcGVyc3Nvbi9Hb29nbGUtTWF0ZXJpYWwtVUktQ29sb3ItUGFsZXR0ZS9cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvci1uYW1lICAgICAgICAgICAgIC0gcXVvdGVkLCBsb3dlci1jYXNlLCBkYXNoZXJpemVkIGNvbG9yXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgKGUuZy4gJ3BpbmsnLCAnYW1iZXInKVxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2xvci12YXJpYW50PSc1MDAnXSAgLSBxdW90ZWQsIGxvd2VyY2FzZSBjb2xvciB2YXJpYW50IChlLmcuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcyMDAnLCAnYTEwMCcpXG4gKi9cbi5lcnJvci1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWNiMztcbiAgcGFkZGluZzogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/error-message/error-message.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/error-message/error-message.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ErrorMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageComponent", function() { return ErrorMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorMessageComponent = /** @class */ (function () {
    function ErrorMessageComponent() {
    }
    ErrorMessageComponent.prototype.ngOnInit = function () {
    };
    ErrorMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-error-message',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error-message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/error-message/error-message.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error-message.component.scss */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/error-message/error-message.component.scss")).default]
        })
    ], ErrorMessageComponent);
    return ErrorMessageComponent;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/layout-fade/layout-fade.component.scss":
/*!********************************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/layout-fade/layout-fade.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ngd-outlet {\n  overflow-y: scroll !important;\n  position: fixed !important;\n  z-index: -1;\n  padding: 30px;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  top: 3.8em;\n  transition-duration: 0.5s;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: right, left;\n}\n.ngd-outlet.ngd-sidebar-visible {\n  left: 280px;\n  right: -280px;\n}\n::ng-deep body[dir=rtl] .ngd-outlet.ngd-sidebar-visible {\n  right: 280px;\n  left: -280px;\n}\n@media (min-width: 992px) {\n  ::ng-deep body[dir=rtl] .ngd-outlet.ngd-sidebar-visible {\n    left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .ngd-outlet {\n    top: 3.8em;\n  }\n  .ngd-outlet.ngd-sidebar-visible {\n    right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvbGF5b3V0LWZhZGUvbGF5b3V0LWZhZGUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbGVnaW9uL25nLWRhc2hib2FyZC9wcm9qZWN0cy9uZy1kYXNoYm9hcmQtY29yZS9zcmMvbGliL25nNS1iYXNpYy9zY3NzL19sYXlvdXQuc2NzcyIsInByb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvbGF5b3V0LWZhZGUvbGF5b3V0LWZhZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxVQ1RjO0VEVWQseUJBQUE7RUFDQSw0REFBQTtFQUNBLGdDQUFBO0FFREY7QUZFRTtFQUNFLFdDZlk7RURnQlosYUFBQTtBRUFKO0FGTUk7RUFDRSxZQ3ZCVTtFRHdCVixZQUFBO0FFSE47QUZJTTtFQUhGO0lBSUksT0FBQTtFRUROO0FBQ0Y7QUZNQTtFQUNFO0lBQ0UsVUNqQ1k7RUM4QmQ7RUZJRTtJQUNFLFFBQUE7RUVGSjtBQUNGIiwiZmlsZSI6InByb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvbGF5b3V0LWZhZGUvbGF5b3V0LWZhZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc2Nzcy9sYXlvdXRcIjtcblxuLm5nZC1vdXRsZXQge1xuICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IC0xO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB0b3A6ICRuYXZiYXJfaGVpZ2h0O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHJpZ2h0LCBsZWZ0O1xuICAmLm5nZC1zaWRlYmFyLXZpc2libGUge1xuICAgIGxlZnQ6ICRzaWRlYmFyX3dpZHRoO1xuICAgIHJpZ2h0OiAtJHNpZGViYXJfd2lkdGg7XG4gIH1cbn1cblxuOjpuZy1kZWVwIGJvZHlbZGlyPVwicnRsXCJdIHtcbiAgLm5nZC1vdXRsZXQge1xuICAgICYubmdkLXNpZGViYXItdmlzaWJsZSB7XG4gICAgICByaWdodDogJHNpZGViYXJfd2lkdGg7XG4gICAgICBsZWZ0OiAtJHNpZGViYXJfd2lkdGg7XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5uZ2Qtb3V0bGV0IHtcbiAgICB0b3A6ICRuYXZiYXJfaGVpZ2h0O1xuICAgICYubmdkLXNpZGViYXItdmlzaWJsZSB7XG4gICAgICByaWdodDogMDtcbiAgICB9XG4gIH1cbn1cbiIsIiRzaWRlYmFyX3dpZHRoOiAyODBweDtcbiRuYXZiYXJfaGVpZ2h0OiAzLjhlbTsiLCIubmdkLW91dGxldCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgei1pbmRleDogLTE7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMy44ZW07XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogcmlnaHQsIGxlZnQ7XG59XG4ubmdkLW91dGxldC5uZ2Qtc2lkZWJhci12aXNpYmxlIHtcbiAgbGVmdDogMjgwcHg7XG4gIHJpZ2h0OiAtMjgwcHg7XG59XG5cbjo6bmctZGVlcCBib2R5W2Rpcj1ydGxdIC5uZ2Qtb3V0bGV0Lm5nZC1zaWRlYmFyLXZpc2libGUge1xuICByaWdodDogMjgwcHg7XG4gIGxlZnQ6IC0yODBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICA6Om5nLWRlZXAgYm9keVtkaXI9cnRsXSAubmdkLW91dGxldC5uZ2Qtc2lkZWJhci12aXNpYmxlIHtcbiAgICBsZWZ0OiAwO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAubmdkLW91dGxldCB7XG4gICAgdG9wOiAzLjhlbTtcbiAgfVxuICAubmdkLW91dGxldC5uZ2Qtc2lkZWJhci12aXNpYmxlIHtcbiAgICByaWdodDogMDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/layout-fade/layout-fade.component.ts":
/*!******************************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/layout-fade/layout-fade.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: LayoutFadeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutFadeComponent", function() { return LayoutFadeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/configuration.service */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/configuration.service.ts");
/* harmony import */ var _animations_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../animations/animations */ "./projects/ng-dashboard-core/src/lib/animations/animations.ts");




var LayoutFadeComponent = /** @class */ (function () {
    function LayoutFadeComponent(sidebar) {
        var _this = this;
        this.sidebar = sidebar;
        this.isRequesting = false;
        this.sideState = true;
        this.sidebar.ToggleSidebar.subscribe(function (e) {
            if (e === 'hidden') {
                _this.sideState = false;
                return;
            }
            else if (e === 'show') {
                _this.sideState = true;
                return;
            }
            _this.sideState = _this.sideState ? false : true;
        });
    }
    LayoutFadeComponent.prototype.prepareRoute = function (outlet) {
        return (outlet &&
            outlet.activatedRouteData &&
            outlet.activatedRouteData['animation']);
    };
    LayoutFadeComponent.prototype.ngOnInit = function () {
        if (window.innerWidth < 992) {
            this.sideState = false;
        }
        var config = this.sidebar.config;
        if (config.sidebar && config.sidebar.visible === false) {
            this.sideState = false;
        }
    };
    LayoutFadeComponent.prototype.sideOff = function () {
        if (this.sideState) {
            this.sidebar.closeSidebar();
        }
    };
    LayoutFadeComponent.ctorParameters = function () { return [
        { type: _services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"] }
    ]; };
    LayoutFadeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout-fade.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/layout-fade/layout-fade.component.html")).default,
            animations: [_animations_animations__WEBPACK_IMPORTED_MODULE_3__["routeFadeAnimation"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout-fade.component.scss */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/layout-fade/layout-fade.component.scss")).default]
        })
    ], LayoutFadeComponent);
    return LayoutFadeComponent;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/layout/layout.component.scss":
/*!**********************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/layout/layout.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ngd-outlet {\n  overflow-y: scroll !important;\n  position: fixed !important;\n  z-index: -1;\n  padding: 30px;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  top: 3.8em;\n  transition-duration: 0.5s;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: right, left;\n}\n.ngd-outlet.ngd-sidebar-visible {\n  left: 280px;\n  right: -280px;\n}\n::ng-deep body[dir=rtl] .ngd-outlet.ngd-sidebar-visible {\n  right: 280px;\n  left: -280px;\n}\n@media (min-width: 992px) {\n  ::ng-deep body[dir=rtl] .ngd-outlet.ngd-sidebar-visible {\n    left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .ngd-outlet {\n    top: 3.8em;\n  }\n  .ngd-outlet.ngd-sidebar-visible {\n    right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL3NyYy9saWIvbmc1LWJhc2ljL3Njc3MvX2xheW91dC5zY3NzIiwicHJvamVjdHMvbmctZGFzaGJvYXJkLWNvcmUvc3JjL2xpYi9uZzUtYmFzaWMvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsVUNUYztFRFVkLHlCQUFBO0VBQ0EsNERBQUE7RUFDQSxnQ0FBQTtBRURGO0FGRUU7RUFDRSxXQ2ZZO0VEZ0JaLGFBQUE7QUVBSjtBRk1JO0VBQ0UsWUN2QlU7RUR3QlYsWUFBQTtBRUhOO0FGSU07RUFIRjtJQUlJLE9BQUE7RUVETjtBQUNGO0FGTUE7RUFDRTtJQUNFLFVDakNZO0VDOEJkO0VGSUU7SUFDRSxRQUFBO0VFRko7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kYXNoYm9hcmQtY29yZS9zcmMvbGliL25nNS1iYXNpYy9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc2Nzcy9sYXlvdXRcIjtcblxuLm5nZC1vdXRsZXQge1xuICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IC0xO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB0b3A6ICRuYXZiYXJfaGVpZ2h0O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHJpZ2h0LCBsZWZ0O1xuICAmLm5nZC1zaWRlYmFyLXZpc2libGUge1xuICAgIGxlZnQ6ICRzaWRlYmFyX3dpZHRoO1xuICAgIHJpZ2h0OiAtJHNpZGViYXJfd2lkdGg7XG4gIH1cbn1cblxuOjpuZy1kZWVwIGJvZHlbZGlyPVwicnRsXCJdIHtcbiAgLm5nZC1vdXRsZXQge1xuICAgICYubmdkLXNpZGViYXItdmlzaWJsZSB7XG4gICAgICByaWdodDogJHNpZGViYXJfd2lkdGg7XG4gICAgICBsZWZ0OiAtJHNpZGViYXJfd2lkdGg7XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5uZ2Qtb3V0bGV0IHtcbiAgICB0b3A6ICRuYXZiYXJfaGVpZ2h0O1xuICAgICYubmdkLXNpZGViYXItdmlzaWJsZSB7XG4gICAgICByaWdodDogMDtcbiAgICB9XG4gIH1cbn1cbiIsIiRzaWRlYmFyX3dpZHRoOiAyODBweDtcbiRuYXZiYXJfaGVpZ2h0OiAzLjhlbTsiLCIubmdkLW91dGxldCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgei1pbmRleDogLTE7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMy44ZW07XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogcmlnaHQsIGxlZnQ7XG59XG4ubmdkLW91dGxldC5uZ2Qtc2lkZWJhci12aXNpYmxlIHtcbiAgbGVmdDogMjgwcHg7XG4gIHJpZ2h0OiAtMjgwcHg7XG59XG5cbjo6bmctZGVlcCBib2R5W2Rpcj1ydGxdIC5uZ2Qtb3V0bGV0Lm5nZC1zaWRlYmFyLXZpc2libGUge1xuICByaWdodDogMjgwcHg7XG4gIGxlZnQ6IC0yODBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICA6Om5nLWRlZXAgYm9keVtkaXI9cnRsXSAubmdkLW91dGxldC5uZ2Qtc2lkZWJhci12aXNpYmxlIHtcbiAgICBsZWZ0OiAwO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAubmdkLW91dGxldCB7XG4gICAgdG9wOiAzLjhlbTtcbiAgfVxuICAubmdkLW91dGxldC5uZ2Qtc2lkZWJhci12aXNpYmxlIHtcbiAgICByaWdodDogMDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/layout/layout.component.ts":
/*!********************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/layout/layout.component.ts ***!
  \********************************************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/configuration.service */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/configuration.service.ts");



var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(sidebar) {
        var _this = this;
        this.sidebar = sidebar;
        this.isRequesting = false;
        this.sideState = true;
        this.sidebar.ToggleSidebar.subscribe(function (e) {
            if (e === 'hidden') {
                _this.sideState = false;
                return;
            }
            else if (e === 'show') {
                _this.sideState = true;
                return;
            }
            _this.sideState = _this.sideState ? false : true;
        });
    }
    LayoutComponent.prototype.ngOnInit = function () {
        if (window.innerWidth < 992) {
            this.sideState = false;
        }
        var config = this.sidebar.config;
        if (config.sidebar && config.sidebar.visible === false) {
            this.sideState = false;
        }
    };
    LayoutComponent.prototype.sideOff = function () {
        if (this.sideState) {
            this.sidebar.closeSidebar();
        }
    };
    LayoutComponent.ctorParameters = function () { return [
        { type: _services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"] }
    ]; };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/layout/layout.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.scss */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/layout/layout.component.scss")).default]
        })
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/nav-bar/nav-bar.component.scss":
/*!************************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/nav-bar/nav-bar.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fixed-nav {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 2;\n  box-shadow: 6px 0 6px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 400px) {\n  .fixed-nav {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n}\n.f-basic-auto {\n  flex-basis: auto !important;\n}\n.nav-items div:nth-child(1) {\n  margin-left: 15px;\n}\n.ngd-sidebar-toggle {\n  background: transparent;\n  outline: none;\n  font-size: 28px;\n  border: 0px;\n  cursor: pointer;\n  margin-right: 15px;\n  position: relative;\n  top: 2px;\n}\n.navbar-brand {\n  float: right;\n  font-size: 1.07rem;\n}\n@media (max-width: 400px) {\n  .navbar-brand {\n    font-size: 15px;\n  }\n}\n.application-nav {\n  padding: 0;\n}\n.active-application-wrapper {\n  overflow: hidden;\n  float: left;\n}\n.active-application-wrapper .active-application {\n  display: table;\n  margin-left: 10px;\n}\n.active-application-wrapper .active-application > div {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n}\n.active-application-wrapper .active-application .application-title {\n  text-indent: 10px;\n  max-width: 100px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media (max-width: 400px) {\n  .active-application-wrapper .active-application .application-title {\n    font-size: 13px;\n  }\n}\n.active-application-wrapper .active-application .application-avatar {\n  width: 43px;\n  height: 43px;\n  background: #dbe7ff;\n  color: #6091fe;\n  border-radius: 5px;\n  font-weight: bold;\n}\n@media (max-width: 400px) {\n  .active-application-wrapper .active-application .application-avatar {\n    width: 35px;\n    height: 35px;\n    font-size: 13px;\n  }\n}\n@media (max-width: 1170.98px) {\n  .application-nav {\n    display: none;\n  }\n}\n@media (min-width: 576px) {\n  .application-title {\n    text-indent: 10px;\n    max-width: initial !important;\n  }\n\n  .navbar-brand {\n    font-size: 1.25rem;\n  }\n}\n.change-language {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbmctZGFzaGJvYXJkLWNvcmUvc3JjL2xpYi9uZzUtYmFzaWMvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7QUNDSjtBREFJO0VBTko7SUFPUSxpQkFBQTtJQUNBLGtCQUFBO0VDR047QUFDRjtBRERBO0VBQ0ksMkJBQUE7QUNJSjtBRERJO0VBQ0ksaUJBQUE7QUNJUjtBRERBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNJSjtBREZBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDS0o7QURKSTtFQUhKO0lBSVEsZUFBQTtFQ09OO0FBQ0Y7QURMQTtFQUNJLFVBQUE7QUNRSjtBRE5BO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FDU0o7QURSSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ1VSO0FEVFE7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNXWjtBRFRRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ1daO0FEVlk7RUFOSjtJQU9RLGVBQUE7RUNhZDtBQUNGO0FEWFE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNhWjtBRFpZO0VBUEo7SUFRUSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUNlZDtBQUNGO0FEWEE7RUFDSTtJQUNJLGFBQUE7RUNjTjtBQUNGO0FEWkE7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsNkJBQUE7RUNjTjs7RURaRTtJQUNJLGtCQUFBO0VDZU47QUFDRjtBRGJBO0VBQ0UsZUFBQTtBQ2VGIiwiZmlsZSI6InByb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpeGVkLW5hdiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGJveC1zaGFkb3c6IDZweCAwIDZweCByZ2JhKDAsMCwwLC4xKTtcbiAgICBAbWVkaWEobWF4LXdpZHRoOiA0MDBweCkge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIH1cbn1cbi5mLWJhc2ljLWF1dG8ge1xuICAgIGZsZXgtYmFzaXM6IGF1dG8gIWltcG9ydGFudDtcbn1cbi5uYXYtaXRlbXMge1xuICAgIGRpdjpudGgtY2hpbGQoMSl7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIH1cbn1cbi5uZ2Qtc2lkZWJhci10b2dnbGUge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMnB4O1xufVxuLm5hdmJhci1icmFuZHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxLjA3cmVtO1xuICAgIEBtZWRpYShtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDsgIFxuICAgIH1cbn1cbi5hcHBsaWNhdGlvbi1uYXYge1xuICAgIHBhZGRpbmc6IDA7XG59XG4uYWN0aXZlLWFwcGxpY2F0aW9uLXdyYXBwZXJ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmbG9hdDogbGVmdDtcbiAgICAuYWN0aXZlLWFwcGxpY2F0aW9uIHtcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICA+IGRpdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuYXBwbGljYXRpb24tdGl0bGUge1xuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogNDAwcHgpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7ICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYXBwbGljYXRpb24tYXZhdGFyIHtcbiAgICAgICAgICAgIHdpZHRoOiA0M3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0M3B4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2RiZTdmZjtcbiAgICAgICAgICAgIGNvbG9yOiAjNjA5MWZlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA0MDBweCkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7ICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTcwLjk4cHgpIHtcbiAgICAuYXBwbGljYXRpb24tbmF2IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgICAuYXBwbGljYXRpb24tdGl0bGUge1xuICAgICAgICB0ZXh0LWluZGVudDogMTBweDtcbiAgICAgICAgbWF4LXdpZHRoOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5uYXZiYXItYnJhbmR7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICB9XG59XG4uY2hhbmdlLWxhbmd1YWdlIHsgXG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iLCIuZml4ZWQtbmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAyO1xuICBib3gtc2hhZG93OiA2cHggMCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5maXhlZC1uYXYge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgfVxufVxuXG4uZi1iYXNpYy1hdXRvIHtcbiAgZmxleC1iYXNpczogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubmF2LWl0ZW1zIGRpdjpudGgtY2hpbGQoMSkge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLm5nZC1zaWRlYmFyLXRvZ2dsZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGJvcmRlcjogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxLjA3cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5uYXZiYXItYnJhbmQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuXG4uYXBwbGljYXRpb24tbmF2IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmFjdGl2ZS1hcHBsaWNhdGlvbi13cmFwcGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uYWN0aXZlLWFwcGxpY2F0aW9uLXdyYXBwZXIgLmFjdGl2ZS1hcHBsaWNhdGlvbiB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5hY3RpdmUtYXBwbGljYXRpb24td3JhcHBlciAuYWN0aXZlLWFwcGxpY2F0aW9uID4gZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFjdGl2ZS1hcHBsaWNhdGlvbi13cmFwcGVyIC5hY3RpdmUtYXBwbGljYXRpb24gLmFwcGxpY2F0aW9uLXRpdGxlIHtcbiAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5hY3RpdmUtYXBwbGljYXRpb24td3JhcHBlciAuYWN0aXZlLWFwcGxpY2F0aW9uIC5hcHBsaWNhdGlvbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG4uYWN0aXZlLWFwcGxpY2F0aW9uLXdyYXBwZXIgLmFjdGl2ZS1hcHBsaWNhdGlvbiAuYXBwbGljYXRpb24tYXZhdGFyIHtcbiAgd2lkdGg6IDQzcHg7XG4gIGhlaWdodDogNDNweDtcbiAgYmFja2dyb3VuZDogI2RiZTdmZjtcbiAgY29sb3I6ICM2MDkxZmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmFjdGl2ZS1hcHBsaWNhdGlvbi13cmFwcGVyIC5hY3RpdmUtYXBwbGljYXRpb24gLmFwcGxpY2F0aW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTE3MC45OHB4KSB7XG4gIC5hcHBsaWNhdGlvbi1uYXYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuYXBwbGljYXRpb24tdGl0bGUge1xuICAgIHRleHQtaW5kZW50OiAxMHB4O1xuICAgIG1heC13aWR0aDogaW5pdGlhbCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5hdmJhci1icmFuZCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG4uY2hhbmdlLWxhbmd1YWdlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/nav-bar/nav-bar.component.ts":
/*!**********************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/nav-bar/nav-bar.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_globalization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/globalization.service */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/globalization.service.ts");
/* harmony import */ var _services_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/configuration.service */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/configuration.service.ts");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/translate.service */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/translate.service.ts");





var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(gconfig, configuration, translate) {
        this.gconfig = gconfig;
        this.configuration = configuration;
        this.translate = translate;
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
    NavBarComponent.prototype.ngOnInit = function () {
        if (this.gconfig && this.gconfig.navbar) {
            this.config = this.gconfig.navbar;
        }
    };
    NavBarComponent.prototype.ToggleSidebar = function () {
        this.configuration.ToggleSidebar.emit();
    };
    NavBarComponent.prototype.CurrentLanguage = function () {
        return _services_globalization_service__WEBPACK_IMPORTED_MODULE_2__["SupportedLanguages"][this.translate.currentLang];
    };
    NavBarComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['config',] }] },
        { type: _services_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"] },
        { type: _services_translate_service__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-nav-bar',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/nav-bar/nav-bar.component.html")).default,
            providers: [_services_translate_service__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.scss */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/nav-bar/nav-bar.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('config'))
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/notification-list/notification-list.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/notification-list/notification-list.component.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".notification-container {\n  width: 43px;\n  height: 43px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  font-size: 25px;\n  color: #aaa;\n  position: relative;\n  cursor: pointer;\n}\n.notification-container:focus {\n  color: #aaa !important;\n}\n.notification-container.active {\n  background: #eee;\n  border-radius: 5px;\n  color: #4c84ff;\n}\n.notification-container .notification-badge {\n  border: 2px solid orange;\n  border-radius: 50%;\n  width: 10px;\n  height: 10px;\n  display: inline-block;\n  position: absolute;\n  top: 3px;\n  right: 3px;\n}\n.notification-container:hover i {\n  color: #4c84ff;\n}\n@media (max-width: 400px) {\n  .notification-container {\n    width: 40px;\n    height: 40px;\n  }\n}\n.ngd-notification-wrapper {\n  position: fixed;\n  top: 3.8em;\n  right: 0;\n  width: 300px;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.98);\n  box-shadow: 0px 8px 9px -10px #949191 inset;\n  z-index: 2;\n  transform: translateX(100%);\n  transition-duration: 0.5s;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: transform;\n}\n.ngd-notification-wrapper.active {\n  transform: translateX(0);\n}\n.ngd-notification-wrapper .notification-header {\n  margin-bottom: 15px;\n  padding: 15px 15px 5px;\n  border-bottom: 1px solid #eee;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.ngd-notification-wrapper .no-content {\n  text-align: center;\n  font-size: 18px;\n  padding-top: 15px;\n  margin: 70px 15px 15px;\n  border: 1px dashed #ddd;\n  border-radius: 3px;\n}\n.ngd-notification-wrapper .no-content i {\n  font-size: 30px;\n  color: orange;\n  margin-bottom: 10px;\n  display: inline-block;\n}\n.ngd-notification-wrapper .search-btn {\n  background: #f1f1f1;\n  border: 0;\n  outline: none;\n  border-radius: 50%;\n  padding: 3px 4px;\n  cursor: pointer;\n  position: relative;\n  bottom: 3px;\n}\n.ngd-notification-wrapper .search-btn:hover {\n  background: #ddd;\n}\n.ngd-notification-wrapper .search-btn.close-search-bar {\n  position: absolute;\n  right: 5px;\n  top: 4px;\n  background: transparent;\n}\n.ngd-notification-wrapper .search-input {\n  position: absolute;\n  right: 5px;\n  left: 5px;\n}\n.ngd-notification-wrapper .search-input input[type=text] {\n  border-color: #eaeaea !important;\n  border-radius: 0px;\n}\n.notification-list {\n  position: absolute;\n  top: 50px;\n  bottom: 0px;\n}\n.notification-list ul {\n  padding: 15px;\n}\n.notification-list ul li {\n  list-style: none;\n  display: flex;\n}\n.notification-list ul li .notification-icon {\n  font-size: 23px;\n  width: 60x;\n  text-align: center;\n}\n.notification-list ul li .notification-icon i.icon-comment {\n  color: orange;\n}\n.notification-list ul li .notification-icon i.icon-call_made {\n  color: green;\n}\n.notification-list ul li .notification-icon i.icon-call_missed {\n  color: red;\n}\n.notification-list ul li .notification-icon i.icon-mail_outline {\n  color: #4c84ff;\n}\n.notification-list ul li .notification-icon i.icon-error {\n  color: #e2a700;\n}\n.notification-list ul li .notification-icon i.icon-add_circle {\n  color: cornflowerblue;\n}\n.notification-list ul li .notification-icon i.icon-remove_circle {\n  color: orangered;\n}\n.notification-list ul li .notification-content {\n  display: inline-block;\n  padding-left: 10px;\n}\n.notification-list ul li .notification-content .notification-message {\n  font-size: 14px;\n  margin-bottom: 3px;\n  padding-top: 3px;\n}\n.notification-list ul li .notification-content .notification-type {\n  color: #aaa;\n  font-size: 12px;\n  display: inline-block;\n}\n.notification-overlay {\n  position: fixed;\n  top: 3.8em;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.25);\n  opacity: 0;\n  visibility: hidden;\n  transition: visibility 0.3s linear, opacity 0.3s linear;\n}\n.notification-overlay.active {\n  opacity: 1;\n  visibility: visible;\n}\n::ng-deep body[dir=rtl] .ngd-notification-wrapper {\n  right: auto;\n  left: 0px;\n  transform: translateX(-100%);\n  direction: rtl !important;\n}\n::ng-deep body[dir=rtl] .ngd-notification-wrapper .search-btn.close-search-bar {\n  right: auto !important;\n  left: 5px;\n}\n::ng-deep body[dir=rtl] .notification-list ul li .notification-content {\n  padding-left: 0px;\n  padding-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLWxpc3Qvbm90aWZpY2F0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZy1kYXNoYm9hcmQtY29yZS9zcmMvbGliL25nNS1iYXNpYy9jb21wb25lbnRzL25vdGlmaWNhdGlvbi1saXN0L25vdGlmaWNhdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFtQkEsZUFBQTtBQ2pCRjtBRERFO0VBQ0Usc0JBQUE7QUNHSjtBRERFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNHSjtBRERFO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDR0o7QURBRTtFQUNFLGNBQUE7QUNFSjtBREFFO0VBL0JGO0lBZ0NJLFdBQUE7SUFDQSxZQUFBO0VDR0Y7QUFDRjtBREFBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSw0REFBQTtFQUNBLDhCQUFBO0FDR0Y7QURGRTtFQUNFLHdCQUFBO0FDSUo7QURGRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUNJSjtBREZFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNJSjtBREhJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDS047QURGRTtFQUNFLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0lKO0FESEk7RUFDRSxnQkFBQTtBQ0tOO0FESEk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7QUNLTjtBREZFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0lKO0FESEk7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0FDS047QURBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNHRjtBREZFO0VBQ0UsYUFBQTtBQ0lKO0FESEk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNLTjtBREpNO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ01SO0FESlU7RUFDRSxhQUFBO0FDTVo7QURKVTtFQUNFLFlBQUE7QUNNWjtBREpVO0VBQ0UsVUFBQTtBQ01aO0FESlU7RUFDRSxjQUFBO0FDTVo7QURKVTtFQUNFLGNBQUE7QUNNWjtBREpVO0VBQ0UscUJBQUE7QUNNWjtBREpVO0VBQ0UsZ0JBQUE7QUNNWjtBREZNO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ0lSO0FESFE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0tWO0FESFE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDS1Y7QURDQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7QUNFRjtBRERFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FDR0o7QURFRTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQ0NKO0FERU07RUFDRSxzQkFBQTtFQUNBLFNBQUE7QUNBUjtBRE9RO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0xWIiwiZmlsZSI6InByb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLWxpc3Qvbm90aWZpY2F0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZpY2F0aW9uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0M3B4O1xuICBoZWlnaHQ6IDQzcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjYWFhO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiAjYWFhICFpbXBvcnRhbnQ7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiAjNGM4NGZmO1xuICB9XG4gIC5ub3RpZmljYXRpb24tYmFkZ2Uge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIG9yYW5nZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzcHg7XG4gICAgcmlnaHQ6IDNweDtcbiAgfVxuICBjdXJzb3I6IHBvaW50ZXI7XG4gICY6aG92ZXIgaSB7XG4gICAgY29sb3I6ICM0Yzg0ZmY7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG59XG5cbi5uZ2Qtbm90aWZpY2F0aW9uLXdyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMy44ZW07XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMzAwcHg7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk4KTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCA5cHggLTEwcHggIzk0OTE5MSBpbnNldDtcbiAgei1pbmRleDogMjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgJi5hY3RpdmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAubm90aWZpY2F0aW9uLWhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm5vLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgbWFyZ2luOiA3MHB4IDE1cHggMTVweDtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBjb2xvcjogb3JhbmdlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gIH1cbiAgLnNlYXJjaC1idG4ge1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDNweCA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDNweDtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgfVxuICAgICYuY2xvc2Utc2VhcmNoLWJhciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogNXB4O1xuICAgICAgdG9wOiA0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cbiAgLnNlYXJjaC1pbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgbGVmdDogNXB4O1xuICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICAgIGJvcmRlci1jb2xvcjogI2VhZWFlYSAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIH1cbiAgfVxufVxuXG4ubm90aWZpY2F0aW9uLWxpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTBweDtcbiAgYm90dG9tOiAwcHg7XG4gIHVsIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGxpIHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLm5vdGlmaWNhdGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICB3aWR0aDogNjB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGkge1xuICAgICAgICAgICYuaWNvbi1jb21tZW50IHtcbiAgICAgICAgICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgICAgICAgfVxuICAgICAgICAgICYuaWNvbi1jYWxsX21hZGUge1xuICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmLmljb24tY2FsbF9taXNzZWQge1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5pY29uLW1haWxfb3V0bGluZSB7XG4gICAgICAgICAgICBjb2xvcjogIzRjODRmZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5pY29uLWVycm9yIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZTJhNzAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmLmljb24tYWRkX2NpcmNsZSB7XG4gICAgICAgICAgICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgICYuaWNvbi1yZW1vdmVfY2lyY2xlIHtcbiAgICAgICAgICAgIGNvbG9yOiBvcmFuZ2VyZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAubm90aWZpY2F0aW9uLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgLm5vdGlmaWNhdGlvbi1tZXNzYWdlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5vdGlmaWNhdGlvbi10eXBlIHtcbiAgICAgICAgICBjb2xvcjogI2FhYTtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4ubm90aWZpY2F0aW9uLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMy44ZW07XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjNzIGxpbmVhciwgb3BhY2l0eSAwLjNzIGxpbmVhcjtcbiAgJi5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxufVxuXG46Om5nLWRlZXAgYm9keVtkaXI9XCJydGxcIl0ge1xuICAubmdkLW5vdGlmaWNhdGlvbi13cmFwcGVyIHtcbiAgICByaWdodDogYXV0bztcbiAgICBsZWZ0OiAwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICBkaXJlY3Rpb246IHJ0bCAhaW1wb3J0YW50O1xuXG4gICAgLnNlYXJjaC1idG4ge1xuICAgICAgJi5jbG9zZS1zZWFyY2gtYmFyIHtcbiAgICAgICAgcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbGVmdDogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAubm90aWZpY2F0aW9uLWxpc3Qge1xuICAgIHVsIHtcbiAgICAgIGxpIHtcbiAgICAgICAgLm5vdGlmaWNhdGlvbi1jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIubm90aWZpY2F0aW9uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0M3B4O1xuICBoZWlnaHQ6IDQzcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjYWFhO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ub3RpZmljYXRpb24tY29udGFpbmVyOmZvY3VzIHtcbiAgY29sb3I6ICNhYWEgIWltcG9ydGFudDtcbn1cbi5ub3RpZmljYXRpb24tY29udGFpbmVyLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICM0Yzg0ZmY7XG59XG4ubm90aWZpY2F0aW9uLWNvbnRhaW5lciAubm90aWZpY2F0aW9uLWJhZGdlIHtcbiAgYm9yZGVyOiAycHggc29saWQgb3JhbmdlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgcmlnaHQ6IDNweDtcbn1cbi5ub3RpZmljYXRpb24tY29udGFpbmVyOmhvdmVyIGkge1xuICBjb2xvcjogIzRjODRmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAubm90aWZpY2F0aW9uLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG59XG5cbi5uZ2Qtbm90aWZpY2F0aW9uLXdyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMy44ZW07XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMzAwcHg7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk4KTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCA5cHggLTEwcHggIzk0OTE5MSBpbnNldDtcbiAgei1pbmRleDogMjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbn1cbi5uZ2Qtbm90aWZpY2F0aW9uLXdyYXBwZXIuYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuLm5nZC1ub3RpZmljYXRpb24td3JhcHBlciAubm90aWZpY2F0aW9uLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmc6IDE1cHggMTVweCA1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmdkLW5vdGlmaWNhdGlvbi13cmFwcGVyIC5uby1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBtYXJnaW46IDcwcHggMTVweCAxNXB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLm5nZC1ub3RpZmljYXRpb24td3JhcHBlciAubm8tY29udGVudCBpIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogb3JhbmdlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubmdkLW5vdGlmaWNhdGlvbi13cmFwcGVyIC5zZWFyY2gtYnRuIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDNweCA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDNweDtcbn1cbi5uZ2Qtbm90aWZpY2F0aW9uLXdyYXBwZXIgLnNlYXJjaC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xufVxuLm5nZC1ub3RpZmljYXRpb24td3JhcHBlciAuc2VhcmNoLWJ0bi5jbG9zZS1zZWFyY2gtYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDRweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ubmdkLW5vdGlmaWNhdGlvbi13cmFwcGVyIC5zZWFyY2gtaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIGxlZnQ6IDVweDtcbn1cbi5uZ2Qtbm90aWZpY2F0aW9uLXdyYXBwZXIgLnNlYXJjaC1pbnB1dCBpbnB1dFt0eXBlPXRleHRdIHtcbiAgYm9yZGVyLWNvbG9yOiAjZWFlYWVhICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLm5vdGlmaWNhdGlvbi1saXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIGJvdHRvbTogMHB4O1xufVxuLm5vdGlmaWNhdGlvbi1saXN0IHVsIHtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5ub3RpZmljYXRpb24tbGlzdCB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubm90aWZpY2F0aW9uLWxpc3QgdWwgbGkgLm5vdGlmaWNhdGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICB3aWR0aDogNjB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubm90aWZpY2F0aW9uLWxpc3QgdWwgbGkgLm5vdGlmaWNhdGlvbi1pY29uIGkuaWNvbi1jb21tZW50IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cbi5ub3RpZmljYXRpb24tbGlzdCB1bCBsaSAubm90aWZpY2F0aW9uLWljb24gaS5pY29uLWNhbGxfbWFkZSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5ub3RpZmljYXRpb24tbGlzdCB1bCBsaSAubm90aWZpY2F0aW9uLWljb24gaS5pY29uLWNhbGxfbWlzc2VkIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5ub3RpZmljYXRpb24tbGlzdCB1bCBsaSAubm90aWZpY2F0aW9uLWljb24gaS5pY29uLW1haWxfb3V0bGluZSB7XG4gIGNvbG9yOiAjNGM4NGZmO1xufVxuLm5vdGlmaWNhdGlvbi1saXN0IHVsIGxpIC5ub3RpZmljYXRpb24taWNvbiBpLmljb24tZXJyb3Ige1xuICBjb2xvcjogI2UyYTcwMDtcbn1cbi5ub3RpZmljYXRpb24tbGlzdCB1bCBsaSAubm90aWZpY2F0aW9uLWljb24gaS5pY29uLWFkZF9jaXJjbGUge1xuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XG59XG4ubm90aWZpY2F0aW9uLWxpc3QgdWwgbGkgLm5vdGlmaWNhdGlvbi1pY29uIGkuaWNvbi1yZW1vdmVfY2lyY2xlIHtcbiAgY29sb3I6IG9yYW5nZXJlZDtcbn1cbi5ub3RpZmljYXRpb24tbGlzdCB1bCBsaSAubm90aWZpY2F0aW9uLWNvbnRlbnQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5ub3RpZmljYXRpb24tbGlzdCB1bCBsaSAubm90aWZpY2F0aW9uLWNvbnRlbnQgLm5vdGlmaWNhdGlvbi1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG4ubm90aWZpY2F0aW9uLWxpc3QgdWwgbGkgLm5vdGlmaWNhdGlvbi1jb250ZW50IC5ub3RpZmljYXRpb24tdHlwZSB7XG4gIGNvbG9yOiAjYWFhO1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm5vdGlmaWNhdGlvbi1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDMuOGVtO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4zcyBsaW5lYXIsIG9wYWNpdHkgMC4zcyBsaW5lYXI7XG59XG4ubm90aWZpY2F0aW9uLW92ZXJsYXkuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuOjpuZy1kZWVwIGJvZHlbZGlyPXJ0bF0gLm5nZC1ub3RpZmljYXRpb24td3JhcHBlciB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIGRpcmVjdGlvbjogcnRsICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgYm9keVtkaXI9cnRsXSAubmdkLW5vdGlmaWNhdGlvbi13cmFwcGVyIC5zZWFyY2gtYnRuLmNsb3NlLXNlYXJjaC1iYXIge1xuICByaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBsZWZ0OiA1cHg7XG59XG46Om5nLWRlZXAgYm9keVtkaXI9cnRsXSAubm90aWZpY2F0aW9uLWxpc3QgdWwgbGkgLm5vdGlmaWNhdGlvbi1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/notification-list/notification-list.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/notification-list/notification-list.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: NotificationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationListComponent", function() { return NotificationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./projects/ng-dashboard-core/node_modules/@ngrx/store/fesm5/store.js");



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
    NotificationListComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])
    ], NotificationListComponent.prototype, "clickout", null);
    NotificationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-notification-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/notification-list/notification-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification-list.component.scss */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/notification-list/notification-list.component.scss")).default]
        })
    ], NotificationListComponent);
    return NotificationListComponent;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/page-container/page-container.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/page-container/page-container.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kYXNoYm9hcmQtY29yZS9zcmMvbGliL25nNS1iYXNpYy9jb21wb25lbnRzL3BhZ2UtY29udGFpbmVyL3BhZ2UtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/page-container/page-container.component.ts":
/*!************************************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/page-container/page-container.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: PageContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContainerComponent", function() { return PageContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageContainerComponent = /** @class */ (function () {
    function PageContainerComponent() {
        this.maintitle = '';
        this.subtitle = '';
    }
    PageContainerComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PageContainerComponent.prototype, "maintitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PageContainerComponent.prototype, "subtitle", void 0);
    PageContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-page-container',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/page-container/page-container.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-container.component.scss */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/page-container/page-container.component.scss")).default]
        })
    ], PageContainerComponent);
    return PageContainerComponent;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/profile-menu/profile-menu.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/profile-menu/profile-menu.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".avatar-container {\n  cursor: pointer;\n}\n.avatar-container .avatar-image img {\n  width: 40px;\n  border-radius: 5px;\n}\n@media (max-width: 400px) {\n  .avatar-container .avatar-image img {\n    width: 35px;\n  }\n}\n.avatar-container .avatar-name {\n  width: 40px;\n  height: 40px;\n  border-radius: 5px;\n  background: #4c84ff;\n  color: #fff;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  font-weight: 600;\n}\n@media (max-width: 400px) {\n  .avatar-container .avatar-name {\n    width: 35px;\n    height: 35px;\n  }\n}\n.avatar-container:hover {\n  color: #4c84ff;\n}\n@media (max-width: 475px) {\n  .avatar-container .pname {\n    font-size: 14px;\n    font-size: 14px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 95px;\n  }\n}\n.pname {\n  margin-left: 15px;\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvcHJvZmlsZS1tZW51L3Byb2ZpbGUtbWVudS5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvcHJvZmlsZS1tZW51L3Byb2ZpbGUtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQTBCSSxlQUFBO0FDeEJKO0FEQVE7RUFDSSxXQUFBO0VBSUEsa0JBQUE7QUNEWjtBREZZO0VBRko7SUFHUSxXQUFBO0VDS2Q7QUFDRjtBREFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNFUjtBRERRO0VBVko7SUFXUSxXQUFBO0lBQ0EsWUFBQTtFQ0lWO0FBQ0Y7QURESTtFQUNJLGNBQUE7QUNHUjtBRERJO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtJQUNBLFdBQUE7RUNHVjtBQUNGO0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDRUoiLCJmaWxlIjoicHJvamVjdHMvbmctZGFzaGJvYXJkLWNvcmUvc3JjL2xpYi9uZzUtYmFzaWMvY29tcG9uZW50cy9wcm9maWxlLW1lbnUvcHJvZmlsZS1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhci1jb250YWluZXJ7XG4gICAuYXZhdGFyLWltYWdlIHtcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA0MDBweCkge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmF2YXRhci1uYW1lIHtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNGM4NGZmO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXJ7XG4gICAgICAgIGNvbG9yOiAjNGM4NGZmO1xuICAgIH1cbiAgICBAbWVkaWEobWF4LXdpZHRoOiA0NzVweCkge1xuICAgICAgICAucG5hbWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIHdpZHRoOiA5NXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucG5hbWUge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbiIsIi5hdmF0YXItY29udGFpbmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmF2YXRhci1jb250YWluZXIgLmF2YXRhci1pbWFnZSBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5hdmF0YXItY29udGFpbmVyIC5hdmF0YXItaW1hZ2UgaW1nIHtcbiAgICB3aWR0aDogMzVweDtcbiAgfVxufVxuLmF2YXRhci1jb250YWluZXIgLmF2YXRhci1uYW1lIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjNGM4NGZmO1xuICBjb2xvcjogI2ZmZjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmF2YXRhci1jb250YWluZXIgLmF2YXRhci1uYW1lIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gIH1cbn1cbi5hdmF0YXItY29udGFpbmVyOmhvdmVyIHtcbiAgY29sb3I6ICM0Yzg0ZmY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDc1cHgpIHtcbiAgLmF2YXRhci1jb250YWluZXIgLnBuYW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aWR0aDogOTVweDtcbiAgfVxufVxuXG4ucG5hbWUge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/profile-menu/profile-menu.component.ts":
/*!********************************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/profile-menu/profile-menu.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ProfileMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileMenuComponent", function() { return ProfileMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ProfileMenuComponent.prototype, "user", void 0);
    ProfileMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-profile-menu',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/profile-menu/profile-menu.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-menu.component.scss */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/profile-menu/profile-menu.component.scss")).default]
        })
    ], ProfileMenuComponent);
    return ProfileMenuComponent;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/progress-line/progress-line.component.scss":
/*!************************************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/progress-line/progress-line.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".progress-line, .progress-line:before {\n  height: 3px;\n  width: 100%;\n  margin: 0;\n}\n\n.progress-line {\n  background-color: #b3d4fc;\n  display: flex;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 3;\n}\n\n.progress-line:before {\n  background-color: #3f51b5;\n  content: \"\";\n  -webkit-animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n}\n\n@-webkit-keyframes running-progress {\n  0% {\n    margin-left: 0px;\n    margin-right: 100%;\n  }\n  50% {\n    margin-left: 25%;\n    margin-right: 0%;\n  }\n  100% {\n    margin-left: 100%;\n    margin-right: 0;\n  }\n}\n\n@keyframes running-progress {\n  0% {\n    margin-left: 0px;\n    margin-right: 100%;\n  }\n  50% {\n    margin-left: 25%;\n    margin-right: 0%;\n  }\n  100% {\n    margin-left: 100%;\n    margin-right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvcHJvZ3Jlc3MtbGluZS9wcm9ncmVzcy1saW5lLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbmctZGFzaGJvYXJkLWNvcmUvc3JjL2xpYi9uZzUtYmFzaWMvY29tcG9uZW50cy9wcm9ncmVzcy1saW5lL3Byb2dyZXNzLWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUVBLFNBQUE7QUNERjs7QURHQTtFQUNFLHlCQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSw0RUFBQTtFQUNBLG9FQUFBO0FDQUY7O0FERUE7RUFDRTtJQUFLLGdCQUFBO0lBQWtCLGtCQUFBO0VDR3ZCO0VERkE7SUFBTSxnQkFBQTtJQUFrQixnQkFBQTtFQ014QjtFRExBO0lBQU8saUJBQUE7SUFBbUIsZUFBQTtFQ1MxQjtBQUNGOztBRFJBO0VBQ0U7SUFBSyxnQkFBQTtJQUFrQixrQkFBQTtFQ1l2QjtFRFhBO0lBQU0sZ0JBQUE7SUFBa0IsZ0JBQUE7RUNleEI7RURkQTtJQUFPLGlCQUFBO0lBQW1CLGVBQUE7RUNrQjFCO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvbmctZGFzaGJvYXJkLWNvcmUvc3JjL2xpYi9uZzUtYmFzaWMvY29tcG9uZW50cy9wcm9ncmVzcy1saW5lL3Byb2dyZXNzLWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5wcm9ncmVzcy1saW5lLCAucHJvZ3Jlc3MtbGluZTpiZWZvcmUge1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIFxuICBtYXJnaW46IDA7XG59XG4ucHJvZ3Jlc3MtbGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2Q0ZmM7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6MDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5wcm9ncmVzcy1saW5lOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbnRlbnQ6ICcnO1xuICAtd2Via2l0LWFuaW1hdGlvbjogcnVubmluZy1wcm9ncmVzcyAycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIGluZmluaXRlO1xuICBhbmltYXRpb246IHJ1bm5pbmctcHJvZ3Jlc3MgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBydW5uaW5nLXByb2dyZXNzIHtcbiAgMCUgeyBtYXJnaW4tbGVmdDogMHB4OyBtYXJnaW4tcmlnaHQ6IDEwMCU7IH1cbiAgNTAlIHsgbWFyZ2luLWxlZnQ6IDI1JTsgbWFyZ2luLXJpZ2h0OiAwJTsgfVxuICAxMDAlIHsgbWFyZ2luLWxlZnQ6IDEwMCU7IG1hcmdpbi1yaWdodDogMDsgfVxufVxuQGtleWZyYW1lcyBydW5uaW5nLXByb2dyZXNzIHtcbiAgMCUgeyBtYXJnaW4tbGVmdDogMHB4OyBtYXJnaW4tcmlnaHQ6IDEwMCU7IH1cbiAgNTAlIHsgbWFyZ2luLWxlZnQ6IDI1JTsgbWFyZ2luLXJpZ2h0OiAwJTsgfVxuICAxMDAlIHsgbWFyZ2luLWxlZnQ6IDEwMCU7IG1hcmdpbi1yaWdodDogMDsgfVxufSIsIi5wcm9ncmVzcy1saW5lLCAucHJvZ3Jlc3MtbGluZTpiZWZvcmUge1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cblxuLnByb2dyZXNzLWxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNkNGZjO1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMztcbn1cblxuLnByb2dyZXNzLWxpbmU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgY29udGVudDogXCJcIjtcbiAgLXdlYmtpdC1hbmltYXRpb246IHJ1bm5pbmctcHJvZ3Jlc3MgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBydW5uaW5nLXByb2dyZXNzIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgaW5maW5pdGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBydW5uaW5nLXByb2dyZXNzIHtcbiAgMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMDAlO1xuICB9XG4gIDUwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xuICB9XG4gIDEwMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBydW5uaW5nLXByb2dyZXNzIHtcbiAgMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMDAlO1xuICB9XG4gIDUwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAlO1xuICB9XG4gIDEwMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/progress-line/progress-line.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/progress-line/progress-line.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ProgressLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressLineComponent", function() { return ProgressLineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgressLineComponent = /** @class */ (function () {
    function ProgressLineComponent() {
    }
    ProgressLineComponent.prototype.ngOnInit = function () {
    };
    ProgressLineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-progress-line',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./progress-line.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/progress-line/progress-line.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./progress-line.component.scss */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/progress-line/progress-line.component.scss")).default]
        })
    ], ProgressLineComponent);
    return ProgressLineComponent;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/side-bar/side-bar.component.scss":
/*!**************************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/side-bar/side-bar.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bd-sidebar {\n  width: 280px;\n  position: fixed !important;\n  top: 3.8em;\n  left: 0;\n  bottom: 0;\n  z-index: 1;\n  background: #fff;\n  padding: 0;\n  transform: translateX(-100%);\n  transition-duration: 0.5s;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: transform;\n  box-shadow: 6px 0 6px rgba(0, 0, 0, 0.1);\n}\n.bd-sidebar.active {\n  transform: translateX(0);\n}\n::ng-deep body[dir=rtl] .bd-sidebar {\n  right: 0;\n  left: auto;\n  transform: translateX(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbGVnaW9uL25nLWRhc2hib2FyZC9wcm9qZWN0cy9uZy1kYXNoYm9hcmQtY29yZS9zcmMvbGliL25nNS1iYXNpYy9zY3NzL19sYXlvdXQuc2NzcyIsInByb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQ0hZO0VESVosMEJBQUE7RUFDQSxVQ0pZO0VES1osT0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLDREQUFBO0VBQ0EsOEJBQUE7RUFDQSx3Q0FBQTtBRURKO0FGR0k7RUFDSSx3QkFBQTtBRURSO0FGTUU7RUFDRSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FFSEoiLCJmaWxlIjoicHJvamVjdHMvbmctZGFzaGJvYXJkLWNvcmUvc3JjL2xpYi9uZzUtYmFzaWMvY29tcG9uZW50cy9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3Njc3MvbGF5b3V0JztcblxuLmJkLXNpZGViYXIge1xuICAgIHdpZHRoOiAkc2lkZWJhcl93aWR0aDtcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgICB0b3A6ICRuYXZiYXJfaGVpZ2h0O1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjVzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgYm94LXNoYWRvdzogNnB4IDAgNnB4IHJnYmEoMCwwLDAsLjEpO1xuXG4gICAgJi5hY3RpdmV7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG59XG5cbjo6bmctZGVlcCBib2R5W2Rpcj1cInJ0bFwiXSB7XG4gIC5iZC1zaWRlYmFye1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB9ICAgIFxufVxuIiwiJHNpZGViYXJfd2lkdGg6IDI4MHB4O1xuJG5hdmJhcl9oZWlnaHQ6IDMuOGVtOyIsIi5iZC1zaWRlYmFyIHtcbiAgd2lkdGg6IDI4MHB4O1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgdG9wOiAzLjhlbTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgYm94LXNoYWRvdzogNnB4IDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5iZC1zaWRlYmFyLmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuOjpuZy1kZWVwIGJvZHlbZGlyPXJ0bF0gLmJkLXNpZGViYXIge1xuICByaWdodDogMDtcbiAgbGVmdDogYXV0bztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xufSJdfQ== */");

/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/side-bar/side-bar.component.ts":
/*!************************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/side-bar/side-bar.component.ts ***!
  \************************************************************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/configuration.service */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/configuration.service.ts");



var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(config) {
        var _this = this;
        this.config = config;
        this.sideState = true;
        this.keepOpen = false;
        this.navigation = [];
        this.config.ToggleSidebar.subscribe(function (e) {
            if (e === 'hidden' && !_this.keepOpen) {
                _this.sideState = false;
                return;
            }
            else if (e === 'show') {
                _this.sideState = true;
                return;
            }
            _this.sideState = (_this.sideState) ? false : true;
        });
    }
    SideBarComponent.prototype.ngOnInit = function () {
        this.navigation = this.config.getItems();
        var config = this.config.config;
        this.sideState = false;
        if (config.sidebar) {
            if (this.config.config.sidebar.visible) {
                this.sideState = this.config.config.sidebar.visible;
            }
        }
        if (window.innerWidth < 992) {
            this.sideState = false;
        }
    };
    SideBarComponent.ctorParameters = function () { return [
        { type: _services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"] }
    ]; };
    SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-side-bar',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./side-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/side-bar/side-bar.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./side-bar.component.scss */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/side-bar/side-bar.component.scss")).default]
        })
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/spinner/spinner.component.scss":
/*!************************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/spinner/spinner.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spinner-section-far,\n.spinner-double-section-far,\n.spinner-section-out,\n.spinner-double-section-out,\n.spinner-section-in,\n.spinner-double-section-in,\n.spinner-section,\n.spinner-double-section,\n.spinner-huge-wave-in,\n.spinner-huge-wave-out,\n.spinner-double-wave-in,\n.spinner-double-wave-out,\n.spinner-wave-in,\n.spinner-wave-out,\n.spinner-dot-out,\n.spinner-double-dot-out,\n.spinner-dot-stick,\n.spinner-double-dot-stick,\n.spinner-dot-in,\n.spinner-double-dot-in {\n  display: block;\n  position: fixed;\n  bottom: 25px;\n  right: 25px;\n  opacity: 0.7;\n  z-index: 99999;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 3.125px solid #aaa;\n  -webkit-animation: spinner 1.2s linear infinite;\n          animation: spinner 1.2s linear infinite;\n}\n\n@-webkit-keyframes spinner {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spinner {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* Dots */\n\n.spinner-dot-out:before,\n.spinner-double-dot-out:before,\n.spinner-dot-stick:before,\n.spinner-double-dot-stick:before,\n.spinner-dot-in:before,\n.spinner-dot-out:after,\n.spinner-double-dot-out:after,\n.spinner-dot-stick:after,\n.spinner-double-dot-stick:after,\n.spinner-dot-in:after,\n.spinner-double-dot-in:before,\n.spinner-double-dot-in:after {\n  content: \"\";\n  position: absolute;\n  top: 6.25px;\n  left: 21.875px;\n  width: 6.25px;\n  height: 6.25px;\n  border-radius: 50%;\n  background: tomato;\n}\n\n.spinner-dot-out:after,\n.spinner-double-dot-out:after,\n.spinner-dot-stick:after,\n.spinner-double-dot-stick:after,\n.spinner-dot-in:after,\n.spinner-double-dot-in:after {\n  top: auto;\n  bottom: 6.25px;\n}\n\n.spinner-dot-in:after {\n  display: none;\n}\n\n.spinner-dot-stick:before,\n.spinner-dot-stick:after,\n.spinner-double-dot-stick:before,\n.spinner-double-dot-stick:after {\n  top: -6.25px;\n}\n\n.spinner-dot-stick:after,\n.spinner-double-dot-stick:after {\n  top: auto;\n  bottom: -6.25px;\n}\n\n.spinner-dot-stick:after {\n  display: none;\n}\n\n.spinner-dot-out:before,\n.spinner-dot-out:after,\n.spinner-double-dot-out:before,\n.spinner-double-dot-out:after {\n  top: -12.5px;\n}\n\n.spinner-dot-out:after,\n.spinner-double-dot-out:after {\n  top: auto;\n  bottom: -12.5px;\n}\n\n.spinner-dot-out:after {\n  display: none;\n}\n\n/* Waves */\n\n.spinner-wave-out {\n  box-shadow: -1.5625px -1.5625px 0 1.5625px tomato;\n}\n\n.spinner-wave-in {\n  box-shadow: inset -1.5625px -1.5625px 0 1.5625px tomato;\n}\n\n.spinner-double-wave-out {\n  box-shadow: -1.5625px -1.5625px 0 1.5625px tomato, 1.5625px 1.5625px 0 1.5625px tomato;\n}\n\n.spinner-double-wave-in {\n  box-shadow: inset -1.5625px -1.5625px 0 1.5625px tomato, inset 1.5625px 1.5625px 0 1.5625px tomato;\n}\n\n.spinner-huge-wave-out {\n  box-shadow: -1.5625px -1.5625px 0 6.25px tomato;\n}\n\n.spinner-huge-wave-in {\n  box-shadow: inset -1.5625px -1.5625px 0 6.25px tomato;\n}\n\n/* Sections */\n\n.spinner-section-far:before,\n.spinner-double-section-far:before,\n.spinner-section-out:before,\n.spinner-double-section-out:before,\n.spinner-section-in:before,\n.spinner-double-section-in:before,\n.spinner-section:before,\n.spinner-section-far:after,\n.spinner-double-section-far:after,\n.spinner-section-out:after,\n.spinner-double-section-out:after,\n.spinner-section-in:after,\n.spinner-double-section-in:after,\n.spinner-section:after,\n.spinner-double-section:before,\n.spinner-double-section:after {\n  content: \"\";\n  position: absolute;\n  top: -3.125px;\n  left: -3.125px;\n  display: block;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 3.125px solid transparent;\n  border-top-color: tomato;\n}\n\n.spinner-section-far:after,\n.spinner-double-section-far:after,\n.spinner-section-out:after,\n.spinner-double-section-out:after,\n.spinner-section-in:after,\n.spinner-double-section-in:after,\n.spinner-section:after,\n.spinner-double-section:after {\n  border-top-color: transparent;\n  border-bottom-color: tomato;\n}\n\n.spinner-section:after {\n  display: none;\n}\n\n.spinner-section-in:before,\n.spinner-section-in:after,\n.spinner-double-section-in:before,\n.spinner-double-section-in:after {\n  top: 0;\n  left: 0;\n  width: 43.75px;\n  height: 43.75px;\n}\n\n.spinner-section-in:after {\n  display: none;\n}\n\n.spinner-section-out:before,\n.spinner-section-out:after,\n.spinner-double-section-out:before,\n.spinner-double-section-out:after {\n  top: -6.25px;\n  left: -6.25px;\n  width: 56.25px;\n  height: 56.25px;\n}\n\n.spinner-section-out:after {\n  display: none;\n}\n\n.spinner-section-far:before,\n.spinner-section-far:after,\n.spinner-double-section-far:before,\n.spinner-double-section-far:after {\n  top: -9.375px;\n  left: -9.375px;\n  width: 62.5px;\n  height: 62.5px;\n}\n\n.spinner-section-far:after {\n  display: none;\n}\n\n/* --- */\n\nbody {\n  background: #303030;\n  overflow: hidden;\n}\n\n.container {\n  width: 360px;\n  margin: 30px auto;\n}\n\nspan {\n  margin: 10px;\n}\n\nspan:nth-child(4n+1) {\n  clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbmctZGFzaGJvYXJkLWNvcmUvc3JjL2xpYi9uZzUtYmFzaWMvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FWSztFQVdMLFlBWEs7RUFZTCxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtBQ2NGOztBRFpBO0VBQ0U7SUFBSyxvQkFBQTtFQ2dCTDtFRGZBO0lBQU8seUJBQUE7RUNrQlA7QUFDRjs7QURyQkE7RUFDRTtJQUFLLG9CQUFBO0VDZ0JMO0VEZkE7SUFBTyx5QkFBQTtFQ2tCUDtBQUNGOztBRGhCQSxTQUFBOztBQUtFOzs7Ozs7Ozs7Ozs7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFyQ0s7QUM2RFQ7O0FEdEJFOzs7Ozs7RUFDRSxTQUFBO0VBQ0EsY0FBQTtBQzZCSjs7QUR0QkU7RUFDRSxhQUFBO0FDeUJKOztBRGxCRTs7OztFQUVFLFlBQUE7QUN1Qko7O0FEckJFOztFQUNFLFNBQUE7RUFDQSxlQUFBO0FDd0JKOztBRGpCRTtFQUNFLGFBQUE7QUNvQko7O0FEYkU7Ozs7RUFFRSxZQUFBO0FDa0JKOztBRGhCRTs7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQ21CSjs7QURaRTtFQUNFLGFBQUE7QUNlSjs7QURYQSxVQUFBOztBQUVBO0VBR0UsaURBQUE7QUNXRjs7QURUQTtFQUdFLHVEQUFBO0FDVUY7O0FEUkE7RUFHRSxzRkFBQTtBQ1NGOztBRE5BO0VBR0Usa0dBQUE7QUNPRjs7QURIQTtFQUdFLCtDQUFBO0FDSUY7O0FERkE7RUFHRSxxREFBQTtBQ0dGOztBREFBLGFBQUE7O0FBS0U7Ozs7Ozs7Ozs7Ozs7Ozs7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQTdJRztFQThJSCxZQTlJRztFQStJSCxrQkFBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBbkpLO0FDZ0tUOztBRFhFOzs7Ozs7OztFQUNFLDZCQUFBO0VBQ0EsMkJBdkpLO0FDMktUOztBRGJFO0VBQ0UsYUFBQTtBQ2dCSjs7QURURTs7OztFQUVFLE1BQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNjSjs7QURQRTtFQUNFLGFBQUE7QUNVSjs7QURIRTs7OztFQUVFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNRSjs7QURERTtFQUNFLGFBQUE7QUNJSjs7QURHRTs7OztFQUVFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNFSjs7QURLRTtFQUNFLGFBQUE7QUNGSjs7QURNQSxRQUFBOztBQUdBO0VBQU8sbUJBQUE7RUFBcUIsZ0JBQUE7QUNINUI7O0FESUE7RUFBYSxZQUFBO0VBQThCLGlCQUFBO0FDQzNDOztBREFBO0VBQU8sWUFISDtBQ09KOztBREptQjtFQUF3QixXQUFBO0FDTzNDIiwiZmlsZSI6InByb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGluYWN0aXZlOiAjYWFhO1xuJGFjdGl2ZTogdG9tYXRvO1xuJHNwZWVkOiAxLjJzO1xuJHNpemU6IDUwcHg7XG4kdW5pdDogJHNpemUgLyAxNjtcblxuJXNwaW5uZXIgeyAgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjVweDtcbiAgcmlnaHQ6IDI1cHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgei1pbmRleDogOTk5OTk7XG4gIHdpZHRoOiAkc2l6ZTtcbiAgaGVpZ2h0OiAkc2l6ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6ICR1bml0IHNvbGlkICRpbmFjdGl2ZTtcbiAgYW5pbWF0aW9uOiBzcGlubmVyICRzcGVlZCBsaW5lYXIgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIHNwaW5uZXIge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDApOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi8qIERvdHMgKi9cbiVzcGlubmVyLWRvdWJsZS1kb3QtaW4sXG4uc3Bpbm5lci1kb3VibGUtZG90LWluIHtcbiAgQGV4dGVuZCAlc3Bpbm5lcjtcbiAgXG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAoJHVuaXQqMik7XG4gICAgbGVmdDogKCRzaXplLzIgLSR1bml0KTtcbiAgICB3aWR0aDogKCR1bml0KjIpO1xuICAgIGhlaWdodDogKCR1bml0KjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAkYWN0aXZlO1xuICB9XG4gICY6YWZ0ZXIge1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206ICgkdW5pdCoyKTtcbiAgfVxufVxuJXNwaW5uZXItZG90LWluLFxuLnNwaW5uZXItZG90LWluIHtcbiAgQGV4dGVuZCAlc3Bpbm5lci1kb3VibGUtZG90LWluO1xuICBcbiAgJjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuJXNwaW5uZXItZG91YmxlLWRvdC1zdGljayxcbi5zcGlubmVyLWRvdWJsZS1kb3Qtc3RpY2sge1xuICBAZXh0ZW5kICVzcGlubmVyLWRvdWJsZS1kb3QtaW47XG4gIFxuICAmOmJlZm9yZSxcbiAgJjphZnRlciB7XG4gICAgdG9wOiAoLSR1bml0KjIpO1xuICB9XG4gICY6YWZ0ZXIge1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206ICgtJHVuaXQqMik7XG4gIH1cbn1cbiVzcGlubmVyLWRvdC1zdGljayxcbi5zcGlubmVyLWRvdC1zdGljayB7XG4gIEBleHRlbmQgJXNwaW5uZXItZG91YmxlLWRvdC1zdGljaztcbiAgXG4gICY6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiVzcGlubmVyLWRvdWJsZS1kb3Qtb3V0LFxuLnNwaW5uZXItZG91YmxlLWRvdC1vdXQge1xuICBAZXh0ZW5kICVzcGlubmVyLWRvdWJsZS1kb3QtaW47XG4gIFxuICAmOmJlZm9yZSxcbiAgJjphZnRlciB7XG4gICAgdG9wOiAoLSR1bml0KjQpO1xuICB9XG4gICY6YWZ0ZXIge1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206ICgtJHVuaXQqNCk7XG4gIH1cbn1cbiVzcGlubmVyLWRvdC1vdXQsXG4uc3Bpbm5lci1kb3Qtb3V0IHtcbiAgQGV4dGVuZCAlc3Bpbm5lci1kb3VibGUtZG90LW91dDtcbiAgXG4gICY6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLyogV2F2ZXMgKi9cblxuJXNwaW5uZXItd2F2ZS1vdXQsXG4uc3Bpbm5lci13YXZlLW91dCB7XG4gIEBleHRlbmQgJXNwaW5uZXI7XG4gIGJveC1zaGFkb3c6ICgtJHVuaXQvMikgKC0kdW5pdC8yKSAwICgkdW5pdC8yKSAkYWN0aXZlOyBcbn1cbiVzcGlubmVyLXdhdmUtaW4sXG4uc3Bpbm5lci13YXZlLWluIHtcbiAgQGV4dGVuZCAlc3Bpbm5lcjtcbiAgYm94LXNoYWRvdzogaW5zZXQgKC0kdW5pdC8yKSAoLSR1bml0LzIpIDAgKCR1bml0LzIpICRhY3RpdmU7XG59XG4lc3Bpbm5lci1kb3VibGUtd2F2ZS1vdXQsXG4uc3Bpbm5lci1kb3VibGUtd2F2ZS1vdXQge1xuICBAZXh0ZW5kICVzcGlubmVyO1xuICBib3gtc2hhZG93OiAoLSR1bml0LzIpICgtJHVuaXQvMikgMCAoJHVuaXQvMikgJGFjdGl2ZSxcbiAgICAgICAgICAgICAgKCR1bml0LzIpICgkdW5pdC8yKSAwICgkdW5pdC8yKSAkYWN0aXZlOyBcbn1cbiVzcGlubmVyLWRvdWJsZS13YXZlLWluLFxuLnNwaW5uZXItZG91YmxlLXdhdmUtaW4ge1xuICBAZXh0ZW5kICVzcGlubmVyO1xuICBib3gtc2hhZG93OiBpbnNldCAoLSR1bml0LzIpICgtJHVuaXQvMikgMCAoJHVuaXQvMikgJGFjdGl2ZSxcbiAgICAgICAgICAgICAgaW5zZXQgKCR1bml0LzIpICgkdW5pdC8yKSAwICgkdW5pdC8yKSAkYWN0aXZlO1xufVxuXG4lc3Bpbm5lci1odWdlLXdhdmUtb3V0LFxuLnNwaW5uZXItaHVnZS13YXZlLW91dCB7XG4gIEBleHRlbmQgJXNwaW5uZXI7XG4gIGJveC1zaGFkb3c6ICgtJHVuaXQvMikgKC0kdW5pdC8yKSAwICgkdW5pdCoyKSAkYWN0aXZlO1xufVxuJXNwaW5uZXItaHVnZS13YXZlLWluLFxuLnNwaW5uZXItaHVnZS13YXZlLWluIHtcbiAgQGV4dGVuZCAlc3Bpbm5lcjtcbiAgYm94LXNoYWRvdzogaW5zZXQgKC0kdW5pdC8yKSAoLSR1bml0LzIpIDAgKCR1bml0KjIpICRhY3RpdmU7XG59XG5cbi8qIFNlY3Rpb25zICovXG4lc3Bpbm5lci1kb3VibGUtc2VjdGlvbixcbi5zcGlubmVyLWRvdWJsZS1zZWN0aW9uIHtcbiAgQGV4dGVuZCAlc3Bpbm5lcjtcbiAgXG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtJHVuaXQ7XG4gICAgbGVmdDogLSR1bml0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6ICR1bml0IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3AtY29sb3I6ICRhY3RpdmU7XG4gIH1cbiAgJjphZnRlciB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGFjdGl2ZTtcbiAgfVxufVxuJXNwaW5uZXItc2VjdGlvbixcbi5zcGlubmVyLXNlY3Rpb24ge1xuICBAZXh0ZW5kICVzcGlubmVyLWRvdWJsZS1zZWN0aW9uO1xuICBcbiAgJjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuJXNwaW5uZXItZG91YmxlLXNlY3Rpb24taW4sXG4uc3Bpbm5lci1kb3VibGUtc2VjdGlvbi1pbiB7XG4gIEBleHRlbmQgJXNwaW5uZXItZG91YmxlLXNlY3Rpb247XG4gIFxuICAmOmJlZm9yZSxcbiAgJjphZnRlciB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6ICgkc2l6ZSAtICR1bml0KjIpO1xuICAgIGhlaWdodDogKCRzaXplIC0gJHVuaXQqMik7XG4gIH1cbn1cbiVzcGlubmVyLXNlY3Rpb24taW4sXG4uc3Bpbm5lci1zZWN0aW9uLWluIHtcbiAgQGV4dGVuZCAlc3Bpbm5lci1kb3VibGUtc2VjdGlvbi1pbjtcbiAgXG4gICY6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiVzcGlubmVyLWRvdWJsZS1zZWN0aW9uLW91dCxcbi5zcGlubmVyLWRvdWJsZS1zZWN0aW9uLW91dCB7XG4gIEBleHRlbmQgJXNwaW5uZXItZG91YmxlLXNlY3Rpb247XG4gIFxuICAmOmJlZm9yZSxcbiAgJjphZnRlciB7XG4gICAgdG9wOiAoJHVuaXQqLTIpO1xuICAgIGxlZnQ6ICgkdW5pdCotMik7XG4gICAgd2lkdGg6ICgkc2l6ZSArICR1bml0KjIpO1xuICAgIGhlaWdodDogKCRzaXplICsgJHVuaXQqMik7XG4gIH1cbn1cbiVzcGlubmVyLXNlY3Rpb24tb3V0LFxuLnNwaW5uZXItc2VjdGlvbi1vdXQge1xuICBAZXh0ZW5kICVzcGlubmVyLWRvdWJsZS1zZWN0aW9uLW91dDtcbiAgXG4gICY6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiVzcGlubmVyLWRvdWJsZS1zZWN0aW9uLWZhcixcbi5zcGlubmVyLWRvdWJsZS1zZWN0aW9uLWZhciB7XG4gIEBleHRlbmQgJXNwaW5uZXItZG91YmxlLXNlY3Rpb247XG4gIFxuICAmOmJlZm9yZSxcbiAgJjphZnRlciB7XG4gICAgdG9wOiAoJHVuaXQqLTMpO1xuICAgIGxlZnQ6ICgkdW5pdCotMyk7XG4gICAgd2lkdGg6ICgkc2l6ZSArICR1bml0KjQpO1xuICAgIGhlaWdodDogKCRzaXplICsgJHVuaXQqNCk7XG4gIH1cbn1cbiVzcGlubmVyLXNlY3Rpb24tZmFyLFxuLnNwaW5uZXItc2VjdGlvbi1mYXIge1xuICBAZXh0ZW5kICVzcGlubmVyLWRvdWJsZS1zZWN0aW9uLWZhcjtcbiAgXG4gICY6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLyogLS0tICovXG4kbjogNDtcbiRtOiAxMHB4O1xuYm9keSB7IGJhY2tncm91bmQ6ICMzMDMwMzA7IG92ZXJmbG93OiBoaWRkZW47IH1cbi5jb250YWluZXIgeyB3aWR0aDogKCRzaXplICsgJG0gKiA0KSAqICRuOyBtYXJnaW46IDMwcHggYXV0bzsgfVxuc3BhbiB7IG1hcmdpbjogJG07ICY6bnRoLWNoaWxkKCN7JG59bisxKSB7IGNsZWFyOiBib3RoOyB9IH0iLCIuc3Bpbm5lci1zZWN0aW9uLWZhcixcbi5zcGlubmVyLWRvdWJsZS1zZWN0aW9uLWZhcixcbi5zcGlubmVyLXNlY3Rpb24tb3V0LFxuLnNwaW5uZXItZG91YmxlLXNlY3Rpb24tb3V0LFxuLnNwaW5uZXItc2VjdGlvbi1pbixcbi5zcGlubmVyLWRvdWJsZS1zZWN0aW9uLWluLFxuLnNwaW5uZXItc2VjdGlvbixcbi5zcGlubmVyLWRvdWJsZS1zZWN0aW9uLFxuLnNwaW5uZXItaHVnZS13YXZlLWluLFxuLnNwaW5uZXItaHVnZS13YXZlLW91dCxcbi5zcGlubmVyLWRvdWJsZS13YXZlLWluLFxuLnNwaW5uZXItZG91YmxlLXdhdmUtb3V0LFxuLnNwaW5uZXItd2F2ZS1pbixcbi5zcGlubmVyLXdhdmUtb3V0LFxuLnNwaW5uZXItZG90LW91dCxcbi5zcGlubmVyLWRvdWJsZS1kb3Qtb3V0LFxuLnNwaW5uZXItZG90LXN0aWNrLFxuLnNwaW5uZXItZG91YmxlLWRvdC1zdGljayxcbi5zcGlubmVyLWRvdC1pbixcbi5zcGlubmVyLWRvdWJsZS1kb3QtaW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDI1cHg7XG4gIHJpZ2h0OiAyNXB4O1xuICBvcGFjaXR5OiAwLjc7XG4gIHotaW5kZXg6IDk5OTk5O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMy4xMjVweCBzb2xpZCAjYWFhO1xuICBhbmltYXRpb246IHNwaW5uZXIgMS4ycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3Bpbm5lciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4vKiBEb3RzICovXG4uc3Bpbm5lci1kb3Qtb3V0OmJlZm9yZSxcbi5zcGlubmVyLWRvdWJsZS1kb3Qtb3V0OmJlZm9yZSxcbi5zcGlubmVyLWRvdC1zdGljazpiZWZvcmUsXG4uc3Bpbm5lci1kb3VibGUtZG90LXN0aWNrOmJlZm9yZSxcbi5zcGlubmVyLWRvdC1pbjpiZWZvcmUsXG4uc3Bpbm5lci1kb3Qtb3V0OmFmdGVyLFxuLnNwaW5uZXItZG91YmxlLWRvdC1vdXQ6YWZ0ZXIsXG4uc3Bpbm5lci1kb3Qtc3RpY2s6YWZ0ZXIsXG4uc3Bpbm5lci1kb3VibGUtZG90LXN0aWNrOmFmdGVyLFxuLnNwaW5uZXItZG90LWluOmFmdGVyLFxuLnNwaW5uZXItZG91YmxlLWRvdC1pbjpiZWZvcmUsXG4uc3Bpbm5lci1kb3VibGUtZG90LWluOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYuMjVweDtcbiAgbGVmdDogMjEuODc1cHg7XG4gIHdpZHRoOiA2LjI1cHg7XG4gIGhlaWdodDogNi4yNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHRvbWF0bztcbn1cbi5zcGlubmVyLWRvdC1vdXQ6YWZ0ZXIsXG4uc3Bpbm5lci1kb3VibGUtZG90LW91dDphZnRlcixcbi5zcGlubmVyLWRvdC1zdGljazphZnRlcixcbi5zcGlubmVyLWRvdWJsZS1kb3Qtc3RpY2s6YWZ0ZXIsXG4uc3Bpbm5lci1kb3QtaW46YWZ0ZXIsXG4uc3Bpbm5lci1kb3VibGUtZG90LWluOmFmdGVyIHtcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IDYuMjVweDtcbn1cblxuLnNwaW5uZXItZG90LWluOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNwaW5uZXItZG90LXN0aWNrOmJlZm9yZSxcbi5zcGlubmVyLWRvdC1zdGljazphZnRlcixcbi5zcGlubmVyLWRvdWJsZS1kb3Qtc3RpY2s6YmVmb3JlLFxuLnNwaW5uZXItZG91YmxlLWRvdC1zdGljazphZnRlciB7XG4gIHRvcDogLTYuMjVweDtcbn1cbi5zcGlubmVyLWRvdC1zdGljazphZnRlcixcbi5zcGlubmVyLWRvdWJsZS1kb3Qtc3RpY2s6YWZ0ZXIge1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogLTYuMjVweDtcbn1cblxuLnNwaW5uZXItZG90LXN0aWNrOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNwaW5uZXItZG90LW91dDpiZWZvcmUsXG4uc3Bpbm5lci1kb3Qtb3V0OmFmdGVyLFxuLnNwaW5uZXItZG91YmxlLWRvdC1vdXQ6YmVmb3JlLFxuLnNwaW5uZXItZG91YmxlLWRvdC1vdXQ6YWZ0ZXIge1xuICB0b3A6IC0xMi41cHg7XG59XG4uc3Bpbm5lci1kb3Qtb3V0OmFmdGVyLFxuLnNwaW5uZXItZG91YmxlLWRvdC1vdXQ6YWZ0ZXIge1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogLTEyLjVweDtcbn1cblxuLnNwaW5uZXItZG90LW91dDphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIFdhdmVzICovXG4uc3Bpbm5lci13YXZlLW91dCB7XG4gIGJveC1zaGFkb3c6IC0xLjU2MjVweCAtMS41NjI1cHggMCAxLjU2MjVweCB0b21hdG87XG59XG5cbi5zcGlubmVyLXdhdmUtaW4ge1xuICBib3gtc2hhZG93OiBpbnNldCAtMS41NjI1cHggLTEuNTYyNXB4IDAgMS41NjI1cHggdG9tYXRvO1xufVxuXG4uc3Bpbm5lci1kb3VibGUtd2F2ZS1vdXQge1xuICBib3gtc2hhZG93OiAtMS41NjI1cHggLTEuNTYyNXB4IDAgMS41NjI1cHggdG9tYXRvLCAxLjU2MjVweCAxLjU2MjVweCAwIDEuNTYyNXB4IHRvbWF0bztcbn1cblxuLnNwaW5uZXItZG91YmxlLXdhdmUtaW4ge1xuICBib3gtc2hhZG93OiBpbnNldCAtMS41NjI1cHggLTEuNTYyNXB4IDAgMS41NjI1cHggdG9tYXRvLCBpbnNldCAxLjU2MjVweCAxLjU2MjVweCAwIDEuNTYyNXB4IHRvbWF0bztcbn1cblxuLnNwaW5uZXItaHVnZS13YXZlLW91dCB7XG4gIGJveC1zaGFkb3c6IC0xLjU2MjVweCAtMS41NjI1cHggMCA2LjI1cHggdG9tYXRvO1xufVxuXG4uc3Bpbm5lci1odWdlLXdhdmUtaW4ge1xuICBib3gtc2hhZG93OiBpbnNldCAtMS41NjI1cHggLTEuNTYyNXB4IDAgNi4yNXB4IHRvbWF0bztcbn1cblxuLyogU2VjdGlvbnMgKi9cbi5zcGlubmVyLXNlY3Rpb24tZmFyOmJlZm9yZSxcbi5zcGlubmVyLWRvdWJsZS1zZWN0aW9uLWZhcjpiZWZvcmUsXG4uc3Bpbm5lci1zZWN0aW9uLW91dDpiZWZvcmUsXG4uc3Bpbm5lci1kb3VibGUtc2VjdGlvbi1vdXQ6YmVmb3JlLFxuLnNwaW5uZXItc2VjdGlvbi1pbjpiZWZvcmUsXG4uc3Bpbm5lci1kb3VibGUtc2VjdGlvbi1pbjpiZWZvcmUsXG4uc3Bpbm5lci1zZWN0aW9uOmJlZm9yZSxcbi5zcGlubmVyLXNlY3Rpb24tZmFyOmFmdGVyLFxuLnNwaW5uZXItZG91YmxlLXNlY3Rpb24tZmFyOmFmdGVyLFxuLnNwaW5uZXItc2VjdGlvbi1vdXQ6YWZ0ZXIsXG4uc3Bpbm5lci1kb3VibGUtc2VjdGlvbi1vdXQ6YWZ0ZXIsXG4uc3Bpbm5lci1zZWN0aW9uLWluOmFmdGVyLFxuLnNwaW5uZXItZG91YmxlLXNlY3Rpb24taW46YWZ0ZXIsXG4uc3Bpbm5lci1zZWN0aW9uOmFmdGVyLFxuLnNwaW5uZXItZG91YmxlLXNlY3Rpb246YmVmb3JlLFxuLnNwaW5uZXItZG91YmxlLXNlY3Rpb246YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTMuMTI1cHg7XG4gIGxlZnQ6IC0zLjEyNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDMuMTI1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3AtY29sb3I6IHRvbWF0bztcbn1cbi5zcGlubmVyLXNlY3Rpb24tZmFyOmFmdGVyLFxuLnNwaW5uZXItZG91YmxlLXNlY3Rpb24tZmFyOmFmdGVyLFxuLnNwaW5uZXItc2VjdGlvbi1vdXQ6YWZ0ZXIsXG4uc3Bpbm5lci1kb3VibGUtc2VjdGlvbi1vdXQ6YWZ0ZXIsXG4uc3Bpbm5lci1zZWN0aW9uLWluOmFmdGVyLFxuLnNwaW5uZXItZG91YmxlLXNlY3Rpb24taW46YWZ0ZXIsXG4uc3Bpbm5lci1zZWN0aW9uOmFmdGVyLFxuLnNwaW5uZXItZG91YmxlLXNlY3Rpb246YWZ0ZXIge1xuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdG9tYXRvO1xufVxuXG4uc3Bpbm5lci1zZWN0aW9uOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNwaW5uZXItc2VjdGlvbi1pbjpiZWZvcmUsXG4uc3Bpbm5lci1zZWN0aW9uLWluOmFmdGVyLFxuLnNwaW5uZXItZG91YmxlLXNlY3Rpb24taW46YmVmb3JlLFxuLnNwaW5uZXItZG91YmxlLXNlY3Rpb24taW46YWZ0ZXIge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA0My43NXB4O1xuICBoZWlnaHQ6IDQzLjc1cHg7XG59XG5cbi5zcGlubmVyLXNlY3Rpb24taW46YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc3Bpbm5lci1zZWN0aW9uLW91dDpiZWZvcmUsXG4uc3Bpbm5lci1zZWN0aW9uLW91dDphZnRlcixcbi5zcGlubmVyLWRvdWJsZS1zZWN0aW9uLW91dDpiZWZvcmUsXG4uc3Bpbm5lci1kb3VibGUtc2VjdGlvbi1vdXQ6YWZ0ZXIge1xuICB0b3A6IC02LjI1cHg7XG4gIGxlZnQ6IC02LjI1cHg7XG4gIHdpZHRoOiA1Ni4yNXB4O1xuICBoZWlnaHQ6IDU2LjI1cHg7XG59XG5cbi5zcGlubmVyLXNlY3Rpb24tb3V0OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNwaW5uZXItc2VjdGlvbi1mYXI6YmVmb3JlLFxuLnNwaW5uZXItc2VjdGlvbi1mYXI6YWZ0ZXIsXG4uc3Bpbm5lci1kb3VibGUtc2VjdGlvbi1mYXI6YmVmb3JlLFxuLnNwaW5uZXItZG91YmxlLXNlY3Rpb24tZmFyOmFmdGVyIHtcbiAgdG9wOiAtOS4zNzVweDtcbiAgbGVmdDogLTkuMzc1cHg7XG4gIHdpZHRoOiA2Mi41cHg7XG4gIGhlaWdodDogNjIuNXB4O1xufVxuXG4uc3Bpbm5lci1zZWN0aW9uLWZhcjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIC0tLSAqL1xuYm9keSB7XG4gIGJhY2tncm91bmQ6ICMzMDMwMzA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMzYwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufVxuXG5zcGFuIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuc3BhbjpudGgtY2hpbGQoNG4rMSkge1xuICBjbGVhcjogYm90aDtcbn0iXX0= */");

/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/spinner/spinner.component.ts":
/*!**********************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/spinner/spinner.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
        this.level = '';
        this.isLow = false;
        this.isHigh = false;
    }
    SpinnerComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SpinnerComponent.prototype, "level", void 0);
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-window-spinner',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/spinner/spinner.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinner.component.scss */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/spinner/spinner.component.scss")).default]
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-icon-box/ui-icon-box.component.scss":
/*!********************************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-icon-box/ui-icon-box.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * Retrieves a color value from the $material-colors Sass map\n * Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette/\n *\n * @function\n * @param {string} color-name             - quoted, lower-case, dasherized color\n *                                          name (e.g. 'pink', 'amber')\n * @param {string} [color-variant='500']  - quoted, lowercase color variant (e.g.\n *                                          '200', 'a100')\n */\nh2 {\n  font-size: 20px;\n}\np {\n  margin-bottom: 0;\n}\n.value {\n  font-size: 35px;\n  color: #aaa;\n  font-weight: 500;\n  padding-right: 10px;\n}\n@media (max-width: 575.98px) {\n  h2 {\n    font-size: 16px;\n  }\n\n  p {\n    font-size: 13px;\n  }\n\n  .value {\n    font-size: 25px;\n  }\n}\n.app-statistics {\n  height: 85%;\n}\n.align-items-center {\n  text-align: center;\n}\n.icon {\n  font-size: 38px;\n}\n.box-wrapper {\n  display: block;\n}\n.box-wrapper:hover {\n  text-decoration: none;\n  cursor: pointer;\n  background: rgba(230, 230, 230, 0.7);\n  transition: color 2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL25vZGVfbW9kdWxlcy9zYXNzLW1hdGVyaWFsLWNvbG9ycy9zYXNzL19zYXNzLW1hdGVyaWFsLWNvbG9ycy1mdW5jdGlvbi5zY3NzIiwiL1VzZXJzL2xlZ2lvbi9uZy1kYXNoYm9hcmQvcHJvamVjdHMvbmctZGFzaGJvYXJkLWNvcmUvc3JjL2xpYi9uZzUtYmFzaWMvY29tcG9uZW50cy91aS1pY29uLWJveC91aS1pY29uLWJveC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvdWktaWNvbi1ib3gvdWktaWNvbi1ib3guY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbGVnaW9uL25nLWRhc2hib2FyZC9wcm9qZWN0cy9uZy1kYXNoYm9hcmQtY29yZS9zcmMvbGliL25nNS1iYXNpYy9zY3NzL192YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7Ozs7Ozs7OztFQUFBO0FDQ0E7RUFDRSxlQUFBO0FDU0Y7QURQQTtFQUNFLGdCQUFBO0FDVUY7QURSQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1dGO0FEVEE7RUFDRTtJQUNFLGVBQUE7RUNZRjs7RURWQTtJQUNJLGVBQUE7RUNhSjs7RURYQTtJQUNFLGVBQUE7RUNjRjtBQUNGO0FEWkE7RUFDRSxXQUFBO0FDY0Y7QURYQTtFQUNFLGtCQUFBO0FDY0Y7QURYQTtFQUNFLGVBQUE7QUNjRjtBRFpBO0VBT0UsY0FBQTtBQ1NGO0FEZkU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0U1Qkk7RUY2Qkosb0JBQUE7QUNpQkoiLCJmaWxlIjoicHJvamVjdHMvbmctZGFzaGJvYXJkLWNvcmUvc3JjL2xpYi9uZzUtYmFzaWMvY29tcG9uZW50cy91aS1pY29uLWJveC91aS1pY29uLWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3Nhc3MtbWF0ZXJpYWwtY29sb3JzLW1hcCc7XG4vKipcbiAqIFJldHJpZXZlcyBhIGNvbG9yIHZhbHVlIGZyb20gdGhlICRtYXRlcmlhbC1jb2xvcnMgU2FzcyBtYXBcbiAqIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9uaWxza2FzcGVyc3Nvbi9Hb29nbGUtTWF0ZXJpYWwtVUktQ29sb3ItUGFsZXR0ZS9cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvci1uYW1lICAgICAgICAgICAgIC0gcXVvdGVkLCBsb3dlci1jYXNlLCBkYXNoZXJpemVkIGNvbG9yXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgKGUuZy4gJ3BpbmsnLCAnYW1iZXInKVxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2xvci12YXJpYW50PSc1MDAnXSAgLSBxdW90ZWQsIGxvd2VyY2FzZSBjb2xvciB2YXJpYW50IChlLmcuXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcyMDAnLCAnYTEwMCcpXG4gKi9cbkBmdW5jdGlvbiBtYXRlcmlhbC1jb2xvcigkY29sb3ItbmFtZSwgJGNvbG9yLXZhcmlhbnQ6ICc1MDAnKSB7XG4gICRjb2xvcjogbWFwLWdldChtYXAtZ2V0KCRtYXRlcmlhbC1jb2xvcnMsICRjb2xvci1uYW1lKSwkY29sb3ItdmFyaWFudCk7XG4gIEBpZiAkY29sb3Ige1xuICAgIEByZXR1cm4gJGNvbG9yO1xuICB9IEBlbHNlIHtcbiAgICAvLyBMaWJzYXNzIHN0aWxsIGRvZXNuJ3Qgc2VlbSB0byBzdXBwb3J0IEBlcnJvclxuICAgIEB3YXJuIFwiPT4gRVJST1I6IENPTE9SIE5PVCBGT1VORCEgPD0gfCBZb3VyICRjb2xvci1uYW1lLCAkY29sb3ItdmFyaWFudCBjb21iaW5hdGlvbiBkaWQgbm90IG1hdGNoIGFueSBvZiB0aGUgdmFsdWVzIGluIHRoZSAkbWF0ZXJpYWwtY29sb3JzIG1hcC5cIjtcbiAgfVxufVxuIiwiQGltcG9ydCAnLi4vLi4vc2Nzcy9faW5qZWN0cyc7XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxucHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi52YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6ICNhYWE7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHsgXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgcHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuICAudmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxufVxuLmFwcC1zdGF0aXN0aWNzIHtcbiAgaGVpZ2h0OiA4NSU7IFxufVxuXG4uYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzhweDtcbn1cbi5ib3gtd3JhcHBlciB7XG4gICY6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogJGhvdmVyO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDJzO1xuICB9XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIiwiLyoqXG4gKiBSZXRyaWV2ZXMgYSBjb2xvciB2YWx1ZSBmcm9tIHRoZSAkbWF0ZXJpYWwtY29sb3JzIFNhc3MgbWFwXG4gKiBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vbmlsc2thc3BlcnNzb24vR29vZ2xlLU1hdGVyaWFsLVVJLUNvbG9yLVBhbGV0dGUvXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3ItbmFtZSAgICAgICAgICAgICAtIHF1b3RlZCwgbG93ZXItY2FzZSwgZGFzaGVyaXplZCBjb2xvclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lIChlLmcuICdwaW5rJywgJ2FtYmVyJylcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29sb3ItdmFyaWFudD0nNTAwJ10gIC0gcXVvdGVkLCBsb3dlcmNhc2UgY29sb3IgdmFyaWFudCAoZS5nLlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMjAwJywgJ2ExMDAnKVxuICovXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxucCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi52YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgY29sb3I6ICNhYWE7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICBoMiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG5cbiAgLnZhbHVlIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbn1cbi5hcHAtc3RhdGlzdGljcyB7XG4gIGhlaWdodDogODUlO1xufVxuXG4uYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzhweDtcbn1cblxuLmJveC13cmFwcGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYm94LXdyYXBwZXI6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDIzMCwgMjMwLCAwLjcpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAycztcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1tYXRlcmlhbC1jb2xvcnMvc2Fzcy9zYXNzLW1hdGVyaWFsLWNvbG9ycyc7XG5cbi8vLyBEZWZhdWx0IHRoZW1lIGJhc2UgdmFyaWFibGVzXG4kbmF2aWdhdGlvbldpZHRoOiAxMDBweDtcbiRzdGF0dXNCYXJXaWR0aDogMjc1cHg7XG4kdGhlbWUtaW52ZXJzZTogICAgICAgICAgICAgd2hpdGU7XG4kdGhlbWUtY29sb3I6ICAgICAgICAgICAgICAgcmdiKDAsMjAzLDEyMik7XG4kcHJpbWFyeS10ZXh0OiAgICAgICAgICAgICAgIzIxMjEyMTtcbiRzZWNvbmRhcnktdGV4dDogICAgICAgICAgICAjNzU3NTc1O1xuJGRpdmlkZXI6ICAgICAgICAgICAgICAgICAgICNCREJEQkQ7XG4kYmFja2dyb3VuZDogICAgICAgICAgICAgICAgI0ZGRkZGRjtcbiRkaWFsZWN0OiAgICAgICAgICAgICAgICAgICBzaWx2ZXI7XG4kaG92ZXI6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMC43KTtcbiRzaGFkb3c6ICAgICAgICAgICAgICAgICAgICByZ2JhKDAsMCwwLDAuMyk7XG5cbi8vLyBOYXZpZ2F0aW9uIHZhcmlhYmxlc1xuJG5hdmlnYXRpb246ICAgICAgICAgICAgICAgICMxYTFhMWM7XG4kbmF2LWljb246ICAgICAgICAgICAgICAgICAgcmdiKDEyNywxMjcsMTI3KTtcbiRuYXYtaWNvbi1ob3ZlcjogICAgICAgICAgICByZ2IoNDksNTIsNTMpO1xuJG5hdi1pY29uLWFjdGl2ZTogICAgICAgICAgIHJnYigxNzAsMTcwLDE3MCk7XG5cblxuJGFwcGluZm86ICAgICAgICAgICAgICAgICAgICNlZWYxZjg7XG4kY29udGFpbmVyOiAgICAgICAgICAgICAgICAgcmdiKDIzOCwyNDEsMjQ3KTtcbiRzbW9vdGhCb3JkZXI6ICAgICAgICAgICAgICAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xuXG5cbiRtYXRlcmlhbC1jb2xvcjogJ2xpZ2h0LWJsdWUnO1xuJHRoZW1lLWNvbG9yLTkwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnOTAwJyk7XG4kdGhlbWUtY29sb3ItODAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc4MDAnKTtcbiR0aGVtZS1jb2xvci03MDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzcwMCcpO1xuJHRoZW1lLWNvbG9yLTYwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnNjAwJyk7XG4kdGhlbWUtY29sb3ItNTAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc1MDAnKTtcbiR0aGVtZS1jb2xvci00MDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzQwMCcpO1xuJHRoZW1lLWNvbG9yLTMwMDogbWF0ZXJpYWwtY29sb3IoJG1hdGVyaWFsLWNvbG9yLCAnMzAwJyk7XG4kdGhlbWUtY29sb3ItMjAwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICcyMDAnKTtcbiR0aGVtZS1jb2xvci0xMDA6IG1hdGVyaWFsLWNvbG9yKCRtYXRlcmlhbC1jb2xvciwgJzEwMCcpO1xuJHRoZW1lLWNvbG9yLTUwOiBtYXRlcmlhbC1jb2xvcigkbWF0ZXJpYWwtY29sb3IsICc1MCcpO1xuXG5cbiRlcnJvci1jb2xvcjogJ2FtYmVyJztcbiRlcnJvci1jb2xvci05MDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzkwMCcpO1xuJGVycm9yLWNvbG9yLTgwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnODAwJyk7XG4kZXJyb3ItY29sb3ItNzAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICc3MDAnKTtcbiRlcnJvci1jb2xvci02MDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzYwMCcpO1xuJGVycm9yLWNvbG9yLTUwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnNTAwJyk7XG4kZXJyb3ItY29sb3ItNDAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICc0MDAnKTtcbiRlcnJvci1jb2xvci0zMDA6IG1hdGVyaWFsLWNvbG9yKCRlcnJvci1jb2xvciwgJzMwMCcpO1xuJGVycm9yLWNvbG9yLTIwMDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnMjAwJyk7XG4kZXJyb3ItY29sb3ItMTAwOiBtYXRlcmlhbC1jb2xvcigkZXJyb3ItY29sb3IsICcxMDAnKTtcbiRlcnJvci1jb2xvci01MDogbWF0ZXJpYWwtY29sb3IoJGVycm9yLWNvbG9yLCAnNTAnKTtcblxuXG4iXX0= */");

/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-icon-box/ui-icon-box.component.ts":
/*!******************************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-icon-box/ui-icon-box.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: UiIconBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiIconBoxComponent", function() { return UiIconBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UiIconBoxComponent = /** @class */ (function () {
    function UiIconBoxComponent() {
        this.klass = 'col-md-3 col-6';
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
    ], UiIconBoxComponent.prototype, "klass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], UiIconBoxComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], UiIconBoxComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], UiIconBoxComponent.prototype, "url", void 0);
    UiIconBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-ui-icon-box',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ui-icon-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-icon-box/ui-icon-box.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ui-icon-box.component.scss */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-icon-box/ui-icon-box.component.scss")).default]
        })
    ], UiIconBoxComponent);
    return UiIconBoxComponent;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-panel-box/ui-panel-box.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-panel-box/ui-panel-box.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#history-statistics {\n  height: 295px;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\n.hs-container .hs-title {\n  padding: 15px;\n  border-bottom: 1px solid #eee;\n}\n\n.hs-container .hs-title h2 {\n  font-size: 20px;\n}\n\n.hs-container .hs-title p {\n  margin: 0;\n}\n\n.hs-container .hs-title .current-item {\n  margin-left: auto;\n}\n\n.hs-container .hs-title .current-item .current-item-statistic-unit {\n  direction: ltr;\n  text-align: left;\n}\n\n.hs-container .hs-title .current-item .changeRate {\n  background: #eaeaea;\n  padding: 3px;\n  border-radius: 3px;\n  font-size: 12px;\n  margin-right: 15px;\n}\n\n.hs-container .hs-title .current-item .unit {\n  background: #333;\n  color: #fff;\n  padding: 0 3px 2px;\n  font-size: 12px;\n  border-radius: 3px;\n  position: relative;\n  top: -2px;\n  left: 11px;\n}\n\n.hs-container .hs-table {\n  border-right: 1px solid #eee;\n  height: 305px;\n  padding: 0px !important;\n  flex: 0 0 260px !important;\n  max-width: 260px;\n}\n\n@media (max-width: 1199.98px) {\n  .hs-container .hs-table {\n    display: none;\n  }\n}\n\n.hs-container .hs-table table {\n  margin-bottom: 0;\n}\n\n.hs-container .hs-table table tr {\n  cursor: pointer;\n  vertical-align: middle;\n  font-size: 15px;\n}\n\n.hs-container .hs-table table tr.active {\n  background: rgba(0, 0, 0, 0.04);\n}\n\n.hs-container .hs-table table tr td {\n  border-color: #f1f1f1;\n}\n\n.hs-container .hs-table table tr td > span {\n  font-size: 12px;\n}\n\n.hs-container .hs-table table tr td > span i {\n  position: relative;\n  left: 7px;\n  top: 3px;\n  font-size: 20px;\n}\n\n.hs-container .hs-table table tr td > span.unit {\n  background: #444;\n  color: #fff;\n  font-size: 11px;\n  padding: 0 3px 3px;\n  border-radius: 3px;\n  margin-left: 5px;\n}\n\n.hs-container .hs-table table tr td:nth-child(2) {\n  padding-top: 15px;\n}\n\n.hs-container .hs-chart {\n  width: 100%;\n}\n\n@media (min-width: 1199.98px) {\n  .hs-container .hs-chart {\n    position: absolute;\n    right: 0;\n    left: 260px;\n    width: auto;\n  }\n}\n\n::ng-deep body[dir=rtl] .hs-container .hs-title .current-item {\n  margin-left: 0px !important;\n  margin-right: auto !important;\n}\n\n::ng-deep body[dir=rtl] .hs-container .hs-table {\n  border-right: 0px !important;\n  border-left: 1px solid #eee;\n}\n\n::ng-deep body[dir=rtl] .hs-container .hs-table table tr td > span {\n  direction: ltr;\n  float: left;\n}\n\n::ng-deep body[dir=rtl] .hs-container .hs-chart {\n  width: 100%;\n}\n\n@media (min-width: 1199.98px) {\n  ::ng-deep body[dir=rtl] .hs-container .hs-chart {\n    position: absolute;\n    left: 0 !important;\n    right: 260px !important;\n    width: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvdWktcGFuZWwtYm94L3VpLXBhbmVsLWJveC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvdWktcGFuZWwtYm94L3VpLXBhbmVsLWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FER0U7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7QUNBTjs7QURDTTtFQUNJLGVBQUE7QUNDVjs7QURDTTtFQUNJLFNBQUE7QUNDVjs7QURDTTtFQUNJLGlCQUFBO0FDQ1Y7O0FEQVU7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNFZDs7QURBVTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRWQ7O0FEQVU7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNFZDs7QURHRTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0ROOztBREVNO0VBTko7SUFPUSxhQUFBO0VDQ1I7QUFDRjs7QURBTTtFQUNJLGdCQUFBO0FDRVY7O0FERFU7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDR2Q7O0FERmM7RUFDSSwrQkFBQTtBQ0lsQjs7QURGYztFQUNJLHFCQUFBO0FDSWxCOztBREhrQjtFQUNJLGVBQUE7QUNLdEI7O0FESnNCO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUNNMUI7O0FESnNCO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ00xQjs7QURIa0I7RUFDSSxpQkFBQTtBQ0t0Qjs7QURDRTtFQUNJLFdBQUE7QUNDTjs7QURBTTtFQUZKO0lBR00sa0JBQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7RUNHTjtBQUNGOztBRElNO0VBQ0UsMkJBQUE7RUFDQSw2QkFBQTtBQ0RSOztBRElJO0VBQ0ksNEJBQUE7RUFDQSwyQkFBQTtBQ0ZSOztBRElVO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUNGWjs7QURNSTtFQUNFLFdBQUE7QUNKTjs7QURLTTtFQUZGO0lBR0ksa0JBQUE7SUFDQSxrQkFBQTtJQUNBLHVCQUFBO0lBQ0EsV0FBQTtFQ0ZOO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvbmctZGFzaGJvYXJkLWNvcmUvc3JjL2xpYi9uZzUtYmFzaWMvY29tcG9uZW50cy91aS1wYW5lbC1ib3gvdWktcGFuZWwtYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hpc3Rvcnktc3RhdGlzdGljcyB7XG4gIGhlaWdodDogMjk1cHg7XG59XG5cbi5vdmVyZmxvdy1oaWRkZW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaHMtY29udGFpbmVyIHtcbiAgLmhzLXRpdGxlIHtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICAuY3VycmVudC1pdGVtIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAuY3VycmVudC1pdGVtLXN0YXRpc3RpYy11bml0e1xuICAgICAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoYW5nZVJhdGUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC51bml0IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzMztcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgM3B4IDJweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICAgICAgICBsZWZ0OiAxMXB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICBcbiAgLmhzLXRhYmxlIHtcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWU7XG4gICAgICBoZWlnaHQ6IDMwNXB4O1xuICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBmbGV4OiAwIDAgMjYwcHggIWltcG9ydGFudDtcbiAgICAgIG1heC13aWR0aDogMjYwcHg7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIHRhYmxlIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIHRye1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgJi5hY3RpdmV7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2YxZjFmMTtcbiAgICAgICAgICAgICAgICAgID4gc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgJi51bml0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzQ0NDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAzcHggM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIC5ocy1jaGFydCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogMjYwcHg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgfVxuICB9XG59XG5cbjo6bmctZGVlcCBib2R5W2Rpcj1cInJ0bFwiXSB7XG4gIC5ocy1jb250YWluZXIge1xuICAgIC5ocy10aXRsZXtcbiAgICAgIC5jdXJyZW50LWl0ZW0ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgICAuaHMtdGFibGUge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICB0ciB0ZCA+IHNwYW4ge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5ocy1jaGFydCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIHJpZ2h0OiAyNjBweCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIjaGlzdG9yeS1zdGF0aXN0aWNzIHtcbiAgaGVpZ2h0OiAyOTVweDtcbn1cblxuLm92ZXJmbG93LWhpZGRlbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5ocy1jb250YWluZXIgLmhzLXRpdGxlIHtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG59XG4uaHMtY29udGFpbmVyIC5ocy10aXRsZSBoMiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5ocy1jb250YWluZXIgLmhzLXRpdGxlIHAge1xuICBtYXJnaW46IDA7XG59XG4uaHMtY29udGFpbmVyIC5ocy10aXRsZSAuY3VycmVudC1pdGVtIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4uaHMtY29udGFpbmVyIC5ocy10aXRsZSAuY3VycmVudC1pdGVtIC5jdXJyZW50LWl0ZW0tc3RhdGlzdGljLXVuaXQge1xuICBkaXJlY3Rpb246IGx0cjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5ocy1jb250YWluZXIgLmhzLXRpdGxlIC5jdXJyZW50LWl0ZW0gLmNoYW5nZVJhdGUge1xuICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xuICBwYWRkaW5nOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uaHMtY29udGFpbmVyIC5ocy10aXRsZSAuY3VycmVudC1pdGVtIC51bml0IHtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAgM3B4IDJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMnB4O1xuICBsZWZ0OiAxMXB4O1xufVxuLmhzLWNvbnRhaW5lciAuaHMtdGFibGUge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xuICBoZWlnaHQ6IDMwNXB4O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDI2MHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMjYwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5ocy1jb250YWluZXIgLmhzLXRhYmxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uaHMtY29udGFpbmVyIC5ocy10YWJsZSB0YWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uaHMtY29udGFpbmVyIC5ocy10YWJsZSB0YWJsZSB0ciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmhzLWNvbnRhaW5lciAuaHMtdGFibGUgdGFibGUgdHIuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cbi5ocy1jb250YWluZXIgLmhzLXRhYmxlIHRhYmxlIHRyIHRkIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjFmMWYxO1xufVxuLmhzLWNvbnRhaW5lciAuaHMtdGFibGUgdGFibGUgdHIgdGQgPiBzcGFuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmhzLWNvbnRhaW5lciAuaHMtdGFibGUgdGFibGUgdHIgdGQgPiBzcGFuIGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDdweDtcbiAgdG9wOiAzcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5ocy1jb250YWluZXIgLmhzLXRhYmxlIHRhYmxlIHRyIHRkID4gc3Bhbi51bml0IHtcbiAgYmFja2dyb3VuZDogIzQ0NDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMCAzcHggM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uaHMtY29udGFpbmVyIC5ocy10YWJsZSB0YWJsZSB0ciB0ZDpudGgtY2hpbGQoMikge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5ocy1jb250YWluZXIgLmhzLWNoYXJ0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5ocy1jb250YWluZXIgLmhzLWNoYXJ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMjYwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cblxuOjpuZy1kZWVwIGJvZHlbZGlyPXJ0bF0gLmhzLWNvbnRhaW5lciAuaHMtdGl0bGUgLmN1cnJlbnQtaXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgYm9keVtkaXI9cnRsXSAuaHMtY29udGFpbmVyIC5ocy10YWJsZSB7XG4gIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VlZTtcbn1cbjo6bmctZGVlcCBib2R5W2Rpcj1ydGxdIC5ocy1jb250YWluZXIgLmhzLXRhYmxlIHRhYmxlIHRyIHRkID4gc3BhbiB7XG4gIGRpcmVjdGlvbjogbHRyO1xuICBmbG9hdDogbGVmdDtcbn1cbjo6bmctZGVlcCBib2R5W2Rpcj1ydGxdIC5ocy1jb250YWluZXIgLmhzLWNoYXJ0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTE5OS45OHB4KSB7XG4gIDo6bmctZGVlcCBib2R5W2Rpcj1ydGxdIC5ocy1jb250YWluZXIgLmhzLWNoYXJ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiAyNjBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-panel-box/ui-panel-box.component.ts":
/*!********************************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-panel-box/ui-panel-box.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: UiPanelBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiPanelBoxComponent", function() { return UiPanelBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UiPanelBoxComponent = /** @class */ (function () {
    function UiPanelBoxComponent() {
        this.hostClass = 'col-md-6 col-sm-6';
    }
    UiPanelBoxComponent.prototype.ngOnInit = function () {
        if (this.class) {
            this.hostClass = this.class;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], UiPanelBoxComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], UiPanelBoxComponent.prototype, "class", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
    ], UiPanelBoxComponent.prototype, "hostClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], UiPanelBoxComponent.prototype, "description", void 0);
    UiPanelBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-ui-panel-box',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ui-panel-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-panel-box/ui-panel-box.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ui-panel-box.component.scss */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-panel-box/ui-panel-box.component.scss")).default]
        })
    ], UiPanelBoxComponent);
    return UiPanelBoxComponent;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-small-box/ui-small-box.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-small-box/ui-small-box.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  font-size: 20px;\n}\n\np {\n  margin-bottom: 0;\n}\n\n.value {\n  font-size: 35px;\n  color: #aaa;\n  font-weight: 500;\n  padding-right: 10px;\n}\n\n@media (max-width: 575.98px) {\n  h2 {\n    font-size: 16px;\n  }\n\n  p {\n    font-size: 13px;\n  }\n\n  .value {\n    font-size: 25px;\n  }\n}\n\n.app-statistics {\n  height: 85%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvdWktc21hbGwtYm94L3VpLXNtYWxsLWJveC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL3NyYy9saWIvbmc1LWJhc2ljL2NvbXBvbmVudHMvdWktc21hbGwtYm94L3VpLXNtYWxsLWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0FDRUY7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNHRjs7QUREQTtFQUNFO0lBQ0UsZUFBQTtFQ0lGOztFREZBO0lBQ0ksZUFBQTtFQ0tKOztFREhBO0lBQ0UsZUFBQTtFQ01GO0FBQ0Y7O0FESkE7RUFDRSxXQUFBO0FDTUYiLCJmaWxlIjoicHJvamVjdHMvbmctZGFzaGJvYXJkLWNvcmUvc3JjL2xpYi9uZzUtYmFzaWMvY29tcG9uZW50cy91aS1zbWFsbC1ib3gvdWktc21hbGwtYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5we1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnZhbHVlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogI2FhYTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkgeyBcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICBwe1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIC52YWx1ZSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG59XG4uYXBwLXN0YXRpc3RpY3Mge1xuICBoZWlnaHQ6IDg1JTsgXG59IiwiaDIge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbnAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udmFsdWUge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjYWFhO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIC52YWx1ZSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG59XG4uYXBwLXN0YXRpc3RpY3Mge1xuICBoZWlnaHQ6IDg1JTtcbn0iXX0= */");

/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-small-box/ui-small-box.component.ts":
/*!********************************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-small-box/ui-small-box.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: UiSmallBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSmallBoxComponent", function() { return UiSmallBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UiSmallBoxComponent = /** @class */ (function () {
    function UiSmallBoxComponent() {
        this.klass = 'col-md-3 col-6';
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
    ], UiSmallBoxComponent.prototype, "klass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], UiSmallBoxComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], UiSmallBoxComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], UiSmallBoxComponent.prototype, "value", void 0);
    UiSmallBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-ui-small-box',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ui-small-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-small-box/ui-small-box.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ui-small-box.component.scss */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/ui-small-box/ui-small-box.component.scss")).default]
        })
    ], UiSmallBoxComponent);
    return UiSmallBoxComponent;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/definitions.ts":
/*!*********************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/definitions.ts ***!
  \*********************************************************************/
/*! exports provided: ActivityTypes, TemperatureCustomization, CloudDeviceType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityTypes", function() { return ActivityTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatureCustomization", function() { return TemperatureCustomization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudDeviceType", function() { return CloudDeviceType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");

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

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/ng5-basic.reducers.ts":
/*!****************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/ng5-basic.reducers.ts ***!
  \****************************************************************************/
/*! exports provided: ng5ReducerGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ng5ReducerGenerator", function() { return ng5ReducerGenerator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _reducers_activity_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/activity.reducer */ "./projects/ng-dashboard-core/src/lib/ng5-basic/reducers/activity.reducer.ts");
/* harmony import */ var _reducers_notifications_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/notifications.reducer */ "./projects/ng-dashboard-core/src/lib/ng5-basic/reducers/notifications.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./projects/ng-dashboard-core/node_modules/@ngrx/store/fesm5/store.js");




function ng5ReducerGenerator() {
    return _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('ng5', {
        activities: _reducers_activity_reducer__WEBPACK_IMPORTED_MODULE_1__["activitiesReducer"],
        notifications: _reducers_notifications_reducer__WEBPACK_IMPORTED_MODULE_2__["notificationsReducer"],
    });
}


/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.component.scss":
/*!*********************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.main-ul {\n  list-style: none;\n  padding: 0;\n  position: relative;\n}\nul li {\n  display: none;\n  position: relative;\n}\nul li a {\n  position: relative;\n}\nul li > a:after {\n  content: \"\";\n  font-family: \"material\";\n  display: inline-block;\n  top: 16px;\n  right: 15px;\n  position: absolute;\n  font-size: 23px;\n  left: auto;\n  transition: transform 0.3s;\n}\nul li.opened > a:after {\n  transform: rotate(90deg);\n}\nul li > a:only-child:after {\n  content: \"\";\n  border: 0;\n}\n.main-ul > li {\n  display: block;\n}\n.main-ul > li.opened {\n  background: #f7f7f7;\n  border-left: 3px solid #4c84ff;\n}\n.main-ul > li.opened .child-ul {\n  background: #f9f9f9;\n}\n.main-ul > li > a:hover {\n  background: #f7f7f7 !important;\n}\n.main-ul li i[class^=icon-], .main-ul li i[class^=fa-] {\n  font-size: 22px;\n  padding-right: 5px;\n  text-align: center;\n  color: #888;\n}\n.main-ul li i[class^=fa-] {\n  font-size: 20px;\n  padding: 0 9px;\n}\n.main-ul li a {\n  display: block;\n  font-weight: 400;\n  padding: 20px 20px;\n  color: #333;\n  text-decoration: none;\n}\n.main-ul li.opened > a {\n  color: #4c84ff !important;\n}\n.main-ul li.opened > ngx-sidebar > .child-ul > li {\n  display: block !important;\n}\n.main-ul > li > a:hover {\n  background: #fff;\n}\n.child-ul {\n  padding-left: 10px;\n  display: none;\n}\n.main-ul li.opened > ngx-sidebar > .child-ul {\n  display: block !important;\n}\n.child-ul > li {\n  position: relative;\n}\n.child-ul > li:hover > a {\n  color: #4c84ff;\n}\n::ng-deep body[dir=rtl] .bd-sidebar ul li a {\n  text-align: right;\n}\n::ng-deep body[dir=rtl] .bd-sidebar ul li > a:after {\n  content: \"\" !important;\n  right: auto !important;\n  left: 15px !important;\n}\n::ng-deep body[dir=rtl] .bd-sidebar ul li.opened > a:after {\n  transform: rotate(-90deg) !important;\n}\n::ng-deep body[dir=rtl] .bd-sidebar .main-ul > li.opened {\n  border-right: 3px solid #4c84ff;\n  border-left: 0 !important;\n}\n::ng-deep body[dir=rtl] .bd-sidebar .main-ul li i[class^=icon-] {\n  padding-right: 0px !important;\n  padding-left: 5px;\n}\n.move-back-btn {\n  padding: 10px 5px;\n  display: block;\n  cursor: pointer;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL3NyYy9saWIvbmc1LWJhc2ljL25neC1zaWRlYmFyL25neC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2xlZ2lvbi9uZy1kYXNoYm9hcmQvcHJvamVjdHMvbmctZGFzaGJvYXJkLWNvcmUvc3JjL2xpYi9uZzUtYmFzaWMvbmd4LXNpZGViYXIvbmd4LXNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QURFRjtBQ0NBO0VBSUUsYUFBQTtFQUNBLGtCQUFBO0FEREY7QUNIRTtFQUNFLGtCQUFBO0FES0o7QUNERTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QURHSjtBQ0RFO0VBQ0Usd0JBQUE7QURHSjtBQ0RFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7QURHSjtBQ0VFO0VBQ0UsY0FBQTtBRENKO0FDQUk7RUFDRSxtQkFBQTtFQUNBLDhCQUFBO0FERU47QUNBTTtFQUNFLG1CQUFBO0FERVI7QUNDSTtFQUNNLDhCQUFBO0FEQ1Y7QUNHSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBREROO0FDR0k7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBREROO0FDR0k7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBREROO0FDR0k7RUFDRSx5QkFBQTtBREROO0FDR0k7RUFDRSx5QkFBQTtBREROO0FDSUU7RUFDRSxnQkFBQTtBREZKO0FDTUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QURIRjtBQ01BO0VBQ0UseUJBQUE7QURIRjtBQ01BO0VBQ0Usa0JBQUE7QURIRjtBQ0lFO0VBQ0ksY0FBQTtBREZOO0FDU007RUFDRSxpQkFBQTtBRE5SO0FDUU07RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUROUjtBQ1FNO0VBQ0Usb0NBQUE7QUROUjtBQ1dRO0VBQ0UsK0JBQUE7RUFDQSx5QkFBQTtBRFRWO0FDYVE7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0FEWFY7QUNpQkE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURkRiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kYXNoYm9hcmQtY29yZS9zcmMvbGliL25nNS1iYXNpYy9uZ3gtc2lkZWJhci9uZ3gtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5tYWluLXVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG51bCBsaSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbnVsIGxpIGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG51bCBsaSA+IGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIu6mmlwiO1xuICBmb250LWZhbWlseTogXCJtYXRlcmlhbFwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRvcDogMTZweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBsZWZ0OiBhdXRvO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbn1cbnVsIGxpLm9wZW5lZCA+IGE6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG51bCBsaSA+IGE6b25seS1jaGlsZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlcjogMDtcbn1cblxuLm1haW4tdWwgPiBsaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW4tdWwgPiBsaS5vcGVuZWQge1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM0Yzg0ZmY7XG59XG4ubWFpbi11bCA+IGxpLm9wZW5lZCAuY2hpbGQtdWwge1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xufVxuLm1haW4tdWwgPiBsaSA+IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3ICFpbXBvcnRhbnQ7XG59XG4ubWFpbi11bCBsaSBpW2NsYXNzXj1pY29uLV0sIC5tYWluLXVsIGxpIGlbY2xhc3NePWZhLV0ge1xuICBmb250LXNpemU6IDIycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzg4ODtcbn1cbi5tYWluLXVsIGxpIGlbY2xhc3NePWZhLV0ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDAgOXB4O1xufVxuLm1haW4tdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubWFpbi11bCBsaS5vcGVuZWQgPiBhIHtcbiAgY29sb3I6ICM0Yzg0ZmYgIWltcG9ydGFudDtcbn1cbi5tYWluLXVsIGxpLm9wZW5lZCA+IG5neC1zaWRlYmFyID4gLmNoaWxkLXVsID4gbGkge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuLm1haW4tdWwgPiBsaSA+IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uY2hpbGQtdWwge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tYWluLXVsIGxpLm9wZW5lZCA+IG5neC1zaWRlYmFyID4gLmNoaWxkLXVsIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLmNoaWxkLXVsID4gbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2hpbGQtdWwgPiBsaTpob3ZlciA+IGEge1xuICBjb2xvcjogIzRjODRmZjtcbn1cblxuOjpuZy1kZWVwIGJvZHlbZGlyPXJ0bF0gLmJkLXNpZGViYXIgdWwgbGkgYSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuOjpuZy1kZWVwIGJvZHlbZGlyPXJ0bF0gLmJkLXNpZGViYXIgdWwgbGkgPiBhOmFmdGVyIHtcbiAgY29udGVudDogXCLupplcIiAhaW1wb3J0YW50O1xuICByaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBsZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgYm9keVtkaXI9cnRsXSAuYmQtc2lkZWJhciB1bCBsaS5vcGVuZWQgPiBhOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGJvZHlbZGlyPXJ0bF0gLmJkLXNpZGViYXIgLm1haW4tdWwgPiBsaS5vcGVuZWQge1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjNGM4NGZmO1xuICBib3JkZXItbGVmdDogMCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGJvZHlbZGlyPXJ0bF0gLmJkLXNpZGViYXIgLm1haW4tdWwgbGkgaVtjbGFzc149aWNvbi1dIHtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4ubW92ZS1iYWNrLWJ0biB7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iLCIubWFpbi11bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxudWwgbGkge1xuICBhIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICA+IGE6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXFxlOTlhXCI7XG4gICAgZm9udC1mYW1pbHk6ICdtYXRlcmlhbCc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRvcDogMTZweDtcbiAgICByaWdodDogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICAgIGxlZnQ6IGF1dG87XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcztcbiAgfVxuICAmLm9wZW5lZCA+IGE6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgfVxuICA+IGE6b25seS1jaGlsZDphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBib3JkZXI6IDA7XG4gIH1cbn1cblxuLm1haW4tdWwge1xuICA+IGxpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAmLm9wZW5lZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNGM4NGZmO1xuICAgICAgXG4gICAgICAuY2hpbGQtdWwge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgICAgfVxuICAgIH1cbiAgICA+IGE6aG92ZXJ7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y3ZjdmNyAhaW1wb3J0YW50O1xuICAgICAgfVxuICB9XG4gIGxpIHtcbiAgICBpW2NsYXNzXj1cImljb24tXCJdLCBpW2NsYXNzXj1cImZhLVwiXSB7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogIzg4ODtcbiAgICB9XG4gICAgaVtjbGFzc149XCJmYS1cIl0ge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgcGFkZGluZzogMCA5cHg7XG4gICAgfVxuICAgIGEge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICAgICYub3BlbmVkID4gYXtcbiAgICAgIGNvbG9yOiAjNGM4NGZmICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICYub3BlbmVkID4gbmd4LXNpZGViYXIgPiAuY2hpbGQtdWwgPiBsaSB7XG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICA+IGxpID4gYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxufVxuXG4uY2hpbGQtdWwge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tYWluLXVsIGxpLm9wZW5lZCA+IG5neC1zaWRlYmFyID4gLmNoaWxkLXVsIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLmNoaWxkLXVsID4gbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6aG92ZXIgPiBhIHtcbiAgICAgIGNvbG9yOiAjNGM4NGZmO1xuICB9XG59XG5cbjo6bmctZGVlcCBib2R5W2Rpcj1cInJ0bFwiXSB7XG4gIC5iZC1zaWRlYmFye1xuICAgIHVsIGxpIHtcbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICAgID4gYTphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXFxlOTk5XCIgIWltcG9ydGFudDtcbiAgICAgICAgcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgJi5vcGVuZWQgPiBhOmFmdGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgICAubWFpbi11bCB7XG4gICAgICA+IGxpIHtcbiAgICAgICAgJi5vcGVuZWQge1xuICAgICAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICM0Yzg0ZmY7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGkge1xuICAgICAgICBpW2NsYXNzXj1cImljb24tXCJdIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLm1vdmUtYmFjay1idG4ge1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */");

/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.component.ts":
/*!*******************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NgxSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSidebarComponent", function() { return NgxSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/configuration.service */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/configuration.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var NgxSidebarComponent = /** @class */ (function () {
    function NgxSidebarComponent(renderer, route, router, config, compiler) {
        var _this = this;
        this.renderer = renderer;
        this.route = route;
        this.router = router;
        this.config = config;
        this.compiler = compiler;
        this.containerClass = 'main-ul';
        this.state = true;
        this.currentRoute = null;
        this.isRouteFocused = false;
        this.nav = null;
        this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.currentRoute = e.url;
                _this.IsRouteFocused(e.url);
            }
        });
    }
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
        var flatNav = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["flatten"])(this.navigation);
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
            this.config.closeSidebar();
        }
    };
    NgxSidebarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dynamic', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            static: false
        })
    ], NgxSidebarComponent.prototype, "target", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxSidebarComponent.prototype, "navigation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxSidebarComponent.prototype, "containerClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxSidebarComponent.prototype, "child", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgxSidebarComponent.prototype, "value", void 0);
    NgxSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            /* tslint:disable */
            selector: 'ngx-sidebar',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ngx-sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ngx-sidebar.component.scss */ "./projects/ng-dashboard-core/src/lib/ng5-basic/ngx-sidebar/ngx-sidebar.component.scss")).default]
        })
    ], NgxSidebarComponent);
    return NgxSidebarComponent;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/reducers/activity.reducer.ts":
/*!***********************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/reducers/activity.reducer.ts ***!
  \***********************************************************************************/
/*! exports provided: activitiesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activitiesReducer", function() { return activitiesReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/common */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/common.ts");


function activitiesReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'RESET':
            return [];
        case 'UPDATE_ACTIVITY':
            return Object(_services_common__WEBPACK_IMPORTED_MODULE_1__["UpdateOrPrepend"])(action.payload, state, 'id');
    }
    return state;
}


/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/reducers/notifications.reducer.ts":
/*!****************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/reducers/notifications.reducer.ts ***!
  \****************************************************************************************/
/*! exports provided: notificationsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationsReducer", function() { return notificationsReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");

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

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/actions.service.ts":
/*!**********************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/services/actions.service.ts ***!
  \**********************************************************************************/
/*! exports provided: ActionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsService", function() { return ActionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ActionsService = /** @class */ (function () {
    function ActionsService() {
    }
    ActionsService.prototype.scrollTop = function () {
        var el = new SimpleBar(document.getElementById('layout'));
        el.scrollContentEl.scrollTop = 0;
    };
    ActionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ActionsService);
    return ActionsService;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/common.ts":
/*!*************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/services/common.ts ***!
  \*************************************************************************/
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var url_matcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-matcher */ "./projects/ng-dashboard-core/node_modules/url-matcher/lib/index.js");
/* harmony import */ var url_matcher__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url_matcher__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./projects/ng-dashboard-core/node_modules/rxjs/_esm5/index.js");





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
    var mockResponse = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
        body: result,
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](),
        status: result.data ? 200 : result.error.code,
        statusText: 'OK',
        url: req.url
    });
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(mockResponse);
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
                    result = Object(url_matcher__WEBPACK_IMPORTED_MODULE_2__["matchPattern"])(urlMethod[1], url);
                }
                else {
                    if (urlMethod[0].toUpperCase() === method.toUpperCase()) {
                        result = Object(url_matcher__WEBPACK_IMPORTED_MODULE_2__["matchPattern"])(urlMethod[1], url);
                    }
                }
            }
            else {
                result = Object(url_matcher__WEBPACK_IMPORTED_MODULE_2__["matchPattern"])(route, url);
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
                return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["merge"])($el, element);
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
                        if (error_1 instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
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

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/configuration.service.ts":
/*!****************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/services/configuration.service.ts ***!
  \****************************************************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_globalization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/globalization.service */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/globalization.service.ts");



var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(config, globalization) {
        var _this = this;
        this.config = config;
        this.globalization = globalization;
        this.sidebarIsActive = false;
        this.eventIsActive = false;
        this.eventMoveChange = { x: undefined, y: undefined };
        this.evetStartPoint = { x: undefined, y: undefined };
        this.ToggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        window.addEventListener('resize', function (event) {
            if (event.target.innerWidth < 992) {
                _this.ToggleSidebar.emit('hidden');
            }
            else {
                _this.ToggleSidebar.emit('show');
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
                            if (!(Math.abs(_this.evetStartPoint.y - _this.eventMoveChange.y) >
                                50)) {
                                if (_this.evetStartPoint.x > _this.eventMoveChange.x + 15) {
                                    _this.ToggleSidebar.emit('hidden');
                                }
                                else if (_this.evetStartPoint.x <
                                    _this.eventMoveChange.x - 15) {
                                    _this.ToggleSidebar.emit('show');
                                }
                            }
                        }
                        _this.eventIsActive = false;
                        _this.evetStartPoint = { x: undefined, y: undefined };
                    }
                    if (_this.eventIsActive &&
                        (e.type === 'mousemove' || e.type === 'touchmove')) {
                        if (_this.evetStartPoint.x === undefined &&
                            _this.evetStartPoint.y === undefined) {
                            _this.evetStartPoint = _this.getClientPostion(e);
                        }
                        _this.eventMoveChange = _this.getClientPostion(e);
                    }
                }
            });
        });
    }
    ConfigurationService.prototype.addListenerMulti = function (el, s, fn) {
        s.split(' ').forEach(function (e) { return el.addEventListener(e, fn, false); });
    };
    ConfigurationService.prototype.getItems = function () {
        return this.config.navigation;
    };
    ConfigurationService.prototype.getClientPostion = function (e) {
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
    ConfigurationService.prototype.closeSidebar = function () {
        if (window.innerWidth < 992) {
            this.ToggleSidebar.emit('hidden');
        }
    };
    ConfigurationService.prototype.sidebarStatus = function (el) {
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
    ConfigurationService.prototype.composedPath = function (el) {
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
    Object.defineProperty(ConfigurationService.prototype, "API", {
        get: function () {
            return this.config.api;
        },
        enumerable: true,
        configurable: true
    });
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
    ConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['config',] }] },
        { type: _services_globalization_service__WEBPACK_IMPORTED_MODULE_2__["GlobalizationService"] }
    ]; };
    ConfigurationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('config'))
    ], ConfigurationService);
    return ConfigurationService;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/globalization.service.ts":
/*!****************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/services/globalization.service.ts ***!
  \****************************************************************************************/
/*! exports provided: ExperimentalLanguages, StableLanguages, SupportedLanguages, GlobalizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentalLanguages", function() { return ExperimentalLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StableLanguages", function() { return StableLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportedLanguages", function() { return SupportedLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalizationService", function() { return GlobalizationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translate.service */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/translate.service.ts");




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
    GlobalizationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
        { type: _translate_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
    ]; };
    GlobalizationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
    ], GlobalizationService);
    return GlobalizationService;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/helpers.ts":
/*!**************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/services/helpers.ts ***!
  \**************************************************************************/
/*! exports provided: AuthLayoutChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutChild", function() { return AuthLayoutChild; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");

function AuthLayoutChild(component, route, options) {
    if (options === void 0) { options = {}; }
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ path: route, component: component }, options);
}


/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/mocks.service.ts":
/*!********************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/services/mocks.service.ts ***!
  \********************************************************************************/
/*! exports provided: MockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockService", function() { return MockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var url_matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-matcher */ "./projects/ng-dashboard-core/node_modules/url-matcher/lib/index.js");
/* harmony import */ var url_matcher__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url_matcher__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _permissions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./permissions.service */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/permissions.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./translate.service */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/translate.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./projects/ng-dashboard-core/node_modules/rxjs/_esm5/index.js");








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
        var mockResponse = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
            body: result,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](),
            status: result.data ? 200 : result.error.code,
            statusText: 'OK',
            url: req.url
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(mockResponse);
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
                items: Object(lodash__WEBPACK_IMPORTED_MODULE_5__["times"])(24, function () { return Object(lodash__WEBPACK_IMPORTED_MODULE_5__["random"])(10, 30); })
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
    MockService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['config',] }] },
        { type: _permissions_service__WEBPACK_IMPORTED_MODULE_4__["PermissionsService"] },
        { type: _translate_service__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
    ]; };
    MockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('config'))
    ], MockService);
    return MockService;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/permissions.service.ts":
/*!**************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/services/permissions.service.ts ***!
  \**************************************************************************************/
/*! exports provided: PermissionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsService", function() { return PermissionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


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
    PermissionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PermissionsService);
    return PermissionsService;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/requests.service.ts":
/*!***********************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/services/requests.service.ts ***!
  \***********************************************************************************/
/*! exports provided: RequestsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsService", function() { return RequestsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/common.ts");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configuration.service */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/configuration.service.ts");





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
                        url = this.config.API + '/api/contact-details';
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
                            return [2 /*return*/, Object(_common__WEBPACK_IMPORTED_MODULE_3__["GetNetworkError"])()];
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
                            .post(this.config.API + '/api/user/settings', user)
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
                            return [2 /*return*/, Object(_common__WEBPACK_IMPORTED_MODULE_3__["GetNetworkError"])()];
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
                            .post(this.config.API + '/api/contact-details', { contacts: contacts })
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
                            return [2 /*return*/, Object(_common__WEBPACK_IMPORTED_MODULE_3__["GetNetworkError"])()];
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
                            .post(this.config.API + '/api/forget-password', { username: username })
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
                            return [2 /*return*/, Object(_common__WEBPACK_IMPORTED_MODULE_3__["GetNetworkError"])()];
                        }
                        return [2 /*return*/, error_4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RequestsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"] }
    ]; };
    RequestsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], RequestsService);
    return RequestsService;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/translate.service.ts":
/*!************************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ng5-basic/services/translate.service.ts ***!
  \************************************************************************************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TranslateService = /** @class */ (function () {
    function TranslateService() {
        this.langs = {};
        this.lang = 'en';
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
    TranslateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TranslateService);
    return TranslateService;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ngx-tooltip/ngx-tooltip.component.scss":
/*!***********************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ngx-tooltip/ngx-tooltip.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ngx-tooltip {\n  background: #333;\n  color: #fff;\n  padding: 4px 6px 6px;\n  position: fixed;\n  z-index: 1000000;\n  border-radius: 3px;\n  font-size: 13px;\n  max-width: 200px;\n}\n.ngx-tooltip:after {\n  content: \" \";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  bottom: -3px;\n  left: 50%;\n  border-right: 7px solid #333;\n  border-bottom: 7px solid #333;\n  display: inline-block;\n  transform: rotate(45deg);\n  margin-left: -5px;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWdpb24vbmctZGFzaGJvYXJkL3Byb2plY3RzL25nLWRhc2hib2FyZC1jb3JlL3NyYy9saWIvbmd4LXRvb2x0aXAvbmd4LXRvb2x0aXAuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZy1kYXNoYm9hcmQtY29yZS9zcmMvbGliL25neC10b29sdGlwL25neC10b29sdGlwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNFUiIsImZpbGUiOiJwcm9qZWN0cy9uZy1kYXNoYm9hcmQtY29yZS9zcmMvbGliL25neC10b29sdGlwL25neC10b29sdGlwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5neC10b29sdGlwIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDRweCA2cHggNnB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxMDAwMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAmOmFmdGVye1xuICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDoxMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIGJvdHRvbTogLTNweDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCAjMzMzO1xuICAgICAgICBib3JkZXItYm90dG9tOiA3cHggc29saWQgIzMzMztcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG59IiwiLm5neC10b29sdGlwIHtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDRweCA2cHggNnB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXgtd2lkdGg6IDIwMHB4O1xufVxuLm5neC10b29sdGlwOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm90dG9tOiAtM3B4O1xuICBsZWZ0OiA1MCU7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkICMzMzM7XG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCAjMzMzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIHotaW5kZXg6IC0xO1xufSJdfQ== */");

/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ngx-tooltip/ngx-tooltip.component.ts":
/*!*********************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ngx-tooltip/ngx-tooltip.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NgxTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxTooltipComponent", function() { return NgxTooltipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tooltipBox', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
    ], NgxTooltipComponent.prototype, "tooltipBox", void 0);
    NgxTooltipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ngx-tooltip.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng-dashboard-core/src/lib/ngx-tooltip/ngx-tooltip.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ngx-tooltip.component.scss */ "./projects/ng-dashboard-core/src/lib/ngx-tooltip/ngx-tooltip.component.scss")).default]
        })
    ], NgxTooltipComponent);
    return NgxTooltipComponent;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ngx-tooltip/ngx-tooltip.module.ts":
/*!******************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ngx-tooltip/ngx-tooltip.module.ts ***!
  \******************************************************************************/
/*! exports provided: NgxTooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxTooltipModule", function() { return NgxTooltipModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tooltip_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip.directive */ "./projects/ng-dashboard-core/src/lib/ngx-tooltip/tooltip.directive.ts");
/* harmony import */ var _ngx_tooltip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngx-tooltip.component */ "./projects/ng-dashboard-core/src/lib/ngx-tooltip/ngx-tooltip.component.ts");





var NgxTooltipModule = /** @class */ (function () {
    function NgxTooltipModule() {
    }
    NgxTooltipModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            declarations: [
                _ngx_tooltip_component__WEBPACK_IMPORTED_MODULE_4__["NgxTooltipComponent"],
                _tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"]
            ],
            providers: [],
            entryComponents: [_ngx_tooltip_component__WEBPACK_IMPORTED_MODULE_4__["NgxTooltipComponent"]],
            exports: [
                _ngx_tooltip_component__WEBPACK_IMPORTED_MODULE_4__["NgxTooltipComponent"],
                _tooltip_directive__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"]
            ]
        })
    ], NgxTooltipModule);
    return NgxTooltipModule;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/lib/ngx-tooltip/tooltip.directive.ts":
/*!*****************************************************************************!*\
  !*** ./projects/ng-dashboard-core/src/lib/ngx-tooltip/tooltip.directive.ts ***!
  \*****************************************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_tooltip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-tooltip.component */ "./projects/ng-dashboard-core/src/lib/ngx-tooltip/ngx-tooltip.component.ts");



var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(el, componentFactoryResolver, appRef, injector) {
        this.el = el;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    TooltipDirective.prototype.onMouseEnter = function () {
        this.componentRef = this.componentFactoryResolver
            .resolveComponentFactory(_ngx_tooltip_component__WEBPACK_IMPORTED_MODULE_2__["NgxTooltipComponent"])
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
    TooltipDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TooltipDirective.prototype, "Tooltip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter')
    ], TooltipDirective.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave')
    ], TooltipDirective.prototype, "onMouseLeave", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')
    ], TooltipDirective.prototype, "onClick", null);
    TooltipDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            /* tslint:disable */
            selector: '[Tooltip]'
        })
    ], TooltipDirective);
    return TooltipDirective;
}());



/***/ }),

/***/ "./projects/ng-dashboard-core/src/public_api.ts":
/*!******************************************************!*\
  !*** ./projects/ng-dashboard-core/src/public_api.ts ***!
  \******************************************************/
/*! exports provided: NgDashboardService, NgDashboardModule, ConfigurationService, LayoutComponent, LayoutFadeComponent, AuthLayoutChild, ActivityTypes, TemperatureCustomization, CloudDeviceType, GetNetworkError, error, IsSuccessEntity, IsDataSource, handleRoute, urlMatch, UpdateOrPrepend, UpdateOrInsert, ComponentCommon, parseStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./projects/ng-dashboard-core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_ng_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ng-dashboard.service */ "./projects/ng-dashboard-core/src/lib/ng-dashboard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgDashboardService", function() { return _lib_ng_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["NgDashboardService"]; });

/* harmony import */ var _lib_ng_dashboard_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ng-dashboard.module */ "./projects/ng-dashboard-core/src/lib/ng-dashboard.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgDashboardModule", function() { return _lib_ng_dashboard_module__WEBPACK_IMPORTED_MODULE_2__["NgDashboardModule"]; });

/* harmony import */ var _lib_ng5_basic_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/ng5-basic/services/configuration.service */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/configuration.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return _lib_ng5_basic_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"]; });

/* harmony import */ var _lib_ng5_basic_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/ng5-basic/components/layout/layout.component */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/layout/layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return _lib_ng5_basic_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"]; });

/* harmony import */ var _lib_ng5_basic_components_layout_fade_layout_fade_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/ng5-basic/components/layout-fade/layout-fade.component */ "./projects/ng-dashboard-core/src/lib/ng5-basic/components/layout-fade/layout-fade.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutFadeComponent", function() { return _lib_ng5_basic_components_layout_fade_layout_fade_component__WEBPACK_IMPORTED_MODULE_5__["LayoutFadeComponent"]; });

/* harmony import */ var _lib_ng5_basic_services_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/ng5-basic/services/helpers */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/helpers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutChild", function() { return _lib_ng5_basic_services_helpers__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutChild"]; });

/* harmony import */ var _lib_ng5_basic_definitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/ng5-basic/definitions */ "./projects/ng-dashboard-core/src/lib/ng5-basic/definitions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivityTypes", function() { return _lib_ng5_basic_definitions__WEBPACK_IMPORTED_MODULE_7__["ActivityTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemperatureCustomization", function() { return _lib_ng5_basic_definitions__WEBPACK_IMPORTED_MODULE_7__["TemperatureCustomization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudDeviceType", function() { return _lib_ng5_basic_definitions__WEBPACK_IMPORTED_MODULE_7__["CloudDeviceType"]; });

/* harmony import */ var _lib_ng5_basic_services_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/ng5-basic/services/common */ "./projects/ng-dashboard-core/src/lib/ng5-basic/services/common.ts");
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

/*
 * Public API Surface of ng-dashboard
 */











/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, createRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRoutes", function() { return createRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var projects_ng_dashboard_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/ng-dashboard-core/src/public_api */ "./projects/ng-dashboard-core/src/public_api.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
/* harmony import */ var projects_ng_authentication_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/ng-authentication/src/public_api */ "./projects/ng-authentication/src/public_api.ts");






var routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    {
        path: 'login',
        component: projects_ng_authentication_src_public_api__WEBPACK_IMPORTED_MODULE_5__["LoginFormComponent"]
    },
    {
        path: 'index',
        component: projects_ng_dashboard_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            {
                path: '',
                component: _preview_preview_component__WEBPACK_IMPORTED_MODULE_4__["PreviewComponent"]
            }
        ]
    },
    { path: '**', redirectTo: '/index' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                projects_ng_dashboard_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["NgDashboardModule"].forRoot({
                    navigation: [
                        {
                            link: '/index',
                            icon: 'icon-home',
                            title: 'Home',
                            class: 'home'
                        },
                        {
                            link: '/login',
                            icon: 'icon-home',
                            title: 'Login',
                            class: 'login'
                        }
                    ]
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

function createRoutes() {
    return _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes);
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng-dashboard';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var projects_ng_dashboard_core_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/ng-dashboard-core/src/public_api */ "./projects/ng-dashboard-core/src/public_api.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
/* harmony import */ var projects_ng_authentication_src_public_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/ng-authentication/src/public_api */ "./projects/ng-authentication/src/public_api.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _preview_preview_component__WEBPACK_IMPORTED_MODULE_6__["PreviewComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                projects_ng_dashboard_core_src_public_api__WEBPACK_IMPORTED_MODULE_5__["NgDashboardModule"],
                projects_ng_authentication_src_public_api__WEBPACK_IMPORTED_MODULE_7__["NgAuthenticationModule"].forRoot({})
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/preview/preview.component.scss":
/*!************************************************!*\
  !*** ./src/app/preview/preview.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXZpZXcvcHJldmlldy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/preview/preview.component.ts":
/*!**********************************************!*\
  !*** ./src/app/preview/preview.component.ts ***!
  \**********************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PreviewComponent = /** @class */ (function () {
    function PreviewComponent() {
    }
    PreviewComponent.prototype.ngOnInit = function () {
    };
    PreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preview',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./preview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/preview/preview.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./preview.component.scss */ "./src/app/preview/preview.component.scss")).default]
        })
    ], PreviewComponent);
    return PreviewComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
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