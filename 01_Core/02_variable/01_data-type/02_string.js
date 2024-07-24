/* 
    02. 문자열 타입
    문자열 타입은 텍스트 데이터를 나타내는데 사용된다.
    문자열은 작은 따옴표(''), 큰 따옴표(""), 또는 백틱(``)으로 텍스트를 감싼다.
    자바에서는 String -> 객체, JS에서는 String -> 원시타입
*/

var string;
string = 'JavaScript';
string = "JavaScript";
string = `JavaScript`;  // 백틱(ES6)

string = '작은 따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로 인식';
string = "큰 따옴표로 감싼 문자열 내의 '작은따옴표'는 문자열로 인식";

/* 
    template literal
    -> 멀티라인 문자열, 표현식 삽입 등의 편리한 문자열 처리 기능을 제공하는 문자열 표기법
*/
// var str = '안녕하세요.
// 반갑습니다.';     // 허용 X

// 큰따옴표, 작은따옴표에서는 이스케이프 시퀀스를 사용해야 줄 바꿈 가능
var str = '안녕하세요.\n반갑습니다.';
console.log(str);

// 백틱을 이용하면 줄바꿈 허용, 모든 공백이 그대로 적용
var multiline = `안녕하세요.
반갑습니다.`
console.log(multiline);

var lastName = 'Hong';
var firstName = 'Jenny';

console.log('My name is ' + firstName + ' ' + lastName + '.');

// 표현식 삽입 => 무조건 백틱 내에서 사용
console.log(`My name is ${firstName} ${lastName}.`);