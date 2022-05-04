let slideContainer = document.querySelector('.slideContainer');
let myRange = document.querySelector('#myRange');
let elValue = document.querySelector('#value');
let box = document.querySelector('.box');

elValue.innerHTML = myRange.value;

myRange.oninput = function() {
    elValue.innerHTML = this.value;
}

box.addEventListener('mousemove', () => {
    let x = myRange.value;
    let color = `linear-gradient(90deg, #333 ${x}%, #ccc ${x}%)`
    myRange.style.background = color;
})

myRange.addEventListener('mousemove', () => {
    let x = myRange.value;
    let color = `linear-gradient(90deg, #333 ${x}%, #ccc ${x}%)`
    myRange.style.background = color;
})