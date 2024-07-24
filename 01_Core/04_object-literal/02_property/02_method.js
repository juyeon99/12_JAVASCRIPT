/*
    메소드

    JS에서 함수는 객체이다.
    함수는 값으로 취급할 수 있고, 프로퍼티 값으로 사용 가능
*/

var dog = {
    name : '멍멍이',

    // 메소드 (객체에 묶여있는 함수)
    eat : function(food){
        // this는 dog를 가리킨다.
        console.log(`${this.name}(은)는 ${food}(을)를 맛있게 먹어요.`);
    }
}

dog.eat('고구마');  // 멍멍이(은)는 고구마(을)를 맛있게 먹어요.