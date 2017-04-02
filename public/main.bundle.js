webpackJsonp([0,3],{

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 140;


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(149);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Csaba/Documents/GitHub/QuizApp/ng-src/src/main.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_quiz_quiz_component__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRouting; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'quiz', component: __WEBPACK_IMPORTED_MODULE_4__components_quiz_quiz_component__["a" /* QuizComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        declarations: [],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

var appRoutingProviders = [];
var appRouting = __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=C:/Users/Csaba/Documents/GitHub/QuizApp/ng-src/src/app-routing.module.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(313),
        styles: [__webpack_require__(306)]
    })
], AppComponent);

//# sourceMappingURL=C:/Users/Csaba/Documents/GitHub/QuizApp/ng-src/src/app.component.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_quiz_quiz_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_quiz_counter_counter_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_quiz_questions_answers_questions_answers_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_quiz_quiz_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_quiz_results_results_component__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// Routing

// Service


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_quiz_quiz_component__["a" /* QuizComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_quiz_counter_counter_component__["a" /* CounterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_quiz_questions_answers_questions_answers_component__["a" /* QuestionsAnswersComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_quiz_results_results_component__["a" /* ResultsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["b" /* appRouting */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__app_routing_module__["c" /* appRoutingProviders */], __WEBPACK_IMPORTED_MODULE_10__components_quiz_quiz_service__["a" /* QuizService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=C:/Users/Csaba/Documents/GitHub/QuizApp/ng-src/src/app.module.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quiz_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Service

var CounterComponent = (function () {
    function CounterComponent(_quizService) {
        this._quizService = _quizService;
    }
    CounterComponent.prototype.ngOnInit = function () {
        function countdown(elem, min, sec) {
            var element, endTime, hours, mins, msLeft, time;
            function twoDigits(n) {
                return (n <= 9 ? "0" + n : n);
            }
            function updateTimer() {
                msLeft = endTime - (+new Date);
                if (msLeft < 1000) {
                    element.innerHTML = "Time is up!";
                }
                else {
                    time = new Date(msLeft);
                    hours = time.getUTCHours();
                    mins = time.getUTCMinutes();
                    element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
                    setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
                }
            }
            element = document.getElementById(elem);
            endTime = (+new Date) + 1000 * (60 * min + sec) + 500;
            updateTimer();
        }
        countdown("counter", 1, 0);
    };
    CounterComponent.prototype.ngDoCheck = function () {
        // console.log('CHECK!');
        if (document.getElementById('counter').innerHTML === "Time is up!") {
            console.log('TIME\'S UP!');
            this._quizService.quizDone(true);
        }
    };
    return CounterComponent;
}());
CounterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-counter',
        template: __webpack_require__(315),
        styles: [__webpack_require__(308)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__quiz_service__["a" /* QuizService */]) === "function" && _a || Object])
], CounterComponent);

var _a;
//# sourceMappingURL=C:/Users/Csaba/Documents/GitHub/QuizApp/ng-src/src/counter.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiz_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsAnswersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // required for getting products from JSON file
 // required by the .map method
// Data
// import { IQuiz } from 'api/qaa';
// Service

var QuestionsAnswersComponent = (function () {
    function QuestionsAnswersComponent(_http, _quizService) {
        this._http = _http;
        this._quizService = _quizService;
        this._answers = [];
        this.questionIndex = 1;
        this.selectedOptions = [];
        this.activeOptions = document.getElementsByClassName('active');
        this.quizScore = 0;
    }
    // get the list of the questions and answers as an observable
    // getQAAList(): Observable<IQuiz[]> {
    //   return this._http.get(this._quizQAUrl)
    //     .map(response => <IQuiz[]>response.json().quizData)
    // }
    // selected options
    QuestionsAnswersComponent.prototype.selected = function (elem) {
        elem.classList.toggle('active'); // toggles "active" CSS class on elements that the user clicks on
        this.selectedOptions.length = 0;
        for (var i = 0; i < this.activeOptions.length; i++) {
            this.selectedOptions.push(this.activeOptions[i].innerHTML);
        }
    };
    // next question function
    QuestionsAnswersComponent.prototype.nextQuestion = function () {
        if (this.questionIndex <= 10 /*this._quiz.length*/) {
            for (var i = this.questionIndex - 1; i < this.questionIndex; i++) {
                var selectedAnswers = String(this.selectedOptions);
                //var correctAnswer = String(this._quiz[i].answer);
                if (selectedAnswers /*=== correctAnswer*/) {
                    this.quizScore++;
                }
                if (this.questionIndex === 10 /*this._quiz.length*/) {
                    this.calculateScore();
                }
            }
            this.questionIndex++;
            this.selectedOptions.length = 0;
        }
    };
    QuestionsAnswersComponent.prototype.calculateScore = function () {
        this.quizScore = (this.quizScore / 10 /*this._quiz.length*/) * 100;
        this._quizService.quizDone(true);
        this._quizService.quizScore(this.quizScore);
    };
    QuestionsAnswersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getQAAList()
        //   .subscribe(
        //   quiz => this._quiz = quiz, // set our local _quiz array equal to the IQuiz[] data which arrive from our data stream
        //   error => this.errorMessage = <any>error);
        this._quizService.getQuizData().subscribe(function (quiz) {
            _this._quiz = quiz.questions;
        }, 
        // observables can also return an error
        function (err) {
            console.log(err);
            return false;
        });
    };
    QuestionsAnswersComponent.prototype.ngDoCheck = function () {
        // console.log('Score Sent');
        this._quizService.quizScore(this.quizScore * 10);
    };
    return QuestionsAnswersComponent;
}());
QuestionsAnswersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-questions-answers',
        template: __webpack_require__(316),
        styles: [__webpack_require__(309)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__quiz_service__["a" /* QuizService */]) === "function" && _b || Object])
], QuestionsAnswersComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/Csaba/Documents/GitHub/QuizApp/ng-src/src/questions-answers.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quiz_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Service

