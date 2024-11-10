let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"]
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"]

let same = [];
for(let f = 0; f < fruits2.length; f++) {
    if(fruits1.includes(fruits2[f])) {
        same.push(fruits2[f]);
    }
}
console.log(same);a0014778

let diff = [];
for(let f = 0; f < fruits1.length; f++) {
    if(!fruits2.includes(fruits1[f])) {
        diff.push(fruits1[f]);
    }
}
console.log(diff);