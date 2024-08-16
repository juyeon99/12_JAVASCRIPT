// iterable: 메소드 Symbol.iterator가 구현된 객체
// 유사 배열: 인덱스와 length 프로퍼티가 있어서 배열처럼 보이는 객체

// 이터러블과 유사배열은 배열 메소드를 사용할 수 없다.
// => 그 때 Array.from을 이용해서 배열로 변경 가능

// 유사배열
let arrayLike = {
    0: "배열인듯",
    1: "배열아닌",
    2: "배열같은",
    3: "너",
    length: 4,
}

let array = [1,2,3,4,5];
console.log(array.pop());   // 5
console.log(array);         // [ 1, 2, 3, 4 ]

// console.log(arrayLike.pop());   // TypeError: arrayLike.pop is not a function (배열 메소드 사용 불가)

// Array.from() 넘겨 받은 인수가 이터러블이거나 유사배열인 경우 새로운 배열을 만들고 객체의 모든 요소를 새롭게 만든 배열로 복사
let arr = Array.from(arrayLike);
console.log(arr.pop());     // 너
console.log(arr);           // [ '배열인듯', '배열아닌', '배열같은' ]

// 이터러블
let range = {
    from : 1,
    to : 5,
}

range[Symbol.iterator] = function() {
    return {
        current : this.from,
        last : this.to,

        next() {
            if(this.current <= this.last) {
                return {done: false, value: this.current++};
            } else {
                return {done: true};
            }
        }
    }
}

let arr2 = Array.from(range);
console.log(arr2.pop());    // 5
console.log(arr2);          // [ 1, 2, 3, 4 ]

// Array.from() 매핑 함수를 선택적으로 넘겨줄 수 있다.
let arr3 = Array.from(range, num => num * num);
console.log(arr3);          // [ 1, 4, 9, 16, 25 ]
