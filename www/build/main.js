webpackJsonp([1],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SN1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SN1 = /** @class */ (function () {
    function SN1(navCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.events = events;
        this.gaming = "n64";
        this.gender = "f";
        this.sn1 = "page1";
        this.isAndroid = false;
        this.stepCondition = true;
        this.isSec1Enable = true;
        this.isSec2Enable = false;
        this.isSec3Enable = false;
        this.events.subscribe("sec1Submitted", function () {
            _this.sn1 = "page2";
            _this.isSec2Enable = true;
        });
        this.events.subscribe("sec2Submitted", function () {
            _this.sn1 = "page3";
            _this.isSec3Enable = true;
        });
    }
    SN1.prototype.load = function () {
        this.sn1 = "page2";
    };
    SN1.prototype.stpSelect = function () {
        console.log('STP selected');
    };
    SN1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sn1',template:/*ion-inline-start:"E:\NSOWater_sm\src\pages\sn1\sn1.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title style="text-align:center; color:red ">\n\n      แบบบันทึกการนับจด สน.1\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top color="primary">\n\n    <ion-segment [(ngModel)]="sn1">\n\n      <ion-segment-button value="page1">\n\n        หน้าที่ 1\n\n      </ion-segment-button>\n\n      <ion-segment-button value="page2" [disabled]="!isSec2Enable">\n\n        หน้าที่ 2\n\n      </ion-segment-button>\n\n      <ion-segment-button value="page3" [disabled]="!isSec3Enable">\n\n        หน้าที่ 3\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content>\n\n\n\n\n\n  <ion-grid>\n\n    <ion-row justify-content-center>\n\n      <ion-col col-12>\n\n        <div style="padding:50" [ngSwitch]="sn1">\n\n          <ion-list *ngSwitchCase="\'page1\'">\n\n            <sn1-sec1></sn1-sec1>\n\n          </ion-list>\n\n\n\n          <ion-list *ngSwitchCase="\'page2\'">\n\n            <sn1-sec2></sn1-sec2>\n\n          </ion-list>\n\n\n\n          <ion-list *ngSwitchCase="\'page3\'">\n\n            <sn1-sec3></sn1-sec3>\n\n          </ion-list>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar color="primary">\n\n    <ion-grid>\n\n      <ion-row no-padding no-margin>\n\n        <ion-col col-3>\n\n          <button ion-button round large (click)="goHome()" icon-start color="light">\n\n            HOME\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-auto>\n\n          <button ion-button round large icon-start color="light">\n\n            แผนที่\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-auto>\n\n          <button ion-button round large icon-start color="light">\n\n            มาตรา\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-auto>\n\n          <button ion-button round large icon-start color="light">\n\n            หยุดชั่วคราว\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-auto>\n\n          <button ion-button round large icon-start color="light">\n\n            บันทึก\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n<!--ion-toolbar no-border-top>\n\n    <ion-segment [(ngModel)]="sn1">\n\n      <ion-segment-button value="page1">\n\n        Puppies\n\n      </ion-segment-button>\n\n      <ion-segment-button value="kittens">\n\n        Kittens\n\n      </ion-segment-button>\n\n      <ion-segment-button value="ducklings">\n\n        Ducklings\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n  <ion-content>\n\n    <div [ngSwitch]="sn1">\n\n      <ion-list *ngSwitchCase="page1">\n\n        <ion-item>\n\n            <ion-thumbnail item-start>\n\n            </ion-thumbnail>\n\n             <h2>Ruby</h2>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n  </ion-content>\n\n</ion-header-->\n\n\n\n<!--ion-content padding>\n\n  \n\n</ion-content-->'/*ion-inline-end:"E:\NSOWater_sm\src\pages\sn1\sn1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], SN1);
    return SN1;
}());

//# sourceMappingURL=sn1.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonSimpleWizard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ion_simple_wizard_animations__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*import { Keyboard } from '@ionic-native/keyboard';*/


var IonSimpleWizard = /** @class */ (function () {
    function IonSimpleWizard(evts) {
        this.evts = evts;
        this.finishIcon = 'send'; //Default
        this.showSteps = true; //Default
        this.step = 1; //Default
        this.finish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.stepChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.steps = 0; //Innitial
        this.hideWizard = false; //Default
        this.stepCondition = true; //Default
    }
    IonSimpleWizard.prototype.ngOnInit = function () {
        /**
         * Hide the wizard buttons when the keyboard is open
         */
        /*this.keyboard.onKeyboardShow().subscribe(() => {
          this.hideWizard = true;
        });
        this.keyboard.onKeyboardHide().subscribe(() => {
          this.hideWizard = false;
        })*/
    };
    /**
     * @return {number} New Steps
     */
    IonSimpleWizard.prototype.addStep = function () {
        var newSteps = this.steps + 1;
        this.steps = newSteps;
        return newSteps;
    };
    /**
     * @return {boolean} true if is the final step
     */
    IonSimpleWizard.prototype.isOnFinalStep = function () {
        return this.step === this.steps;
    };
    /**
     * @return {boolean} the current step condition
     */
    IonSimpleWizard.prototype.getCondition = function () {
        return this.stepCondition;
    };
    /**
     * @return {boolean} true if the the step is the first
     */
    IonSimpleWizard.prototype.isOnFirstStep = function () {
        return this.step === 1;
    };
    /**
     * @method back button event and emit Event Called 'step:back'
     */
    IonSimpleWizard.prototype.back = function () {
        this.stepChange.emit(this.step - 1);
        this.evts.publish('step:back');
    };
    /**
     * @method next button event and emit  Event Called 'step:next'
     */
    IonSimpleWizard.prototype.next = function () {
        this.stepChange.emit(this.step + 1);
        this.evts.publish('step:next');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], IonSimpleWizard.prototype, "finishIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], IonSimpleWizard.prototype, "showSteps", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], IonSimpleWizard.prototype, "step", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], IonSimpleWizard.prototype, "finish", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], IonSimpleWizard.prototype, "stepChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], IonSimpleWizard.prototype, "stepCondition", void 0);
    IonSimpleWizard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-simple-wizard',template:/*ion-inline-start:"E:\NSOWater_sm\src\plugin\ion-wizard\ion-simple-wizard.component.html"*/'\n\n<div class ="ion-wizard-footer">\n\n        <ion-fab [@btnState] *ngIf="!isOnFirstStep()" left bottom>\n\n          <button ion-fab (click)="back()">\n\n            <ion-icon name="arrow-round-back"></ion-icon>\n\n          </button>\n\n          <br>\n\n          <br>\n\n          <br>\n\n          <br>\n\n          <br>\n\n        </ion-fab>\n\n        <!--Steps count-->   \n\n        <ion-badge style="font-size:20px" *ngIf="showSteps">ครัวเรือนที่ {{step}} / {{steps}}</ion-badge>\n\n        <!--Next Button-->\n\n        <ion-fab [@btnState] *ngIf="(!isOnFinalStep() && getCondition())" right bottom>\n\n          <button ion-fab (click)="next()">\n\n            <ion-icon name="arrow-round-forward"></ion-icon>\n\n          </button>\n\n          <br>\n\n          <br>\n\n          <br>\n\n          <br>\n\n          <br>\n\n        </ion-fab>\n\n        <!--Finish Button-->\n\n        <ion-fab [@btnState] *ngIf="(isOnFinalStep() && getCondition())" right bottom>\n\n          <button ion-fab (click)="finish.emit(step + 1)">\n\n            <ion-icon [name]="finishIcon"></ion-icon>\n\n          </button>\n\n          <br>\n\n          <br>\n\n          <br>\n\n          <br>\n\n          <br>\n\n        </ion-fab>\n\n      </div>\n\n\n\n\n\n\n\n<ng-content></ng-content>\n\n\n\n '/*ion-inline-end:"E:\NSOWater_sm\src\plugin\ion-wizard\ion-simple-wizard.component.html"*/,
            animations: __WEBPACK_IMPORTED_MODULE_2__ion_simple_wizard_animations__["a" /* WizardAnimations */].btnRotate
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], IonSimpleWizard);
    return IonSimpleWizard;
}());

