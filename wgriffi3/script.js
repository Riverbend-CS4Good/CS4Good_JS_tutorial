/*
Template format for a listener

const <Button> = document.getElementById('id');
<Button>.addEventListener('input', function() {
});
*/

const colorArea = document.getElementById("color_area");
const changeButton = document.getElementById("color_button");

changeButton.addEventListener("click", () => {
    colorArea.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});
