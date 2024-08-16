class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    get name(){
        console.log('get name 동작...');
        // return this.name;    // infinite loop 발생
        return this._name;  // infinite loop 방지 위해 내부 속성을 만들어 적용
    }

    get price(){
        console.log('get price 동작...');
        return this._price;
    }

    set name(value) {
        console.log('set name 동작...');
        this._name = value;
    }

    set price(value) {
        console.log('set price 동작...');
        if (value <= 0) {
            console.log('가격은 0보다 같거나 작을 수 없습니다.');
            this._price = 0;
            return;
        }
        this._price = value;
    }
}
// _의 의미
// 내부 프로퍼티를 만들고, getter와 setter는 내부 프로퍼티를 사용하게 하여 무한 루프 방지를 위함
// 내부 프로퍼티는 외부에서 접근 불가
let phone = new Product('전화기', 23000);        // set name 동작...
                                                // set price 동작...
console.log(phone.name + ', ' + phone.price);   // get name 동작...
                                                // get price 동작...
                                                // 전화기, 23000

// 직접 참조하여 사용할 수 있는데도 getter와 setter를 사용하는 이유
// getter & setter
// 데이터를 꺼내거나 수정할 때 편리
let computer = new Product('컴퓨터', -150000);       // set name 동작...
                                                    // set price 동작...
                                                    // 가격은 0보다 같거나 작을 수 없습니다.

console.log(computer.name + ', ' + computer.price); // get name 동작...
                                                    // get price 동작...
                                                    // 컴퓨터, 0
