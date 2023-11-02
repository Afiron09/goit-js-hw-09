const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let intervalId = null;
btnStop.disabled = true;
btnStart.addEventListener('click', startChangeColor);
btnStop.addEventListener('click', stopChangeColor);

function startChangeColor() {
    btnStart.disabled = true;
    btnStop.disabled = false;
    intervalId = setInterval(() => { 
        body.style.backgroundColor = getRandomHexColor();
    },1000)
}
function stopChangeColor() {
    btnStart.disabled = false;
    btnStop.disabled = true;
    clearInterval(intervalId)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}