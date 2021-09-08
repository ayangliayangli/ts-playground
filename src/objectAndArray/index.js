// node --allow-natives-syntax test.js

const obj1 = {
    'k1': 'v1',
    'k3': 'v1',
    'k2': 'v1',
    1: '1-value',
    2: '1-value',
    4: '1-value',
    3: '1-value',
}

obj1[5] = '5'
obj1[6] = '6'
// obj1[1000] = '7'

// delete obj1.k1 // map: DictionaryProperties elements: FixedArray properties: NameDictionary
// delete obj1[7]

// for (let index = 0; index < 1000000; index++) { // map: DictionaryProperties elements: FixedArray properties: NameDictionary
//     obj1[index + 'key'] = index + '';
// }

// const arr = [1];
// arr[10000] = 1; // 超过原有长度的3倍


// 正常情况下 obj: map: FastProperties elements: FixedArray map: FixedArray
// 正常情况下 arr: map: FastProperties elements: NumberDictionary map: FixedArray
console.log(%DebugPrint(obj1))


