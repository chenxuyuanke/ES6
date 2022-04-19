
function createUser(name,sex='男',age=11){
    function sayHello(){
        console.log(`${this.name}:你好啊`)
    }
    return{
        [age]:name,
        age,
        sex,
        sayHello
    }
}
const obj = createUser('chenke','女',12)