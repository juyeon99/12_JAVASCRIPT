// 엄격모드 적용
// 전역의 선두 또는 함수 몸체의 선두에 'use strict';를 추가

// 스크립트 전체에 strict mode 적용
// 'use strict';

function test() {
    // 함수에 strict mode 적용
    'use strict';
    x = 10;

    // 'use strict';    // 코드의 선두에 위치시키지 않으면 strict mode 동작 X
}
// test();     // ReferenceError: x is not defined


/* 
    서드 파티 라이브러리 non-strict-mode일 경우 즉시 실행 함수로 
    스크립트 전체를 감싸서 스코프를 구분하고 즉시 실행 함수의 선두에 strict mode를 적용

    서드 파티 라이브러리: 어플리케이션 개발시 외부에서 제공하는 소프트웨어 라이브러리
*/
(function() {
    'use strict';
})