webpackJsonp([1],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/show/show.module": [
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
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonSimpleWizard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ion_simple_wizard_animations__ = __webpack_require__(194);
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
            selector: 'ion-simple-wizard',template:/*ion-inline-start:"/Users/pomgade/Desktop/NSOWater_sm/src/plugin/ion-wizard/ion-simple-wizard.component.html"*/'\n<div class ="ion-wizard-footer">\n        <ion-fab [@btnState] *ngIf="!isOnFirstStep()" left bottom>\n          <button ion-fab (click)="back()">\n            <ion-icon name="arrow-round-back"></ion-icon>\n          </button>\n        </ion-fab>\n        <!--Steps count-->   \n        <ion-badge style="font-size:20px" *ngIf="showSteps">ครัวเรือนที่ {{step}} / {{steps}}</ion-badge>\n        <!--Next Button-->\n        <ion-fab [@btnState] *ngIf="(!isOnFinalStep() && getCondition())" right bottom>\n          <button ion-fab (click)="next()">\n            <ion-icon name="arrow-round-forward"></ion-icon>\n          </button>\n        </ion-fab>\n        <!--Finish Button-->\n        <ion-fab [@btnState] *ngIf="(isOnFinalStep() && getCondition())" right bottom>\n          <button ion-fab (click)="finish.emit(step + 1)">\n            <ion-icon [name]="finishIcon"></ion-icon>\n          </button>\n        </ion-fab>\n      </div>\n\n\n\n<ng-content></ng-content>\n\n '/*ion-inline-end:"/Users/pomgade/Desktop/NSOWater_sm/src/plugin/ion-wizard/ion-simple-wizard.component.html"*/,
            animations: __WEBPACK_IMPORTED_MODULE_2__ion_simple_wizard_animations__["a" /* WizardAnimations */].btnRotate
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], IonSimpleWizard);
    return IonSimpleWizard;
}());

//# sourceMappingURL=ion-simple-wizard.component.js.map

/***/ }),

/***/ 194:
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

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, events) {
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
    HomePage.prototype.load = function () {
        this.sn1 = "page2";
    };
    HomePage.prototype.stpSelect = function () {
        console.log('STP selected');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/pomgade/Desktop/NSOWater_sm/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar  color="primary">\n    <ion-title style="text-align:center; color:red ">\n      แบบบันทึกการนับจด สน.1\n    </ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top color="primary" >\n    <ion-segment [(ngModel)]="sn1" >\n      <ion-segment-button value="page1" >\n        หน้าที่ 1\n      </ion-segment-button>\n      <ion-segment-button value="page2" [disabled]="!isSec2Enable" >\n        หน้าที่ 2\n      </ion-segment-button>\n      <ion-segment-button value="page3" [disabled]="!isSec3Enable" >\n        หน้าที่ 3\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n\n    \n  <ion-grid >\n    <ion-row justify-content-center >\n      <ion-col col-12  >\n          <div style="padding:50" [ngSwitch]="sn1">\n              <ion-list *ngSwitchCase="\'page1\'">\n                <sn1-sec1></sn1-sec1>\n              </ion-list>\n        \n              <ion-list *ngSwitchCase="\'page2\'">\n                <sn1-sec2></sn1-sec2>\n              </ion-list>\n        \n              <ion-list *ngSwitchCase="\'page3\'">\n                <sn1-sec3></sn1-sec3>\n              </ion-list>\n            </div>\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n    \n</ion-content>\n\n<!--ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="sn1">\n      <ion-segment-button value="page1">\n        Puppies\n      </ion-segment-button>\n      <ion-segment-button value="kittens">\n        Kittens\n      </ion-segment-button>\n      <ion-segment-button value="ducklings">\n        Ducklings\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n  <ion-content>\n    <div [ngSwitch]="sn1">\n      <ion-list *ngSwitchCase="page1">\n        <ion-item>\n            <ion-thumbnail item-start>\n            </ion-thumbnail>\n             <h2>Ruby</h2>\n        </ion-item>\n      </ion-list>\n    </div>\n  </ion-content>\n</ion-header-->\n\n<!--ion-content padding>\n  \n</ion-content-->'/*ion-inline-end:"/Users/pomgade/Desktop/NSOWater_sm/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowPage; });
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
 * Generated class for the ShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShowPage = /** @class */ (function () {
    function ShowPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log(navParams.get('val'));
    }
    ShowPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShowPage');
    };
    ShowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-show',template:/*ion-inline-start:"/Users/pomgade/Desktop/NSOWater_sm/src/pages/show/show.html"*/'<!--\n  Generated template for the ShowPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>showPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pomgade/Desktop/NSOWater_sm/src/pages/show/show.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ShowPage);
    return ShowPage;
}());

