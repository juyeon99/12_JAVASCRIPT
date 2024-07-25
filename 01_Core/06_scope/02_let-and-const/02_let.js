/* 
    let
    var 키워드의 단점을 보완하기 위해 ES6 새로운 변수 선언 키워드인 let, const 도입
*/

// 1. 변수 중복 선언 금지
let msg = '안녕하세요';

// let, const 같은 스코프 내에서 중복 선언 허용 X
// let msg = '안녕히가세요';

// 2. 블록 레벨 스코프
// let 키워드로 선언한 변수는 모든 코드블록(함수, if문, for문, while문, try/catch문)을 local scope로 인정한다.
let i = 0;
for(let i = 0; i < 10; i++){
    console.log(`지역변수 i: ${i}`);
}

console.log(`전역변수 i: ${i}`);    // 전역변수 i: 0

// 3. 변수 호이스팅
// console.log(x); // Cannot access 'x' before initialization
let x;

let y = 1;
if(true) {
    // 변수 호이스팅으로 아래의 지역변수 y가 선언이 먼저 일어났기 때문에 전역변수 y를 참조하지 않고, 오류 발생
    // console.log(y); // Cannot access 'y' before initialization => 아래 있는 local variable let y 선언 때문에 발생
    let y = 2;
}