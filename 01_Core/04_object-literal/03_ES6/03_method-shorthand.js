// 메소드 단축

// ES5에서 메소드 정의하는 방법 (프로퍼티 값으로 함수 할당)
var dog = {
    name : '멍멍이',
    eat : function(food){
        console.log(`${this.name}(은)는 ${food}(을)를 맛있게 먹어요.`);
    }
}
dog.eat('고구마');  // 멍멍이(은)는 고구마(을)를 맛있게 먹어요.

// ES6에서는 메소드를 정의할 때 function 키워드를 생략한 축약 표현 가능
var dog2 = {
    name : '멍멍이',
    // 메소드 축약표현
    eat(food){
        console.log(`${this.name}(은)는 ${food}(을)를 맛있게 먹어요.`);
    }
}
dog2.eat('고구마'); // 멍멍이(은)는 고구마(을)를 맛있게 먹어요.