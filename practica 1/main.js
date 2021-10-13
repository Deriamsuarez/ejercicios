let btnCenter = document.querySelector('#center');
let btnRight = document.querySelector('#right');
let btnLeft = document.querySelector('#left');
var color1 = "";
var color2 = "";

btnCenter.style.backgroundColor = "goldenrod"
btnRight.style.backgroundColor = "darkgreen"
btnLeft.style.backgroundColor = "darkred"

btnRight.addEventListener('click', () => btnRight.style.backgroundColor = changeColor())
btnCenter.addEventListener('click', () => btnCenter.style.backgroundColor = changeColor())
btnLeft.addEventListener('click', () => btnLeft.style.backgroundColor = 'color');

function changeColor() {

    if (color1 === "") {
        color1 = btnRight.style.backgroundColor
        console.log(color1)

        if (color2 = "") {
            color2 = btnCenter.style.backgroundColor
            console.log("Hola mundo")
        }
        return color1;
    } else {
        console.log("Hay un error")

    }
}
