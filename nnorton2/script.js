/*
Template format for a listener


const <Button> = document.getElementById('id');
<Button>.addEventListener('input', function() {
});
*/




const counterDisplay = document.getElementById('counterBox');
const changeColorButton = document.getElementById('changecolorBtn');




changeColorButton.addEventListener('click', function() {


 const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
 counterDisplay.style.backgroundColor = randomColor;
});

