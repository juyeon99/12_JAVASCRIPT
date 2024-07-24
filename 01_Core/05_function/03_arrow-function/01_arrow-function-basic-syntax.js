/*
    화살표 함수
    function 키워드를 대신해 화살표 사용
    좀 더 간략한 방법으로 함수 선언 가능
    화살표 함수는 익명 함수로 정의, 본문이 한 줄인 함수를 작성할 때 유용
*/
var message;

// 기존 function 정의
message = function(){
    return 'hello world!';
};
console.log(message());                     // hello world!

// function 키워드 생략
message = () => {
    return "arrow function!";
}
console.log(message());                     // arrow function!

// 명령문이 하나만 있는 경우 중괄호 생략 가능
// 이때, 함수 몸체 내부의 문이 값으로 평가 될 수 있는 표현식이라면
// 암묵적으로 반환되기 때문에 return 생략 가능
message = () => "arrow function is simple!";
console.log(message());                     // arrow function is simple!

// 매개변수가 있는 경우
message = (val1, val2) => "Arrow " + val1 + val2;
console.log(message("function", '!!'));     // Arrow function!!

// 매개변수가 하나면 소괄호도 생략 가능
message = val1 => "Arrow " + val1;
console.log(message('function!!!!!'));      // Arrow function!!!!!