//# sourceMappingURL=ion-simple-wizard.component.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardAnimations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var WizardAnimations = /** @class */ (function () {
    function WizardAnimations() {
    }
    //Buttons Animations
    WizardAnimations.btnZoom = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('btnState', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 0, transform: 'scale(0)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('400ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 1, transform: 'scale(1)' }))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('400ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 0, transform: 'scale(0)' }))
            ])
        ])
    ];
    WizardAnimations.btn_none = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('btnState', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ position: 'relative', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ display: 'none', position: 'relative', top: 0 }))
        ])
    ];
    WizardAnimations.btnflipY = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('btnState', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('400ms 200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* keyframes */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(100px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(100px) rotate3d(0, 1, 0, -20deg)', offset: 0.4 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(100px) rotate3d(0, 1, 0, 10deg)', opacity: '1', offset: 0.6 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(100px) rotate3d(0, 1, 0, -5deg)', opacity: '1', offset: 0.8 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(100px)', opacity: '1', offset: 1 })
                ]))
            ]), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('100ms 400ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* keyframes */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(100px)', opacity: '1', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(100px) rotate3d(0, 1, 0, -20deg)', opacity: '1', offset: 0.3 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(100px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 1 })
                ]))
            ])
        ])
    ];
    WizardAnimations.btnRotate = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('btnState', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('400ms 200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* keyframes */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'rotate3d(0, 0, 1, -200deg)', opacity: '0', transformOrigin: 'center', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'none', opacity: '1', transformOrigin: 'center', offset: 1 })
                ]))
            ]), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])(400, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* keyframes */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'none', opacity: '1', transformOrigin: 'center', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'rotate3d(0, 0, 1, 200deg)', opacity: '0', transformOrigin: 'center', offset: 1 })
                ]))
            ])
        ])
    ];
    //Steps Animations
    WizardAnimations.carruselRight = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ position: 'absolute', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'hidden', position: 'absolute', top: 0 })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'visible', opacity: 0, transform: 'translateX(-100%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 1, transform: 'translateX(0%)' }))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translateX(0%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 0, transform: 'translateX(100%)' }))
            ])
        ])
    ];
    WizardAnimations.zoom = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ position: 'absolute', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'hidden', position: 'absolute', top: 0 })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'visible', opacity: 0, transform: 'scale(0)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('300ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 1, transform: 'scale(1)', top: 0 }))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('300ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 0, transform: 'scale(0)', top: 0 }))
            ])
        ])
    ];
    WizardAnimations.none = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ position: 'relative', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ display: 'none', position: 'relative', top: 0 }))
        ])
    ];
    WizardAnimations.carruselLeft = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ position: 'absolute', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'hidden', position: 'absolute', top: 0 })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'visible', opacity: 0, transform: 'translateX(100%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 1, transform: 'translateX(0%)' }))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translateX(0%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 0, transform: 'translateX(-100%)' }))
            ])
        ])
    ];
    WizardAnimations.carruselBottom = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ position: 'absolute', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'hidden', position: 'absolute', top: 0 })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'visible', opacity: 0, transform: 'translateY(-100%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 1, transform: 'translateY(0%)' }))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translateY(0%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 0, transform: 'translateY(100%)' }))
            ])
        ])
    ];
    WizardAnimations.carruselTop = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ position: 'absolute', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'hidden', position: 'absolute', top: 0 })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'visible', opacity: 0, transform: 'translateY(100%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 1, transform: 'translateY(0%)' }))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'translateY(0%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('500ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 0, transform: 'translateY(-100%)' }))
            ])
        ])
    ];
    WizardAnimations.flipY = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ position: 'absolute', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'hidden', position: 'absolute', top: 0 })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'visible' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('400ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* keyframes */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', offset: 0.4 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: '0.5', offset: 0.6 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', opacity: '1', offset: 0.8 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px)', opacity: '1', offset: 1 })
                ]))
            ]), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'visible' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* keyframes */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px)', opacity: '1', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', opacity: '0.5', offset: 0.3 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 1 })
                ]))
            ])
        ])
    ];
    WizardAnimations.flipX = [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* trigger */])('WizardAnimations', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('enter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ position: 'absolute', top: 0, width: '100%' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'hidden', position: 'absolute', top: 0 })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'visible' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('400ms 200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* keyframes */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', offset: 0.4 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: '0.5', offset: 0.6 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)', opacity: '1', offset: 0.8 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px)', opacity: '1', offset: 1 })
                ]))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('*=>leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ visibility: 'visible' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* animate */])('400ms 200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* keyframes */])([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px)', opacity: '1', offset: 0 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: '0.5', offset: 0.3 }),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0', offset: 1 })
                ]))
            ])
        ])
    ];
    return WizardAnimations;
}());

