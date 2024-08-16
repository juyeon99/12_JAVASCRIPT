// 클래스 상속
class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    eat(foodWeight) {
        this.weight += foodWeight;
        console.log(`${this.name}(은)는 ${foodWeight}kg의 식사를 하고 ${this.weight}kg이 되었습니다.`);
    }

    workout(lostWeight) {
        if (this.weight > lostWeight){
            this.weight -= lostWeight;
        }
        console.log(`${this.name}(은)는 ${lostWeight}kg 감량하여 ${this.weight}kg이 되었습니다.`);
    }
}

let animal = new Animal("멍멍이", 10);
animal.eat(1);                  // 멍멍이(은)는 1kg의 식사를 하고 11kg이 되었습니다.
animal.workout(0.5);            // 멍멍이(은)는 0.5kg 감량하여 10.5kg이 되었습니다.

// 상속 extends
class Human extends Animal {
    develop(language){
        console.log(`${this.name}(은)는 ${language}로 개발을 합니다.`);
    }
}
let human = new Human('홍길동', 80);
human.eat(1);                   // 홍길동(은)는 1kg의 식사를 하고 81kg이 되었습니다.
human.workout(5);               // 홍길동(은)는 5kg 감량하여 76kg이 되었습니다.
human.develop("JavaScript");    // 홍길동(은)는 JavaScript로 개발을 합니다.