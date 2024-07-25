/* 
    04_callback-function(콜백 함수)

    함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백 함수라고 한다. 
    매개변수를 통해 함수의 외부에서 콜백 함수를 전달 받은 함수를 고차 함수라고 한다. 
    콜백 함수는 고차 함수에 전달 되어 헬퍼 함수의 역할을 한다. 
    즉, 고차 함수는 콜백 함수를 자신의 일부분으로 합성한다. 
*/
function increase (value){
    return value + 1;
}

function decrease (value) {
    return value - 1;
}

// 전달받은 함수에 전달받은 값을 적용시켜주는 고차 함수
function apply (func, value) {
    return func(value);
}
console.log(apply(increase,5)); // 6
console.log(apply(decrease,5)); // 4
console.log(                    // 25
    apply(function(value){return value **2;}, 5) // **: 제곱
);

/* 
    함수의 변하지 않는 공통 로직은 미리 정의해두고 경우에 따라 변경되는 로직은 
    추상화해서 함수 외부에서 내부로 전달하는 방식
    함수형 프로그래밍 패러다임에서 사용되는 패턴
    비동기 처리(이벤트, 타이머, ajax)에 활용되는 중요한 패턴
*/