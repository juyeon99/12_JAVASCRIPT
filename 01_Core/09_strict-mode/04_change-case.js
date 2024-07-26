// 변화 상황
// 1. 일반 함수의 this
(function(){
    'use strict'

    // 엄격모드에서는 일반 함수의 this 사용 제한
    // 생성자 함수의 this만 허용
    function test(){
        console.log(this);
    }
    
    test();     // undefined
    new test(); // test {}
}())