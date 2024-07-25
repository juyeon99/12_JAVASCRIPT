// 에러 상황

// 암묵적 전역
// (function() {
//     x = 1;
//     console.log(x); // 1
// }());

(function() {
    'use strict';

    x = 1;
    console.log(x);     // ReferenceError: x is not defined
})();