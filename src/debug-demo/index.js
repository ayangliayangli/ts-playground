let myName = "yangli";
myName = "yangli";
myName = "yangli";
myName = "yangli";
console.log(myName);

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

function fib2(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  let prev = 1;
  let active = 1;
  let activeNum = 2; // 当前是第二个

  while (activeNum < n) {
    const newActive = active + prev;
    prev = active;
    active = newActive;
    activeNum++;
  }

  return active;
}

console.log(fib2(1000));
