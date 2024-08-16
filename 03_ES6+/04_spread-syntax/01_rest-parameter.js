// rest parameter (나머지 매개변수) ...

function merge (msg1, msg2) {
    return msg1 + msg2;
}
console.log(merge('안녕하세요.'));                 // 안녕하세요.undefined
console.log(merge('안녕하세요.',' 반갑습니다.'));   // 안녕하세요. 반갑습니다.
console.log(merge('안녕하세요.',' 반갑습니다.', '제 이름은 홍길동 입니다.'));   // 안녕하세요. 반갑습니다.

// 나머지 매개변수 (...)는 항상 마지막에 있어야 한다.
// ex) function func(arg1, arg2, ...args) {}
function mergeAll(...args) {
    let message = '';
    for(let arg of args) message += arg;

    return message;
}
console.log(mergeAll('안녕하세요.'));                 // 안녕하세요.
console.log(mergeAll('안녕하세요.',' 반갑습니다.'));   // 안녕하세요. 반갑습니다.
console.log(mergeAll('안녕하세요.',' 반갑습니다.', ' 제 이름은 홍길동 입니다.'));   // 안녕하세요. 반갑습니다. 제 이름은 홍길동 입니다.