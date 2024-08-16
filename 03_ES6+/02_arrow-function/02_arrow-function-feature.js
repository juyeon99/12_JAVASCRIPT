// 1. 화살표 함수는 this를 가지지 않는다.
// => 화살표 함수는 화살표 함수가 있는 위치의 this를 가져온다.

let theater = {
    store : '강남점',
    titles : ['데드풀과울버린','사랑의 하츄핑', '파일럿', '인사이드 아웃2'],
    
    showMovieList(){
        this.titles.forEach(
            title => console.log(this.store + ": " + title) // this를 가지지 않기 때문에 상위에 있는 theater를 this로 인식
            // 강남점: 데드풀과울버린
            // 강남점: 사랑의 하츄핑
            // 강남점: 파일럿
            // 강남점: 인사이드 아웃2
        );

        // this.titles.forEach(
        //     function (title) {
        //         console.log(this.store + ": " + title)      // this: 함수 자체
        //         // undefined: 데드풀과울버린
        //         // undefined: 사랑의 하츄핑
        //         // undefined: 파일럿
        //         // undefined: 인사이드 아웃2
        //     }
        // );
    }
}
theater.showMovieList();    

// 2. 화살표 함수는 new와 함께 호출할 수 없다.
// this가 없기 때문에 constructor 함수로 사용할 수 없다.
let arrowFunc = () => {};
// new arrowFunc();    // TypeError: arrowFunc is not a constructor

let normalFunc = function(){}
new normalFunc();   // 가능

// constructor 함수로 사용할 수 없다
// => 객체 생성 불가 -> prototype 프로퍼티가 없음
// => Prototype 생성 X
console.log(arrowFunc.hasOwnProperty('prototype'));     // false
console.log(normalFunc.hasOwnProperty('prototype'));    // true

// 3. 화살표 함수는 super를 가지지 않는다.
// 화살표 함수는 다른 함수의 인수로 전달되어 콜백함수로 사용되는 경우가 많다.
