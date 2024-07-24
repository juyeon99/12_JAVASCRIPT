// 함수 호이스팅

// 함수 참조
console.log(hello);     // [Function: hello]
console.log(hi);        // undefined

// 함수 호출
console.log(hello('홍길동'));   // 홍길동님 안녕하세요.
console.log(hi('홍길동'));      // hi is not a function

// 함수 선언문
// 런타임 이전에 JS 엔진에 의해 먼저 실행됨
// 함수 선언문 코드 이전에 함수를 참조할 수 있으며 호출도 가능
// -> JS의 고유한 특징; 함수 호이스팅
function hello(name) {
    return `${name}님 안녕하세요.`;
};

// 함수 표현식
// 코드가 실행되는 시점에 평가되어 함수 객체가 된다.
// 함수 표현식으로 정의한 함수는 표현식 이후에 참조 또는 호출해야 한다.
var hi = function(name) {
    return `${name} Hi~`;
}