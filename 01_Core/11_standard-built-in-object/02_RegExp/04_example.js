// 1. http:// 또는 https:// 로 시작하는지 검사
const url = 'https://www.google.com';
// 테스트 케이스
// const url = 'www.google.com'; // false
console.log(/^https?:\/\//.test(url));

// 2. 파일명을 통해 JS 확장자인지 검사
const fileName = 'test.js';
// 테스트케이스
// const fileName = 'test.css';
console.log(/js$/.test(fileName));

// 3. 아이디로 사용 가능한지 검사
// 조건 알파벳 대소문자/숫자로 시작하고 끝나며 6~12자리인지 검사
const id = 'hello123';
// const id = '@hello123'
console.log(/^[A-Za-z0-9]{6,12}$/.test(id));


// 4. 핸드폰 번호 형식에 맞는지 검사
// 형식: 010-XXXX-XXXX
// X: 숫자
const phone = '010-1234-5678';
// const phone = '01012345678';
console.log(/^\d{3}-\d{4}-\d{4}$/.test(phone));