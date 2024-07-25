/*
    일급객체

    1. 무명의 리터럴로 생성 가능
    2. 변수나 자료 구조(객체, 배열 등)에 저장 가능
    3. 함수의 매개변수에 전달 가능
    4. 함수의 반환 값으로 사용 가능
*/

// 1. 무명의 리터럴로 생성 가능
// 2. 변수에 저장 가능
var hello = function() {
    return '안녕하세요!';
}

// 2. 객체에 저장 가능
// var obj = {hello : hello};   // key = hello, value = '안녕하세요!'
console.log(obj);   // { hello: [Function: hello] }

var obj = {hello};  // key = hello, value = '안녕하세요!'
console.log(obj);   // { hello: [Function: hello] }

// 3. 함수의 매개변수에 전달 가능
function repeat(func, count) {
    for(var i = 0; i < count; i++){
        console.log(func());
    }

    return function() {
        console.log(`${count}번 반복 완료`);
    }
}
// 3. 
repeat(obj.hello, 5);   // 안녕하세요!
                        // 안녕하세요!
                        // 안녕하세요!
                        // 안녕하세요!
                        // 안녕하세요!
console.log("====================");

// 4.
var returnFunction = repeat(obj.hello, 5);
returnFunction();   // 안녕하세요!
                    // 안녕하세요!
                    // 안녕하세요!
                    // 안녕하세요!
                    // 안녕하세요!
                    // 5번 반복 완료

// 함수가 일급 객체라는 것은 함수를 객체와 동일하게 사용할 수 있다는 의미
// 객체는 값이므로 함수는 값과 동일하게 취급 가능
// 변수 할당문, 객체의 프로퍼티 값, 배열의 요소, 함수 호출의 인수, 함수 반환문 등 값처럼 사용이 가능