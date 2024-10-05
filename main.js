let ac =document.getElementById("ac")
let del =document.getElementById("del")
let inhundered =document.getElementById("inhundered")
let bydivide =document.getElementById("bydivide")
let seven =document.getElementById("seven")
let eight =document.getElementById("eight")
let nine =document.getElementById("nine")
let multi =document.getElementById("multi")
let four =document.getElementById("four")
let five =document.getElementById("five")
let six =document.getElementById("six")
let three =document.getElementById("three")
let two =document.getElementById("two")
let one =document.getElementById("one")
let Pi =document.getElementById("Pi")
let zero =document.getElementById("zero")
let dot =document.getElementById("dot")
let equal =document.getElementById("equal")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")

let result = document.getElementById("result")

zero.addEventListener('click',()=>{

    if (result.textContent === "0") {
        result.innerHTML=0
    } else {
        result.innerHTML+=0
    }
})
one.addEventListener('click',()=>{
    if (result.textContent === "0") {
        result.innerHTML=1
    } else {
        result.innerHTML+=1
    }
   
})
two.addEventListener('click',()=>{
    if (result.textContent === "0") {
        result.innerHTML=2
    } else {
        result.innerHTML+=2
    }
   
})
three.addEventListener('click',()=>{
    if (result.textContent === "0") {
        result.innerHTML=3
    } else {
        result.innerHTML+=3
    }
   
})
four.addEventListener('click',()=>{
    if (result.textContent === "0") {
        result.innerHTML=4
    } else {
        result.innerHTML+=4
    }
   
})
five.addEventListener('click',()=>{
    if (result.textContent === "0") {
        result.innerHTML=5
    } else {
        result.innerHTML+=5
    }
   
})
six.addEventListener('click',()=>{
    if (result.textContent === "0") {
        result.innerHTML=6
    } else {
        result.innerHTML+=6
    }
   
})
seven.addEventListener('click',()=>{
    if (result.textContent === "0") {
        result.innerHTML=7
    } else {
        result.innerHTML+=7
    }
   
})
eight.addEventListener('click',()=>{
    if (result.textContent === "0") {
        result.innerHTML=8
    } else {
        result.innerHTML+=8
    }
   
})
nine.addEventListener('click',()=>{
    if (result.textContent === "0") {
        result.innerHTML=9
    } else {
        result.innerHTML+=9
    }
   
})
ac.addEventListener('click',()=>{
    result.innerHTML="0"
})
Pi.addEventListener('click',()=>{
    result.innerHTML+=3.14
})
del.addEventListener('click', () => {
    let contentresult = result.textContent;
    result.innerHTML = contentresult.slice(0, -1); 
    if (result.textContent === "") {
        result.innerHTML = "0"; 
    }
});
 
dot.addEventListener('click',()=>{
    result.innerHTML+="."
})

plus.addEventListener('click',()=>{
    result.innerHTML+="+"
})
minus.addEventListener('click',()=>{
    result.innerHTML+="-"
})
multi.addEventListener('click',()=>{
    result.innerHTML+="*"
})
bydivide.addEventListener('click',()=>{
    result.innerHTML+="/"
})
inhundered.addEventListener('click',()=>{
    result.innerHTML+="%"
})

equal.addEventListener('click',() =>{
    let rslt  = result.textContent;
    result.innerHTML = eval(rslt);  // This will evaluate the string as a mathematical expression
})