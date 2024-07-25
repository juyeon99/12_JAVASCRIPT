const num = new Number(100);

// num은 Number.prototype을 상속받았는가?
console.log(num.__proto__ === Number.prototype);            // true

// num은 Object.prototype을 상속받았는가?
console.log(num.__proto__.__proto__ === Object.prototype);  // true

// chain 맨 위에는 null이 있다.
console.log(num.__proto__.__proto__.__proto__ === null);    // true


// 참고
// 내장 프로토타입은 수정 가능 => not recommended
String.prototype.hello = function() {
    console.log(`hello, ${this}`);
}

"JavaScript".hello();   // hello, JavaScript

// 내장 프로토타입의 메소드를 빌려 새로운 메소드 만들기 가능
const obj = {
    0 : "Hello",
    1 : "JavaScript",
    length : 2,
};

obj.join = Array.prototype.join;

console.log(obj);               // { '0': 'Hello', '1': 'JavaScript', length: 2, join: [Function: join] }
console.log(obj.join(', '));    // Hello, JavaScript