var ResultsComponent = (function () {
    function ResultsComponent(_quizService) {
        this._quizService = _quizService;
        this.quizScore = null;
        this.scoreSend = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
    }
    ResultsComponent.prototype.ngOnInit = function () {
        // Get Score from QuizService
        this.quizScore = this._quizService.score;
    };
    // Send Score to Quiz Component (parent)
    ResultsComponent.prototype.sendScore = function () {
        this.scoreSend.emit(this.quizScore);
    };
    ResultsComponent.prototype.ngOnDestroy = function () {
        console.log('RESULTS DESTROYED, Score & Boolean Nulled.');
        this._quizService.quizScore(null);
        this._quizService.quizDone(false);
    };
    return ResultsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], ResultsComponent.prototype, "scoreSend", void 0);
ResultsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-results',
        template: __webpack_require__(318),
        styles: [__webpack_require__(311)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__quiz_service__["a" /* QuizService */]) === "function" && _a || Object])
], ResultsComponent);

var _a;
//# sourceMappingURL=C:/Users/Csaba/Documents/GitHub/QuizApp/ng-src/src/results.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Csaba/Documents/GitHub/QuizApp/ng-src/src/environment.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=C:/Users/Csaba/Documents/GitHub/QuizApp/ng-src/src/polyfills.js.map

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".logo {\r\n    text-align: center;\r\n}\r\n.inner-container {\r\n    background: #fff;\r\n    padding: 2rem;\r\n    margin: 2rem;\r\n    text-align: center;\r\n}\r\n.btn-start {\r\n    max-width: 50%;\r\n    padding: 0.5rem 2rem;\r\n    border: 1px solid #a77c2a;\r\n    border-radius: 6px;\r\n    background: #ce4a34;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    outline: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "#counter {\r\n    font-size: 1.5em;\r\n    text-align: center;\r\n    letter-spacing: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".question-index {\r\n    padding: 1rem 0;\r\n}\r\n.question {\r\n    font-size: 1.25rem;\r\n    border: 1px solid #666;\r\n    border-radius: 6px;\r\n    padding: 1rem;\r\n    margin: 0 0 1rem 0;\r\n    background: #fafafa;\r\n}\r\n.option {\r\n    padding: 10px 20px;\r\n    margin: 5px 0px;\r\n    cursor: pointer;\r\n    border: 1px solid #999;\r\n    border-radius: 6px;\r\n    background: #fff;\r\n}\r\n.option:hover {\r\n    background: #eee;\r\n}\r\n.option.active {\r\n    background: #34a9ce;\r\n    color: #fff;\r\n    font-weight: bold;\r\n}\r\n.navigation {\r\n    margin-top: 1rem;\r\n}\r\n.navigation > button {\r\n    padding: 0.5rem 2rem;\r\n    border: 1px solid #a77c2a;\r\n    border-radius: 6px;\r\n    background: #ce4a34;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    outline: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".quiz {\r\n    padding: 1rem 0;\r\n    max-width: 1024px;\r\n    margin: auto;\r\n}\r\n.counter {\r\n    background: #2b6db3;\r\n    color:#fff;\r\n    padding: 0.25rem 0;\r\n}\r\n.qa {\r\n    background: #fff;\r\n    padding: 1rem;\r\n}\r\n.results {\r\n    background: #fff;\r\n    max-width: 1024px;\r\n    margin: 2rem auto;\r\n    padding: 2rem;\r\n    text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".score {\r\n    font-size: 2rem;\r\n    margin-bottom: 2rem\r\n}\r\n.score > div {\r\n    font-size: 4rem;\r\n    font-weight: bold;\r\n}\r\nbutton.btn-home {\r\n    max-width: 50%;\r\n    padding: 0.5rem 2rem;\r\n    border: 1px solid #a77c2a;\r\n    border-radius: 6px;\r\n    background: #ce4a34;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    outline: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 313:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 314:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"logo\"><h2>Simple M.E.A.N. Quiz</h2></div>\n    <div class=\"inner-container\">\n        <h2 class=\"title\">Do you think you are smart enough?</h2>\n        <p>Let's find out. Click the Start Quiz button below to start the quiz.</p>\n        <p>You will have 1 minute to answer 10 questions.</p>\n        <button class=\"btn-start\" routerLink=\"/quiz\">START QUIZ</button>\n    </div>\n</div>"

