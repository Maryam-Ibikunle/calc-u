const display = document.getElementById('display')
const number = document.querySelectorAll('.items')
const equal = document.getElementById('equal')
const clear = document.getElementById('clear')

display.addEventListener("keydown", e => e.preventDefault());
number.forEach(num =>{
    num.addEventListener('click', ()=>{
        display.value += num.textContent
    })
})
equal.addEventListener('click', ()=>{
    try{
    const answer = Function("return " + String(display.value)
    )();
    console.log(answer)
    display.value = String(answer)
    equal.disabled = false
}catch (error){
    setTimeout(()=>{
        display.value = ""
    },2000)
    display.value = "insert an operation before a bracket"
}})
clear.addEventListener('click', ()=>{
    display.value = ""
})