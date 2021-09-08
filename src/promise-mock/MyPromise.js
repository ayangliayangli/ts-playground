var MyPromise = /** @class */ (function () {
    function MyPromise(fn) {
        this.resolveListeners = [];
        this.status = "pending";
        console.dir("===", this);
        fn(this.resolve);
        // console.dir("===", this);
    }
    MyPromise.prototype.resolve = function (value) {
        var _this = this;
        setTimeout(function () {
            _this.resolveListeners.forEach(function (callback) {
                callback(value);
            });
        }, 0);
    };
    MyPromise.prototype.then = function (onFulfilled) {
        var _this = this;
        return new MyPromise(function (resolve) {
            var handle = function (value) {
                var ret = onFulfilled(value);
                resolve(ret);
            };
            _this.resolveListeners.push(handle);
        });
    };
    return MyPromise;
}());
var a = new MyPromise(function (resolve) {
    resolve(1);
});
// console.dir(a);