/***/ }),

/***/ 315:
/***/ (function(module, exports) {

module.exports = "<div id=\"counter\"></div>"

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let quiz of _quiz | slice:(questionIndex-1):questionIndex\">\n  <div class=\"question-index\">Question {{ questionIndex }} / {{ _quiz.length }}</div>\n  <p class=\"question\">{{ quiz.question }}</p>\n  <div [class]=\"'option option-' + i\" *ngFor=\"let option of quiz.options; let i = index\" (click)=\"selected(elem)\" #elem>{{ option }}</div>\n</div>\n\n<div class=\"navigation\" (click)=\"nextQuestion()\">\n  <button *ngIf=\"questionIndex < _quiz?.length\">Next Question</button>\n  <button *ngIf=\"questionIndex > (_quiz?.length - 1)\">Finish Quiz</button>\n</div>"

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

module.exports = "<div class=\"quiz\" *ngIf=\"isQuizDone === false\">\r\n    <div class=\"counter\">\r\n        <app-counter></app-counter>\r\n    </div>\r\n    <div class=\"qa\">\r\n        <app-questions-answers></app-questions-answers>\r\n    </div>\r\n</div>\r\n<div class=\"results\" *ngIf=\"isQuizDone === true\">\r\n    <app-results (sendScore)=\"handleScore($event)\"></app-results>\r\n</div>\r\n"

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

module.exports = "<div class=\"score\">Your result is:\n  <div>{{ quizScore }}%</div>\n</div>\n<div>\n  <button class=\"btn-home\" routerLink=\"/\">Back to Home</button>\n</div>"

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(141);


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizService = (function () {
    function QuizService(http) {
        this.http = http;
        this.isQuizDone = false;
        this.score = null;
    }
    // 5. Get Quiz Questons and Answers
    QuizService.prototype.getQuizData = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:5000/api/quiz', { headers: headers }) // update url on deployment
            .map(function (res) { return res.json(); });
    };
    QuizService.prototype.quizDone = function (data) {
        this.isQuizDone = data;
    };
    QuizService.prototype.quizScore = function (data) {
        this.score = data;
    };
    return QuizService;
}());
QuizService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], QuizService);

var _a;
//# sourceMappingURL=C:/Users/Csaba/Documents/GitHub/QuizApp/ng-src/src/quiz.service.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(314),
        styles: [__webpack_require__(307)]
    })
], HomeComponent);

//# sourceMappingURL=C:/Users/Csaba/Documents/GitHub/QuizApp/ng-src/src/home.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quiz_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Service

var QuizComponent = (function () {
    function QuizComponent(_quizService) {
        this._quizService = _quizService;
        this.score = null;
        this.isQuizDone = false;
    }
    // handleScore() triggered by sendScore Event, sent from Results Component
    QuizComponent.prototype.handleScore = function (data) {
        this.score = data;
    };
    // Checks if Quiz is Finished
    QuizComponent.prototype.ngDoCheck = function () {
        if (this._quizService.isQuizDone === true) {
            this.score = this._quizService.score;
            this.isQuizDone = this._quizService.isQuizDone;
        }
    };
    return QuizComponent;
}());
QuizComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-quiz',
        template: __webpack_require__(317),
        styles: [__webpack_require__(310)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__quiz_service__["a" /* QuizService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__quiz_service__["a" /* QuizService */]) === "function" && _a || Object])
], QuizComponent);

var _a;
//# sourceMappingURL=C:/Users/Csaba/Documents/GitHub/QuizApp/ng-src/src/quiz.component.js.map

/***/ })

},[349]);
//# sourceMappingURL=main.bundle.js.map