const display = document.getElementById('display')
const number = document.querySelectorAll('.items')
const equal = document.getElementById('equal')
number.forEach(num =>{
    num.addEventListener('click', ()=>{
        display.value += num.textContent
    })
})
equal.addEventListener('click', ()=>{
    display.value = eval(String(display.value))
})