function getValues() {
    const numbers = [];
    const inps = document.querySelectorAll("input")
    for (let i = 0; i < inps.length; i++) {
        numbers.push(+inps[i].value)
    }
    return numbers;
}

const btn = document.querySelector("button")

btn.onclick = function () {
    const numbers = getValues(); //得到文本框中的所有数字形成的数组
    // Math.max.apply(null,numbers) 已数组的方式,把参数传递给Math.max方法
    spanmax.innerText = Math.max(...numbers)
    spanmin.innerText = Math.min(...numbers)
}