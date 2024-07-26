// 정규 표현식 메소드
const target = 'Java JavaScript';

// RegExp.exec
// 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 배열로 반환
console.log('========== exec ==========');
console.log(/va/.exec(target));     // [ 'va', index: 2, input: 'Java JavaScript', groups: undefined ]

// g 플래그를 지정해도 첫 번째 매칭 결과만 반환
console.log(/va/g.exec(target));    // g 플래그: 문자열 내 패턴과 일치하는 모든 문자열을 전역에서 검색
                                    // [ 'va', index: 2, input: 'Java JavaScript', groups: undefined ]

console.log(/hello/.exec(target));  // null => 매칭 결과가 없음

// RegExp.prototype.test: 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색해서 매칭 결과를 불리언으로 반환
console.log('========== test ==========');
console.log(/va/.test(target));     // true
console.log(/hello/.test(target));  // false

// String.prototype.match: String 표준 빌트인 객체가 제공하는 매소드
//                         대상 문자열과 인수로 전달받은 정규 표현식과의 매칭 결과를 배열로 반환
console.log('========== match ==========');
console.log(target.match(/va/));    // 검색 결과를 exec 같은 내용으로 반환 => [ 'va', index: 2, input: 'Java JavaScript', groups: undefined ]
console.log(target.match(/va/g));   // [ 'va', 'va' ]
console.log(target.match(/hello/)); // null

// String
// replace, search, split, ...