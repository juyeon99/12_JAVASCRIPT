/* 
    global object

    전역 객체는 코드가 실행되기 전 이전 단계에 JS 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체
    어떤 객체에도 속하지 않은 최상위 객체

    Node Js 환경에서는 global이 전역 객체
    브라우저 환경에서는 Window가 전역 객체
    - 전역 객체 자신은 어떤 객체의 프로퍼티도 아니며
    - 객체의 계층적 구조상 표준 빌트인 객체와 호스트 객체를 프로퍼티로 소유한다는 것을 의미

    !! 프로토타입 상속 관계의 최상위 객체라는 의미가 X !!
*/

// 빌트인 전역 프로퍼티
// Infinity: 무한대를 나타내는 숫자 값
// 전역 프로퍼티는 global 생략하고 참조 가능
console.log('========== Infinity ==========');
console.log(global.Infinity === Infinity);      // true

// 양의 무한대
console.log(10/0);              // Infinity

// 음의 무한대
console.log(10/-0);             // -Infinity
console.log(typeof Infinity);   // number

// NaN: 숫자가 아님을 의미하는 '숫자'
console.log('========== NaN ==========');

console.log(Number.NaN);        // NaN
console.log(global.NaN);        // NaN  // Number.NaN과 프로퍼티가 같다.
console.log(typeof NaN);        // number

console.log(Number('abc'));     // NaN
console.log(10 * 'abcd');       // NaN

// undefined: 원시 타입 undefined
console.log('========== undefined ==========');
console.log(global.undefined);  // undefined
let nothing;
console.log(nothing);           // undefined
console.log(typeof undefined);  // undefined