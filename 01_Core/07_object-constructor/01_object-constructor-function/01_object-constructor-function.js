/* 
    Object Constructor function
    new 연산자와 함께 Object constructor function을 호출하면 빈 객체를 생성해 반환
    빈 객체 생성 이후 프로퍼티 또는 메소드를 추가하여 객체 완성 가능
*/
const student = new Object();
// const student = {}; // 객체 리터럴 방식

// 프로퍼티 추가
student.name = '유관순';
student.age = 16;
console.log(student);
