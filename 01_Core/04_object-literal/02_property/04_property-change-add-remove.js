var dog = {
    name : '멍멍이'
};

// 이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다.
dog.name = '개';    // dog['name'] = '개';
console.log(dog);   // { name: '개' }

// 프로퍼티 동적 추가
// 존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 프로퍼티 값이 할당된다.
dog.age = 3;
console.log(dog);   // { name: '개', age: 3 }

// 프로퍼티 삭제
delete dog.age;
console.log(dog);   // { name: '개' }

// 존재하지 않는 프로퍼티를 삭제하면 에러 없이 무시된다.
delete dog.something;
console.log(dog);