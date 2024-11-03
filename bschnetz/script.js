/*
Template format for a listener


const <Button> = document.getElementById('id');
<Button>.addEventListener('input', function() {
});
*/


const colorDisplay = document.getElementById('colorBox');
const changeColorButton = document.getElementById('changeColorBtn');


function getRandomColor() {
 const letters = '0123456789ABCDEF';
 let color = '#';
 for (let i = 0; i < 6; i++) {
   color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}


changeColorButton.addEventListener('click', function() {
 const newColor = getRandomColor();
 colorDisplay.style.backgroundColor = newColor;
 colorDisplay.textContent = newColor;
});

