// 재귀함수
// 재귀 호출: 함수가 자기 자신을 호출하는 것
// 재귀 호출을 수행하는 함수인 재귀 함수는 반복되는 처리를 위해 사용

// n! = 1 * 2 * ... * (n-1) * n;
function factorial(n){
    if(n <= 1) return 1;
    return n * factorial(n-1);
}

console.log(factorial(1));  // 1
console.log(factorial(2));  // 2 = 2 * factorial(1)
console.log(factorial(3));  // 6 = 3 * factorial(2)
console.log(factorial(4));  // 24 = 4 * factorial(3)
console.log(factorial(5));  // 120 = 5 * factorial(4)
/*
    재귀 함수는 반복되는 처리를 반복문 없이 구현할 수 있는 장점
    무한 반복에 빠져서 스택 오버 플로우 에러를 발생 시킬 수 있으므로 주의
    반복문보다 재귀 함수 사용이 더 직관적일때만 사용하는 것이 바람직하다.
*/