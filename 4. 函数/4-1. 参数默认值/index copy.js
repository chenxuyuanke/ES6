function sum(a, b = 1, c = 2) {
    return a + b + c;
}


function sum(a, b, c) {
    b = b === undefined && 1
    c = c === undefined && 2
    return a + b + c;
}

console.log(sum(10, undefined, undefined))
console.log(sum(11))
console.log(sum(1, undefined, 5))