function Cat(name) {
    this.name = name;
    this.say = function () {
        console.log(this.name);
    }
}

const cat = new Cat('xiao bai');
cat.say(); // xiao bai, this 是 cat

const globalSay = cat.say;
globalSay(); // 空白 , this 是window

const { say: descSay } = cat;
descSay(); // 空白, this 是window