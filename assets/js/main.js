// let result=document.querySelector('body')
// let rosa = document.getElementById('rosa')
// let lila = document.getElementById('lila')
// let orange = document.getElementById('orange')
// let demo = document.getElementById('demo')
// const red = document.getElementById("rot")
// const green = document.getElementById("grun")
// const blue = document.getElementById("blau")
// let count = 0


// function andernHintergrund(color) {
//     count ++
//     result.style.background = color
//     demo.innerHTML = `Wir haben die Farbe ${count} mal geändert`
// }



// function andernRegler() {
    
//     result.style.background = `rgb(${red.value},${green.value},${blue.value})`
//     demo.innerHTML = `rgb(${red.value},${green.value},${blue.value}) = ${rgbToHex(+red.value, +green.value, +blue.value)}`
// }
// const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
//     const hex = x.toString(16)
//     return hex.length === 1 ? '0' + hex : hex
// }).join('')


// andere möglichkeit für button________________________

// rosa.addEventListener('click', () => result.style.background="pink")
// rosa.addEventListener('click', () => demo.innerHTML="Wir haben die farbe "+ 3 +" geändert")
// lila.addEventListener('click', () => result.style.background="#8800ff")
// lila.addEventListener('click', () => demo.innerHTML="Wir haben die farbe "+ 4 +" geändert")
// orange.addEventListener('click', () => result.style.background="orange")
// orange.addEventListener('click', () => demo.innerHTML="Wir haben die farbe "+ 5 +" geändert")


// GEORG die corector___________
let count = 0
const andernHintergrund = (farbe) => {
    count++
    document.querySelector('body').style.background= farbe
    document.getElementById('demo').innerHTML= `Wir haben die Farbe ${count} mal geändert`
}
let red = 255
let green = 255
let blue = 255
const andernRegler = () => {
    if (event.target.id === "rot") {
        red = event.target.value
    } else if (event.target.id === "grun") {
        green = event.target.value
    } else if (event.target.id === "blau") {
        blue = event.target.value
    }
    // console.log("rot:", red, "Grün:", green, "Blau", blue);
    const farbe = `rgb(${red},${green},${blue})`
    // console.log(farbe);
    document.querySelector('body').style.background = farbe
    document.getElementById('demo').innerHTML = farbe + ", #" + (red * 1).toString(16) + (green * 1).toString(16) + (blue * 1).toString(16)
}