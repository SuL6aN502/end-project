// -------------------hi-----------------

let btn1 = document.getElementById('add1');
let btn2 = document.getElementById('add2');
let btn3 = document.getElementById('add3');

let btn1_2 = document.getElementById('add1-2');
let btn2_2 = document.getElementById('add2-2');
let btn3_2 = document.getElementById('add3-2');

btn1.addEventListener('click',()=>{
    btn1.classList.add('onclick');
    btn2.classList.remove('onclick');
    btn3.classList.remove('onclick');
})
btn2.addEventListener('click',()=>{
    btn1.classList.remove('onclick');
    btn2.classList.add('onclick');
    btn3.classList.remove('onclick');
})
btn3.addEventListener('click',()=>{
    btn1.classList.remove('onclick');
    btn2.classList.remove('onclick');
    btn3.classList.add('onclick');
})


btn1_2.addEventListener('click',()=>{
    btn1_2.classList.add('onclick');
    btn2_2.classList.remove('onclick');
    btn3_2.classList.remove('onclick');
})
btn2_2.addEventListener('click',()=>{
    btn1_2.classList.remove('onclick');
    btn2_2.classList.add('onclick');
    btn3_2.classList.remove('onclick');
})
btn3_2.addEventListener('click',()=>{
    btn1_2.classList.remove('onclick');
    btn2_2.classList.remove('onclick');
    btn3_2.classList.add('onclick');
})