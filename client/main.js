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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div  class=\"chatform\">\n  <app-message-list [messages]=\"messages\"></app-message-list>\n  <app-message-form [message]=\"message\" [messages]=\"messages\"></app-message-form>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatform {\n  width: 600px;\n  margin: 0 auto;\n  margin-top: 50px; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/message */ "./src/app/models/message.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.message = new _models_message__WEBPACK_IMPORTED_MODULE_1__["Message"]('', 'assets/images/user.png');
        this.messages = [
            new _models_message__WEBPACK_IMPORTED_MODULE_1__["Message"]('Welcome to BCIS Paper Helper', 'assets/images/bot.png', new Date())
        ];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_services_dialogflow_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/services/dialogflow.service */ "./src/app/services/dialogflow.service.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/app/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["MessageListComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["MessageFormComponent"],
                _components__WEBPACK_IMPORTED_MODULE_6__["MessageItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]
            ],
            providers: [
                _app_services_dialogflow_service__WEBPACK_IMPORTED_MODULE_5__["DialogflowService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/index.ts":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: MessageFormComponent, MessageListComponent, MessageItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message_form_message_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-form/message-form.component */ "./src/app/components/message-form/message-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageFormComponent", function() { return _message_form_message_form_component__WEBPACK_IMPORTED_MODULE_0__["MessageFormComponent"]; });

/* harmony import */ var _message_list_message_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-list/message-list.component */ "./src/app/components/message-list/message-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return _message_list_message_list_component__WEBPACK_IMPORTED_MODULE_1__["MessageListComponent"]; });

/* harmony import */ var _message_item_message_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-item/message-item.component */ "./src/app/components/message-item/message-item.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageItemComponent", function() { return _message_item_message_item_component__WEBPACK_IMPORTED_MODULE_2__["MessageItemComponent"]; });






/***/ }),

/***/ "./src/app/components/message-form/message-form.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/message-form/message-form.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chatcontrol\">\n  <input type=\"text\" class=\"form-control chatinput\" [(ngModel)]=\"message.content\"/>\n  <button class=\"btn btn-success sendbtn\" (click)=\"sendMessage()\">Send</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/message-form/message-form.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/message-form/message-form.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatcontrol {\n  float: left;\n  width: 100%; }\n  .chatcontrol .chatinput {\n    width: 80%;\n    float: left;\n    border-radius: 0; }\n  .chatcontrol .sendbtn {\n    width: 20%;\n    float: left;\n    border-radius: 0;\n    text-transform: uppercase; }\n"

/***/ }),

/***/ "./src/app/components/message-form/message-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/message-form/message-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: MessageFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageFormComponent", function() { return MessageFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/message */ "./src/app/models/message.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageFormComponent = /** @class */ (function () {
    function MessageFormComponent(dialogFlowService) {
        this.dialogFlowService = dialogFlowService;
    }
    MessageFormComponent.prototype.ngOnInit = function () {
    };
    MessageFormComponent.prototype.sendMessage = function () {
        var _this = this;
        this.message.timestamp = new Date();
        this.messages.push(this.message);
        this.dialogFlowService.getResponse(this.message.content).subscribe(function (res) {
            _this.messages.push(new _models_message__WEBPACK_IMPORTED_MODULE_1__["Message"](res.result.fulfillment.speech, 'assets/images/bot.png', res.timestamp));
        });
        this.message = new _models_message__WEBPACK_IMPORTED_MODULE_1__["Message"]('', 'assets/images/user.png');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('message'),
        __metadata("design:type", _models_message__WEBPACK_IMPORTED_MODULE_1__["Message"])
    ], MessageFormComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('messages'),
        __metadata("design:type", Array)
    ], MessageFormComponent.prototype, "messages", void 0);
    MessageFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message-form',
            template: __webpack_require__(/*! ./message-form.component.html */ "./src/app/components/message-form/message-form.component.html"),
            styles: [__webpack_require__(/*! ./message-form.component.scss */ "./src/app/components/message-form/message-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["DialogflowService"]])
    ], MessageFormComponent);
    return MessageFormComponent;
}());



/***/ }),

/***/ "./src/app/components/message-item/message-item.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/message-item/message-item.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"list-group-item\">\n  <img [src]=\"message.avatar\" class=\"avatar\"/>\n  <div class=\"message\">\n    {{message.content}}\n  </div>\n  <div class=\"timeform\">\n    <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> <span class=\"timestamp\">at {{message.timestamp | date : 'h:mm' }}</span>\n  </div>\n</li>\n"

