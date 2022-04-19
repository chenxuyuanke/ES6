function Animal(type, name, age, sex) {
    if (new.target !== Animal) {
        throw new Error('请用new调用')
    }
    this.type = type;
    this.name = name;
    this.age = age;
    this.sex = sex;
}

Animal.prototype.print = function () {
    console.log(`${this.type} ${this.name} ${this.age} ${this.sex}`)
}

const dog = new Animal('狗', '旺财', 12, '公')

dog.print()

Animal()

for (const prop in dog) {
    if (Object.hasOwnProperty.call(dog, prop)) {
        const element = dog[prop];
        console.log(element)
    }
}