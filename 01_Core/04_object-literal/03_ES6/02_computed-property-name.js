// 계산된 프로퍼티 이름
var prefix = 'key'
var index = 0;
var obj = {};

// ES5
// 객체 리터럴 외부에서 대괄호 표기법 사용
obj[prefix + '-' + index] = index++;
obj[prefix + '-' + index] = index++;
obj[prefix + '-' + index] = index++;
console.log(obj);   // { 'key-0': 0, 'key-1': 1, 'key-2': 2 }

// ES6
// 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 동적 생성 가능
var obj2 = {
    [`${prefix}-${index}`] : index++,
    [`${prefix}-${index}`] : index++,
    [`${prefix}-${index}`] : index++
}
console.log(obj2);  // { 'key-3': 3, 'key-4': 4, 'key-5': 5 }
