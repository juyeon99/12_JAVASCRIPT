/*
    자바스크립트의 함수는 객체 타입의 값으로 값의 성질을 갖는 객체를 일급 객체라고 한다.
    함수는 일급 객체이므로 함수 리터럴로 생성한 함수 객체를 변수에 할당 가능
*/

// 함수 표현식
var hello = function(name) {
    return `${name}님 안녕하세요!`;
};

// 식별자로 함수 호출
console.log(hello('홍길동'));

var clac = function add(a,b) {
    return a + b;
}

// 함수 표현식을 사용할 때는 호출은 식별자로만 이루어진다.
console.log(clac(10,20));   // 식별자로 호출 가능
// console.log(add(10,20));    // add is not defined => 함수명으로는 호출 불가