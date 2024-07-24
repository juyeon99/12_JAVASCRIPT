/* data-type: 값의 종류를 의미, JS(ES6)는 7개의 데이터 타입을 제공 */

/* 
    01. 숫자 타입
    자바의 경우에는 다양한 타입을 제공하지만, JS의 경우 하나의 숫자타입만 존재하고 모든 수를 실수로 처리
*/

var integer = 10;
var double = 5.5;
var negative = -10;

console.log('integer: ', integer);

// === 일치 비교: 타입, 값 모두 일치하는지 검사하는 연산자
// 숫자 타입은 모두 실수로 처리된다.
console.log(10 === 10.0);   // true

console.log(10 / 4);        // 2.5

/* 
    숫자 타입은 추가적으로 세 가지의 특별한 값 표현 가능
    Infinity: 양의 무한대
    -Infinity: 음의 무한대
    NaN (Not a Number): 산술 연산 불가
*/
console.log(10 / 0);        // Infinity
console.log(10 / -0);       // -Infinity
console.log(1 * '문자열');   // NaN


