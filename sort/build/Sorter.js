"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// note: you can remove the use of interface here.
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    // Bubble Sort, highest value bubbles up to the right side
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
