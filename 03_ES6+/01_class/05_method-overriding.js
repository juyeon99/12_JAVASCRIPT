// 부모 메서드의 전체를 바꾸지 않고, 일부 기능만 변경하고 싶을때
// => 부모 메서드의 기능을 확장하고 싶을때 사용한다.

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

class Bear extends Animal {
    attack (target) {
        console.log(`${this.name}(은)는 ${target}(을)를 공격합니다.`);
    }

    // Animal의 workout()를 확장시키는 Bear의 workout()
    workout(target) {
        // super. 부모 클래스의 메소드 참조 가능
        super.workout(0.1);

        this.attack(target);
    }
}

let bear = new Bear("지리산 반달가슴곰", 105);
bear.workout("연어");   // 지리산 반달가슴곰(은)는 0.1kg 감량하여 104.9kg이 되었습니다.
                        // 지리산 반달가슴곰(은)는 연어(을)를 공격합니다.