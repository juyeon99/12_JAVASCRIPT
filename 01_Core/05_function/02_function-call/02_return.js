// return 반환문
function hello(name) {
    return `${name}님 안녕하세요~`;

    // 반환문 이후의 문장은 무시됨
    console.log(name);
}

// 반환문은 리턴 키워드 뒤에 오는 값을 반환한다.
console.log(hello('유관순'));

function func(){
    console.log('함수가 호출되었습니다.');
    return;  // 반환문을 생략할 수 있다. 이 경우에 undefined 반환
}

// 반환 값을 명시적으로 지정하지 않으면 undefined가 반환된다.
console.log(func());    // undefined