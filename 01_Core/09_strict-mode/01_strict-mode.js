// 엄격 모드
function test(){
    x = 10;
}
test();             // 암묵적으로 x가 전역 변수가 됨
console.log(x);     // 10

// ES6에서 도입된 클래스와 모듈 기본적으로 strict mode가 적용된다.