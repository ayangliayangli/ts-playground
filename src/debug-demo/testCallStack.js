function fn4(params) {
  const innerFn4Const = "";
  console.log("fn4");
}

function fn3(params) {
  fn4();
}

function fn2(params) {
  fn3();
}

function fn1(arg1) {
  const fn1const = "fn1const";
  let fn1let = "fn1let";

  function fn1_inner(arg1) {
    const fn1_inner_const = "fn1const";
    let fn1_inner_let = "fn1let";
    console.log(fn1const);
  }

  fn1_inner();
  fn2();
  console.log("11111");
}
console.log(fn1());
