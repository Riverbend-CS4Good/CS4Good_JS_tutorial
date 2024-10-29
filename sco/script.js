// script.js

function getRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

function changeColor() {
    const colorBar = document.getElementById('colorBar');
    
    colorBar.style.backgroundColor = getRandomColor();
}


document.getElementById('changeColorButton').addEventListener('click', changeColor);
