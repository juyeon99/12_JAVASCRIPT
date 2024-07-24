/*
    객체는 프로퍼티의 집합이며, 프로퍼티는 key-value로 구성
*/

/*
    프로퍼티 key
    - 빈 문자열을 포함하는 모든 문자열 또는 symbol 값 => 프로퍼티에 접근하기 위한 식별자
    - 문자열이기 때문에 따옴표를 사용. 
        하지만 식별자 네이밍 규칙을 따르는 경우 사용하지 않아도 된다.
    - 단, 식별자 네이밍 규칙을 따르지 않으면 반드시 따옴표 사용, 규칙을 따르는 것이 권장됨

    프로퍼티 value
    - JS에서 사용할 수 있는 모든 값
*/

/*
    식별자 규칙
    1. 식별자는 특수문자를 제외한 문자, 숫자, _, $를 포함할 수 있다.
    2. 단, 숫자로 시작하는 것은 허용 X
    3. 예약어는 식별자로 사용 X
*/
var obj = {
    normal : 'normal value',     
    '@ s p a c e @' : 'space value', // 특수 기호를 사용하는 경우 '' 따옴표를 써야함
    '': '',                         // 빈 문자열 키도 오류를 발생시키지는 않지만 권장 X
    0 : 1,                           // 숫자 키는 내부적으로 문자열로 변환되어 적용
    var : 'var',                     // 예약어 키도 오류 발생되진 않지만 권장 X
    normal : 'new Value'             // 존재하는 키를 중복해서 선언하면 나중에 선언된 프로퍼티 적용
};
console.log(obj);   // {
                    //     '0': 1,
                    //     normal: 'new Value',
                    //     '@ s p a c e @': 'space value',
                    //     '': '',
                    //     var: 'var'
                    // }

// 프로퍼티 키 동적 생성
var key = 'test';
obj[key] = 'test value';
console.log(obj);   // {
                    //   '0': 1,
                    //   normal: 'new Value',
                    //   '@ s p a c e @': 'space value',
                    //   '': '',
                    //   var: 'var',
                    //   test: 'test value'
                    // }