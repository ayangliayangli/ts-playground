function random(n) {
    const items = [];
    let active = 0;
    while(active < n) {
        const isLarge = Math.random() > 0.5;

        if (isLarge) {
            items.push(active);
        } else {
            items.unshift(active);
        }
        active = active + 1;
    }

    return items;
    
}

// const res =  random(5)
// console.log(res);


function bigAdd(s1, s2) {
    const len1 = s1.length;
    const len2 = s2.length;
    const maxLen = Math.max(len1, len2);

    const ret = [];
    let i = 0;
    let accLatest = 0;
    while (i < maxLen) {
        const curS1Index = len1 - i - 1;
        const curS2Index = len2 - i - 1;

        const curBitS1Value = curS1Index >= 0 ? Number(s1[curS1Index]) : 0;
        const curBitS2Value = curS2Index >= 0 ? Number(s2[curS2Index]) : 0;

        const curBitRet = curBitS1Value + curBitS2Value + accLatest;
        accLatest = 0;
        if (curBitRet >= 10) {
            accLatest = 1;
            ret[i] = curBitRet - 10;
        } else {
            ret[i] = curBitRet;
        }

        i += 1;
    }

    if (accLatest) {
        ret.push(1);
    }

    return ret.reverse().join('');
}


const res = bigAdd('999', '99999');
console.log(res);