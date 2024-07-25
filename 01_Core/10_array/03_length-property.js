// length 프로퍼티: 요소의 개수를 나타내는 0 이상의 정수
console.log([].length);     // 0
const arr = [1,2,3,4,5];
console.log(arr.length);    // 5

// length 프로퍼티 값은 배열에 요소를 추가하거나 삭제하면 자동으로 갱신
arr.push(6);
console.log(arr.length);    // 6
const a = arr.pop();
console.log(arr.length);    // 5
console.log(`a = ${a}`);    // a = 6

// length 프로퍼티에 임의의 숫자 값을 명시적으로 할당 가능
// 현재 length 프로퍼티보다 작은 값을 할당하면 배열의 길이가 줄어든다.
arr.length = 3;
console.log(arr);           // [ 1, 2, 3 ]

// 현재 length 프로퍼티보다 큰 값을 할당하면 length 프로퍼티 값은
// 변경이 되지만, 배열의 길이가 늘어나지는 X
arr.length = 10;
console.log(arr);           // [ 1, 2, 3, <7 empty items> ]
console.log(arr.length);    // 10

/*
    프로퍼티 플래그
    
    객체 프로퍼티는 값(value) 과 함께 플래그(flag)라 불리는 특별한 속성 세 가지를 가짐
    writable – true이면 값을 수정할 수 있다. 그렇지 않다면 읽기만 가능하다.
    enumerable – true이면 반복문을 사용해 나열할 수 있다. 그렇지 않다면 반복문을 사용해 나열할 수 없다.
    configurable – true이면 프로퍼티 삭제나 플래그 수정이 가능하다. 그렇지 않다면 프로퍼티 삭제와 플래그 수정이 불가능하다.
*/
// 메소드에 주어진 객체의 모든 자체 속성에 대한 설명 반환
console.log(Object.getOwnPropertyDescriptors(arr));
        // {
        //   '0': { value: 1, writable: true, enumerable: true, configurable: true },
        //   '1': { value: 2, writable: true, enumerable: true, configurable: true },
        //   '2': { value: 3, writable: true, enumerable: true, configurable: true },
        //   length: { value: 10, writable: true, enumerable: false, configurable: false }
        // }

// JS는 배열의 요소가 연속적으로 위치하지 않고 일부가 비어있는 희소 배열을 문법적으로 허용한다.
const sparse = [, 2, , 4];
console.log(sparse);        // [ <1 empty item>, 2, <1 empty item>, 4 ]
