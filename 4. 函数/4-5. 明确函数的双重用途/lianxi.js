function Person(firstName, lastName) {
    //判断是否是使用new的方式来调用的函数

    // //过去的判断方式
    // if (!(this instanceof Person)) {
    //     throw new Error("该函数没有使用new来调用")
    // }
    console.log(this instanceof Person)
    // if (new.target === undefined) {
    //     throw new Error("该函数没有使用new来调用")
    // }
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`;
}

var obj= new Person('ccc','kkk')
// console.log(obj)

Person('ccc','kkk')