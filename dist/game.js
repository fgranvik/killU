var Game;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
class Game {
    constructor() {
        this.init = () => {
            console.log("Game init");
            console.log(this.test);
        };
        this.test = 0;
    }
}
exports["default"] = Game;
// const game = new Game();
// game.init();

})();

Game = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=game.js.map