//# sourceMappingURL=ion-simple-wizard-animations.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sn1_sn1__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sn1_sn1__["a" /* SN1 */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sn1_sn1__["a" /* SN1 */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sn1_sec1_sn1_sec1__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sn1_sec2_sn1_sec2__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sn1_sec3_sn1_sec3__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plugin_ion_wizard_ion_simple_wizard_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__plugin_ion_wizard_ion_simple_wizard_step_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__sn1_sec1_sn1_sec1__["a" /* Sn1Sec1Component */],
                __WEBPACK_IMPORTED_MODULE_2__sn1_sec2_sn1_sec2__["a" /* Sn1Sec2Component */],
                __WEBPACK_IMPORTED_MODULE_2__sn1_sec2_sn1_sec2__["a" /* Sn1Sec2Component */],
                __WEBPACK_IMPORTED_MODULE_3__sn1_sec3_sn1_sec3__["a" /* Sn1Sec3Component */],
                __WEBPACK_IMPORTED_MODULE_5__plugin_ion_wizard_ion_simple_wizard_component__["a" /* IonSimpleWizard */],
                __WEBPACK_IMPORTED_MODULE_6__plugin_ion_wizard_ion_simple_wizard_step_component__["a" /* IonSimpleWizardStep */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__sn1_sec1_sn1_sec1__["a" /* Sn1Sec1Component */],
                __WEBPACK_IMPORTED_MODULE_2__sn1_sec2_sn1_sec2__["a" /* Sn1Sec2Component */],
                __WEBPACK_IMPORTED_MODULE_2__sn1_sec2_sn1_sec2__["a" /* Sn1Sec2Component */],
                __WEBPACK_IMPORTED_MODULE_3__sn1_sec3_sn1_sec3__["a" /* Sn1Sec3Component */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sn1Sec1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Sn1Sec1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var Sn1Sec1Component = /** @class */ (function () {
    function Sn1Sec1Component(events) {
        this.events = events;
        console.log('Hello Sn1Sec1Component Component');
        this.text = 'Hello World';
    }
    Sn1Sec1Component.prototype.submit = function () {
        this.events.publish("sec1Submitted");
    };
    Sn1Sec1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sn1-sec1',template:/*ion-inline-start:"E:\NSOWater_sm\src\components\sn1-sec1\sn1-sec1.html"*/' \n\n <br>\n\n <p><button ion-button color="dark" round >ชื่อถนน/ลำน้ำ/ละแวกบ้าน</button></p>\n\n <ion-item>\n\n            <ion-input type="text" placeholder="ชื่อถนน/ลำน้ำ/ละแวกบ้าน"></ion-input>\n\n        </ion-item>\n\n  <p><button ion-button color="dark" round >ชื่อตรอก/ซอย</button></p>\n\n<ion-item>\n\n  <ion-input placeholder="ชื่อตรอก/ซอย" style="background-color:whitesmoke;color: black"></ion-input>\n\n</ion-item>\n\n<p><button ion-button color="dark" round >ชื่อหมู่บ้าน/คอนโด/อาคาร/สำนักงาน/สถานประกอบการ/สถาบัน/อื่นๆ</button></p>\n\n<ion-item>\n\n  <ion-input placeholder="ชื่อหมู่บ้าน/คอนโด/อาคาร/สำนักงาน/สถานประกอบการ/สถาบัน/อื่น" ></ion-input>\n\n</ion-item>\n\n<p><button ion-button color="dark" round >เลขที่บ้าน/อาคาร</button></p>\n\n<ion-item>\n\n  <ion-input placeholder="เลขที่บ้าน/อาคาร" ></ion-input>\n\n</ion-item>\n\n<p><button ion-button color="dark" round style="font-size: 20px">ประเภทบ้าน/อาคาร/สิ่งปลูกสร้าง</button></p>\n\n      <ion-item>         \n\n          <ion-select [(ngModel)]="os1" interface="popover" placeholder="กรุณาเลือกประเภท" interface="action-sheet" cancelText="ยกเลิก" style="background-color:whitesmoke;color: black">\n\n              <ion-option value=\'1\'>1.บ้านเดี่ยว</ion-option>\n\n              <ion-option value=\'2\'>2.บ้านแฝด/ทาวน์เฮ้าส์</ion-option>\n\n              <ion-option value=\'3\'>3.ห้องแถว/เรือนแถว/ตึกแถว</ion-option>\n\n              <ion-option value=\'4\'>4.อาคารสูง(คอนโดฯ/แมนชั่น/แฟลต/อพาร์ทเมนท์)</ion-option>\n\n              <ion-option value=\'5\'>5.อาคารสำนักงานเอกชน</ion-option>\n\n              <ion-option value=\'6\'>6.โรงแรม/รีสอร์ท/เกสเฮาส์</ion-option>\n\n              <ion-option value=\'7\'>7.สถานพยาบาล:ภาครัฐ</ion-option>\n\n              <ion-option value=\'8\'>8.สถานพยาบาล:ภาคเอกชน</ion-option>\n\n              <ion-option value=\'9\'>9.สถานที่ราชการ/รัฐวิสาหกิจ</ion-option>\n\n              <ion-option value=\'10\'>10.ศาสนสถาน</ion-option>\n\n              <ion-option value=\'11\'>11.สถานศึกษา:ภาครัฐ</ion-option>\n\n              <ion-option value=\'12\'>12.สถานศึกษา:ภาคเอกชน</ion-option>\n\n              <ion-option value=\'13\'>13.โกดัง/โรงงาน</ion-option>\n\n              <ion-option value=\'14\'>14.โรงเรือนเพาะปลูก/เลี้ยงสัตว์</ion-option>\n\n              <ion-option value=\'15\'>15.อาคารกำลังก่อสร้าง</ion-option>\n\n              <ion-option value=\'16\'>16.อื่นๆ</ion-option>\n\n          </ion-select>\n\n    </ion-item>\n\n\n\n    <p><button ion-button color="dark" round >กรุณาเลือกผลการเข้าพบ </button></p>\n\n    <ion-item>         \n\n        <ion-select [(ngModel)]="os2" interface="popover" placeholder="กรุณาเลือกประเภท" interface="action-sheet" cancelText="ยกเลิก" style="background-color:whitesmoke;color: black">\n\n            <ion-option [value]=1>1.มีผู้ให้ข้อมูลให้ความร่วมมือ</ion-option>\n\n            <ion-option [value]=2>2.มีผู้ให้ข้อมูล แต่ไม่ให้ความร่วมมือ</ion-option>\n\n            <ion-option [value]=3>3.ไม่มี/ไม่พบผู้ให้ข้อมูล</ion-option>\n\n            <ion-option [value]=4>4.บ้าน/อาคาร ว่างหรือร้าง</ion-option>\n\n        </ion-select>\n\n  </ion-item>\n\n  <p><button ion-button color="dark" round style="font-size: 20px">ให้ขันทึกข้อความเกี่ยวกับ ปัญหา/อุปสรรค/การนัดหมาย/เหตุผล ที่นับจดไม่ได้</button></p>\n\n  <ion-item>\n\n    <ion-input placeholder="ปัญหาและอุปสรรคที่พบ" style="background-color:whitesmoke;color: black"></ion-input>\n\n  </ion-item>\n\n  <br>\n\n  <ion-buttons text-center>\n\n    <button ion-button large round (click)="submit()" >ถัดไป ></button>\n\n  </ion-buttons>'/*ion-inline-end:"E:\NSOWater_sm\src\components\sn1-sec1\sn1-sec1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], Sn1Sec1Component);
    return Sn1Sec1Component;
}());

//# sourceMappingURL=sn1-sec1.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sn1Sec2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Sn1Sec2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var Sn1Sec2Component = /** @class */ (function () {
    function Sn1Sec2Component(events) {
        this.events = events;
        console.log('Hello Sn1Sec2Component Component');
        this.text = 'Hello World';
    }
    Sn1Sec2Component.prototype.submit = function () {
        this.events.publish("sec2Submitted");
    };
    Sn1Sec2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sn1-sec2',template:/*ion-inline-start:"E:\NSOWater_sm\src\components\sn1-sec2\sn1-sec2.html"*/'<p><button ion-button color="dark" round >จำนวนครัวเรือน/สถานประกอบการรวมทั้งหมด ในบ้าน/อาคาร/สิ่งปลูกสร้าง</button></p>\n\n<ion-item>\n\n  <ion-input placeholder="กรอกจำนวน" ></ion-input>\n\n</ion-item>\n\n<br>\n\n<ion-buttons text-center>\n\n    <button ion-button large round (click)="submit()" >ถัดไป ></button>\n\n  </ion-buttons>'/*ion-inline-end:"E:\NSOWater_sm\src\components\sn1-sec2\sn1-sec2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], Sn1Sec2Component);
    return Sn1Sec2Component;
}());

//# sourceMappingURL=sn1-sec2.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sn1Sec3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the Sn1Sec3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var Sn1Sec3Component = /** @class */ (function () {
    function Sn1Sec3Component() {
        console.log('Hello Sn1Sec3Component Component');
        this.text = 'Hello World';
        this.stepCondition = true;
        this.isShow = true;
        this.step = 1;
    }
    Sn1Sec3Component.prototype.onFinish = function () {
    };
    Sn1Sec3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sn1-sec3',template:/*ion-inline-start:"E:\NSOWater_sm\src\components\sn1-sec3\sn1-sec3.html"*/'\n\n\n\n\n\n<ion-simple-wizard [(step)]="step" [showSteps]="true" (finish)="onFinish()" [finishIcon]="\'done-all\'" [(stepCondition)]="stepCondition">\n\n    <ion-wizard-step>\n\n      <p><button ion-button color="dark" round >ลำดับครัวเรือนสถานประกอบการในบ้าน/อาคาร/สิ่งปลูกสร้าง(ยูนิต)</button></p>\n\n      <ion-item>\n\n          <ion-input placeholder="ลำดับครัวเรือนสถานประกอบการในบ้าน/อาคาร/สิ่งปลูกสร้าง(ยูนิต)" ></ion-input>\n\n      </ion-item>\n\n      <ion-item>         \n\n        <ion-select [(ngModel)]="os2" interface="popover" placeholder="กรุณาเลือกการเข้าพบ" interface="action-sheet" cancelText="ยกเลิก" style="background-color:whitesmoke;color: black">\n\n            <ion-option [value]=1>1.มีผู้ให้ข้อมูลให้ความร่วมมือ</ion-option>\n\n            <ion-option [value]=2>2.มีผู้ให้ข้อมูล แต่ไม่ให้ความร่วมมือ</ion-option>\n\n            <ion-option [value]=3>3.ไม่มี/ไม่พบผู้ให้ข้อมูล</ion-option>\n\n            <ion-option [value]=4>4.บ้าน/อาคาร ว่างหรือร้าง</ion-option>\n\n        </ion-select>\n\n  </ion-item>\n\n      <p><button ion-button color="dark" round >กิจกรรมการใช้น้ำ</button></p>\n\n      <h4>  1.เพื่อการอุปโภคบริโภค: สถานที่นี้มีผู้อาศัยติดต่อกันนานเกิน 3 เดือน ใช่หรือไม่</h4>\n\n      <ion-row radio-group >\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-radio item-left [value]=true></ion-radio>\n\n            <ion-label>ใช่</ion-label>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-radio item-left [value]=false></ion-radio>\n\n            <ion-label>ไม่ใช่</ion-label>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n        <h4>    2.เพื่อการเกษตร: สถานที่นี้มีผู้อาศัยมีการปลูกพืช เลี้ยงสัตว์ ทำการเกษตรเอง ใช่หรือไม่</h4>\n\n        <ion-row radio-group >\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-radio item-left [value]=true></ion-radio>\n\n              <ion-label>ใช่</ion-label>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-radio item-left [value]=false></ion-radio>\n\n              <ion-label>ไม่ใช่</ion-label>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <h4>    3.เพื่อการผลิต: สถานที่นี้ใช้เพื่อการผลิต ใช่หรือไม่</h4>\n\n        <ion-row radio-group >\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-radio item-left [value]=true></ion-radio>\n\n              <ion-label>ใช่</ion-label>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-radio item-left [value]=false></ion-radio>\n\n              <ion-label>ไม่ใช่</ion-label>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <h4>    4.เพื่อการบริการ: สถานที่นี้ใช้เพื่อทำการบริการ ใช่หรือไม่</h4>\n\n        <ion-row radio-group >\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-radio item-left [value]=true></ion-radio>\n\n              <ion-label>ใช่</ion-label>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-radio item-left [value]=false></ion-radio>\n\n              <ion-label>ไม่ใช่</ion-label>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <p><button ion-button color="dark" round >ปัญหาและอุปสรรคที่พบ</button></p>\n\n    <ion-item>\n\n        <ion-input placeholder="ปัญหาและอุปสรรคที่พบ" ></ion-input>\n\n    </ion-item>\n\n    <br>\n\n    <ion-buttons text-center>\n\n        <button ion-button round  >เริ่มสำรวจ สน.2-1</button>\n\n    </ion-buttons>\n\n    <br>\n\n    <br>\n\n    </ion-wizard-step>\n\n\n\n\n\n\n\n    <ion-wizard-step>\n\n      <p><button ion-button color="dark" round >ลำดับครัวเรือนสถานประกอบการในบ้าน/อาคาร/สิ่งปลูกสร้าง(ยูนิต)</button></p>\n\n      <ion-item>\n\n          <ion-input placeholder="ลำดับครัวเรือนสถานประกอบการในบ้าน/อาคาร/สิ่งปลูกสร้าง(ยูนิต)" ></ion-input>\n\n      </ion-item>\n\n      <ion-item>         \n\n        <ion-select [(ngModel)]="os2" interface="popover" placeholder="กรุณาเลือกการเข้าพบ" interface="action-sheet" cancelText="ยกเลิก" style="background-color:whitesmoke;color: black">\n\n            <ion-option [value]=1>1.มีผู้ให้ข้อมูลให้ความร่วมมือ</ion-option>\n\n            <ion-option [value]=2>2.มีผู้ให้ข้อมูล แต่ไม่ให้ความร่วมมือ</ion-option>\n\n            <ion-option [value]=3>3.ไม่มี/ไม่พบผู้ให้ข้อมูล</ion-option>\n\n            <ion-option [value]=4>4.บ้าน/อาคาร ว่างหรือร้าง</ion-option>\n\n        </ion-select>\n\n  </ion-item>\n\n      <p><button ion-button color="dark" round >กิจกรรมการใช้น้ำ</button></p>\n\n      <h4>  1.เพื่อการอุปโภคบริโภค: สถานที่นี้มีผู้อาศัยติดต่อกันนานเกิน 3 เดือน ใช่หรือไม่</h4>\n\n      <ion-row radio-group >\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-radio item-left [value]=true></ion-radio>\n\n            <ion-label>ใช่</ion-label>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-radio item-left [value]=false></ion-radio>\n\n            <ion-label>ไม่ใช่</ion-label>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n        <h4>    2.เพื่อการเกษตร: สถานที่นี้มีผู้อาศัยมีการปลูกพืช เลี้ยงสัตว์ ทำการเกษตรเอง ใช่หรือไม่</h4>\n\n        <ion-row radio-group >\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-radio item-left [value]=true></ion-radio>\n\n              <ion-label>ใช่</ion-label>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-radio item-left [value]=false></ion-radio>\n\n              <ion-label>ไม่ใช่</ion-label>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <h4>    3.เพื่อการผลิต: สถานที่นี้ใช้เพื่อการผลิต ใช่หรือไม่</h4>\n\n        <ion-row radio-group >\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-radio item-left [value]=true></ion-radio>\n\n              <ion-label>ใช่</ion-label>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-radio item-left [value]=false></ion-radio>\n\n              <ion-label>ไม่ใช่</ion-label>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <h4>    4.เพื่อการบริการ: สถานที่นี้ใช้เพื่อทำการบริการ ใช่หรือไม่</h4>\n\n        <ion-row radio-group >\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-radio item-left [value]=true></ion-radio>\n\n              <ion-label>ใช่</ion-label>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-radio item-left [value]=false></ion-radio>\n\n              <ion-label>ไม่ใช่</ion-label>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <p><button ion-button color="dark" round >ปัญหาและอุปสรรคที่พบ</button></p>\n\n    <ion-item>\n\n        <ion-input placeholder="ปัญหาและอุปสรรคที่พบ" ></ion-input>\n\n    </ion-item>\n\n    <br>\n\n    <ion-buttons text-center>\n\n        <button ion-button round  >เริ่มสำรวจ สน.2-1</button>\n\n    </ion-buttons>\n\n    <br>\n\n    <br>\n\n    </ion-wizard-step>\n\n\n\n\n\n    <ion-wizard-step>\n\n      <p><button ion-button color="dark" round >ลำดับครัวเรือนสถานประกอบการในบ้าน/อาคาร/สิ่งปลูกสร้าง(ยูนิต)</button></p>\n\n      <ion-item>\n\n          <ion-input placeholder="ลำดับครัวเรือนสถานประกอบการในบ้าน/อาคาร/สิ่งปลูกสร้าง(ยูนิต)" ></ion-input>\n\n      </ion-item>\n\n      <ion-item>         \n\n        <ion-select [(ngModel)]="os2" interface="popover" placeholder="กรุณาเลือกการเข้าพบ" interface="action-sheet" cancelText="ยกเลิก" style="background-color:whitesmoke;color: black">\n\n            <ion-option [value]=1>1.มีผู้ให้ข้อมูลให้ความร่วมมือ</ion-option>\n\n            <ion-option [value]=2>2.มีผู้ให้ข้อมูล แต่ไม่ให้ความร่วมมือ</ion-option>\n\n            <ion-option [value]=3>3.ไม่มี/ไม่พบผู้ให้ข้อมูล</ion-option>\n\n            <ion-option [value]=4>4.บ้าน/อาคาร ว่างหรือร้าง</ion-option>\n\n        </ion-select>\n\n  </ion-item>\n\n      <p><button ion-button color="dark" round >กิจกรรมการใช้น้ำ</button></p>\n\n      <h4>  1.เพื่อการอุปโภคบริโภค: สถานที่นี้มีผู้อาศัยติดต่อกันนานเกิน 3 เดือน ใช่หรือไม่</h4>\n\n      <ion-row radio-group >\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-radio item-left [value]=true></ion-radio>\n\n            <ion-label>ใช่</ion-label>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-item>\n\n            <ion-radio item-left [value]=false></ion-radio>\n\n            <ion-label>ไม่ใช่</ion-label>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n        <h4>    2.เพื่อการเกษตร: สถานที่นี้มีผู้อาศัยมีการปลูกพืช เลี้ยงสัตว์ ทำการเกษตรเอง ใช่หรือไม่</h4>\n\n        <ion-row radio-group >\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-radio item-left [value]=true></ion-radio>\n\n              <ion-label>ใช่</ion-label>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-radio item-left [value]=false></ion-radio>\n\n              <ion-label>ไม่ใช่</ion-label>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <h4>    3.เพื่อการผลิต: สถานที่นี้ใช้เพื่อการผลิต ใช่หรือไม่</h4>\n\n        <ion-row radio-group >\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-radio item-left [value]=true></ion-radio>\n\n              <ion-label>ใช่</ion-label>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-radio item-left [value]=false></ion-radio>\n\n              <ion-label>ไม่ใช่</ion-label>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <h4>    4.เพื่อการบริการ: สถานที่นี้ใช้เพื่อทำการบริการ ใช่หรือไม่</h4>\n\n        <ion-row radio-group >\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-radio item-left [value]=true></ion-radio>\n\n              <ion-label>ใช่</ion-label>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-radio item-left [value]=false></ion-radio>\n\n              <ion-label>ไม่ใช่</ion-label>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <p><button ion-button color="dark" round >ปัญหาและอุปสรรคที่พบ</button></p>\n\n    <ion-item>\n\n        <ion-input placeholder="ปัญหาและอุปสรรคที่พบ" ></ion-input>\n\n    </ion-item>\n\n    <br>\n\n    <ion-buttons text-center>\n\n        <button ion-button round  >เริ่มสำรวจ สน.2-1</button>\n\n    </ion-buttons>\n\n    <br>\n\n    <br>\n\n    </ion-wizard-step>\n\n</ion-simple-wizard>\n\n'/*ion-inline-end:"E:\NSOWater_sm\src\components\sn1-sec3\sn1-sec3.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], Sn1Sec3Component);
    return Sn1Sec3Component;
}());

//# sourceMappingURL=sn1-sec3.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonSimpleWizardStep; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ion_simple_wizard_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ion_simple_wizard_animations__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IonSimpleWizardStep = /** @class */ (function () {
    function IonSimpleWizardStep(parent, evts) {
        var _this = this;
        this.parent = parent;
        this.evts = evts;
        this.step = this.parent.addStep();
        this.isCurrent = this.step === this.parent.step;
        this.parent.stepChange.subscribe(function (step) {
            _this.isCurrent = _this.step === step;
            if (_this.isCurrent) {
                _this.evts.publish('step:changed', _this.step);
            }
        });
    }
    IonSimpleWizardStep = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-wizard-step',
            host: {
                '[@WizardAnimations]': 'isCurrent ?"enter":"leave"'
            },
            template: "\n    <ng-content style=\"text-align:center\"></ng-content>\n  ",
            animations: __WEBPACK_IMPORTED_MODULE_3__ion_simple_wizard_animations__["a" /* WizardAnimations */].zoom //TO DO: Change the animation by @Input for example
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ion_simple_wizard_component__["a" /* IonSimpleWizard */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */]])
    ], IonSimpleWizardStep);
    return IonSimpleWizardStep;
}());

//# sourceMappingURL=ion-simple-wizard.step.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\NSOWater_sm\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"E:\NSOWater_sm\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sn1_sn1__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.generateSN1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sn1_sn1__["a" /* SN1 */]);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\NSOWater_sm\src\pages\home\home.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>home</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <button ion-button round (click)="generateSN1()">ถัดไป ></button>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\NSOWater_sm\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map