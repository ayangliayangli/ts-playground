var MyPromise = /** @class */ (function () {
    function MyPromise(fn) {
        var _this = this;
        this.resolveListeners = [];
        this.status = "pending";
        //todo class method 本来不应该在这里赋值，应该谢在外面，但是写在外面暂时找不到
        this.resolve = function (value) {
            setTimeout(function () {
                _this.resolveListeners.forEach(function (callback) {
                    callback(value);
                });
            }, 0);
        };
        this.then = function (onFulfilled) {
            return new MyPromise(function (resolve) {
                var handle = function (value) {
                    var ret = onFulfilled(value);
                    resolve(ret);
                };
                _this.resolveListeners.push(handle);
            });
        };
        fn(this.resolve);
    }
    return MyPromise;
}());
new MyPromise(function (resolve) {
    resolve(1);
})
    .then(function (val) {
    console.log(val);
    return 5;
})
    .then(function (val) {
    console.log(val);
});
// console.dir(a);
//# sourceMappingURL=MyPromise.js.map