var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var MySubject = /** @class */ (function () {
    function MySubject() {
    }
    MySubject.prototype.on = function (event, observer) {
        var isExist = this.observers.has(event);
        if (isExist) {
            var items = this.observers.get(event);
            this.observers.set(event, __spreadArray(__spreadArray([], items, true), [observer], false));
        }
        else {
            this.observers.set(event, [observer]);
        }
    };
    return MySubject;
}());
//# sourceMappingURL=subjectObserver.js.map