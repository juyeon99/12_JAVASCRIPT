// 함수 선언문

// 함수 선언문에서는 함수의 이름을 생략 불가
function hello(name) {
    return `${name}님 안녕하세요.`;
};

// 함수 호출
console.log(hello('홍길동'));   // 홍길동님 안녕하세요.

/*
function hello(name) {
    return `${name}님 안녕하세요.`;
};

JS 엔진은 생성된 함수를 호출하기 위해 함수 이름과 동일한 식별자를 암묵적으로 생성하고 거기에 함수 객체 할당
var hello = function(name) {
    return `${name}님 안녕하세요.`;
};

console.log(hello('홍길동'));   ===> 식별자 hello를 호출했다고 볼 수 있다.
*/