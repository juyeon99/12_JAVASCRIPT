let student = {
    name : "studentname",
    age : 20
};

let student2 = {
    name : "studentname",
    age : 20
};

console.log(student);   // { name: 'studentname', age: 20 }

// Constructor 
// 일반함수와 구분 위해 첫번째 문자를 대문자로 사용
// function Student(){
//     this.name = 'studentname';
//     this.age = 20;
// }
// let cStudent1 = new Student();
// console.log(cStudent1); // Student { name: 'studentname', age: 20 }

function Student(name, age){
    this.name = name;
    this.age = age;
}
let cStudent1 = new Student('stu1', 20);
let cStudent2 = new Student('stu2', 21);
console.log(cStudent1); // Student { name: 'stu1', age: 20 }
console.log(cStudent2); // Student { name: 'stu2', age: 21 }

// prototype
console.log(Student.prototype);
Student.prototype.gender = '남';

let cStudent3 = new Student('stu3', 22);
console.log(cStudent3);             // Student { name: 'stu3', age: 22 }
console.log(cStudent3.gender);      // 남
console.log(cStudent3.__proto__);   // { gender: '남' }