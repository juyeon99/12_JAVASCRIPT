// 함수의 (디폴트 프로퍼티) 프로토타입과 constructor property
// 모든 함수는 기본적으로 prototype 프로퍼티를 갖는다.

function Student() {};
// Student.prototype = {constructor : Student};

// 디폴트 프로퍼티 "prototype"은 constructor 프로퍼티 하나만 있는 객체를 가리킨다.
// 여기서 constructor는 함수 자신을 가리킨다.
console.log(Student.prototype.constructor);                 // [Function: Student]
console.log(Student.prototype.constructor === Student);     // true

let student = new Student();    // 부모의 프로퍼티인 {constructor : Student}를 상속받음
console.log(student.constructor);               // [Function: Student]
console.log(student.constructor === Student);   // true => [[Prototype]]을 거쳐서 접근함을 의미
                                                //         Student를 상속받는다는 것을 확인할 수 있다.
