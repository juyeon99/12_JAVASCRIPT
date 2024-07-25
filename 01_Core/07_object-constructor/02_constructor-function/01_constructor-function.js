// constructor function

const student1 = {
    name : '유관순',
    age : 16,
    getInfo : function(){
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
}

const student2 = {
    name : '홍길동',
    age : 20,
    getInfo : function(){
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
}

// 생성자 함수로 객체 생성
// 생성자 함수는 함수명을 앞에 대문자를 써주는게 좋다.
function Student(name, age) {
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
}

// 인스턴스 생성
const student3 = new Student('장보고', 30);
const student4 = new Student('신사임당', 40);

// 메소드 호출
console.log(student3.getInfo());    // 장보고(은)는 30세 입니다.
console.log(student4.getInfo());    // 신사임당(은)는 40세 입니다.