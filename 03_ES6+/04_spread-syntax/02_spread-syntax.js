// 스프레드 문법
/*
    rest parameter처럼 매개변수 목록을 배열로 가져오는 것과는 반대로 배열을 통째로 매개변수에 넘겨주는 기능
    하나로 뭉쳐있는 여러 값들의 집합을 전개해서 개별적인 값들의 목록으로 만든다.

    사용처
    for ...of 문으로 순회할 수 있는 이터러블에 한정됨
*/

console.log(`가장 큰 값: ${Math.max(10,30,20)}`);   // 30

let arr = [10,30,20];
console.log(`가장 큰 값: ${Math.max(arr)}`);        // NaN
// max() 메소드는 배열이 아닌 숫자 목록을 인수로 받기 때문에 배열의 경우 원하는대로 동작 X

// 함수를 호출할 때 ...arr를 이용하면 인수 목록으로 확장된다.
console.log(`가장 큰 값: ${Math.max(...arr)}`);     // 30

let arr1 = [10,30,20];
let arr2 = [100,300,200];
console.log(`가장 작은 값: ${Math.min(...arr1, ...arr2)}`);         // 10
console.log(`가장 작은 값: ${Math.min(...arr1, 5, ...arr2, 3)}`);   // 3

let merged = [...arr1, ...arr2];
console.log(merged);            // [ 10, 30, 20, 100, 300, 200 ]

// 문자열
let str = 'JavaScript';
console.log([...str]);          // [ 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't' ]
console.log(Array.from(str));   // [ 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't' ]