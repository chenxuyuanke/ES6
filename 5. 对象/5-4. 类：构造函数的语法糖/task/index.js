class Animal {
    constructor(type, name, age, sex) {

        this.type = type;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    print() {
        console.log(`${this.type} ${this.name} ${this.age} ${this.sex}`)
    }
}

const dog = new Animal('狗', '旺财', 12, '公')

dog.print()

for (const prop in dog) {
    // if (Object.hasOwnProperty.call(dog, prop)) {
    const element = dog[prop];
    console.log(element)
    // }
}