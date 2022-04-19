console.log(NaN === NaN); // false
console.log(+0 === -0);  // true

console.log(Object.is(NaN, NaN))
console.log(Object.is(+0, -0))
console.log(Object.is({a:1},{a:1}))

let obj1={a:1}

let obj2=obj1

console.log(Object.is(obj1,obj2))
