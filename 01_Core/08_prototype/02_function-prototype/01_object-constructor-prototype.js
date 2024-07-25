// 함수의 프로토타입

// 생성자 함수의 프로토타입
// new 연산자를 사용해서 만든 객체는 생성자 함수의 프로토타입 정보를 사용해 [[Prototype]]을 설정한다.
const user = {
    activate : true,
    login : function(){
        console.log('로그인 되었습니다.');
    }
};

function Student(name){
    this.name = name;
};

// 여기서 프로토타입은 [[Prototype]] (숨김 프로퍼티)와 이름만 같을 뿐,
// 실질적으로는 일반적인 프로퍼티를 생성한 것
Student.prototype = user;       // != [[Prototype]]

let student = new Student("홍길동");
console.log(student.activate);  // true
console.log(student);           // { name: '홍길동' }