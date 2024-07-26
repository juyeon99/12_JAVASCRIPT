// 배열 메소드
const arr = [];

// 배열의 생성자 함수 = Array
console.log(arr.constructor === Array);     // true

// 배열의 프로토타입 객체 = Array.prototype
console.log(Object.getPrototypeOf(arr) === Array.prototype);    // true

/* 
Array.prototype.indexOf
- indexOf: 배열에서 요소가 위치한 인덱스 리턴
- lastIndexOf: 배열의 요소가 위치한 마지막 인덱스 리턴
- includes: 배열에 해당 요소 포함 여부 리턴
*/

console.log('========== indexOf ==========');
const foodList = ['물회','삼계탕','냉면','수박','물회'];
console.log(`foodList.indexOf('물회'): ${foodList.indexOf('물회')}`);       // 0
console.log(`foodList.indexOf('물회', 1): ${foodList.indexOf('물회', 1)}`); // 4 => 중복값 중 두 번째 위치 반환
console.log(`foodList.indexOf('삼겹살'): ${foodList.indexOf('삼겹살')}`);   // -1

console.log('========== lastIndexOf ==========');
console.log(`foodList.lastIndexOf('물회'): ${foodList.lastIndexOf('물회')}`);       // 4
console.log(`foodList.lastIndexOf('물회', 1): ${foodList.lastIndexOf('물회', 1)}`); // 0
console.log(`foodList.lastIndexOf('삼겹살'): ${foodList.lastIndexOf('삼겹살')}`);   // -1

console.log('========== includes ==========');
console.log(`foodList.includes('물회'): ${foodList.includes('물회')}`);     // true
console.log(`foodList.includes('삼겹살'): ${foodList.includes('삼겹살')}`); // false

/* 
    Array.prototype.push: 배열의 맨 뒤에 요소 추가
    Array.prototype.pop : 배열의 맨 뒤 요소 제거 후 반환
*/
const chineseFood = ['짜장면', '짬뽕', '탕수육'];

console.log('========== push ==========');
console.log(`push 전 chineseFood: ${chineseFood}`);     // 짜장면,짬뽕,탕수육
// chineseFood.push('유린기');
// chineseFood.push('양장피');
chineseFood.push('유린기','양장피');
console.log(`push 후 chineseFood: ${chineseFood}`);     // 짜장면,짬뽕,탕수육,유린기,양장피

console.log('========== pop ==========');
console.log(`chineseFood.pop(): ${chineseFood.pop()}`); // 양장피
console.log(`chineseFood.pop(): ${chineseFood.pop()}`); // 유린기
console.log(`chineseFood.pop(): ${chineseFood.pop()}`); // 탕수육

console.log(`pop 후 chineseFood: ${chineseFood}`);      // 짜장면,짬뽕

/* 
    Array.prototype.unshift: 배열의 맨 앞에 요소 추가
    Array.prototype.shift: 배열의 맨 앞 요소 제거 후 반환
*/
const chickenMenuList = ['양념치킨','후라이드','파닭'];
console.log('========== unshift ==========');
console.log(`unshift 전 chickenMenuList: ${chickenMenuList}`);  // 양념치킨,후라이드,파닭
chickenMenuList.unshift('간장치킨');
chickenMenuList.unshift('마늘치킨');
console.log(`unshift 후 chickenMenuList: ${chickenMenuList}`);  // 마늘치킨,간장치킨,양념치킨,후라이드,파닭

console.log('========== shift ==========');
console.log(`chickenMenuList.shift: ${chickenMenuList.shift()}`);   // 마늘치킨
console.log(`chickenMenuList.shift: ${chickenMenuList.shift()}`);   // 간장치킨
console.log(`chickenMenuList.shift: ${chickenMenuList.shift()}`);   // 양념치킨
console.log(`shift 후 chickenMenuList: ${chickenMenuList}`);        // 후라이드,파닭

// Array.prototype.concat: 두 개 이상의 배열 결합
console.log('========== concat ==========');
const idol1 = ['방탄소년단','세븐틴'];
const idol2 = ['보넥도','투어스'];
const idol3 = ['샤이니','빅뱅'];

// 배열명.concat(배열명1, 배열명2, ...)
const mix = idol1.concat(idol2);            // idol1을 기준으로 합쳐짐
const mix2 = idol3.concat(idol1, idol2);    // idol3를 기준으로 합쳐짐

console.log(`${mix}`);      // 방탄소년단,세븐틴,보넥도,투어스
console.log(`${mix2}`);     // 샤이니,빅뱅,방탄소년단,세븐틴,보넥도,투어스

// Array.prototype.slice: 배열의 요소 선택 잘라내기
console.log('========== slice ==========');
const front = ['HTML','CSS','JavaScript','jQuery'];

// slice(시작인덱스, 종료 인덱스)
console.log(`front.slice(1,3): ${front.slice(1,3)}`);   // CSS,JavaScript
console.log(`front: ${front}`);                         // HTML,CSS,JavaScript,jQuery

// Array.prototype.join: 배열을 구분자로 결합하여 문자열로 반환
console.log('========== join ==========');
const snackList =['사탕','초콜릿','껌','과자'];
console.log(`snackList.join(): ${snackList.join()}`);       // 구분자 , : 사탕,초콜릿,껌,과자
console.log(`snackList.join(): ${snackList.join('/')}`);    // 구분자 / : 사탕/초콜릿/껌/과자

// Array.prototype.reverse: 배열의 순서를 뒤집음
console.log('========== reverse ==========');
console.log(`[1,2,3,4,5].reverse(): ${[1,2,3,4,5].reverse()}`);     // 5,4,3,2,1