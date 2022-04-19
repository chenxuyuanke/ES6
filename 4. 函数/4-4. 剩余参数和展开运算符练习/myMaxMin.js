function getValue(){
    const arr=[]
    const input=Array.from(document.querySelectorAll("div input"))


    input.forEach((i)=>{

        arr.push(+i.value)
    })
    return arr
}

const btn=document.querySelector('button');

btn.onclick=function(){
    
    const arr = getValue()
    spanmax.innerText = Math.max(...arr)
    spanmin.innerText = Math.min(...arr)
}