//# sourceMappingURL=show.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_show_show__ = __webpack_require__(197);
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
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_show_show__["a" /* ShowPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/show/show.module#ShowPageModule', name: 'ShowPage', segment: 'show', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_show_show__["a" /* ShowPage */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plugin_ion_wizard_ion_simple_wizard_component__ = __webpack_require__(193);
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
            selector: 'sn1-sec1',template:/*ion-inline-start:"/Users/pomgade/Desktop/NSOWater_sm/src/components/sn1-sec1/sn1-sec1.html"*/' \n <ion-item>\n            <ion-label stacked >ชื่อถนน ลำน้ำหรือละแวกบ้าน</ion-label>\n            <ion-input type="text" placeholder="ชื่อถนน สำเนาหรือละแวกบ้าน"></ion-input>\n        </ion-item>\n<ion-item>\n    <input>\n</ion-item>\n<ion-item>\n  <h2>ชื่อตรอก/ซอย</h2>\n</ion-item>\n<ion-item>\n    <input>\n</ion-item>\n<ion-item>\n  <h2>ชื่อหมู่บ้าน/คอนโด/อาคาร/สำนักงาน/สถานประกอบการ/สถาบัน ฯลฯ</h2>\n</ion-item>\n<ion-item>\n    <input>\n</ion-item>\n<ion-item>\n  <h2>เลขที่บ้าน/อาคาร</h2>\n</ion-item>\n<ion-item>\n    <input>\n</ion-item>\n<ion-item>\n    <ion-label>ประเภทบ้าน/อาคาร/สิ่งปลูกสร้าง </ion-label>\n    <ion-select [(ngModel)]="os" submitText="OK" cancelText="cancel">\n      <ion-option value="dos">DOS</ion-option>\n      <ion-option value="lunix">Linux</ion-option>\n      <ion-option value="mac7">Mac OS 7</ion-option>\n      <ion-option value="mac8">Mac OS 8</ion-option>\n      <ion-option value="win3.1">Windows 3.1</ion-option>\n      <ion-option value="win95">Windows 95</ion-option>\n      <ion-option value="win98">Windows 98</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>การเข้าพบ /3</ion-label>\n    <ion-select [(ngModel)]="os" submitText="OK" cancelText="cancel">\n      <ion-option value="dos">DOS</ion-option>\n      <ion-option value="lunix">Linux</ion-option>\n      <ion-option value="mac7">Mac OS 7</ion-option>\n      <ion-option value="mac8">Mac OS 8</ion-option>\n      <ion-option value="win3.1">Windows 3.1</ion-option>\n      <ion-option value="win95">Windows 95</ion-option>\n      <ion-option value="win98">Windows 98</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <h2>ให้ขันทึกข้อความเกี่ยวกับ ปัญหา/อุปสรรค/การนัดหมาย/เหตุผล ที่นับจดไม่ได้</h2>\n  </ion-item>\n  <ion-item>\n      <input>\n  </ion-item>\n  <button ion-button (click)="submit()">Next ></button>\n'/*ion-inline-end:"/Users/pomgade/Desktop/NSOWater_sm/src/components/sn1-sec1/sn1-sec1.html"*/
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
            selector: 'sn1-sec2',template:/*ion-inline-start:"/Users/pomgade/Desktop/NSOWater_sm/src/components/sn1-sec2/sn1-sec2.html"*/'<ion-item>\n  <h2>จำนวนครัวเรือน/สถานประกอบการรวมทั้งหมด ในบ้าน/อาคาร/สิ่งปลูกสร้าง</h2>\n</ion-item>\n<ion-item>\n  <ion-input placeholder="กรอก"></ion-input>\n</ion-item>\n<button ion-button (click)="submit()">Next ></button>'/*ion-inline-end:"/Users/pomgade/Desktop/NSOWater_sm/src/components/sn1-sec2/sn1-sec2.html"*/
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
            selector: 'sn1-sec3',template:/*ion-inline-start:"/Users/pomgade/Desktop/NSOWater_sm/src/components/sn1-sec3/sn1-sec3.html"*/'\n\n\n<ion-simple-wizard [(step)]="step" [showSteps]="true" (finish)="onFinish()" [finishIcon]="\'done-all\'" [(stepCondition)]="stepCondition">\n    <ion-wizard-step>\n        <ion-item>\n            <h2>Ruby</h2>\n          </ion-item>\n          <ion-item>\n            <h2>Oscar</h2>\n          </ion-item>\n          <ion-item>\n            <h2>Zoey</h2>\n          </ion-item>\n          <ion-item>\n            <h2>Otto</h2>\n          </ion-item>\n    </ion-wizard-step>\n    <ion-wizard-step>\n      ทดสอบ\n    </ion-wizard-step>\n    <ion-wizard-step>\n      ทดสอบ2\n    </ion-wizard-step>\n</ion-simple-wizard>\n'/*ion-inline-end:"/Users/pomgade/Desktop/NSOWater_sm/src/components/sn1-sec3/sn1-sec3.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ion_simple_wizard_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ion_simple_wizard_animations__ = __webpack_require__(194);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/pomgade/Desktop/NSOWater_sm/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/pomgade/Desktop/NSOWater_sm/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map