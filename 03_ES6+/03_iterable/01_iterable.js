for (let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}

// forEach
[1,2,3,4,5].forEach(num => console.log(num));   // 1 2 3 4 5
console.log([1,2,3,4,5][Symbol.iterator]());    // Object [Array Iterator] {}
console.log('안녕하세요'[Symbol.iterator]());    // Object [String Iterator] {}
/*
    Object [Array Iterator] {}
    Object [String Iterator] {}
    이런식으로 출력되면 iterable한 자료형이다.
    iterable한 자료형에는 for...of 라는 반복문 사용 가능

    Array, 문자, arguments, NodeList, Map, Set
*/
let range = {
    from : 1,
    to : 5,
}
// console.log(range[Symbol.iterator]());  // TypeError: range[Symbol.iterator] is not a function


range[Symbol.iterator] = function() {   // 잘 사용하지 X
    return {
        current : this.from,
        last : this.to,

        // next()는 값을 객체로 (done:..., value:...) 반환
        // done: 반복이 끝났음을 의미
        next() {
            if(this.current <= this.last) {
                return {done: false, value: this.current++};
            } else {
                return {done: true};
            }
        }
    }
}

for (let num of range) {
    console.log(num);   // 1 2 3 4 5
}

// 객체 안에 있는 값들을 반복시키고 싶을 때 
// => for in 반복문
// 부모의 prototype 또한 꺼내서 반복시킨다.
let student = {
    name : '홍길동',
    age : 16,
    gender : 'M'
}

// 객체 안에 있는 값을 꺼낼 때
for (var key in student) {
    console.log(student[key]);
    // 홍길동
    // 16
    // M
}

// 참고
console.log(Object.getOwnPropertyDescriptors(student,'name'));
// {
//   name: {
//     value: '홍길동',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   age: { value: 16, writable: true, enumerable: true, configurable: true },
//   gender: { value: 'M', writable: true, enumerable: true, configurable: true }
// }
