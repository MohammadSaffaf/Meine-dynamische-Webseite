let result=document.querySelector('body')
let rosa = document.getElementById('rosa')
let lila = document.getElementById('lila')
let orange = document.getElementById('orange')
let demo = document.getElementById('demo')
const red = document.getElementById("rot")
const green = document.getElementById("grun")
const blue = document.getElementById("blau")
// let count = 0

// rosa.addEventListener('click', () => result.style.background="pink")
// rosa.addEventListener('click', () => demo.innerHTML="Wir haben die farbe "+ 3 +" geändert")
// lila.addEventListener('click', () => result.style.background="#8800ff")
// lila.addEventListener('click', () => demo.innerHTML="Wir haben die farbe "+ 4 +" geändert")
// orange.addEventListener('click', () => result.style.background="orange")
// orange.addEventListener('click', () => demo.innerHTML="Wir haben die farbe "+ 5 +" geändert")
function andernHintergrund(color) {
    
    result.style.background = color
    demo.innerHTML = `Wir haben die Farbe ${count} mal geändert`
}



function andernRegler() {
    
    result.style.background = `rgb(${red.value},${green.value},${blue.value})`
    demo.innerHTML = `rgb(${red.value},${green.value},${blue.value}) = ${rgbToHex(+red.value, +green.value, +blue.value)}`
}
const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}).join('')

