const printName = "print";

class Animal {
    constructor(type, name, age, sex) {
        this.type = type;
        this.name = name;
        this.setAge(age);
        this.age=age;
        // Object.defineProperty(this,'age',{
        //     set:func,
        //     get:func
        // })
        this.sex = sex;
    }

    
    getAge() {
        return this._age + "岁";
    }

    //原来的做法
    setAge(age) {
        if (typeof age !== "number") {
            throw new TypeError("age property must be a number");
        }
        if (age < 0) {
            age = 0;
        }
        else if (age > 1000) {
            age = 1000;
        }
        this._age = age;
    }

    

    [printName]() {
        console.log(`【种类】：${this.type}`);
        console.log(`【名字】：${this.name}`);
        console.log(`【年龄】：${this.age}`);
        console.log(`【性别】：${this.sex}`);
    }
}

var a = new Animal("狗", "旺财", 3, "男");
