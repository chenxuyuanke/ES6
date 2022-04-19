const obj1={
    a:12,
    d:23,
    0:1
}
const obj2={
    d:65,
    c:122
}

const obj=Object.assign({},obj1,obj2)

const arr=Object.getOwnPropertyNames(obj)