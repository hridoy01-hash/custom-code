const friendName = ["Sagor", "Ahmed", "Roni", "touhid"];
const data = friendName.splice(1, 4,);
// console.log("data", data);

function toArray() {
    return Array.prototype.slice.call(arguments);
}

var classification = toArray(10, 10, 20, 20, 30,);

console.log(classification); // ["A", "B", "C"];

const bestFriend = ["Sagor", "Ahmed", "Roni", "touhid"];

let upper = ['A', 'B', 'C'];
let lower = ['a', 'b', 'c'];
let digits = [1, 2, 3];
let alphanumerics = upper.concat(bestFriend);
console.log("alphanumerics", alphanumerics);