/***/ }),

/***/ "./src/app/components/message-item/message-item.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/message-item/message-item.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 400; }\n\n.timeform {\n  float: left;\n  width: 100%; }\n\n.timeform i {\n    margin-left: 20px; }\n\n.timeform .timestamp {\n    font-size: 0.6em; }\n\n.avatar {\n  width: 50px;\n  margin-right: 20px; }\n"

/***/ }),

/***/ "./src/app/components/message-item/message-item.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/message-item/message-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: MessageItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageItemComponent", function() { return MessageItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/message */ "./src/app/models/message.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageItemComponent = /** @class */ (function () {
    function MessageItemComponent() {
    }
    MessageItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('message'),
        __metadata("design:type", _models_message__WEBPACK_IMPORTED_MODULE_1__["Message"])
    ], MessageItemComponent.prototype, "message", void 0);
    MessageItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message-item',
            template: __webpack_require__(/*! ./message-item.component.html */ "./src/app/components/message-item/message-item.component.html"),
            styles: [__webpack_require__(/*! ./message-item.component.scss */ "./src/app/components/message-item/message-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageItemComponent);
    return MessageItemComponent;
}());



/***/ }),

/***/ "./src/app/components/message-list/message-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/message-list/message-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chatlist\" #chatlist>\n  <ul class=\"list-group\">\n    <app-message-item *ngFor=\"let msg of messages\" [message]=\"msg\"></app-message-item>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/message-list/message-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/message-list/message-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatlist {\n  height: 600px;\n  overflow-y: scroll; }\n"

/***/ }),

/***/ "./src/app/components/message-list/message-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/message-list/message-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: MessageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return MessageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_item_message_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message-item/message-item.component */ "./src/app/components/message-item/message-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageListComponent = /** @class */ (function () {
    function MessageListComponent() {
    }
    MessageListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.chatItems.changes.subscribe(function (elements) {
            // console.log('messsage list changed: ' + this.messages.length);
            _this.scrollToBottom();
        });
    };
    MessageListComponent.prototype.scrollToBottom = function () {
        try {
            this.chatList.nativeElement.scrollTop = this.chatList.nativeElement.scrollHeight;
        }
        catch (err) {
            console.log('Could not find the "chatList" element.');
        }
    };
    MessageListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('messages'),
        __metadata("design:type", Array)
    ], MessageListComponent.prototype, "messages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatlist', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MessageListComponent.prototype, "chatList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_message_item_message_item_component__WEBPACK_IMPORTED_MODULE_1__["MessageItemComponent"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], MessageListComponent.prototype, "chatItems", void 0);
    MessageListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message-list',
            template: __webpack_require__(/*! ./message-list.component.html */ "./src/app/components/message-list/message-list.component.html"),
            styles: [__webpack_require__(/*! ./message-list.component.scss */ "./src/app/components/message-list/message-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageListComponent);
    return MessageListComponent;
}());



/***/ }),

/***/ "./src/app/models/message.ts":
/*!***********************************!*\
  !*** ./src/app/models/message.ts ***!
  \***********************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(content, avatar, timestamp) {
        this.content = content;
        this.timestamp = timestamp;
        this.avatar = avatar;
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/services/dialogflow.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/dialogflow.service.ts ***!
  \************************************************/
/*! exports provided: DialogflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogflowService", function() { return DialogflowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogflowService = /** @class */ (function () {
    function DialogflowService(http) {
        this.http = http;
        this.baseURL = 'https://api.dialogflow.com/v1/query?v=20150910';
        this.token = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].token;
    }
    DialogflowService.prototype.getResponse = function (query) {
        var data = {
            query: query,
            lang: 'en',
            sessionId: '12345'
        };
        return this.http
            .post("" + this.baseURL, data, { headers: this.getHeaders() }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res.json();
        }));
    };
    DialogflowService.prototype.getHeaders = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Authorization', "Bearer " + this.token);
        return headers;
    };
    DialogflowService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DialogflowService);
    return DialogflowService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: DialogflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dialogflow_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialogflow.service */ "./src/app/services/dialogflow.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogflowService", function() { return _dialogflow_service__WEBPACK_IMPORTED_MODULE_0__["DialogflowService"]; });




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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    token: '454fa83e408c4d6aa5f77e984764b7d3'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/arencaballes/assignment1b/chatbots/angular-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map