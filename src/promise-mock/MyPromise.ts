class MyPromise {
  public resolveListeners: Array<(value: any) => any> = [];
  public status: "pending" | "fulfilled" | "rejected" = "pending";
  public resolve;
  public then;
  constructor(fn: (resolve: (value: any) => void) => void) {
    //todo class method 本来不应该在这里赋值，应该谢在外面，但是写在外面暂时找不到
    this.resolve = (value: any) => {
      setTimeout(() => {
        this.resolveListeners.forEach((callback) => {
          callback(value);
        });
      }, 0);
    };

    this.then = (onFulfilled: (value: any) => any) => {
      return new MyPromise((resolve) => {
        const handle = (value) => {
          const ret = onFulfilled(value);
          resolve(ret);
        };

        this.resolveListeners.push(handle);
      });
    };
    fn(this.resolve);
  }
}

new MyPromise((resolve) => {
  resolve(1);
})
  .then((val) => {
    console.log(val);
    return 5;
  })
  .then((val) => {
    console.log(val);
  });

// console.dir(a);
