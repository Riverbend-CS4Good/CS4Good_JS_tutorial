/*
Template format for a listener

const <Button> = document.getElementById('id');
<Button>.addEventListener('input', function() {
});
*/

let color = "#000000";
const colorBox = document.getElementById('colorBox');
const button = document.getElementById('changeBtn');
button.addEventListener('click', function () {
    color = "#";
    let num = Math.floor(Math.random() * (16 ** 6));
    color += num.toString(16);
    colorBox.style.backgroundColor = color;
})