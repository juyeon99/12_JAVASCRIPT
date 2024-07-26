/* 
    flag의 종류

    i(ignore case) : 대소문자를 구별하지 않고 패턴 검색
    g(Global) : 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색
    m(Multi line) : 문자열의 행이 바뀌더라도 패턴 검색을 계속
    flag는 옵션이므로 선택적으로 사용할 수 있고, 순서와 상관 없이 하나 이상의 플래그를 동시에 설정할 수 있다.
*/

/* 
    s(dotAll) : 점(.) 문자가 개행 문자를 포함한 모든 문자를 매치하도록 한다.
    u(unicode) : 유니코드 전체를 지원하여 유니코드 코드 포인트를 정확히 매치할 수 있게 한다.
    y(sticky) : 현재 위치에서만 검색을 수행하며, lastIndex 속성에서 지정한 위치부터 검색을 시작한다. 일치하지 않으면 실패한다.
*/
let target = 'Java JavaScript';

console.log(target.match(/VA/));        // null
console.log(target.match(/VA/i));       // [ 'va', index: 2, input: 'Java JavaScript', groups: undefined ]
console.log(target.match(/VA/ig));      // [ 'va', 'va' ]

/* 
    Pattern
    특별한 의미를 가지는 메타문자 또는 기호로 표현할 수 있다.
*/
console.log('========== pattern ==========');

// . : 임의의 문자열
// 임의의 2자리 문자열 전역 검색
target = 'abcdefg';
console.log(target.match(/../g));       // [ 'ab', 'cd', 'ef' ]

// {m,n}: 최소 m번, 최대 n번 반복되는 문자열
console.log('========== {m,n} ==========');
target = 'a aa aaa b bb bbb ab aab abb';
console.log(target.match(/a{2,3}/g));   // a가 최소 2번, 최대3번 반복되는 문자 => [ 'aa', 'aaa', 'aa' ]
console.log(target.match(/b{2}/g));     // b 두 번 반복 => [ 'bb', 'bb', 'bb' ]
console.log(target.match(/b{2,}/g));    // b 두 번 이상 => [ 'bb', 'bbb', 'bb' ]

// +는 {1,} = 최소 1번 이상 반복
console.log('========== + ==========');
console.log(target.match(/b+/g));       // [ 'b', 'bb', 'bbb', 'b', 'b', 'bb' ]

// ?: 앞선 패턴이 최대 한 번 (0번 포함) 반복되는 문자열
console.log('========== ? ==========');
target = 'soul seoul';
console.log(target.match(/se?oul/g));   // s를 찾고, 다음 e가 최대 한번 (0번 포함) 반복되고 뒤에 oul이 이어지는 문자열 전역 검색 [ 'soul', 'seoul' ]

// |: or
console.log('========== | ==========');
target = 'aa bb cc dd 123 456 _@';
console.log(target.match(/a|b/g));          // [ 'a', 'a', 'b', 'b' ]
console.log(target.match(/a+|b+/g));        // [ 'aa', 'bb' ]

// [] 내의 문자는 or로 동작 (a or b or c)
console.log(target.match(/[abc]+/g));       // [ 'aa', 'bb', 'cc' ]

// - 범위를 지정
console.log(target.match(/[a-z]+/g));       // [ 'aa', 'bb', 'cc', 'dd' ]

// 대소문자 범위
console.log(target.match(/[A-Za-z]+/g));    // [ 'aa', 'bb', 'cc', 'dd' ]

// 숫자 범위
console.log(target.match(/[0-9]+/g));       // [ '123', '456' ]

// \d: 숫자
// \D: 숫자가 아닌 문자
console.log('========== \d\D ==========');
console.log(target.match(/\d+/g));          // [ '123', '456' ]
console.log(target.match(/\D+/g));          // [ 'aa bb cc dd ', ' ', ' _@' ]

// \w: 알파벳, 숫자, _
// \W: \w 제외한 나머지
console.log('========== \w\W ==========');
console.log(target.match(/\w+/g));  // [
                                    //     'aa',  'bb',
                                    //     'cc',  'dd',
                                    //     '123', '456',
                                    //     '_'
                                    // ]
console.log(target.match(/\W+/g));  // [
                                    //     ' ', ' ', ' ',
                                    //     ' ', ' ', ' ',
                                    //     '@'
                                    //   ]

// [...] 내의 ^: not
console.log('========== [...] 내의 ^ ==========');
console.log(target.match(/[^0-9]+/g));  // 숫자가 아닌 => [ 'aa bb cc dd ', ' ', ' _@' ]
console.log(target.match(/[^a-z]+/g));  // 소문자 알파벳이 아닌 => [ ' ', ' ', ' ', ' 123 456 _@' ]

console.log('========== 시작 위치와 마지막 위치 ==========');
// 시작 위치 검색: [...] 밖의 ^
// 마지막 위치 검색: $
target = 'https://www.google.com';
console.log(/^https/.test(target));     // https로 시작하는지 검사 => true
console.log(/com$/.test(target));       // com으로 끝나는지 검사 => true