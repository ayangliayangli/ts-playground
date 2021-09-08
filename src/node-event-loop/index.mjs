import * as fs from 'fs'

/**
 * 最终顺序
 *                           ===times 本身运行在 times
 *  process.nextTick         ===idle
    Promise.resolve.then     
    读取文件的回调              ===io poll
    setImmediate              ===check
    setTimeout(0)            =====第二轮的times
 */

setTimeout(() => {
    setTimeout(() => {
        console.log('setTimeout(0)');
    }, 0);

    process.nextTick(() => {
        console.log('process.nextTick');
    })

    // 把逻辑全部放到 timers里面
    new Promise((resolve, reject) => {
        resolve(0);
    }).then(() => {
        console.log('Promise.resolve.then');
    })

    fs.stat('./a.txt', (err, states) => {
        console.log('读取文件的回调')
        // console.log(err, states);
    })
    
    setImmediate(() => {
        console.log('setImmediate');
    })
}, 0);