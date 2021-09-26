console.log('start'); // 1

setTimeout(() => {
    console.log('log inner setTimeout'); // 8
}, 0);

new Promise((resolve, reject) => {
    console.log('inner new Promise'); // 2
    resolve(1); // p1
}).then(res => {
    console.log('inner new Promise then'); // 6
})

async function a1() {
    console.log('inner a1'); // 3
    await a2(); // p2
    console.log('inner a1 after await a2'); // 7
}

async function a2() {
    console.log('inner a2'); // 4
    return 2;
}

a1();

console.log('end') // 5