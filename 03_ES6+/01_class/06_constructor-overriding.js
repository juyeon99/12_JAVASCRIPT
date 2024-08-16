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

class Deer extends Animal {
    constructor(name, weight, legLength) {
        // 상속 클래스의 생성자에서는 반드시 super(...)를 호출해야 한다.
        // 또한 super(...)는 this를 사용하기 전에 호출해야 한다.
        // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor at new Deer
        // this.name = name;
        // this.weight = weight;
        // this.legLength = legLength;

        super(name, weight);
        this.legLength = legLength;
    }
}

let deer = new Deer('밤비', 40, 1);
console.log(deer);      // Deer { name: '밤비', weight: 40, legLength: 1 }
