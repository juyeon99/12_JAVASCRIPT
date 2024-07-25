// [[Prototype]]

const user = {
    activate : true,
    login : function() {
        console.log('로그인 되었습니다.');
    }
}

const student = {
    passion : true
}

// .__proto__ : [[Prototype]]의 getter, setter이다. (요즘에는 잘 쓰이지 않는 방법)
// 함수 Object.getPrototypeOf or Object.setPrototypeOf
// 이 두 메소드를 통해 get, set한다.
student.__proto__ = user;
console.log(student.activate);  // true
console.log(student.passion);   // true

console.log("===== 프로토타입 제한 =====");
const greedyStudent = {
    class : 11,
    __proto__ : student
}

console.log(greedyStudent.activate);
console.log(greedyStudent.passion);

/*
    프로토 타입 체이닝은 순환참조 허용 X
    __proto__의 값은 객체 또는 null만 가능하며 다른 자료형은 무시
*/