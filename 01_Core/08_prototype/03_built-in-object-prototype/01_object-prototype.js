// const obj = new object();

const obj = {};
console.log(obj.__proto__ === Object.prototype);            // true
// __proto__ = [[Prototype]]

console.log(obj.toString === obj.__proto__.toString);       // true
console.log(obj.toString === Object.prototype.toString);    // true