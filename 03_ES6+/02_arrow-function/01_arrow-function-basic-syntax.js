// arrow function (화살표 함수)
// ES6에서 도입된 화살표 함수
// function 키워드 대신 화살표를 사용해 좀 더 간략하게 함수 선언 가능
// 화살표 함수는 항상 익명함수로 정의된다. 본문이 한 줄인 함수를 작성할 때 유용
let message;
message = function(){
    return "화살표 함수 Hello World!";
}
console.log(message());

// 명령문이 하나만 있을 때 중괄호도 생략 가능
// 이때 함수 몸체 내부의 문이 값으로 평가될 수 있는 표현식이면 암묵적으로 반환되기 때문에 return도 생략 가능
message = () => "화살표 함수 Hello World!";
console.log(message());

// parameter가 있는 경우
message = (val1, val2) => "화살표" + val1 + val2;
console.log(message("함수","편하다"));  // 화살표함수편하다

// parameter가 하나면 소괄호도 생략 가능
message = val1 => "화살표" + val1;
console.log(message("함수"));           // 화살표함수

// 객체 리터럴을 반환할 때 함수 몸체 부분을 소괄호로 감싸주어야 한다.
// 그렇지 않으면 객체로 인식해야하는 중괄호를 함수 몸체 중괄호로 잘못 인식
const createUser = (id,name) => ({id,name});
console.log(createUser(1, "이순신"));   // { id: 1, name: '이순신' }
