

function A(a, b) {
    return {
        a,
        b,
        // print() {

        // },
        print: function () {
            console.log(this.a)
        }
    }
}


const user = A(1, '2')
// console.log(A(1, '2'))


const prop1 = "name2";
const prop2 = "age2";
const prop3 = "sayHello2";

const newUser = {
    [prop1]: 'chenke',
    [prop2]: 13,
    [prop3]() {
        console.log(this[prop1])
    }
}
newUser[prop3]()
console.log(newUser)
