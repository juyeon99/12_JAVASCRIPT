const user = {
    id : 'user',
    login : function(){
        console.log(`${this.id}님 로그인 되었습니다.`);
    }
}

// 프로토타입은 프로퍼티를 읽을때만 사용
// 프로퍼티를 추가,수정,삭제하는 연산은 객체에 직접한다.
const student = {
    __proto__ : user
}

/* 
    login 메소드 내의 this는 프로토타입에 영향을 받지 않고, 
    메소드는 객체에서 호출했던, 프로토타입에서 호출했던 상관없이 this 언제나 . 앞에 있는 객체이다.
*/
student.id = 'user01';
console.log(student);   // { id: 'user01' }

student.login();        // user01님 로그인 되었습니다.

console.log("=====================");
for(let prop in student) {
    // for in 반복문은 상속 프로퍼티도 순회 대상에 포함시킨다.
    console.log(prop);

    /* 
        hasOwnProperty()
        key에 대응하는 프로퍼티가 상속 프로퍼티가 아니고 obj에 직접 구현되어있는 프로퍼티 일때만 true 반환
    */
    let isOwn = student.hasOwnProperty(prop);
    if(isOwn){
        console.log(`객체 자신의 프로퍼티 ${prop}`);
    } else {
        console.log(`상속 프로퍼티 ${prop}`);
    }
}       // id
        // 객체 자신의 프로퍼티 id
        // login
        // 상속 프로퍼티 login